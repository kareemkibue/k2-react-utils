/**
 * A Parser utility that converts XML<=>JSON built by Nashwaan
 * XML-Js Library - https://github.com/nashwaan/xml-js
 */
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
    }
}

export { convertXmlToJson };
