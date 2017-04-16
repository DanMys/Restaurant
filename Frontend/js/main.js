if(navigator.serviceWorker){
	navigator.serviceWorker.register("../sw.js");
}

;(function(){

  let sticky = false
  let currentPosition = 0

  // parse
  const imageCounter = $("[data-name='image-counter']").attr("content")
  const email = "respaldodan07@gmail.com"

  $("#contact-form").on("submit",function(ev) {
    ev.preventDefault()

      sendForm($(this))

      return false
  })

  // console.log(imageCounter);

  $("#sticky-navigation").removeClass("hidden")
  $("#sticky-navigation").slideUp(0)
	checkScroll()
	isOpen()

	$("#menu-opener").on("click",toggleNav)

	$(".menu-link").on("click",toggleNav)

  setInterval(()=>{

    if(currentPosition < imageCounter){
      currentPosition++
    }
    else {
      currentPosition=0
    }

    $("#gallery .inner").css({
      left: "-"+currentPosition*100+"%"
    })
  },4000)

  // console.log($(window).height());
  // declaracion de una funcion $
  $(window).scroll(function(checkScroll){
		// const inBottom = isInBottom()
		//
		// if(inBottom && !sticky){
		// 	// mostrar la navecacion sticky
		// 	// console.log("cambiar la navegacion")
		// 	sticky = true
		// 	stickNavigation()
		// }
		// else if(!inBottom && sticky){
		// 	// ocultar la navegacion
		// 	// console.log("regresar la navegacion")
		// 	sticky = false
		// 	unStickNavigation()
		// }
  })

	function checkScroll() {
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			sticky = true
			stickNavigation()
		}
		else if(!inBottom && sticky){
			sticky = false
			unStickNavigation()
		}
	}

	function isOpen() {
		// Reloj de 24
		let date = new Date()
		const current_hour = date.getHours()
		if(current_hour < 17 || current_hour > 23){
			$("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00PM a 11:00PM")
		}
	}

	function toggleNav() {
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("glyphicon-menu-hamburger")
	}

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
