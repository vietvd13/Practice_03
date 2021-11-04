import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TvShowComponent } from "./tvshow.component";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./tvshow/welcome.component";
import { CastComponent } from "./tvshow/cast.component";

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule,
      RouterModule.forRoot([
        {path: 'cast/:showId', component: CastComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])],
    declarations: [TvShowComponent, CastComponent, WelcomeComponent],
    bootstrap: [TvShowComponent],
})
export class AppModule {}
