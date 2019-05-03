export type RouteShape = {
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
  route('/srp', 'Принцип единой ответственности', [
    route('/srp', 'Введение и понятия'),
    route('/srp/in-ideal-world', 'Примеры из идеального мира'),
    route('/srp/in-real-life', 'Примеры из реальной жизни'),
    route('/srp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/srp/antipatterns', 'Антипаттерны и запахи'),
    route('/srp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/ocp', 'Принцип открытости и закрытости', [
    route('/ocp', 'Введение и понятия'),
    route('/ocp/in-ideal-world', 'Примеры из идеального мира'),
    route('/ocp/in-real-life', 'Примеры из реальной жизни'),
    route('/ocp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/ocp/antipatterns', 'Антипаттерны и запахи'),
    route('/ocp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/lsp', 'Принцип подстановки Барбары Лисков', [
    route('/lsp', 'Введение и понятия'),
    route('/lsp/in-ideal-world', 'Примеры из идеального мира'),
    route('/lsp/in-real-life', 'Примеры из реальной жизни'),
    route('/lsp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/lsp/antipatterns', 'Антипаттерны и запахи'),
    route('/lsp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/isp', 'Принцип разделения интерфейса', [
    route('/isp', 'Введение и понятия'),
    route('/isp/in-ideal-world', 'Примеры из идеального мира'),
    route('/isp/in-real-life', 'Примеры из реальной жизни'),
    route('/isp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/isp/antipatterns', 'Антипаттерны и запахи'),
    route('/isp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/dip', 'Принцип инверсии зависимостей', [
    route('/dip', 'Введение и понятия'),
    route('/dip/in-ideal-world', 'Примеры из идеального мира'),
    route('/dip/in-real-life', 'Примеры из реальной жизни'),
    route('/dip/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/dip/antipatterns', 'Антипаттерны и запахи'),
    route('/dip/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/afterwords', 'Заключение')
]
