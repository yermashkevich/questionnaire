$(function() {
    $(".menu__burger").on("click", function() {
        $(".menu").slideToggle(300);
        $(this).toggleClass("active");
    });

    $('.menu__list-link').on("click", function(e){
        let el = $(this).attr("href");

        $('.menu__list-link').removeClass("active");
        $(this).addClass("active");
        $('html,body').stop().animate({ scrollTop: $(el).offset().top - 15 }, 800);
        e.preventDefault();
    });

    $(".section__input").on("focus", function() {
        $(this).prev($(".section__label")).addClass("focus");
    });
    
    $(".section__input").on("blur", function() {
        if($(this).val().length == 0) {
            $(this).prev($(".section__label")).removeClass("focus");
        }
    });

    if($(".section__input").val().length > 0) {
        $(".section__input").prev($(".section__label")).addClass("focus");
    } 

    $(".js-select").on("focus", function() {
        $(".js-list").show();
        $(".js-icon").addClass("active");
    });
    $(".js-select").on("blur", function() {
        $(".js-list").hide();
        $(".js-icon").removeClass("active");
    });
    $(".person-fields__select-item").on("mousedown", function(){
        let value = $(this).attr("data-value");
        $(".person-fields__select").attr("value", value);
    });

    let rangeLevel = $(".level-fields__input[checked]").attr("data-value");
    $(".level-fields__range-check").width(rangeLevel);
    $(".level-fields__range-icon").css("left", rangeLevel);

    $(".level-fields__label").on("click", function() {
        let rangeLevel = $(this).children(".level-fields__input").attr("data-value");
        $(".level-fields__range-check").width(rangeLevel);
        $(".level-fields__range-icon").css("left", rangeLevel);
    });

});