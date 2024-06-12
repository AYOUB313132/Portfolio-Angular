import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, ProfileComponent]
})
export class HomeComponent {

}
