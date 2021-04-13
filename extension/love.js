var wordArray = ["love", "Love"]
var extendedWordArray = ["love", "Love", "loved", "loves", "LOVE", "loving", "Loving", "beloved"]


walk(document.body);

function walk(node) 
{
	// I stole this function from panicsteve who stole it from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

  // the current script has to ignore iframes, because the privacy settings of websites break the iframes when you try to run the script.
  if (tagName == 'iframe') {
		break;
	}


	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			love(node.parentElement);
			break;
	}
}

function love(element) {
  var oldHTML = element.innerHTML;

  newHTML = makeLovely(oldHTML);

  element.innerHTML = newHTML;
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

        if (characterMemory.length > 10) {
          characterMemory.shift();
        // console.log(characterMemory.join(""));
				}

        wordArray.forEach(word => {
          var replacement = "<span style='color: red'>" + word + "</span>";

          if (characterMemory.join("").endsWith(word)) {
            // console.log(word)
            // console.log(i)
            // console.log(textArray[i])
            textArray.splice((i - (word.length - 1)), word.length, replacement);
            i = i - (word.length - 1);
            // console.log(i)
            // console.log(textArray[i])
            // return false;
          }
        })

      }
    }
  }

  return textArray.join("");
}

//love();
