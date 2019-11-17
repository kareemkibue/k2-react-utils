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
        var XmlJs = require('xml-js');
        console.log({ XmlJs })

        return JSON.parse(
            XmlJs.xml2json(xmlNode, {
                compact: true,
                ignoreComment: true,
                spaces: 4,
            })
        );

    } catch (error) {
        console.log({ error })
    }

}

export { convertXmlToJson };
