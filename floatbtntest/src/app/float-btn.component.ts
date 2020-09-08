import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "float-btn",
    template: `
        <StackLayout class="float-btn" (tap)="onTap($event)">
            <Label class="float-btn-text" text="+"></Label>
        </StackLayout>
    `,
    styles:[
        `   
        .float-btn{
            background-color: #30bcff;
            border-radius: 30;
            width: 56;
            height: 56;
            text-align: center;
            vertical-align: middle;
        }
        .float-btn-text{
            color: #ffffff;
            font-size: 36;
            margin-top: -4;
        }
        `
    ]
})
export class FloatBtnComponent { 

    @Output() tap: EventEmitter<any> = new EventEmitter<any>();

    public onTap(args){
        this.tap.emit(args);
    }

}