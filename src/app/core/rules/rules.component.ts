import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'bol-rules',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
})
export class RulesComponent {
  idGame: string = '';
  checkoutForm = this.formBuilder.group({
    idGame: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.idGame = this.checkoutForm.value.idGame
      ? this.checkoutForm.value.idGame
      : '';

    this.gameService.getGame(this.idGame).subscribe(
      (response: any) => {
        this.router.navigate([`/${response.body.id}`]);
      },
      (err) => {
        this.router.navigate([`/not-found`]);
      }
    );
  }
}
