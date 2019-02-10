import { Component, OnInit } from '@angular/core';
import { renderComponent } from '@angular/core/src/render3';

export interface blogInfo {
  blogger: string;
  type: string;
  status: string;
}

const rawData: blogInfo[] = [
  {blogger: 'MyCoolComp', type: 'Cool', status: 'Active'},
  {blogger: 'TheDestiny', type: 'Average', status: 'Active'},
  {blogger: 'Test', type: 'Cool', status: 'Inactive'},
  {blogger: 'Test', type: 'Average', status: 'Active'},
  {blogger: 'Test', type: 'Mediocre', status: 'Active'},
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
  Filters = {type:[], status:[], blogger:[]};
  filteredData: blogInfo[];
  //filteredDataType: blogInfo[];
  //filteredDataStatus: blogInfo[];
  dataSource;

  renderTable() {
    this.filteredData = rawData.filter(x => (this.Filters.type.includes(x.type)) && (this.Filters.status.includes(x.status)) && (this.Filters.blogger.includes(x.blogger)))

    // this.filteredDataType = rawData.filter(x => this.Filters.type.includes(x.type))

    // this.filteredDataStatus = this.filteredDataType.filter(x => this.Filters.status.includes(x.status))

    this.dataSource = this.filteredData;
  }

  constructor() { }

  ngOnInit() {
  }

  Checked(column: string, value: string){
    console.log(column, value);

    if (column == 'type') {
      // check if there is an element with this value in the array and return its index
      var idx = this.Filters.type.indexOf(value);

      // is already in filters array (not -1), then remove it
      if (idx > -1) {
        this.Filters.type.splice(idx, 1);
      }

      // if newly selected, then add it
      else {
        this.Filters.type.push(value);
      }

      console.log(this.Filters.type)
    }
    else if (column == 'blogger') {
      var idx = this.Filters.blogger.indexOf(value);
      if (idx > -1) {this.Filters.blogger.splice(idx, 1);}
      else {this.Filters.blogger.push(value);}
      console.log(this.Filters.blogger)
    }
    else if (column == 'status') {
      var idx = this.Filters.status.indexOf(value);
      if (idx > -1) {this.Filters.status.splice(idx, 1);}
      else {this.Filters.status.push(value);}
      console.log(this.Filters.status)
    }
    
    this.renderTable();
 }
}
