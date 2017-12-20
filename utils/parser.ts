import * as XmlJs from 'xml-js';

/**
 * A Parser utility that converts XML<=>JSON built by Nashwaan
 * XML-Js Library - https://github.com/nashwaan/xml-js
 */
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