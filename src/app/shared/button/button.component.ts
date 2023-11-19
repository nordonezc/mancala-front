import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bol-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  label: string = '';

  @Input()
  inputType: string = 'button';

  @Output()
  clickEvent: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}
