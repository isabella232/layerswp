<?php

class WP_Customize_Control_TinyMCE extends WP_Customize_Control {

	const CONTROL_ID = 'tinymce_fix_control';

	public static function init_tinymce() {
		add_action( 'customize_controls_print_footer_scripts', function() {
			global $wp_customize;

			$wp_customize->add_setting( 'tinymce_fix_setting' );
			$wp_customize->add_control( new WP_Customize_Control_TinyMCE( $wp_customize, self::CONTROL_ID, array(
				'settings' => 'tinymce_fix_setting',
			) ) );

			remove_action( 'admin_print_footer_scripts', array( '_WP_Editors', 'editor_js' ), 50 );
		}, 1 );

		// Ajax for tinyMCE
		add_filter( 'wp_ajax_layers_tinymce_field', function() {
			$field_id = $_POST['field_id'];
//			$args = ( ! empty( $_POST['field_args'] ) ? json_decode( $_POST['field_args'] ) : '' );

			wp_editor( '', $field_id );
			exit;
		} );
	}

	public function render() {
		ob_end_clean();

		_WP_Editors::editor_js();

		ob_start();
	}
}

WP_Customize_Control_TinyMCE::init_tinymce();