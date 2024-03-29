import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-utente',
    templateUrl: './utente.component.html',
    styleUrls: ['./utente.component.scss']
})
export class UserComponent {
    jsonIn = {
        userType: 'PersonaFisica',
        name: '',
        surname: '',
        ragioneSociale: '',
        indirizzo: {
            via: '',
            numeroCivico: 0,
            cap: 0,
            comune: '',
            provincia: '',
            stato: ''
        },
        email: '',
        telefono: '',
        pec: '',
        fax: '',
        maggiorenne: false,
        prodottiInteresse: '',
        sesso: 'maschio',
        partitaIva: '',
        codiceFiscale: '',
        rememberMe: false
    }
    @ViewChild('utente') utente!: NgForm;
    showErrors = false;


    constructor(private router: Router) { }



    //soluzione 1
    pulisci() {
        if (this.jsonIn.userType === 'PersonaFisica') {
            this.jsonIn.ragioneSociale = '';
            this.jsonIn.pec = '';
            this.jsonIn.partitaIva = '';
        } else if (this.jsonIn.userType === 'PersonaGiuridica') {
            this.jsonIn.email = '';
        }
    }

    //soluzione2 funzione al submit
    salva() {
        const jsonIn = JSON.parse(JSON.stringify(this.jsonIn));//clono il jsonis
        //cancello ciò che non mi serve
        if (jsonIn.userType === 'PersonaFisica') {
            delete jsonIn.ragioneSociale;
            delete jsonIn.pec;
            delete jsonIn.partitaIva;
        } else if (this.jsonIn.userType === 'PersonaGiuridica') {
            delete jsonIn.email;
        }
        //mando al backend la copia corretta(ovvero solo con i dati che mi servono)
        //callBackEnd(jsonIn);
    }



}
