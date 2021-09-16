import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  userForm : FormGroup;
  listData : any;
  id: any;
  showAdd : boolean;
  showUpdate : boolean;
  editIndex : number = -1; //default mode means not in edit mode

  constructor(private fb:FormBuilder) { 

    this.showAdd = true;
    this.showUpdate = false;
    this.listData = [];

    this.userForm = this.fb.group ({
      taskname : ['' , Validators.required],
      date : ['' , Validators.required],
      hours : ['' , Validators.required],
      
    })
  }

  public addItem() : void {
    console.log(this.userForm.value)

    this.listData.push(this.userForm.value);
    localStorage.setItem("infos" , JSON.stringify(this.listData));

    this.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  reset(){
    this.userForm.reset();
    this.editIndex = -1;
  }


  ngOnInit(): void {
    //check if localstorage has data then put it in listData array or else leave it as it is..

    // this.listData = JSON.parse(localStorage.getItem('infos'));

  }

   onSubmit () {
    localStorage.setItem("infos" , JSON.stringify(this.listData));
    console.log(localStorage.getItem('info'));
  }

}
