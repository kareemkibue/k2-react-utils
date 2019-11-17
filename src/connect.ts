import { connect as connectReactRedux } from 'react-redux';

/**
 * React-Redux Connect implementation for Typescript
 */
const connect = (mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) => {
    return (target: any) => (connectReactRedux(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export { connect }