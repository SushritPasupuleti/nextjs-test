import { useRouter } from 'next/router';

export default function PersonDetails() {
    const router = useRouter();
    console.log(router.query);

    return (
        <h1>Yo from {router.query.deets} Details!</h1>
    )
}