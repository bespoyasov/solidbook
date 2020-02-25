import makeInspectable from 'mobx-devtools-mst'
import { types } from 'mobx-state-tree'

import { SaveOnChangeMiddleware } from '../saveOnChange'
import { ThemeState } from '~/repository/ThemeState'

export const ThemeModel = types
  .model({
    using: types.enumeration(['light', 'dark'])
  })
  .actions(self => ({
    toggleTheme() {
      self.using = self.using === 'light' ? 'dark' : 'light'
    }
  }))

export function createThemeModel(savedState: typeof ThemeModel) {
  const stateRepository = ThemeState.instance
  const themeModel = savedState ? ThemeModel.create(savedState) : ThemeModel.create({ using: 'light' })

  const middleware = new SaveOnChangeMiddleware(themeModel, stateRepository, ['toggleTheme'])
  middleware.enable()

  makeInspectable(themeModel)
  return themeModel
}
