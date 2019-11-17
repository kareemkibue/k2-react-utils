import { connect as connectReactRedux } from 'react-redux';

/**
 * react-redux connect decorator implementation for Typescript
 * Suppressses @types/react-redux issue when using connect as a decorator
 */
const connect = (mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) => {
    return (target: any) => (connectReactRedux(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export { connect }