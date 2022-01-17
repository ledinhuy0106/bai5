import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  form=new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    address: new FormControl()
  })
  constructor() { }
  ngOnInit() : void {
  }

  add(){
      // @ts-ignore
    document.getElementById("uy").value
  }
}
