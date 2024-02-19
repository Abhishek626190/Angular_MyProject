import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveDEmoComponent } from './directive-demo/directive-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { MyFirstServiceService } from './my-first-service.service';
import { MyHttpUserComponent } from './my-http-user/my-http-user.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CrudDemoComponent } from './crud-demo/crud-demo.component';
import { CrudDemo2Component } from './crud-demo2/crud-demo2.component';
import { MyHttpUseCompComponent } from './my-http-use-comp/my-http-use-comp.component';
import { LoginComponent } from './login/login.component';
import { FormTaskComponent } from './form-task/form-task.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    DirectiveDEmoComponent,
    AttributeDemoComponent,
    PipeDemoComponent,
    FormDemoComponent,
    ParentComponent,
    RouterModule,
    EmployeeInfoComponent,
    MyHttpUserComponent,
    SwitchDemoComponent,
    AddCourseComponent,
    CrudDemoComponent,
    CrudDemo2Component,
    MyHttpUseCompComponent,
    LoginComponent,
    FormTaskComponent
      
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyProject';

  CityName: string = 'Pune';
  FullName: string = 'Abhishek Rai';
  Age: number = 22;
  isdisabled = true;
  path = './assets/Car1.jpg';

  check = false;

  onMyClick() {
    console.log('Hi I am clicked');
    return 'This button clicked';
  }
}
