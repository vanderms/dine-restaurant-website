import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private counter: number = 0;
  constructor() {}

  generate(): string {
    this.counter += 1;
    return `r:${this.counter}`;
  }
}
