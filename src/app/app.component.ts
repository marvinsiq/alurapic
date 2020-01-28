import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos = [
    {
      url: 'https://i.imgur.com/dpS6gvq.jpg',
      description: 'Leão'
    },
    {
      url: 'https://www.brasileirosemushuaia.com.br/media/catalog/product/cache/1/image/700x460/17f82f742ffe127f42dca9de82fb58b1/s/_/s_baleias_1.jpg',
      description: 'Baleia'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    }
  ]
}
