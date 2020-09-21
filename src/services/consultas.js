import {URL_API} from "./api";

export function listarConsultas(){
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}