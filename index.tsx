import * as React from 'react';
import { connect as connectReactRedux } from 'react-redux';

export function connect(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) {
    return (target: any) => (connectReactRedux(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

interface IContentProps {
    text: string
}

interface ISVGProps {
    icon: string
}

export class Content extends React.Component<IContentProps, {}> {
    props: IContentProps;

    private parseMarkup(rawHtml: string) {
        return { __html: rawHtml };
    }

    render() {
        return (<span dangerouslySetInnerHTML={this.parseMarkup(this.props.text)} >
        </span>);
    }
}

export function classify(classObject: any): string {
    let classList: string = '';

    for (let i in classObject) {
        if (classObject[i] === true)
            classList += i + ' ';
    }

    return classList.trim();
}


export class SVG extends React.Component<ISVGProps, {}> {
    props: ISVGProps;

    render() {
        return (<svg className="ico" >
            <use xlinkHref={"assets.svg" + this.props.icon}> </use>
        </svg>);
    }
}