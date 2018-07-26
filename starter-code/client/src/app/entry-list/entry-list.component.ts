import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service' 
@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  
theEntries: Array<any>;
  constructor(private theService: JournalService) { }

  ngOnInit() {
    this.theService.getJournals().subscribe((thingy)=>this.theEntries=thingy)
  }

}
