const solution = (arr, height) => {
  let answer = 0;
  answer = arr.filter(tall => tall > height)
  return answer.length;
}