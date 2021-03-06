/* start module: libuitest.DOMTest */
$pyjs['loaded_modules']['libuitest.DOMTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['libuitest.DOMTest']['__was_initialized__']) return $pyjs['loaded_modules']['libuitest.DOMTest'];
	if(typeof $pyjs['loaded_modules']['libuitest'] == 'undefined' || !$pyjs['loaded_modules']['libuitest']['__was_initialized__']) $p['___import___']('libuitest', null);
	var $m = $pyjs['loaded_modules']['libuitest.DOMTest'];
	$m['__repr__'] = function() { return '<module: libuitest.DOMTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'libuitest.DOMTest';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['libuitest']['DOMTest'] = $pyjs['loaded_modules']['libuitest.DOMTest'];
	try {


		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'libuitest', null, false);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'libuitest', null, false);
		$m['UnitTest1'] = $p['___import___']('UnitTest.UnitTest1', 'libuitest', null, false);
		$m['DOMTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'libuitest.DOMTest';
			$cls_definition['__md5__'] = 'f36a5870db7a9d60935078850b55bca4';
			$method = $pyjs__bind_method2('testDivHTML', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f36a5870db7a9d60935078850b55bca4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,div;
				e = $m['DOM']['getElementById']('tests');
				div = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](e, div);
				$m['DOM']['setInnerHTML'](div, 'hello world\n');
				self['write_test_output']('addDiv');
				$m['DOM']['removeChild'](e, div);
				self['write_test_output']('removeDiv');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivHTML'] = $method;
			$method = $pyjs__bind_method2('testDivText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f36a5870db7a9d60935078850b55bca4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,div,div2;
				e = $m['DOM']['getElementById']('tests');
				div = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](e, div);
				div2 = $m['DOM']['createElement']('div');
				$m['DOM']['appendChild'](div, div2);
				$m['DOM']['setInnerText'](div2, 'hello world\n');
				self['write_test_output']('addDiv');
				$m['DOM']['removeChild'](e, div);
				self['write_test_output']('removeDiv');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDivText'] = $method;
			var $bases = new Array($m['UnitTest1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DOMTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end libuitest.DOMTest */


/* end module: libuitest.DOMTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM', 'UnitTest.UnitTest1', 'UnitTest']
*/
