import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() selectFeature = new EventEmitter<string>();

    onSelect = (selectedFeature: string) => {
        this.selectFeature.emit(selectedFeature);
    }
}