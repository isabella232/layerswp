jQuery(document).ready(function($) {
	var reset_tinymce;

	reset_tinymce = function( field_id ) {
		var $field = $('#' + field_id);

		$.ajax({
			dataType: 'html',
			async: false,
			type: 'POST',
			url: ajaxurl,
			data: {
				action: 'layers_tinymce_field',
				field_id: field_id
			},
			success: function(resp) {
				var $wrapper;

				if (resp) {
					$wrapper = $field.parents('.wp-editor-wrap');
					$wrapper.html('');
					$wrapper.replaceWith(resp);

					// init tinymce
//					quicktags({id: field_id});
					tinymce.execCommand('mceRemoveEditor', true, field_id);
					tinymce.execCommand('mceAddEditor', true, field_id);
				}
			}
		});
	};


	// when adding a new widget
	$(document).on('widget-added', function(e, t){
		var editors = $(t).find('.wp-editor-area');

		$.each(editors, function() {
			var id = $(this).attr('id');

			reset_tinymce( id );
		});
	});

	$('.widget .wp-editor-area').each( function() {
		var id = $(this).attr('id');
		tinyMCE.execCommand('mceAddEditor', true, id);
	});
});