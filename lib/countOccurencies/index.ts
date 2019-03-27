export function countOccurencies(regexp: RegExp, source: string): number {
  return (source.match(regexp) || []).length
}
