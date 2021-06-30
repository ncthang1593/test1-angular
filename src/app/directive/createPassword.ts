import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length > 5) {
      return { pasword: true };
    }
  };
}
