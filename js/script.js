if (top.location != self.location) top.location = self.location;

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var mybuttons = document.getElementById('myButtons');
var currentquestion = document.getElementById('myDiv');
var easysubmit = document.getElementById('easysubmit');
var medsubmit = document.getElementById('medsubmit');
var hardsubmit = document.getElementById('hardsubmit');
var easy = document.getElementById('easy');
var med = document.getElementById('med');
var hard = document.getElementById('hard');
var lastcorrectanswer = '';
var correctanswer = document.getElementById('correctanswer');
var invcorrect;
var correctcounter = 0;
var rand = 0;
var completed = [];
var lastcorrectnumber;


easy.onchange= function () {
    easysubmit.style.display = "";
    medsubmit.style.display = "none";
    hardsubmit.style.display = "none";
    correctcounter = 0;
    completed = [];
    correctanswer.style.display = "none";
    mybuttons.style.display = '';
    lastcorrectanswer = '';
    lastcorrectnumber = 0;
    easyquestion();

}

med.onchange= function () {
    easysubmit.style.display = "none";
    medsubmit.style.display = "";
    hardsubmit.style.display = "none";
    completed = [];
    correctanswer.style.display = "none";
    correctcounter = 0;
    mybuttons.style.display = '';
    lastcorrectanswer = '';
    lastcorrectnumber = 0;
    medquestion();
}

hard.onchange= function () {
    easysubmit.style.display = "none";
    medsubmit.style.display = "none";
    hardsubmit.style.display = "";
    completed = [];
    correctanswer.style.display = "none";
    correctcounter = 0;
    mybuttons.style.display = '';
    lastcorrectanswer = '';
    lastcorrectnumber = 0;
    hardquestion();
}

easysubmit.onclick= function () {
    easyquestion();
}
medsubmit.onclick= function () {
    medquestion();
}
hardsubmit.onclick= function () {
    hardquestion();
}

