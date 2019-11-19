# k2-react-utils

[![Build Status](https://travis-ci.org/kareemkibue/k2-react-utils.svg?branch=master)](https://travis-ci.org/kareemkibue/k2-react-utils)
[![Coverage Status](https://coveralls.io/repos/github/kareemkibue/k2-react-utils/badge.svg?branch=master)](https://coveralls.io/github/kareemkibue/k2-react-utils?branch=master)

A collection of standalone ES6 ReactJS utilities and hooks, written in TypeScript and transpiled to and bundled in ES5.

## Table of Contents
<!-- - [Problem Statement](#problem-statement)-->
- [Setup](#setup)
- [Documentation (API)](#documentation-(api))
- [Contributing](#contributing)
- [Changelog](#Changelog)


## Setup
This ES5 module is distributed via [npm](https://www.npmjs.com/package/k2-react-utils) and should be installed as a production dependency.

Using _yarn_ (recommended)
```
yarn add -E k2-react-utils
```

or via _npm_
```
npm i -S -E k2-react-utils
```

### `peerDependencies`
- [`react`](https://github.com/facebook/react)
    - `react@16.8.0+` would have to be installed if any of the hooks are used
- [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom)

### `optionalDependencies`
- [`react-redux`](https://github.com/reduxjs/react-redux)
- [`xml-js`](https://github.com/nashwaan/xml-js) 

Type definitions come bundled in.

## Documentation (API)

`k2-react-utils` barrels (re-exports) the following utils and hooks as named exports:

### `<Content/>` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/Content.tsx)

A component that performs HTML sanitization.

**Dependencies:** `react`, `react-dom`

Props | Type | Description
---|---|---
text | string (required) | Returns a DOM node with a `<span/>` wrapper


*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { Content } from 'k2-react-utils';

const Post: React.FunctionCompoennt<{}>=()=>{
    const stringifiedMarkup:string = "<p>A Lion from Lannisport, and the sheep from the North</p>";

    return <Content text={stringifiedMarkup} />;
}
```

---

### `classify` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/classify.ts)

A function that takes in an object of classes along with conditionals, and returns a string of classnames

**Dependencies:** none

Parameters | Type | Description
---|---|---
classObject | Object (required) | - 


*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { classify } from 'k2-react-utils';

const Post: React.FunctionCompoennt<{}>=()=>{
    const classNames = classify({
        'js-active': true,
        'js-focus': false
    }); // returns "js-active"

    return <div className={classNames} />;
}
```

*Alternatives*
- This util would be helpful when to working imperively with CSS classes, example when authoring libraries. [`styled-components`](https://www.styled-components.com/) is a much preferred alternative when styling React components.

---

### `connect` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/connect.ts)

A re-implementation of `react-redux`'s connect which suppressses `@types/react-redux` issues when using `connect` as a decorator to connect class components in TypeScript 2/3.

**Dependencies:** `react`, `react-dom`, `react-redux`

See `connect`'s parameters here: https://react-redux.js.org/api/connect#connect-parameters

*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { connect } from 'k2-react-utils';
import { IAppState, ILocale } from 'models'; // your local store, aliased

interface IStateProps{
    locale: ILocale
}

@connect((state: IAppState)=>({
    locale: state.locale
}))
class Header: React.Component<IStateProps>{
    render(){
        const {locale}=this.props;
        return <header>{locale.region}<header/>;
    }
}
```

*Alternatives*
- With [`react-redux@7.0.0`](https://www.npmjs.com/package/react-redux) comes the [`useSelector`](https://react-redux.js.org/next/api/hooks#useselector) hook which with less effort connect to your `redux` store. 
- The `@connect` util would be ideal when working with stateful class components that would need to be connected to the store.


## Contributing
- Run `yarn` on the root of the repository.
- Run `yarn start` to start the project.
- Run `yarn test:watch` to ammend tests.

## Changelog

Version | Log
---|---
0.12.0 | - Update build<br/>- Deprecate `<Icon/>` util component
0.11.0 | - Add `getEnvHost` util
0.5.0 | - Update folder structure,<br/>- Update package name on NPM
