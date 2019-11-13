if (top.location != self.location) top.location = self.location;

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const mybuttons = document.getElementById('myButtons');
const currentquestion = document.getElementById('myDiv');
const easysubmit = document.getElementById('easysubmit');
const medsubmit = document.getElementById('medsubmit');
const hardsubmit = document.getElementById('hardsubmit');
const easy = document.getElementById('easy');
const med = document.getElementById('med');
const hard = document.getElementById('hard');
const correctanswer = document.getElementById('correctanswer');
const sidebar = document.getElementById("sidenav")
const big = document.getElementById("big")
const main = document.getElementById("main")

let lastcorrectanswer = '';
let invcorrect;
let correctcounter = 0;
let rand = 0;
let completed = [];
let lastcorrectnumber;


// todo adding ongoing score

const mq = window.matchMedia("(max-width: 600px)");
if (mq.matches) {
    big.style.display = "none";
}
else {

}



easy.onchange = function () {
    big.style.display = "";
    easysubmit.style.display = "";
    medsubmit.style.display = "none";
    hardsubmit.style.display = "none";
    if (mq.matches) {
        sidebar.style.display="none";
        main.style.padding="";
    }
    reset();
    easyquestion();

}

med.onchange = function () {

    big.style.display = "";
    easysubmit.style.display = "none";
    medsubmit.style.display = "";
    hardsubmit.style.display = "none";
    reset();
    medquestion();
    if (mq.matches) {
        sidebar.style.display="none";
        main.style.padding="";
    }
}

hard.onchange = function () {
    big.style.display = "";
    easysubmit.style.display = "none";
    medsubmit.style.display = "none";
    hardsubmit.style.display = "";
    reset();
    hardquestion();
    if (mq.matches) {
        sidebar.style.display="none";
        main.style.padding="";

    }
}

easysubmit.onclick = function () {
    easyquestion();
}
medsubmit.onclick = function () {
    medquestion();
}
hardsubmit.onclick = function () {
    hardquestion();
}

function easyquestion() {

    // todo make into a function
    if (completed.length >= 1) {
        correctanswer.style.display = "";
        correctanswer.innerHTML = 'the correct answer was: ' + lastcorrectanswer;
    }

    correctanswercheck(lastcorrectnumber);

    if (completed.length === 10) {
        mybuttons.style.display = 'none';
        currentquestion.textContent = "you're done! you got a score of " + correctcounter + "/10"
        easysubmit.style.display = "none";
        correctanswer.style.display = "none";
        return;
    }

    // todo make questions an array
    let questionObject = [

        {
            A: "What does HTML stand for?",
            B: "Hyperlink Manager Language",
            C: "Hypertext Markup Language",
            D: "Home Tooling Maker Language",
            E: "Nothing",
            F: "Hypertext Markup Language",
            G: "2",
        },
        {
            A: "What is the largest HTML heading?",
            B: '<h1>',
            C: "<h6>",
            D: "<heading>",
            E: "<head>",
            F: "<h1>",
            G: "1",
        },
        {
            A: "What is the largest HTML heading?",
            B: '<h1>',
            C: "<h6>",
            D: "<heading>",
            E: "<head>",
            F: "<h1>",
            G: "1",
        },
        {
            A: "What is the correct code to make text bold?",
            B: "<bold>",
            C: "<b>",
            D: "<makethetextbold>",
            E: "it's impossible",
            F: "b",
            G: "2",
        },
        {
            A: "What is the correct to make a list that lists the items with numbers?",
            B: "<list>",
            C: "<ul>",
            D: "<dl>",
            E: "<ol>",
            F: 'ol',
            G: "4",
        },
        {
            A: "What is the correct HTML for inserting an image?",
            B: "<img>image.gif</img>",
            C: "<img href=\"image.gif />",
            D: "<image src=\"image.gif\" />",
            E: "<img src=\"image.gif\" />",
            F: '<img src=\"image.gif\"> ',
            G: "4",
        },
        {
            A: "The <title> element must be located inside",
            B: "the <body> element.",
            C: "the <h1> element",
            D: "the <head> element.",
            E: "the <p> element",
            F: 'the <head> element',
            G: "3",

        },
        {
            A: "Where we can use <style> tag",
            B: "just in <head> element",
            C: "just in <body> element",
            D: "in <head> and in <body> elements",
            E: "just in a .css file",
            F: 'just in <head></head> element',
            G: "1",

        },
        {
            A: "Which of the optional table tag used to add a short description above a table",
            B: "description",
            C: "caption",
            D: "title",
            E: "body",
            F: "caption",
            G: "2",
        },
        {
            A: "Which of these tags are invalid?",
            B: "<code>",
            C: "<input>",
            D: "<h7>",
            E: "<small>",
            F: '<h7>',
            G: "3",
        },

        {
            A: "Which is not an HTML attribute?",
            B: "alt",
            C: "id",
            D: "target",
            E: "hidden",
            F: "hidden",
            G: "4",
        },

    ]

    rand = Math.round(Math.random() * questionObject.length);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * questionObject.length);
    }
    next(questionObject[rand]);
    completed.unshift(rand);

};

