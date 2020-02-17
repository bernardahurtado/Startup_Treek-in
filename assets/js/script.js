$(function(){
  
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var indice = this.hash;
  
        $("html, body").animate({
          scrollTop: $(indice).offset().top - 70
        }, 800 );
      }
    });

  
  });