(function() { 

        // Load plugin specific language pack 
        //tinymce.PluginManager.requireLangPack('sipShortcodes'); 
 
        tinymce.create('tinymce.plugins.SipShortcodes', { 
               
                init : function(ed, url) { 

                        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('sip_button'); 
                        ed.addCommand('sip_button', function() { 
                                ed.windowManager.open({
                                        file : url + '/dialog.html', 
                                        width : 320 + ed.getLang('sipShortcodes.delta_width', 0), 
                                        height : 120 + ed.getLang('sipShortcodes.delta_height', 0), 
                                        inline : 1 
                                }, {
                                        plugin_url : url, // Plugin absolute URL 
                                        some_custom_arg : 'custom arg' // Custom argument 
                                }); 
                        }); 
 
                        // Register sipShortcodes button 
                        ed.addButton('sipShortcodes', {
                                title : 'sipShortcodes.desc', 
                                cmd : 'sip_button', 
                                image : url + '/img/sip-button.jpg' 
                        }); 
 
                        // Add a node change handler, selects the button in the UI when a image is selected 
                        ed.onNodeChange.add(function(ed, cm, n) {
                                cm.setActive('sipShortcodes', n.nodeName == 'IMG'); 
                        }); 
                }, 
 
                /** 
                 * Creates control instances based in the incomming name. This method is normally not 
                 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons 
                 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this 
                 * method can be used to create those. 
                 * 
                 * @param {String} n Name of the control to create. 
                 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control. 
                 * @return {tinymce.ui.Control} New control instance or null if no control was created. 
                 */ 
                createControl : function(n, cm) { 
                        return null; 
                }, 
 
                /** 
                 * Returns information about the plugin as a name/value array. 
                 * The current keys are longname, author, authorurl, infourl and version. 
                 * 
                 * @return {Object} Name/value array containing information about the plugin. 
                 */ 
                getInfo : function() { 
                        return { 
                                longname : 'Sip plugin',
                                author : 'atinder', 
                                authorurl : 'http://atinder.com', 
                                infourl : 'http://shopitpress.com', 
                                version : "1.0" 
                        }; 
                } 
        }); 
 
        // Register plugin 
        tinymce.PluginManager.add('sipShortcodes', tinymce.plugins.SipShortcodes); 
})();