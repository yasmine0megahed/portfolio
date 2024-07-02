import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//functions
  //cv
  navigateToCv() {
    window.open(
      ' https://drive.google.com/file/d/1cC0C5b_WBnlH6DvqbEetdZV-Z4q-L_r5/view?usp=sharing',
      '_blank'
    );
  }
}
