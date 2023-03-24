import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("AAnish","Kumar","anish@gmail.com", 3000),
    new SalesPerson("Delhi","Angel","angel@gmail.com", 4000),
    new SalesPerson("London","Bridge","london@gmail.com", 4500),
    new SalesPerson("Paris","Eiffel","eiffel@gmail.com", 8900)
  ];

  constructor(){}
  ngOnInit() {
   
  }

}
