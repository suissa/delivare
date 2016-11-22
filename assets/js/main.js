'use strict';

(function(){
  //Esconde a modal ao clicar em fechar
    jQuery("#btn-close-modal").click(function(){
      jQuery("#meuModal").hide();
    });

  //Esconde o menu de filtro ao entrar em perfil

    if(window.location.hash === "#/perfil" || window.location.hash === "#/perfil#cadastro" || window.location.hash === "#/perfil#historico"){
      jQuery(".proibido-perfil").hide();
    }

 //Da um reload na pagina ao clicar na logo
    jQuery(".logo").click(function(){
        location.reload();
    });
})();
