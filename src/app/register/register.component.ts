import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ProductionHouse } from '../model/production-house/production-house.model';
import { Role } from '../model/role/role.model';
import { ProductionHouseService } from '../service/production-house/production-house.service';
import { RoleService } from '../service/role/role.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  notifier: NotifierService;
  registerForm: FormGroup;
  roles: Role[];
  productionHouses: ProductionHouse[];
  user_id: number;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private roleService: RoleService,
    private productionHouseService: ProductionHouseService,
    private notifierService: NotifierService
  ) {
    this.registerForm = this.formBuilder.group({});
    this.roles = []
    this.productionHouses = [];
    this.user_id = parseInt(localStorage.getItem("user_id") + "");
    this.notifier = this.notifierService;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      nid: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      role: ['0'],
      production_house: ['0']
    });

    this.roleService.getRoleList(this.user_id).subscribe(data => {

      this.roles = data;
      console.log(this.roles);
    });
    this.productionHouseService.getProductionHouseList(this.user_id).subscribe(data => {

      this.productionHouses = data.production_house_list;
      console.log(this.productionHouses);
    });
  }

  onRoleChange(role_id: string) {
    console.log(role_id);
  }

  onProductionHouseChange(production_house_id: string) {
    console.log(production_house_id);
  }

  onSubmit() {
    this.userService.registerUser(this.registerForm.value).subscribe(data => {
      this.notifier.notify('success', 'User has been added!');
      this.registerForm = this.formBuilder.group({});
      this.router.navigate(['/user/list']);
    }, err => {
      console.log(err);
      this.notifier.notify('error', err.error.email);
    });
  }
}
