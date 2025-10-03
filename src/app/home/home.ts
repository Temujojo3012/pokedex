import { Component } from '@angular/core';
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";
import { List } from "./list/list";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, List],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
