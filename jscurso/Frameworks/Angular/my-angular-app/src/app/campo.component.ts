import {Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {NgClass} from '@angular/common';

@Component({
    selector: "senai-campo",
    standalone: true,
    imports: [FormsModule, NgClass],
    template:`
    <div>
        <label for= "nomeUsuario"> Nome Usuário </label>
        <input type="text" name="nomeUsuario" id="nomeUsuario" [(ngModel)]="nome"/>
    </div>
    <br>
    {{nome}}`
})

export class CampoComponent{
    nome= "Daniel";

    ngOnInit() {
    this.nome=" ";
    }

}