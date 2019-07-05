import { types } from 'mobx-state-tree'

const ThemeModel = types
  .model({
    using: types.enumeration(['light', 'dark'])
  })
  .actions(self => ({
    toggleTheme() {
      self.using = self.using === 'light' ? 'dark' : 'light'
    }
  }))

function createThemeModel(using) {
  return ThemeModel.create({ using })
}

export default createThemeModel
export { ThemeModel }
