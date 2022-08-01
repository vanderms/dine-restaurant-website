import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styles: [],
})
export class BookingFormComponent implements OnInit {
  bookingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    day: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    minutes: new FormControl('', Validators.required),
    period: new FormControl('AM', Validators.required),
    people: new FormControl('4', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: SubmitEvent) {
    if (this.bookingForm.status === 'INVALID') {
      this.bookingForm.markAllAsTouched();
      event.preventDefault();
    } else {
      console.log(this.bookingForm.value);
      this.bookingForm.reset();
    }
  }

  addPerson(): void {
    this.bookingForm.setValue({
      ...this.bookingForm.value,
      people: `${+this.bookingForm.value.people + 1}`,
    });
  }

  removePerson(): void {
    this.bookingForm.setValue({
      ...this.bookingForm.value,
      people: `${+this.bookingForm.value.people - 1}`,
    });
  }

  isNameNotFilled(): boolean {
    const name = this.bookingForm.get('name');
    return (
      name?.invalid &&
      (name?.dirty || name?.touched) &&
      name?.errors?.['required']
    );
  }

  isValidEmail() {
    const email = this.bookingForm.get('email');
    return (
      email?.invalid &&
      (email?.dirty || email?.touched) &&
      email?.errors?.['email']
    );
  }

  isEmailNotFilled() {
    const email = this.bookingForm.get('email');
    return (
      email?.invalid &&
      (email?.dirty || email?.touched) &&
      email?.errors?.['required']
    );
  }

  isDateIncomplete() {
    const day = this.bookingForm.get('day');
    const year = this.bookingForm.get('year');
    const month = this.bookingForm.get('month');
    return (
      (day?.invalid || year?.invalid || month?.invalid) &&
      (day?.dirty || day?.touched) &&
      (year?.dirty || year?.touched) &&
      (month?.dirty || month?.touched)
    );
  }

  isTimeIncomplete() {
    const hour = this.bookingForm.get('hour');
    const minutes = this.bookingForm.get('minutes');
    const period = this.bookingForm.get('period');
    return (
      (hour?.invalid || minutes?.invalid || period?.invalid) &&
      (hour?.dirty || hour?.touched) &&
      (minutes?.dirty || minutes?.touched) &&
      (period?.dirty || period?.touched)
    );
  }

  isPeopleNotFilled() {
    const people = this.bookingForm.get('people');
    return people?.invalid && (people?.dirty || people?.touched);
  }
}
