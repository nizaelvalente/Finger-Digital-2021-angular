import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) {}

  public buscarPessoa() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
