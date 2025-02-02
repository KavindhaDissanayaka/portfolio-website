import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-git-projects',
  standalone: true, // If using standalone components
  imports: [CommonModule, HttpClientModule], // Add CommonModule here
  templateUrl: './git-projects.component.html',
  styleUrls: ['./git-projects.component.css']
})
export class GitProjectsComponent implements OnInit {
  repos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRepos();
  }

  fetchRepos(): void {
    const url = 'https://api.github.com/users/KavindhaDissanayaka/repos';
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.repos = data;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }
}