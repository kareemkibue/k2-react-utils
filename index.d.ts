/**
 * K2 Utils types
 * React version: 16.2.0
 * TypeScript version: 2.8.1
 */
 
import * as React from 'react';

export function classify(classObject: any):string;

export function connect(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any):any;


export function convertPixelsToRem(pixelValue: string, baseFontSize?:string):string;

interface IIconProps {
    icon: string;
    spritePath:string;
    className?: string;
    
}

export declare class Icon extends React.Component<IIconProps, {}> {}

export declare class Parser{
    xmlToJson: (xmlNode:any)=>{}
}

/* WIP */
export namespace utils{
    
}



/* export { convertPixelsToRem } from './src/fontConverter';
export { classify } from './src/classify';
export { connect } from './src/connect';
export { Content } from './src/Content';
export { SVG } from './src/Svg';
export { Parser } from './src/parser';
 */
