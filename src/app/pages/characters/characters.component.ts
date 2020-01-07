import { Component, OnInit } from "@angular/core";
import { CharactersService } from "../../core/services/characters.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"]
})
export class CharactersComponent implements OnInit {
  public characters: Array<any> = [];
  private _characters: Array<any> = [];
  loading: boolean = false;
  constructor(private _charactersService: CharactersService) {}

  ngOnInit() {
    this.loading = true;
    this._charactersService.getData().subscribe(character => {
      this._characters = character;
      this.characters = this._characters;
      console.log(this.characters);
      this.loading = false;
    });
  }
}
