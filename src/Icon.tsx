import * as React from 'react';
import styled from "styled-components";

/**
 * Interface for SVG Props
 */
interface IconWrapperProps {
    icon: string;
    spritePath:string;
    className?: string;
    

}

/**
 * Stateless Icon Component
 */
const IconWrapper = (props: IconWrapperProps) => (
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

export {Icon}