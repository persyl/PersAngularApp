import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [{title: 'A sample task', description: 'This is an example of a task'}];

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  addTask(task:Task):void{
    this.tasks.push(task);
  }

}
