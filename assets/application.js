jQuery(document).ready(function($){
    $(document).on("submit", "#cart_from", function(event){
        var notification_selector = $(this);
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: '/cart/add.js',
            cache: false,
            data: $(this).serialize(),
            dataType: "json",
            success: function(data)
            {
                var cart_count = $("li#cart_item_count").attr("data-cart");

                $("li#cart_item_count a").html("Cart("+(parseInt(cart_count)+1)+")");
                $("li#cart_item_count").attr('data-cart', (parseInt(cart_count)+1));
                $(notification_selector).next("div.product_notification").html("Added To Cart !");
                setTimeout(function(){
                    $(notification_selector).next("div.product_notification").html("");
                }, 3000);
                // console.log(data.item_count);
            }
        });
    });
});