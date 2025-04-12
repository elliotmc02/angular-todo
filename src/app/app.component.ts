import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ListComponent, FormsModule],
})
export class AppComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask(this.taskName);
    this.taskName = '';
  }
}
