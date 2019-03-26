type RouteShape = {
  link: string
  name: string
  subnav?: RouteShape[]
}

const route = (link: string, name: string, subnav?: RouteShape[]): RouteShape => ({
  link,
  name,
  subnav
})

export default [
  route('/', 'Введение'),
  route('/srp', 'Принцип единственной ответственности', [
    route('/srp', 'Введение и понятия'),
    route('/srp/in-ideal-world', 'Примеры из идеального мира'),
    route('/srp/in-real-life', 'Примеры из реальной жизни'),
    route('/srp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/srp/antipatterns', 'Антипаттерны'),
    route('/srp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/ocp', 'Принцип открытости и закрытости', [
    route('/ocp', 'Введение и понятия'),
    route('/ocp/in-ideal-world', 'Примеры из идеального мира'),
    route('/ocp/in-real-life', 'Примеры из реальной жизни'),
    route('/ocp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/ocp/antipatterns', 'Антипаттерны'),
    route('/ocp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/lsp', 'Принцип подстановки Барбары Лисков', [
    route('/lsp', 'Введение и понятия'),
    route('/lsp/in-ideal-world', 'Примеры из идеального мира'),
    route('/lsp/in-real-life', 'Примеры из реальной жизни'),
    route('/lsp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/lsp/antipatterns', 'Антипаттерны'),
    route('/lsp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/isp', 'Принцип разделения интерфейса', [
    route('/isp', 'Введение и понятия'),
    route('/isp/in-ideal-world', 'Примеры из идеального мира'),
    route('/isp/in-real-life', 'Примеры из реальной жизни'),
    route('/isp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/isp/antipatterns', 'Антипаттерны'),
    route('/isp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/di', 'Принцип инверсии зависимостей', [
    route('/di', 'Введение и понятия'),
    route('/di/in-ideal-world', 'Примеры из идеального мира'),
    route('/di/in-real-life', 'Примеры из реальной жизни'),
    route('/di/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/di/antipatterns', 'Антипаттерны'),
    route('/di/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/afterwords', 'Заключение')
]
