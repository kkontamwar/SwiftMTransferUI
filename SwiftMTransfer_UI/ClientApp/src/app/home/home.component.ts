import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  name = new FormControl('');
  public accNumber = '1212';
  baseUrl: string;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.http = http;
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
    this.baseUrl = "https://swiftmtransferapi.azurewebsites.net/api/User";


    //this.http.post(this.baseUrl,
    //  {
    //    'AddUser': {
    //      'FirstName': 'firstName_hh',
    //      'LastName': 'last_name',
    //      'EmailID': 'email@hh.com',xC
    //      'PhoneNumber': '1234'
    //    }
    //  }
    //);

    this.http.post(this.baseUrl,this.registerForm.value).subscribe(result => {
      console.log("Value returned from web service call is ", result),
        this.accNumber=result.toString(),
      this.router.navigate(['/counter']);
    }, error => console.error(error));

    console.log("Value returned from web service call is ");

    //this.accNumber = "123123";
    //this.http.get(this.baseUrl).subscribe(result => {
    //  console.log("Value returned from web service call is ", result),
    //    this.accNumber=result.toString(),
    //  this.router.navigate(['/counter']);
    //}, error => console.error(error));

  }


}
