import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  pageTitle = 'Angular Child Routes Example';
  currentTime = new Date();
  imageUrl = 'https://pngimg.com/uploads/hot_dog/hot_dog_PNG10217.png';
  isDisabled = true;
  clickCount = 0;
  name = '';
  email = '';

  incrementCount() {
    this.clickCount++;
  }

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  submitForm() {
    if (this.name && this.email) {
      const modal = document.getElementById('exampleModal');
      if (modal) {
        (modal as any).style.display = 'block';
        (modal as any).classList.add('show');
      }
    }
  }

  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      (modal as any).style.display = 'none';
      (modal as any).classList.remove('show');
    }
  }
}
