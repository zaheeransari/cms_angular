import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonItem {
    loading: boolean;
    errorMessage: string;
} 