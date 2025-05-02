import { Component } from '@angular/core';
import { Project, Content, About, Contact,Header,Footer } from './interfaceCP';
import projects from '../assets/data/projects.json';
import content from '../assets/data/content.json';
// import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  darkMode: boolean = false;
  header: Header = content.header;
  filteredData: string = '';
  filteredProjects: Project[] = [];

  projects: Project[] = projects.projects;
  aboutInfo: About = content.about;
  contacts: Contact[] = content.contact;
  technologies: Footer[] = content.footer.technologies;
  headerInfo = content.header;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  ngOnInit() {
    this.filterProjects(); 
  }

  filterProjects() {
    if (this.filteredData.trim() === '') {
      this.filteredProjects = [...this.projects];  
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.title.toLowerCase().includes(this.filteredData.toLowerCase())
      );
    }
  }
}