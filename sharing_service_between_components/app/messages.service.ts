import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    getErrorMessage() : string {
        return "Issue Occurred";
    }
    getSuccessMessage() : string {
        return "Success";
    }
}