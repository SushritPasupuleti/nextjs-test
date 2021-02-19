import { useRouter } from 'next/router';

const Number = () => {
  const router = useRouter()
  const { number } = router.query

  return (
    <>
      <h1>Num: {number**2}</h1>
    </>
  )
}

export default Number