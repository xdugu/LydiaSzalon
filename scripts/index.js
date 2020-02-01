  

  $(document).ready(function() {
	  $('#background').animate({'background-size':'105%'}, 6000)
	  $('#landing_text').animate({'opacity':'1'}, 3000)

  });

  function sideBar(state){
	  if(state == 'toggle')
		  $('#sidebar').toggle();
	  else if(state == 'on')
		  $('#sidebar').show();
	 else
		$('#sidebar').hide();
  }
	