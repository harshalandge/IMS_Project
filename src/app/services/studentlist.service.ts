import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  constructor(private httpS:HttpClient) { }
  baseurl:string="http://3.110.193.86:4444"

  getemployeedata(){
    return this.httpS.get(`${this.baseurl}/employee/employees`)
  }

saveemployeedata(body:any){
  return this.httpS.post(`${this.baseurl}/employee/`,body)
}

getempdatabyid(id:number){
  return this.httpS.get(`${this.baseurl}/employee/id/${id}`)
}

updateempdata(id:number,body:any){
  return this.httpS.put(`${this.baseurl}/employee/id/${id}`,body)
}
deleteempdata(id:number){
  return this.httpS.delete(`${this.baseurl}/employee/id/${id}`)
}
}
