import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ContentChild, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  private _opened: boolean;
  get opened() {
    return this._opened;
  }
  @Input('opened') set opened(value: boolean) {
    this._opened = value;
  };


  @Output() closeSidenav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  open(){
    this.opened =  true;
  }

  onClose() {
    this.opened = false;
    this.closeSidenav.emit();
  }
}
