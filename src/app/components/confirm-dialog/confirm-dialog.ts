import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  imports: [CommonModule, FormsModule], // Declare needed modules here
  templateUrl: './confirm-dialog.html',
  styleUrls: ['./confirm-dialog.css']
})
export class ConfirmDialogComponent {
  @Input() message: string = '';
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
