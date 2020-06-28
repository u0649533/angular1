import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  
  dialog = "Default Message From parent message";
 

  constructor() { }

  ngOnInit(): void {
    
  }


  receiveMessage($event){

    this.dialog = $event.target.value;
    
  }

  clear(){

    this.dialog = "Default Message From parent message";
  }

}
