 const question = [
    {
        question:"Which is largest animal in the world?",
        answer:[
            { text: "Shark" , correct : false},
            { text: "Blue Whale" , correct : true},
            { text: "Elephant" , correct : false},
            { text: "Giraffe" , correct : false},
        ]
    },
    {
        question:"What is the capital of France?",
        answer:[
            { text: "Lyon" , correct : false},
            { text: "Marseille" , correct : false},
            { text: "Paris" , correct : true},
            { text: "Nice" , correct : false},
        ]
    },
    {
        question:"In which year did World War II end?",
        answer:[
            { text: "1943" , correct : false},
            { text: "1955" , correct : false},
            { text: "1954" , correct : false},
            { text: "1945" , correct : true},
        ]
    },
    {
        question:"Which planet is known as the 'Red Planet'?",
        answer:[
            { text: "Mars" , correct : true},
            { text: "Earth" , correct : false},
            { text: "Moon" , correct : false},
            { text: "Sun" , correct : false},
        ]
    }
 ];

 const questionElement =document.getElementById("question");
 const answerButton = document.getElementById ("answer-button");
 const nextButton = document.getElementById ("next-btn");

