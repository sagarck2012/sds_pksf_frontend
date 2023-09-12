import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrateListComponent } from './crate-list/crate-list.component';
import { CrateRegisterComponent } from './crate-register/crate-register.component';
import { CrateReturnComponent } from './crate-return/crate-return.component';
import { CrateStickerComponent } from './crate-sticker/crate-sticker.component';
import { CratingComponent } from './crating/crating.component';
import { CropListComponent } from './crop-list/crop-list.component';
import { CropTypeListComponent } from './crop-type-list/crop-type-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PackagingDetailComponent } from './packaging-detail/packaging-detail.component';
import { PackagingSearchComponent } from './packaging-search/packaging-search.component';
import { PackagingStickerComponent } from './packaging-sticker/packaging-sticker.component';
import { PackagingComponent } from './packaging/packaging.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';
import { ShipmentAddComponent } from './shipment-add/shipment-add.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentReceiveComponent } from './shipment-receive/shipment-receive.component';
import { StickerPrintedComponent } from './sticker-printed/sticker-printed.component';
import { StickerReprintComponent } from './sticker-reprint/sticker-reprint.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserInactiveListComponent } from './user-inactive-list/user-inactive-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { VideoSurveillanceComponent } from './video-surveillance/video-surveillance.component';

const routes: Routes = [
  { path: 'crate/list', component: CrateListComponent, canActivate: [AuthGuard] },
  { path: 'crate/register', component: CrateRegisterComponent, canActivate: [AuthGuard] },
  { path: 'crate/return', component: CrateReturnComponent, canActivate: [AuthGuard] },
  { path: 'crate/sticker', component: CrateStickerComponent, canActivate: [AuthGuard] },
  { path: 'crating', component: CratingComponent, canActivate: [AuthGuard] },
  { path: 'crop', component: CropListComponent, canActivate: [AuthGuard] },
  { path: 'crop/:id/types', component: CropTypeListComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/vegetable/list', component: VegetableListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'packaging/detail/:harvest_id/:bar_code', component: PackagingDetailComponent},
  { path: 'packaging/package', component: PackagingComponent, canActivate: [AuthGuard] },
  { path: 'packaging/search', component: PackagingSearchComponent, canActivate: [AuthGuard] },
  { path: 'packaging/sticker', component: PackagingStickerComponent, canActivate: [AuthGuard] },
  { path: 'password/forgot', component: PasswordResetComponent },
  { path: 'surveillance', component: VideoSurveillanceComponent, canActivate: [AuthGuard] },
  { path: 'shipment/receive', component: ShipmentReceiveComponent, canActivate: [AuthGuard] },
  { path: 'shipment/add', component: ShipmentAddComponent, canActivate: [AuthGuard] },
  { path: 'shipment/list', component: ShipmentListComponent, canActivate: [AuthGuard] },
  { path: 'sticker/reprint', component: StickerReprintComponent, canActivate: [AuthGuard] },
  { path: 'sticker/search', component: StickerPrintedComponent, canActivate: [AuthGuard] },
  { path: 'user/edit', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'user/list/active', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'user/list/inactive', component: UserInactiveListComponent, canActivate: [AuthGuard] },
  { path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'user/register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