function medquestion() {

    if (completed.length >= 1) {
        correctanswer.style.display = "";
        correctanswer.innerHTML = 'the correct answer was: ' + lastcorrectanswer;
    }

    correctanswercheck(lastcorrectnumber);

    if (completed.length === 10) {
        mybuttons.style.display = 'none';
        currentquestion.textContent = "you're done! you got a score of " + correctcounter + "/10"
        medsubmit.style.display = "none";
        correctanswer.style.display = "none";
        return;
    }

    let questionObject = [
        {
            A: "What HTML form input should we use to present multiple options, but to select only one?",
            B: "<input type=\"text\">",
            C: "<input type=\"radio\">",
            D: "<input type=\"checkbox\">",
            E: "<input type=\"submit\">",
            F: 'input type=\"radio\"',
            G: "2",
        },
        {
            A: "What is the HTML form input to use to send the information of the form to the server?",
            B: "submit",
            C: "server",
            D: "send",
            E: "mail",
            F: "submit",
            G: "1",
        },
        {
            A: "Which of the following table tags is used to create a table header cells?",
            B: "<td>",
            C: "<tr>",
            D: "<th>",
            E: "<table>",
            F: "th",
            G: "3",
        },
        {
            A: "Which tag indicates a form field where the user can enter large amounts of text.",
            B: '<label>',
            C: '<button>',
            D: '<a>',
            E: '<textarea>',
            F: 'textarea',
            G: '4',
        },
        {
            A: "How is document type initialized in HTML5.?",
            B: '</DOCTYPE HTML>',
            C: '</DOCTYPE>',
            D: '<!DOCTYPE HTML>',
            E: '</DOCTYPE html>',
            F: '!DOCTYPE HTML',
            G: "3",
        },
        {
            A: "Which of the following characters indicate closing of a tag?",
            B: ".",
            C: "/",
            D: "|",
            E: "!",
            F: "/",
            G: "2",
        },
        {
            A: "What is the font-size of the h1 heading tag?",
            B: "3.5 em",
            C: "2.17 em",
            D: "1.5 em",
            E: "2 em",
            F: "2 em",
            G: "4",
        },
        {
            A: "Which of the following attributes is used to add link to any element?",
            B: "link",
            C: "a",
            D: "href",
            E: "to",
            F: "href",
            G: "3",
        },
        {
            A: "What is the purpose of using div tags in HTML?",
            B: "For creating Different styles",
            C: "For adding titles",
            D: "For adding headings",
            E: "For creating different sections",
            F: "For creating different sections.",
            G: "4",
        },
        {
            A: "Which of the following tags is used to add a line-break in HTML?",
            B: "<br>",
            C: "<break>",
            D: "</break>",
            E: "</br>",
            F: "br",
            G: "1",
        },
    ]

    rand = Math.round(Math.random() * questionObject.length);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * questionObject.length);
    }
    next(questionObject[rand]);
    completed.unshift(rand);


};

