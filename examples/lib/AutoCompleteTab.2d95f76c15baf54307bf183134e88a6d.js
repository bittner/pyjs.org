/* start module: AutoCompleteTab */
$pyjs['loaded_modules']['AutoCompleteTab'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['AutoCompleteTab']['__was_initialized__']) return $pyjs['loaded_modules']['AutoCompleteTab'];
	var $m = $pyjs['loaded_modules']['AutoCompleteTab'];
	$m['__repr__'] = function() { return '<module: AutoCompleteTab>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AutoCompleteTab';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_8 = new $p['int'](8);
		$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
		$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['AutoCompleteTextBox'] = $p['___import___']('pyjamas.ui.AutoComplete.AutoCompleteTextBox', null, null, false);
		$m['AutoCompleteTab'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'AutoCompleteTab';
			$cls_definition['__md5__'] = 'e60cddac8df2755758897e5b36aaecb0';
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
					if (self.prototype['__md5__'] !== 'e60cddac8df2755758897e5b36aaecb0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var colours,panel;
				colours = $p['list'](['Azure', 'Red', 'Rust', 'Green', 'Beige', 'Brass', 'Brown', 'Bronze', 'Blue', 'Black', 'Burgundy', 'Pink', 'Gold', 'Gray', 'Purple', 'Yellow', 'White']);
				$m['Sink']['__init__'](self);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colour_input', $m['AutoCompleteTextBox']()) : $p['setattr'](self, 'colour_input', $m['AutoCompleteTextBox']()); 
				self['colour_input']['setCompletionItems'](colours);
				panel = $m['HorizontalPanel']();
				panel['add']($m['HTML']('Enter a colour: '));
				panel['add']($p['getattr'](self, 'colour_input'));
				panel['setSpacing']($constant_int_8);
				self['setWidget'](panel);
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
					if (self.prototype['__md5__'] !== 'e60cddac8df2755758897e5b36aaecb0') {
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
			return $p['_create_class']('AutoCompleteTab', $p['tuple']($bases), $data);
		})();
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add2,text,$add1;
			text = '<b>Text field auto-completion component</b><p>Shows a list of matching items as you type. Items can be selected with keyboard or mouse.';
			text = (typeof ($add1=text)==typeof ($add2='<p>Originally by Oliver Albers at <a href=\\"http://gwt.components.googlepages.com\\">gwt.components.googlepages.com</a>') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			return $m['SinkInfo']('AutoComplete', text, $m['AutoCompleteTab']);
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end AutoCompleteTab */


/* end module: AutoCompleteTab */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.AutoComplete.AutoCompleteTextBox', 'pyjamas.ui.AutoComplete']
*/
