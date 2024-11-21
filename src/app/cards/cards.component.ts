import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../model/service/product.service'; 
import { Iproduct } from '../model/service/iproduct'; 

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  title = 'testAngular';
  static chamarFuncao(chamarFuncao: any){
    throw new Error('Method not implemented.');
  }
  mensagem: string = 'Nenhuma ação realizada ainda.';
  buttonColor = 'blue';
  chamarFuncao(): void {
    this.mensagem = 'Botão clicado! A função foi chamada com sucesso.';
    console.log('Função chamada ao clicar no butão');
    this.buttonColor = 'red';
  }

  constructor(private productsServices:ProductService){}
  product: Iproduct[] = [];

  ngOnInit(): void {
    this.product = this.productsServices.getProduct();
  }
}
