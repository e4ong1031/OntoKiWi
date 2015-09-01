/**
 * Copyright © 2015 The Regents of the University of Michigan
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 * 
 * For more information, questions, or permission requests, please contact:
 * Yongqun “Oliver” He - yongqunh@med.umich.edu
 * Unit for Laboratory Animal Medicine, Center for Computational Medicine & Bioinformatics
 * University of Michigan, Ann Arbor, MI 48109, USA
 * He Group:  http://www.hegroup.org
 */

/**
 * @file ext.okw.form.submit.js
 * @author Edison Ong
 * @since Aug 01, 2015
 * @comment 
 */

$( document ).ready(function() {
	$( "#okw-form" ).submit( function( event ) {
		if ( $( "#okw-form-ontology" ).val().length == 0 ) {
			alert( "Please select an ontology first!" );
			event.preventDefault();
		} else if ( $( "#okw-describe-label-input" ).val().length == 0 ||
			$( "#okw-describe-iri-input" ).val().length == 0 ) {
			alert( "Label or IRI cannot be empty!" );
			event.preventDefault();
		} else if ( $( "#okw-form-subclass-main >tbody" ).length == 0 ) {
			alert( "Term must have at least one parent!" );
			event.preventDefault();
		} else {
			$( "#okw-form-annotation-main >tbody >tr" ).each( function () {
				var text = $( this ).children( "td:last" ).children( ".queue-text" ).val();
				if ( text.length == 0) {
					alert( "Annotation contains empty field!" );
					event.preventDefault();
				}
			} );
		}
		
	} )
} )