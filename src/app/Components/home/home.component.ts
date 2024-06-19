import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProfileComponent } from "../profile/profile.component";
import { AboutComponent } from "../about/about.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, ProfileComponent, AboutComponent]
})
export class HomeComponent {

}
