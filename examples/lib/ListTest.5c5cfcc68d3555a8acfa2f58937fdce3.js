/* start module: ListTest */
$pyjs['loaded_modules']['ListTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ListTest']['__was_initialized__']) return $pyjs['loaded_modules']['ListTest'];
	var $m = $pyjs['loaded_modules']['ListTest'];
	$m['__repr__'] = function() { return '<module: ListTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ListTest';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_200000 = new $p['int'](200000);
		var $constant_int_333 = new $p['int'](333);
		var $constant_int_1000 = new $p['int'](1000);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
		$m['sys'] = $p['___import___']('sys', null);
		$m['LetterNode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ListTest';
			$cls_definition['__md5__'] = '1a6bdc14b92807af7234152138312805';
			$method = $pyjs__bind_method2('__init__', function(letter, childnodes) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					letter = arguments[1];
					childnodes = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1a6bdc14b92807af7234152138312805') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof childnodes == 'undefined') childnodes=arguments['callee']['__args__'][4][1];
				var $bool1;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('letter', letter) : $p['setattr'](self, 'letter', letter); 
				if ((($bool1=$p['op_is'](childnodes, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					childnodes = $p['list']([]);
				}
				$p['list']['__init__'](self, childnodes);
				return null;
			}
	, 1, [null,null,['self'],['letter'],['childnodes', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('__cmp__', function(l) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					l = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1a6bdc14b92807af7234152138312805') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				if ((($bool2=$p['isinstance'](l, $m['LetterNode'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					return $p['cmp']($p['getattr'](self, 'letter'), $p['getattr'](l, 'letter'));
				}
				return $p['cmp']($p['getattr'](self, 'letter'), l);
			}
	, 1, [null,null,['self'],['l']]);
			$cls_definition['__cmp__'] = $method;
			var $bases = new Array($p['list']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LetterNode', $p['tuple']($bases), $data);
		})();
		$m['words'] = 'golf fred frederick fried'['$$split'](' ');
		$m['get_test_letters'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,ln,res,l,idx,$iter1_iter,p,$iter2_idx,$pyjs_try_err,$iter1_array,w,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
			res = $p['list']([]);
			$iter1_iter = $m['words'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				w = $iter1_nextval;
				p = res;
				$iter2_iter = w;
				if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter['__iter__']();
					$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					l = $iter2_nextval;
					try {
						idx = p['index'](l);
						p = (typeof ($1=p)['__array'] != 'undefined'?
							((typeof $1['__array'][$2=idx]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__'](idx));
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							ln = $m['LetterNode'](l);
							p['append'](ln);
							p = ln;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				p['append']($m['LetterNode']('.'));
			}
			return res;
		};
		$m['get_test_letters']['__name__'] = 'get_test_letters';

		$m['get_test_letters']['__bind_type__'] = 0;
		$m['get_test_letters']['__args__'] = [null,null];
		$m['ListTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ListTest';
			$cls_definition['__md5__'] = '2571893d70b3becf44a13175b850cba9';
			$method = $pyjs__bind_method2('testSliceGet', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$10,$11,$12,$13,l,value,$8,$9,$6,$7,$4,$5,$3;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				self['assertTrue']($p['op_is']((typeof ($3=value)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))), $constant_int_4));
				self['assertTrue']($p['op_is']((typeof ($5=value)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=$constant_int_1]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']($constant_int_1)), $constant_int_1));
				self['assertTrue']($p['op_is']((typeof ($7=value)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=$constant_int_4]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']($constant_int_4)), $constant_int_4));
				self['assertTrue']($p['op_is']((typeof ($9=value)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=(typeof ($usub2=$constant_int_3)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']((typeof ($usub2=$constant_int_3)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))), $constant_int_2));
				l = $p['list']([$constant_int_1, $constant_int_2]);
				self['assertEqual']((typeof ($11=l)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=true]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](true)), $constant_int_2);
				self['assertEqual']((typeof ($13=l)['__array'] != 'undefined'?
					((typeof $13['__array'][$14=false]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](false)), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceGet'] = $method;
			$method = $pyjs__bind_method2('testSliceRange', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $32,$33,$30,$29,$28,$21,$20,$22,$25,$24,$27,$26,$15,$16,$17,$34,$18,$19,value,$31,$len6,$len7,$len4,$len5,$len2,$len3,$len1,$23,$len8;
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				self['assertTrue']($p['op_is']((typeof ($15=$p['__getslice'](value, $constant_int_1, $constant_int_3))['__array'] != 'undefined'?
					((typeof $15['__array'][$16=$constant_int_0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']($constant_int_0)), $constant_int_1));
				self['assertTrue']($p['op_is']((typeof ($17=$p['__getslice'](value, $constant_int_1, $constant_int_3))['__array'] != 'undefined'?
					((typeof $17['__array'][$18=$constant_int_1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']($constant_int_1)), $constant_int_2));
				self['assertTrue']($p['op_is']((($len1=$p['__getslice'](value, $constant_int_1, $constant_int_2)) === null?$constant_int_0:
					(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
								$p['len']($len1))))), $constant_int_1));
				self['assertTrue']($p['op_is']((($len2=$p['__getslice'](value, $constant_int_1, $constant_int_3)) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))), $constant_int_2));
				self['assertTrue']($p['op_is']((typeof ($19=$p['__getslice'](value, 0, $constant_int_2))['__array'] != 'undefined'?
					((typeof $19['__array'][$20=$constant_int_0]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']($constant_int_0)), $constant_int_0));
				self['assertTrue']($p['op_is']((typeof ($21=$p['__getslice'](value, 0, $constant_int_2))['__array'] != 'undefined'?
					((typeof $21['__array'][$22=$constant_int_1]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']($constant_int_1)), $constant_int_1));
				self['assertTrue']($p['op_is']((($len3=$p['__getslice'](value, 0, $constant_int_2)) === null?$constant_int_0:
					(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
								$p['len']($len3))))), $constant_int_2));
				self['assertTrue']($p['op_is']((($len4=$p['__getslice'](value, 0, $constant_int_1)) === null?$constant_int_0:
					(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
						(typeof $len4['__len__'] == 'function'?$len4['__len__']():
							(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
								$p['len']($len4))))), $constant_int_1));
				self['assertTrue']($p['op_is']((typeof ($23=$p['__getslice'](value, 0, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=$constant_int_0]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']($constant_int_0)), $constant_int_0));
				self['assertTrue']($p['op_is']((typeof ($25=$p['__getslice'](value, 0, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))))['__array'] != 'undefined'?
					((typeof $25['__array'][$26=$constant_int_3]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']($constant_int_3)), $constant_int_3));
				self['assertTrue']($p['op_is']((($len5=$p['__getslice'](value, 0, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)))) === null?$constant_int_0:
					(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
								$p['len']($len5))))), $constant_int_4));
				self['assertTrue']($p['op_is']((typeof ($27=$p['__getslice'](value, 0, null))['__array'] != 'undefined'?
					((typeof $27['__array'][$28=$constant_int_3]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']($constant_int_3)), $constant_int_3));
				self['assertTrue']($p['op_is']((($len6=$p['__getslice'](value, 0, null)) === null?$constant_int_0:
					(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
						(typeof $len6['__len__'] == 'function'?$len6['__len__']():
							(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
								$p['len']($len6))))), $constant_int_5));
				self['assertTrue']($p['op_is']((typeof ($29=$p['__getslice'](value, $constant_int_0, null))['__array'] != 'undefined'?
					((typeof $29['__array'][$30=$constant_int_3]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']($constant_int_3)), $constant_int_3));
				self['assertTrue']($p['op_is']((typeof ($31=$p['__getslice'](value, $constant_int_1, null))['__array'] != 'undefined'?
					((typeof $31['__array'][$32=$constant_int_0]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']($constant_int_0)), $constant_int_1));
				self['assertTrue']($p['op_is']((($len7=$p['__getslice'](value, $constant_int_1, null)) === null?$constant_int_0:
					(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
								$p['len']($len7))))), $constant_int_4));
				self['assertTrue']($p['op_is']((typeof ($33=$p['__getslice'](value, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)), null))['__array'] != 'undefined'?
					((typeof $33['__array'][$34=$constant_int_0]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__']($constant_int_0)), $constant_int_4));
				self['assertTrue']($p['op_is']((($len8=$p['__getslice'](value, (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7)), $constant_int_3)) === null?$constant_int_0:
					(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
								$p['len']($len8))))), $constant_int_0));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceRange'] = $method;
			$method = $pyjs__bind_method2('testListAdd', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var added,$add2,$add3,$add1,l2,$add4,l1;
				l1 = $p['list']([$constant_int_1, $constant_int_2]);
				l2 = $p['list']([$constant_int_3, $constant_int_4]);
				added = (typeof ($add1=l1)==typeof ($add2=l2) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self['assertTrue']($p['op_eq'](added, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $p['sprintf']('l1 + l2: actual result %s', $p['repr'](added)));
				l1 = (typeof ($add3=l1)==typeof ($add4=l2) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['assertTrue']($p['op_eq'](l1, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), $p['sprintf']('l1 += l2: result %s', $p['repr'](l1)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListAdd'] = $method;
			$method = $pyjs__bind_method2('testSliceSet', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value;
				value = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$p['__setslice'](value, $constant_int_1, $constant_int_2, $p['list']([$constant_int_11, $constant_int_12]));
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_1, $constant_int_11, $constant_int_12, $constant_int_3])), $p['sprintf']('%s == [1, 11, 12, 3]', value));
				$p['__setslice'](value, $constant_int_3, null, $p['list']([$constant_int_21, $constant_int_22, $constant_int_23]));
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_1, $constant_int_11, $constant_int_12, $constant_int_21, $constant_int_22, $constant_int_23])), $p['sprintf']('%s == [1, 11, 12, 21, 22, 23]', value));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSliceSet'] = $method;
			$method = $pyjs__bind_method2('testMultipleSliceSet', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l2,l1;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l2 = $p['list']([$constant_int_4, $constant_int_5, $constant_int_6]);
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['list']([$constant_int_7, $constant_int_8, $constant_int_9]), $p['list']([$constant_int_10, $constant_int_11, $constant_int_12])]), 2, null);
				$p['__setslice'](l1, 0, null, $tupleassign1[0]);
				$p['__setslice'](l2, 0, null, $tupleassign1[1]);
				self['assertTrue']($p['op_eq'](l1, $p['list']([$constant_int_7, $constant_int_8, $constant_int_9])), $p['sprintf']('%s == [7, 8, 9]', l1));
				self['assertTrue']($p['op_eq'](l2, $p['list']([$constant_int_10, $constant_int_11, $constant_int_12])), $p['sprintf']('%s == [10, 11, 12]', l2));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultipleSliceSet'] = $method;
			$method = $pyjs__bind_method2('testDelete', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len10,e,$38,$39,$36,$37,$35,value,$pyjs_try_err,$42,$41,$40,$len9;
				self['assertTrue']($p['op_eq']((typeof delete_value == "undefined"?$m['delete_value']:delete_value), $p['list']([$constant_int_1, $constant_int_2, $constant_int_5])), $p['sprintf']('%s == [1, 2, 5]', $p['tuple']([(typeof delete_value == "undefined"?$m['delete_value']:delete_value)])));
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				value['__delitem__']($constant_int_4);
				self['assertTrue']($p['op_is']((($len9=value) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))), $constant_int_4));
				self['assertTrue']($p['op_is']((typeof ($35=value)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=$constant_int_3]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__']($constant_int_3)), $constant_int_3));
				value['__delitem__']((typeof ($usub8=$constant_int_1)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
				self['assertTrue']($p['op_is']((($len10=value) === null?$constant_int_0:
					(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
								$p['len']($len10))))), $constant_int_3));
				self['assertTrue']($p['op_is']((typeof ($37=value)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=$constant_int_2]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__']($constant_int_2)), $constant_int_2));
				try {
					value['__delitem__']($constant_int_3);
					self['fail']("Failed to raise error on 'del value[3]'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($39=e)['__array'] != 'undefined'?
							((typeof $39['__array'][$40=$constant_int_0]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__']($constant_int_0)), 'list assignment index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					value['__delitem__']((typeof ($usub9=$constant_int_4)=='number'?
						-$usub9:
						$p['op_usub']($usub9)));
					self['fail']("Failed to raise error on 'del value[-4]'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						e = $pyjs_try_err;
						self['assertEqual']((typeof ($41=e)['__array'] != 'undefined'?
							((typeof $41['__array'][$42=$constant_int_0]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__']($constant_int_0)), 'list assignment index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				value = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$p['__delslice'](value, $constant_int_1, $constant_int_3)
				self['assertTrue']($p['op_eq'](value, $p['list']([$constant_int_0, $constant_int_3, $constant_int_4])), $p['sprintf']('%s == [0, 3, 4]', value));
				$p['__delslice'](value, 0, null)
				self['assertTrue']($p['op_eq'](value, $p['list']([])), $p['sprintf']('%s = []', value));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDelete'] = $method;
			$method = $pyjs__bind_method2('testSortNoKwArgs', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $62,toLower,$49,$48,$69,$68,$43,$64,$67,$66,$47,$46,$45,$44,$65,$72,$73,$70,$71,$63,$74,$61,$60,$58,$59,l4,l2,l3,l1,$50,$51,$52,$53,$54,$55,$56,$57;
				l1 = $p['list'](['c', 'd', 'a', 'b']);
				l1['sort']();
				self['assertTrue']($p['op_eq']((typeof ($43=l1)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=$constant_int_0]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__']($constant_int_0)), 'a'));
				self['assertTrue']($p['op_eq']((typeof ($45=l1)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_1]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_1)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($47=l1)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=$constant_int_2]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__']($constant_int_2)), 'c'));
				self['assertTrue']($p['op_eq']((typeof ($49=l1)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=$constant_int_3]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__']($constant_int_3)), 'd'));
				l2 = $p['list'](['C', 'd', 'A', 'b']);
				toLower = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x['lower']();
				};
				toLower['__name__'] = 'toLower';

				toLower['__bind_type__'] = 0;
				toLower['__args__'] = [null,null,['x']];
				l2['sort'](null, toLower);
				self['assertTrue']($p['op_eq']((typeof ($51=l2)['__array'] != 'undefined'?
					((typeof $51['__array'][$52=$constant_int_0]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__']($constant_int_0)), 'A'));
				self['assertTrue']($p['op_eq']((typeof ($53=l2)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=$constant_int_1]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__']($constant_int_1)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($55=l2)['__array'] != 'undefined'?
					((typeof $55['__array'][$56=$constant_int_2]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__']($constant_int_2)), 'C'));
				self['assertTrue']($p['op_eq']((typeof ($57=l2)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=$constant_int_3]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__']($constant_int_3)), 'd'));
				l3 = $p['list'](['C', 'd', 'A', 'b']);
				l3['sort'](null, toLower, true);
				self['assertTrue']($p['op_eq']((typeof ($59=l3)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=$constant_int_0]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__']($constant_int_0)), 'd'));
				self['assertTrue']($p['op_eq']((typeof ($61=l3)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=$constant_int_1]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__']($constant_int_1)), 'C'));
				self['assertTrue']($p['op_eq']((typeof ($63=l3)['__array'] != 'undefined'?
					((typeof $63['__array'][$64=$constant_int_2]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__']($constant_int_2)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($65=l3)['__array'] != 'undefined'?
					((typeof $65['__array'][$66=$constant_int_3]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__']($constant_int_3)), 'A'));
				l4 = $p['list'](['c', 'd', 'a', 'b']);
				l4['sort'](null, null, true);
				self['assertTrue']($p['op_eq']((typeof ($67=l4)['__array'] != 'undefined'?
					((typeof $67['__array'][$68=$constant_int_0]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']($constant_int_0)), 'd'));
				self['assertTrue']($p['op_eq']((typeof ($69=l4)['__array'] != 'undefined'?
					((typeof $69['__array'][$70=$constant_int_1]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__']($constant_int_1)), 'c'));
				self['assertTrue']($p['op_eq']((typeof ($71=l4)['__array'] != 'undefined'?
					((typeof $71['__array'][$72=$constant_int_2]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__']($constant_int_2)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($73=l4)['__array'] != 'undefined'?
					((typeof $73['__array'][$74=$constant_int_3]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__']($constant_int_3)), 'a'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSortNoKwArgs'] = $method;
			$method = $pyjs__bind_method2('testPop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$len11,c,b,e,d,err,$75,$len14,$79,$len12,value,$80,$pyjs_try_err,$76,$len13,x,$78,$77;
				a = $p['list'](['a']);
				b = $p['list'](['b']);
				c = $p['list'](['c']);
				d = $p['list'](['d']);
				e = $p['list'](['e']);
				value = $p['list']([a, b, c, d, e]);
				try {
					x = value['pop']($constant_int_5);
					self['fail']("Failed to raise error on 'value.pop(5)'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						self['assertEqual']((typeof ($75=err)['__array'] != 'undefined'?
							((typeof $75['__array'][$76=$constant_int_0]) != 'undefined'?$75['__array'][$76]:
								$75['__getitem__']($76)):
								$75['__getitem__']($constant_int_0)), 'pop index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					x = value['pop']((typeof ($usub10=$constant_int_6)=='number'?
						-$usub10:
						$p['op_usub']($usub10)));
					self['fail']("Failed to raise error on 'value.pop(-6)'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						self['assertEqual']((typeof ($77=err)['__array'] != 'undefined'?
							((typeof $77['__array'][$78=$constant_int_0]) != 'undefined'?$77['__array'][$78]:
								$77['__getitem__']($78)):
								$77['__getitem__']($constant_int_0)), 'pop index out of range');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				x = value['pop']($constant_int_4);
				self['assertTrue']($p['op_eq'](x, e), 'x==e');
				self['assertTrue']($p['op_is']((($len11=value) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))), $constant_int_4), 'len(value) is 4');
				x = value['pop']((typeof ($usub11=$constant_int_1)=='number'?
					-$usub11:
					$p['op_usub']($usub11)));
				self['assertTrue']($p['op_eq'](x, d), 'x==d');
				self['assertTrue']($p['op_is']((($len12=value) === null?$constant_int_0:
					(typeof $len12['__array'] != 'undefined' ? new $p['int']($len12['__array']['length']):
						(typeof $len12['__len__'] == 'function'?$len12['__len__']():
							(typeof $len12['length'] != 'undefined'? new $p['int']($len12['length']):
								$p['len']($len12))))), $constant_int_3), 'len(value) is 3');
				x = value['pop']();
				self['assertTrue']($p['op_eq'](x, c), 'x==c');
				self['assertTrue']($p['op_is']((($len13=value) === null?$constant_int_0:
					(typeof $len13['__array'] != 'undefined' ? new $p['int']($len13['__array']['length']):
						(typeof $len13['__len__'] == 'function'?$len13['__len__']():
							(typeof $len13['length'] != 'undefined'? new $p['int']($len13['length']):
								$p['len']($len13))))), $constant_int_2), 'len(value) is 2');
				x = value['pop']($constant_int_0);
				self['assertTrue']($p['op_eq'](x, a), 'x==a');
				self['assertTrue']($p['op_is']((($len14=value) === null?$constant_int_0:
					(typeof $len14['__array'] != 'undefined' ? new $p['int']($len14['__array']['length']):
						(typeof $len14['__len__'] == 'function'?$len14['__len__']():
							(typeof $len14['length'] != 'undefined'? new $p['int']($len14['length']):
								$p['len']($len14))))), $constant_int_1), 'len(value) is 1');
				x = value['pop']();
				try {
					x = value['pop']();
					self['fail']("Failed to raise error on 'value.pop()'");
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						err = $pyjs_try_err;
						self['assertEqual']((typeof ($79=err)['__array'] != 'undefined'?
							((typeof $79['__array'][$80=$constant_int_0]) != 'undefined'?$79['__array'][$80]:
								$79['__getitem__']($80)):
								$79['__getitem__']($constant_int_0)), 'pop from empty list');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPop'] = $method;
			$method = $pyjs__bind_method2('testSort', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $98,$99,$110,$111,$94,$95,$96,$97,$90,$91,$92,$93,$112,toLower,$106,$107,$109,$108,$101,$100,$103,$102,$105,$104,$89,$88,$87,$86,$85,$84,$83,$82,$81,l4,l2,l3,l1;
				l1 = $p['list'](['c', 'd', 'a', 'b']);
				l1['sort']();
				self['assertTrue']($p['op_eq']((typeof ($81=l1)['__array'] != 'undefined'?
					((typeof $81['__array'][$82=$constant_int_0]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__']($constant_int_0)), 'a'));
				self['assertTrue']($p['op_eq']((typeof ($83=l1)['__array'] != 'undefined'?
					((typeof $83['__array'][$84=$constant_int_1]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__']($constant_int_1)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($85=l1)['__array'] != 'undefined'?
					((typeof $85['__array'][$86=$constant_int_2]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__']($constant_int_2)), 'c'));
				self['assertTrue']($p['op_eq']((typeof ($87=l1)['__array'] != 'undefined'?
					((typeof $87['__array'][$88=$constant_int_3]) != 'undefined'?$87['__array'][$88]:
						$87['__getitem__']($88)):
						$87['__getitem__']($constant_int_3)), 'd'));
				l2 = $p['list'](['C', 'd', 'A', 'b']);
				toLower = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x['lower']();
				};
				toLower['__name__'] = 'toLower';

				toLower['__bind_type__'] = 0;
				toLower['__args__'] = [null,null,['x']];
				$pyjs_kwargs_call(l2, 'sort', null, null, [{'key':toLower}]);
				self['assertTrue']($p['op_eq']((typeof ($89=l2)['__array'] != 'undefined'?
					((typeof $89['__array'][$90=$constant_int_0]) != 'undefined'?$89['__array'][$90]:
						$89['__getitem__']($90)):
						$89['__getitem__']($constant_int_0)), 'A'));
				self['assertTrue']($p['op_eq']((typeof ($91=l2)['__array'] != 'undefined'?
					((typeof $91['__array'][$92=$constant_int_1]) != 'undefined'?$91['__array'][$92]:
						$91['__getitem__']($92)):
						$91['__getitem__']($constant_int_1)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($93=l2)['__array'] != 'undefined'?
					((typeof $93['__array'][$94=$constant_int_2]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__']($constant_int_2)), 'C'));
				self['assertTrue']($p['op_eq']((typeof ($95=l2)['__array'] != 'undefined'?
					((typeof $95['__array'][$96=$constant_int_3]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__']($constant_int_3)), 'd'));
				l3 = $p['list'](['C', 'd', 'A', 'b']);
				$pyjs_kwargs_call(l3, 'sort', null, null, [{'key':toLower, 'reverse':true}]);
				self['assertTrue']($p['op_eq']((typeof ($97=l3)['__array'] != 'undefined'?
					((typeof $97['__array'][$98=$constant_int_0]) != 'undefined'?$97['__array'][$98]:
						$97['__getitem__']($98)):
						$97['__getitem__']($constant_int_0)), 'd'));
				self['assertTrue']($p['op_eq']((typeof ($99=l3)['__array'] != 'undefined'?
					((typeof $99['__array'][$100=$constant_int_1]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__']($constant_int_1)), 'C'));
				self['assertTrue']($p['op_eq']((typeof ($101=l3)['__array'] != 'undefined'?
					((typeof $101['__array'][$102=$constant_int_2]) != 'undefined'?$101['__array'][$102]:
						$101['__getitem__']($102)):
						$101['__getitem__']($constant_int_2)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($103=l3)['__array'] != 'undefined'?
					((typeof $103['__array'][$104=$constant_int_3]) != 'undefined'?$103['__array'][$104]:
						$103['__getitem__']($104)):
						$103['__getitem__']($constant_int_3)), 'A'));
				l4 = $p['list'](['c', 'd', 'a', 'b']);
				$pyjs_kwargs_call(l4, 'sort', null, null, [{'reverse':true}]);
				self['assertTrue']($p['op_eq']((typeof ($105=l4)['__array'] != 'undefined'?
					((typeof $105['__array'][$106=$constant_int_0]) != 'undefined'?$105['__array'][$106]:
						$105['__getitem__']($106)):
						$105['__getitem__']($constant_int_0)), 'd'));
				self['assertTrue']($p['op_eq']((typeof ($107=l4)['__array'] != 'undefined'?
					((typeof $107['__array'][$108=$constant_int_1]) != 'undefined'?$107['__array'][$108]:
						$107['__getitem__']($108)):
						$107['__getitem__']($constant_int_1)), 'c'));
				self['assertTrue']($p['op_eq']((typeof ($109=l4)['__array'] != 'undefined'?
					((typeof $109['__array'][$110=$constant_int_2]) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__']($constant_int_2)), 'b'));
				self['assertTrue']($p['op_eq']((typeof ($111=l4)['__array'] != 'undefined'?
					((typeof $111['__array'][$112=$constant_int_3]) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__']($constant_int_3)), 'a'));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSort'] = $method;
			$method = $pyjs__bind_method2('testCmp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp8,t1,l4,l2,l3,b2,l1,b1;
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l2 = $p['list']([$constant_int_1, $constant_int_2]);
				l3 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l4 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_4]);
				t1 = $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]);
				self['assertEquals']($p['cmp']($p['list']([]), $p['list']([])), $constant_int_0, 'Empty lists are the same');
				self['assertTrue']($p['op_eq']($p['list']([]), $p['list']([])));
				self['assertEquals'](!$p['op_eq']($p['list']([]), $p['list']([])), false);
				self['assertTrue']($p['op_eq']($p['cmp'](l1, l2), $constant_int_1));
				self['assertTrue']($p['op_eq']($p['cmp'](l2, l1), (typeof ($usub12=$constant_int_1)=='number'?
					-$usub12:
					$p['op_usub']($usub12))));
				self['assertTrue']($p['op_eq']($p['cmp'](l3, l4), (typeof ($usub13=$constant_int_1)=='number'?
					-$usub13:
					$p['op_usub']($usub13))));
				self['assertTrue']($p['op_eq']($p['cmp'](l4, l3), $constant_int_1));
				self['assertTrue']($p['op_eq'](l1, l3), 'l1 == l3');
				self['assertTrue'](((($cmp1=l1)===($cmp2=l2)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1), 'l1 > l2');
				self['assertTrue'](((((($cmp3=l1)===($cmp4=l2)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))))|1) == 1), 'l1 >= l2');
				self['assertTrue'](((($cmp5=l2)===($cmp6=l1)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1), 'l2 < l1');
				self['assertTrue'](((($cmp7=l2)===($cmp8=l1)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1), 'l2 <= l1');
				b1 = (typeof B == "undefined"?$m['B']:B)();
				b2 = (typeof B == "undefined"?$m['B']:B)();
				l1 = $p['list']([b1, b2]);
				l2 = $p['list']([b2, b1]);
				self['assertFalse']($p['op_eq'](l1, l2), 'TODO: cmp() plain objects fails');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCmp'] = $method;
			$method = $pyjs__bind_method2('testCmpListTuple', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l1,t1;
				t1 = $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l1 = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				self['assertFalse']($p['op_eq'](l1, t1));
				self['assertTrue']($p['op_eq']($p['cmp'](l1, t1), (typeof ($usub14=$constant_int_1)=='number'?
					-$usub14:
					$p['op_usub']($usub14))));
				self['assertTrue']($p['op_eq']($p['cmp'](t1, l1), $constant_int_1));
				self['assertTrue'](!$p['op_eq'](l1, t1), 'l1 != t1');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testCmpListTuple'] = $method;
			$method = $pyjs__bind_method2('testSortCmp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,$116,$114,$115,$113,$117,$118,l2,l1;
				a = (typeof A == "undefined"?$m['A']:A)();
				l1 = $p['list']([a, $constant_int_1]);
				l1['sort']();
				l2 = $p['list']([$constant_int_1, a]);
				l2['sort']();
				self['assertTrue']($p['op_is']((typeof ($113=l1)['__array'] != 'undefined'?
					((typeof $113['__array'][$114=$constant_int_0]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__']($constant_int_0)), a));
				self['assertTrue']($p['op_is']((typeof ($115=l2)['__array'] != 'undefined'?
					((typeof $115['__array'][$116=$constant_int_0]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__']($constant_int_0)), a));
				self['assertFalse']($p['op_eq']((typeof ($117=l1)['__array'] != 'undefined'?
					((typeof $117['__array'][$118=$constant_int_0]) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__']($constant_int_0)), a));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSortCmp'] = $method;
			$method = $pyjs__bind_method2('testReverse', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l,$119,$122,$121,$120;
				l = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				l['reverse']();
				self['assertEqual']((typeof ($119=l)['__array'] != 'undefined'?
					((typeof $119['__array'][$120=$constant_int_0]) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__']($constant_int_0)), $constant_int_3);
				self['assertEqual']((typeof ($121=l)['__array'] != 'undefined'?
					((typeof $121['__array'][$122=$constant_int_2]) != 'undefined'?$121['__array'][$122]:
						$121['__getitem__']($122)):
						$121['__getitem__']($constant_int_2)), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testReverse'] = $method;
			$method = $pyjs__bind_method2('testConstructor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $130,$131,$132,$len20,$129,$128,$123,$127,$126,$125,$124,$len15,$len16,$len17,$len18,$len19,l6,l4,l5,l2,l3,l1;
				l1 = $p['list']();
				self['assertEqual']((($len15=l1) === null?$constant_int_0:
					(typeof $len15['__array'] != 'undefined' ? new $p['int']($len15['__array']['length']):
						(typeof $len15['__len__'] == 'function'?$len15['__len__']():
							(typeof $len15['length'] != 'undefined'? new $p['int']($len15['length']):
								$p['len']($len15))))), $constant_int_0);
				l2 = $p['list']();
				self['assertEqual']((($len16=l2) === null?$constant_int_0:
					(typeof $len16['__array'] != 'undefined' ? new $p['int']($len16['__array']['length']):
						(typeof $len16['__len__'] == 'function'?$len16['__len__']():
							(typeof $len16['length'] != 'undefined'? new $p['int']($len16['length']):
								$p['len']($len16))))), $constant_int_0);
				l3 = $p['list']($p['list']([]));
				self['assertEqual']((($len17=l3) === null?$constant_int_0:
					(typeof $len17['__array'] != 'undefined' ? new $p['int']($len17['__array']['length']):
						(typeof $len17['__len__'] == 'function'?$len17['__len__']():
							(typeof $len17['length'] != 'undefined'? new $p['int']($len17['length']):
								$p['len']($len17))))), $constant_int_0);
				l4 = $p['list']($p['list']([$constant_int_10]));
				self['assertEqual']((($len18=l4) === null?$constant_int_0:
					(typeof $len18['__array'] != 'undefined' ? new $p['int']($len18['__array']['length']):
						(typeof $len18['__len__'] == 'function'?$len18['__len__']():
							(typeof $len18['length'] != 'undefined'? new $p['int']($len18['length']):
								$p['len']($len18))))), $constant_int_1);
				self['assertEqual']((typeof ($123=l4)['__array'] != 'undefined'?
					((typeof $123['__array'][$124=$constant_int_0]) != 'undefined'?$123['__array'][$124]:
						$123['__getitem__']($124)):
						$123['__getitem__']($constant_int_0)), $constant_int_10);
				l5 = $p['list']($p['range']($constant_int_10, $constant_int_40, $constant_int_10));
				self['assertEqual']((($len19=l5) === null?$constant_int_0:
					(typeof $len19['__array'] != 'undefined' ? new $p['int']($len19['__array']['length']):
						(typeof $len19['__len__'] == 'function'?$len19['__len__']():
							(typeof $len19['length'] != 'undefined'? new $p['int']($len19['length']):
								$p['len']($len19))))), $constant_int_3);
				self['assertEqual']((typeof ($125=l5)['__array'] != 'undefined'?
					((typeof $125['__array'][$126=$constant_int_0]) != 'undefined'?$125['__array'][$126]:
						$125['__getitem__']($126)):
						$125['__getitem__']($constant_int_0)), $constant_int_10);
				self['assertEqual']((typeof ($127=l5)['__array'] != 'undefined'?
					((typeof $127['__array'][$128=$constant_int_1]) != 'undefined'?$127['__array'][$128]:
						$127['__getitem__']($128)):
						$127['__getitem__']($constant_int_1)), $constant_int_20);
				self['assertEqual']((typeof ($129=l5)['__array'] != 'undefined'?
					((typeof $129['__array'][$130=$constant_int_2]) != 'undefined'?$129['__array'][$130]:
						$129['__getitem__']($130)):
						$129['__getitem__']($constant_int_2)), $constant_int_30);
				l6 = $p['list'](l4);
				self['assertEqual']((($len20=l6) === null?$constant_int_0:
					(typeof $len20['__array'] != 'undefined' ? new $p['int']($len20['__array']['length']):
						(typeof $len20['__len__'] == 'function'?$len20['__len__']():
							(typeof $len20['length'] != 'undefined'? new $p['int']($len20['length']):
								$p['len']($len20))))), $constant_int_1);
				self['assertEqual']((typeof ($131=l6)['__array'] != 'undefined'?
					((typeof $131['__array'][$132=$constant_int_0]) != 'undefined'?$131['__array'][$132]:
						$131['__getitem__']($132)):
						$131['__getitem__']($constant_int_0)), $constant_int_10);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testConstructor'] = $method;
			$method = $pyjs__bind_method2('testRangeList', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var list1,list2;
				list1 = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				list2 = $p['range']($constant_int_0, $constant_int_4);
				self['assertTrue']($p['op_eq'](list1, list2));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRangeList'] = $method;
			$method = $pyjs__bind_method2('testExtend', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len24,$len21,$len23,$len22,$141,l,$142,$140,$138,$139,l4,l2,l3,$143,$144,$133,$134,$135,$136,$137;
				l = $p['list']([$constant_int_10, $constant_int_20]);
				l['extend']($p['list']([$constant_int_30, $constant_int_40]));
				self['assertEqual']((($len21=l) === null?$constant_int_0:
					(typeof $len21['__array'] != 'undefined' ? new $p['int']($len21['__array']['length']):
						(typeof $len21['__len__'] == 'function'?$len21['__len__']():
							(typeof $len21['length'] != 'undefined'? new $p['int']($len21['length']):
								$p['len']($len21))))), $constant_int_4);
				self['assertEqual']((typeof ($133=l)['__array'] != 'undefined'?
					((typeof $133['__array'][$134=$constant_int_0]) != 'undefined'?$133['__array'][$134]:
						$133['__getitem__']($134)):
						$133['__getitem__']($constant_int_0)), $constant_int_10);
				self['assertEqual']((typeof ($135=l)['__array'] != 'undefined'?
					((typeof $135['__array'][$136=$constant_int_1]) != 'undefined'?$135['__array'][$136]:
						$135['__getitem__']($136)):
						$135['__getitem__']($constant_int_1)), $constant_int_20);
				self['assertEqual']((typeof ($137=l)['__array'] != 'undefined'?
					((typeof $137['__array'][$138=$constant_int_2]) != 'undefined'?$137['__array'][$138]:
						$137['__getitem__']($138)):
						$137['__getitem__']($constant_int_2)), $constant_int_30);
				self['assertEqual']((typeof ($139=l)['__array'] != 'undefined'?
					((typeof $139['__array'][$140=$constant_int_3]) != 'undefined'?$139['__array'][$140]:
						$139['__getitem__']($140)):
						$139['__getitem__']($constant_int_3)), $constant_int_40);
				l2 = $p['list']([$constant_int_10, $constant_int_20]);
				l2['extend']($p['list']([]));
				self['assertEqual']((($len22=l2) === null?$constant_int_0:
					(typeof $len22['__array'] != 'undefined' ? new $p['int']($len22['__array']['length']):
						(typeof $len22['__len__'] == 'function'?$len22['__len__']():
							(typeof $len22['length'] != 'undefined'? new $p['int']($len22['length']):
								$p['len']($len22))))), $constant_int_2);
				l3 = $p['list']([]);
				l3['extend']($p['list']([$constant_int_10, $constant_int_20]));
				self['assertEqual']((($len23=l3) === null?$constant_int_0:
					(typeof $len23['__array'] != 'undefined' ? new $p['int']($len23['__array']['length']):
						(typeof $len23['__len__'] == 'function'?$len23['__len__']():
							(typeof $len23['length'] != 'undefined'? new $p['int']($len23['length']):
								$p['len']($len23))))), $constant_int_2);
				self['assertEqual']((typeof ($141=l3)['__array'] != 'undefined'?
					((typeof $141['__array'][$142=$constant_int_0]) != 'undefined'?$141['__array'][$142]:
						$141['__getitem__']($142)):
						$141['__getitem__']($constant_int_0)), $constant_int_10);
				self['assertEqual']((typeof ($143=l3)['__array'] != 'undefined'?
					((typeof $143['__array'][$144=$constant_int_1]) != 'undefined'?$143['__array'][$144]:
						$143['__getitem__']($144)):
						$143['__getitem__']($constant_int_1)), $constant_int_20);
				l4 = $p['list']([]);
				l4['extend']($p['list']([]));
				self['assertEqual']((($len24=l4) === null?$constant_int_0:
					(typeof $len24['__array'] != 'undefined' ? new $p['int']($len24['__array']['length']):
						(typeof $len24['__len__'] == 'function'?$len24['__len__']():
							(typeof $len24['length'] != 'undefined'? new $p['int']($len24['length']):
								$p['len']($len24))))), $constant_int_0);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExtend'] = $method;
			$method = $pyjs__bind_method2('testIter2', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$iter4_nextval,$iter3_type,$iter4_idx,item,$add5,$add6,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$add8,$iter4_iter,$iter3_nextval,$add7;
				i = $constant_int_0;
				$iter3_iter = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					item = $iter3_nextval;
					self['assertEqual'](item, i);
					i = (typeof ($add5=i)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				i = $constant_int_0;
				$iter4_iter = $p['__getslice']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), $constant_int_1, (typeof ($usub15=$constant_int_1)=='number'?
					-$usub15:
					$p['op_usub']($usub15)));
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					item = $iter4_nextval;
					i = (typeof ($add7=i)==typeof ($add8=item) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				self['assertEqual'](i, $constant_int_3);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter2'] = $method;
			$method = $pyjs__bind_method2('testIter', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,item,i,l,it,$bool3,$pyjs_try_err,$add10,$145,$146;
				l = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				i = $constant_int_0;
				it = l['__iter__']();
				while ((($bool3=true) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					try {
						item = it['next']();
					} catch($pyjs_try_err) {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
							break;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					self['assertEqual'](item, (typeof ($145=l)['__array'] != 'undefined'?
						((typeof $145['__array'][$146=i]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__'](i)));
					i = (typeof ($add9=i)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$method = $pyjs__bind_method2('testIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,e,l;
				l = $p['list']([$constant_int_2, $constant_int_4, $constant_int_6, $constant_int_8]);
				try {
					self['assertEqual'](l['index']($constant_int_2), $constant_int_0);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						self['fail']('ValueError raised when not expected');
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					l['index']($constant_int_200000);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						self['fail']('ValueError not raised');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							e = $pyjs_try_err;
							self['assertIn']($p['str'](e), $p['list'](['list.index(x): x not in list', '200000 is not in list']), 'ValueError exception has incorrect message');
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				l = $p['list']([$p['list']([$constant_int_1]), $p['list']([$constant_int_2]), $p['list']([$constant_int_3])]);
				self['assertEqual'](l['index']($p['list']([$constant_int_2])), $constant_int_1);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndex'] = $method;
			$method = $pyjs__bind_method2('testIndexClass', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$len25,$len27,$len26,$len29,$len28,$170,$167,$166,$165,$164,$149,$148,$161,$160,$147,$169,$168,l,$163,$162;
				l = $m['get_test_letters']();
				self['assertEqual']($p['getattr']((typeof ($147=l)['__array'] != 'undefined'?
					((typeof $147['__array'][$148=$constant_int_0]) != 'undefined'?$147['__array'][$148]:
						$147['__getitem__']($148)):
						$147['__getitem__']($constant_int_0)), 'letter'), 'g', '#413 index __cmp__ class issue');
				self['assertEqual']($p['getattr']((typeof ($149=l)['__array'] != 'undefined'?
					((typeof $149['__array'][$150=$constant_int_1]) != 'undefined'?$149['__array'][$150]:
						$149['__getitem__']($150)):
						$149['__getitem__']($constant_int_1)), 'letter'), 'f', '#413 index __cmp__ class issue');
				self['assertEqual']($p['getattr']((typeof ($153=(typeof ($151=l)['__array'] != 'undefined'?
					((typeof $151['__array'][$152=$constant_int_0]) != 'undefined'?$151['__array'][$152]:
						$151['__getitem__']($152)):
						$151['__getitem__']($constant_int_0)))['__array'] != 'undefined'?
					((typeof $153['__array'][$154=$constant_int_0]) != 'undefined'?$153['__array'][$154]:
						$153['__getitem__']($154)):
						$153['__getitem__']($constant_int_0)), 'letter'), 'o', '#413 index __cmp__ class issue');
				self['assertEqual']($p['getattr']((typeof ($157=(typeof ($155=l)['__array'] != 'undefined'?
					((typeof $155['__array'][$156=$constant_int_1]) != 'undefined'?$155['__array'][$156]:
						$155['__getitem__']($156)):
						$155['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $157['__array'][$158=$constant_int_0]) != 'undefined'?$157['__array'][$158]:
						$157['__getitem__']($158)):
						$157['__getitem__']($constant_int_0)), 'letter'), 'r', '#413 index __cmp__ class issue');
				self['assertEqual']((($len25=l) === null?$constant_int_0:
					(typeof $len25['__array'] != 'undefined' ? new $p['int']($len25['__array']['length']):
						(typeof $len25['__len__'] == 'function'?$len25['__len__']():
							(typeof $len25['length'] != 'undefined'? new $p['int']($len25['length']):
								$p['len']($len25))))), $constant_int_2, '#413 index __cmp__ class issue');
				self['assertEqual']((($len26=(typeof ($159=l)['__array'] != 'undefined'?
					((typeof $159['__array'][$160=$constant_int_0]) != 'undefined'?$159['__array'][$160]:
						$159['__getitem__']($160)):
						$159['__getitem__']($constant_int_0))) === null?$constant_int_0:
					(typeof $len26['__array'] != 'undefined' ? new $p['int']($len26['__array']['length']):
						(typeof $len26['__len__'] == 'function'?$len26['__len__']():
							(typeof $len26['length'] != 'undefined'? new $p['int']($len26['length']):
								$p['len']($len26))))), $constant_int_1, '#413 index __cmp__ class issue');
				self['assertEqual']((($len27=(typeof ($161=l)['__array'] != 'undefined'?
					((typeof $161['__array'][$162=$constant_int_1]) != 'undefined'?$161['__array'][$162]:
						$161['__getitem__']($162)):
						$161['__getitem__']($constant_int_1))) === null?$constant_int_0:
					(typeof $len27['__array'] != 'undefined' ? new $p['int']($len27['__array']['length']):
						(typeof $len27['__len__'] == 'function'?$len27['__len__']():
							(typeof $len27['length'] != 'undefined'? new $p['int']($len27['length']):
								$p['len']($len27))))), $constant_int_1, '#413 index __cmp__ class issue');
				self['assertEqual']((($len28=(typeof ($165=(typeof ($163=l)['__array'] != 'undefined'?
					((typeof $163['__array'][$164=$constant_int_0]) != 'undefined'?$163['__array'][$164]:
						$163['__getitem__']($164)):
						$163['__getitem__']($constant_int_0)))['__array'] != 'undefined'?
					((typeof $165['__array'][$166=$constant_int_0]) != 'undefined'?$165['__array'][$166]:
						$165['__getitem__']($166)):
						$165['__getitem__']($constant_int_0))) === null?$constant_int_0:
					(typeof $len28['__array'] != 'undefined' ? new $p['int']($len28['__array']['length']):
						(typeof $len28['__len__'] == 'function'?$len28['__len__']():
							(typeof $len28['length'] != 'undefined'? new $p['int']($len28['length']):
								$p['len']($len28))))), $constant_int_1, '#413 index __cmp__ class issue');
				self['assertEqual']((($len29=(typeof ($169=(typeof ($167=l)['__array'] != 'undefined'?
					((typeof $167['__array'][$168=$constant_int_1]) != 'undefined'?$167['__array'][$168]:
						$167['__getitem__']($168)):
						$167['__getitem__']($constant_int_1)))['__array'] != 'undefined'?
					((typeof $169['__array'][$170=$constant_int_0]) != 'undefined'?$169['__array'][$170]:
						$169['__getitem__']($170)):
						$169['__getitem__']($constant_int_0))) === null?$constant_int_0:
					(typeof $len29['__array'] != 'undefined' ? new $p['int']($len29['__array']['length']):
						(typeof $len29['__len__'] == 'function'?$len29['__len__']():
							(typeof $len29['length'] != 'undefined'? new $p['int']($len29['length']):
								$p['len']($len29))))), $constant_int_2, '#413 index __cmp__ class issue');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIndexClass'] = $method;
			$method = $pyjs__bind_method2('testAugAssign', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var getlist,$174,$175,$176,$177,$mod1,$171,$172,$173,$178,$179,$mul2,$189,$188,$181,$180,$sub1,$182,$185,$184,$187,$186,$augexpr1,$augexpr2,$198,$202,$200,$201,$augsub2,$augsub1,$add14,$add15,$add16,$add17,$add11,$add12,$sub2,$div2,$div1,$add18,$183,$mul1,getidx,a,$mod2,l,$add13,$199,$196,$197,$194,$195,$192,$193,$190,$191;
				l = $p['list']([$constant_int_10, 10.0]);
				getidx = function(x) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					return x;
				};
				getidx['__name__'] = 'getidx';

				getidx['__bind_type__'] = 0;
				getidx['__args__'] = [null,null,['x']];
				getlist = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					return l;
				};
				getlist['__name__'] = 'getlist';

				getlist['__bind_type__'] = 0;
				getlist['__args__'] = [null,null];
				l['__setitem__']($constant_int_0, (typeof ($add11=(typeof ($171=l)['__array'] != 'undefined'?
					((typeof $171['__array'][$172=$constant_int_0]) != 'undefined'?$171['__array'][$172]:
						$171['__getitem__']($172)):
						$171['__getitem__']($constant_int_0)))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)));
				self['assertEqual']((typeof ($173=l)['__array'] != 'undefined'?
					((typeof $173['__array'][$174=$constant_int_0]) != 'undefined'?$173['__array'][$174]:
						$173['__getitem__']($174)):
						$173['__getitem__']($constant_int_0)), $constant_int_11);
				l['__setitem__']($constant_int_0, (typeof ($sub1=(typeof ($175=l)['__array'] != 'undefined'?
					((typeof $175['__array'][$176=$constant_int_0]) != 'undefined'?$175['__array'][$176]:
						$175['__getitem__']($176)):
						$175['__getitem__']($constant_int_0)))==typeof ($sub2=$constant_int_2) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
				self['assertEqual']((typeof ($177=l)['__array'] != 'undefined'?
					((typeof $177['__array'][$178=$constant_int_0]) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__']($constant_int_0)), $constant_int_9);
				l['__setitem__']($constant_int_0, (typeof ($div1=(typeof ($179=l)['__array'] != 'undefined'?
					((typeof $179['__array'][$180=$constant_int_0]) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__']($constant_int_0)))==typeof ($div2=$constant_int_3) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				self['assertEqual']((typeof ($181=l)['__array'] != 'undefined'?
					((typeof $181['__array'][$182=$constant_int_0]) != 'undefined'?$181['__array'][$182]:
						$181['__getitem__']($182)):
						$181['__getitem__']($constant_int_0)), $constant_int_3);
				l['__setitem__']($constant_int_0, (typeof ($mul1=(typeof ($183=l)['__array'] != 'undefined'?
					((typeof $183['__array'][$184=$constant_int_0]) != 'undefined'?$183['__array'][$184]:
						$183['__getitem__']($184)):
						$183['__getitem__']($constant_int_0)))==typeof ($mul2=$constant_int_9) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				self['assertEqual']((typeof ($185=l)['__array'] != 'undefined'?
					((typeof $185['__array'][$186=$constant_int_0]) != 'undefined'?$185['__array'][$186]:
						$185['__getitem__']($186)):
						$185['__getitem__']($constant_int_0)), $constant_int_27);
				l['__setitem__']($constant_int_0, (typeof ($mod1=(typeof ($187=l)['__array'] != 'undefined'?
					((typeof $187['__array'][$188=$constant_int_0]) != 'undefined'?$187['__array'][$188]:
						$187['__getitem__']($188)):
						$187['__getitem__']($constant_int_0)))==typeof ($mod2=$constant_int_5) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)));
				self['assertEqual']((typeof ($189=l)['__array'] != 'undefined'?
					((typeof $189['__array'][$190=$constant_int_0]) != 'undefined'?$189['__array'][$190]:
						$189['__getitem__']($190)):
						$189['__getitem__']($constant_int_0)), $constant_int_2);
				a = $constant_int_0;
				l['__setitem__'](a, (typeof ($add13=(typeof ($191=l)['__array'] != 'undefined'?
					((typeof $191['__array'][$192=a]) != 'undefined'?$191['__array'][$192]:
						$191['__getitem__']($192)):
						$191['__getitem__'](a)))==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)));
				self['assertEqual']((typeof ($193=l)['__array'] != 'undefined'?
					((typeof $193['__array'][$194=$constant_int_0]) != 'undefined'?$193['__array'][$194]:
						$193['__getitem__']($194)):
						$193['__getitem__']($constant_int_0)), $constant_int_3);
				var $augsub1 = getidx($constant_int_0);
				var $augexpr1 = l;
				$augexpr1['__setitem__']($augsub1, (typeof ($add15=(typeof ($195=$augexpr1)['__array'] != 'undefined'?
					((typeof $195['__array'][$196=$augsub1]) != 'undefined'?$195['__array'][$196]:
						$195['__getitem__']($196)):
						$195['__getitem__']($augsub1)))==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)));
				self['assertEqual']((typeof ($197=l)['__array'] != 'undefined'?
					((typeof $197['__array'][$198=$constant_int_0]) != 'undefined'?$197['__array'][$198]:
						$197['__getitem__']($198)):
						$197['__getitem__']($constant_int_0)), $constant_int_4);
				var $augsub2 = getidx($constant_int_0);
				var $augexpr2 = getlist();
				$augexpr2['__setitem__']($augsub2, (typeof ($add17=(typeof ($199=$augexpr2)['__array'] != 'undefined'?
					((typeof $199['__array'][$200=$augsub2]) != 'undefined'?$199['__array'][$200]:
						$199['__getitem__']($200)):
						$199['__getitem__']($augsub2)))==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)));
				self['assertEqual']((typeof ($201=l)['__array'] != 'undefined'?
					((typeof $201['__array'][$202=$constant_int_0]) != 'undefined'?$201['__array'][$202]:
						$201['__getitem__']($202)):
						$201['__getitem__']($constant_int_0)), $constant_int_5);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAugAssign'] = $method;
			$method = $pyjs__bind_method2('testListComp', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l1,l,$cmp15,$cmp17,$cmp16,vec2,vec1,l2,$cmp18;
				l1 = $p['list'](['a', 'b', 'c']);
				l2 = function(){
					var $iter5_nextval,i,$iter5_idx,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
				$iter5_iter = l1;
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					$collcomp1['append'](i);
				}

	return $collcomp1;}();
				self['assertTrue']($p['op_eq'](l1, l2), 'simple');
				vec1 = $p['list']([$constant_int_1, $constant_int_3, $constant_int_5]);
				vec2 = $p['list']([$constant_int_2, $constant_int_4, $constant_int_6]);
				l = function(){
					var $iter6_idx,$iter6_type,$cmp9,$collcomp2,$iter6_array,$cmp10,$bool4,x,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp2 = $p['list']();
				$iter6_iter = vec1;
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					x = $iter6_nextval;
					if ((($bool4=((((($cmp9=x)===($cmp10=$constant_int_3)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
							false :
							(typeof $bool4=='object'?
								(typeof $bool4['__nonzero__']=='function'?
									$bool4['__nonzero__']() :
									(typeof $bool4['__len__']=='function'?
										($bool4['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$collcomp2['append']((typeof ($mul3=$constant_int_3)==typeof ($mul4=x) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
					}
				}

	return $collcomp2;}();
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_9, $constant_int_15])), 'conditional');
				l = function(){
					var $bool6,$cmp12,$iter8_idx,$iter8_array,$iter7_nextval,$iter7_iter,$iter8_type,$iter7_array,$collcomp3,$iter8_iter,$cmp14,$cmp11,$iter8_nextval,$cmp13,$iter7_idx,y,x,$bool5,$iter7_type;
	$collcomp3 = $p['list']();
				$iter7_iter = vec1;
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					x = $iter7_nextval;
					if ((($bool5=((((($cmp11=x)===($cmp12=$constant_int_3)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
							false :
							(typeof $bool5=='object'?
								(typeof $bool5['__nonzero__']=='function'?
									$bool5['__nonzero__']() :
									(typeof $bool5['__len__']=='function'?
										($bool5['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$iter8_iter = vec2;
						if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
							$iter8_type = 0;
						} else {
							$iter8_iter = $iter8_iter['__iter__']();
							$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter8_idx = 0;
						while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
							y = $iter8_nextval;
							if ((($bool6=((($cmp13=y)===($cmp14=$constant_int_3)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
									false :
									(typeof $bool6=='object'?
										(typeof $bool6['__nonzero__']=='function'?
											$bool6['__nonzero__']() :
											(typeof $bool6['__len__']=='function'?
												($bool6['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$collcomp3['append']($p['tuple']([x, y]));
							}
						}
					}
				}

	return $collcomp3;}();
				self['assertTrue']($p['op_eq'](l, $p['list']([$p['tuple']([$constant_int_3, $constant_int_4]), $p['tuple']([$constant_int_3, $constant_int_6]), $p['tuple']([$constant_int_5, $constant_int_4]), $p['tuple']([$constant_int_5, $constant_int_6])])), 'double');
				l = function(){
					var $iter9_iter,i,$collcomp4,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
	$collcomp4 = $p['list']();
				$iter9_iter = function(){
					var $iter10_nextval,$collcomp5,j,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
	$collcomp5 = $p['list']();
				$iter10_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					j = $iter10_nextval;
					$collcomp5['append'](j);
				}

	return $collcomp5;}();
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					$collcomp4['append'](i);
				}

	return $collcomp4;}();
				self['assertTrue']($p['op_eq'](l, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])));
				self['assertTrue'](((($cmp15=$p['list']([$constant_int_1]))===($cmp16=$p['list']([$constant_int_0, $constant_int_1]))?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1), '[1] > [0,1]');
				self['assertTrue'](((($cmp17=$p['list']([$constant_int_0, $constant_int_1]))===($cmp18=$p['list']([$constant_int_1]))?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1), '[0,1] < [1]');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListComp'] = $method;
			$method = $pyjs__bind_method2('testListContains', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var l;
				l = $p['list']([$p['list'](['monkey']), $p['list'](['patch']), $p['list'](['fish']), $p['list'](['chips'])]);
				self['assertTrue'](l['__contains__']($p['list'](['fish'])), "['fish'] in l");
				l = $p['list']([$p['dict']([['monkey', $constant_int_1]]), $p['dict']([['patch', $constant_int_1]]), $p['dict']([['fish', $constant_int_1]]), $p['dict']([['chips', $constant_int_1]])]);
				self['assertTrue'](l['__contains__']($p['dict']([['fish', $constant_int_1]])), "{'fish':1} in l");
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testListContains'] = $method;
			$method = $pyjs__bind_method2('testExtendedSlicing', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,c,b,$cmp20,$bool7,$mul8,$mul7,$mul6,$mul5,$cmp19;
				self['fail']('Bug #xxx - need better __setitem__ implementation for builtin lists');
				return null;
				a = $p['range']($constant_int_20);
				a['__setitem__']($p['slice']($constant_int_2, $constant_int_10, $constant_int_3), $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]));
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_3, $constant_int_4, $constant_int_2, $constant_int_6, $constant_int_7, $constant_int_3, $constant_int_9, $constant_int_10, $constant_int_11, $constant_int_12, $constant_int_13, $constant_int_14, $constant_int_15, $constant_int_16, $constant_int_17, $constant_int_18, $constant_int_19]));
				a = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				a['__delitem__']($p['slice'](null, null, $constant_int_2));
				self['assertEqual'](a, $p['list']([$constant_int_1, $constant_int_3]));
				a = $p['range']($constant_int_5);
				a['__delitem__']($p['slice']($constant_int_1, null, $constant_int_2));
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_2, $constant_int_4]));
				a = $p['range']($constant_int_5);
				a['__delitem__']($p['slice']($constant_int_1, null, (typeof ($usub16=$constant_int_2)=='number'?
					-$usub16:
					$p['op_usub']($usub16))));
				self['assertEqual'](a, $p['list']([$constant_int_0, $constant_int_2, $constant_int_3, $constant_int_4]));
				a = $p['range']($constant_int_10);
				a['__delitem__']($p['slice'](null, null, $constant_int_1000));
				self['assertEqual'](a, $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_9]));
				a = $p['range']($constant_int_10);
				a['__setitem__']($p['slice'](null, null, $constant_int_2), (typeof ($mul5=$p['list']([(typeof ($usub17=$constant_int_1)=='number'?
					-$usub17:
					$p['op_usub']($usub17))]))==typeof ($mul6=$constant_int_5) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
				self['assertEqual'](a, $p['list']($p['list']([(typeof ($usub18=$constant_int_1)=='number'?
					-$usub18:
					$p['op_usub']($usub18)), $constant_int_1, (typeof ($usub19=$constant_int_1)=='number'?
					-$usub19:
					$p['op_usub']($usub19)), $constant_int_3, (typeof ($usub20=$constant_int_1)=='number'?
					-$usub20:
					$p['op_usub']($usub20)), $constant_int_5, (typeof ($usub21=$constant_int_1)=='number'?
					-$usub21:
					$p['op_usub']($usub21)), $constant_int_7, (typeof ($usub22=$constant_int_1)=='number'?
					-$usub22:
					$p['op_usub']($usub22)), $constant_int_9])));
				a = $p['list']($p['range']($constant_int_10));
				a['__setitem__']($p['slice'](null, null, (typeof ($usub23=$constant_int_4)=='number'?
					-$usub23:
					$p['op_usub']($usub23))), (typeof ($mul7=$p['list']([$constant_int_10]))==typeof ($mul8=$constant_int_3) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)));
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_0, $constant_int_10, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_10, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_10])));
				a = $p['list']($p['range']($constant_int_4));
				a['__setitem__']($p['slice'](null, null, (typeof ($usub24=$constant_int_1)=='number'?
					-$usub24:
					$p['op_usub']($usub24))), a);
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_3, $constant_int_2, $constant_int_1, $constant_int_0])));
				a = $p['list']($p['range']($constant_int_10));
				b = $p['__getslice'](a, 0, null);
				c = $p['__getslice'](a, 0, null);
				$p['__setslice'](a, $constant_int_2, $constant_int_3, $p['list']($p['list'](['two', 'elements'])));
				b['__setitem__']($p['slice']($constant_int_2, $constant_int_3), $p['list']($p['list'](['two', 'elements'])));
				c['__setitem__']($p['slice']($constant_int_2, $constant_int_3, null), $p['list']($p['list'](['two', 'elements'])));
				self['assertEqual'](a, b);
				self['assertEqual'](a, c);
				a = $p['list']($p['range']($constant_int_10));
				a['__setitem__']($p['slice'](null, null, $constant_int_2), $p['tuple']($p['range']($constant_int_5)));
				self['assertEqual'](a, $p['list']($p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_3, $constant_int_2, $constant_int_5, $constant_int_3, $constant_int_7, $constant_int_4, $constant_int_9])));
				if ((($bool7=((($cmp19=$p['getattr']($m['sys'], 'version_info'))===($cmp20=$p['tuple']([$constant_int_2, $constant_int_5, $constant_int_5]))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7['__nonzero__']=='function'?
								$bool7['__nonzero__']() :
								(typeof $bool7['__len__']=='function'?
									($bool7['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				a = $p['list']($p['range']($constant_int_10));
				a['__delitem__']($p['slice']($constant_int_9, null, $p['op_bitshiftleft']($constant_int_1,$constant_int_333)));
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExtendedSlicing'] = $method;
			$method = $pyjs__bind_method2('testStr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['str']($p['list']([$constant_int_0, $constant_int_1])), '[0, 1]');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStr'] = $method;
			$method = $pyjs__bind_method2('testRepr', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2571893d70b3becf44a13175b850cba9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['assertEqual']($p['repr']($p['list']([$constant_int_0, $constant_int_1])), '[0, 1]');
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ListTest', $p['tuple']($bases), $data);
		})();
		$m['A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ListTest';
			$cls_definition['__md5__'] = '25932ecc61dada22df92637f0c55ec73';
			$method = $pyjs__bind_method2('__cmp__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '25932ecc61dada22df92637f0c55ec73') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				return (typeof ($usub25=$constant_int_1)=='number'?
					-$usub25:
					$p['op_usub']($usub25));
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__cmp__'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('A', $p['tuple']($bases), $data);
		})();
		$m['B'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'ListTest';
			$cls_definition['__md5__'] = 'ee13f5f8145cf02ed13749f4dda5f903';
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('B', $p['tuple']($bases), $data);
		})();
		$m['delete_value'] = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5]);
		$m['delete_value']['__delitem__']($constant_int_3);
		$p['__delslice']($m['delete_value'], $constant_int_2, $constant_int_3)
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ListTest */


/* end module: ListTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_JS', 'sys']
*/
