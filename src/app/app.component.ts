import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comic-creator';
  comicPanels: string[] = [];

  updateComicPanels(panels: string[]): void {
    this.comicPanels = panels;
  }
}
