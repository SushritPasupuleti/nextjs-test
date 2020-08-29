import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PersonDetails() {
    const router = useRouter();
    console.log(router.query);

    const [randomUser, setRandomUser] = React.useState();

    const getRandom = () => {
        fetch(`https://randomuser.me/api/`)
          .then(response => response.json()) // parse JSON from request
          .then(resultData => {
            setRandomUser(resultData.results[0].name.first)
          })
    }

    useEffect(() => {
        getRandom()
    }, [])

    return (
        <h1>Yo from {randomUser} Details!</h1>
    )
}