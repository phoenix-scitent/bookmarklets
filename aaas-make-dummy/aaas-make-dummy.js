(function($){
  var suffix = '_' + (parseInt(Math.random()*10000000)).toString(16);
  var formdata =
  {'first_name-':'Dude',
   'billing_first_name':'Dude',
   'last_name-':'Ranch',
   'billing_last_name':'Ranch',
   'billing_address':'123 Somewhere',
   'billing_city':'Somewhereville',
   'user_pass-':'Password',
   'user_pass_confirm-':'Password',
   'institution':'Dudes United'
  };
  for ( field in formdata ) {
    $('[id^="'+field+'"').val(formdata[field] + suffix );
  }
  $('[id^="user_email"').val( suffix + '@dispostable.com' );
  $('[id^="billing_email"').val( suffix + '@dispostable.com' );
  $('[id^="billing_postcode"').val( '12345' );
}(jQuery));