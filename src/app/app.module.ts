import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { SharedModule } from './shared/shared.module';
import { TaskskModule } from './tasks/tasks.module';

@NgModule({
  //  declarations: 這個module所包含的所有component
  declarations: [AppComponent, HeaderComponent, UserComponent],
  // 告訴angaulr這個module的root component是AppComponent
  bootstrap: [AppComponent],

  // 放在這裡的話，則可以繼續使用standalone的component
  // DatePipe有包含在BrowserModule裡面，BrowserModule只能在app.module.ts裡面使用
  imports: [BrowserModule, SharedModule, TaskskModule],
})
export class AppModule {}
