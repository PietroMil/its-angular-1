import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { ApiService } from '../_service/api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Drink } from '../_models/drink.model';
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class homeRandomResolver implements Resolve<Drink> {

    constructor(private service: ApiService) { }
    resolve(): Observable<Drink> {
        return this.service.searchRandom()
    }
}
