import { Component, OnInit } from '@angular/core';
import {Task} from './task'
import {TaskService} from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
  title = 'Pers Angular (2) app works!';
  tasks: Task[];
  age:number = 30;
  greeting:string = 'Change this text...';

  ngOnInit(){
    this.age = 43;
  }

  constructor(private taskService: TaskService){
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  onClick(){
    alert(`Greeting = ${this.greeting}`);
  }
}
