<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Encrypt-It!</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body class="signupPage">
    <div class="centerWrap">
      <div class="titleWrap">
        <h1 class="pageTitle">Encrypt-It!</h1>
        <h2 class="subtitle">
          Translate any text message into a super-secret cipher!
        </h2>
      </div>

      <div class="card">
        <fieldset class="fieldset">
          <legend class="legend">Text to Encrypt</legend>
          <textarea
            id="input-text"
            rows="10"
            cols="60"
            placeholder="Enter your message to be encrypted here"
          ></textarea>
        </fieldset>

        <fieldset class="fieldset">
          <legend class="legend">Encrypt Options</legend>

          <p class="cipherRow">
            <strong>Cipher Type:</strong>
            <select id="cipher-type" class="select">
              <option value="shift">Shift Cipher</option>
            </select>
          </p>

          <div class="buttonRow">
            <button
              id="encrypt-it"
              class="button signin_button buttonFull"
              type="button"
            >
              Encrypt It!
            </button>
            <button
              id="reset"
              class="button secondaryButton buttonFull"
              type="button"
            >
              Reset
            </button>
          </div>
        </fieldset>

        <div id="result-area" class="resultArea">
          <h2 class="resultTitle">Result:</h2>
          <p id="result" class="resultText"></p>
        </div>
      </div>
    </div>

    <script src="encrypt-it.js"></script>
  </body>
</html>
