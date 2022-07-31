$(document).ready(function(){
    $(".a").on({
        click: function() {
            $(this).css("color", "red");
        },
        mouseleave: function() {
            $(this).css("color", "white");
        },
        click: function() {
            $(this).css("background-color", "green");
        },
        mouseleave: function() {
            $(this).css("background-color", "rgb(129, 129, 163)");
        }
    });
});
// this is a jquery function that is hide()
$(document).ready(function(){
    $(".hide").click(function(){
        $(".demo").hide(1000);
    });
});
// here's  we use jquery function for show something that is hide
$(document).ready(function(){
    $(".show").click(function(){
        $(".demo").show(2000);
    });
});
// now we use a toggle for hide data show and show data hide
$(document).ready(function(){
    $(".toggle").click(function(){
        $(".demo2").toggle(1000);
    });
});
// now we use fadeIn() jquery
$(document).ready(function(){
    $(".fade").click(function(){
        $(".f1").fadeIn();
        $(".f2").fadeIn("slow");
        $(".f3").fadeIn(2000);
    });
});
// now we use fadeOUt() jquery
$(document).ready(function(){
    $(".fadeo").click(function(){
        $(".f1").fadeOut();
        $(".f2").fadeOut("slow");
        $(".f3").fadeOut(2000);
    });
});
// now we use fadeToggle() jquery
$(document).ready(function(){
    $(".fadet").click(function(){
        $(".f1").fadeToggle();
        $(".f2").fadeToggle("slow");
        $(".f3").fadeToggle(2000);
    });
});
// now we use fadeTo() for opacity
$(document).ready(function(){
    $(".fadeto").click(function(){
        $(".f1").fadeTo("slow", 0.14);
        $(".f2").fadeTo("slow", 0.5);
        $(".f3").fadeTo("slow", 0.7);
    });
});
// now we use slide down jquery
$(document).ready(function(){
    $(".slided").click(function(){
        $(".slidd").slideDown("slow");
    });
});
// now we use slide up jquery
$(document).ready(function(){
    $(".slideu").click(function(){
        $(".slidd").slideUp("slow");
    });
});
// now we use slide toggle uquery
$(document).ready(function(){
    $(".slidet").click(function(){
        $(".slidd").slideToggle("slow");
    });
});
// we use animate() jquery for animation
$(document).ready(function(){
    $(".ani").click(function(){
        $(".anim").animate({
            left: '547px',
            opacity: '0.5',
            height: '200px',
            width: '200px',
        });
    });
});
// we use animate() again for toggle
$(document).ready(function(){
    $(".ani2").click(function(){
        $(".anim2").animate({
            height: 'toggle'
        });
    });
});
// we use animate() again but we use queue
$(document).ready(function(){
    $(".ani3").click(function(){
        var box = $(".anim3");
        box.animate({height: '200px', opacity: '0.4'}, "slow"); // box heigth 200 then 80
        box.animate({width: '200px', opacity: '0.8'}, "slow"); // box widht 200 then 80
        box.animate({height: '80px', opacity: '0.4'}, "slow"); // box hieht and width back to 80px
        box.animate({width: '80px', opacity: '0.8'}, "slow");
    });
});
// animate() for font size increase
$(document).ready(function(){
    $(".ani4").click(function(){
        var font = $(".anim4");
        font.animate({left: '300px'}, "slow");
        font.animate({height: '200px', width: '200px'}, "slow");
        font.animate({fontSize: '5em'}, "slow");
    });
});
// we use slideDown() function
$(document).ready(function(){
    $(".down").click(function(){
        $(".stp2").slideDown(5000);
    });
});
// we use stop() function for stop slide
$(document).ready(function(){
    $(".stp").click(function(){
        $(".stp2").stop();
    });
});
// we use again hide() function and give a alert
$(document).ready(function(){
    $(".call").click(function(){
        $(".back").hide("slow", function(){
            alert("This line is now hidden");
        });
    });
});
// we chaining slideDown() and slideUp() functions
$(document).ready(function(){
    $(".chain").click(function(){
        $(".chain2").css('color', 'red').slideUp(2000).slideDown(2000);
    });
});