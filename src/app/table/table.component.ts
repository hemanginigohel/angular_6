import { Component, OnInit } from '@angular/core';
import { DemoService } from "../demo.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  datalist=[];
  constructor(private demoservice:DemoService) { }

  ngOnInit() {
  
    }
  
    datasend(): void {
      this.demoservice.datasend()
          .subscribe(data => this.datalist= data);
      console.log("hello");
     }

}
