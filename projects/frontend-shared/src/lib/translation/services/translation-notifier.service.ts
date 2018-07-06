import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable
} from "rxjs";

@Injectable()
export class TranslationNotifierService {

  // Sources
  private _translationsLoaded = new BehaviorSubject<boolean>(false);

  // Observable sources
  public translationsLoaded$ = this._translationsLoaded.asObservable() as Observable<boolean>;

  public publishTranslationsLoaded() {
    this._translationsLoaded.next(true);
  }
}
