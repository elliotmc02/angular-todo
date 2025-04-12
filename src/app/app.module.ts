import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './features/tasks/tasks.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CoreModule, SharedModule, TasksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
