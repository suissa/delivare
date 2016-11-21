'use strict';

(function(){
    jQuery("#btn-close-modal").click(function(){
      if(window.location.hash === "#/perfil" || window.location.hash === "#/perfil#cadastro" || window.location.hash === "#/perfil#historico"){
        jQuery(".proibido-perfil").hide();
      }
      jQuery("#meuModal").hide();
    });

    jQuery(".logo").click(function(){
        location.reload();
    });


})();
