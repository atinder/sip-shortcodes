<?php
/*
Plugin Name: Sip Shortcodes
Plugin URI: http://shopitpress.com
Description: Sip shortcode generator.
Version: 1.0
Author: Atinder
Author URI: http://atinder.com
*/

// Prevent loading this file directly
defined( 'ABSPATH' ) || exit;

class SipShortcodes{

	function __Construct(){

		add_filter( 'mce_external_plugins',array($this,'mce_external_plugins'));
		add_filter( 'mce_buttons', array($this,'mce_buttons' ));
	}


	function mce_external_plugins($plugin_array){
		$plugin_array['SipShortcodes'] = plugins_url('tinymce/plugin.js', __FILE__);
			return $plugin_array;
	}

	function mce_buttons( $buttons ) {
		$sip_array = array(
			'One'=>'one',
			'Two' => 'two'
			);
		array_push($buttons, '|','sip_button');
		return $buttons;
	}


}

new SipShortcodes();