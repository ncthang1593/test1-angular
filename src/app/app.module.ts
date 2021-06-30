import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './directive/test.directive';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PasswordStrengthDirective } from './directive/password-strength.directive';
import { TestPipePipe } from './pipe/test-pipe.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestComponent,
    FormComponent,
    PasswordStrengthDirective,
    TestPipePipe,
    ReactiveFormComponent,
    ChildComponent,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
