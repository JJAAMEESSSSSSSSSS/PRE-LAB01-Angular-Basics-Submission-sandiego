import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Steven James G. San Diego';
  location = 'Mabalacat City, Pampanga';
  email = 'jamesguevarrasandiego@gmail.com';
  GitHub = 'https://github.com/JJAAMEESSSSSSSSSS';
  phone = '0976 298 5619';

  profile = 'I am a student interested in web development. I enjoy learning new technologies, building useful applications and solving problems that can help the society  .';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'MySQL',
    'Angular',
    'Cloud Computing'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
