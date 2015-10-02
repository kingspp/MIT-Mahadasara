jQuery(document).ready(function($) {
   
   'use strict';
   
    
	//Timeout for Top
	
	
	var check = false;
	(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			
	if(check==false){
	if ($.cookie('test_status') != '1')
	{
    //show popup here
	setTimeout(function() {     
        $("#top").animate({"height": "725px"}, 500);		
		$(".col-lg-4").animate({"padding-top": "0px"}, 500);
		$(".col-lg-4").animate({"padding-top": "0px"}, 500);		
		$("#top h1").animate({"font-size": "80px"},500);
		$("#countdown .countdown_section ").animate({"font-size":"10px"},500);
		$("h3").animate({"font-size":"20px"},500);	
		//$(".ec").animate({"width":"30%"},500);
		//$.magnificPopup.close();
		/*
		if($.cookie('test_status1') != '1') 
		{			
			var tab=window.open("https://play.google.com/store/apps/details?id=com.mahadasara",'_blank'); 
			tab.focus();
			var date = new Date();
			var minutes = 1440; //set the minutes here
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			$.cookie('test_status1', '1', { expires: date});			
		}
		*/
	}, 12000);
    }
	else{
		$("#top").animate({"height": "725px"}, 500);		
		$(".col-lg-4").animate({"padding-top": "0px"}, 500);
		$(".col-lg-4").animate({"padding-top": "0px"}, 500);
		$("#top h1").css({"font-size": "80px"});		
		$("#countdown .countdown_section ").animate({"font-size":"10px"},500);
		$("h3").animate({"font-size":"20px"},500);			
		//$(".ec").animate({"width":"30%"},500);
	}
	}
	else{	
	$("#top").css({"height":"600px;","background":"url(../img/top-bg.jpg) no-repeat fixed;"});
	$("#top h1").css({"font-size": "50px"});	
	$("#countdown .countdown_section").css({"font-size":"10px"});    	
	}	


	//SMOOTH SCROLL
	smoothScroll.init({
		speed: 500, // How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	 });
	 
	  
	//COUNTDOWN TIMER
	var newYear = new Date(); 
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
    $('#countdown').countdown({until: new Date(2015, 1, 8, 9)}); // enter event day
    
    $('#removeCountdown').toggle(
        function() {
            $(this).text('Re-attach'); 
            $('#defaultCountdown').countdown('destroy'); 
        }, 
        function() { 
            $(this).text('Remove'); 
            $('#defaultCountdown').countdown({until: newYear}); 
        }
    );
	  
	//MILESTONE
    $('.timer').countTo();
	
	
	//MAGNIFIC POPUP LOAD CONTENT VIA AJAX
	$('.speaker-detail').magnificPopup({type: 'ajax'});
	$('.register').magnificPopup({type: 'ajax'});	
 	
	//MAGNIFIC POPUP IMAGE
	$('.image-link').magnificPopup({type:'image'});	
	
	//OWLCAROUSEL SCHEDULE
	var timetable = $("#timetable");
  var days = $("#days");
 
  timetable.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  days.owlCarousel({
   	items : 6,
    itemsMobile       : [479,4],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#days")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#days").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#days").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    timetable.trigger("owl.goTo",number);
  });
 
  function center(number){
    var daysvisible = days.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in daysvisible){
      if(num === daysvisible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>daysvisible[daysvisible.length-1]){
        days.trigger("owl.goTo", num - daysvisible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        days.trigger("owl.goTo", num);
      }
    } else if(num === daysvisible[daysvisible.length-1]){
      days.trigger("owl.goTo", daysvisible[1])
    } else if(num === daysvisible[0]){
      days.trigger("owl.goTo", num-1)
    }
    
  }

	//OWLCAROUSEL GALLERY
	var owl = $(".gallery");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 2],
			[450, 2],
			[600, 4],
			[700, 4],
			[1000, 4],
			[1200, 4],
			[1600, 4]
		  ],
		  navigation : true,
		  navigationText : ['<i class="fa fa-4x fa-chevron-circle-left"></i>','<i class="fa fa-4x  fa-chevron-circle-right"></i>'],
	  });

	  
	//OWLCAROUSEL TESTIMONIAL
	$("#quote").owlCarousel({
 
		pagination : false, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : true,
		navigationText : ['<i class="fa fa-3x fa-chevron-circle-left"></i>','<i class="fa fa-3x  fa-chevron-circle-right"></i>'],
	});
	
	
	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);
	
	

});
	
	


