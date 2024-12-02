import { NgModule, CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { StayFilterComponent } from './cmps/stay-filter/stay-filter.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { StayOrderComponent } from './cmps/details/stay-order/stay-order.component';
import { ReviewListComponent } from './cmps/details/review-list/review-list.component';
import { ReviewPreviewComponent } from './cmps/details/review-preview/review-preview.component';
import { HostInfoComponent } from './cmps/details/host-info/host-info.component';
import { AirbnbCalendarModule } from 'ngx-airbnb-calendar';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { HeaderMenuModalComponent } from './cmps/header-menu-modal/header-menu-modal.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UserOrderComponent } from './cmps/user-order/user-order.component';
import { UserTripsComponent } from './cmps/user-trips/user-trips.component';
import { UserStaysComponent } from './cmps/user-stays/user-stays.component';
import { EditStayComponent } from './cmps/edit-stay/edit-stay.component';
import { HeaderFilterComponent } from './cmps/header-filter-folder/header-filter/header-filter.component';
import { HeaderFilterModalComponent } from './cmps/header-filter-folder/header-filter-modal/header-filter-modal.component';
import { SearchPlaceModalComponent } from './cmps/header-filter-folder/search-place-modal/search-place-modal.component';
import { OrderFilterModalComponent } from './cmps/order-filter-modal/order-filter-modal.component';
import { GuestModalComponent } from './cmps/guest-modal/guest-modal.component';
import { HeaderFilterGuestModalComponent } from './cmps/header-filter-folder/header-filter-guest-modal/header-filter-guest-modal.component';
import { PurchaseIndicationComponent } from './cmps/details/purchase-indication/purchase-indication.component';
import { UserWishlistComponent } from './cmps/user-wishlist/user-wishlist.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './cmps/loader/loader.component';
import { AddReviewComponent } from './cmps/details/add-review/add-review.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonLoaderComponent } from './cmps/skeleton-loader/skeleton-loader.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AdminDataComponent } from './pages/admin-data/admin-data.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    StayIndexComponent,
    StayFilterComponent,
    StayListComponent,
    StayPreviewComponent,
    ImgCarouselComponent,
    StayDetailsComponent,
    StayOrderComponent,
    ReviewListComponent,
    ReviewPreviewComponent,
    AppFooterComponent,
    HostInfoComponent,
    HeaderMenuModalComponent,
    LoginComponent,
    UserComponent,
    UserOrderComponent,
    UserTripsComponent,
    UserStaysComponent,
    EditStayComponent,
    HeaderFilterComponent,
    HeaderFilterModalComponent,
    SearchPlaceModalComponent,
    OrderFilterModalComponent,
    GuestModalComponent,
    HeaderFilterGuestModalComponent,
    PurchaseIndicationComponent,
    UserWishlistComponent,
    LoaderComponent,
    AddReviewComponent,
    SkeletonLoaderComponent,
    AdminDataComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    GoogleMapsModule,
    AirbnbCalendarModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxStarRatingModule,
    NgxSkeletonLoaderModule,
    LazyLoadImageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}
