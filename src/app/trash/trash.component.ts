import { HttpClient } from '@angular/common/http';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.mainitCounteru();
    setTimeout(() => {
      this.showLoading = false;
    }, 5000);
  }

  arr = ["Anna", "Victoria", "Jelizaveta", "Olga"]

  solijumsDabutCiparu = (cipars: number) => {
    let solijums = new Promise((resolve, reject) => {
      if (cipars > 10) {
        resolve(cipars)
      } else {
        setTimeout(() => {
          if (cipars == 0)
            reject("Kluda");
          else
            resolve(cipars);

        }, 3000);
      }
    });
    return solijums;
  }
  anyFunction = () => {
    this.solijumsDabutCiparu(18)
      .then((result: number) => {

      })
      .catch((ex: string) => {

      })
      .finally(() => {

      });
  }
  showLoading = true;
  couter = 5;
  masivs = [];
  kadNospiezhamPaPilnam = () => {

    this.showLoading = true;
    this.http.get("https://gorest.co.in/public-api/users")
      .toPromise().then((rezultats: {
        data: {
          id: number,
          name: string,
          email: string,
          gender: string
        }[]
      }) => {
        this.masivs = rezultats.data;
      })
      .finally(() => {
        this.showLoading = false;
      });
  }
  postTest = () => {
    alert
      
  }
  mainitCounteru = () => {
    if (this.couter > 0)
      setTimeout(() => {
        this.couter--;
        this.mainitCounteru();
      }, 1000);
  }



  checkForLiza = (vards: string) => {
    if (vards == null) {
      alert("Hjuston, mums ir problemas");
      return [];
    }
    else {
      if (vards == "Jelizaveta")
        return ["uniq"];
      else
        return ["red"];
    }

  }
  getStyle = () => {
    var a = "123123";
    var templates = new RegExp("^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/[\d]{4}$");
    var isMatch = templates.test(a);
    return { color: "pink", background: "orange" }
  }
}
