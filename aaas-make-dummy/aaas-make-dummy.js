(function($){
  var suffix = '_' + (parseInt(Math.random()*10000000)).toString(16);
  var formdata =
  {'first_name-':'Dude',
   'last_name-':'Ranch',
   'user_pass-':'Password',
   'user_pass_confirm-':'Password',
   'institution':'Dudes United'
  };
  for ( field in formdata ) {
    $('[id^="'+field+'"').val(formdata[field] + suffix );
  }
  $('[id^="user_email"').val( suffix + '@dispostable.com' );
}(jQuery));