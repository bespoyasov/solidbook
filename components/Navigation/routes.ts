type RouteShape = {
  link: string
  name: string
  section?: string
  subnav?: RouteShape[]
}

const route = (link: string, name: string, section?: string, subnav?: RouteShape[]): RouteShape => ({
  link,
  name,
  section,
  subnav
})

export default [
  route('/', 'Введение'),
  route('/srp/intro', 'Принцип единственной ответственности', 'srp', [
    route('/srp/intro', 'Введение и понятия'),
    route('/srp/in-ideal-world', 'Примеры из идеального мира'),
    route('/srp/in-real-life', 'Примеры из реальной жизни'),
    route('/srp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/srp/antipatterns', 'Антипаттерны'),
    route('/srp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/open-closed/intro', 'Принцип открытости и закрытости', 'open-closed', [
    route('/open-closed/intro', 'Введение и понятия'),
    route('/open-closed/in-ideal-world', 'Примеры из идеального мира'),
    route('/open-closed/in-real-life', 'Примеры из реальной жизни'),
    route('/open-closed/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/open-closed/antipatterns', 'Антипаттерны'),
    route('/open-closed/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/liskov-substitution/intro', 'Принцип подстановки Барбары Лисков', 'liskov-substitution', [
    route('/liskov-substitution/intro', 'Введение и понятия'),
    route('/liskov-substitution/in-ideal-world', 'Примеры из идеального мира'),
    route('/liskov-substitution/in-real-life', 'Примеры из реальной жизни'),
    route('/liskov-substitution/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/liskov-substitution/antipatterns', 'Антипаттерны'),
    route('/liskov-substitution/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/isp/intro', 'Принцип разделения интерфейса', 'isp', [
    route('/isp/intro', 'Введение и понятия'),
    route('/isp/in-ideal-world', 'Примеры из идеального мира'),
    route('/isp/in-real-life', 'Примеры из реальной жизни'),
    route('/isp/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/isp/antipatterns', 'Антипаттерны'),
    route('/isp/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/di/intro', 'Принцип инверсии зависимостей', 'di', [
    route('/di/intro', 'Введение и понятия'),
    route('/di/in-ideal-world', 'Примеры из идеального мира'),
    route('/di/in-real-life', 'Примеры из реальной жизни'),
    route('/di/patterns', 'Шаблоны проектирования и приёмы рефакторинга'),
    route('/di/antipatterns', 'Антипаттерны'),
    route('/di/limits-and-caveats', 'Ограничения и подводные камни')
  ]),
  route('/afterwords', 'Заключение')
]
