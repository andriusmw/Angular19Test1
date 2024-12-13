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


  onSaveCard() {

  }

  onResetCard() {
    this.http.post("https://api.freeapi.app/api/v1/ecommerce/products",this.itemObj).
      subscribe((res: any) => {
        this.results = res,
        console.log(this.results)
    })

  }
}
