import { Meeting } from './../../models/meeting-model';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MeetingPProvider {

  employeeSelected: User;
  employeesRef: AngularFireList<any>;
  employeeList: Observable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.employeesRef = this.database.list('meeting');
    this.employeeList = this.employeesRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
  }

  addEmployee(employee: User): void {
    this.employeesRef.push(employee);
  }

  editEmployee(employee: User): void {
    let key = employee.key;
    this.employeesRef.update(key, employee);
  }

  removeEmployee(employee: User): void {
    //this.employeeList.splice(0, 1);
    let key = employee.key;
    this.employeesRef.remove(key);
  }


   // Entrada menu admin para generar citas manualmente
   public generateMeetings(initialDate: Date, finalDate: Date): void {
    let date: Date = new Date();
    //var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    //var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var firstDay = new Date(initialDate);
    var lastDay = new Date(finalDate);

    var currentDate = firstDay;
    currentDate.setHours(8);
    currentDate.setMinutes(0);
    console.log(currentDate);
    var currentHour = currentDate.getHours();
    let continue_ = true;
    debugger;
    while(continue_){
      /* let user:User = new User();
      user.name = "xample";
      this.addEmployee(user); */
     if (currentDate.getDay() != 0 && currentDate.getDay() != 6 ) { //Sunday
        this.saveMeeting(currentDate, currentHour);
      }else{
        currentDate.setHours(currentDate.getHours()+ 24);
      }
      console.log(currentDate);
      currentDate.setMinutes(currentDate.getMinutes() + 30);
      if(currentDate.getUTCDate() == lastDay.getUTCDate()+1){
        continue_ = false;
        console.log("fin");
      }
    }
}

private saveMeeting(currentDate: Date, currentHour: number): void {
let meeting: Meeting = new Meeting();
meeting.date = currentDate;
meeting.initialHour = currentDate.getTime();
let finalDate = new Date(currentDate);
finalDate.setMinutes(finalDate.getMinutes() + 30);
meeting.finalHour = finalDate.getTime();

//let key: string = meeting.key;
//if (key != undefined) {
//  this.meetingRef.update(key, this.meetingSelected);
//} else {
  this.employeesRef.push(meeting);
//}
}

}
