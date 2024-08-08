const printMatches = (matches) => {
    if (matches) {
        console.log("Matches found:")
        for (const match of matches) {
            console.log(match)
        }
    } else {
        console.log("No matches found.")
    }
}
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. JavaScript sequi aut, quos est ipsum eum alias qui incidunt JavaScript ab! Dolorum odit JavaScript atque! JavaScript."
const regexJavascript = /\bJavaScript\b/g
const matches = text.match(regexJavascript)
printMatches(matches)

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text = "My phone number is 123-456-7890. I am 30 years old.";
const regexDigits = /\d/g; // Matches any digit
const matches = text.match(regexDigits)
printMatches(matches)

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text = "This is a Capital Letter."
const regexCapitalLetters = /\b[A-Z]\w+\b/g
const matches = text.match(regexCapitalLetters)
printMatches(matches)

// Task 4: Write a regular expression to match all sequence of one or more digits in a string. Log the matches.
const text = "There are 1 apples, 45 oranges, and 789 bananas."
const regexAllSequneceOneOrMore = /\d+/g
const matches = text.match(regexAllSequneceOneOrMore)
printMatches(matches)

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123)456-7890). Log the captures.
const text = "(123)456-7890"
const regexExtractInfoFromPhoneNumber = /\((\d{3})\)(\d{3})-(\d{4})/
const matches = text.match(regexExtractInfoFromEmail)
printMatches(matches)

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const text = "johndoe@example.com"
const regexExtractInfoFromEmail = /^(\w+)(@\w+\.\w+)$/
const matches = text.match(regexExtractInfoFromEmail)
printMatches(matches)

// Task 7: Write a regular expression to match a word only if is at the beginning of a string. Log the matches.
const text = "This is a sentence. The word is at the beginning."
const regexStartsWithWord = /^This/
const matches = text.match(regexStartsWithWord)
printMatches(matches)

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text = "This is a sentence. The word is at the end"
const regexEndsWithWord = /\bend$/
const matches = text.match(regexEndsWithWord)
printMatches(matches)

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Password123!"
const regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
const isValidPassword = regexForPassword.test(password)
console.log(isValidPassword)

// Task 10 : Write a regular expression to validate a URL. Log whether the URL is valid.
const URL = "https://www.geeksforgeeks.org/"
const regexForURL = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
const isValidURL = regexForURL.test(URL)
console.log(isValidURL)