import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { ModalType } from '../../shared/models/Modal';
import { RulesComponent } from '../../core/rules/rules.component';
import { CreditsComponent } from '../../core/credits/credits.component';
import { CarouselComponent } from '../../core/carousel/carousel.component';

@Component({
  selector: 'bol-home',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    ButtonComponent,
    RulesComponent,
    CreditsComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  continueModal = ModalType.continue;
  rulesModal = ModalType.rules;
  creditsModal = ModalType.credits;

  constructor(private router: Router, private gameService: GameService) {}

  createBoard() {
    this.gameService.createGame().subscribe((response: any) => {
      this.router.navigate([`/${response.body.id}`]);
    });
  }

  testMethod() {
    console.log('into');
  }
}
