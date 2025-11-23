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
    { name: 'Passion', value: '"development"' },
    { name: 'Creativity', value: '"unlimited"' },
    { name: 'Experience', value: '"growing"' }
  ];

  private currentIndex = 0;
  private timeouts: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.runAnimation();
  }

  ngOnDestroy() {
    // Clear all timeouts
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  }

  private runAnimation() {
    let delay = 0;

    const animateCycle = () => {
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
        this.currentIndex = (this.currentIndex + 1) % this.properties.length;
        this.runAnimation();
      }, delay + 300);
      this.timeouts.push(timeout3);
    };

    animateCycle();
  }
}