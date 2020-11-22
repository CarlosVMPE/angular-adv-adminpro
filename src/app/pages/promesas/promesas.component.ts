import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* const promesa = new Promise( (resolve, reject) => {
      if(false){
        resolve('Hola mundo');
      } else {
        reject('Algo salió mal');
      }
    });

    promesa.then( (mensaje) => {
      console.log('Hey terminé ', mensaje);
    })
    .catch( error => console.log('Error en mi promesa ', error));
    console.log('Fin del init'); */
    this.getUsuarios().then(usuarios => {});
  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data));
    });
  }

}
