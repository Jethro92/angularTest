import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal Notes';
  time: Observable<string>;


  constructor(public translate: TranslateService){
    this.time = new Observable(observer => {
      setInterval(() =>  {
        observer.next(new Date().toString());
        observer.complete();
      }, 1000);
    });

    console.log("********** get translation");
    translate.getTranslation("en").subscribe(x => console.log('x: ' + JSON.stringify(x)));
    translate.setDefaultLang('es');
  }

  onSelected(value:string){
    this.translate.use(value);
  }
}


