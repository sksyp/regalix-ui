import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}
)
export class UserService {
    private apiServer = environment.baseServiceURL;
    constructor(private http: HttpClient) { }


    getById(email: string) {
        return this.http.get(`/users/` + email);
    }

    login(email: string, password: string){
        return this.http.get(`${this.apiServer}/${email}/${password}`);
    }
    register(user: User) {
        console.log(user);
        return this.http.post(this.apiServer + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(`${this.apiServer}/users/` + user.email, user);
    }
}
