import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketPlace';
  loggedIn=false
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private commonService:CommonService
    ) {
    this.router.events.subscribe((res) => { 
      if(this.router.url=='/login'){
        this.loggedIn=false
      }else{
        this.loggedIn=true
      }
  })
  }
  logOut(){
    this.router.navigateByUrl("/login")
  }
}
