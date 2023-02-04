import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./maint-routing.module";
import {MainComponent} from "./main.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from "../home/home.component";

@NgModule({
    declarations: [MainComponent, HomeComponent],
    imports: [MainRoutingModule, TranslateModule, MatButtonModule, MatIconModule],
    exports: [],
})
export class MainModule {
}