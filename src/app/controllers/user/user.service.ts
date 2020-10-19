import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private END_POINT: string;

  constructor(
    private session: SessionService
  ) {
    this.END_POINT = environment.END_POINT_API;
  }

  private getConfig(): any {
    const token = this.session.getToken();
    axios.defaults.headers.common['Authorization'] = token;
    return { headers: { Authorization: token } };
  }

  public create(data: any): Promise<any> {
    return axios.post(this.END_POINT + '/user', data);
  }
}