import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Validation {
    static matchPassword(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);

            if (checkControl?.errors && !checkControl.errors['matching']) {
                return null;
            }

            if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }

    static phoneValidation(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (value == null || value === '') {
            }
            const isNumeric = /^[0-9]+$/.test(value);
            return isNumeric ? null : { onlyNumbers: true }
        };
    }

    static rutValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const rut = control.value;
    
            if (rut.length < 8 || rut.length > 10) {
                return { invalidRut: true };
            }
    

            const body = rut.slice(0, -1);
            const dv = rut.slice(-1).toLowerCase();
    

            let suma = 0;
            let multiplo = 2;
    
            for (let i = body.length - 1; i >= 0; i--) {
                suma += parseInt(body[i]) * multiplo;
                multiplo = multiplo < 7 ? multiplo + 1 : 2;
            }
    
            const dvEsperado = 11 - (suma % 11);
            const dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'k' : dvEsperado.toString();
    

            return dvCalculado === dv ? null : { invalidRut: true };
        };
    }
    
}
