import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import {GeneralesComponent} from './components/generales/generales.component'
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
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
