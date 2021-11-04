import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './tvshow.component.html'
})
export class TvShowComponent{
    apiUrl:string = "http://api.tvmaze.com/shows/";
    showName:string = "";
    showImg: string = "";
    showId?:number;

    cast:any;

    constructor(private http : HttpClient,
      private router:Router) {}

    loadShow() : void {
        if (this.showId) {
            this.http.get<any>(this.apiUrl + this.showId)
                .subscribe((data: any) => {
                    this.showName = data.name;
                    this.showId = data.id;
                    this.showImg = data.image.medium;

                    this.router.navigate(['/welcome'])
                });
        }
    }
}
