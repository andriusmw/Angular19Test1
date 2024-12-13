import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

 http = inject(HttpClient);


  itemObj: any = {
    "id": 0,
    "name": "",
    "description": "",
    "price": ''
  }

  results:any = [];
  i = 0;

  onSaveCard() {
    /* the api we are using for the example is not working anymore so we are using another down  with other structure, but working
    this.http.post("https://api.freeapi.app/api/v1/ecommerce/products",this.itemObj).
    subscribe((res: any) => {
      this.results = res,
      console.log(this.results)
     })*/



    /* fetch(  URL , BODY , HEADERS ) --> en el body pasa un objecto con el método y el body en el que van los datos
    y luego está el header que es fijo */
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.itemObj.name,
          body: this.itemObj.description,
          userId: +1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
         this.i++;
  }



  onResetCard() {


  }
}
