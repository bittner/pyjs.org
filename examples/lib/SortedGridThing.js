/* start module: SortedGridThing */
$pyjs['loaded_modules']['SortedGridThing'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['SortedGridThing']['__was_initialized__']) return $pyjs['loaded_modules']['SortedGridThing'];
	var $m = $pyjs['loaded_modules']['SortedGridThing'];
	$m['__repr__'] = function() { return '<module: SortedGridThing>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SortedGridThing';
	$m['__name__'] = __mod_name__;
	try {
		var $bool3;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_98 = new $p['int'](98);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_73 = new $p['int'](73);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_52 = new $p['int'](52);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
		$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
		$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
		$m['DisclosurePanel'] = $p['___import___']('pyjamas.ui.DisclosurePanel.DisclosurePanel', null, null, false);
		$m['OddGridWidget'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'SortedGridThing';
			$cls_definition['__md5__'] = '46a9be703404320fde1481684d7265b0';
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '46a9be703404320fde1481684d7265b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var cf;
				$pyjs_kwargs_call($m['DockPanel'], '__init__', null, kwargs, [{}, self]);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('grid', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'datagrid'}])) : $p['setattr'](self, 'grid', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'datagrid'}])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sp', $pyjs_kwargs_call(null, $m['ScrollPanel'], null, null, [{'Width':'100%', 'Height':'100%'}, $p['getattr'](self, 'grid')])) : $p['setattr'](self, 'sp', $pyjs_kwargs_call(null, $m['ScrollPanel'], null, null, [{'Width':'100%', 'Height':'100%'}, $p['getattr'](self, 'grid')])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('header', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'Height':'50px'}])) : $p['setattr'](self, 'header', $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'Height':'50px'}])); 
				self['add']($p['getattr'](self, 'header'), $p['getattr']($m['DockPanel'], 'NORTH'));
				self['add']($p['getattr'](self, 'sp'), $p['getattr']($m['DockPanel'], 'CENTER'));
				cf = self['setCellHeight']($p['getattr'](self, 'header'), '50px');
				cf = self['setCellHeight']($p['getattr'](self, 'sp'), '100%');
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sortcol', $constant_int_0) : $p['setattr'](self, 'sortcol', $constant_int_0); 
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('setData', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '46a9be703404320fde1481684d7265b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				self['redraw']();
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['setData'] = $method;
			$method = $pyjs__bind_method2('sortfn', function(row1, row2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					row1 = arguments[1];
					row2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '46a9be703404320fde1481684d7265b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $4,$2,$3,$1;
				return $p['cmp']((typeof ($1=row1)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=$p['getattr'](self, 'sortcol')]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__']($p['getattr'](self, 'sortcol'))), (typeof ($3=row2)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=$p['getattr'](self, 'sortcol')]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']($p['getattr'](self, 'sortcol'))));
			}
	, 1, [null,null,['self'],['row1'],['row2']]);
			$cls_definition['sortfn'] = $method;
			$method = $pyjs__bind_method2('redraw', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '46a9be703404320fde1481684d7265b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,cols,$iter1_iter,ncol,$iter1_nextval,row,rows,$iter2_iter,$iter1_array,$iter3_iter,$iter2_type,$iter3_idx,cf,$iter2_idx,$bool1,$iter3_type,$6,$5,$iter2_nextval,$cmp1,$iter1_type,nrow,$cmp2,item,$len2,$iter1_idx,$len1,sb,$iter3_nextval,$iter2_array;
				self['data']['sort']($p['getattr'](self, 'sortfn'));
				rows = (($len1=$p['getattr'](self, 'data')) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1)))));
				cols = $constant_int_0;
				if ((($bool1=((($cmp1=rows)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					cols = (($len2=(typeof ($5=$p['getattr'](self, 'data'))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=$constant_int_0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']($constant_int_0))) === null?$constant_int_0:
						(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
									$p['len']($len2)))));
				}
				self['grid']['resize'](rows, cols);
				self['header']['resize']($constant_int_1, cols);
				cf = self['grid']['getCellFormatter']();
				$iter1_iter = $p['enumerate']($p['getattr'](self, 'data'));
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					nrow = $tupleassign1[0];
					row = $tupleassign1[1];
					$iter2_iter = $p['enumerate'](row);
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
						ncol = $tupleassign2[0];
						item = $tupleassign2[1];
						self['grid']['setHTML'](nrow, ncol, $p['str'](item));
						cf['setWidth'](nrow, ncol, '200px');
					}
				}
				cf = self['header']['getCellFormatter']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sortbuttons', $p['list']([])) : $p['setattr'](self, 'sortbuttons', $p['list']([])); 
				$iter3_iter = $p['range'](cols);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					ncol = $iter3_nextval;
					sb = $m['Button']($p['sprintf']('sort col %d', ncol));
					sb['addClickListener'](self);
					self['header']['setWidget']($constant_int_0, ncol, sb);
					cf['setWidth']($constant_int_0, ncol, '200px');
					self['sortbuttons']['append'](sb);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['redraw'] = $method;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '46a9be703404320fde1481684d7265b0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,b,$iter4_nextval,$iter4_idx,ncol,$iter4_type,$iter4_array,$iter4_iter;
				$iter4_iter = $p['enumerate']($p['getattr'](self, 'sortbuttons'));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter4_nextval, 2, null);
					ncol = $tupleassign3[0];
					b = $tupleassign3[1];
					if ((($bool2=$p['op_eq'](sender, b)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
							false :
							(typeof $bool2=='object'?
								(typeof $bool2['__nonzero__']=='function'?
									$bool2['__nonzero__']() :
									(typeof $bool2['__len__']=='function'?
										($bool2['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sortcol', ncol) : $p['setattr'](self, 'sortcol', ncol); 
						self['redraw']();
					}
				}
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onClick'] = $method;
			var $bases = new Array($m['DockPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OddGridWidget', $p['tuple']($bases), $data);
		})();
		$m['data'] = $p['list']([$p['list'](['hello', 'fred', $constant_int_52]), $p['list'](['bye', 'joe', $constant_int_98]), $p['list'](['greetings', 'alien', $constant_int_0]), $p['list'](['sayonara', 'jun', $constant_int_1]), $p['list'](['gutentaag', 'volker', $constant_int_2]), $p['list'](['bonjour', 'francois', $constant_int_5]), $p['list'](['au reservoir', 'fabrice', $constant_int_8]), $p['list'](['go away', 'mary', $constant_int_73])]);
		if ((($bool3=$p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['pyjd']['setup']('public/SortedGridThing.html');
			$m['ogw'] = $pyjs_kwargs_call(null, $m['OddGridWidget'], null, null, [{'Width':'600px', 'Height':'200px', 'StyleName':'ogw'}]);
			$m['ogw']['setData']($m['data']);
			$m['dp'] = $pyjs_kwargs_call(null, $m['DisclosurePanel'], null, null, [{'Width':'602px'}, 'Click to disclose / hide', true]);
			$m['dp']['add']($m['ogw']);
			$m['RootPanel']()['add']($m['dp']);
			$m['pyjd']['run']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end SortedGridThing */


/* end module: SortedGridThing */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.DisclosurePanel.DisclosurePanel', 'pyjamas.ui.DisclosurePanel']
*/
