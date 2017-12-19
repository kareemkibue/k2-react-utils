import * as React from 'react';
import { connect as connectReactRedux } from 'react-redux';

export function connect(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any) {
    return (target: any) => (connectReactRedux(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export class Content extends React.Component<{ text: string }, {}> {
    props;

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


export class SVG extends React.Component<{ icon: string }, {}> {
    props;

    render() {
        return (<svg className="ico" >
            <use xlinkHref={"assets.svg" + this.props.icon}> </use>
        </svg>);
    }
}