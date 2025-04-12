import { Component } from '@angular/core';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.taskName);
    this.taskName = '';
  }
}
