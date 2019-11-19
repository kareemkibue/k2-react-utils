let reactRedux: any;

try {
    reactRedux = require('react-redux')
} catch (er) {
    reactRedux = null
}

/**
 * react-redux connect decorator implementation for Typescript
 * suppresses @types/react-redux issue when using connect as a decorator
 */
const connect = (mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) => {
    if (reactRedux) {
        return (target: any) => (reactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
    }

    return;
}


export { connect }