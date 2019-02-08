import { Component, OnInit } from '@angular/core';
import { renderComponent } from '@angular/core/src/render3';

export interface blogInfo {
  blogger: string;
  type: string;
  status: string;
}

const rawData: blogInfo[] = [
  {blogger: 'MyCoolComp', type: 'Cool', status: 'active'},
  {blogger: 'TheDestiny', type: 'Not Cool', status: 'active'},
  {blogger: 'Test', type: 'Cool', status: 'inactive'},
  {blogger: 'Test2', type: 'Not Cool', status: 'active'},
];



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})


export class BlogsComponent implements OnInit {

  cool: string;
  notCool: string; 

  displayedColumns: string[] = ['blogger', 'type', 'status'];
  typeFilters = [];
  filteredData;
  dataSource;

  renderTable() {
    this.filteredData = rawData.filter(x => this.typeFilters.includes(x.type))

    this.dataSource = this.filteredData;
  }

  constructor() { }

  ngOnInit() {
  }

  typeChecked(value: string){
    console.log(value);

    // check if there is an element with this value in the array and return its index
    var idx = this.typeFilters.indexOf(value);

     // is already in filters array (not -1), then remove it
     if (idx > -1) {
       this.typeFilters.splice(idx, 1);
     }

     // if newly selected, then add it
     else {
       this.typeFilters.push(value);
     }

    console.log(this.typeFilters)

    this.renderTable();
 }
}
