import { ReactChild, isValidElement } from 'react'
import { isNull } from 'util'

export const TYPES = {
  NULL: 'NULL',
  UNDEFINED: 'UNDEFINED',
  BOOLEAN: 'BOOLEAN',
  STRING: 'STRING',
  ARRAY: 'ARRAY',
  NUMBER: 'NUMBER',
  REACT_ELEMENT_WITH_CHILDREN: 'REACT_ELEMENT_WITH_CHILDREN',
  REACT_ELEMENT_WITHOUT_CHILDREN: 'REACT_ELEMENT_WITHOUT_CHILDREN'
}

export function getType(node: ReactChild) {
  if (isNull(node)) {
    return TYPES.NULL
  } else if (typeof node === 'boolean') {
    return TYPES.BOOLEAN
  } else if (typeof node === 'string') {
    return TYPES.STRING
  } else if (Array.isArray(node)) {
    return TYPES.ARRAY
  } else if (typeof node === 'number') {
    return TYPES.NUMBER
  } else if (isValidElement(node)) {
    if ('children' in node.props) {
      return TYPES.REACT_ELEMENT_WITH_CHILDREN
    } else {
      return TYPES.REACT_ELEMENT_WITHOUT_CHILDREN
    }
  } else {
    return TYPES.UNDEFINED
  }
}
