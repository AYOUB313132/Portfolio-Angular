import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  public faGithub = faGithub
  public faLinkedin = faLinkedin

  descargaCv(){
    window.open("../../../assets/Cv-Hassen-Ayyoub-Chetti.pdf")
  }


}
