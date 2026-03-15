import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

// DTOs - Data Transfer Objects that match backend
interface StockSearchResultDto {
  symbol: string;
  companyName: string;
  currentPrice: number;
  changePercent: number;
  sparklineData?: number[];
}

interface PortfolioOptimizationResultDto {
  selectedStocks: string[];
  weights: { symbol: string; percentage: number }[];
  metrics: {
    expectedReturn: number;
    portfolioRisk: number;
    sharpeRatio: number;
  };
  efficientFrontierPoint: {
    risk: number;
    return: number;
  };
}

interface StockAttributionDto {
  symbol: string;
  riskPercentage: number;
}

interface FactorAttributionDto {
  marketRisk: number;
  sectorRisk: number;
  idiosyncraticRisk: number;
}

interface RiskAttributionDto {
  stockAttributions: StockAttributionDto[];
  factorAttributions: FactorAttributionDto;
}

interface VaRResultDto {
  method: 'Historical' | 'Parametric' | 'Monte Carlo';
  confidence: number;
  value: number;
  cvar: number;
}

interface BacktestResultDto {
  strategy: string;
  totalReturn: number;
  annualReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  winRate: number;
  totalTrades: number;
}

interface CorrelationMatrixDto {
  symbols: string[];
  matrix: number[][];
}

@Component({
  selector: 'app-stock-simulation',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './stock-simulation.html',
  styleUrl: './stock-simulation.scss',
})
export class StockSimulationComponent {
  showTechnicalDocs = false;
  activeTab = 'architecture';
  activeSection = 'architecture';

  technicalDocsHtml: SafeHtml | null = null;

  // Mock data using DTOs
  searchResults: StockSearchResultDto[] = [];
  selectedStocks: string[] = ['AAPL', 'MSFT', 'GOOGL'];

  portfolioOptimization: PortfolioOptimizationResultDto = {
    selectedStocks: ['AAPL', 'MSFT', 'GOOGL'],
    weights: [
      { symbol: 'AAPL', percentage: 35 },
      { symbol: 'MSFT', percentage: 40 },
      { symbol: 'GOOGL', percentage: 25 }
    ],
    metrics: {
      expectedReturn: 12.8,
      portfolioRisk: 15.2,
      sharpeRatio: 0.84
    },
    efficientFrontierPoint: {
      risk: 15.2,
      return: 12.8
    }
  };

  riskAttribution: RiskAttributionDto = {
    stockAttributions: [
      { symbol: 'MSFT', riskPercentage: 45 },
      { symbol: 'AAPL', riskPercentage: 35 },
      { symbol: 'GOOGL', riskPercentage: 20 }
    ],
    factorAttributions: {
      marketRisk: 78,
      sectorRisk: 15,
      idiosyncraticRisk: 7
    }
  };

  varResult: VaRResultDto = {
    method: 'Historical',
    confidence: 95,
    value: 2450,
    cvar: 3200
  };

  backtestResult: BacktestResultDto = {
    strategy: 'Moving Average Crossover',
    totalReturn: 45.2,
    annualReturn: 22.1,
    sharpeRatio: 1.24,
    maxDrawdown: -18.5,
    winRate: 68,
    totalTrades: 47
  };

  correlationMatrix: CorrelationMatrixDto = {
    symbols: ['AAPL', 'MSFT', 'GOOGL'],
    matrix: [
      [1.00, 0.65, 0.42],
      [0.65, 1.00, 0.58],
      [0.42, 0.58, 1.00]
    ]
  };

  // Chart data for efficient frontier
  riskFreeRate = 3.5;
  
