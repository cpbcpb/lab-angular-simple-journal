import { Component, OnInit, OnChanges } from '@angular/core';
import {JournalService} from '../services/journal.service' 
@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit, OnChanges{
  
theEntries: Array<any>;
  constructor(private theService: JournalService) { 
    this.theEntries=theService.theJournalList
  }
ngOnChanges(){
  this.theService
  .getJournals()
  .subscribe((newthing)=>{this.theEntries=newthing.reverse()}
)
}
  ngOnInit() {
    this.theService
    .getJournals()
    .subscribe((thingy)=>{this.theEntries=thingy.reverse()}
  )
  }

 
}
