import MainLayout from 'components/layouts/MainLayout'
// import VisuallyHidden from 'components/VisuallyHidden'
import Abbr from 'components/Formatters/Abbr'
import Text from 'texts/00_preface/index.mdx'

export default () => (
  <MainLayout title="Введение">
    <h1>О чём это</h1>

      <Text  />


    <section>
      <h2>
        Почему <Abbr>ООП</Abbr>?
      </h2>
      <p>
        <Abbr>ООП</Abbr> вызывает споры.{' '}
      </p>
      <p>
        Война парадигм может создать впечатление, что подход <Abbr>ООП</Abbr> устарел и плох. Но как минимум в одном он
        хорош — с ним проще выделять сущности и проводить параллели с частями системы из реальности, которую мы
        собираемся моделировать.
      </p>
      <p>
        Понятия из <Abbr>ООП</Abbr> помогают проектировать систему на языке, более близком к языку бизнес-правил. Это
        снижает вероятность ошибки при переводе с «языка бизнеса» на «язык разработки» и наоборот.
      </p>
    </section>

    <section>
      <h2>О каких принципах пойдёт речь?</h2>
      <p>Мы рассмотрим 5 принципов, а именно:</p>
      <ul>
        <li>принцип единой ответственности (single responsibility principle);</li>
        <li>открытости и закрытости (open/closed principle);</li>
        <li>подстановки Барбары Лисков (Liskov substitution principle);</li>
        <li>разделения интерфейса (interface segregation principle);</li>
        <li>инверсии зависимостей (dependency inversion principle).</li>
      </ul>

      <p>
        Каждый из них — это лишь рекомендация, все они имеют область и границы применения. Но чтобы увидеть эти границы,
        необходимо понять, в чём польза и издержки каждого.
      </p>

      <p>
        Зная пользу и ограничения, можно оценить, насколько конкретный принцип помогает решить задачу, стоящую перед
        вами.
      </p>
    </section>

    <section>
      <h2>Какой план?</h2>
      <p>Каждый раздел будет описывать один из принципов и показывать, как им пользоваться в повседневной работе.</p>
      <p>
        Мы будем рассматривать примеры на TypeScript, так как в нём есть понятия, которые нам пригодятся по ходу
        повествования. Если вы чувствуете себя неуверенно с TypeScript, попробуйте прочесть книгу{' '}
        <a href="https://basarat.gitbooks.io/typescript/">TypeScript Deep Dive</a> — она содержит все концепции, которые
        мы будем использовать.
      </p>
    </section>

    <section>
      <h2>Материалы к разделу</h2>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
            Объектно-ориентированное программирование
          </a>
        </li>
        <li>
          <a href="https://wiki.lesswrong.com/wiki/The_map_is_not_the_territory">Карта ≠ территория</a>
        </li>
        <li>
          <a href="https://basarat.gitbooks.io/typescript/">TypeScript Deep Dive</a>
        </li>
      </ul>
    </section>
  </MainLayout>
)
