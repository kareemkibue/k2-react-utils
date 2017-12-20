import * as XmlJs from 'xml-js';

class Parser {

    xmlToJson( xmlNode: any ): any {
        return JSON.parse( XmlJs.xml2json( xmlNode, {
            compact: true,
            ignoreComment: true,
            spaces: 4
        } ) );
    }
}

export default new Parser();