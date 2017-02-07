'use strict';

// Scitent bookmarklet code to autocomplete LearnDash courses with all correct answers
(function(){ /* code */ 
	// jQuery('[value="1"]').attr('checked','checked');
	// jQuery('[value="Next"]').trigger('click');
	var scitent = populate_scitent_ace_bookmarklet();
	var s_lba = scitent.learndash_bookmarklet_answerer;
	var qzid = s_lba.init_qzid(); // wppro quiz id
	if( -1 === qzid ) {
		return;
	}
	s_lba.init_ld_json(); // initialize json from page (s_toph.learndash_json)
	s_lba.solve_these(); // answer them all correctly!
	// jQuery('[value="Next"]').trigger('click'); // click through "next" buttons 

}());

function populate_scitent_ace_bookmarklet() {
/** Scitent JavaScript Namespace
 * Handy Utilities and Helpers for Scitent Plugins
 *
 */
'use strict';
if(!scitent) { var scitent = {}; }
if(!scitent.utils) { scitent.utils = {}; }

scitent = jQuery.extend({}, scitent, {
	learndash_bookmarklet_answerer: { // use jQuery to select answers to questions
		qzid: -1,
		init_or_restart: function() {
			'use strict';
			scitent.retake_helper.got_corrects = [];
			this.init_qzattstamp();
		},
		init_qzid: function() {
			'use strict';
			if( !jQuery('.wpProQuiz_content').length ) { return -1; }
			this.qzid = jQuery('.wpProQuiz_content').attr('id').slice('wpProQuiz_'.length);
			return this.qzid;
		},
		qzattempt_time: 0, // until initialized
		init_qzattstamp: function() {
			'use strict';
			var d = new Date();
			this.qzattempt_time = d.getTime();	 
		},
		learndash_json: {}, // until parsed with init_ld_json
		init_ld_json: function() {
			'use strict';
			if( !jQuery('.wpProQuiz_content').length ) { return; }
			var wpProID = this.qzid;
			var load_func = window['load_wpProQuizFront' + wpProID ];
			var load_str = load_func.toString();
			var question_config = JSON.parse(load_str.substring(load_str.indexOf("json") + 5, load_str.lastIndexOf("}}") + 2));
			this.learndash_json = question_config;
		},
		solve_these: function() { // idlist of questions to solve
			'use strict';
			for (var qnid in this.learndash_json) {
			    if( !this.learndash_json.hasOwnProperty(qnid) ) { // skip inherited props
			    	continue;
			    }
		      	var question = this.learndash_json[qnid];
				var qname = 'question_' + this.qzid + '_' + qnid;
				var $q = jQuery('input[name="'+qname+'"]');
				if( $q.is(':checked') ) {
					continue; // skip this if there is already a selected choice
				}
				for(var choice in question.correct) { 
					if(question.correct[choice] ){ // get single correct answer
						$q.eq(choice).prop('checked','checked');
					} 
				}
			}
		},
		single: function(qzid, qid, correctjson) {
			'use strict';
			// set single correct answer:
			var qname = 'question_' + qzid + '_' + qid;
			var $q = jQuery('input[name="'+qname+'"]'); // possible solutions
			if($q.is(':checked')) {
				return; // skip this if there is already a selected choice
			}
			for(var choice in correctjson) { 
				// alert(jQuery('input[name="question_2_5"]').eq(choice).val() + ' should be: ' + correctjson[choice]); 
				if(correctjson[choice]){ 
					$q.eq(choice).prop('checked',true); 
				} 
			}
		},
		multiple: function(qzid, qid, correctjson) {
			'use strict';
			// stub, for now
		},
		free_answer: function(qzid, qid, correctjson) {
			'use strict';
			// stub, for now
		},
		matrix_sort_answer: function(qzid, qid, correctjson) {
			'use strict';
			// stub, for now
		},
		cloze_answer: function(qzid, qid, correctjson) {
			'use strict';
			// stub, for now
		},
		assessment_answer: function(qzid, qid, correctjson) {
			'use strict';
			// stub, for now
		}

	}
});

return scitent;
}
