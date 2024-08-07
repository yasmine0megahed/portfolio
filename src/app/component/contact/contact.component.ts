import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // functions

  // github
  navigateToGitHub(): void {
    window.open('https://github.com/yasmine0megahed', '_blank');
  }
  //linkedin
  navigateToLinkedin() {
    window.open('https://www.linkedin.com/in/yasminemegahed/', '_blank');
  }
  //facebook
  navigateToFacebook() {
    window.open('https://www.facebook.com/jessy.mjk', '_blank');
  }
  //instagram
  navigateToInstagram() {
    window.open(
      'https://www.instagram.com/jessymjk?igsh=MTQ4M3J1ZDFjeHEwdA==',
      '_blank'
    );
  }
  //cv
  navigateToCv() {
    window.open(
      ' https://drive.google.com/file/d/1cC0C5b_WBnlH6DvqbEetdZV-Z4q-L_r5/view?usp=sharing',
      '_blank'
    );
  }
}
