import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  isBlue: boolean = true;
  isTrue: boolean = true;
  @Output() titleChanged = new EventEmitter();
  @ViewChild('input') input: Renderer2;
  @ViewChild('input') input2: ElementRef;
  @ViewChildren('input') inputArr!: QueryList<any>;

  @ContentChild('p') p: TemplateRef<any>;
  @ContentChild('child', { read: ElementRef }) child: any;
  @ContentChild(Child2Component, { read: ElementRef }) child2: Child2Component;
  @ContentChildren('p') pArr: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.p);
    console.log(this.child);
    console.log(this.child2);
    console.log(this.pArr);
  }

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    console.log(event.target.value);
    this.titleChanged.emit(event.target.value);
    event.target.value = '';
  }

  ngAfterViewInit(): void {
    // console.log(this.inputArr);
  }
}
