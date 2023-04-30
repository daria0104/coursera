document.addEventListener("DOMContentLoaded",
function(){
    document.querySelector("button")
    .addEventListener("click", function(){
        var self = this;
        var name = "";

        $ajaxUtils
        .sendGetRequest("text.json",
        function(res){
            var message = res.name + " " + res.surname + " ";
            message += res.year;

            document.querySelector("#content")
            .innerHTML = "<h2>Hello " + message + "</h2>";
        });

        
    });
});