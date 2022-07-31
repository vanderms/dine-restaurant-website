import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styles: [],
})
export class FeatureCardComponent implements OnInit {
  @Input() image: string = '';

  constructor() {}

  ngOnInit(): void {}

  getSrcset(viewport: 'desktop' | 'tablet' | 'mobile'): string {
    return (
      `assets/homepage/${this.image}-${viewport}.jpg 1x,` +
      `assets/homepage/${this.image}-${viewport}@2x.jpg 2x`
    );
  }
}
