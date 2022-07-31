import { Component, OnInit } from '@angular/core';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styles: [],
})
export class EventsSectionComponent implements OnInit {
  titleId: string = '';
  current: 0 | 1 | 2 = 0;
  events = [
    {
      title: 'Family Gathering',
      description: `We love catering for entire families. So please bring everyone along for a special meal with your 
  loved ones. We'll provide a memorable experience for all.`,
      thumbnail: 'family-gathering',
    },
    {
      title: 'Special Events',
      description: `Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. 
  We'll be sure to mark your special date with an unforgettable meal.`,
      thumbnail: 'special-events',
    },
    {
      title: 'Social Events',
      description: `Are you looking to have a larger social event? No problem! We're more than happy to cater for big 
  parties. We'll work with you to make your event a hit with everyone.`,
      thumbnail: 'social-events',
    },
  ];

  constructor(private uid: UniqueIdService) {}

  ngOnInit(): void {
    this.titleId = this.uid.generate();
  }

  getSrcset(viewport: 'desktop' | 'tablet' | 'mobile'): string {
    return (
      `assets/homepage/${
        this.events[this.current].thumbnail
      }-${viewport}.jpg 1x,` +
      `assets/homepage/${
        this.events[this.current].thumbnail
      }-${viewport}@2x.jpg 2x`
    );
  }

  onClick(value: number) {
    this.current = (Math.abs(value) % 3) as 0 | 1 | 2;
  }
}
