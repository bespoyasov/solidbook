import { types } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'
import { SaveOnChangeMiddleware } from '../saveOnChange'
import ThemeStateRepository from '~/repository/ThemeStateRepository'

const ThemeModel = types
  .model({
    using: types.enumeration(['light', 'dark'])
  })
  .actions(self => ({
    toggleTheme() {
      self.using = self.using === 'light' ? 'dark' : 'light'
    }
  }))

function createThemeModel(savedState: any) {
  const stateRepository = ThemeStateRepository.instance
  const themeModel = savedState ? ThemeModel.create(savedState) : ThemeModel.create({ using: 'light' })

  const middleware = new SaveOnChangeMiddleware(themeModel, stateRepository, ['toggleTheme'])
  middleware.enable()

  makeInspectable(themeModel)
  return themeModel
}

export default createThemeModel
export { ThemeModel }
