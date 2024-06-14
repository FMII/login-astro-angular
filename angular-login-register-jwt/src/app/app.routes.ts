import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'home', component: HomeComponent},
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'**', redirectTo:'login'}
];
