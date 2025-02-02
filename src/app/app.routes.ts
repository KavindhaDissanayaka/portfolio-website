import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SkillComponent } from './Components/skill/skill.component';

export const routes: Routes = [
{
    path : "",
    component : HomeComponent
},
{
    path : "about",
    component:AboutComponent
},
{
    path: "contact",
    component:ContactComponent
},
{
    path:"skill",
    component:SkillComponent
}
];
