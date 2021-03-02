import {TestBed} from "@angular/core/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import {Actions} from "@ngrx/effects";
import {CatalogEffect} from "./catalog.effect";
import {CatalogService} from "../service/catalog.service";
import {cold, hot} from "jasmine-marbles";
import {addToCart, removeFromCart} from "../../cart/cart-store/cart.actions";
import {loadCatalog, loadCatalogFailure, loadCatalogSuccess} from "./catalog.actions";


fdescribe("" , () => {
  let action$: Actions;
  let effect: CatalogEffect;
  let catalogService: jasmine.SpyObj<CatalogService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
      ],
      providers: [
        provideMockActions(() => action$),
        CatalogEffect,
        CatalogService
       /* {
          provide: CatalogService,
          useValue: jasmine.createSpyObj('CatalogService', ['loadArticles'])
        }*/
      ]
    });

    effect = TestBed.inject(CatalogEffect);
    catalogService = TestBed.inject(CatalogService) as unknown as jasmine.SpyObj<CatalogService>;
    spyOn(catalogService, "loadArticles")
  });

  it("should test", () => {
    // Given
    catalogService.loadArticles.and.returnValue(
      hot('---f', {
        f: [
          {
            name: 'Product C',
            price: 230,
            img: '/assets/product-images/product-3.png',
          }, {
            name: 'Product D',
            price: 64,
            img: '/assets/product-images/product-4.png',
          }
        ]
      }, "Something wrong")
    )



    // When
    action$ = hot('b', {
      a: addToCart(null),
      b: loadCatalog(),
      c: removeFromCart(null),
    });

    // Then
    expect(effect.loadCatalog$).toBeObservable(hot(
      '---z', {

        z: loadCatalogSuccess({items: [
            {
              name: 'Product C',
              price: 230,
              img: '/assets/product-images/product-3.png',
            }, {
              name: 'Product D',
              price: 64,
              img: '/assets/product-images/product-4.png',
            }
          ]}),
        y: loadCatalogFailure({err: "Something wrong"})
      }
    ))

  });
});
