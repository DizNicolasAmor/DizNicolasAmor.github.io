/*
*Nico Diz
*https://github.com/DizNicolasAmor
*PersonalPortfolio3
*/


$(document).ready(function() {

  var modalIsOpen = false,
      backgroundCounter = 0,
      backgroundArray = [ 'rgba(83, 52, 109, 0.6)', 
                          'rgba(150, 150, 0, 0.6)', 
                          'rgba(250, 50, 0, 0.6)', 
                          'rgba(0, 100, 0, 0.6)', 
                          'rgba(30, 250, 30, 0.6)', 
                          'rgba(0, 150, 150, 0.6)', 
                          'rgba(30, 50, 250, 0.6)', 
                          'rgba(150, 0, 250, 0.6)', 
                          'rgba(150, 150, 150, 0.6)'];


  function intro(){
    $('#name').hide();
    $('#myLine').hide();
    $('#f-e-d').hide();
    $('#aboutButton').hide();
    $('#projectsButton').hide();
    $('#contactButton').hide();

    $('#myLine').delay(900).show('slow', function(){
      $('#name').slideDown(900, function(){
        $('#f-e-d').slideDown(900, function(){
          $('.mainContainer').animate({top: '10%'}, 900, function(){
            $('#projectsButton').show(900, function(){
              $('#aboutButton').show(900, function(){
                $('#contactButton').show(900);
              });
            });
          });
        });
      });
    });
  }

  intro();


  // change background
  $('#name').click(function(){
    backgroundCounter++;
    if(backgroundCounter >= backgroundArray.length) backgroundCounter = 0;
    $('#background').css('background', 'linear-gradient(' + backgroundArray[backgroundCounter]  + ', rgba(0, 0, 0, 0.6)), url("images/Portfolio3.jpg") no-repeat center center');
    $('#background').css('-moz-background-size', 'cover');
    $('#background').css('-o-background-size', 'cover');
    $('#background').css('background-size', 'cover');
  });


  // buttons
  function openModal(modalName){
    if(!modalIsOpen){
      modalIsOpen = true;
      $('#'+modalName+'Title').hide();
      $('#'+modalName+'Body').hide();
      $("#background").animate({opacity: '0.4'}, 600);
      $('#'+modalName).show('slow', function(){
        $('#'+modalName+'Title').slideDown(900, function(){
          $('#'+modalName+'Body').slideDown(900, function(){
          });
        });
      });
      $('.close').click(function(){
        modalIsOpen = false;
        $('#'+modalName).fadeOut('slow');
        $("#background").animate({opacity: '1'}, 600);
        $('#mailContainer').hide('slow');   //for <contact> section
      });
      $('#mailButton').click(function(){    //for <contact> section
        $('#mailContainer').show('slow');
      });
    }
  }

  $('#aboutButton').click(function(){
    openModal('about');
  });

  $('#projectsButton').click(function(){
    openModal('projects');
  });

  $('#contactButton').click(function(){
    openModal('contact');
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
