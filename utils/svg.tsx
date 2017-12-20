import * as React from 'react';

interface ISVGProps {
    icon: string
}

/**
 * SVG Icon Reusable Component
 */
export class SVG extends React.Component<ISVGProps, {}> {
    props: ISVGProps;

    render() {
        return (<svg className="ico" >
            <use xlinkHref={"assets.svg" + this.props.icon}> </use>
        </svg>);
    }
}