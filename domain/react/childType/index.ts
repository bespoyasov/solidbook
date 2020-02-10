import { isValidElement, ReactNode } from 'react'
import { isNull } from 'util'

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
  if (isNull(node)) {
    return TYPES.NULL
  } if (typeof node === 'boolean') {
    return TYPES.BOOLEAN
  } if (typeof node === 'string') {
    return TYPES.STRING
  } if (Array.isArray(node)) {
    return TYPES.ARRAY
  } if (typeof node === 'number') {
    return TYPES.NUMBER
  } if (isValidElement(node)) {
    if (node.props.children != null) {
      return TYPES.REACT_ELEMENT_WITH_CHILDREN
    } 
      return TYPES.REACT_ELEMENT_WITHOUT_CHILDREN
    
  } 
    return TYPES.UNDEFINED
  
}
