import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-baitapnho',
  templateUrl: './baitapnho.component.html',
  styleUrls: ['./baitapnho.component.css']
})
export class BaitapnhoComponent implements OnInit {
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

}
