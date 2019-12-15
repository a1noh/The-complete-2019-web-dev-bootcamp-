//$("h1").css("color", "red"); // first argument is the key and second is the value that i want to change to
$("a").attr("href", "http://www.yahoo.com"); // attr (chahge attribute)
$("button").click(function(){
    $("h1").css("color", "purple");
})
$("input").keydown(function(e){ //call back function to get the keypressed object
    console.log(e.key); // e.key returns the button pressed after keydonw function eexecutes
})

$(document).keydown(function(e){ // $(document) selects the whole page
    $("h1").text(e.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
})

$("h1").before("<button>new</button>"); // theres   before after append prepend

$("button").on("click", function(){
    $("h1").slideToggle();
})