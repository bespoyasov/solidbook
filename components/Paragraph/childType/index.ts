import { isValidElement, ReactNode } from 'react'

export enum TYPES {
  NULL,
  UNDEFINED,
  BOOLEAN,
  STRING,
  ARRAY,
  NUMBER,
  REACT_ELEMENT_WITH_CHILDREN,
  REACT_ELEMENT_WITHOUT_CHILDREN
}

export function getType(node: ReactNode) {
  if (node === null) {
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
    if (node.props.children != null) {
      return TYPES.REACT_ELEMENT_WITH_CHILDREN
    } else {
      return TYPES.REACT_ELEMENT_WITHOUT_CHILDREN
    }
  } else {
    return TYPES.UNDEFINED
  }
}
