const exploreTree = (child, parent, root) => {
  if (child.length > 0) {
    for (let i in child) {

      const elementSMIL = {
        name: child[i].name,
        parent: parent,
        attributes: child[i].attributes,
        kids: []
      }

      root.push(elementSMIL)
      exploreTree(child[i].children, elementSMIL.name, elementSMIL.kids)
    }
  }
}

export const getAllInfos = (code) => {
  const XMLParser = require('react-xml-parser');
  const xml = new XMLParser().parseFromString(code)
  const root = []

  // console.log(xml)
  exploreTree(xml.children, xml.name, root)
  // console.log(root)

  return root
}
