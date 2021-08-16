var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1]= 0;
matriz_jogo['a'][2]= 0;
matriz_jogo['a'][3]= 0;

matriz_jogo['b'][1]= 0;
matriz_jogo['b'][2]= 0;
matriz_jogo['b'][3]= 0;

matriz_jogo['c'][1]= 0;
matriz_jogo['c'][2]= 0;
matriz_jogo['c'][3]= 0;

$(document).ready( function(){
  $('#btn-play').click( function(){
    if ($('#nomejogador1'). val() == ''){
      alert('Digite um nome para o Jogador 1');
      return false;
    }

    if ($('#nomejogador2'). val() == ''){
      alert('Digite um nome para o Jogador 2');
      return false;
    }

    $('#nome-jogador-1').html($('#nomejogador1').val());
    $('#nome-jogador-2').html($('#nomejogador2').val());

    $('#inicio').hide();
    $('#jogo').show();
  });

  $('.jogada').click( function(){
    var id_campo = this.id;
    $('#'+id_campo).off();
    jogada(id_campo);
    
  });

  function jogada(id){
    var icone = '';
    var ponto = 0;
  
    if ((rodada % 2) == 1) {
      icone = 'url("img/m1.png")';
      ponto = -1;
    } else {
      icone = 'url("img/m2.png")';
      ponto = 1;
    }
    rodada ++;
  
    $('#'+id).css('background-image', icone);

    var linha_coluna = id.split('-');

    matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

    verifica_pontuacao();
  
    
  }


  function verifica_pontuacao(){

    //Verifica na horizontal

    var pontos = 0;

    for(var i = 1; i <=3; i++){

        pontos = pontos + matriz_jogo['a'][i];

    }

    ganhador(pontos);



    pontos = 0;

    for(var i = 1; i <=3; i++){

        pontos = pontos + matriz_jogo['b'][i];

    }

    ganhador(pontos);



    pontos = 0;

    for(var i = 1; i <=3; i++){

        pontos = pontos + matriz_jogo['c'][i];

    }

    ganhador(pontos);



    //Verifica na Vertical

    for(var l = 1; l <=3; l++){

        pontos = 0;

        pontos += matriz_jogo['a'][l];

        pontos += matriz_jogo['b'][l];

        pontos += matriz_jogo['c'][l];

    

    ganhador(pontos);

}

    //Verifica na Diagonal

    pontos = 0;

    pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];

    ganhador(pontos);



    pontos = 0;

    pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];

    ganhador(pontos);



}


  function ganhador(pontos){
    if(pontos == -3){
      var jogador1 = $('#nomejogador1').val();
      alert(jogador1 + 'É o VENCEDOR!!');
      $('.jogada').off();

    } else if(pontos == 3){
      var jogador2 = $('#nomejogador2').val();
      alert(jogador2 + 'É o VENCEDOR!!');

      $('.jogada').off();
    }
  }

});




