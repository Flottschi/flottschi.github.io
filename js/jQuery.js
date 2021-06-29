$(document).ready(function(){

    if (Cookies.get('darkEnabled') == undefined) {
        Cookies.set('darkEnabled', '1');
    }

    if (Cookies.get('darkEnabled') === '0') {
        $('link[href="css/styles.css"]').attr('href','css/styleslight.css');
        $('link[href="../css/styles.css"]').attr('href','../css/styleslight.css');
        $('#dark').css('display', 'inline');
        $('#light').css('display', 'none');
        $('#light-arrow').css('display', 'inline');
        $('#dark-arrow').css('display', 'none');
    } else {
        $('#light-arrow').css('display', 'none');
        $('#dark-arrow').css('display', 'inline');
    }


    $('#dark').on('click', function (){
        $('link[href="../css/styleslight.css"]').attr('href','../css/styles.css');
        $('link[href="css/styleslight.css"]').attr('href','css/styles.css');
        $('#dark').css('display', 'none');
        $('#light').css('display', 'inline');
        $('#light-arrow').css('display', 'none');
        $('#dark-arrow').css('display', 'inline');
        $('.col3, .col2').not('#sidenav').css('background-color', '#444444');
        Cookies.set('darkEnabled', '1');
    });

    $('#light').on('click', function (){
        $('link[href="css/styles.css"]').attr('href','css/styleslight.css');
        $('link[href="../css/styles.css"]').attr('href','../css/styleslight.css');
        $('#dark').css('display', 'inline');
        $('#light').css('display', 'none');
        $('#light-arrow').css('display', 'inline');
        $('#dark-arrow').css('display', 'none');
        $('.col3, .col2').not('#sidenav').css('background-color', '#EEEEEE');
        Cookies.set('darkEnabled', '0');
    });

    $('.product-img').on('click', function (){
        if ($('.product-img').width() == 200) {
            $('.product-img').animate({width: '430px'});
        } else {
            $('.product-img').animate({width: '200px'});
        }
    });

    $(document).on('click', function (){
        if ($('.dropdown').css('display') == 'block') {
            $('.dropdown').css('display', 'none');
            $('.dropdown-arrow').css('transform', 'rotate(0deg)');
        }
    });


    $('.ondropdown').on('click', function (e){
        e.stopPropagation();
        if ($('.dropdown').css('display') == 'none') {
            $('.dropdown').css('display', 'block');
            $('.dropdown-arrow').css('transform', 'rotate(90deg)');
        } else {
            $('.dropdown').css('display', 'none');
            $('.dropdown-arrow').css('transform', 'rotate(0deg)');
        }
    });

    $('.col3, .col2').not('#sidenav').on('mouseenter', function (){
        if (Cookies.get('darkEnabled') === '0') {
            $(this).css('background-color', '#DEDEDE');
        } else {
            $(this).css('background-color', '#3d3d3d');
        }
    }).on('mouseleave', function() {
        if (Cookies.get('darkEnabled') === '0') {
        $(this).css('background-color', '#EEEEEE');
    } else {
        $(this).css('background-color', '#444444');
    }
    });


});