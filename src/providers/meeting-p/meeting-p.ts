import { Meeting } from './../../models/meeting-model';
import { Company } from './../../models/company-model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MeetingPProvider {

  meetingRef: AngularFireList<any>;
  meetingList: Observable<any[]>;
  meetingSelected: Company;

  constructor(public database: AngularFireDatabase) {
    console.log('Hello MeetingPProvider Provider');
    this.meetingRef = this.database.list('meeting');
    this.meetingList = this.meetingRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return { key: c.payload.key, ...c.payload.val() };
      }))
    );
  }

  // Entrada menu admin para generar citas manualmente
  public generateMeetings(): void {
        let date: Date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        var currentDate = firstDay;
        currentDate.setHours(8);
        currentDate.setMinutes(0);
        console.log(currentDate);
        var currentHour = currentDate.getHours();
        let continue_ = true;
        debugger;
        while(continue_){
          if (currentDate.getDay() != 0 && currentDate.getDay() != 6 ) { //Sunday
            this.saveMeeting(currentDate, currentHour);
            continue_ = false;
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
    meeting.initialHour = currentDate;
    let finalDate = new Date(currentDate);
    finalDate.setMinutes(finalDate.getMinutes() + 30);
    meeting.finalHour = finalDate;

    //let key: string = meeting.key;
    //if (key != undefined) {
    //  this.meetingRef.update(key, this.meetingSelected);
    //} else {
      this.meetingRef.push(meeting);
    //}
  }

}
