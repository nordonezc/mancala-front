import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ModalType } from '../models/Modal';

@Component({
  selector: 'bol-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input()
  label: string = 'Button';

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  constructor() {}
}
