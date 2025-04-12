import { Component } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
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