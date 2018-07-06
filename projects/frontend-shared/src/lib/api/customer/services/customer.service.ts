import { Injectable } from "@angular/core";
import { RestClientService } from "../../../http/services/rest-client.service";
import { CustomerResource } from "../resources/customer.resource";
import { CustomerListResource } from "../resources/customer-list.resource";
import { CustomerSuggestionsResource } from "../resources/customer-suggestions.resource";
import { Store } from "@ngrx/store";
import {
  AddErrorWithKeyAction,
  AddErrorWithTextAction
} from "../../../error/store/error.actions";
import {
  Observable,
  throwError as observableThrowError
} from "rxjs";
import { catchError } from "rxjs/operators";

/*
 * Service to communicate with Customer Resource
 */
@Injectable()
export class CustomerService {

  // private CUSTOMER_RESOURCE_PATH:string = "customers";
  private CUSTOMER_RESOURCE_PATH = "customers";
  private CUSTOMER_SUGGESTIONS_RESOURCE_PATH: string = this.CUSTOMER_RESOURCE_PATH + "/suggestions";

  constructor(private _restClientService: RestClientService) {
  }

  /*
   * Create a new customer
   *
   * @param customer The customer to be created
   * @return An observable of a customer
   */
  public createCustomer(baseUrl: string, customer: CustomerResource, store: Store<any>): Observable<CustomerResource> {
    return this._restClientService
               .post(baseUrl, this.CUSTOMER_RESOURCE_PATH, JSON.stringify(customer))
               .pipe(catchError(error => this.handleError(store, error)));
  }

  /*
   * Update a customer
   *
   * @param customer The customer to be created
   * @return An observable of a customer
   */
  public updateCustomer(baseUrl: string, uuid: String, customer: CustomerResource, store: Store<any>): Observable<CustomerResource> {
    return this._restClientService
               .put(baseUrl, this.CUSTOMER_RESOURCE_PATH + "/" + uuid, JSON.stringify(customer))
               .pipe(catchError(error => this.handleError(store, error)));
  }

  /*
   * Find customer by
   *
   * @return An observable array of customers
   */
  public findCustomerById(baseUrl: string, uuid: string, store: Store<any>): Observable<CustomerResource> {
    return this._restClientService
               .get(baseUrl, this.CUSTOMER_RESOURCE_PATH + "/" + uuid)
               .pipe(catchError(error => this.handleError(store, error)));
  }

  /*
   * Find all customers
   *
   * @return An observable array of customers
   */
  public findCustomers(baseUrl: string, pageNumber: number, pageSize: number, store: Store<any>): Observable<CustomerListResource> {
    const pageNumberText = "page=" + pageNumber;
    const pageSizeText = "size=" + pageSize;
    return this._restClientService
               .get(baseUrl, this.CUSTOMER_RESOURCE_PATH + "?" + pageNumberText + "&" + pageSizeText)
               .pipe(catchError(error => this.handleError(store, error)));
  }

  /*
   * Find suggestions for customers based on a search term
   *
   * @return An observable array of customers
   */
  public findCustomerSuggestions(baseUrl: string, term: string, store: Store<any>, pageNumber?: number,
                                 pageSize?: number): Observable<CustomerSuggestionsResource> {
    const pageNumberText = (pageNumber) ? "&page=" + pageNumber : "&page=0";
    const pageSizeText = (pageSize) ? "&size=" + pageSize : "&size=10";
    return this._restClientService
               .get(baseUrl, this.CUSTOMER_SUGGESTIONS_RESOURCE_PATH + "?term=" + term + pageNumberText + pageSizeText)
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
