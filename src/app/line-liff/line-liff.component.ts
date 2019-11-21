import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-line-liff',
  templateUrl: './line-liff.component.html',
  styleUrls: ['./line-liff.component.scss'],
  providers:[ CustomerService ]
})
// declare var liff: any;

export class LineLiffComponent implements OnInit {

  constructor(private customerService:CustomerService){}

  @Output() getProfile = new EventEmitter();
  profile: LIFFUserProfile;
  message: string;
  title = 'hello! ';
  ngOnInit() { 
    let profile_data = {
      data:{
        line_account : {
          user_id: 'this.profile.userId',
          display_name: 'this.profile.displayName'
        },
      }
    }
    this.customerService.createCustomer(profile_data).then((resp:any)=>{
      console.log(resp)
    })
    new Promise<LIFFUserProfile>(resolve => {
      liff
      .init({
          liffId: '1653396487-gqObKezQ'
      })
      .then((resp) => {
          // start to use LIFF's api
          resolve(liff.getProfile());
      })
      .catch((err) => {
          console.log(err)
      });
    })
      .then((profile) => {
        this.profile = profile;
        this.getProfile.emit(profile)
        let profile_data = {
          data:{
            line_account : {
              user_id: 'this.profile.userId',
              display_name: 'this.profile.displayName'
            },
          }
        }
        this.customerService.createCustomer(profile_data).then((resp:any)=>{
          console.log(resp)
        })
        // liff.sendMessages([{
        //   'type': 'image',
        //   'originalContentUrl': profile.pictureUrl,
        //   'previewImageUrl': profile.pictureUrl,
        // },{
        //   'type': 'text',
        //   'text': 'From: '+profile.displayName
        // }]).then(function() {
        //     window.alert('Message sent');
        // }).catch(function(error) {
        //     window.alert('Error sending message: ' + error);
        // });
      });
  }

  closeApp(event) { 
    liff.sendMessages([{
      'type': 'text',
      'text': "You've successfully sent a message! Hooray!"
    }]).then(function() {
        window.alert('Message sent');
    }).catch(function(error) {
        window.alert('Error sending message: ' + error);
    });
  }
}
