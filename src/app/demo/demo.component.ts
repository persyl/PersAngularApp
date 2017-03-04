import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  title:string = 'Demo component!';
  age:number = 30;
  greeting:string = 'Change this text...';

  ngOnInit(){
    this.age = 43;
  }

  constructor(){
  }

  onClick(){
    alert(`Greeting = ${this.greeting}`);
  }
}
