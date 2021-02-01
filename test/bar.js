'use strict';

const { assert } = require('chai');

suite('Bar', () => {
    test('lorem', () => {
        assert.isTrue(false)
    })

    test('ipsum', () => {
        assert.isTrue(true)
    })

    test.skip('skipped', () => {
        assert.isTrue(true)
    })
})
