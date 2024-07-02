import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  public faEnvelopeil = faEnvelope
  public faLinkedin = faLinkedin

}
