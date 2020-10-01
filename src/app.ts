#!/usr/bin/env node

import fs from 'fs'
import recursive from 'recursive-readdir'

/** include auxillary functions */
import { Filter, extractWordsFrom, extractKeysFrom, writeDataToEnv } from './aux'

/** main function runner */
const worker = async () => {
  const files = await recursive('./', Filter)
  let words: Array<string> = []
  for (let i = 0; i < files.length; i += 1) {
    const data = await fs.readFileSync(files[i], 'utf8')
    extractWordsFrom(data).forEach((word) => words.push(word))
  }
  const keys: Array<string> = extractKeysFrom(words)
  writeDataToEnv(keys)
}

/** run */
worker()
