jQuery(document).ready((function(n){n(".nav-toggle").click((function(){return n("#main-menu div ul:first-child").slideToggle(250),!1})),n(window).width()>640||n(document).width()>640?(n("#main-menu li").mouseenter((function(){n(this).children("ul").css("display","none").stop(!0,!0).slideToggle(250).css("display","block").children("ul").css("display","none")})),n("#main-menu li").mouseleave((function(){n(this).children("ul").stop(!0,!0).fadeOut(250).css("display","block")}))):(n("#main-menu li").each((function(){n(this).children("ul").length&&n(this).append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>')})),n(".drop-down-toggle").click((function(){n(this).parent().children("ul").slideToggle(250)}))),n(".social-icons li").each((function(){""==n(this).find("a").attr("href")&&n(this).hide()}))}));