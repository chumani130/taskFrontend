import { FormGroup } from "@angular/forms"

export const confirmPasswordValidator = (ControlName: string, ControlNameToMatch: string) => {
    return (FormGroup: FormGroup)=> {
        let control = FormGroup.controls[ControlName];
        let controlToMatch = FormGroup.controls[ControlNameToMatch];
        if(controlToMatch.errors && !controlToMatch.errors['confirmPasswordValidator']) {
            return;
        }
        if(control.value!== controlToMatch.value) {
            controlToMatch.setErrors({confirmPasswordValidator : true})
        }
        else {
            controlToMatch.setErrors(null);
        }
    }
} 