import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styles: [],
})
export class ButtonWrapperComponent implements OnInit {
  @Input() type: 'dark' | 'white' = 'white';

  constructor() {}

  ngOnInit(): void {}
}
