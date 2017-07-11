/*
PersonalPortfolio2
- - - - - - - - - -
https://diznicolasamor.github.io/
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor/)
*/

$(document).ready(function() {

  // main buttons -> modal 
  $('#aboutButton').click(function(){
    $("#background").css("opacity", "0.4");
    $('#about').show('slow');
    $('.close').click(function(){
      $('#about').fadeOut('slow');
      $("#background").css("opacity", "1");
    });
  });

  $('#projectsButton').click(function(){
    $("#background").css("opacity", "0.4");
    $('#projects').show('slow');
    $('.close').click(function(){
      $('#projects').fadeOut('slow');
      $("#background").css("opacity", "1");
    });
  });

  $('#contactButton').click(function(){
    $("#background").css("opacity", "0.4");
    $('#contact').show('slow');
    $('.close').click(function(){
      $('#contact').fadeOut('slow');
      $("#background").css("opacity", "1");
      $('#mailContainer').hide('slow');
    });
    $('#mailButton').click(function(){
        $('#mailContainer').show('slow');
    });
  });
  
  //moreProjects slider
  var slider = $('#slider'),
      
      moveSlider = function() {
        slider.animate({
          marginLeft:'-'+200+'%'
        } ,700, function(){
          $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
          slider.css('margin-left', '-'+100+'%');
        });
      }

  $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
  slider.css('margin-left', '-'+100+'%');
  
  $('#moreProjects').on('click',function() {
    moveSlider();
  });
  
});
