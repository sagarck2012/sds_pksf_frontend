import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// Other
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';
// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackagingComponent } from './packaging/packaging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackagingSearchComponent } from './packaging-search/packaging-search.component';
import { CratingComponent } from './crating/crating.component';
import { CrateRegisterComponent } from './crate-register/crate-register.component';
import { CrateStickerComponent } from './crate-sticker/crate-sticker.component';
import { PackagingStickerComponent } from './packaging-sticker/packaging-sticker.component';
import { CrateListComponent } from './crate-list/crate-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ShipmentAddComponent } from './shipment-add/shipment-add.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropTypeListComponent } from './crop-type-list/crop-type-list.component';
import { UserInactiveListComponent } from './user-inactive-list/user-inactive-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StickerPrintedComponent } from './sticker-printed/sticker-printed.component';
import { StickerReprintComponent } from './sticker-reprint/sticker-reprint.component';
import { ShipmentReceiveComponent } from './shipment-receive/shipment-receive.component';
import { CrateReturnComponent } from './crate-return/crate-return.component';
import { ShipmentDialogComponent } from './shipment-dialog/shipment-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { PackagingDetailComponent } from './packaging-detail/packaging-detail.component';
import { VideoSurveillanceComponent } from './video-surveillance/video-surveillance.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PackagingComponent,
    DashboardComponent,
    PackagingSearchComponent,
    CratingComponent,
    CrateRegisterComponent,
    CrateStickerComponent,
    PackagingStickerComponent,
    CrateListComponent,
    UserListComponent,
    ShipmentAddComponent,
    CropListComponent,
    CropTypeListComponent,
    UserInactiveListComponent,
    SidebarComponent,
    ShipmentListComponent,
    PasswordResetComponent,
    StickerPrintedComponent,
    StickerReprintComponent,
    ShipmentReceiveComponent,
    CrateReturnComponent,
    ShipmentDialogComponent,
    NavbarComponent,
    UserProfileComponent,
    UserEditComponent,
    VegetableListComponent,
    PackagingDetailComponent,
    VideoSurveillanceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotifierModule,
    WebcamModule,

    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,

    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
