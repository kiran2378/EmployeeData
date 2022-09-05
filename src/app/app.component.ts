import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee: any;
  
  

  constructor(employeeData : EmployeeService)

  {
      employeeData.employee().subscribe ((data)=>{
         console.log("data",data);
         this.employee = data
         
         this.employee.forEach(function(element: { hoursWorked: any; StarTimeUtc: any; EndTimeUtc:any }){

          var date1 = new Date(element.StarTimeUtc);
          var date2 = new Date(element.EndTimeUtc);
            
          // To calculate the time difference of two dates
          var Difference_In_Time = date2.getTime() - date1.getTime();
            var humanReadable = Math.round((Difference_In_Time/3600 ) / 1000)
            
            element.hoursWorked =  (humanReadable)
          //  element.hoursWorked = hoursWorked
          // console.log(humanReadable)
              // console.log(element.new )
         });




 
      });

     }


  ngOnInit(): void {

    
   }
}



