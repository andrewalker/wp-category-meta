//Extracted from fpg_scripts.js (Flash Picture Gallery Plugin) and modified for use here.
function image_url_sync(add_image_url){
    var view_image_url = '<img src="' + add_image_url + '" width="200px" />';

    if (add_image_url == '')
        add_image_url = 'No images selected';

    var field            = '#' + jQuery("#image_field").val();
    var url_display_id   = field + '_url_display';
    var image_display_id = field + '_selected_image';

    jQuery(url_display_id).html(add_image_url);
	jQuery(field).val(add_image_url);

	jQuery(image_display_id).html(view_image_url);
	jQuery("#image_field").val('');
}

jQuery(function ($) {
    window.send_to_editor = function (html) {
        var image_url = $('img',html).attr('src').replace(/-[0-9]+x[0-9]+\./i,'.');
        image_url_sync(image_url);
        tb_remove();
    }
});

function image_photo_url_add(field){
	jQuery("#image_field").val(field);
}

function remove_image_url(field, message){
	var url_display_id   = '#' + field + '_url_display';
    var image_display_id = '#' + field + '_selected_image';

    jQuery(url_display_id).html(message);
	jQuery('#' + field).val('');
	jQuery(image_display_id).html('');
}
