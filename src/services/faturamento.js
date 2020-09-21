import {URL_API} from "./api";

export function consultarFaturamento(){
    return fetch(`${URL_API}/faturamento`).then(resultado => resultado.json());
}