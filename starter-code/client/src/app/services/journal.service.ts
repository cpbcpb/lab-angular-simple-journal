import { Injectable } from '@angular/core';
//you are importing both http and response
import { Http, Response } from '@angular/http';
//an observable is a stream and you have to subscribe to it....
//subscribe is an inexpensive function that watches something repeatedly
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
// serviceJournalsList:Array<any>=journalsList;
  constructor(private http: Http) { }

  createJournal(theNewJournal){
    return this.http.post('http://localhost:3000/api/journal-entries', theNewJournal)
    .map((responseFromApi)=>responseFromApi.json())
  }
    getJournals() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
  }
}
