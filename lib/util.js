export const getRandomIndexs = (count, size) => {
  const arr = [];
  while(arr.length < count){
    const r = Math.floor(Math.random() * size);
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

// TODO refactor Image & Quotes into single function with template
export const getImageCards = (count, data) => {
  const imagesIndexes = getRandomIndexs(count, data.length);
  return imagesIndexes.map(id => {
    const { img, alt, url } = data[id];
    return {
      type: 'image',
      img,
      alt,
      url
    }
  });
}

export const getQuoteCards = (count, data) => {
  const imagesIndexes = getRandomIndexs(count, data.length);
  return imagesIndexes.map(id => {
    const { img, alt, url, title } = data[id];
    return {
      type: id % 2 ? 'quote-top' : 'quote-bottom',
      quote: title,
      img,
      alt,
      url
    }
  });
}