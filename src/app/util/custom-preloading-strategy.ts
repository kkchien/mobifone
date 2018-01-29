import { PreloadingStrategy, Route } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data['preload']) {
            return fn();
        }
        // tslint:disable-next-line:one-line
        else {
            return Observable.of(null);
        }
    }
}
