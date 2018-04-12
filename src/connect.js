import { connect as connectReactRedux } from 'react-redux';
/**
 * React-Redux Connect implementation for Typescript
 */
export function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
    return function (target) { return connectReactRedux(mapStateToProps, mapDispatchToProps, mergeProps, options)(target); };
}
//# sourceMappingURL=connect.js.map