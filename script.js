$(document).ready(function(){
    $("#search").click(function(){

        var word = $("#word").val();
        $.ajax({
            url: "https://api.urbandictionary.com/v0/define?term=" + word,
            dataType: "jsonp",
            success: showDef


        });

        $("#clear").on('click',function () {
            document.location.reload(true);
        })


    });



    function showDef(json){
        console.log(json);
        var thing = $("#word").val();

        if (thing == 0){
            alert("Error -- No input. Please type in a word");
            $("#yours").empty();
            return(false);
        }else{
            $("#yours").empty();
            $("#yours").append("Your word is: " + thing + "<br>");
        }


        for (var i=0; i<3; i++){

        $("#yours").append("Definition: " + json.list[i].definition + "<br><br>");
        $("#yours").append("Example: " + json.list[i].example + "<br>");


        }


    }

});


