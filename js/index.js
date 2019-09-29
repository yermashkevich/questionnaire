$(function() {
    $(".menu__burger").on("click", function() {
        $(".menu").slideToggle(300);
        $(this).toggleClass("active");
    });

    $(".section__input").on("focus", function() {
        $(this).prev($(".section__label")).addClass("focus");
    });
    
    $(".section__input").on("blur", function() {
        if($(this).val().length == 0) {
            $(this).prev($(".section__label")).removeClass("focus");
        }
    });

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

});