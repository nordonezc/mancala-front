import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CarouselComponent } from '../../core/carousel/carousel.component';

@Component({
  selector: 'bol-board',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    ButtonComponent,
    CarouselComponent,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  items: number[] = [0, 0, 0, 0, 0, 0];
  mancala1: number = 0;
  items2: number[] = [0, 0, 0, 0, 0, 0];
  mancala2: number = 0;
  idGame!: string;
  playerTurn: number = 0;
  winner: number = 0;
  idBoard: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService
  ) {}

  back() {
    this.router.navigate([`/`]);
  }

  createBoard() {
    this.gameService.createGame().subscribe((response: any) => {
      this.router.navigate([`/${response.body.id}`]);
      this.idBoard = response.body.id;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idGame = params['id'];
      this.gameService.getGame(this.idGame).subscribe(
        (result: any) => {
          this.setGameInformation(result.body);
        },
        (err) => {
          this.router.navigate([``]);
        }
      );
    });
  }

  selectPosition(index: number) {
    console.log('position: ' + index);
    this.gameService
      .playGame(this.idGame, { position: index + 1 })
      .subscribe((result: any) => {
        this.setGameInformation(result.body);
      });
  }

  private setGameInformation(result: any) {
    this.mancala1 = result.firstPlayerMancala;
    this.items = result.firstPlayerPits.reverse();
    this.mancala2 = result.secondPlayerMancala;
    this.items2 = result.secondPlayerPits;
    this.playerTurn = result.playerTurn;
    this.winner = result.winner;
  }
}
