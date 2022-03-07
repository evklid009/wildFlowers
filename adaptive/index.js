/* slide */
let card = document.querySelectorAll(".card"); 
for( let i = 1; i <= card.length; i++ ){ 
    document.documentElement.style.setProperty("--face_height_" + i + "", document.querySelector(".card-container .card:nth-child(" + i + ") .face-2").scrollHeight + "px"); 
} 

/* calc */
var slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}

function Start(){
var type_flower = document.getElementById('type').value;
var slider = document.getElementById('slider').value;
var result = type_flower * slider;
document.getElementById('result').innerHTML = 
'<h4>Стоимость сборки букета: ' + result + ' руб.</h4>';
//выводим получившееся значение в div с id="result"
}

/* upbtn */

$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            left: '0'
        });
        } else {
        $('.upbtn').css({
            left: '-100px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

/* modal window */
let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 100);
};


/* value flower */

(function($) {
    var $dragMe = $(".dragme"),
    $container = $(".sl-container"),
    $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function() {
            $viewAfter.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container.on("click", function(event) {
        var eventLeft = event.pageX - $container.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, 'slow', 'linear');
        $viewAfter.animate({
            width: _left
        }, 'slow', 'linear');
    }
    $(".we").hover(function(){
        animateTo("100%");
    })    
    $(".they").hover(function(){
        animateTo(-10);
    })
})(jQuery);

/* video */
$(function() {    
    $('.tv-video').each(function() {  
        let image = $(this).attr('data-video');
        $(this).html('<img alt="" src="https://i.ytimg.com/vi/'+ image +'/hq720.jpg" />');   
    });     
    $('.tv-video').click(function() {
        $(this).addClass('show');
        let video = $(this).attr('data-video');
        $(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ video +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
});

/* map  */

function myMap() {
    var myCenter = new google.maps.LatLng(55.733028,37.636415);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 12};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}


