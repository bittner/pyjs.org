/* start module: csv */
$pyjs['loaded_modules']['csv'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['csv']['__was_initialized__']) return $pyjs['loaded_modules']['csv'];
	var $m = $pyjs['loaded_modules']['csv'];
	$m['__repr__'] = function() { return '<module: csv>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'csv';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_0 = new $p['int'](0);
		$m['CSVReader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'csv';
			$cls_definition['__md5__'] = '1ac1b3fe70cb1b08eceba466a078bc07';
			$method = $pyjs__bind_method2('__init__', function(lines, dialect) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					lines = arguments[1];
					dialect = arguments[2];
					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ac1b3fe70cb1b08eceba466a078bc07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof dialect != 'undefined') {
						if (dialect !== null && typeof dialect['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = dialect;
							dialect = arguments[3];
						}
					} else 					if (typeof lines != 'undefined') {
						if (lines !== null && typeof lines['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = lines;
							lines = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof dialect == 'undefined') dialect=arguments['callee']['__args__'][4][1];
				var $8,$9,cols,$iter1_iter,$or1,$4,row,$12,$iter2_iter,$iter2_type,lineno,$11,$iter1_array,$iter1_nextval,$or2,$and1,$and2,$bool2,$bool3,$iter2_idx,$bool1,$bool6,$bool7,$bool4,$bool5,$6,$7,line,$5,$2,$3,$1,$cmp5,$cmp4,$cmp7,$iter2_nextval,$cmp1,$iter1_type,$cmp3,$cmp2,$len3,$cmp8,$add2,$len4,$add1,$len2,$iter1_idx,$len1,$10,col,$iter2_array,$cmp6;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__values', $p['list']([])) : $p['setattr'](self, '__values', $p['list']([])); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__inQuoted', false) : $p['setattr'](self, '__inQuoted', false); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('delimeter', kwargs['get']('delimeter', ',')) : $p['setattr'](self, 'delimeter', kwargs['get']('delimeter', ',')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('quotechar', kwargs['get']('quotechar', '"')) : $p['setattr'](self, 'quotechar', kwargs['get']('quotechar', '"')); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dialect', dialect) : $p['setattr'](self, 'dialect', dialect); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('line_num', $constant_int_0) : $p['setattr'](self, 'line_num', $constant_int_0); 
				lineno = $constant_int_0;
				$iter1_iter = lines;
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					line = $iter1_nextval;
					lineno = (typeof ($add1=lineno)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					self['addNewline'](lineno);
					if ((($bool2=((($bool1=$or1=$p['op_eq'](line, '')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1['__nonzero__']=='function'?
								$bool1['__nonzero__']() :
								(typeof $bool1['__len__']=='function'?
									($bool1['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:$p['op_eq'](line, '\n'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						continue;
					}
					cols = line['$$split']($p['getattr'](self, 'delimeter'));
					if ((($bool3=((($cmp1=(($len1=cols) === null?$constant_int_0:
						(typeof $len1['__array'] != 'undefined' ? new $p['int']($len1['__array']['length']):
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'? new $p['int']($len1['length']):
									$p['len']($len1))))))===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						self['addValue']((typeof ($1=cols)['__array'] != 'undefined'?
							((typeof $1['__array'][$2=$constant_int_0]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__']($constant_int_0)), true);
						$iter2_iter = $p['__getslice'](cols, $constant_int_1, null);
						if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
							$iter2_type = 0;
						} else {
							$iter2_iter = $iter2_iter['__iter__']();
							$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter2_idx = 0;
						while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
							col = $iter2_nextval;
							self['addValue'](col, false);
						}
					}
				}
				if ((($bool4=((($cmp3=(($len2=$p['getattr'](self, '__values')) === null?$constant_int_0:
					(typeof $len2['__array'] != 'undefined' ? new $p['int']($len2['__array']['length']):
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'? new $p['int']($len2['length']):
								$p['len']($len2))))))===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					row = (typeof ($3=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
						((typeof $3['__array'][$4=(typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))));
					if ((($bool6=((($bool5=$and1=((($cmp5=(($len3=row) === null?$constant_int_0:
						(typeof $len3['__array'] != 'undefined' ? new $p['int']($len3['__array']['length']):
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'? new $p['int']($len3['length']):
									$p['len']($len3))))))===($cmp6=$constant_int_1)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp7=(($len4=(typeof ($5=row)['__array'] != 'undefined'?
						((typeof $5['__array'][$6=(typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__']((typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))))) === null?$constant_int_0:
						(typeof $len4['__array'] != 'undefined' ? new $p['int']($len4['__array']['length']):
							(typeof $len4['__len__'] == 'function'?$len4['__len__']():
								(typeof $len4['length'] != 'undefined'? new $p['int']($len4['length']):
									$p['len']($len4))))))===($cmp8=$constant_int_0)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == 1):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						if ((($bool7=$p['op_eq']((typeof ($9=(typeof ($7=row)['__array'] != 'undefined'?
							((typeof $7['__array'][$8=(typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))]) != 'undefined'?$7['__array'][$8]:
								$7['__getitem__']($8)):
								$7['__getitem__']((typeof ($usub3=$constant_int_1)=='number'?
							-$usub3:
							$p['op_usub']($usub3)))))['__array'] != 'undefined'?
							((typeof $9['__array'][$10=(typeof ($usub4=$constant_int_1)=='number'?
							-$usub4:
							$p['op_usub']($usub4))]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__']((typeof ($usub4=$constant_int_1)=='number'?
							-$usub4:
							$p['op_usub']($usub4)))), '\n')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
							row['__setitem__']((typeof ($usub7=$constant_int_1)=='number'?
								-$usub7:
								$p['op_usub']($usub7)), $p['__getslice']((typeof ($11=row)['__array'] != 'undefined'?
								((typeof $11['__array'][$12=(typeof ($usub6=$constant_int_1)=='number'?
								-$usub6:
								$p['op_usub']($usub6))]) != 'undefined'?$11['__array'][$12]:
									$11['__getitem__']($12)):
									$11['__getitem__']((typeof ($usub6=$constant_int_1)=='number'?
								-$usub6:
								$p['op_usub']($usub6)))), 0, (typeof ($usub5=$constant_int_1)=='number'?
								-$usub5:
								$p['op_usub']($usub5))));
						}
					}
				}
				return null;
			}
	, 1, [null,['kwargs'],['self'],['lines'],['dialect', null]]);
			$cls_definition['__init__'] = $method;
			$method = $pyjs__bind_method2('addNewline', function(lineno) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineno = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ac1b3fe70cb1b08eceba466a078bc07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool10,$cmp9,$bool12,$bool13,$bool14,row,$21,$20,$22,$25,$24,$26,$bool11,$and3,$and4,$and5,$and6,$cmp14,$cmp11,$cmp10,$cmp13,$cmp12,$bool8,$bool9,$14,$15,$16,$17,$13,$18,$19,$len6,$len7,$len5,$23,$len8;
				if ((($bool8=$p['getattr'](self, '__inQuoted')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					(typeof ($13=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
						((typeof $13['__array'][$14=(typeof ($usub8=$constant_int_1)=='number'?
						-$usub8:
						$p['op_usub']($usub8))]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__']((typeof ($usub8=$constant_int_1)=='number'?
						-$usub8:
						$p['op_usub']($usub8))))['__setitem__']($constant_int_0, lineno);
				}
				else {
					if ((($bool9=((($cmp9=(($len5=$p['getattr'](self, '__values')) === null?$constant_int_0:
						(typeof $len5['__array'] != 'undefined' ? new $p['int']($len5['__array']['length']):
							(typeof $len5['__len__'] == 'function'?$len5['__len__']():
								(typeof $len5['length'] != 'undefined'? new $p['int']($len5['length']):
									$p['len']($len5))))))===($cmp10=$constant_int_0)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9['__nonzero__']=='function'?
									$bool9['__nonzero__']() :
									(typeof $bool9['__len__']=='function'?
										($bool9['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						row = (typeof ($15=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
							((typeof $15['__array'][$16=(typeof ($usub9=$constant_int_1)=='number'?
							-$usub9:
							$p['op_usub']($usub9))]) != 'undefined'?$15['__array'][$16]:
								$15['__getitem__']($16)):
								$15['__getitem__']((typeof ($usub9=$constant_int_1)=='number'?
							-$usub9:
							$p['op_usub']($usub9))));
						if ((($bool10=((($cmp11=(($len6=row) === null?$constant_int_0:
							(typeof $len6['__array'] != 'undefined' ? new $p['int']($len6['__array']['length']):
								(typeof $len6['__len__'] == 'function'?$len6['__len__']():
									(typeof $len6['length'] != 'undefined'? new $p['int']($len6['length']):
										$p['len']($len6))))))===($cmp12=$constant_int_1)?0:
							(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
								($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
								$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10['__nonzero__']=='function'?
										$bool10['__nonzero__']() :
										(typeof $bool10['__len__']=='function'?
											($bool10['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							while ((($bool12=((($bool11=$and3=((($cmp13=(($len7=(typeof ($17=row)['__array'] != 'undefined'?
								((typeof $17['__array'][$18=(typeof ($usub10=$constant_int_1)=='number'?
								-$usub10:
								$p['op_usub']($usub10))]) != 'undefined'?$17['__array'][$18]:
									$17['__getitem__']($18)):
									$17['__getitem__']((typeof ($usub10=$constant_int_1)=='number'?
								-$usub10:
								$p['op_usub']($usub10))))) === null?$constant_int_0:
								(typeof $len7['__array'] != 'undefined' ? new $p['int']($len7['__array']['length']):
									(typeof $len7['__len__'] == 'function'?$len7['__len__']():
										(typeof $len7['length'] != 'undefined'? new $p['int']($len7['length']):
											$p['len']($len7))))))===($cmp14=$constant_int_0)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
								false :
								(typeof $bool11=='object'?
									(typeof $bool11['__nonzero__']=='function'?
										$bool11['__nonzero__']() :
										(typeof $bool11['__len__']=='function'?
											($bool11['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$p['op_eq']((typeof ($21=(typeof ($19=row)['__array'] != 'undefined'?
								((typeof $19['__array'][$20=(typeof ($usub11=$constant_int_1)=='number'?
								-$usub11:
								$p['op_usub']($usub11))]) != 'undefined'?$19['__array'][$20]:
									$19['__getitem__']($20)):
									$19['__getitem__']((typeof ($usub11=$constant_int_1)=='number'?
								-$usub11:
								$p['op_usub']($usub11)))))['__array'] != 'undefined'?
								((typeof $21['__array'][$22=(typeof ($usub12=$constant_int_1)=='number'?
								-$usub12:
								$p['op_usub']($usub12))]) != 'undefined'?$21['__array'][$22]:
									$21['__getitem__']($22)):
									$21['__getitem__']((typeof ($usub12=$constant_int_1)=='number'?
								-$usub12:
								$p['op_usub']($usub12)))), '\n'):$and3)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
									false :
									(typeof $bool12=='object'?
										(typeof $bool12['__nonzero__']=='function'?
											$bool12['__nonzero__']() :
											(typeof $bool12['__len__']=='function'?
												($bool12['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								row['__setitem__']((typeof ($usub15=$constant_int_1)=='number'?
									-$usub15:
									$p['op_usub']($usub15)), $p['__getslice']((typeof ($23=row)['__array'] != 'undefined'?
									((typeof $23['__array'][$24=(typeof ($usub14=$constant_int_1)=='number'?
									-$usub14:
									$p['op_usub']($usub14))]) != 'undefined'?$23['__array'][$24]:
										$23['__getitem__']($24)):
										$23['__getitem__']((typeof ($usub14=$constant_int_1)=='number'?
									-$usub14:
									$p['op_usub']($usub14)))), 0, (typeof ($usub13=$constant_int_1)=='number'?
									-$usub13:
									$p['op_usub']($usub13))));
							}
							if ((($bool14=((($bool13=$and5=$p['op_eq']((($len8=row) === null?$constant_int_0:
								(typeof $len8['__array'] != 'undefined' ? new $p['int']($len8['__array']['length']):
									(typeof $len8['__len__'] == 'function'?$len8['__len__']():
										(typeof $len8['length'] != 'undefined'? new $p['int']($len8['length']):
											$p['len']($len8))))), $constant_int_2)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
								false :
								(typeof $bool13=='object'?
									(typeof $bool13['__nonzero__']=='function'?
										$bool13['__nonzero__']() :
										(typeof $bool13['__len__']=='function'?
											($bool13['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$p['op_eq']((typeof ($25=row)['__array'] != 'undefined'?
								((typeof $25['__array'][$26=$constant_int_1]) != 'undefined'?$25['__array'][$26]:
									$25['__getitem__']($26)):
									$25['__getitem__']($constant_int_1)), ''):$and5)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
									false :
									(typeof $bool14=='object'?
										(typeof $bool14['__nonzero__']=='function'?
											$bool14['__nonzero__']() :
											(typeof $bool14['__len__']=='function'?
												($bool14['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								row['__delitem__']($constant_int_1);
							}
						}
					}
					self['__values']['append']($p['list']([lineno]));
				}
				return null;
			}
	, 1, [null,null,['self'],['lineno']]);
			$cls_definition['addNewline'] = $method;
			$method = $pyjs__bind_method2('addValue', function(value, isFirst) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					isFirst = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ac1b3fe70cb1b08eceba466a078bc07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool18,$bool19,$bool15,$bool16,$bool17,$cmp20,$cmp21,$cmp22,wasInQuoted,$43,$42,$41,$40,$44,$augexpr1,$and9,$augexpr2,$augsub2,$augsub1,$and7,quotechar,$add16,svlen,$mod4,$mod1,$mod3,$mod2,$add14,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,vlen,v,$len10,$cmp15,$len12,idx,$add15,$cmp17,$bool30,$cmp16,$and14,$add13,$len11,$add3,endOfQuoted,$add6,$add7,$add4,$add5,$add8,$add9,$len9,$and8,sv,$29,$28,$27,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$and12,$and13,$and10,$and11,$add10,$add11,$add12,$and15,$cmp19,$cmp18,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31;
				wasInQuoted = $p['getattr'](self, '__inQuoted');
				endOfQuoted = false;
				quotechar = $p['getattr'](self, 'quotechar');
				v = value;
				sv = v['rstrip']();
				if ((($bool16=((($bool15=$and7=((($cmp15=(($len9=sv) === null?$constant_int_0:
					(typeof $len9['__array'] != 'undefined' ? new $p['int']($len9['__array']['length']):
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'? new $p['int']($len9['length']):
								$p['len']($len9))))))===($cmp16=$constant_int_0)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15['__nonzero__']=='function'?
							$bool15['__nonzero__']() :
							(typeof $bool15['__len__']=='function'?
								($bool15['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((typeof ($27=sv)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=(typeof ($usub16=$constant_int_1)=='number'?
					-$usub16:
					$p['op_usub']($usub16))]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']((typeof ($usub16=$constant_int_1)=='number'?
					-$usub16:
					$p['op_usub']($usub16)))), quotechar):$and7)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					svlen = (typeof ($sub1=(($len10=sv) === null?$constant_int_0:
						(typeof $len10['__array'] != 'undefined' ? new $p['int']($len10['__array']['length']):
							(typeof $len10['__len__'] == 'function'?$len10['__len__']():
								(typeof $len10['length'] != 'undefined'? new $p['int']($len10['length']):
									$p['len']($len10))))))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					idx = (typeof ($sub3=svlen)==typeof ($sub4=$constant_int_2) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
					while ((($bool18=((($bool17=$and9=((($cmp17=idx)===($cmp18=$constant_int_0)?0:
						(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
							($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
							$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17['__nonzero__']=='function'?
								$bool17['__nonzero__']() :
								(typeof $bool17['__len__']=='function'?
									($bool17['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']((typeof ($29=sv)['__array'] != 'undefined'?
						((typeof $29['__array'][$30=idx]) != 'undefined'?$29['__array'][$30]:
							$29['__getitem__']($30)):
							$29['__getitem__'](idx)), quotechar):$and9)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
							false :
							(typeof $bool18=='object'?
								(typeof $bool18['__nonzero__']=='function'?
									$bool18['__nonzero__']() :
									(typeof $bool18['__len__']=='function'?
										($bool18['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						idx = (typeof ($sub5=idx)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6));
					}
					if ((($bool19=$p['op_eq']((typeof ($mod1=(typeof ($sub7=svlen)==typeof ($sub8=idx) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)))==typeof ($mod2=$constant_int_2) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2)), $constant_int_0)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19['__nonzero__']=='function'?
									$bool19['__nonzero__']() :
									(typeof $bool19['__len__']=='function'?
										($bool19['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						v = (typeof ($add5=$p['__getslice'](sv, 0, (typeof ($usub17=$constant_int_1)=='number'?
							-$usub17:
							$p['op_usub']($usub17))))==typeof ($add6=$p['__getslice'](v, (typeof ($add3=svlen)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4)), null)) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
						endOfQuoted = true;
					}
				}
				if ((($bool23=((($bool21=$and11=!(($bool20=$p['getattr'](self, '__inQuoted')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21['__nonzero__']=='function'?
							$bool21['__nonzero__']() :
							(typeof $bool21['__len__']=='function'?
								($bool21['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool22=$and12=((($cmp19=(($len11=v) === null?$constant_int_0:
					(typeof $len11['__array'] != 'undefined' ? new $p['int']($len11['__array']['length']):
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'? new $p['int']($len11['length']):
								$p['len']($len11))))))===($cmp20=$constant_int_0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22['__nonzero__']=='function'?
							$bool22['__nonzero__']() :
							(typeof $bool22['__len__']=='function'?
								($bool22['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((typeof ($31=v)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=$constant_int_0]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']($constant_int_0)), quotechar):$and12):$and11)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					idx = $constant_int_1;
					vlen = (($len12=v) === null?$constant_int_0:
						(typeof $len12['__array'] != 'undefined' ? new $p['int']($len12['__array']['length']):
							(typeof $len12['__len__'] == 'function'?$len12['__len__']():
								(typeof $len12['length'] != 'undefined'? new $p['int']($len12['length']):
									$p['len']($len12)))));
					while ((($bool25=((($bool24=$and14=((($cmp21=idx)===($cmp22=vlen)?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24['__nonzero__']=='function'?
								$bool24['__nonzero__']() :
								(typeof $bool24['__len__']=='function'?
									($bool24['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']((typeof ($33=v)['__array'] != 'undefined'?
						((typeof $33['__array'][$34=idx]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](idx)), quotechar):$and14)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
							false :
							(typeof $bool25=='object'?
								(typeof $bool25['__nonzero__']=='function'?
									$bool25['__nonzero__']() :
									(typeof $bool25['__len__']=='function'?
										($bool25['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						idx = (typeof ($add7=idx)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8));
					}
					if ((($bool26=$p['op_eq']((typeof ($mod3=idx)==typeof ($mod4=$constant_int_2) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)), $constant_int_1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26['__nonzero__']=='function'?
									$bool26['__nonzero__']() :
									(typeof $bool26['__len__']=='function'?
										($bool26['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						v = $p['__getslice'](v, $constant_int_1, null);
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__inQuoted', true) : $p['setattr'](self, '__inQuoted', true); 
					}
					else {
						v = $p['__getslice'](value, idx, null);
					}
				}
				if ((($bool27=$p['getattr'](self, '__inQuoted')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
						false :
						(typeof $bool27=='object'?
							(typeof $bool27['__nonzero__']=='function'?
								$bool27['__nonzero__']() :
								(typeof $bool27['__len__']=='function'?
									($bool27['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					v = v['$$replace']((typeof ($add9=quotechar)==typeof ($add10=quotechar) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)), quotechar);
				}
				if ((($bool28=wasInQuoted) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool29=isFirst) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
							false :
							(typeof $bool29=='object'?
								(typeof $bool29['__nonzero__']=='function'?
									$bool29['__nonzero__']() :
									(typeof $bool29['__len__']=='function'?
										($bool29['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						var $augsub1 = (typeof ($usub18=$constant_int_1)=='number'?
							-$usub18:
							$p['op_usub']($usub18));
						var $augexpr1 = (typeof ($35=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
							((typeof $35['__array'][$36=(typeof ($usub19=$constant_int_1)=='number'?
							-$usub19:
							$p['op_usub']($usub19))]) != 'undefined'?$35['__array'][$36]:
								$35['__getitem__']($36)):
								$35['__getitem__']((typeof ($usub19=$constant_int_1)=='number'?
							-$usub19:
							$p['op_usub']($usub19))));
						$augexpr1['__setitem__']($augsub1, (typeof ($add11=(typeof ($37=$augexpr1)['__array'] != 'undefined'?
							((typeof $37['__array'][$38=$augsub1]) != 'undefined'?$37['__array'][$38]:
								$37['__getitem__']($38)):
								$37['__getitem__']($augsub1)))==typeof ($add12=v) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
					}
					else {
						var $augsub2 = (typeof ($usub20=$constant_int_1)=='number'?
							-$usub20:
							$p['op_usub']($usub20));
						var $augexpr2 = (typeof ($39=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
							((typeof $39['__array'][$40=(typeof ($usub21=$constant_int_1)=='number'?
							-$usub21:
							$p['op_usub']($usub21))]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__']((typeof ($usub21=$constant_int_1)=='number'?
							-$usub21:
							$p['op_usub']($usub21))));
						$augexpr2['__setitem__']($augsub2, (typeof ($add15=(typeof ($41=$augexpr2)['__array'] != 'undefined'?
							((typeof $41['__array'][$42=$augsub2]) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__']($augsub2)))==typeof ($add16=(typeof ($add13=$p['getattr'](self, 'delimeter'))==typeof ($add14=v) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14))) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16)));
					}
				}
				else {
					(typeof ($43=$p['getattr'](self, '__values'))['__array'] != 'undefined'?
						((typeof $43['__array'][$44=(typeof ($usub22=$constant_int_1)=='number'?
						-$usub22:
						$p['op_usub']($usub22))]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__']((typeof ($usub22=$constant_int_1)=='number'?
						-$usub22:
						$p['op_usub']($usub22))))['append'](v);
				}
				if ((($bool30=endOfQuoted) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30['__nonzero__']=='function'?
								$bool30['__nonzero__']() :
								(typeof $bool30['__len__']=='function'?
									($bool30['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__inQuoted', false) : $p['setattr'](self, '__inQuoted', false); 
				}
				return null;
			}
	, 1, [null,null,['self'],['value'],['isFirst']]);
			$cls_definition['addValue'] = $method;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ac1b3fe70cb1b08eceba466a078bc07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__iter', self['__values']['__iter__']()) : $p['setattr'](self, '__iter', self['__values']['__iter__']()); 
				return self;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$method = $pyjs__bind_method2('next', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '1ac1b3fe70cb1b08eceba466a078bc07') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $46,$45,v;
				v = self['__iter']['next']();
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('line_num', (typeof ($45=v)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_0))) : $p['setattr'](self, 'line_num', (typeof ($45=v)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=$constant_int_0]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__']($constant_int_0))); 
				return $p['__getslice'](v, $constant_int_1, null);
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CSVReader', $p['tuple']($bases), $data);
		})();
		$m['reader'] = function(lines) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof lines != 'undefined') {
					if (lines !== null && typeof lines['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = lines;
						lines = arguments[1];
					}
				} else {
				}
			}

			return $pyjs_kwargs_call(null, $m['CSVReader'], null, kwargs, [{}, lines]);
		};
		$m['reader']['__name__'] = 'reader';

		$m['reader']['__bind_type__'] = 0;
		$m['reader']['__args__'] = [null,['kwargs'],['lines']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end csv */


/* end module: csv */


