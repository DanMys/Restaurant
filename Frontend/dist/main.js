"use strict";!function(){function t(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function e(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function n(){var t=$("#description"),e=t.height();return $(window).scrollTop()>$(window).height()-2*e}var a=!1,i=0,c=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(t){return t.preventDefault(),sendForm($(this)),!1}),console.log(c),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){i<c?i++:i=0,$("#gallery .inner").css({left:"-"+100*i+"%"})},4e3),$(window).scroll(function(){var i=n();i&&!a?(console.log("cambiar la navegacion"),a=!0,t()):!i&&a&&(console.log("regresar la navegacion"),a=!1,e())})}();
//# sourceMappingURL=main.js.map