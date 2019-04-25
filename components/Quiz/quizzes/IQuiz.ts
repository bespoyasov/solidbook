import { ReactNode } from 'react'

export interface IQuiz {
  name: string
  question: ReactNode
  variants: IVariant[]
  meta: IMeta
}

export interface IVariant {
  text: ReactNode
  description: ReactNode
}

export interface IMeta {
  correctAnswers: number[]
}
