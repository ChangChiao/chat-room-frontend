import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HTTP_CONFIG } from '../configs/http.config';

@Injectable({ providedIn: 'root' })
export class HttpService {
  #http = inject(HttpClient);
  #config = inject(HTTP_CONFIG);
  #basePath = this.#config.basePath;

  get<T>(url: string): Observable<T> {
    return this.#http.get<T>(`${this.#basePath}${url}`).pipe(
      map((response) => response),
      catchError((err: unknown) => this.#handleError(err))
    );
  }

  post<T>(url: string, body: unknown): Observable<T> {
    return this.#http.post<T>(`${this.#basePath}${url}`, body).pipe(
      map((response) => response),
      catchError((err: unknown) => this.#handleError(err))
    );
  }

  put<T>(url: string, body: unknown): Observable<T> {
    return this.#http.put<T>(`${this.#basePath}${url}`, body).pipe(
      map((response) => response),
      catchError((err: unknown) => this.#handleError(err))
    );
  }

  patch<T>(url: string, body: unknown): Observable<T> {
    return this.#http.patch<T>(`${this.#basePath}${url}`, body).pipe(
      map((response) => response),
      catchError((err: unknown) => this.#handleError(err))
    );
  }

  deleteRequest<T>(url: string): Observable<T> {
    return this.#http
      .delete<T>(`${this.#basePath}${url}`)
      .pipe(catchError((err: unknown) => this.#handleError(err)));
  }

  #handleError(err: unknown): Observable<never> {
    return throwError(() => err);
  }
}
