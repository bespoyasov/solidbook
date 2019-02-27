import MainLayout from 'components/layouts/MainLayout'
import Link from 'next/link'

export default () => (
  <MainLayout>
    Hello World.
    <Link href="/about">
      <a>About</a>
    </Link>
  </MainLayout>
)
