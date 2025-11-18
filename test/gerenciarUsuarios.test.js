const { gerenciarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de usuários', function() { 

    it('Deve adicionar um novo usuário à lista', function() {
        adicionarNovoUsuario('Maria');
        const listaUsuarios = gerenciarUsuarios();
        expect(listaUsuarios.at(-1)).to.equal('Maria');
    });
});