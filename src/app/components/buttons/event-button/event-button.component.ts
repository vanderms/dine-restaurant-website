import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-button',
  templateUrl: './event-button.component.html',
  styles: [],
})
export class EventButtonComponent implements OnInit {
  @Input() value: number = 0;
  @Input() active: boolean = false;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit(this.value);
  }
}
