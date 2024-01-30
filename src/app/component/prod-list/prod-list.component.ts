import { Component, OnInit} from '@angular/core';
import { ListService } from '../../services/list.service';
import { Chocolat } from '../../Chocolat';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.scss'
})
export class ProdListComponent implements OnInit{

  chocs: Chocolat[] = [];

  constructor(private listservice:ListService){
    this.getChocolats();
  }

  getChocolats(): void {
    this.listservice.getAll().subscribe((chocs)=>(this.chocs = chocs));
  }

  ngOnInit(): void {

  }
}
