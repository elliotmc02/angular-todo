import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [CommonModule, TaskComponent],
})
export class ListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }
}
