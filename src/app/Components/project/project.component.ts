import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitProjectsComponent } from '../git-projects/git-projects.component';
import { OfficeprojectComponent } from '../officeproject/officeproject.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule , GitProjectsComponent,OfficeprojectComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
