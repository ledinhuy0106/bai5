import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input() cardName="Ledinhuy" ;
  @Input() email="Ledinhuy@gmail.com";
  @Input() phone="0325836893";

  constructor() {
  }

  ngOnInit() {
  }

}
