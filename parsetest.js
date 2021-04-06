var rawHTML = '<p>The word "love" can have a variety of related but distinct meanings in different contexts. Many other languages use multiple words to express some of the different concepts that in English are denoted as "love"; one example is the plurality of <a href="/wiki/Greek_words_for_love" title="Greek words for love">Greek words for "love"</a> which includes <i>agape</i> and <i>eros</i>.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup> <a href="/wiki/Cultural_identity" title="Cultural identity">Cultural differences</a> in conceptualizing love thus doubly impede the establishment of a universal definition.<sup id="cite_ref-13" class="reference"><a href="#cite_note-13">[13]</a></sup></p><p>Although the nature or <a href="/wiki/Essence" title="Essence">essence</a> of love is a subject of frequent debate, different aspects of the word can be clarified by determining what <i>isn\'t</i> love (antonyms of "love"). Love as a general expression of positive sentiment (a stronger form of <i>like</i>) is commonly contrasted with <a href="/wiki/Hate" class="mw-redirect" title="Hate">hate</a> (or neutral <a href="/wiki/Apathy" title="Apathy">apathy</a>). As a less-sexual and more-<a href="/wiki/Emotional_intimacy" title="Emotional intimacy">emotionally intimate</a> form of romantic attachment, love is commonly contrasted with <a href="/wiki/Lust" title="Lust">lust</a>. As an interpersonal relationship with romantic overtones, love is sometimes contrasted with <a href="/wiki/Friendship" title="Friendship">friendship</a>, although the word <i>love</i> is often applied to close friendships or platonic love. (Further possible ambiguities come with usages "girlfriend", "boyfriend", "just good friends").</p>';






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
          // console.log(characterMemory)
        }

        // console.log(characterMemory.join(""));

        if (characterMemory.join("") === "love") {
          
          //console.log("yes");

          textArray.splice(i-3, 4, "<span style='color: red'>love</span>")
        }
        if (characterMemory.join("") === "Love") {
          
          //console.log("yes");

          textArray.splice(i-3, 4, "<span style='color: red'>Love</span>")
        }
      }
    }
  }

  return textArray.join("");
}

love();

// var newHTML = handleText(rawHTML);

// console.log(newHTML);