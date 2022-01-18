import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-contac',
  templateUrl: './form-contac.component.html',
  styleUrls: ['./form-contac.component.css']
})
export class RegisterComponent implements OnInit {
  form= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    pw: new FormControl('',Validators.required),
    confirmPw: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required,Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')])


  })
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert("dki thanh cong")
    console.log(this.form.value)
  }

}

