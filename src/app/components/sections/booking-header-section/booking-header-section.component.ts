import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-header-section',
  templateUrl: './booking-header-section.component.html',
  styles: [],
})
export class BookingHeaderSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getSrcset(viewport: 'desktop' | 'tablet' | 'mobile'): string {
    return (
      `assets/booking/hero-bg-${viewport}.jpg 1x,` +
      `assets/booking/hero-bg-${viewport}@2x.jpg 2x`
    );
  }
}
