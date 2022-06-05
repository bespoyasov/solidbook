import { Typografy } from '..'
import { ReactTextNode as TextNode } from '../../textNode'

export function typografTextWithNeighbors(node: string, prevWord?: string, nextWord?: string): string {
  const words: string[] = []

  if (prevWord) words.push(new TextNode(prevWord).lastWord)
  words.push(node)
  if (nextWord) words.push(new TextNode(nextWord).firstWord)

  let typografed = Typografy.instance.transform(words.join(''))

  if (prevWord) {
    let word = new TextNode(prevWord).lastWord
    word = Typografy.instance.transform(word)
    const wordIndex = typografed.indexOf(word)
    typografed = typografed.substring(wordIndex + word.length, typografed.length)
  }

  if (nextWord) {
    let word = new TextNode(nextWord).firstWord
    word = Typografy.instance.transform(word)
    const wordIndex = typografed.indexOf(word)
    typografed = typografed.substring(0, wordIndex)
  }
  return typografed
}
