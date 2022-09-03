var btnTranslate = document.querySelector('#translateBtn');
var textInput = document.querySelector('#txtInput');
var translatedText = document.querySelector('#translatedTxt');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

var getTranslationURL = function (text) {
    return serverURL + '?' + 'text=' + text;
}

var errorHandler = function (error) {
    console.log("An error occured: ", error);
    alert("something went wrong !!!")
}

var clickHandler = function () {
    let givenInput = textInput.value;
    fetch(getTranslationURL(givenInput))
    .then(response => response.json())
    .then(json => {
        translatedText.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);