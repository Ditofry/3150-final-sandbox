const cssString = "";
const styleTags = Array.from(document.getElementsByTagName("style"));

const stringifySheetCSS = (sheet) => {
  const listOfRules = Object.values(sheet.cssRules) || [];
  
  return listOfRules.reduce((output, cssObj) => {
    return output.concat(cssObj?.cssText || "");
  }, "");
}

styleTags.reduce((allCss, styleTag) => {
  return allCss.concat(stringifySheetCSS(styleTag.sheet));
}, "");

