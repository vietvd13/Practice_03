import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	templateUrl: './cast.component.html'
})
export class CastComponent implements OnInit {
    showId?: number;
    cast: any;

    constructor(private http: HttpClient,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.showId = this.route.snapshot.params['showId'];
        this.loadCast();
    }

    loadCast(): void {
        if (this.showId) {
            this.http.get<any[]>(`http://api.tvmaze.com/shows/${this.showId}/cast`)
                .subscribe((data: any[]) => {
                    this.cast = data;
                });
        }
    }

    filteredCast: any;

    _filterName: string = "";

    public get filterName(): string {
        return this._filterName
    }

    public set filterName(v: string) {
        this._filterName = v;
        console.log(this._filterName);
        this.filteredCast = this.doFilterCast(v);
    }

    doFilterCast(filterBy: string): any[] {
        filterBy = filterBy.toLowerCase();
        return this.cast.filter((c: any) => c.person.name.toLowerCase().includes(filterBy));
    }
}
