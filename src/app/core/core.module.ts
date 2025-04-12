import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [CommonModule],
  providers: [TaskService],
})
export class CoreModule {}
