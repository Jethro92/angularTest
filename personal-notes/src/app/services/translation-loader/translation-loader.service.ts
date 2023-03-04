import { map } from 'rxjs/operators';
import { APP_CONFIG_VALUE } from 'src/assets/urls/urls';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { flatMap, from, Observable } from 'rxjs';
import { db } from 'src/app/app.module';
import { Translation } from 'src/app/models/translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService implements TranslateLoader {

  constructor(private http: HttpClient) { }

  getTranslation(lang: string): Observable<any> {
    const promise = db.translations
      .where('lang')
      .equals(lang)
      .toArray()
      .then( results => {
        if(results.length === 0){
          return this.http
            .get<Translation[]>(APP_CONFIG_VALUE.apiEndpoint + 'api/translation?lang')
            .toPromise()
            .then((apiResults: any) => {
              db.translations.bulkAdd(apiResults);
              return apiResults;
            });
        }
        return results;
      }).then((translations) => {
        console.log("loaded translations:");
        console.log(translations);
        return translations;
      }).then((translations) => {
        return translations.map((t:any) => ({ [t.key]: t.value}))
      });
    return from(promise).pipe(flatMap((elements) => from(elements)));
  }


}

function   HTTPLoaderFactory(http: HttpClient){
  return new TranslationLoaderService(http);
}
