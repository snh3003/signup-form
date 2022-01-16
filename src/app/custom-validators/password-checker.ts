import { FormGroup } from '@angular/forms';

export const PasswordChecker = (controlName: string, CompareControlName: string) => {
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[CompareControlName];
        if(password.value !== confirmPassword.value) {
            confirmPassword.setErrors({MatchPassword: true});
        } else {
            confirmPassword.setErrors(null);
        }
    }
}