import * as React from 'react';

/** Interface for Content Props */
interface IContentProps {
	text: string;
}

/** Content Component with HTML sanitization */
class Content extends React.Component<IContentProps, {}> {
	private parseMarkup(rawHtml: string) {
		return { __html: rawHtml };
	}

	render() {
		const { text } = this.props;
		return <span dangerouslySetInnerHTML={this.parseMarkup(text)} />;
	}
}

export { Content };
