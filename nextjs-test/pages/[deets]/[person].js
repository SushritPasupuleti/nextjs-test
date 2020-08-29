import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PersonDetails(props) {
    const router = useRouter();
    console.log(router.query);
    console.log("props:", props.randoUser)

    const [randomUser, setRandomUser] = React.useState();

    const getRandom = () => {
        fetch(`https://randomuser.me/api/`)
          .then(response => response.json()) // parse JSON from request
          .then(resultData => {
            setRandomUser(resultData.results[0].name.first + " " + resultData.results[0].name.last)
          })
    }

    useEffect(() => {
        getRandom()
    }, [])

    return (
    <h1>Yo from {randomUser} & {props.randoUser}</h1>
    )
}

PersonDetails.getInitialProps = async () => {
    const getRandom = await
        fetch(`https://randomuser.me/api/`)
          .then(response => response.json()) // parse JSON from request
          .then(resultData => {
            return{randoUser :resultData.results[0].name.first + " " + resultData.results[0].name.last}
          })

    return await getRandom
}