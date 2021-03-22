import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  str
  str1;
  fileToUpload: File = null;
  file: any;
  bb = [];
  cc = [];
  dd = []
  ee = []
  yyy = [];
  title = 'alvinTest';
  showC = false;
  click() {
    this.showC = !this.showC;
  }

  ngOnInit(): void {

    // this.test()
  }

  mergeRes(res?) {
    this.bb = [];
    this.cc = [];
    this.dd = [];
    this.ee = [];
    this.yyy = [];

    console.log('this.str =', this.str);

    var arr = this.str.split("\n");
    console.log('arr=', arr)

    const newArr = [];
    arr.forEach(element => {

      const str = element.replace(/\s+/g, ' ');
      const aa = str.split(" ");
      if (aa.length === 2) {
        this.bb.push(aa[0]);
        this.cc.push(aa[1]);
      }
      console.log('aa=', aa)
    });

    console.log('this.bb=', this.bb)
    console.log('this.cc=', this.cc)

    this.bb.forEach((st) => {
      if (res) {
        this.dd.push(st + ':string;<br/>');
      } else {
        this.dd.push(st + ' = \'\';<br/>');
      }
    });


    this.cc.forEach((st) => {
      this.ee.push('/** ' + st + ' */' + '<br/>')
    });


    console.log('this.dd=', this.dd)
    console.log('this.ee=', this.ee)


    this.ee.forEach((eee, index) => {
      this.yyy.push(eee);
      this.yyy.push(this.dd[index]);
    });

    console.log('this.yyy=', this.yyy)

  }

}
