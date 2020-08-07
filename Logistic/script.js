$(function () {

    $('.grayBg h1').animate({
        top: '10%'
    }, 6000, 'easeInOutElastic')

    $('.grayBg .hr').animate({
        left: '5%',
        top: '35%'
    }, 6000).animate({
        width: '600px'
    }, 2000).animate({
        width: '100px'
    }, 2000, 'easeOutBounce')

    $('.grayBg h2').animate({
        top: '45%'
    }, 5000, 'easeInOutElastic')

    $('.grayBg button').animate({
        top: '70%'
    }, 4000, 'easeOutBounce')


    $('.iconBenefit').each(function (index, element) {
        $(element).mouseover(function () {
            $(this).animate({
             width:"76px",
            })
        })
        $(element).mouseout(function () {
           $(this).animate({
                width:'53px'
            })
        })
    })
})