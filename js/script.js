$(document).ready(function(){
    //hides the initial content
    $("#initial").hide();
    
    jQuery.getJSON('data/data.txt',function(data){
      
        var projects = [];
        var team = [];
        var colors = [];
        
        // PROJECTS LIST
        $.each( data["projects"], function(i) {
          //the lazy way :)
          projects.push( "<li id='" + data["projects"][i]["code"] + "' title='" + data["projects"][i]["name"] + "'>" + data["projects"][i]["name"] + "</li>" );
        });
        
        for(var l=0; l<projects.length; l++){
          $("#projects").append(projects[l]);
        }
        
        //TEAM LIST
        $.each( data["team"], function(i) {
          colors.push(data["team"][i]["color"]);
          team.push( "<li><h2 class='" + data["team"][i]["project"] + "'>" + data["team"][i]["name"] + "</h2></li>" );
        });
        
        for(var m=0; m<colors.length; m++){
          $("#names").append(team[m]);
          $("#names li").eq(m).css('background-color',colors[m]);
        }
        
       //HANDLES THE CLICK ON THE PROJECTS
       $('body').on('click','#projects li', function(){
          var selID = $(this).attr("id");
          if(selID == "all"){
              $("#names").children().show();
          }else{
              $("."+selID).parent().siblings().hide();
              $("."+selID).parent().show();
          }
          
       }); //end click
     
    });//end getJSON
    
    
});//end document ready