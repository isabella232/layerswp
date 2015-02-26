jQuery(document).ready(function($) {
	var update_tinymce;


	update_tinymce = function( field_id ) {
		var $field = $('#' + field_id);

		$.ajax({
			dataType: 'html',
			async: false,
			type: 'POST',
			url: ajaxurl,
			data: {
				action: 'layers_tinymce_field',
				field_id: field_id,
				field_value: $field.data('value'),
				field_args: $field.data('args')
			},
			success: function(resp) {
				if (resp) {
					$field.replaceWith(resp);

					// init tinymce
					quicktags({id: field_id});
					tinymce.execCommand('mceAddEditor', false, field_id);
				}
			}
		});
	};

	$(document).on('widget-added', function(e, t){
		console.log(e);
		console.log(t);
	});

	//$('.tinymce-placeholder').each(function(){
	//	var $this = $(this);
	//
	//	update_tinymce( $this.attr('id') );
	//})
});