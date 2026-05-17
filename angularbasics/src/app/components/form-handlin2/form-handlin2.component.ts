import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { commonPasswordValidator } from '../../validators/Validators';

@Component({
  selector: 'app-form-handlin2',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './form-handlin2.component.html',
  styleUrl: './form-handlin2.component.css'
})
export class FormHandlin2Component {

  form !: FormGroup

  constructor(private formBuilder:FormBuilder)
  {
        this.form=this.formBuilder.group({
          name:["",[Validators.required,Validators.minLength(2)]],
          email:["",[Validators.required ,Validators.email]],


          password:["",[Validators.required,Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/),commonPasswordValidator]],
          age:["",[Validators.required, Validators.min(18),Validators.max(100)]]
        })  
  }


  onSubmit()
  {
    alert("Form Submitted")
    console.log(this.form.value);
    
  }


  setValues()
  {
    this.form.setValue({
      name:"John Doe",
      email:"john.doe@example.com",
      password:"John@123",
      age:30
    })
  }




}
