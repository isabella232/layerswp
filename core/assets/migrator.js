/**
 * Migrator JS FIle
 *
 * This file contains all settings related to exporting and importing Layers Pages.
 *
 * @package Layers
 * @since Layers 1.0.0
 *
 * Contents
 * 1 - Select a Layout Step
 * 2 - Cancel & Close Modal
 * 3 - Final Importer Step
 * 4 - Import Page Button in Page Edit Screen
 *
 * Author: Obox Themes
 * Author URI: http://www.oboxthemes.com/
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */
jQuery(document).ready(function($){


    var $title, $widget_data,

	getParameterByName = function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	/**
	* 1 - Select a Layout Step, Sets global vars for use in the import phase
	*/

	$(document).on( 'click', '.layers_page_layers-add-new-page .layers-product', function(e){
		e.preventDefault();

		$button = $(this).find('[id^="layers-generate-preset-layout-"]');

		$id = $button.data( 'key' );

		$title = $('#' + $id + '-title' ).val();
		$widget_data = $('#' + $id + '-widget_data' ).val();

		// Show the Modal
		$( '.layers-modal-container' ).find( '.layers-media-image' ).html( $button.find('img') );
		$( '.layers-modal-container' ).hide().removeClass( 'layers-hide' ).fadeIn( 350 );
		$( '#adminmenu' ).fadeOut();

		$( '#layers_preset_page_title' ).val( $title );
	});


	/**
	* 2 - Cancel And Close Modal
	*/

	$(document).on( 'click', '#layers-preset-layout-next-button a#layers-preset-cancel', function(e){
		e.preventDefault();

		// "Hi Mom!"
		$that = $(this);

		$( '.layers-modal-container' ).fadeOut();
		$( '#adminmenu' ).fadeIn();
	});

	/**
	* 3 - Final Preset Layout - Shows loading bar, when complete sends us to the customizer
	*/

	$(document).on( 'click', '#layers-preset-layout-next-button a#layers-preset-proceed', function(e){
		e.preventDefault();

		// "Hi Mom!"
		$that = $(this);

		$( '.layers-load-bar' ).hide().removeClass( 'layers-hide' ).fadeIn( 750 );
		$( '#layers-preset-layout-next-button' ).addClass( 'layers-hide' );

		$( '.layers-progress' ).removeClass( 'zero complete' ).css('width' , 0);
		var $load_bar_percent = 0;

		$( '.layers-progress' ).animate( {width: "100%"}, 4500 );

		var $page_data = {
				action: 'layers_create_builder_page_from_preset',
				post_title: $( '#layers_preset_page_title' ).val(),
				widget_data: $.parseJSON( $widget_data ),
				nonce: layers_migrator_params.preset_layout_nonce
			};

		jQuery.post(
			ajaxurl,
			$page_data,
			function(data){

				$results = $.parseJSON( data );

				$( '.layers-progress' ).stop().animate({width: "100%"} , 500 , function(e){
					window.location.assign( $results.customizer_location );
				});
			}
		);
	});

	/**
	* 4 - Import Page Button in Page Edit Screen
	*/

	var file_frame;
	$(document).on( 'click', '#layers-page-import-button' , function(e){
		e.preventDefault();

		// "Hi Mom!"
		$that = $(this);

		// If the media frame already exists, reopen it.
		if ( file_frame ) {
			file_frame.close();
		}

		// Create the media frame.
		file_frame = wp.media.frames.file_frame = wp.media({
			title: $that.data( 'title' ),
			button: {
				text: $that.data( 'button_text' ),
			},
			multiple: false  // Set to true to allow multiple files to be selected
		});

		// When an image is selected, run a callback.
		file_frame.on( 'select', function() {

			// We set multiple to false so only get one image from the uploader
			attachment = file_frame.state().get('selection').first().toJSON();

			// Read the file JSON
			$.getJSON( attachment.url, function( import_data ){

				jQuery( '#layers-page-import-button' ).text( migratori18n.importing_message ).addClass( 'btn-link' );

				// Set the attributes to send to the importer
				var $page_data = {
						action: 'layers_import_widgets',
						post_id: $that.data('post-id'),
						widget_data: import_data,
						nonce: layers_migrator_params.import_layout_nonce
					};

				$.post(
					ajaxurl,
					$page_data,
					function(data){
						// Upon completion update the import button
						jQuery( '#layers-page-import-button' ).fadeOut( 500, function() {
							jQuery(this).text( migratori18n.complete_message ).fadeIn().attr('disabled','disabled');
						} ).closest( '.layers-column' ).addClass( 'layers-success' );
					}
				);

			});

			return;
		});

		// Finally, open the modal
		file_frame.open();

		return false;
	});

	/**
	* 5 - Duplicate Page Button in Page Edit Screen
	*/

	var file_frame;
	$(document).on( 'click', '#layers-page-duplicate-button' , function(e){
		e.preventDefault();

		// "Hi Mom!"
		$that = $(this);

		// Set the attributes to send to the importer
		var $page_data = {
				action: 'layers_duplicate_builder_page',
				post_id: $that.data('post-id'),
				post_title: $('#title').val(),
				nonce: layers_migrator_params.duplicate_layout_nonce
			};

		$.post(
			ajaxurl,
			$page_data,
			function(data){
				$results = $.parseJSON( data );

				$a = $('<a />').attr('class' , 'layers-button btn-link' ).attr( 'href' , $results.page_location ).text( migratori18n.duplicate_complete_message );
				jQuery( '#layers-page-duplicate-button' ).closest( '.layers-column' ).addClass( 'layers-success' );
				jQuery( '#layers-page-duplicate-button' ).replaceWith( $a );
			}
		);


	});

    $(document).on( 'click', '#layers-page-preset-button' , function(e){
        e.preventDefault();

        // "Hi Mom!"
        var $that = $(this),
            $preset_title = $('#preset-title'),
            // Set the attributes to send to the importer
            $page_data = {
                action: 'layers_create_preset',
                post_id: $that.data('post-id'),
                preset_title: $preset_title.val(),
                nonce: layers_widget_params.nonce
            };

        $preset_title.parent().remove();

        $.post(
            layers_widget_params.ajaxurl,
            $page_data,
            function(results){
                if ( results.success ) {
                    $a = $('<a />').attr('class' , 'layers-button btn-link' ).attr( 'href' , results.data.page_location ).text( migratori8n.create_preset_complete_message );
                    $that.closest( '.layers-column' ).addClass( 'layers-success' );
                    $that.replaceWith( $a );
                } else {
                    $that.closest( '.layers-column' ).addClass( 'layers-ajax-error' );
                }
            }
        );


    });

    $(document).on( 'click', '.layers_page_layers-add-new-page .layers-product .menu-icon', function(e){
        var $menu = $(this).siblings('.edit-preset-menu');
        $menu.toggleClass('layers-hide');
        return false;
    });

    $(document).on( 'click', '.layers_page_layers-add-new-page .layers-product .edit-preset', function(e){
        e.stopPropagation();
    });

    $(document).on( 'click', '.layers_page_layers-add-new-page .layers-product .delete-preset', function(e){
        var conf = window.confirm(migratori8n.confirm_delete_message);

        if ( conf ) {
            // "Hi Mom!"
            var $that = $(this),
                // Set the attributes to send to the importer
                $page_data = {
                    action: 'layers_delete_preset',
                    post_id: $that.parents('.layers-product').data('post-id'),
                    nonce: layers_widget_params.nonce
                };

            $.post(
                layers_widget_params.ajaxurl,
                $page_data,
                function(results){
                    $parent = $that.parents('.layers-product');
                    if ( results.success ) {
                        $parent.fadeOut();
                    } else {
                        $parent.addClass('layers-ajax-error');
                    }
                }
            );
        }
        return false;
    });

	var pageQueryVar = getParameterByName('page');
	var presetQueryVar = getParameterByName('presetID');

	if ( pageQueryVar === 'layers-add-new-page' && presetQueryVar !== null ) {
		var $presetParent = $('.layers-product[data-post-id="' + presetQueryVar + '"]');
		$presetParent.find('.layers-button.load-customize').click();
	}

});
