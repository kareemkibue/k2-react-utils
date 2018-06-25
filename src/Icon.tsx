import * as React from 'react';
import styled from 'styled-components';

interface IconProps {
	icon: string;
	spritePath?: string;
	className?: string;
}

/** Stateless Icon Component */
const IconWrapper: React.StatelessComponent<IconProps> = (props) => {
	const { className, icon, spritePath = '' } = props;

	return (
		<svg className={className}>
			<use xlinkHref={`${spritePath}#${icon}`} />
		</svg>
	);
};

const Icon = styled(IconWrapper)`
	display: inline-block;
	vertical-align: top;
	position: absolute;
	transition: 0.2s ease-in;
`;

export { Icon, IconWrapper, IconProps };
