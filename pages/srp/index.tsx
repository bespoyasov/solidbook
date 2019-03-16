import { withRouter } from 'next/router'
import useRedirect from '../../hooks/useRedirect'

function Redirect({ res, router }) {
  useRedirect(res, router)
  return null
}

export default withRouter(Redirect)
