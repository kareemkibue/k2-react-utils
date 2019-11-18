import * as React from 'react';

interface IProps {
	text: string;
}

/** Content Component with HTML sanitization */
const Content: React.FunctionComponent<IProps> = (props) => {
	const { text } = props;
	const _parseMarkup = (rawHtml: string) => {
		return { __html: rawHtml };
	};

	return <span dangerouslySetInnerHTML={_parseMarkup(text)} />;
};

export { Content, IProps as IContentProps };
