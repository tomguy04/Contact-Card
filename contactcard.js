$(document).ready(function(){
    $('#form1').submit(function(){
          var fname = $("#firstname").val();
          var lname = $("#lastname").val();
          var description = $("#description").val();
          $("#cardarea").append("<div class=\"card\"><p>"+fname+" "+lname+"</p>"+"<p id=\"descriptionarea\">"+description+"</p>");
          return false
    });
    $(this).on('click','.card',function(){

        //$(this).parent().html(description); 
        //$(this).parent().html($("#description").val()); //only works this way
        //$(this).html(description).val(); //nope
        //$(this).parent().html(description.val());  
        
        //this is solution1 but long descriptions won't wrap.
        $(this).children().toggle();
        //trying to get long descriptions to wrap, but I need to move on.
        
    });
});