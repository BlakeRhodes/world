import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HexSelectorComponent} from "./hex-selector/hex-selector.component";
import {SafeUrlPipe} from "./safe-url.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HexSelectorComponent, SafeUrlPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'world';
  url: string = 'https://www.neoarcadia.online/NeoArcadia.html'

  changePage($event: string) {
    this.url = $event;
    console.log(this.url);
  }
}
