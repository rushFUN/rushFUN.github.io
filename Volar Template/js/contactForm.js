(function($){
    jQuery(document).ready(function(){

        $('.id--ajax-contact').each(function(){

            $(this).submit(function( e ) {

                e.preventDefault();

                var $contactForm = $(this);
                var serializedContent = $contactForm.serialize();

                var data = {};
                data.formInput = serializedContent;
                data.contactInfo = $contactForm.find('.ff-contact-info').html();

                frslib.ajax.frameworkRequest('contactform-send-ajax', null, data, function( response ) {
                    var $formMessage = $contactForm.find('.id--form-messages');

                    $formMessage.removeClass('error').addClass('success').fadeIn().delay(5000).fadeOut();

                    var $messages = $contactForm.find('.ff-contact-messages');

                    var result = '';
                    if( response == 'true' ) {
                        result = $messages.find('.ff-message-send-ok').html();

                        $formMessage.removeClass('error').addClass('success').fadeIn().delay(5000).fadeOut();
                        $formMessage.text( result );

                        $contactForm.trigger('reset');
                        $contactForm.find('.id--btn-submit').removeClass('btn-loading');
                    } else {
                        result = $messages.find('.ff-message-send-wrong').html();

                        $formMessage.removeClass('success').addClass('error').fadeIn().delay(5000).fadeOut();
                        $formMessage.text( result );

                        $contactForm.find('.id--btn-submit').removeClass('btn-loading');
                    }

                });
            });


        });



        jQuery(".input-field").each(function () {
            var $this = jQuery(this);
            if ($this.val().length) {
                $this.parent().addClass("input--filled")
            }
            $this.on("focus", function () {
                $this.parent().addClass("input--filled");
            });
            $this.on("blur", function () {
                if (!$this.val().length) {
                    $this.parent().removeClass("input--filled")
                }
            })
        });

    });

})(jQuery);
