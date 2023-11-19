import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateGameRequest, PlayGameRequest } from '../shared/models/Request';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl: string = 'http://localhost:8080/v1/game';

  constructor(private http: HttpClient) {}

  createGame(createGame?: CreateGameRequest) {
    return this.http.post(this.baseUrl, createGame);
  }

  getGame(uuid: string) {
    return this.http.get(`${this.baseUrl}/${uuid}`);
  }

  playGame(uuid: string, request: PlayGameRequest) {
    return this.http.post(`${this.baseUrl}/${uuid}`, request);
  }
}
