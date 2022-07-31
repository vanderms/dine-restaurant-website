import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styles: [],
})
export class MenuCardComponent implements OnInit {
  @Input() thumbnail: string = '';
  constructor() {}

  ngOnInit(): void {}

  getSrcset(viewport: 'desktop-tablet' | 'mobile'): string {
    return (
      `assets/homepage/${this.thumbnail}-${viewport}.jpg 1x,` +
      `assets/homepage/${this.thumbnail}-${viewport}@2x.jpg 2x`
    );
  }
}
