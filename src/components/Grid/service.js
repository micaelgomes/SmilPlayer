export const getAllInfos = (code) => {
  const XMLParser = require('react-xml-parser');
  const xml = new XMLParser().parseFromString(code)
  const arrContentMedia = []

  console.log(xml)

  arrContentMedia.push(xml.getElementsByTagName('img'))
  arrContentMedia.push(xml.getElementsByTagName('video'))
  // arrContentMedia.push(xml.getElementsByTagName('audio'))

  return arrContentMedia
}
