import { Component, VERSION, OnInit, OnDestroy } from '@angular/core';
import {StudentService} from './student.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Student} from './models/Student';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly studentService: StudentService){}

  ngOnInit(){
  }

  ngOnDestroy(){
    this.selectedStudentStudentSubscription?.unsubscribe();
  }

  private selectedStudentStudentSubscription: Subscription;
  private readonly selectedStudentSubject = new BehaviorSubject<Student>(null);
  private readonly observableSelectedStudentSubject = this.selectedStudentSubject.asObservable();

  selectStudent(student: Student){
    this.selectedStudent = student;
  }

  private set selectedStudent(student: Student){
    this.selectedStudentSubject.next(student);
  }
  get selectedStudent$(){
    return this.observableSelectedStudentSubject;
  }
  get students$(){
    return this.studentService.getStudents();
  }
}
