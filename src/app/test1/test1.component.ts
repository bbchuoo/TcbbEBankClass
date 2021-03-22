import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnDestroy {

  constructor() {
    console.log("test1 的 constructor")
  }

  ngOnInit() {
    console.log("test1 的 ngOnInit")
  }

  ngOnDestroy() {
    console.log("test1 的 ngOnDestroy")

  }

}
