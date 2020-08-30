import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

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
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});

const useCounter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        })
    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        })
    const reset = () =>
        dispatch({
            type: 'RESET',
        })
    return { count, increment, decrement, reset }
}

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter()
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    Count: {count}
                </Typography>
                <IconButton color="secondary" onClick={increment}>
                    <PlusOneIcon></PlusOneIcon>
                </IconButton>
                <IconButton color="primary" onClick={decrement}>
                    <ExposureNeg1Icon></ExposureNeg1Icon>
                </IconButton>
                <Button  variant="outlined" onClick={reset}>Reset</Button>
            </CardContent>
        </Card>
    )
}

export default Counter