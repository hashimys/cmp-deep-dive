import { Component, input, output, signal } from '@angular/core';

import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input({}) ...
  data = input.required<Ticket>();
  // @Output('closeTicket')
  closing = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    console.log('Marking ticket as completed...');
    this.closing.emit();
  }
}