/* start module: GChartExample03 */
$pyjs['loaded_modules']['GChartExample03'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GChartExample03']['__was_initialized__']) return $pyjs['loaded_modules']['GChartExample03'];
	var $m = $pyjs['loaded_modules']['GChartExample03'];
	$m['__repr__'] = function() { return '<module: GChartExample03>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample03';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_15 = new $p['int'](15);
		$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
		$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
		$m['Y_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y_AXIS', null, null, false);
		$m['Y2_AXIS'] = $p['___import___']('pyjamas.chart.GChartConsts.Y2_AXIS', null, null, false);
		$m['GChartExample03'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'GChartExample03';
			$cls_definition['__md5__'] = 'bd005480fd3aab52d0534b0ef9b47ee2';
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
					if (self.prototype['__md5__'] !== 'bd005480fd3aab52d0534b0ef9b47ee2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_array,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,do_axis2,$iter1_iter,$bool2,$iter2_idx,$bool1,$iter1_array,$iter2_type,$mul4,$mul3,$mul2,$mul1,$iter1_idx;
				$m['GChart']['__init__'](self);
				do_axis2 = true;
				self['setChartTitle']('<h2>10x and x<sup>2</sup></h2>');
				self['setChartSize']($constant_int_300, $constant_int_300);
				self['addCurve']();
				self['getCurve']()['setLegendLabel']('<i>10x</i>');
				self['getCurve']()['setYAxis']($m['Y_AXIS']);
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_SOUTH'));
				self['getCurve']()['getSymbol']()['setBackgroundColor']('#DDF');
				self['getCurve']()['getSymbol']()['setBorderColor']('red');
				self['getCurve']()['getSymbol']()['setBorderWidth']($constant_int_1);
				self['getCurve']()['getSymbol']()['setModelWidth'](0.5);
				$iter1_iter = $p['range']($constant_int_10);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					self['getCurve']()['addPoint'](i, (typeof ($mul1=i)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				}
				if ((($bool1=do_axis2) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['addCurve']();
					self['getCurve']()['setLegendLabel']('<i>x<sup>2</sup></i>');
					self['getCurve']()['setYAxis']($m['Y2_AXIS']);
					self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_CENTER'));
					self['getCurve']()['getSymbol']()['setWidth']($constant_int_5);
					self['getCurve']()['getSymbol']()['setHeight']($constant_int_5);
					self['getCurve']()['getSymbol']()['setBorderWidth']($constant_int_0);
					self['getCurve']()['getSymbol']()['setBackgroundColor']('navy');
					self['getCurve']()['getSymbol']()['setFillThickness']($constant_int_2);
					self['getCurve']()['getSymbol']()['setFillSpacing']($constant_int_5);
					$iter2_iter = $p['range'](self['getCurve']($constant_int_0)['getNPoints']());
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						self['getCurve']()['addPoint'](i, (typeof ($mul3=i)==typeof ($mul4=i) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
					}
				}
				self['getXAxis']()['setAxisLabel']('<i>x</i>');
				self['getXAxis']()['setHasGridlines'](true);
				self['getXAxis']()['setTickThickness']($constant_int_0);
				self['getXAxis']()['setTickLength']($constant_int_3);
				self['getYAxis']()['setAxisLabel']('<i>10x</i>');
				self['getYAxis']()['setAxisMax']($constant_int_100);
				self['getYAxis']()['setAxisMin']($constant_int_0);
				self['getYAxis']()['setTickLabelFormat']('#.#');
				self['getYAxis']()['setTickCount']($constant_int_11);
				if ((($bool2=do_axis2) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['getY2Axis']()['setAxisLabel']('<i>x<sup>2</sup></i>');
					self['getY2Axis']()['setHasGridlines'](true);
					self['getY2Axis']()['setTickLength']($constant_int_15);
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($m['GChart']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GChartExample03', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GChartExample03 */


/* end module: GChartExample03 */


/*
PYJS_DEPS: ['pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.SymbolType', 'pyjamas.chart.GChartConsts.Y_AXIS', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.GChartConsts.Y2_AXIS']
*/
