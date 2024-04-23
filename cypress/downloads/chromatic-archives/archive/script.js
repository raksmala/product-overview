$(document).ready(function() {
    const bodyClass = ['black', 'green', 'blue', 'pink'];

    changeBackgroundColor = function() {
        const currentClass = $('body').attr('class');
        const index = bodyClass.indexOf(currentClass);
        const nextIndex = (index + 1) % bodyClass.length;

        $('body').removeClass(currentClass);
        $('body').addClass(bodyClass[nextIndex]);

        $('.description-color').text(bodyClass[nextIndex].charAt(0).toUpperCase() + bodyClass[nextIndex].slice(1));
    };

    $('.product-image').on('click', function() {
        changeBackgroundColor();

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