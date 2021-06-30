import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { distinct, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { textChangeRangeIsUnchanged } from 'typescript';
import { createPassword } from '../directive/createPassword';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  API = 'https://jsonplaceholder.typicode.com/posts';
  observable$ = from([1, 2, 3, 4, 5]);
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.http.get(this.API, { observe: 'response' }).subscribe((data) => {
    //   console.log(data);
    // });
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
  }

  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, createPassword()],
    }),
    password: new FormControl(''),
  });
  get email() {
    return this.reactiveForm.controls.email
  }
  onSubmitReactive() {
    console.log(this.reactiveForm);
    console.log(this.email);

  }

  valueChange() {
    this.reactiveForm.valueChanges.subscribe(console.log);
  }

  selectForm = this.fb.group({
    test: ['', Validators.required],
    food: ['', Validators.required],
  });

  submitSelect(form) {
    console.log(form);
    console.log(form.value);
  }
}
