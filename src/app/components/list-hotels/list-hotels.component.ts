import { Component, OnInit } from '@angular/core';
import { Hotel } from "../../models/hotel";
import { HotelService } from "../../services/hotel.service";
import { GLOBAL } from "../../services/global";

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

    public url: string;
    public hotels: Hotel[];
    public status: string;
    public filter_string: string
    public filter_stars: string

    constructor(
        private _hotelService: HotelService
    ) { 
        this.url = GLOBAL.url;
        this.filter_string=''
        this.filter_stars=''
    }

    ngOnInit() {
        this.getHotels();
    }

    public getHotels(){
        this._hotelService.getHotels(this.filter_string, this.filter_stars).subscribe(
            response => {
                if (!response.hotels) {
                    this.status='error'
                }else{
                    this.hotels=response.hotels
                }                
            },
            error => {
                this.status = 'error'
                console.log(error);
            }
        )
    }

    // Simplemente lo utilizamos para hacer una colleccion de 'cant' elementos
    makeIterable(cant):Number[]{
        let col = []
        for (let index = 0; index < cant; index++) {
            col.push(index)           
        }
        return col;
    }

    damn(){
        console.log("sadasd")
    }

}
