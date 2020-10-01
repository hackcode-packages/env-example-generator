import fs from 'fs'

export const Filter: string[] = ['!*.{ts,js,jsx}', 'node_modules/*']

export const extractWordsFrom = (data: string): Array<string> => {
  const regexMatches: RegExpMatchArray = data.match(/process.env.\s*([^\W]*)/gi) || []
  return regexMatches
}

export const extractKeysFrom = (keys: Array<string>) => {
  // trim process.env form everywhere
  keys = keys.map((key) => key.substr(12))

  // remove normal mentions of process.env
  keys = keys.filter((key) => key.length !== 0)

  // remove duplicates
  keys = keys.filter(function (item, pos) {
    return keys.indexOf(item) == pos
  })

  // arrange in increasing order
  keys = keys.sort((a, b) => {
    if (a.length > b.length) {
      return 1
    } else if (a.length < b.length) {
      return -1
    } else {
      return 0
    }
  })

  // return the keys
  return keys
}

export const writeDataToEnv = (keys: Array<string>) => {
  keys.forEach((key) => fs.appendFileSync('.env.example', `${key}=foo\n`))
}
