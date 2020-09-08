import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    public arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    public onTap(args){
        console.log('tap');
    }
}
