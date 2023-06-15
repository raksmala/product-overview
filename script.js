$(document).ready(function() {
    const bodyClass = ['black', 'green', 'blue', 'pink'];

    $('body').on('click', function() {
        const currentClass = $(this).attr('class');
        const index = bodyClass.indexOf(currentClass);
        const nextIndex = (index + 1) % bodyClass.length;

        $(this).removeClass(currentClass);
        $(this).addClass(bodyClass[nextIndex]);
    });

    $('.product-image').on('click', function() {
        var $currentImage = $(this);
        var $nextImage = $currentImage.next();

        $('.product-image').removeClass('prev next active outside');

        $currentImage.prev().removeClass('prev');
        $currentImage.removeClass('active').addClass('prev');

        if ($nextImage.length === 0) {
            $nextImage = $('.product-image:first');
        }

        $nextImage.removeClass('next').addClass('active');

        if ($nextImage.next().length === 0) {
            $('.product-image:first').addClass('next');
        } else {
            $nextImage.next().addClass('next');
        }

        $('.product-image').not('.active, .next, .prev').addClass('outside');
    });
});