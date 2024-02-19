import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
// import { FormDemoComponent } from './form-demo/form-demo.component';
import { MyHttpUserComponent } from './my-http-user/my-http-user.component';

export const routes: Routes = [
{path:'Home', component:HomeComponent},
{path:'Login', component:ParentComponent},
{path:'Employee', component:PipeDemoComponent},
{path:'Data', component:MyHttpUserComponent},];
