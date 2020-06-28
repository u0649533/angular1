import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
@Input() dialog: string;
@Output() dialogFromChild = new EventEmitter<string>();

 

 sendMessage(){
  this.dialogFromChild.emit(this.dialog);
 }

 inputChange(){
  console.log(this.dialog);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
