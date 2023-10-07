import { NgModule } from "@angular/core";
import { RegisterComponent } from './modal/register/register.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from './modal/login/login.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        AgmCoreModule
    ],
  providers: [],
  bootstrap: []
})
export class UserModule {}
