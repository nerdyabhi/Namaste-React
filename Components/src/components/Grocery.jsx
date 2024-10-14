const Grocery = ()=>{
    return (
        <>
            <h1>Guess Who's studying ? dynamic routing?.... You ofc..</h1>
        </>
    )
}

export default Grocery;


/**
 * Lazy loading or Dynamic routing or anything like that really helps people to
 * reduce the bundle size and not get the app bloat
 * it's okay to chunk your app and split your code for different feature such that
 * Each feature is loaded whenever required.
 * It's called lazy loading (just like me it'll work only if you'll ask it to.)
 */

/**
 * Is Done using lazy keyword from react 
 * import the module using lazy keyword and wrap the component wherever you're using with 
 * suspense keyword.
 */