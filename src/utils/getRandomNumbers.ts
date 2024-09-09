export default function getRandomNumbers(
  range: number,
  limit: number
): number[] {
  const numbers: Set<number> = new Set<number>()

  while (numbers.size < limit) {
    const randomNum: number = Math.floor(Math.random() * range)
    numbers.add(randomNum)
  }

  return Array.from(numbers)
}
