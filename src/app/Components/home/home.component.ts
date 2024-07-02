import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProfileComponent } from "../profile/profile.component";
import { AboutComponent } from "../about/about.component";
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, ProfileComponent, AboutComponent, HabilidadesComponent, ProjectsComponent, ContactComponent, FooterComponent]
})
export class HomeComponent {

}
