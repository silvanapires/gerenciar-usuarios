const { gerenciarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de usuários', function() {

    it('Deve retornar a lista inicial de usuários', function() {
        const usuarios = gerenciarUsuarios();
        expect(usuarios).to.deep.equal(['Théo', 'Silvana', 'Deivede']);
    });     

    it('Deve adicionar um novo usuário à lista', function() {
        adicionarNovoUsuario('Maria');
        const usuarios = gerenciarUsuarios();
        expect(usuarios).to.include('Maria');
    });

    it('Deve validar se o novo usuário foi adicionado corretamente', function() {
        const usuarios = gerenciarUsuarios();
        expect(usuarios).to.deep.equal(['Théo', 'Silvana', 'Deivede', 'Maria']);
    });
}); 

