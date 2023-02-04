import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import typer from "typed-typer-js/dist/typer";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('writer') writer: any;
    devText: string = ''
    studentText: string = '';

    constructor(private translateService: TranslateService) {

    }

    ngOnInit(): void {
        this.translateService.get('developer').subscribe((res: string) => {
            this.devText = res;
        });
        this.translateService.get('student').subscribe((res: string) => {
            this.studentText = res;
        });
    }

    ngAfterViewInit(): void {
        typer(this.writer.nativeElement, {speed: 100, cursor: { block: true , blink: 'hard', color: 'red'}}).line(
            this.devText, {}
        ).pause(1000).back('all').continue(
            this.studentText, {}
        ).pause(1000).back('all').repeat(Infinity)
    }

}
