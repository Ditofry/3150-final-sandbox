// This can be used to pull the css from a given page.
// It it meant to be copied and run, verbatim, in browser console
// I tried to just pull CSS from the dom/sources, but css for
// this site is injected at runtime and therefore must be
// pull from script tags programatically.
// I got the idea from https://developer.chrome.com/docs/css-ui/css-in-js

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

