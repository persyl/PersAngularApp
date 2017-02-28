import { Component } from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task'

@Component({
  selector: 'tasks',
  providers: [TaskService],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[];

  constructor(private taskService: TaskService){
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
}
