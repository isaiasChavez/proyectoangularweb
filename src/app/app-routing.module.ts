import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import {GeneralesComponent} from './components/generales/generales.component'
const routes: Routes = [
  {
    path: "",
    redirectTo: "/navigation",

    pathMatch: "full"
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'generales/:id',
    component: GeneralesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
