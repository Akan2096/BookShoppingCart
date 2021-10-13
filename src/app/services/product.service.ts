import { Injectable } from '@angular/core';
import {Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    new Product(1, 'The Book Thief', 'The Book Thief', 129,'https://images-eu.ssl-images-amazon.com/images/I/81YPgi4vpDL._AC_UL320_SR320,320_.jpg'),
    new Product(2, 'Sparks like Stars: A Novel', 'Sparks like Stars: A Novel', 288,'https://images-eu.ssl-images-amazon.com/images/I/81RBI6TwhwL._AC_UL320_SR320,320_.jpg'),
    new Product(3, 'The God of Small Things', 'The God of Small Things', 250,'https://images-eu.ssl-images-amazon.com/images/I/81C8piIPa2L._AC_UL320_SR320,320_.jpg'),
    new Product(4, 'The Kite Runner', 'The Kite Runner', 200,'https://images-eu.ssl-images-amazon.com/images/I/81IOofpTkoL._AC_UL320_SR320,320_.jpg'),
    new Product(5, 'The One Summer', 'The One Summer', 150,'https://images-eu.ssl-images-amazon.com/images/I/81zN87gJEeL._AC_UL320_SR320,320_.jpg'),
    new Product(6, 'A Thousand Splendid Suns', 'A Thousand Splendid Suns', 140,'https://images-eu.ssl-images-amazon.com/images/I/81NTH53P19L._AC_UL320_SR320,320_.jpg'),
    new Product(7, 'Sea Prayer', 'Sea Prayer', 250,'https://images-eu.ssl-images-amazon.com/images/I/91zyIaAH1PL._AC_UL320_SR320,320_.jpg'),
    new Product(8, 'The Color of Our Sky', 'The Color of Our Sky', 300,'https://images-eu.ssl-images-amazon.com/images/I/81Fr7YG0eGL._AC_UL320_SR320,320_.jpg'),
  ]

  constructor() { }

  getProducts(): Product[]{
    // populate products from an API and return an obserable
    return this.products
  }
}
