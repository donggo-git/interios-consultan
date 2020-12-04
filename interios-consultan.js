$(document).ready(function(){
    
   
    let mobile_nav_check = true;
    $('.burger-nav').click(function(){
        mobile_nav_check = !mobile_nav_check;
        console.log(mobile_nav_check)
        if(mobile_nav_check&& window.outerWidth <= 1000){
        mobile_nav_active()
        }
        else{
        inactive()
        }
    })
    

   function inactive(){
    $('nav').css('transform',"translateX(120%)");
    $('.nth1').css('transform','rotate(0) translateX(0)');
    $('.nth3').css('transform','rotate(0) translateX(0)');
    $('.nth2').css('display','block');
   }
    
    function mobile_nav_active(){
        $('nav').css('transform',"translateX(0%)");
        $('.nth1').css('transform','rotate(45deg) translateX(7px)');
        $('.nth3').css('transform','rotate(-45deg) translateX(7px)');
        $('.nth2').css('display','none');
    }

})