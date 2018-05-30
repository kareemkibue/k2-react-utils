import * as React from 'react';
import styled from 'styled-components';

interface IconWrapperProps {
	icon: string;
	spritePath: string;
	className?: string;
}

/** Stateless Icon Component */
const IconWrapper: React.StatelessComponent<IconWrapperProps> = (props) => (
	<svg className={props.className}>
		<use xlinkHref={`${props.spritePath}#${props.icon}`} />
	</svg>
);

const Icon = styled(IconWrapper)`
	display: inline-block;
	vertical-align: top;
	position: absolute;
	transition: 0.2s ease-in;
`;

export { Icon };
