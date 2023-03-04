import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Note } from 'src/app/models/note.model';
import { Translation } from 'src/app/models/translation';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService extends Dexie {
  notes!: Dexie.Table<Note, number>;
  translations!: Dexie.Table<Translation, number>;

  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      notes: '++id, title, content',
    });
    this.version(2).stores({
      notes: '++id, title, content',
      translations: '++id, lang, key, value'
    })
 }
}


