import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private likedProjects = new Set<number>(); 

  isLiked(projectId: number): boolean {
    return this.likedProjects.has(projectId);
  }

  toggleLike(projectId: number): void {
    if (this.likedProjects.has(projectId)) {
      this.likedProjects.delete(projectId);
    } else {
      this.likedProjects.add(projectId);
    }
  }
}
