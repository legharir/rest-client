reverseTitleCase = inputSentence =>
  inputSentence
    .split(' ')
    .map(
      word =>
        word.slice(0, word.length - 1).toLowerCase() +
        word.slice(word.length - 1).toUpperCase(),
    )
    .join(' ');
