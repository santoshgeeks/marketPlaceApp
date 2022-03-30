import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private siblingMsg = new Subject<any>();
  constructor() { }
  public getMessage(): Observable<any> {
    return this.siblingMsg.asObservable();
  }
  public updateMessage(message: any): void {
    this.siblingMsg.next(message);
  }
}
