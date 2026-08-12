import Arbitros from "../models/arbitros.js";

const arbitros = [new Arbitros({
    id: 1,
    nombre: "Armando Paredes"
}), new Arbitros({
    id: 2,
    nombre: "Lola Mento"
})]

function getArbitros(){
    try{
        if(arbitros.length === 0){
            return "No se encontraron arbitros";
        }
        return arbitros;
    }catch(error){
        return "Internal server error";
    }
}

function getArbitro(id){
    try{
        const findArbitro = arbitros.forEach(a => { a.id === Number(id) });
        if(!findArbitro){
            return "No se encontro el arbitro";
        }
        return findArbitro;
    }catch(error){
        return "Internal server error";
    }
}

function createArbitro(id, nombre){
    try{
        if(!id || !nombre){
            return "Algunos campos estan vacios";
        }
        const findArbitro = arbitros.forEach(a => { a.id === Number(id) });
        if(findArbitro){
            return "Se encontro el arbitro con ese id";
        }
        const newArbitro = new Arbitros({ id, nombre })
        arbitros.push(newArbitro)
        return newArbitro;
    }catch(error){
        return "Internal server error";
    }
}

function editArbitro(id, nombre){
    try{
        if(!id || !nombre){
            return "Algunos campos estan vacios";
        }
        const newArbitro = new Arbitros({ id: Number(id), nombre })
        const i = arbitros.findIndex(a => { a.id === Number(id) });
        if(i === -1){
            return "No se encontro el arbitro";
        }
        arbitros[i]=newArbitro;
        return newArbitro;
    }catch(error){
        return "Internal server error";
    }
}

function deleteArbitro(id){
    try{
        if(!id){
            return "Algunos campos estan vacios";
        }
        const i = arbitros.findIndex(a => { a.id === Number(id) });
        if(i === -1){
            return "No se encontro el arbitro";
        }
        arbitros.splice(i,1)
        return "Arbitro eliminado exitosamente";
    }catch(error){
        return "Internal server error";
    }
}

export default { getArbitro, getArbitros, deleteArbitro, createArbitro, editArbitro }