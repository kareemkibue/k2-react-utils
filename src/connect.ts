// import { connect as connectReactRedux } from 'react-redux';

/**
 * react-redux connect decorator implementation for Typescript
 * Suppresses @types/react-redux issue when using connect as a decorator
 */
const connect = (mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) => {
    try {
        const reactRedux = require('react-redux');

        return (target: any) => (reactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
    } catch (error) {
        // console.error(error)
        return
    }
}


export { connect }