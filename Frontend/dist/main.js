"use strict";!function(){function i(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function n(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function o(){var i=$("#description"),n=i.height();return $(window).scrollTop()>$(window).height()-2*n}var a=!1;$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$(window).scroll(function(){var s=o();s&&!a?(console.log("cambiar la navegacion"),a=!0,i()):!s&&a&&(console.log("regresar la navegacion"),a=!1,n())})}();
//# sourceMappingURL=main.js.map