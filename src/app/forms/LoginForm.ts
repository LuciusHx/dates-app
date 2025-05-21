import { FormGroup, Validators, FormControl } from '@angular/forms';

export function LoginFormGroup(): FormGroup {
    return new FormGroup({

        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8), 
        ])
        
    })
}