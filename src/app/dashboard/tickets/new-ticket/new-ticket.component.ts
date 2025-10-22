import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{
  @ViewChild('form') private readonly form?: ElementRef<HTMLFormElement>;
  // private readonly form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  entiredTitle = '';
  entiredText = '';
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
      console.log('on init');
      console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
      console.log('after view init');
      console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.entiredTitle, text: this.entiredText });
    this.entiredText = '';
    this.entiredTitle = '';
  }

}
