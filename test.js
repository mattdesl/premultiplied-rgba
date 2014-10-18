var premult = require('./')
require('tape').test('should premultiply', function(t) {
	t.deepEqual( premult([1, 1, 1, 0.5]), [0.5, 0.5, 0.5, 0.5] )
	t.deepEqual( premult([1, 1, 1, 1]), [1, 1, 1, 1] )

	var test = [1, 1, 1, 1]
	t.notEqual( premult(test), test, 'should not mutate array' )
	t.equal( premult(test, test), test, 'should mutate array with out param' )


    var colors = [
        [1, 1, 0.5, 0.5],
        [1, 0, 0, 0.0]
    ].map(premult)

    var expected = [
        [0.5, 0.5, 0.25, 0.5],
        [0, 0, 0, 0]
    ]

    t.deepEqual(colors, expected, 'functional array methods work')

	t.end()
})