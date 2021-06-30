import { Component, ContentChild, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-angular';
  @ViewChild(ChildComponent) child: ChildComponent;
  @ContentChild(ChildComponent) childContent: ChildComponent;

  onChange(e: string) {
    console.log(e);
    this.title = e;
  }

  ngAfterViewInit(): void {}
}