  efficientFrontierData = (() => {
    // Generate hyperbolic curve for efficient frontier
    const frontierPoints = Array.from({length: 40}, (_, i) => {
      const risk = 5 + i * 0.5; // Risk from 5% to 25%
      // More realistic hyperbolic relationship
      const a = 2; // Minimum return asymptote
      const b = 200; // Controls curvature
      const returnValue = a + b / (risk + 10);
      return { risk, return: returnValue };
    });
    
    // Find the tangent portfolio (maximize Sharpe ratio)
    let maxSharpe = -Infinity;
    let tangentPortfolio = frontierPoints[0];
    
    for (const point of frontierPoints) {
      const sharpe = (point.return - this.riskFreeRate) / point.risk;
      if (sharpe > maxSharpe) {
        maxSharpe = sharpe;
        tangentPortfolio = point;
      }
    }
    
    // Capital Market Line: from risk-free rate through tangent portfolio
    // Extend line beyond tangent point for visualization
    const cmlSlope = (tangentPortfolio.return - this.riskFreeRate) / tangentPortfolio.risk;
    const capitalMarketLine = [
      { risk: 0, return: this.riskFreeRate },
      tangentPortfolio,
      { risk: 25, return: this.riskFreeRate + cmlSlope * 25 } // Extended point
    ];
    
    return {
      frontierPoints,
      currentPortfolio: { risk: 15.2, return: 10.8 },
      individualAssets: [
        { symbol: 'AAPL', risk: 22.5, return: 12.2 },
        { symbol: 'MSFT', risk: 18.8, return: 11.5 },
        { symbol: 'GOOGL', risk: 24.2, return: 10.8 }
      ],
      capitalMarketLine,
      tangentPortfolio
    };
  })();

  // Mock equity curve for backtesting
  equityCurve = Array.from({length: 252}, (_, i) => ({
    date: new Date(2023, 0, 1 + i),
    value: 100000 * (1 + (i / 252) * 0.22 + Math.sin(i / 40) * 0.05)
  }));

  // Chart configurations - initialize as empty, will be set in ngOnInit
  efficientFrontierChartData: ChartConfiguration<'scatter'> = {
    type: 'scatter',
    data: {
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.dataset.label || '';

              const x = context.parsed.x?.toFixed(1);
              const y = context.parsed.y?.toFixed(1);
              return `${label}: Risk ${x}%, Return ${y}%`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Risk (Standard Deviation %)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Expected Return %'
          }
        }
      }
    }
  };

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    // Initialize chart data
    this.initializeCharts();
    
    // Load technical docs HTML
    try {
      const response = await fetch('/assets/technical-docs.html');
      const html = await response.text();
      this.technicalDocsHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    } catch (error) {
      console.error('Failed to load technical docs', error);
    }
  }

  private initializeCharts() {
    // Set up efficient frontier chart data
    this.efficientFrontierChartData.data = {
      datasets: [
        {
          label: 'Efficient Frontier',
          data: this.efficientFrontierData.frontierPoints.map(p => ({x: p.risk, y: p.return})),
          borderColor: '#4285f4',
          backgroundColor: '#4285f4',
          showLine: true,
          fill: false,
          pointRadius: 0,
          borderWidth: 3,
          tension: 0.4 // Smooth curve
        },
        {
          label: 'Capital Market Line',
          data: this.efficientFrontierData.capitalMarketLine.map(p => ({x: p.risk, y: p.return})),
          borderColor: '#FF6B6B',
          backgroundColor: '#FF6B6B',
          showLine: true,
          fill: false,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 5] // Dashed line
        },
        {
          label: 'Tangent Portfolio',
          data: [{
            x: this.efficientFrontierData.tangentPortfolio.risk,
            y: this.efficientFrontierData.tangentPortfolio.return
          }],
          backgroundColor: '#FF6B6B',
          borderColor: '#fff',
          borderWidth: 2,
          pointRadius: 8,
          pointHoverRadius: 10
        },
        {
          label: 'Individual Assets',
          data: this.efficientFrontierData.individualAssets.map(a => ({
            x: a.risk,
            y: a.return
          })),
          backgroundColor: ['#ea4335', '#fbbc05', '#34a853'],
          pointRadius: 8,
          pointHoverRadius: 10
        },
        {
          label: 'Current Portfolio',
          data: [{
            x: this.efficientFrontierData.currentPortfolio.risk,
            y: this.efficientFrontierData.currentPortfolio.return
          }],
          backgroundColor: '#9c27b0',
          pointRadius: 10,
          pointHoverRadius: 12,
          borderColor: '#fff',
          borderWidth: 2
        }
      ]
    };
  }
}
