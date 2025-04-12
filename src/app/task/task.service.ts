import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private nextId = 1;
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  addTask(name: string) {
    if (name.trim() === '') return;

    const newTask: Task = { id: this.nextId++, name, completed: false };
    this.tasksSubject.next([...this.tasksSubject.value, newTask]);
  }

  removeTask(id: number) {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next(currentTasks.filter((task) => task.id !== id));
  }

  toggleTaskCompletion(id: number) {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next(
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
}
