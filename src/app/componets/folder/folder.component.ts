import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent{

  private anio;
  constructor() {
    this.anio = new Date().getFullYear();
  }

}
