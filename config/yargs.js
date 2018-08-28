const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};



// const optc = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'
//     }
// }
// const opta = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'Marca como completado o pendiente la tarea'
//     }
// }
// const optb = {
//     descripcion:{
//         demand: true,
//         alias: 'd',
//         desc: 'Descripción de la tarea a borrar'
//     }
// }
const argv = require('yargs').
command('crear', 'Crear una tarea por hacer', {descripcion}).
command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado}).
command('borrar', 'Borra una tarea', {descripcion}).
command('listar', 'Lista las tareas', {completado}).
help().argv;

module.exports = {
    argv
}