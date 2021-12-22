import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  id = 1;
  nodes = [];
  courses = [];
  constructor() { }

  ngOnInit(): void {
  }

}
