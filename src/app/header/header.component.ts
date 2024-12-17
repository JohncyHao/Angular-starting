import { Component } from '@angular/core';

@Component({
  standalone: true, // 這個屬性是Angular 14新增的，如果設為true，則這個component不會被加入到任何module中，在angular 19中他預設是true
  selector: 'app-header', // 盡量用兩個以上的單字來命名，因為單用header可能會跟HTML的header標籤衝
  // template:'<h1>Hello Wo rld</h1>',  // 如果是很簡單的template可以直接寫在這裡，例如兩三行而已
  templateUrl: './header.component.html', // 如果template很複雜，就寫在這裡，然後在這裡引入
  styleUrls: ['./header.component.css'] // 如果CS S很複雜，就寫在這裡，然後在這裡引入

})
export class HeaderComponent {

}
