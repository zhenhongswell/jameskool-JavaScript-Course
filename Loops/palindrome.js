const str = "abcbba";

let isPalindrome = true;
let i = 0;
const str_last_index = str.length - 1;

while (i < str.length) {
  const start_char = str[i];
  const end_char = str[str_last_index - i];
  if (start_char !== end_char) {
    isPalindrome = false;
    break;
  }
  i++;
}

if (isPalindrome) {
  console.log("is palindrome");
} else {
  console.log("is not palindrome");
}
