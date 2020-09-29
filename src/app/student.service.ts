import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import * as data from './students.json';
import {Student} from './models/Student';

@Injectable({
  providedIn:'root'
})
export class StudentService {
  constructor(){
    (data['data'] as any[]).forEach(x => x.dob = Date.parse(x.dob));
  }
  getStudents(){
    
    return of((data as any).data as Student[]);
  }
}