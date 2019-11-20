import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-line-liff',
  templateUrl: './line-liff.component.html',
  styleUrls: ['./line-liff.component.scss']
})
// declare var liff: any;

export class LineLiffComponent implements OnInit {
  @Output() getProfile = new EventEmitter();
  profile: LIFFUserProfile;
  message: string;
  title = 'hello! ';
  ngOnInit() { 
    new Promise<LIFFUserProfile>(resolve => {
      liff
      .init({
          liffId: '1653396487-gqObKezQ'
      })
      .then((resp) => {
          // start to use LIFF's api
          console.log(resp)
          resolve(liff.getProfile());
      })
      .catch((err) => {
          console.log(err)
          // document.getElementById("liffAppContent").className.add('hidden');
          // document.getElementById("liffInitErrorMessage").className.remove('hidden');
      });
    })
      .then((profile) => {
        this.profile = profile;
        this.getProfile.emit(profile)
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
