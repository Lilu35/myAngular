import {FormGroup, ValidationErrors} from "@angular/forms";

export function PasswordMatchValidator(form:FormGroup):ValidationErrors|null {
  const password = form.controls.password;
  const confirm = form.controls.confirm;
  if (!password || !confirm){
    return null;
  }
  if (confirm.errors && !confirm.errors.passwordMatch){
    return null;
  }
  return password.value != confirm.value?{passwordMatch:true}:null;
}
