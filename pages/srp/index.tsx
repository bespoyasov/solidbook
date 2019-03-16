import { useEffect } from 'react'
import Router from 'next/router'

function useRedirect(res) {
  useEffect(() => {
    if (res) {
      res.writeHead(302, {
        Location: '/srp/intro'
      })
      res.end()
    } else {
      Router.push('/srp/intro')
    }
  })
}

export default function Redirect({ res }) {
  useRedirect(res)
  return null
}
