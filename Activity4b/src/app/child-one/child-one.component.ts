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
  pageTitle = 'Angular 19 Data Binding';
  currentTime = new Date();
  imageUrl = 'https://media1.giphy.com/media/l46CynhaGJAyaLPEs/200.webp?cid=790b7611tjlq6h317bsmcfcudmmvgf47avpywljlfgt5rs2z&ep=v1_gifs_search&rid=200.webp&ct=g';
  isDisabled = false;

 
  buttonColor = 'primary';
  progressValue = 75;
  // Properties for event binding
  clickCount = 0;
  mousePosition = { x: 0, y: 0 };
  inputValue = '';
  // Properties for two-way binding
  name = '';
  email = '';
  favoriteFramework = 'Angular';
  // Methods for event binding
  incrementCount() {
  this.clickCount++;
  if (this.clickCount >= 5) {
  this.isDisabled = false;
  this.buttonColor = 'success';
  }
  }
  resetCount() {
  this.clickCount = 0;
  this.isDisabled = true;
  this.buttonColor = 'primary';
  }
  trackMousePosition(event: MouseEvent) {
  this.mousePosition = {
  x: event.clientX,
  y: event.clientY
  };
  }
  onInput(event: Event) {
  this.inputValue = (event.target as HTMLInputElement).value;
  }
  // Method to demonstrate combination of bindings
  submitForm() {
  alert(`Form submitted!\nName: ${this.name}\nEmail:
  ${this.email}\nFavorite Framework: ${this.favoriteFramework}`);
  this.resetForm();
  
  }
  resetForm() {
  this.name = '';
  this.email = '';
  this.favoriteFramework = 'Angular';
  }
  }
