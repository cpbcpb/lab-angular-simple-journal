import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service' 
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  
theNewJournal: any={}

addNewJournal(){
  console.log(this.theNewJournal);
  this.theService.createJournal(this.theNewJournal)
  .subscribe((blah)=>{
    this.theService.getJournals();
    this.theNewJournal={};
  })
}
  // this is the method that will run when you click the form submit
  // addNewTask() {
  //   this.myService.createNewTask(this.newTask)
  //   .subscribe((blah) => {
  //     this.getAllTheTasks();
  //     this.toggleForm();
  //     this.newTask = {};
  //  });

  theEntries: Array<any>;
  constructor(private theService: JournalService) { }

  
  ngOnInit() {
  }

}
