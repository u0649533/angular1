import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "Lists of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = true;
  email;
  email3 = "two way binding";

  text = `Lorem ddjflasjf  dummy  text exmaple for constructing custom pipes and so on please check our exampls thx`

    
    alertBox($event) {
      $event.stopPropagation();
      alert("You clicked alert");
    }

    onKeyUp(){
      
        console.log("Enter is pressed");
    }

      // template variables
    onKeyUp2(email){
      
      console.log(email);
  }
  //two way binding

  // template variables
  onKeyUp3(){  
    console.log(this.email3);
}
    constructor(private service: CoursesService){
    this.courses = service.getCourses();
   }



  ngOnInit(): void {
  }

}
