'use strict';

(function(){
    jQuery("#btn-close-modal").click(function(){
      if(window.location.hash === "#/perfil"){
        jQuery(".content-header").css("display","none");
      }
      jQuery("#meuModal").hide();
    });

    jQuery(".logo").click(function(){
        location.reload();
    });


})();
