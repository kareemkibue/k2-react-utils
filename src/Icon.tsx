import * as React from 'react';

/**
 * Interface for SVG Props
 */
interface IIconProps {
    icon: string
}

/**
 * SVG Icon Reusable Component
 */
export class Icon extends React.Component<IIconProps, {}> {
    props: IIconProps;

    render() {
        return (<svg className="ico" >
            <use xlinkHref={"assets.svg" + this.props.icon}> </use>
        </svg>);
    }
}