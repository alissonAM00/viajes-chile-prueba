 //se agregan tooltips
 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
 const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
 $(function(){

    //se agregan funciones mouseenter  y mouseout en quienes somos 
    $("#quienes-somos").on("mouseenter", function(){
        $(this).css("color","red");
    })
    $("#quienes-somos").on("mouseout", function(){
        $(this).css("color","white");
    })

    //boton desaparece al hacer click en enviar
    $(".btn").on("click", function(){
        $(".btn").toggle("slow");
    })
    
    //alert al boton enviar
    $("#boton").one("click", function(){
        alert("gracias por contactarte con nosotros");
    });
 



      

 })