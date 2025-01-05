import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  // 由於TaskComponent、NewTaskComponent 只會在tasksComponet使用，所以不需要exports
  exports: [TasksComponent],
  imports: [DatePipe, SharedModule, FormsModule],
})
export class TaskskModule {}
