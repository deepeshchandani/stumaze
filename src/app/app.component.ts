import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stumaze';
  id=null
  user:any=null
  constructor(public route:ActivatedRoute, private http:HttpClient)
  {
  }
  
/*   getUser(id){
      this.http.get('https://us-central1-stumaze-38bcf.cloudfunctions.net/iswadhyay/api/v1/users/'+id).subscribe(data=>{
      this.user=data
      console.log(this.user)     
    })
  } */
  }



