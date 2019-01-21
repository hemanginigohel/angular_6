import { Component, OnInit } from '@angular/core';
import { DemoService } from "../demo.service";
import { Iform } from "../iform";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private demoservice:DemoService) { }

  ngOnInit() {
  }
  object: Iform;
  obj1: Iform = {
    uname: null,
    upwd: null
  }
  onclick(): void {
    this.object = {
      uname: this.obj1.uname,
      upwd: this.obj1.upwd
    }
    this.demoservice.dataget(this.object);
}
}
