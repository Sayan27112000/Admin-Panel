import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  userForm : FormGroup;
  listData: any;
  id: any;
  showAdd : boolean;
  showUpdate : boolean;
  editIndex : number = -1; //default mode means not in edit mode

  constructor(private fb:FormBuilder) { 

    this.showAdd = true;
    this.showUpdate = false;
    const infoArr = localStorage.getItem("infos") || '';
    this.listData = JSON.parse(infoArr);

    this.userForm = this.fb.group ({
      taskname : ['' , Validators.required],
      date : ['' , Validators.required],
      hours : ['' , Validators.required],
      
    })
  }

  reset(){
    this.userForm.reset();
    this.editIndex = -1;
  }


  ngOnInit(): void {
   
  }

}
