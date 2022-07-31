import { Component, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-our-menu-section',
  templateUrl: './our-menu-section.component.html',
  styles: [],
})
export class OurMenuSectionComponent implements OnInit {
  titleId: string = '';

  constructor(private uid: UniqueIdService) {}

  ngOnInit(): void {
    this.titleId = this.uid.generate();
  }
}
