$(document).ready(function(){


//////////////////////////////////////////////////
//
//        Détails types de maisons
//
//////////////////////////////////////////////////


$(".maison__type").click(ouvrirDetailsMaisons);
$(".maison__type-close").click(fermerDetailsMaisons);

function ouvrirDetailsMaisons() {
  $(".maison").addClass("focusOn");
  $(this).attr("data-focused", "true");
}

function fermerDetailsMaisons() {
  $(".maison").removeClass("focusOn");
  $(".maison__type").attr("data-focused", "false");
}




//////////////////////////////////////////////////
//
//        Choix pull
//
//////////////////////////////////////////////////


$(".essentiel img").click(choixPull);

function choixPull() {
  $(this).addClass("choisi");
  $(".essentiel").removeClass("bloquer");
}



});
