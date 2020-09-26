import { Component, VERSION } from '@angular/core';
import {StudentService} from './student.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private readonly studentService: StudentService){}
  get students$(){
    return this.studentService.getStudents();
  }
}
