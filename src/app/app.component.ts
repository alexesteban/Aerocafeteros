import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public urlRedirect: string = "";
  public menuActive: boolean;
  
  constructor(private router: Router) {
    router.events.subscribe((val) => {
        // see also 
        if(val instanceof NavigationEnd){
          this.urlRedirect = val.urlAfterRedirects;
        }
        
    });
  }

  public toggleMenu() {
    if(this.menuActive){
      this.menuActive = false;
    }else{
      this.menuActive = true;
    }
  }

}
