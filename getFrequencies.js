const getFrequencies = (nums) => {
  const freqs = new Object();

  for (const num of nums) {
    if (freqs.hasOwnProperty(num)) {
      freqs[num]++;
    } else {
      freqs[num] = 1;
    }
  }

  return freqs;
};

module.exports = getFrequencies;
