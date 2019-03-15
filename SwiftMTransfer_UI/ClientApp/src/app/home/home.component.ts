import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  name = new FormControl('');
  clickMessage = '';
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mNumber: ['', Validators.required],
      emailID: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get function() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
    const url = "https://swiftmtransferapi.azurewebsites.net/api/User";


    this.http.get(url).subscribe(result => {
      console.log("Value returned from web service call is ", result),
        this.name.setValue(result);
      this.router.navigate(['/counter']);
    }, error => console.error(error));


    //this.http.post(this.baseUrl + 'api/SampleData/PostRegisterData', this.registerForm.value).subscribe(result => {
    //  console.log("Value returned from web service call is ", result),
    //    this.name.setValue(result);
    //  this.router.navigate(['/counter']);
    //}, error => console.error(error));

  }


}
