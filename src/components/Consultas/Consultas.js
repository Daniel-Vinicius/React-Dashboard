import React, { Component } from "react";
import { URL_API } from "../../services/api";

class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            realizadas : [],
            marcadas : []
        };
    }

    componentDidMount(){
        fetch(URL_API + "/consultas")
        .then(
            resultado => resultado.json().then(
                dados => this.setState(dados)
            )
        );
    }

    render(){
        return (
            <div>
          <h2 className="mt-2">Consultas</h2>

          <div className="row" >
                 <div className="col">
            <div className="card mt-2">
               <div className="card-header">
                  Marcadas
            </div>
            <table className="table">
           <thead>
               <tr>
                   <th>Especialidade</th>
                   <th>Quantidade</th>
               </tr>
           </thead>
           <tbody>               
               {
                this.state.marcadas.map((item, indice) => {
                       return (
                           <tr key={indice}>
                               <td>{item.especialidade}</td>
                               <td>{item.quantidade}</td>
                               <td className="text-right">{ item.valor}</td>
                           </tr>
                       )
                   })
                   }
           </tbody>
            </table>
            </div>
            </div>

            <div className="col">
       <div className="card mt-2">
               <div className="card-header">
                   Realizadas
           </div>
           <table className="table">
           <thead>
               <tr>
                   <th>Especialidade</th>
                   <th>Quantidade</th>
               </tr>
           </thead>
           <tbody>
           {
                this.state.realizadas.map((item, indice) => {
                       return (
                           <tr key={indice}>
                               <td>{item.especialidade}</td>
                               <td>{item.quantidade}</td>
                               <td className="text-right">
                                   { item.valor}
                               </td>
                           </tr>
                       )
                   })
                   }
           </tbody>
           </table>
            </div>
            </div>

            </div>
            </div>
        )
    }
}

export default Consultas;