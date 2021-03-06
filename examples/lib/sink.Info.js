/* start module: sink.Info */
$pyjs['loaded_modules']['sink.Info'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sink.Info']['__was_initialized__']) return $pyjs['loaded_modules']['sink.Info'];
	if(typeof $pyjs['loaded_modules']['sink'] == 'undefined' || !$pyjs['loaded_modules']['sink']['__was_initialized__']) $p['___import___']('sink', null);
	var $m = $pyjs['loaded_modules']['sink.Info'];
	$m['__repr__'] = function() { return '<module: sink.Info>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sink.Info';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sink']['Info'] = $pyjs['loaded_modules']['sink.Info'];
	try {


		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', 'sink', null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', 'sink', null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'sink', null, false);
		$m['Info'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sink.Info';
			$cls_definition['__md5__'] = '51a738ba4e61c3d030a8ad24ca5b08d7';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51a738ba4e61c3d030a8ad24ca5b08d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add12,$add15,text,$add13,$add2,$add3,$add16,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$add11;
				$m['Sink']['__init__'](self);
				text = "<div class='infoProse'>This is the Kitchen Sink sample.  ";
				text = (typeof ($add1=text)==typeof ($add2='It demonstrates many of the widgets in the Google Web Toolkit.') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				text = (typeof ($add3=text)==typeof ($add4='<p>This sample also demonstrates something else really useful in GWT: ') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				text = (typeof ($add5=text)==typeof ($add6='history support.  ') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				text = (typeof ($add7=text)==typeof ($add8='When you click on a link at the left, the location bar will be ') && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				text = (typeof ($add9=text)==typeof ($add10='updated with the current <i>history token</i>, which keeps the app ') && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				text = (typeof ($add11=text)==typeof ($add12='in a bookmarkable state.  The back and forward buttons work properly ') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				text = (typeof ($add13=text)==typeof ($add14="as well.  Finally, notice that you can right-click a link and 'open ") && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				text = (typeof ($add15=text)==typeof ($add16="in new window' (or middle-click for a new tab in Firefox).</p></div>") && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				self['initWidget']($m['HTML'](text, true));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('onShow', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '51a738ba4e61c3d030a8ad24ca5b08d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onShow'] = $method;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Info', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			return $m['SinkInfo']('Info', 'Introduction to the Kitchen Sink.', $m['Info']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sink.Info */


/* end module: sink.Info */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML']
*/
