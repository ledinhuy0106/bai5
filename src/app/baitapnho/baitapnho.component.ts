import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-baitapnho',
  templateUrl: './baitapnho.component.html',
  styleUrls: ['./baitapnho.component.css']
})
export class BaitapnhoComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    price: new FormControl('',[Validators.required,Validators.min(1000)]),
  })
  product : Product = {};
  listproduct: Product[] = [
    {
      id: "1",
      name: "uy",
      price:"7698687"
    },
    {
      id:"2",
      name:"iuy",
      price:"87698698"
    }

  ]

  constructor() {
  }

  ngOnInit(): void {
  }
  addNewProduct() {

    // @ts-ignore
    this.listproduct.push(this.form.value)
   }
}
