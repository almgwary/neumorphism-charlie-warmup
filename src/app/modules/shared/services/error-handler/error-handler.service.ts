import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService  implements ErrorHandler {
  handleError(error) {
    console.error(`Error ${new Date()} :` , error);
  }
}
