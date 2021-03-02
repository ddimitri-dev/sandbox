import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadCatalog, loadCatalogFailure, loadCatalogSuccess} from "./catalog.actions";
import {CatalogService} from "../service/catalog.service";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class CatalogEffect {

  // ------ LOAD_CATALOG -> LOAD_ARTICLES->LOAD_AA

  loadCatalog$ = createEffect(() => {
    return this.action$.pipe(
      tap(action => {
        console.log(action);
      }),
      ofType(loadCatalog),
      tap(action => {
        console.log(action);
      }),
      switchMap(() => {
        return this.catalogService.loadArticles().pipe(
          tap(result => {
            console.log(result);
          }),
          map((productItems) => {
            return loadCatalogSuccess({items: productItems})
          }),
          catchError((error: string) => {
            return of(loadCatalogFailure({err: error}))
          }),
        tap(action => {
          console.log(action);
        }),
        )
      })
    )
  });

  constructor(
    private action$: Actions,
    private catalogService: CatalogService) {
  }

}
