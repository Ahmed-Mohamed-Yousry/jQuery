let sectionscontent = $('.sectionscontent').innerWidth()

$('.openico').click(function(){
    $('.sidebar').animate({left:'0px'},2000)
})

$('.closeico').click(function(){
    $('.sidebar').animate({left:`-${sectionscontent}`},200)
})

$('a').click(function(){
    let currentLink = $(this).attr('href')
    console.log(currentLink);
    let offeststyle = $(currentLink).offset().top
    $('body , html').animate({scrollTop: offeststyle} , 200)
})

$('#sliderDuratio .singerClick').click(function(){
    $('.parghsinger').not($(this).next()).slideUp(700);
    $(this).next().slideToggle(700);
})

let maxLength = 100;
$('textarea').keyup(function() {
    let length = $(this).val().length;
    let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#alert").text("your available character finished");
            }
        else{
        $("#alert").text(AmountLeft);
        }
})



window.onload = function() {
   
    DownToTime("30 august 2024 11:56:00");
  }

  function DownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let day = Math.floor( timeDifference / (24*60*60));
   let hour = Math.floor((timeDifference - (day * (24*60*60))) / 3600);
   let min = Math.floor((timeDifference - (day * (24*60*60)) - (hour * 3600 )) / 60);
   let sec = Math.floor((timeDifference - (day * (24*60*60)) - (hour * 3600) - (min * 60)))


    $(".days").html(`${day} D`);
    $(".hours").html(`${hour} h`);
    $(".minutes").html(`${ min } m`);
    $('.seconds').html(`${ sec} s`)

  
    setInterval(function() { DownToTime(countTo); }, 1000);
  }
