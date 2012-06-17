/* start javascript include: jsdicttest.js */
function dictobj() {
}

function dict_init(d) {
    var u = new pyjslib.dict([['goodbye', 2]]);
    this.d = d;
    d.update(u);
}

function dict_get_value(key) {
    return this.d.__getitem__(key)
}

dictobj.prototype.get_value = dict_get_value;
dictobj.prototype.init = dict_init;

$pyjs.loaded_modules['jsdicttest.js'] = function ( ) {return null;};
/* end jsdicttest.js */
