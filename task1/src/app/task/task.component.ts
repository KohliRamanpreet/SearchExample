import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
@Component({
    selector: 'app-task',
    templateUrl: `./task.component.html`,
    styleUrls :['./task.component.css']
})

export class TaskComponent implements OnInit{
    list;
    search;

     constructor(private _get:TaskService){}
    ngOnInit():void{
        this._get.getDetails().subscribe(data=>this.list=data);
    }
  
}