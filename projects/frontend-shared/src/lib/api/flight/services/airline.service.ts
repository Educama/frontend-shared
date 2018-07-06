import { Injectable } from "@angular/core";
import {
  Observable,
  throwError as observableThrowError
} from "rxjs";
import { AirlineListResource } from "../resources/airline-list.resource";
import { AirlineSuggestionsResource } from "../resources/airline-suggestions.resource";
import { RestClientService } from "../../../http/services/rest-client.service";
import { SortOrder } from "../../../enums/sort-order.enum";
import { Store } from "@ngrx/store";
import {
  AddErrorWithKeyAction,
  AddErrorWithTextAction
} from "../../../error/store/error.actions";
import { catchError } from "rxjs/operators";

/*
 * Service to communicate with Customer Resource
 */
@Injectable()
export class AirlineService {

  private AIRLINES_RESOURCE_PATH = "airlines";
  private AIRLINE_SUGGESTIONS_RESOURCE_PATH: string = this.AIRLINES_RESOURCE_PATH + "/suggestions";

  constructor(private _restClientService: RestClientService) {
  }

  /*
   * Find all airlines
   *
   * @return An observable array of airlines
   */
  public findAirlines(baseUrl: string, pageNumber: number, pageSize: number, store: Store<any>, sortBy?: string,
                      sortOder?: SortOrder): Observable<AirlineListResource> {
    const pageNumberText = "page=" + pageNumber;
    const pageSizeText = "size=" + pageSize;
    let sortText = "sort=" + sortBy;
    sortText = sortOder === SortOrder.ascending ? sortText + ",asc" : sortText;
    sortText = sortOder === SortOrder.desending ? sortText + ",desc" : sortText;
    return this._restClientService
               .get(baseUrl, this.AIRLINES_RESOURCE_PATH + "?" + pageNumberText + "&" + pageSizeText + "&" + sortText)
               .pipe(catchError(error => this.handleError(store, error)));
  }

  /*
   * Find suggestions for airlines based on a search term
   *
   * @return An observable array of airlines
   */
  public findAirlineSuggestions(baseUrl: string, term: string, store: Store<any>, pageNumber?: number,
                                pageSize?: number): Observable<AirlineSuggestionsResource> {
    return this._restClientService
               .get(baseUrl, this.AIRLINE_SUGGESTIONS_RESOURCE_PATH + "?term=" + term)
               .pipe(catchError(error => this.handleError(store, error)));
  }

  private handleError(store: Store<any>, error: any) {
    let errMsg: string;
    if (error.status === 0) {
      errMsg = "REST-CLIENT-SERVICE_ERROR-SERVER-UNREACHABLE";
      store.dispatch(new AddErrorWithKeyAction(errMsg));
    } else {
      errMsg = error._body;
      store.dispatch(new AddErrorWithTextAction(errMsg));
    }
    return observableThrowError(errMsg);
  }
}
