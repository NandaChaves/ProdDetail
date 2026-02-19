import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chocolat } from '../../Chocolat';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrl: './prod-detail.component.scss'
})
export class ProdDetailComponent implements OnInit{
  choc?: Chocolat;
  result!: number;
  qtd: number = 1;
  loading: boolean = true;
  constructor(private listservice:ListService, private route:ActivatedRoute){}

getChoc(){
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.loading = true;

  this.listservice.getItem(id).subscribe((choc) => {
    this.choc = choc;
    this.loading = false;
  });
}

 ngOnInit(): void {
  this.getChoc();
}

  add(){
    return this.qtd = this.qtd +1;  
  }

  less(){
    return this.qtd = this.qtd - 1;  
  }
}
