import { Component, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-call-to-action-section',
  templateUrl: './call-to-action-section.component.html',
  styles: [],
})
export class CallToActionSectionComponent implements OnInit {
  titleId: string = '';

  constructor(private uniqueId: UniqueIdService) {}

  ngOnInit(): void {
    this.titleId = this.uniqueId.generate();
  }

  getSrcset(viewport: 'desktop' | 'tablet' | 'mobile'): string {
    return (
      `assets/homepage/ready-bg-${viewport}.jpg 1x,` +
      `assets/homepage/ready-bg-${viewport}@2x.jpg 2x`
    );
  }
}
