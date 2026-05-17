import { AbstractControl, ValidationErrors } from "@angular/forms";


export function commonPasswordValidator(control :AbstractControl)
                                  :ValidationErrors | null
{
     let commonPasswords=['1234','password','123456','1234','Password@123','User@123']
     if(commonPasswords.includes(control.value))
        return { commonPassword:true}
     else 
        return null;

}