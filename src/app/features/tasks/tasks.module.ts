import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [TaskComponent, ListComponent],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class TasksModule {}
