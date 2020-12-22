export const setSEOkeywords = (arr, products) => {
  products.map((product) =>
    arr.push({
      id: product.id,
      words: product.seo.description.split(' '),
    })
  );
  return arr;
};

export const searchProducts = (
  customerWords,
  keywords,
  setSearchResults,
  searchResults
) => {
  let toLowerCase = customerWords.toLowerCase();

  keywords.map((arr) =>
    arr.words.forEach((keyword) => {
      if (
        keyword === toLowerCase &&
        !searchResults.some((el) => el === `${arr.id}`)
      ) {
        return setSearchResults((prevState) => [...prevState, arr.id]);
      } else if (toLowerCase === '') {
        return setSearchResults([]);
      }
    })
  );

  if ((toLowerCase = '')) {
    return setSearchResults([]);
  }
};
