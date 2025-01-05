import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  // 在這裡聲明這個module所包含的所有component
  declarations: [CardComponent],
  // 但當其他人要使用shared module時，只能使用exports的component
  exports: [CardComponent],
})
export class SharedModule {}
