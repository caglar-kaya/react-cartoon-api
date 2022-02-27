function useRandom(range) {
  const randomNumber = Math.floor(Math.random() * range);
  return randomNumber + 1;
}

export default useRandom;
