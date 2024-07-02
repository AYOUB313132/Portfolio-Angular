import { Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {

  public faLocationArrow = faLocationArrow
  public faGithub = faGithub
  public projects:Project [] = [
    {
      name : "Bidesari",
      Descreption : "Bidesari es una asociación promovida por la Iglesia Diocesana de Vizcaya para atender al colectivo de presos y expresidiarios",
      github_src : "",
      image : "bidesari.jpg",
      link : "https://bidesari.org/",
      tecnologias : ["HTML5", "CSS3", "JS", "Bootstrap", "PHP", "Wordpress", "Wordpress Theme", "Multilenguaje wordpress"]
    },
    {
      name : "Bouatit Travel",
      Descreption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem at explicabo ratione",
      github_src : "",
      image : "soon2.jpg",
      link : "https://bouatittravel.com/",
      tecnologias : ["HTML5", "CSS3", "JS", "Bootstrap", "Angular", "Java", "Spring Boot", "RESTfulAPIs", "Spring Security", "JWT", "PostgreSQL"]
    },
    {
      name : "Agency Web Template",
      Descreption : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem at explicabo ratione",
      github_src : "https://github.com/AYOUB313132/AGENCY-WEB-TEMPLATE",
      image : "agency-theme.jpg",
      link : "https://ayoub313132.github.io/AGENCY-WEB-TEMPLATE/",
      tecnologias : ["HTML5", "CSS3", "JS", "Bootstrap"]
    },
    {
      name : "Peliculas",
      Descreption : "Aplicación web de búsqueda de películas con Angular, Bootstrap y diseño responsivo",
      github_src : "https://github.com/AYOUB313132/peliculas",
      image : "peliculas.jpg",
      link : "https://ayoub313132.github.io/peliculas/home",
      tecnologias : ["HTML5", "CSS3", "JS", "Bootstrap", "Angular"]
    },
    {
      name : "Curso Teca",
      Descreption : "Curso Teca es una plataforma educativa que facilita la inscripción en cursos con roles específicos para administradores, profesores y usuarios.",
      github_src : "https://github.com/AYOUB313132/Proyecto_Final_De_Mi_Curso",
      image : "curso-teca.jpg",
      link : "",
      tecnologias : ["HTML5", "CSS3", "JS", "Bootstrap", "Angular","Angular Material UI", "Java", "Spring Boot","Micro Service", "Docker", "RESTfulAPIs", "Spring Security", "JWT", "MySQL",]
    },
    {
      name : "Portfolio ",
      Descreption : "Mi portfolio ingles full responsive.",
      github_src : "https://github.com/AYOUB313132/portfolio-1",
      image : "portfolio-en.jpg",
      link : "https://ayoub313132.github.io/portfolio-1/",
      tecnologias : ["HTML5", "CSS3", "Bootstrap", "Responsive"]
    },
    {
      name : "Memory Game",
      Descreption : "Mi portfolio ingles full responsive.",
      github_src : "https://github.com/AYOUB313132/Memory-Game",
      image : "game-memory.jpg",
      link : "https://ayoub313132.github.io/Memory-Game/",
      tecnologias : ["HTML5", "CSS3", "Bootstrap", "jQuery"]
    }

  ]


}
