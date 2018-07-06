import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { HttpHelper } from "../helper/http.helper";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";

/*
 * Service to wrap REST HTTP calls and to provide a HAL-based API
 */
@Injectable()
export class RestClientService {
  private readonly HEADERS: HttpHeaders = new HttpHeaders();

  constructor(private _http: HttpClient,
              private _httpHelper: HttpHelper) {
  }

  /**
   * Wrapper for HTTP GET operation
   */
  public get(baseUrl: string, url: string, paramsMap?: Map<any, any>): Observable<any> {
    this.HEADERS.set("Cache-Control", "no-cache");
    let options: any = { headers: this.HEADERS };
    if (paramsMap) {
      const requestParams: HttpParams = new HttpParams();
      paramsMap.forEach((key, value) => {
        requestParams.set(key, value);
      });
      options = { headers: this.HEADERS, params: requestParams };
    }
    return this._http.get<any>(this._httpHelper.getRestApiBaseUrl(baseUrl) + url, options);
  }

  /**
   * Wrapper for HTTP POST operation
   */
  public post(baseUrl: string, url: string, body?: string): Observable<any> {
    this.HEADERS.set("Content-Type", "application/json");
    const options = { headers: this.HEADERS };
    if (body === null) {
      body = "";
    }
    return this._http.post<any>(this._httpHelper.getRestApiBaseUrl(baseUrl) + url, body, options);
  }

  /**
   * Wrapper for HTTP PUT operation
   */
  public put(baseUrl: string, url: string, body?: string): Observable<any> {
    this.HEADERS.set("Content-Type", "application/json");
    const options = { headers: this.HEADERS };
    if (body === null) {
      body = "";
    }
    return this._http.put<any>(this._httpHelper.getRestApiBaseUrl(baseUrl) + url, body, options);
  }
}
