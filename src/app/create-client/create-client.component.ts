import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit   {
  name:string='';
  alertp=false;
  Email:string='';
  Address:string='';
  Password:string='';
  RPassword:string='';
  topic:string='';
  People:number=0;
  datetimer:string='';
   message1:string='';
   message2:string='';
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.name='';
    this.name='';
    this.Email='';
    this.Address='';
    this.Password='';
    this.RPassword='';
    this.topic='';
    this.People=0;
    this.datetimer='';
    this.message1='';
    this.message2='';
  }

  

  Register(){
    console.log(this.Password,this.RPassword)
    if (this.Password != this.RPassword)
    {
      console.log(this.alertp)
      this.alertp = true
    } else {
      this.alertp = false
    const client={
      name:this.name,
      Email:this.Email,
      Address:this.Address,
      Password:this.Password,
      RPassword:this.RPassword}
      this.http.post('http://localhost:3000/CreateClient',client)
      .subscribe((response:any)=> 
      {this.message1=response.message},
      (error)=>{console.error('Error adding the Client'),error}) 
    }
  }

  

  Schedule(){
    const meeting={
      topic:this.topic,
      People:this.People,
      datetimer:this.datetimer

  }
  this.http.post('http://localhost:3000/CreateMeeting',meeting)
      .subscribe((response:any)=> 
      {this.message2=response.message},
      (error)=>{console.error('Error adding the Meeting'),error}
      
    )
          
}
clearForm(){
  if (this.alertp==false){
   this.name='';
  this.name='';
  this.Email='';
  this.Address='';
  this.Password='';
  this.RPassword='';
  this.topic='';
  this.People=0;
  this.datetimer='';}
  }


}

