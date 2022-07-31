import { Component, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styles: [],
})
export class FeaturesSectionComponent implements OnInit {
  titleId: string = '';

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    this.titleId = this.uniqueIdService.generate();
  }
}
