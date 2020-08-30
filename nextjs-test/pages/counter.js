import React from 'react';
import Counter from './../components/counter';
import Nav from '../components/nav'

export default function counter() {
    return (
        <>
            <Nav />
            <div>
                <Counter></Counter>
            </div>
        </>
    )
}
