import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-control-flow',
  imports: [HeaderComponent, SideMenuComponent, FooterComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  public score: number = 51;
  public role = 'admin';

  public users: any = [
    { id: 1, name: 'John Doe', score: 30 },
    { id: 2, name: 'Pedro', score: 61 },
    { id: 3, name: 'Maria Azucena', score: 60 },
    { id: 4, name: 'Juan Pérez', score: 90 },
    { id: 5, name: 'Maria Azucena', score: 60 },
    { id: 6, name: 'Juan Pérez', score: 90 },
  ];

  public change() {
    this.score = Math.floor(Math.random() * 100) + 1;
    this.role = this.role === 'admin' ? 'user' : 'admin';
  }
}
