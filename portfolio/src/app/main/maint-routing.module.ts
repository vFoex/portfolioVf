import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {ProjectsComponent} from "../projects/projects.component";
import {SkillsComponent} from "../skills/skills.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'skills',
            component: SkillsComponent
          },
          {
            path: 'projects',
            component: ProjectsComponent
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
