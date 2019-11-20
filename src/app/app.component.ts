import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'line-liff';
  profile: any;
  
  getProfile(event){
    this.profile = event
  }
}
