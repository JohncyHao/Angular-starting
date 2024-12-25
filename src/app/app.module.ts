import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  // 告訴angaulr這個module的root component是AppComponent
  bootstrap: [AppComponent],
})
export class AppModule {}
