
$(document).ready(function() {


    $('.show_info').click(function () {
      var itemid = '#div' + $(this).attr('target'); //id of the element to show/hide.

      //Show the element if nothing is shown.
      if ($('.active').length === 0) {
          $(itemid).slideDown();
          $(itemid).addClass('active');

          //Hide the element if it is shown.
      } else if (itemid == "#" + $('.active').attr('id')) {
          $('.active').slideUp();
          $(itemid).removeClass('active');

          //Otherwise, switch out the current element for the next one sequentially.
      } else {
          $('.active').slideUp(function () {
              $(this).removeClass('active');
              if ($(".targetDiv:animated").length === 0) {
                  $(itemid).slideDown();
                  $(itemid).addClass('active');
              }
          });
      }
  });

	   $("#btn-1991").click(function() {
                $("div.cube").toggleClass("show-1991cube").removeClass("show-2010cube show-1988cube show-1980cube show-1979cube");
                
                $(".navlist").toggleClass("btn-1991EFX").removeClass("btn-2010EFX btn-1988EFX btn-1980EFX btn-1979EFX");

                $(".button1").toggleClass("button1-SFX").removeClass("button2-SFX button3-SFX button4-SFX button5-SFX");

			return false;

	});


			$("#btn-2010").click(function() {
                $("div.cube").toggleClass("show-2010cube").removeClass("show-1991cube show-1988cube show-1980cube show-1979cube");

                $(".navlist").toggleClass("btn-2010EFX").removeClass("btn-1991EFX btn-1988EFX btn-1980EFX btn-1979EFX");

                $(".button1").toggleClass("button2-SFX").removeClass("button1-SFX button3-SFX button4-SFX button5-SFX");

			return false;

		
		});

		 	$("#btn-1988").click(function() {
                $("div.cube").toggleClass("show-1988cube").removeClass( "show-1991cube show-2010cube show-1980cube show-1979cube");
                $(".navlist").toggleClass("btn-1988EFX").removeClass("btn-1991EFX btn-2010EFX btn-1980EFX btn-1979EFX");
                $(".button1").toggleClass("button3-SFX").removeClass("button1-SFX button2-SFX button4-SFX button5-SFX");
			return false;
		
		});

		 	$("#btn-1980").click(function() {
                $("div.cube").toggleClass("show-1980cube").removeClass( "show-1991cube show-2010cube show-1988cube show-1979cube");
                $(".navlist").toggleClass("btn-1980EFX").removeClass("btn-1991EFX btn-2010EFX btn-1988EFX btn-1979EFX");
                $(".button1").toggleClass("button4-SFX").removeClass("button1-SFX button2-SFX button3-SFX button5-SFX");
			return false;
		
		});
	
	 	$("#btn-1979").click(function() {
                $("div.cube").toggleClass("show-1979cube").removeClass( "show-1991cube show-2010cube show-1988cube show-1980cube");
                $(".navlist").toggleClass("btn-1979EFX").removeClass("btn-1991EFX btn-2010EFX btn-1988EFX btn-1980EFX");
                $(".button1").toggleClass("button5-SFX").removeClass("button1-SFX button2-SFX button3-SFX button4-SFX");
			return false;
		
		});

});                            
 