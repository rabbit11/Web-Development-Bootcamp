//check off especific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    //making the parent li to fade out
    $(this).parent().fadeOut(500,function(){
        //removing the whole li (including the span)
        $(this).remove();
    });
    //preventing the li click event to trigger
    event.stopPropagation();

});

//press enter on input text to add new todo
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        //getting new todo description from text input
        var newTodo;
        newTodo = $(this).val();

        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + newTodo + "</li>");
        //clearing the input text
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text'").slideToggle();
});
