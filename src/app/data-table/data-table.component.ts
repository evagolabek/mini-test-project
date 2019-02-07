import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  blogger: string;
  type: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {blogger: 'MyCoolComp', type: 'Cool', status: 'active'},
  {blogger: 'TheDestiny', type: 'Not Cool', status: 'active'},
 
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['blogger', 'type', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  clicked(row){
    console.log('it works')
    console.log(row['name'])
    
  }
}
