function love() {
  var oldHTML = document.body.innerHTML;

  newHTML = makeLovely(oldHTML);

  document.body.innerHTML = newHTML;
}

function makeLovely(string) {
  var insideTag = false;
  var characterMemory = [];
  var textArray = string.split("");

  for (i = 0; i < textArray.length; i++) {
    var c = textArray[i];

    if (c == "<") {

      insideTag = true;

    } else if (c == ">") {

      insideTag = false;

    } else {
			
      if (!insideTag) {
        characterMemory.push(c);

        if (characterMemory.length > 4) {
          characterMemory.shift();
        // console.log(characterMemory.join(""));
				}

        if (characterMemory.join("") === "love") {
          textArray.splice(i - 3, 4, "<span style='color: red'>love</span>");
        }
				
        if (characterMemory.join("") === "Love") {
          textArray.splice(i - 3, 4, "<span style='color: red'>Love</span>");
        }
      }
    }
  }

  return textArray.join("");
}

love();
