import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../interfaceCP';
import { LikeService } from '../like.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    standalone: false
})
export class ProjectsComponent {
  @Input() project!:Project

  constructor(private likeService: LikeService, private router: Router) {}

  isLiked(): boolean {
    return this.likeService.isLiked(this.project.id);
  }

  toggleLike(): void {
    this.likeService.toggleLike(this.project.id);
  }

  navigateToProject(projectId: number): void {
    this.router.navigate([`/project/${projectId}`]);
  }
}