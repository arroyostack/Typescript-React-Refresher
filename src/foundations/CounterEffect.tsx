import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [ counter, setcounter ] = useState( 5 );

    // Use ref with generic element avoid TypesCript error. 
    const counterElement = useRef<HTMLHeadingElement>( null );

    const increment = () => {
        // Math.min function will stop counter at maximum value.
        setcounter( previousValue => Math.min( previousValue + 1, MAX_COUNT ) );
    };

    // In this specific case UseLayoutEffect makes sure the element is ready at time on rendering. Btter approach than useEffect. 
    useLayoutEffect( () => {
        if ( counter <= 9 ) return;

        console.log( '%cMax value reached.', 'color: red; background-color: black' );

        // GSAP library animation.

        // gsap.to( counterElement.current, { y: -10, duration: .2, ease: 'ease.out' } )
        //     .then( () => {
        //         gsap.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } );
        //     } );

        // GSAP Timeline as in GSAP documentation. Best practices.
        const tl = gsap.timeline();

        tl.to( counterElement.current, { y: -10, duration: .2, ease: 'ease.out' } );
        tl.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } );


    }, [ counter ] );

    return (
        <>
            <h1 className="project-text-light">Counter Effect</h1>
            <h2 ref={ counterElement }>{ counter }</h2>

            <button onClick={ increment }>+1</button>
        </>
    );
};
