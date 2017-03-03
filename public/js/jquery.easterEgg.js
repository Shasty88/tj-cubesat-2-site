!function($){
    var eggId = document.getElementById("cao");
    eggId.ondblclick = function(){
        $("#egg").fadeIn("slow");
        
    };
    $("#egg").click(function() {
        $("#egg").fadeOut("slow");
    });

}(window.jQuery);
