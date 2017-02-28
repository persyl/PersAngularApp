import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Pers Angular (2) app works!';
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
