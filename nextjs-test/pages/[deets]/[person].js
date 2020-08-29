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

PersonDetails.getInitialProps = async (ctx) => { //context to persist data from main component definition
    const {query} = ctx;
    console.log("ctx: ", query)
    const getRandom = await
        fetch(`https://randomuser.me/api/`)
          .then(response => response.json()) // parse JSON from request
          .then(resultData => {
            return{randoUser :resultData.results[0].name.first + " " + resultData.results[0].name.last}
          })

    return getRandom
}

/// Note
// Hooks based `getRandom` is fired each time the page loads on user side (not on server side on first rended)
// while the InitialProps version of `getRandom` is fired at build time of the page after user requests a page

// randomUser is invisible to a crawler

// randoUser is visible to a crawler
///