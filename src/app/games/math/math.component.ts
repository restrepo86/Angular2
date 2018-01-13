import { Component, OnInit } from '@angular/core';

import { GameService, Game } from '../../services/games.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  time: number;
  countdownInterval:any;
  intro: number;
  question:string;
  answers: string;
  games: Game[];
  game: Game;


  constructor(games: GameService) {
    this.games = games.getGames();
  }

  ngOnInit() {
    const index = Math.floor(Math.random() * 3 + 1);
    this.game = this.games[index - 1];
    this.question = this.game.question;
    this.time = 5;
    this.answers = "";
    this.play();
  }

  subCount() {
    this.time--;
    if(this.time == 0) {
      this.answers = this.resolve() ? "Is correct" : "No correct";
      clearInterval(this.countdownInterval);
    }
  }

  play() {
    this.countdownInterval = setInterval(this.subCount.bind(this), 1000);
  }

  resolve() {
    return this.intro == this.game.answers;
  }

  resetGame() {
    this.intro=null;
    clearInterval(this.countdownInterval);
    this.ngOnInit()
  }


}
