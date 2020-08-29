import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '2rem'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function PersonDetails(props) {
    const classes = useStyles();

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
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    Yo from {randomUser} & {props.randoUser}
                </Typography>
                <h1></h1>
            </CardContent>
        </Card>
    )
}

PersonDetails.getInitialProps = async (ctx) => { //context to persist data from main component definition
    if (!ctx.req) {
        return { randoUser: '' }
    }

    const { query } = ctx;
    console.log("ctx: ", query)
    const getRandom = await
        fetch(`https://randomuser.me/api/`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                return { randoUser: resultData.results[0].name.first + " " + resultData.results[0].name.last }
            })

    return getRandom
}

/// Note
// Hooks based `getRandom` is fired each time the page loads on user side (not on server side on first rended)
// while the InitialProps version of `getRandom` is fired at build time of the page after user requests a page

// randomUser is invisible to a crawler
// randoUser is visible to a crawler
///