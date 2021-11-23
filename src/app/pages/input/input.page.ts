import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre:string = 'Eric';

  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( this.usuario )
  }

}
