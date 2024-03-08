import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent {
  title = 'Naboria';
  overlayDuration: number = 3000;
  @ViewChild('overlay') private overlay!: ElementRef;
  ngOnInit() {
    setInterval(() => {
      this.overlay.nativeElement.remove();
    }, this.overlayDuration)
  }

}
