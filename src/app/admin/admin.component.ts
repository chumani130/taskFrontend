import { Component } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isExpanded: boolean = false;

}
