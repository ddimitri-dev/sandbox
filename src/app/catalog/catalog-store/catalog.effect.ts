import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadCatalog, loadCatalogFailure, loadCatalogSuccess, nextCatalogPage} from "./catalog.actions";
import {CatalogService} from "../service/catalog.service";
import {catchError, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {CatalogState} from "./catalog.store";
import {Store} from "@ngrx/store";
import {selectorPageIndex} from "./catalog.selector";

@Injectable()
export class CatalogEffect {

  // ------ LOAD_CATALOG -> LOAD_ARTICLES->LOAD_AA

  loadCatalog$ = createEffect(() => {
    return this.action$.pipe(
      ofType(
        loadCatalog,
     //   nextCatalogPage,
      ),
    //  withLatestFrom(this.store.select(selectorPageIndex)),
      switchMap(() => {
        return this.catalogService.loadArticles().pipe(
          map((productItems) => {
            return loadCatalogSuccess({items: productItems})
          }),
        )
      }),
    catchError((error: string) => {
      return of(loadCatalogFailure({err: error}))
    }),
    )
  });

  constructor(
    private action$: Actions,
    private catalogService: CatalogService,
   // private store: Store<CatalogState>
  ) {

  }

}
