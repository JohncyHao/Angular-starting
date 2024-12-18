import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTask } from './new-task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  // 沒有要傳資料，可以加上 void
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // 這樣寫法是不好的，因為這樣會讓這個class變得不可測試
  // 但這個也是另一種DEPENDECY INJECTION的寫法
  private tasksService = inject(TasksService);

  onSubmit() {
    this.tasksService.addTasks(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
