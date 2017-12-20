import { classify } from './utils/classify';
import { connect } from './utils/connect';
import { Content } from './utils/context';
import { SVG } from './utils/svg';
import Parser from './utils/parser';

const exports: any = {
    Content,
    SVG,
    classify,
    connect,
    Parser
}

export { exports };

export default exports;