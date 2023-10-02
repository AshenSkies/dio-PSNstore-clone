import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input()
  cardTitle:string = ''
  @Input()
  cardPlatforms:Array<string> = ['PS4', 'PS5', 'PC']
  @Input()
  cardPrice:String = '$59.99'

}
