export const getRandomIndexs = (count, size) => {
  const arr = [];
  while(arr.length < count){
    const r = Math.floor(Math.random() * size);
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export const getImageCards = (count, data, categoryUrl = null) => {
  const imagesIndexes = getRandomIndexs(count, data.length);
  return imagesIndexes.map(id => {
    const { img, thumb, alt, url = null } = data[id];
    return {
      type: 'image',
      img,
      thumb,
      alt,
      url: url || categoryUrl
    }
  });
}

// @depreciated
export const getQuoteCards = (count, data, categoryUrl = null) => {
  const imagesIndexes = getRandomIndexs(count, data.length);
  return imagesIndexes.map(id => {
    const { img, alt, url = null, title } = data[id];
    return {
      type: id % 2 ? 'quote-top' : 'quote-bottom',
      quote: title,
      img,
      alt,
      url: url || categoryUrl
    }
  });
}

export const getQuoteOnly = (count, data, categoryUrl = null) => {
  const imagesIndexes = getRandomIndexs(count, data.length);
  return imagesIndexes.map(id => {
    const { quote, author } = data[id];
    return {
      type: 'quote',
      quote,
      author,
      url: categoryUrl
    }
  });
}