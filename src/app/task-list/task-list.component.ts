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

  removeItem(element: any){
    this.listData.forEach((value: any , index: any ) => {
      if (value == element)
      this.listData.splice(index , 1);
      alert("Deleted Successfully!")
    });
  }


  ngOnInit(): void {
  }

  onEdit(element: any, index: number) {
    this.showAdd = false;
    this.showUpdate = true;
    this.userForm.patchValue({
      taskname: element.taskname,
      date: element.date,
      hours: element.hours,
    });

  this.editIndex = index;
  }

  updateItem() {
    this.showAdd = true;
    this.showUpdate = false;

    if(this.editIndex >= 0) {
      let userData = this.userForm.value;
       this.listData[this.editIndex].taskname = userData.taskname;
       this.listData[this.editIndex].date = userData.date;
       this.listData[this.editIndex].hours = userData.hours;
    }

    localStorage.setItem("infos" , JSON.stringify(this.listData));
    this.reset();
    
  }


}
