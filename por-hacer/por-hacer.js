const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
    });


};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const getListado = (completado) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(item => item.completado === (completado == "true"));
    return nuevoListado;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion );
    if (index >= 0) {
        listadoPorHacer[index].completado = new Boolean(completado);
        guardarDB();
        return true;
    }else{
        return false;
    }
    
}

const borrar = descripcion => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion );
    if(index >= 0){
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }else{
        return false;
    }
    
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};