import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  imports: [CommonModule],
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
})
export class CodeBlockComponent implements OnInit, OnDestroy {
  currentProperty = '';
  currentEquals = '';
  currentValue = '';

  private properties = [
    { name: 'Stack', value: '".NET"' },
    { name: 'Frontend', value: '"Angular"' },
    { name: 'Backend', value: '"C#"' },
    { name: 'Cloud', value: '"Azure"' },
    { name: 'Code', value: '"clean"' },
    { name: 'Design', value: '"responsive"' },
    { name: 'Solution', value: '"scalable"' },
    { name: 'Tests', value: '"automated"' },
    { name: 'CI/CD', value: '"automated"' },
    { name: 'Data', value: '"SQL"' },
  ];

  private currentIndex = 0;
  private usedIndices: number[] = [];
  private timeouts: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.runAnimation();
  }

  ngOnDestroy() {
    // Clear all timeouts
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  }

  private getNextIndex(): number {
    // If we've used all indices, reset the used list
    if (this.usedIndices.length === this.properties.length) {
      this.usedIndices = [];
    }

    // Get available indices
    const availableIndices = this.properties
      .map((_, index) => index)
      .filter(index => !this.usedIndices.includes(index));

    // Pick a random index from available ones
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    this.usedIndices.push(randomIndex);

    return randomIndex;
  }

  private runAnimation() {
    let delay = 0;

    const animateCycle = () => {
      this.currentIndex = this.getNextIndex();
      const property = this.properties[this.currentIndex];

      // Reset all values
      this.currentProperty = '';
      this.currentEquals = '';
      this.currentValue = '';

      // Type out property name
      for (let i = 0; i <= property.name.length; i++) {
        const timeout = setTimeout(() => {
          this.currentProperty = property.name.substring(0, i);
          this.cdr.detectChanges();
        }, delay);
        this.timeouts.push(timeout);
        delay += 50;
      }

      // Type out equals
      const timeout1 = setTimeout(() => {
        this.currentEquals = ' = ';
        this.cdr.detectChanges();
      }, delay);
      this.timeouts.push(timeout1);
      delay += 50;

      // Type out value
      for (let i = 0; i <= property.value.length + 1; i++) {
        const timeout = setTimeout(() => {
          this.currentValue = property.value.substring(0, i) + (i > property.value.length ? ';' : '');
          this.cdr.detectChanges();
        }, delay);
        this.timeouts.push(timeout);
        delay += 50;
      }

      // Wait
      delay += 1000;

      // Delete value
      for (let i = property.value.length + 1; i >= 0; i--) {
        const timeout = setTimeout(() => {
          this.currentValue = property.value.substring(0, i) + (i > property.value.length ? ';' : '');
          this.cdr.detectChanges();
        }, delay);
        this.timeouts.push(timeout);
        delay += 30;
      }

      // Delete equals
      const timeout2 = setTimeout(() => {
        this.currentEquals = '';
        this.cdr.detectChanges();
      }, delay);
      this.timeouts.push(timeout2);
      delay += 30;

      // Delete property name
      for (let i = property.name.length; i >= 0; i--) {
        const timeout = setTimeout(() => {
          this.currentProperty = property.name.substring(0, i);
          this.cdr.detectChanges();
        }, delay);
        this.timeouts.push(timeout);
        delay += 30;
      }

      // Move to next and repeat
      const timeout3 = setTimeout(() => {
        this.runAnimation();
      }, delay + 300);
      this.timeouts.push(timeout3);
    };

    animateCycle();
  }
}
