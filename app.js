


$('.header__input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){

        if($(".header__input").val()==""){
            alert("Type your activity!")
        }
    
        else{
            $(".list__item__container").append(
                '<li class="list__item list__item__basic ">'
                    + '<p class="list__item__text" contenteditable="true">'+$(".header__input").val()+'</p>' 
                    +' <div class="list__item__button__wrapper">'
                        +' <a class="list__item__button list__item__button--done" ><img class="list__item__button__img" src="assets/check-circle-solid.svg" alt="check circle"></a>'
                        +' <a class="list__item__button list__item__button--delete" ><img class="list__item__button__img" src="assets/trash-solid.svg" alt="trash"></a>'
                    +' </div>'
                +'</li>'
            )
    
        }
        $(".header__input").val("")

        

    } 
    
    
    $(".list__item__button--done").click(function(){
        
        $(this).closest(".list__item").addClass("list__item__finished");
        
        
        
    });
    
    
    $(".list__item__button--delete").click(function(){
        $(this).closest(".list__item").remove();
        
    });
});






// ===================================================================================================//

$(".header__button").click(function(){

    if($(".header__input").val()==""){
        alert("Type your activity!")
    }

    else{
        $(".list__item__container").append(
            '<li class="list__item list__item__basic ">'
                + '<p class="list__item__text" contenteditable="true">'+$(".header__input").val()+'</p>' 
                +' <div class="list__item__button__wrapper">'
                    +' <a class="list__item__button list__item__button--done" ><img class="list__item__button__img" src="assets/check-circle-solid.svg" alt="check circle"></a>'
                    +' <a class="list__item__button list__item__button--delete" ><img class="list__item__button__img" src="assets/trash-solid.svg" alt="trash"></a>'
                +' </div>'
            +'</li>'
        )

    }
    $(".header__input").val("")

   
    
    
    $(".list__item__button--done").click(function(){
        
        $(this).closest(".list__item").addClass("list__item__finished");
        
        
        
    });
    
    
    $(".list__item__button--delete").click(function(){
        $(this).closest(".list__item").remove();
        
    });
});
