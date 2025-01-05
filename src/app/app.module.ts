import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
  //  declarations: 這個module所包含的所有component
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  // 告訴angaulr這個module的root component是AppComponent
  bootstrap: [AppComponent],

  // 放在這裡的話，則可以繼續使用standalone的component
  // DatePipe有包含在BrowserModule裡面
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
