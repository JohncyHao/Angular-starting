import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // 盡量用兩個以上的單字來命名，因為單用header可能會跟HTML的header標籤衝
  templateUrl: './header.component.html', // 如果template很複雜，就寫在這裡，然後在這裡引入
  styleUrls: ['./header.component.css'], // 如果CS S很複雜，就寫在這裡，然後在這裡引入
})
export class HeaderComponent {}
