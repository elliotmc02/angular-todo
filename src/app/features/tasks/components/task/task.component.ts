import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: false
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() removeTaskEvent = new EventEmitter<number>();
  @Output() toggleCompletionEvent = new EventEmitter<number>();

  removeTask() {
    this.removeTaskEvent.emit(this.task.id);
  }

  toggleCompletion() {
    this.toggleCompletionEvent.emit(this.task.id);
  }
}
