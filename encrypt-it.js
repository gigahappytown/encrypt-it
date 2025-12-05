(function() {
  "use strict";

   // Sets up event handlers once the window has loaded.

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");

    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncryptClick);

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function handleEncryptClick() {
    const input = document.getElementById("input-text");
    const resultPara = document.getElementById("result");

    const plainText = input.value;
    const cipherText = shiftCipher(plainText);

    resultPara.textContent = cipherText;
  }

  function handleReset() {
    const input = document.getElementById("input-text");
    const resultPara = document.getElementById("result");

    input.value = "";
    resultPara.textContent = "";
  }

   // Returns an encrypted version of the given text, where
   // each letter is shifted alphabetically ahead by 1 letter,
   // and 'z' is shifted to 'a' (creating an alphabetical cycle).
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch < "a" || ch > "z") {
        result += ch;
      } else if (ch === "z") {
        result += "a";
      } else {
        const code = text.charCodeAt(i);
        const nextLetter = String.fromCharCode(code + 1);
        result += nextLetter;
      }
    }
    return result;
  }
})();
