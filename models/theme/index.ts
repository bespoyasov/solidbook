import { types } from 'mobx-state-tree'

const ThemeModel = types
  .model({
    using: types.optional(types.enumeration(['light', 'dark']), 'light')
  })
  .actions(self => ({
    toggleTheme() {
      self.using = self.using === 'light' ? 'dark' : 'light'
    }
  }))

function createThemeModel() {
  return ThemeModel.create()
}

export default createThemeModel
export { ThemeModel }
