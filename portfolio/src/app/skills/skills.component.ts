import {Component, OnInit} from '@angular/core';

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
  clicked: boolean;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillGroups: SkillGroup[] = [
    {
      name: 'Frontend',
      skills: [
        {name: 'HTML', percentage: 95},
        {name: 'CSS', percentage: 95},
        {name: 'JavaScript/TypeScript', percentage: 90},
        {name: 'Angular', percentage: 90},
        {name: 'React', percentage: 70},
        {name: 'Vue', percentage: 70},
        {name: 'Bootstrap', percentage: 80},
        {name: 'Material', percentage: 85},
        {name: 'Tailwind', percentage: 65},
      ],
      clicked: false
    },
    {
      name: 'Backend',
      skills: [
        {name: 'NodeJS', percentage: 90},
        {name: 'Express', percentage: 90},
        {name: 'NestJs', percentage: 85},
        {name: 'PHP', percentage: 70},
        {name: 'Laravel', percentage: 70},
        {name: '.NET', percentage: 75},
        {name: 'ASP.NET', percentage: 75},
        {name: 'MySQL/PostgreSQL', percentage: 80},
        {name: 'MongoDB', percentage: 70}
      ],
      clicked: false
    },
    {
      name: 'DevOps',
      skills: [
        {name: 'Git', percentage: 90},
        {name: 'GitHub Actions', percentage: 90},
        {name: 'GitLab CI/CD', percentage: 80},
        {name: 'Docker', percentage: 70},
        {name: 'Ansible', percentage: 35}
      ],
      clicked: false
    },
    {
      name: 'Other',
      skills: [
        {name: 'Windows', percentage: 90},
        {name: 'Linux', percentage: 50},
        {name: 'Python', percentage: 80},
        {name: 'C#', percentage: 75},
        {name: 'C++', percentage: 70},
        {name: 'Java', percentage: 70}
      ],
      clicked: false
    }
  ];

  skillOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  getSgPercentage(sg: SkillGroup): number {
    let res = 0;
    sg.skills.forEach(s => res += s.percentage);
    return res / sg.skills.length;
  }

  openSkillGroup(sg: SkillGroup): void {
    if(this.skillOpen) return;
    // Extract sg from skillGroups and get index
    const index = this.skillGroups.findIndex(s => s.name === sg.name);
    // Set clicked to true
    this.skillGroups[index].clicked = true;
    this.skillOpen = true;
  }

  closeSkillGroup(sg: SkillGroup): void {
    // Extract sg from skillGroups and get index
    const index = this.skillGroups.findIndex(s => s.name === sg.name);
    // Set clicked to false
    this.skillGroups[index].clicked = false;
    // Set skillOpen to false after 500ms
    setTimeout(() => this.skillOpen = false, 1);
  }
}
