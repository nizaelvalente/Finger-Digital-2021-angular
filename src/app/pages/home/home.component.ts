import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../../service/pessoa.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pessoas: any
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.buscarPessoa().subscribe(res => {
      this.pessoas = res
    })
  }

}
