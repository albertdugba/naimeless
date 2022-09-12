import { useGetProfile } from '@features/post/user/api'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserProfile = () => {
  const { user } = useGetProfile()
  const router = useRouter()

//   useEffect(() => {
//     if (!user) {
//       router.push({
//         pathname: '/auth/signin',
//         query: { from: router.pathname },
//       })
//     }
//   }, [router, user])

  return <div>This is a protected route</div>
}
export default UserProfile
