// 1. Starting with the reducer => Making an initial state tree 
// I know from Postman that it looks like: 
 "results": [
        {
            "category": "Sports",
            "type": "multiple",
            "difficulty": "medium",
            "question": "At which bridge does the annual Oxford and Cambridge boat race start?",
            "correct_answer": "Putney",
            "incorrect_answers": [
                "Hammersmith",
                "Vauxhall ",
                "Battersea"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the French word for &quot;hat&quot;?",
            "correct_answer": "Chapeau",
            "incorrect_answers": [
                "Bonnet",
                " &Eacute;charpe",
                " Casque"
            ]
        },
        {
            "category": "Celebrities",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When was Elvis Presley born?",
            "correct_answer": "January 8, 1935",
            "incorrect_answers": [
                "December 13, 1931",
                "July 18, 1940",
                "April 17, 1938"
            ]
        },
        {
            "category": "Science & Nature",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The core of the Sun can reach which temperature?",
            "correct_answer": "27&deg; Million F (15&deg; Million C)",
            "incorrect_answers": [
                "938,000&deg; F (521093.3&deg; C)",
                "8&deg; Billion F (&deg;4.4 Billion C)",
                "Absolute Zero (Both F and C)"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Daft Punk originated in France.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        }
    ]
}
2. Create store with redux, import Provider to wrap the App in, and provide it with the store 

3. Create the structure of the page App will render => a header, and a trivia question from state 

4. Connect the trivia card to the state using connect from react-redux

5. create loading screen for trivia card using JSX in the return and make sure state is arriving to the component using that 

6. Set up API call! Instantiate fetchTrivia in an actions folder and follow the flow 

7. Once a response is received - set them into state