import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.eleRef);
    console.log(this.eleRef.nativeElement);
    // console.log(this.eleRef.nativeElement.value);
  }

  @HostListener('keyup') onCheck() {
    if (
      this.eleRef.nativeElement.value != 0 &&
      this.eleRef.nativeElement.value.length == 1
    ) {
      this.eleRef.nativeElement.value = '';
    }
  }
}
