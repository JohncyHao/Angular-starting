// import { Component, signal, computed } from '@angular/core';

// 第一個字大寫，代表這是一個decorator(裝飾器)，如果是小寫，代表這是一個function
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { User } from './user.model';

// import { DUMMY_USERS } from '../dummy.users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// Angular的開發者比較常用這種，但type user也是可以
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() avatar: string = "";
  // 加上驚嘆號，表示這個屬性是必填的
  // 透過在input上加入request:true，可以讓Angular在沒有提供值時拋出錯誤
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;

  // 可以的話，在後面使用<> 加上型別，這樣的程式碼會更好
  @Output() select = new EventEmitter<string>();

  // 也可以用這樣，但是因為他檢查會變嚴格，所以要加上string
  // select = output<string>();

  // 使用signal的方式
  // 透過tyepscript的泛型，可以指定input的型別
  // avatar = input<string>();
  // 也一樣可以使用required
  // avatar = input.required<string>(); // 使用這樣的方式它會是readonly的，所以不能在內部改變，只能透過外部傳進來改變
  // name = input.required<string>();

  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // 使用 signal 時改用computed
  // 一定要使用computed，的原因是因為computed會自動追蹤signal的變化，並且告訴Angular要重新渲染
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // 更好的帶網址的寫法
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    console.log(`123`, this.user);
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
