// import * as XmlJs from 'xml-js';

/**
 * A Parser utility that converts XML<=>JSON built by Nashwaan
 * XML-Js Library - https://github.com/nashwaan/xml-js
 */

// import('xml-js')
//     .then((something) => {
//         console.log(something.something);
//     }).catch((e) => { 
//         console.log(e)
//     });

const convertXmlToJson = (xmlNode: any): any => {

    try {
        const XmlJs = require('xml-js');

        return JSON.parse(
            XmlJs.xml2json(xmlNode, {
                compact: true,
                ignoreComment: true,
                spaces: 4,
            })
        );

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export { convertXmlToJson };
