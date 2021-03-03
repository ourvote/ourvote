module.exports = {
  parseCode: (encodedCode) => {
    const replacements = {
      "%24": "$",
      "%26": "&",
      "%2B": "+",
      "%2C": ",",
      "%2F": "/",
      "%3A": ":",
      "%3B": ";",
      "%3D": "=",
      "%3F": "?",
      "%40": "@"
    }
    const toReplaceArray = Object.keys(replacements);

    for (let i = 0; i < toReplaceArray.length; i++) {
      while (encodedCode.includes(toReplaceArray[i])) {
        encodedCode = encodedCode.replace(toReplaceArray[i], replacements[toReplaceArray[i]]);
      }
    }

    return encodedCode; 
  },

  encodeCode: (decodedCode) => {
    const replacements = {
      "$" : "%24",
      "&" : "%26",
      "+" : "%2B",
      "," : "%2C",
      "/" : "%2F",
      ":" : "%3A",
      ";" : "%3B",
      "=" : "%3D",
      "?" : "%3F",
      "@" : "%40"
    }
    const toReplaceArray = Object.keys(replacements);

    for (let i = 0; i < toReplaceArray.length; i++) {
      while (decodedCode.includes(toReplaceArray[i])) {
        decodedCode = decodedCode.replace(toReplaceArray[i], replacements[toReplaceArray[i]]);
      }
    }

    return decodedCode; 
  },

  constructURI: (options, skip) => {
    const paramArray = Object.entries(options);
    let paramString = '';
  
    for (let i = 0; i < paramArray.length; i++) {
      let [key, value] = paramArray[i];
  
      if (skip && skip.includes(key)) continue;
      // adds the key and '=' for every member of options not in the skip array
      paramString += (key + '=');
      // adds the value and '&' for every member of options not in the skip array
      paramString += (value + '&');
    }
  
    // removes the '&' that was just placed at the end of the string
    if (paramString[paramString.length - 1] === '&') {
      paramString = paramString.slice(0, -1);
    }
  
    return paramString;
  }

}