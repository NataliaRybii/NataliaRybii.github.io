     
  //     $("figure").mouseleave(
  //   function() {
  //     $(this).removeClass("hover");
  //   }
  // );
      <script type='text/javascript'>function init_map(){var myOptions = {zoom:13,center:new google.maps.LatLng(49.55609220551263,25.58865156344608),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(49.55609220551263,25.58865156344608)});infowindow = new google.maps.InfoWindow({content:'<strong>Название</strong><br>Тернопіль, Україна<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
     
      if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }

