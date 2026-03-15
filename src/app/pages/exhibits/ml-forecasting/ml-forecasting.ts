import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { environment } from '../../../../environments/environment';

interface PredictionMetrics {
  rmse: number;
  mae: number;
  r2: number;
}

interface ModelPrediction {
  modelName: string;
  predictions: number[];
  predictionDates: string[];
  metrics: PredictionMetrics;
  featureImportance?: { feature: string; importance: number }[];
}

interface HistoricalPrice {
  date: string;
  close: number;
  volume: number;
}

@Component({
  selector: 'app-ml-forecasting',
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './ml-forecasting.html',
  styleUrl: './ml-forecasting.scss',
})
export class MlForecastingComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  selectedSymbol = 'AAPL';
  predictionHorizon = 5;
  isLoading = false;
  errorMessage = '';

  private apiUrl = environment.apis.mlForecasting;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  availableSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA'];

  // Mock historical data
  historicalPrices: HistoricalPrice[] = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2024, 2, i + 1).toISOString().split('T')[0],
    close: 175 + Math.sin(i / 5) * 10 + Math.random() * 5,
    volume: 50000000 + Math.random() * 20000000
  }));

  // Mock predictions
  linearRegression: ModelPrediction = {
    modelName: 'Linear Regression',
    predictions: [178.5, 179.2, 180.1, 181.3, 182.0],
    predictionDates: ['2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05'],
    metrics: {
      rmse: 2.34,
      mae: 1.89,
      r2: 0.87
    }
  };

  randomForest: ModelPrediction = {
    modelName: 'Random Forest',
    predictions: [177.8, 178.9, 179.5, 180.2, 181.1],
    predictionDates: ['2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05'],
    metrics: {
      rmse: 1.92,
      mae: 1.54,
      r2: 0.91
    },
    featureImportance: [
      { feature: 'close_lag_1', importance: 0.35 },
      { feature: 'sma_20', importance: 0.22 },
      { feature: 'rsi', importance: 0.18 },
      { feature: 'volume_ma', importance: 0.12 },
      { feature: 'close_lag_5', importance: 0.08 },
      { feature: 'volatility', importance: 0.05 }
    ]
  };

  bestModel = 'random_forest';

  // API endpoint examples
  apiEndpoints = [
    {
      method: 'GET',
      path: '/companies/search',
      description: 'Search for companies by symbol or name',
      example: '/companies/search?query=AAPL&search_type=symbol'
    },
    {
      method: 'GET',
      path: '/historical/{symbol}',
      description: 'Fetch historical stock price data',
      example: '/historical/AAPL?years=2'
    },
    {
      method: 'POST',
      path: '/predict',
      description: 'Generate ML predictions for a stock',
      example: '{ "symbol": "AAPL", "horizon": 5, "include_features": true }'
    },
    {
      method: 'GET',
      path: '/health',
      description: 'API health check endpoint',
      example: '/health'
    }
  ];

  // Chart configuration
  predictionChartData: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Price ($)'
          }
        }
      }
    }
  };

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const numHistorical = 10;
    const numPredictions = this.linearRegression.predictions.length;

    const historicalLabels = this.historicalPrices.slice(-numHistorical).map(p => p.date);
    const historicalData = this.historicalPrices.slice(-numHistorical).map(p => p.close);

    const allLabels = [...historicalLabels, ...this.linearRegression.predictionDates];

    // Pad predictions with nulls for historical period, and historical with nulls for prediction period
    const lrPredictions = [...Array(numHistorical).fill(null), ...this.linearRegression.predictions];
    const rfPredictions = [...Array(numHistorical).fill(null), ...this.randomForest.predictions];
    const historicalPadded = [...historicalData, ...Array(numPredictions).fill(null)];

    // Create new data object to trigger change detection
    this.predictionChartData = {
      ...this.predictionChartData,
      data: {
        labels: allLabels,
        datasets: [
          {
            label: 'Historical',
            data: historicalPadded,
            borderColor: '#4285f4',
            backgroundColor: 'rgba(66, 133, 244, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 3
          },
          {
            label: 'Linear Regression',
            data: lrPredictions,
            borderColor: '#ea4335',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 5
          },
          {
            label: 'Random Forest',
            data: rfPredictions,
            borderColor: '#34a853',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 5
          }
        ]
      }
    };

    // Force change detection and chart update
    this.cdr.detectChanges();
    setTimeout(() => this.chart?.update(), 0);
  }

  getMetricClass(metric: string, value: number): string {
    if (metric === 'r2') {
      return value > 0.85 ? 'positive' : value > 0.7 ? 'neutral' : 'negative';
    }
    return '';
  }

  generatePredictions() {
    this.isLoading = true;
    this.errorMessage = '';

    const request = {
      symbol: this.selectedSymbol,
      horizon: this.predictionHorizon,
      include_features: true
    };

    this.http.post<any>(`${this.apiUrl}/predict`, request).subscribe({
      next: (response) => {
        console.log('API Response:', response);

        try {
          // Map API response to component data
          this.linearRegression = {
            modelName: 'Linear Regression',
            predictions: response.linear_regression.predictions,
            predictionDates: response.linear_regression.prediction_dates,
            metrics: {
              rmse: response.linear_regression.metrics.rmse,
              mae: response.linear_regression.metrics.mae,
              r2: response.linear_regression.metrics.r2_score
            }
          };

          this.randomForest = {
            modelName: 'Random Forest',
            predictions: response.random_forest.predictions,
            predictionDates: response.random_forest.prediction_dates,
            metrics: {
              rmse: response.random_forest.metrics.rmse,
              mae: response.random_forest.metrics.mae,
              r2: response.random_forest.metrics.r2_score
            },
            featureImportance: response.random_forest.feature_importance
              ? Object.entries(response.random_forest.feature_importance).map(([feature, importance]) => ({
                  feature,
                  importance: importance as number
                })).sort((a, b) => b.importance - a.importance)
              : this.randomForest.featureImportance
          };

          this.bestModel = response.best_model;

          // Fetch historical data for chart (non-blocking)
          this.fetchHistoricalData();
        } catch (e) {
          console.error('Error mapping response:', e);
          this.errorMessage = 'Error processing API response';
        }

        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Loading complete, isLoading:', this.isLoading);
      },
      error: (error) => {
        console.error('Prediction error:', error);
        this.errorMessage = error.error?.detail || 'Failed to generate predictions. Is the API running?';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Error handled, isLoading:', this.isLoading);
      }
    });
  }

  private fetchHistoricalData() {
    this.http.get<any>(`${this.apiUrl}/historical/${this.selectedSymbol}?years=1`).subscribe({
      next: (response) => {
        this.historicalPrices = response.prices.slice(-30).map((p: any) => ({
          date: p.date,
          close: p.close,
          volume: p.volume
        }));
        this.initializeChart();
      },
      error: (error) => {
        console.error('Historical data error:', error);
        // Keep existing mock data for chart if API fails
        this.initializeChart();
      }
    });
  }
}
