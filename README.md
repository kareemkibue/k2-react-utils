# k2-react-utils

[![Build Status](https://travis-ci.org/kareemkibue/k2-react-utils.svg?branch=master)](https://travis-ci.org/kareemkibue/k2-react-utils)
[![Coverage Status](https://coveralls.io/repos/github/kareemkibue/k2-react-utils/badge.svg?branch=master)](https://coveralls.io/github/kareemkibue/k2-react-utils?branch=master)

A collection of standalone ES6 ReactJS utilities and hooks, written in TypeScript and transpiled to and bundled in ES5.

## Table of Contents
<!-- - [Problem Statement](#problem-statement)-->
- [Setup](#setup)
- [Documentation](#documentation)
- [Development](#development)
<!-- - [Changelog](#Changelog) -->

## Setup
This ES5 module is distributed via [npm](https://www.npmjs.com/package/k2-react-utils) and should be installed as a production dependency.

Using _yarn_ (preferred)
```
yarn add -E k2-react-utils
```

or via _npm_
```
npm i -S -E k2-react-utils
```

### `peerDependencies`
- [`react`](https://github.com/facebook/react)
    - `react@16.8.0+` would be required to use either `useBrowserStorage`, `useViewport` or `useScroll` hooks.
- [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom)

### `optionalDependencies`
- [`react-redux`](https://github.com/reduxjs/react-redux)
- [`xml-js`](https://github.com/nashwaan/xml-js) 

Type definitions come bundled in.

## Documentation 

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

const Post: React.FunctionComponent<{}>=()=>{
    const stringifiedMarkup:string = "<p>A Lion from Lannisport, and the sheep from the North</p>";

    return <Content text={stringifiedMarkup} />;  // returns a DOM node
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

const MyComponent: React.FunctionComponent<{}>=()=>{
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

A re-implementation of `react-redux`'s connect which suppresses `@types/react-redux` issues when using `connect` as a decorator to connect class components in TypeScript 2/3.

**Dependencies:** `react`, `react-dom`, `react-redux`

See `connect`'s parameters here: https://react-redux.js.org/api/connect#connect-parameters

*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { connect } from 'k2-react-utils';
import { IAppState, ILocale } from './models'; 

interface IStateProps{
    locale: ILocale
}

@connect((state: IAppState)=>({
    locale: state.locale
}))
class MyComponent: React.Component<IStateProps>{
    render(){
        const {locale}=this.props;
        return <div>{locale.region}<div/>;
    }
}
```

*Alternatives*
- With [`react-redux@7.0.0`](https://www.npmjs.com/package/react-redux) comes the [`useSelector`](https://react-redux.js.org/next/api/hooks#useselector) hook which with less effort connect to your `redux` store. 
- The `@connect` util would be ideal when working with stateful class components that would need to be connected to the store.

----

### `fontUnitConverter` (convertPixelsToRem, convertPixelsToEm) - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/fontUnitConverter.tsx)

A utility that converts pixels to rem/em units.

**Dependencies:** none

Paramters | Type | Description
---|---|---
pixelValue | string (required) | Value to be converted into em/rem unitls
baseFontSize | string (optional) - default '16px' | root pixel value, set on the `<html>` or `<body>` tag


*Usage*
```ts
// font-settings 
import { convertPixelsToRem, convertPixelsToEm } from 'k2-react-utils';

// either 
const fontSizes = {
    f16: convertPixelsToRem('16px', '10px');
    f20: convertPixelsToRem('20px', '10px');
};

// or for ems
const fontSizes = {
    f16: convertPixelsToEm('16px');
    f18: convertPixelsToEm('18px');
};

// Styled Component
import styled from 'styled-components';
import { fontSizes } from './fontSettings';

const MyComponent = styled`
    font-size: ${fontSizes.f16}; // DOM output => font-size: 1.6rem;
`;

```

---


### `hostEnv` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/hostEnv.ts)

A util that returns an object denoting the current `hostname` and a boolean value, `isLocal`.

**Dependencies:** none

Paramters | Type | Description
---|---|---
host | string (optional), default `window.location.host` | -


*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { hostEnv } from 'k2-react-utils';

const MyComponent: React.FunctionComponent<{}>=()=>{
    React.useEffect(()=>{        
        window.fetch(getUrl());
    },[])

    const getUrl = (): string =>{
        if (hostEnv.isLocal){
            return 'http//dev.somesite.com/api/people'
        }
        else if (hostEnv.host === "uat1.somesite.com"){
            return 'http//uat.somesite.com/api/people';
        }

        return '/api/people'
    }

    return <div/>; 
}
```

*Alternatives*
- Consider using client-side environment variables [configurable](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5) via an `.env` file.

---

### `convertXmlToJson` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/parser.ts)

A function that converts xml into json.

**Dependencies:** [xml-js](https://github.com/nashwaan/xml-js)

Parameters | Type | Description
---|---|---
xmlNode | xml (required) | - 

*Usage*
```ts
import { convertXmlToJson } from 'k2-react-utils';

const xmlNode = `<xml>
    <title>Aerys</title>
</xml>`

convertXmlToJson(xmlNode); 
```

----

### `useBrowserStorage` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/useBrowserStorage.ts)

A hook that performs getting, setting and clearing of values to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

**Dependencies:** `react`, `react-dom`

Parameters | Type | Description
---|---|---
storageType | 'LOCAL' \| 'SESSION' (required) | context, point to localStorage, or sessionStorage
key | string (required) | property name to used in either local or session storage


*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { useEffect } from 'react';
import { useBrowserStorage } from 'k2-react-utils';

const MyComponent: React.FunctionComponent<{}>=()=>{
    const [isUndead, setIsUndead, clearIsUndead ] = useBrowserStorage<boolean>('SESSION', 'isUndead');

    useEffect(()=>{
        setIsUndead(false);

        ()=>{
            clearIsUndead();
        }
    },[])

    return <div>Xhoan Daxos is {isUndead}</div>;
}
```

----

<!--


### `useDevice` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/useDevice.ts)

A hook that .

**Dependencies:** `react`, `react-dom`


*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { useEffect } from 'react';
import { useDevice } from 'k2-react-utils';

const MyComponent: React.FunctionComponent<{}>=()=>{
    const { browser, version, platform } = useDevice();

    useEffect(()=>{
        setIsUndead(false);

        ()=>{
            clearIsUndead();
        }
    },[])

    return <div>Daxos is {isUndead}</div>;
}
-->


### `useScroll` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/useScroll.ts)

A hook that returns the y-position on scroll.

**Dependencies:** `react`, `react-dom`

*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { useScroll } from 'k2-react-utils';

const MyComponent: React.FunctionComponent<{}>=()=>{
    const { verticalScrollPosition } = useScroll();

    return <div>Vertical scroll position {verticalScrollPosition}</div>;
}

```

-----

### `useViewport` - [source](https://github.com/kareemkibue/k2-react-utils/blob/master/src/useViewport.ts)

A hook that returns the current viewport's width and height.

**Dependencies:** `react`, `react-dom`

*Usage*
```tsx
import * as React from 'react'; // standard TypeScript syntax
import { useViewport } from 'k2-react-utils';

const MyComponent: React.FunctionComponent<{}>=()=>{
    const { viewportWidth, viewportHeight, documentHeight } = useViewport();

    return <div>
        width: {viewportWidth}, 
        height: {viewportHeight},
        documentHeight: {documentHeight},
    </div>;
}
```

----


## Development
- Run `yarn` on the root of the repository.
- Run `yarn start` to start the project.
- Run `yarn test:watch` to ammend tests.

<!--
## Changelog

Version | Log
---|---
0.12.0 | - Update build<br/>- Deprecate `<Icon/>` util component
0.11.0 | - Add `getEnvHost` util
0.5.0 | - Update folder structure,<br/>- Update package name on NPM
-->