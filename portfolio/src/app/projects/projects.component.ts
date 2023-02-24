import { Component, OnInit } from '@angular/core';

export enum ProjectType {
  Personal = 'Personal',
  School = 'School',
  Work = 'Work'
}

export interface Project {
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Gencovery Community',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Work,
      link: 'https://constellab.community/'
    },
    {
      title: 'Ticketing System Web Application',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Work
    },
    {
      title: 'Crypto Currency Bot',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Personal
    },
    {
      title: 'Agenda/To-Do list application',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Personal
    },
    {
      title: 'Portfolio Website',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Personal
    },
    {
      title: 'Electric car charging station map',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      type: ProjectType.Personal
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
