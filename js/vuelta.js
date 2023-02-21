$(document).ready(function() { 

    $('.nav-item').click(function(){

        var $target = $('.navbar-collapse');

        if($target.hasClass('in')){

            $target.removeClass('in').height(0).css('overflow','hidden');                           }

    });			

});