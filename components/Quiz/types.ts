import { QuizVariantData } from '../QuizVariant'

export type QuizData = {
  question: string
  completed: boolean
  variants: QuizVariantData[]
}
