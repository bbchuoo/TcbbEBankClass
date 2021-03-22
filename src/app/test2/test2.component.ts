import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy {

  constructor() {
    console.log("test2 的 constructor")
  }

  ngOnInit() {
    console.log("test2 的 ngOnInit")
  }

  ngOnDestroy() {
    console.log("test2 的 ngOnDestroy")

  }

}
