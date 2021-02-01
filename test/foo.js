'use strict';

const { assert } = require('chai');

suite('Foo', () => {
    suite.skip('multi-skip', () => {
        test('sit', () => {
            assert.isTrue(false)
        })

        test('amet', () => {
            assert.isTrue(true)
        })
    })

    test('baz', () => {
        assert.isTrue(true)
    })
})
