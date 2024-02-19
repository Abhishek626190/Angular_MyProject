import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})



export class AddCourseComponent {
cname:string=''
cobj:Course=new Course();
list1:Course[]=[]
addCourse()
{
  this.cobj={coursename:this.cname,colorname:'pink'}
  this.list1.push(this.cobj)
}

getCourse()
{
  return this.list1;
}
checkitem(courseobj:Course)
{
  let i=-1;
  console.log("1")
  for(let i=0;i<this.list1.length;i++)
  {
    if(this.list1[i].coursename==courseobj.coursename)
    {
      this.list1[i].colorname='blue'
      console.log("2")
    }
  }
  console.log("clicked:"+courseobj.coursename)
}
}
export class Course{
  coursename?:string;
  colorname?:string;
}
