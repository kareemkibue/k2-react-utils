import * as React from 'react';

/**
 * Interface for Content Props
 */
interface IContentProps {
    text: string
}

/**
 * Content Component with HTML sanitization
 */
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
