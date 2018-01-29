import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppConfig {
    private _config: any;

    constructor(private http: Http) { }

    load(): Promise<any> {
        return this.http.get('assets/config/config.json')
            .map((response: Response) => response.json())
            .toPromise()
            .then(data => {
                this._config = data;
                return data;
            });
    }

    get config(): any {
        return this._config;
    }
}
