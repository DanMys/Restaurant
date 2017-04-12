;(function(){

  let sticky = false
  $("#sticky-navigation").removeClass("hidden")
  $("#sticky-navigation").slideUp(0)

  // console.log($(window).height());
  // declaracion de una funcion $
  $(window).scroll(function(){
    const inBottom = isInBottom()

    if(inBottom && !sticky){
      // mostrar la navecacion sticky
      console.log("cambiar la navegacion")
      sticky = true
      stickNavigation()
    }
    else if(!inBottom && sticky){
      // ocultar la navegacion
      console.log("regresar la navegacion")
      sticky = false
      unStickNavigation()
    }
  })

  function stickNavigation() {
    $("#description").addClass("fixed").removeClass("absolute")
    $("#navigation").slideUp("fast")
    $("#sticky-navigation").slideDown("fast")
  }

  function unStickNavigation() {
    $("#description").removeClass("fixed").addClass("absolute")
    $("#navigation").slideDown("fast")
    $("#sticky-navigation").slideUp("fast")
  }

  // $(window).scroll(()=>{
  //   console.log("wiiiiiiiii scroll")
  // })

  function isInBottom(){
    const $description = $("#description")
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
  }

})()