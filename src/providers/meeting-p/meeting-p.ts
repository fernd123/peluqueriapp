import { Meeting } from './../../models/meeting-model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MeetingPProvider {

  meetingRef: AngularFireList<any>;
  meetingList: Observable<any[]>;
  meetingByDateList: Observable<any[]>;
  meetingSelected: Meeting;

  constructor(public database: AngularFireDatabase) {
    this.meetingRef = this.database.list('meeting');
    this.meetingList = this.meetingRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return { key: c.payload.key, ...c.payload.val() };
      }))
    );
  }

  // Entrada menu admin para generar citas manualmente
  public generateMeetings(initialDate: Date, finalDate: Date): void {
    let date: Date = new Date();
    let firstDay: Date = new Date(initialDate);
    let lastDay: Date = new Date(finalDate);

    let currentDate: Date = firstDay;
    currentDate.setHours(8);
    currentDate.setMinutes(0);
    let currentHour: number = currentDate.getHours();
    let continue_ = true;

    while (continue_) {
      this.saveMeeting(currentDate, currentHour);
      currentDate.setMinutes(currentDate.getMinutes() + 30);
      if (currentDate.getUTCDate() == lastDay.getUTCDate() + 1) {
        continue_ = false;
        console.log("fin");
      }
    }
  }

  private saveMeeting(currentDate: Date, currentHour: number): void {
    let meeting: Meeting = new Meeting();
    meeting.customerId = "";
    meeting.employeeId = "";
    meeting.observations = "";
    meeting.pricelistIsd = "";
    meeting.serviceId = "";
    meeting.name = "";

    let dateHourMinuteZero = new Date(currentDate);
    dateHourMinuteZero.setHours(0);
    dateHourMinuteZero.setMinutes(0);
    dateHourMinuteZero.setSeconds(0);
    dateHourMinuteZero.setMilliseconds(0);

    meeting.date = dateHourMinuteZero.getTime();
    meeting.initialHour = currentDate.getTime();

    let finalDate = new Date(currentDate);
    finalDate.setMinutes(finalDate.getMinutes() + 30);
    meeting.finalHour = finalDate.getTime();

    let key: string = meeting.key;
    if (key != undefined) {
      this.meetingRef.update(key, this.meetingSelected);
    } else {
      this.meetingRef.push(meeting);
    }
  }

  deleteMeeting(key: string): void {
    this.meetingRef.remove(key);
  }
  getMeetingByDate(date: Date): void {
    let dateHourMinuteZero: Date = new Date(date);
    dateHourMinuteZero.setHours(0);
    dateHourMinuteZero.setMinutes(0);
    dateHourMinuteZero.setSeconds(0);
    dateHourMinuteZero.setMilliseconds(0);

    this.meetingByDateList = this.database.list('meeting',
      ref =>
        ref.orderByChild('date')
          .equalTo(dateHourMinuteZero.getTime()))
      .snapshotChanges().pipe(
        map(actions => actions.map(c => {
          return { key: c.payload.key, ...c.payload.val() };
        }))
      );
  }

}
