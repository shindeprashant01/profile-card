// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './profile-card.component.html',
//   styleUrl: './profile-card.component.css'
// })
// export class ProfileCardComponent {

// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  name: string = 'Prashant Shinde';
  jobTitle: string = 'Frontend Developer';
  bio: string = 'Passionate about coding and web development.';
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  contactMe() {
    alert('Contact form will be implemented here.');
  }
}

