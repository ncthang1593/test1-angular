import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, timer } from 'rxjs';
import {
  auditTime,
  concatAll,
  debounceTime,
  delay,
  map,
  mergeAll,
  switchAll,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form, email) {
    console.log(form.value);
    console.log(form);
    console.log(email);
  }

  onClick(e) {}

  handleChangeInput(event: any, form) {
    // of(valueInput).pipe(delay(1000)).subscribe(console.log)
    // form.controls.email.valueChanges.pipe().subscribe(console.log)

  }
}
