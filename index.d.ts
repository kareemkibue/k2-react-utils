/**
 * K2 Utils types
 * React version: 16.2.0
 * TypeScript version: 2.8.1
 */

import * as React from 'react';

export function classify(classObject: any): string;

export function connect(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): any;

export function convertPixelsToRem(pixelValue: string, baseFontSize?: string): string;

export function convertPixelsToEm(pixelValue: string, baseFontSize?: string): string;

interface IIconProps {
	icon: string;
	spritePath?: string;
	className?: string;
}

export declare class Icon extends React.Component<IIconProps, {}> {}

interface IContentProps {
	text: string;
}

export declare class Content extends React.Component<IContentProps, {}> {}

export declare class Parser {
	xmlToJson: (xmlNode: any) => {};
}

/* WIP */
export namespace utils {

}
