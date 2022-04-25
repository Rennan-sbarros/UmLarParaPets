import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>


  constructor(
    private animaisService: AnimaisService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRouter.snapshot.params['animalId'];
    this.animal$ = this.animaisService.buscaPorID(this.animalId)
  }

  curtir(){
    this.animaisService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animaisService.buscaPorID(this.animalId);
      }
    })
  }

  excluir(){
    this.animaisService.excluiAnimal(this.animalId).subscribe(() =>{
      this.router.navigate(['/animais/'])
    },
    (error) => console.log(error))
  }

}
