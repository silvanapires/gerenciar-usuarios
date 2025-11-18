const usuarios = ['Théo', 'Silvana', 'Deivede'];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {   
    usuarios.push(nome);
}   
module.exports = {    
    retornarUsuarios,
    adicionarNovoUsuario
};  
