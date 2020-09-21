import { URL_API } from "./api";

export function consultarResumo(){
    return fetch(`${URL_API}/resumo`).then(resultado => resultado.json());
}