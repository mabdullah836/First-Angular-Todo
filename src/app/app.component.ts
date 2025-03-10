import { Component } from '@angular/core';
import { HeaderComponent } from './components/todo/todo.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: ` <app-todo/>`,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce';
}
