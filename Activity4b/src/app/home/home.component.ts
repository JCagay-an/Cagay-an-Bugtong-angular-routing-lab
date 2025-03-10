import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  messageVisible = false;

  showMessage() {
    this.messageVisible = !this.messageVisible;
  }
}
