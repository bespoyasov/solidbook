import { useEffect } from 'react'
import Router from 'next/router'

const redirects = [
  { from: '/srp', to: '/srp/intro' },
  { from: '/open-closed', to: '/open-closed/intro' },
  { from: '/liskov-substitution', to: '/liskov-substitution/intro' },
  { from: '/isp', to: '/isp/intro' },
  { from: '/di', to: '/di/intro' }
]

export default function useRedirect(res, router) {
  const { pathname } = router
  const redirect = redirects.filter(({ from }) => from === pathname)[0]

  useEffect(() => {
    if (res) {
      res.writeHead(302, {
        Location: redirect.to
      })
      res.end()
    } else {
      Router.push(redirect.to)
    }
  })
}
