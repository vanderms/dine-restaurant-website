import { Component, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styles: [],
})
export class BookingSectionComponent implements OnInit {
  titleId: string = '';

  constructor(private uniqueId: UniqueIdService) {}

  ngOnInit(): void {
    this.titleId = this.uniqueId.generate();
  }
}
