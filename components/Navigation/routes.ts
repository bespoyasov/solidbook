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
  route('/open-closed', 'Принцип открытости и закрытости', [
    route('/open-closed', 'Введение и понятия'),
    route('/open-closed/in-ideal-world', 'Примеры из идеального мира'),
    route('/open-closed/in-real-life', 'Примеры из реальной жизни'),
    route('/open-closed/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/open-closed/antipatterns', 'Антипаттерны'),
    route('/open-closed/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/liskov-substitution', 'Принцип подстановки Барбары Лисков', [
    route('/liskov-substitution', 'Введение и понятия'),
    route('/liskov-substitution/in-ideal-world', 'Примеры из идеального мира'),
    route('/liskov-substitution/in-real-life', 'Примеры из реальной жизни'),
    route('/liskov-substitution/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/liskov-substitution/antipatterns', 'Антипаттерны'),
    route('/liskov-substitution/limits-and-caveats', 'Ограничения и подводные камни')
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
