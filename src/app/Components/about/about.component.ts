import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {
  public faGraduationCap = faGraduationCap
  public faBriefcase = faBriefcase
  public faArrowRight = faArrowRight
  
}
