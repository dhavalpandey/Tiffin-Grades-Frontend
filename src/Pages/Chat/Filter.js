import Filter from "bad-words";

export default function wordFilter(wordToFilter) {
  const filter = new Filter();
  return filter.clean(wordToFilter);
}
