const memesorting = meme => {
  const strippedMeme = meme.replace(/\s/g, '').toLowerCase();

  let bug = 'bug';
  let boom = 'boom';
  let edits = 'edits';

  for (let i = 0; i < strippedMeme.length; i++) {
    switch (strippedMeme[i]) {
      case bug[0]:
        if (strippedMeme[i] === 'b') {
          boom = boom.substring(1);
        }
        bug = bug.substring(1);
        break;
      case boom[0]:
        boom = boom.substring(1);
        break;
      case edits[0]:
        edits = edits.substring(1);
        break;
      default:
        break;
    }
    if (bug.length < 1) {
      return 'Roma';
    } else if (boom.length < 1) {
      return 'Maxim';
    } else if (edits.length < 1) {
      return 'Danik'
    }
  }
  return 'Vlad';
};

