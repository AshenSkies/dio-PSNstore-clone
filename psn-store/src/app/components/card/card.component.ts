import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  cardCover:string = ''

  @Input()
  cardLabel:string=''

  @Input()
  cardPlatforms:Array<string> = ['PS4', 'PS5', 'PC']
  @Input()
  cardPrice:String = '$59.99'

  @Input()
  cardTitle:string = ''
}
