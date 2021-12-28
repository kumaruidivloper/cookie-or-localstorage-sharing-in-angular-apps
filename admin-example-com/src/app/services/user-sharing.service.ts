import { Injectable, OnInit, Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()

export class UserSharingService {
  private bucket;
  private userStorage;
  constructor() {
    this.userStorage = JSON.parse(localStorage.getItem('abc.example.com'));
   }

   postCrossDomainMessage(link, portal= 'student'): void {
    let postURL: any;
    let iframeId: any;
    if (portal === 'student') {
        postURL =  environment.studentURL;
        iframeId = 'student-ifr';
    }
    const iframe = document.getElementById(iframeId);
    if (iframe === null) {
      return;
    }
    const iWindow = ( iframe as HTMLIFrameElement ).contentWindow;
    const linkURL = postURL + link;
    window.open(linkURL, '_blank');
    const storageData = this.userStorage;
    iWindow.postMessage(storageData, postURL);
  }
}
