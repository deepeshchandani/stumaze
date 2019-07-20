import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {;
  user=null
  constructor(public route:ActivatedRoute,private http:HttpClient,private storage: AngularFireStorage) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("id"))
    this.getUser(this.route.snapshot.paramMap.get("id"))
  }
  getUser(id){
    this.http.get('https://us-central1-stumaze-38bcf.cloudfunctions.net/iswadhyay/api/v1/users/'+id).subscribe(data=>{
    this.user=data
    this.user.data.imageLogo= this.storage.ref(this.user.data.imageLogo).getDownloadURL()


    console.log(this.user)     
  })
}

}
