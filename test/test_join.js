/* eslint-env mocha */
'use strict'
import * as shlex from '../shlex.js'
import { assert } from 'chai'

describe('shlex.join()', () => {
  const posixTestcases = [
    [['ls', '-al', '/'], 'ls -al /'],
    [['rm', '-f', '/Volumes/Macintosh HD'], "rm -f '/Volumes/Macintosh HD'"]
  ]

  it('should join according to POSIX rules', () => {
    posixTestcases.forEach(function (test) {
      const [input, expected] = test

      assert.deepEqual(shlex.join(input), expected)
    })
  })
})
