import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

  userForm : FormGroup;
  listData : any;
  id: any;
  showAdd : boolean;
  showUpdate : boolean;
  editIndex : number = -1; //default mode means not in edit mode
  newTaskForm: any;

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

  get f() { return this.userForm.controls; }

  public addItem() : void {
    console.log(this.userForm.value)

    this.listData.push(this.userForm.value);
    console.log('add',this.listData)
    localStorage.setItem("infos" , JSON.stringify(this.listData));
    alert("Data Added. PLease Check Tasklist");

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

  createNewTask()
    {
      localStorage.setItem("infos" , JSON.stringify(this.listData));
      console.log(localStorage.getItem('info'));
    }


  }