function hardquestion() {

    if (completed.length >= 1) {
        correctanswer.style.display = "";
        correctanswer.innerHTML = 'the correct answer was: ' + lastcorrectanswer;
    }

    correctanswercheck(lastcorrectnumber);

    if (completed.length === 10) {
        mybuttons.style.display = 'none';
        currentquestion.textContent = "you're done! you got a score of " + correctcounter + "/10"
        hardsubmit.style.display = "none";
        correctanswer.style.display = "none";
        return;
    }


    let questionObject = [
        {
            A: "Which of the following attributes is used to open an hyperlink in new tab?",
            B: "tab",
            C: "href",
            D: "target",
            E: "ref",
            F: "target",
            G: "3",
        },
        {
            A: "Which of the following is the correct way to add background color in HTML?",
            B: "<body color = “green”>",
            C: "<body bg-color = “green”>",
            D: "<body style = “background-color=green”>",
            E: "<body style = “background-color: green;”>",
            F: 'body style = “background-color: green;”',
            G: "4",
        },
        {
            A: "Which tag is used to add an header in HTML5 table?",
            B: "<theader>",
            C: "<h1>",
            D: "<th>",
            E: "<header>",
            F: "th",
            G: "3",
        },
        {
            A: "The default attribute value of \"target\" is _____ in HTML.",
            B: "_self",
            C: "_parent",
            D: "_top",
            E: "_blank",
            F: "_blank",
            G: "4",
        },
        {
            A: "HTML links can be styled using", B: "XML", C: "CSS", D: "PHP", E: "JavaScript", F: "CSS", G: "2",
        },
        {
            A: "Which of the following Style is applied to the H1 heading by default.",
            B: "Bold",
            C: "Underline",
            D: "Bold and Underline",
            E: "none of the above",
            F: "Bold",
            G: "1",
        },
        {
            A: "Default style and color of unvisited link in any browser is",
            B: "Normal and Blue",
            C: "Underlined and Blue",
            D: "Underline and Purple",
            E: "Bold and Purple",
            F: "Underlined and Blue",
            G: "2",
        },
        {
            A: "URL in HTML stands for",
            B: "Uniform Resource Locator",
            C: "Universal Resource Locator",
            D: "Uniform Resource Location",
            E: "Uni Resource Locator",
            F: "Uniform Resource Location",
            G: "3",

        },
        {
            A: "Fundamental blocks in HTML are called",
            B: "HTML Attributes",
            C: "HTML Tags",
            D: "HTML Bodies",
            E: "HTML Elements",
            F: "HTML Tag",
            G: "2",
        },
        {
            A: "What does the <meta> tag do?",
            B: "provides metadata about the HTML document",
            C: "links to itself",
            D: "makes large text",
            E: "creates a button that has the same content and id",
            F: "provides metadata about the HTML document",
            G: "1",
        },
    ]

    rand = Math.round(Math.random() * questionObject.length);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * questionObject.length);
    }
    next(questionObject[rand]);
    completed.unshift(rand);
};

// todo change constrctor to only have quationObject
function next(questionObject) {
    //question, answer1, answer2, answer3, answer4, rightanswer, rightnumber
    var question = questionObject.A
    var answer1 = questionObject.B;
    var answer2 = questionObject.C;
    var answer3 = questionObject.D;
    var answer4 = questionObject.E;
    var rightanswer = questionObject.F;
    var rightnumber = questionObject.G;
    currentquestion.textContent = question;
    option1.nextSibling.textContent = answer1;
    option2.nextSibling.textContent = answer2;
    option3.nextSibling.textContent = answer3;
    option4.nextSibling.textContent = answer4;
    lastcorrectanswer = rightanswer;
    lastcorrectnumber = rightnumber;


}

function correctanswercheck(num) {

    if (option1.checked === true) {
        invcorrect = "1";
    }
    if (option2.checked === true) {
        invcorrect = '2';
    }
    if (option3.checked === true) {
        invcorrect = '3';
    }
    if (option4.checked === true) {
        invcorrect = '4';
    }

    if (invcorrect === num) {
        correctcounter++;
    }

}

function reset() {
    completed = [];
    correctanswer.style.display = "none";
    correctcounter = 0;
    mybuttons.style.display = '';
    lastcorrectanswer = '';
    lastcorrectnumber = 0;
}

