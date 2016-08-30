jQuery('#wpadminbar').toggle();
if(jQuery('body').hasClass('admin-bar')){
  jQuery('html').attr('style','margin-top: 0px !important;');
}else{
  jQuery('html').attr('style','margin-top: 32px !important;');
} 
jQuery('body').toggleClass('admin-bar');
