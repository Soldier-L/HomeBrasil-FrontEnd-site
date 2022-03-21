const pessoa = {
  
  nome: 'Gabriel', rua: ', Rua. Aguia dos Reis', cidade: ', São Paulo', estado: ', São Paulo', país: ', Brasil', telefone: ', 1111 1122', aniversário: ', 12-02-2001',

  nome2: 'Nick', rua2: ', Rua Carvalho Reis', cidade2: ', São Paulo', estado2: ', São Paulo', país2: ', Brasil', telefone2: ', 1111 0001', aniversário2: ', 16-01-2005',

  nome3: 'Vitor', rua3: ', Rua Videira dos Reis', cidade3: ', São Paulo', estado3: ', São Paulo', país3: ', Brasil', telefone3: ', 0000 0000', aniversário3: ', 06-05-2002'

};

document.getElementById("comprador1").innerHTML = 'Comprador n°1: '+ pessoa.nome + pessoa.rua + pessoa.estado + pessoa.país + pessoa.telefone + pessoa.aniversário;

document.getElementById("comprador2").innerHTML = 'Comprador n°2: '+ pessoa.nome2 + pessoa.rua2 + pessoa.estado2 + pessoa.país2 + pessoa.telefone2 + pessoa.aniversário2;

document.getElementById("comprador3").innerHTML = 'Comprador n°3: '+ pessoa.nome3 + pessoa.rua3 + pessoa.estado3 + pessoa.país3 + pessoa.telefone3 + pessoa.aniversário3;