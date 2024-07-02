import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './habilidades.component.html',
  styles: ``
})
export class HabilidadesComponent {

  public faPenRuler = faPenRuler
  public faScrewdriverWrench = faScrewdriverWrench
  public faCircleInfo = faCircleInfo
  public faCheck = faCircleCheck

}
