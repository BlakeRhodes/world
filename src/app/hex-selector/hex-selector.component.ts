import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DEFAULT_WORLDBOOK} from "../constants";

@Component({
  selector: 'app-hex-selector',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './hex-selector.component.html',
  styleUrl: './hex-selector.component.css'
})
export class HexSelectorComponent {
@Output() page: EventEmitter<string> = new EventEmitter<string>()

  hex:string = ''

  worldbook: Map<string,string> = DEFAULT_WORLDBOOK
  handleSearch() {
    const page = this.worldbook.get(this.hex);
    console.log(page)
    if(page){
      this.page.emit(page);
      console.log(page);
    }
  }
}
