import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProjectsComponent } from './git-projects.component';

describe('GitProjectsComponent', () => {
  let component: GitProjectsComponent;
  let fixture: ComponentFixture<GitProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
