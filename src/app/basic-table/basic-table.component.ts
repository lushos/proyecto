import { Component, OnInit } from '@angular/core';
import { tableService, User } from '../services/basic-table.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  users:User[]=[];

  constructor(private _tableService: tableService) { 
    this.users=_tableService.getUsers();
  }

  ngOnInit(): void {
  }

}
