import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { $ } from 'protractor';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Pipe({ name: 'loginComponent' })
export class LoginComponent implements OnInit {

  public fromA = 'buba';
  public fromAny = 'KUKA';
  public control: any;
  method2 = {
    control: () => {
      this.control = (document.getElementById("control") as any).value;
      var matches = this.control.match(/\b(\w)/g);
      if (matches == 'A' || matches == 'a') {
        this.fromA == 'test';
        alert('test');
        ;
      } else {
        this.fromAny == this.control.toUpperCase();
        alert(this.control.toUpperCase())
      }

    }
  }


  constructor(private router: Router,
    private authService: AuthService,
    private routerMainigasNosaukums: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    if (this.authService.isUsernameCorrect())
      this.router.navigateByUrl("/galvenaLapa");
    else
      sessionStorage.clear();
  }
  admins = {

    login: "admin",
    parole: "admin"
  }
  page = {
    showError: false,
    errorMessage: "Parole vai logins nav pareiz",
    login: "123",
    l1: "", //JAUNS
    p1: "", //JAUNS
    maxVal: true,
    indexVal: false
  }
  method = {
    onLoginClick: () => {
      //alert(this.page.login);
      // let logins = (document.getElementById("loginId") as HTMLInputElement).value;
      // let parole = (document.getElementById("paroleId") as HTMLInputElement).value;
      let logins = this.page.l1;//JAUNS
      let parole = this.page.p1;//JAUNS

      this.http.post("http://localhost:3312/checkUser",
        { login: logins, parole: parole }).toPromise()
        .then((result) => {
          console.log("atnaca atbilde", result);
        })
        .catch(err => {
          console.log("problema", err);
        });

      if (logins != this.admins.login || parole != this.admins.parole) {
        this.page.showError = true;
      } else {
        this.page.showError = false;
        sessionStorage.setItem("username", logins);
        this.routerMainigasNosaukums.navigateByUrl("/galvenaLapa");

      }
    },
    checkDigit: () => {
      let check = (document.getElementById("digitsOrLetters") as any).value;      
      var arr = check.split(":");
      var max = Math.max.apply(null, arr);
      var index = arr.indexOf(max.toString());
      this.page.maxVal = max;
      this.page.indexVal = index;


    }

  }
  paraditCiparus = true;

  onClickMe_Clicked = () => {
    this.paraditCiparus = !this.paraditCiparus;//true=>false
    //false=>true
  }

  valid = () => {

    let name = (document.getElementById("name") as any).value;
    let templatesName = new RegExp("^[a-zA-Z]+([ -][a-zA-Z]+)*$");
    var isMatchName = templatesName.test(name);
    if (isMatchName == true) {
      document.getElementById("name").style.borderColor = "green";
    } else {
      document.getElementById("name").style.borderColor = "red";
    }

    let phone = (document.getElementById("phone") as any).value;
    let templatesPhone = new RegExp("^([+]?[0-9\s-\(\)]{3,25})*$");
    var isMatchPhone = templatesPhone.test(phone);
    if (isMatchPhone == true) {
      document.getElementById("phone").style.borderColor = "green";
    } else {
      document.getElementById("phone").style.borderColor = "red";
    }

    let email = (document.getElementById("phone") as any).value;
    let templatesEmail = new RegExp("^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$");
    var isMatchEmail = templatesEmail.test(email);
    if (isMatchEmail == true) {
      document.getElementById("email").style.borderColor = "green";
    } else {
      document.getElementById("email").style.borderColor = "red";
    }
  }



}