function easyquestion() {

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


    rand = Math.round(Math.random() * 9);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * 9);
    }
    if ((rand === 0)) {
        next("What does HTML stand for?", "Hyperlink Manager Language", "Hypertext Markup Language", "Home Tooling Maker Language", "Nothing", "Hypertext Markup Language", "2");
        completed.unshift("0");
    }
    if ((rand === 1)) {
        next("What is the largest HTML heading?", '<h1>', "<h6>", "<heading>", "<head>", "<h1>", "1");
        completed.unshift("1");
    }
    if ((rand === 2)) {
        next("What is the correct code to make text bold?", "<bold>", "<b>", "<makethetextbold>", "it's impossible", "b", "2");
        completed.unshift("2");
    }
    if ((rand === 3)) {
        next("What is the correct to make a list that lists the items with numbers?", "<list>", "<ul>", "<dl>", "<ol>", 'ol', "4");
        completed.unshift("3");
    }
    if ((rand === 4)) {
        next("What is the correct HTML for inserting an image?", "<img>image.gif</img>", "<img href=\"image.gif />", "<image src=\"image.gif\" />", "<img src=\"image.gif\" />", '<img src=\"image.gif\"> ', "4");
        completed.unshift("4");
    }
    if ((rand === 5)) {
        next("The <title> element must be located inside", "the <body> element.", "the <h1> element", "the <head> element.", "the <p> element", 'the <head></head> tag', "3");
        completed.unshift("5");
    }
    if ((rand === 6)) {
        next("Where we can use <style> tag", "just in <head> element", "just in <body> element", "in <head> and in <body> elements", "just in a .css file", 'just in <head></head> element', "1");
        completed.unshift("6");
    }
    if ((rand === 7)) {
        next("Which of the optional table tag used to add a short description above a table", "description", "caption", "title", "body", "caption", "2");
        completed.unshift("7");
    }
    if ((rand === 8)) {
        next("Which of these tags are invalid?", "<code>", "<input>", "<h7>", "<small>", '<h7>', "3");
        completed.unshift("8");
    }
    if ((rand === 9)) {
        next("Which is not an HTML attribute?", "alt", "id", "target", "hidden", "hidden", "4");
        completed.unshift("9");
    }


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


    rand = Math.round(Math.random() * 9);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * 9);
    }
    if ((rand === 0)) {
        next("What HTML form input should we use to present multiple options, but to select only one?", "<input type=\"text\">", "<input type=\"radio\">", "<input type=\"checkbox\">", "<input type=\"submit\">", 'input type=\"radio\"', "2");
        completed.unshift("0");
    }
    if ((rand === 1)) {
        next("What is the HTML form input to use to send the information of the form to the server?", "submit", "server", "send", "mail", "submit", "1");
        completed.unshift("1");
    }
    if ((rand === 2)) {
        next("Which of the following table tags is used to create a table header cells?", "<td>", "<tr>", "<th>", "<table>", "th", "3");
        completed.unshift("2");
    }
    if ((rand === 3)) {
        next("Which tag indicates a form field where the user can enter large amounts of text.", "<label>", "<button>", "<a>", "<textarea>", "textarea", "4");
        completed.unshift("3");
    }
    if ((rand === 4)) {
        next("How is document type initialized in HTML5.?", "</DOCTYPE HTML>", "</DOCTYPE>", "<!DOCTYPE HTML>", "</DOCTYPE html>", "!DOCTYPE HTML", "3");
        completed.unshift("4");
    }
    if ((rand === 5)) {
        next("Which of the following characters indicate closing of a tag?", ".", "/", "|", "!", "/", "2");
        completed.unshift("5");
    }
    if ((rand === 6)) {
        next("What is the font-size of the h1 heading tag?", "3.5 em", "2.17 em", "1.5 em", "2 em", "2 em", "4");
        completed.unshift("6");
    }
    if ((rand === 7)) {
        next("Which of the following attributes is used to add link to any element?", "link", "a", "href", "to", "href", "3");
        completed.unshift("7");
    }
    if ((rand === 8)) {
        next("What is the purpose of using div tags in HTML?", "For creating Different styles", "For adding titles", "For adding headings", "For creating different sections", "For creating different sections.", "4");
        completed.unshift("8");
    }
    if ((rand === 9)) {
        next("Which of the following tags is used to add a line-break in HTML?", "<br>", "<break>", "</break>", "</br>", "br", "1");
        completed.unshift("9");
    }


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


    rand = Math.round(Math.random() * 9);
    while (completed.includes(String(rand)) === true) {
        rand = Math.round(Math.random() * 9);
    }
    if ((rand === 0)) {
        next("Which of the following attributes is used to open an hyperlink in new tab?", "tab", "href", "target", "ref", "target", "3");
        completed.unshift("0");
    }
    if ((rand === 1)) {
        next("Which of the following is the correct way to add background color in HTML?", "<body color = “green”>", "<body bg-color = “green”>", "<body style = “background-color=green”>", "<body style = “background-color: green;”>", 'body style = “background-color: green;”', "4");
        completed.unshift("1");
    }
    if ((rand === 2)) {
        next("Which tag is used to add an header in HTML5 table?", "<theader>", "<h1>", "<th>", "<header>", "th", "3");
        completed.unshift("2");
    }
    if ((rand === 3)) {
        next("The default attribute value of \"target\" is _____ in HTML.", "_self", "_parent", "_top", "_blank", "_blank", "4");
        completed.unshift("3");
    }
    if ((rand === 4)) {
        next("HTML links can be styled using", "XML", "CSS", "PHP", "JavaScript", "CSS", "2");
        completed.unshift("4");
    }
    if ((rand === 5)) {
        next("Which of the following Style is applied to the H1 heading by default.", "Bold", "Underline", "Bold and Underline", "none of the above", "Bold", "1");
        completed.unshift("5");
    }
    if ((rand === 6)) {
        next("Default style and color of unvisited link in any browser is", "Normal and Blue", "Underlined and Blue", "Underline and Purple", "Bold and Purple", "Underlined and Blue", "2");
        completed.unshift("6");
    }
    if ((rand === 7)) {
        next("URL in HTML stands for", "Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Location", "Uni Resource Locator", "Uniform Resource Location", "3");
        completed.unshift("7");
    }
    if ((rand === 8)) {
        next(" Fundamental blocks in HTML are called", "HTML Attributes", "HTML Tags", "HTML Bodies", "HTML Elements", "HTML Tag", "2");
        completed.unshift("8");
    }
    if ((rand === 9)) {
        next("What does the <meta> tag do?", "provides metadata about the HTML document", "links to itself", "makes large text", "creates a button that has the same content and id", "provides metadata about the HTML document", "1");
        completed.unshift("9");
    }


};


function next(question, answer1, answer2, answer3, answer4, rightanswer, rightnumber) {
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


