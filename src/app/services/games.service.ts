import { Injectable } from '@angular/core';

@Injectable()
export class Game {
  answers: number;
  question: string;
  constructor(answers: number, question: string) {
    this.answers = answers;
    this.question = question;
  }
}

@Injectable()
export class GameService {
  constructor(){

  }

  getGames() {
    return [new Game(2, "1+1"), new Game(6, "3+3"), new Game(8, "1+7")];
  }
}
