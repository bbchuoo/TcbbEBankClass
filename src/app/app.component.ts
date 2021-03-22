import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  str
  str1;
  fileToUpload: File = null;
  file: any;
  bb = [];
  cc = [];
  yyy = [];
  title = 'alvinTest';
  showC = false;
  click() {
    this.showC = !this.showC;
  }

  ngOnInit(): void {

    // this.test()
  }

  test(res?) {
    // this.str = 'compCnName
    // compEnName
    // applyCustomerId
    // ';



    console.log('this.str =', this.str);

    var arr = this.str.split("\n");

    arr = arr.slice(0, arr.length - 1);

    console.log('arr=', arr.join(','))

    const newArr = [];
    arr.forEach((x, i) => {

      if ((x).indexOf(',') < 0) {
        newArr.push(x);
      }
    });

    console.log('newArr=', newArr)
    newArr.forEach((st) => {
      if (res) {
        this.bb.push(st + ':string;<br/>')
      } else {
        this.bb.push(st + " ='';<br/>")
      }
    })
    console.log('this.bb=', this.bb)

  }

  test2() {
    // this.str = 'compCnName
    // compEnName
    // applyCustomerId
    // ';



    console.log('this.str1 =', this.str1);

    var arr = this.str1.split("\n");

    arr = arr.slice(0, arr.length - 1);

    console.log('arr=', arr.join(','))

    const newArr = [];
    arr.forEach((x, i) => {

      if ((x).indexOf(',') < 0) {
        newArr.push(x);
      }
    });
    /** 測試 */
    console.log('newArr=', newArr)
    newArr.forEach((st) => {
      this.cc.push('/** ' + st + ' */' + '<br/>')
    })
    console.log('this.cc=', this.cc)

  }

  mergeRes() {
    if(!this.str || !this.str1){
      return;
    }
    this.yyy = [];
    this.bb = [];
    this.cc = [];

    this.test(true);
    this.test2();

    this.cc.forEach((ccc, index) => {
      this.yyy.push(ccc);
      this.yyy.push(this.bb[index]);
    });
    console.log('this.yyy=', this.yyy)
  }

  mergeReq() {
    if(!this.str || !this.str1){
      return;
    }
    this.yyy = [];
    this.bb = [];
    this.cc = [];

    this.test(false);
    this.test2();

    this.cc.forEach((ccc, index) => {
      this.yyy.push(ccc);
      this.yyy.push(this.bb[index]);
    });
    console.log('this.yyy=', this.yyy)
  }

  fileChanged(e) {
    // this.file = e.target.files[0];
    // this.uploadDocument(this.file)
  }

  uploadDocument(file) {
    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   console.log(fileReader.result);
    //   const count = 2000;
    //   const ar = [];
    //   // let str = fileReader.result as string;
    //   let str = 
    //   'aaa bbb';
    //   for (let index = 0; index < count; index++) {
    //     const in = str.indexOf('\n');
    //     str.indexOf(in);
    //     if (in >= 0) {
    //       // console.log('進入了str=',in)
    //       const newStr = str.slice(in);
    //       console.log('newStr=', newStr)
    //       ar.push(str);
    //     }
    //   }
    // }
    // fileReader.readAsText(this.file);
  }



}
