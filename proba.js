function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(ltr => vowels.includes(ltr)).length;
    console.log(str) 
  }
findVowels('case')  
