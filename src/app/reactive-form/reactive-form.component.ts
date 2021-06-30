import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: this.fb.control('', {
      validators: [Validators.required],
    }),
    lists: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    // console.log(this.form);
  }

  get lists() {
    return this.form.controls.lists as FormArray;
  }

  addList() {
    console.log(this.lists);
    console.log(this.lists.controls);

    this.lists.push(this.fb.control(''));
  }

  remove(i) {
    console.log(i);
    console.log(this.lists.at(i))
    this.lists.clear()
    // this.lists.removeAt(i)
  }
}