$(window).load(function(){
	
	
	
	
	//PARALLAX BACKGROUND
	$(window).stellar({
		horizontalScrolling: false,
	});
    
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
	
	
	
	if ($.cookie('test_status') != '1') {
		document.getElementById("intro").volume=0.4;
		setTimeout(function() {		
				$.magnificPopup.open({
					items: {
						src: '../update/up.html' 
					},
					//removalDelay: 500,
					type: 'ajax'
				});
			
		}, 5000);
		var date = new Date();
		var minutes = 15; //set the minutes here
		date.setTime(date.getTime() + (minutes * 60 * 1000));
		$.cookie('test_status', '1', { expires: date});
    }
	else{
	document.getElementById("intro").volume=0;
	}
	
	//HEADER ANIMATION
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".footer-custom a").css("color","#FFFFFF");
			$(".navbar-marquee").css("color","#FFFFFF");
			$(".navbar-fixed-bottom").addClass("top-nav-collapse");			
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".navbar-fixed-bottom").removeClass("top-nav-collapse");
			$(".footer-custom a").css("color","#428bca");
			$(".navbar-marquee").css("color","#428bca");
			
		}
	});
	
	$(document).on( 'scroll', function(){ 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
	
 
	function scrollToTop() {
		verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
	}

});

	// CONTACT FORM FUNCTION
	var contact_send = function(){
	
	'use strict';
	
	var name  = $("#name").val();	
	var email = $("#email").val();
	var phone = $("#phone").val();		
		 if ( name=="" ){ alert("Please enter your name"); $("#name").focus(); }		 
	else if ( email=="" ){ alert("Please enter your Email-Id"); $("#email").focus(); }
	else if ( phone=="" ){ alert("Please enter your Contact number"); $("#phone").focus(); }	
	else {
		$.post("contact.send.php", { name:name, email:email, phone:phone, type:type }, function( result ){
			if ( result=="SUCCESS" ){
				alert("Your contact form is sent.");
				setTimeout(function(){
					$("#name").val("");
					$("#email").val("");
					$("#phone").val("");
					$("#type").val("");
				}, 3000);
			} else {
				alert("Your contact form isn't sent. Please check fields and try again.");
			}
		});
	}

};

//Register FUNCTION
	var register_onclick = function(){
	
	'use strict';
	var name  = $("#name").val();
	var sex  = $("#sex").val();
	var age  = $("#age").val();
	var bloodgroup  = $("#bloodgroup").val();
	var email = $("#email").val();
	var temail=email;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	 	
	var phone = $("#phone").val();
	var ephone = $("#ephone").val();
	var pkg = $("#package").val();
	var size = $("#size").val();
	

	
	if ( name=="" ){ alert("Please enter your name!"); $("#name").focus(); }
	else if ( sex==null ){ alert("Please select your Sex!"); $("#sex").focus(); }
	else if ( age=="" ){ alert("Please enter your age!"); $("#age").focus(); }
	else if ( bloodgroup==null){ alert("Please enter your bloodgroup!"); $("#bloodgroup").focus(); }
	else if ( email=="" ){ alert("Please enter your Email-Id!"); $("#email").focus(); }
	else if ( !re.test(temail) ){ alert("Please check your email address!"); $("#email").focus(); }
	else if ( phone=="" ){ alert("Please enter your Contact Number!"); $("#phone").focus(); }
	else if ( ephone=="" ){ alert("Please enter your Emergency Contact Number!"); $("#ephone").focus(); }
	else if ( pkg==null ){ alert("Please select a package!"); $("#package").focus(); }	
	else if ( size==null ){ alert("Please select the T-Shirt Size"); $("#package").focus(); }	
	else {
		$.post("register.php", { name:name, sex:sex, age:age, bloodgroup:bloodgroup, email:email, phone:phone, ephone:ephone, pkg:pkg, size:size }, function( result ){
			if ( result=="FAIL" ){
				alert("Registration failed. Please check fields and try again later."+result);				
			} 
			else {				
					$("#name").val("");
					$("#email").val("");
					$("#phone").val("");
					$("#package").val("");					
					$('#myResults').html('Your registration ID is: ');
					$.magnificPopup.open({
						items: {
							src: '../update/result.html' 
						},
						removalDelay: 5000,
						type: 'ajax'						
					});	
					setTimeout(function() {
						  // Do something after 5 seconds
						  $('#myResults').html('Your <b>Registration ID</b> is: '+result);
					}, 1000);
														
			}
		
		});
	}
	

};


	/* Newsletter Functions */
	var newsletter_send = function(){
	
		'use strict';
		
		var email 	= $("#newsletter_email").val();
		if ( email=="" ){ alert("Your email address is empty!"); $("#newsletter_email").focus(); }
		else {
			$.post("newsletter.send.php", { email:email }, function( result ){
				
				console.log( result );
				
				if ( result=="SUCCESS" ){
					alert("Thank you. Your email is added to our database.");
					setTimeout(function(){ $("#newsletter_email").val(""); }, 3000);
				}
				
				else if ( result=="EXIST" ){
					alert("Error. Your email address is already exist our database.");
					$("#newsletter_email").focus();
				}
				
				else {
					alert("Error. Your email isn't added to our database.");
					$("#newsletter_email").focus();
				}
				
			});
		}
	
	};
	

	//GOOGLE MAP
	function init_map() {
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(12.367764, 76.6544994), //change the coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: [{featureType:'all',stylers:[{saturation:-100},{gamma:0.50}]}]
    };
    map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(12.367764, 76.6544994) //change the coordinates
    });
    infowindow = new google.maps.InfoWindow({
        content: "Belawadi, Srirangapatna Tq,Mandhya, Mysore, Karnataka 571438"  //add your address
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
	}
	google.maps.event.addDomListener(window, 'load', init_map);
	
	
	

	
	