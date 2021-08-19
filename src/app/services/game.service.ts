import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game.interface';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];
  constructor(
    private http: HttpClient
  ) { }

  getNominados(){

    if(this.juegos.length > 0){
      return of(this.juegos);
    }else{
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
                  .pipe(
                    tap(games => this.juegos = games)
                  );
    }

  }

  votarJuego(id: string){

    return this.http.post(`${environment.url}/api/goty/${id}`, {})
                .pipe(
                  catchError(err => {
                    return of(err.error);
                  })
                );

  }

}
