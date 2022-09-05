import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
// import { Employee } from './Employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  url : string = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";

  employee()
  {
    return this.http.get(this.url);
  }
}
