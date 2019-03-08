import Prism from 'prismjs'
import { useEffect } from 'react'
import 'prismjs/themes/prism.css'

function usePrism() {
  useEffect(() => {
    Prism.highlightAll()
  })
}

export default usePrism
