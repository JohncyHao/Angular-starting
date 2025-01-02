import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  // 他適合使用非獨立元件
  declarations: [AppComponent],
  // 告訴angaulr這個module的root component是AppComponent
  bootstrap: [AppComponent],

  // 放在這裡的話，則可以繼續使用standalone的component
  imports: [BrowserModule,HeaderComponent, UserComponent, TasksComponent ],
})
export class AppModule {}
