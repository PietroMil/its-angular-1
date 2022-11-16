import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { ApiService } from '../_service/api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })

export class routeResolver implements Resolve<ApiService> {
    constructor(private service: ApiService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.service.searchRandom();
    }
}
