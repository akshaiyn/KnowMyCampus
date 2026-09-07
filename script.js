// ==================================================
// CAMPUS SEARCH
// ==================================================

function searchCampus() {

    let search =
        document.getElementById("searchBox").value
        .trim()
        .toLowerCase();

    let result =
        document.getElementById("searchResult");


    if (search === "") {

        result.innerHTML =
            "⚠️ Please enter something to search.";

        return;
    }



    // ===============================
    // ECE
    // ===============================

    if (
        search.includes("ece") ||
        search.includes("electronics") ||
        search.includes("communication")
    ) {

        result.innerHTML =
            "📡 Electronics & Communication Engineering found. " +
            "<a href='departments.html'>View Departments →</a>";

        return;
    }



    // ===============================
    // CSE
    // ===============================

    if (
        search.includes("cse") ||
        search.includes("computer science")
    ) {

        result.innerHTML =
            "💻 Computer Science & Engineering found. " +
            "<a href='departments.html'>View Departments →</a>";

        return;
    }



    // ===============================
    // EEE
    // ===============================

    if (
        search.includes("eee") ||
        search.includes("electrical")
    ) {

        result.innerHTML =
            "⚡ Electrical & Electronics Engineering found. " +
            "<a href='departments.html'>View Departments →</a>";

        return;
    }



    // ===============================
    // MECHANICAL
    // ===============================

    if (
        search.includes("mechanical") ||
        search.includes("mech")
    ) {

        result.innerHTML =
            "⚙️ Mechanical Engineering found. " +
            "<a href='departments.html'>View Departments →</a>";

        return;
    }



    // ===============================
    // DEPARTMENTS
    // ===============================

    if (
        search.includes("department") ||
        search.includes("engineering") ||
        search.includes("biotechnology") ||
        search.includes("textile") ||
        search.includes("fashion") ||
        search.includes("agriculture") ||
        search.includes("artificial intelligence") ||
        search.includes("machine learning")
    ) {

        result.innerHTML =
            "🏫 Department information found. " +
            "<a href='departments.html'>View all 18 Departments →</a>";

        return;
    }



    // ===============================
    // LIBRARY
    // ===============================

    if (
        search.includes("library") ||
        search.includes("book")
    ) {

        result.innerHTML =
            "📚 Library information found. " +
            "<a href='facilities.html'>View Facilities →</a>";

        return;
    }



    // ===============================
    // HOSTEL
    // ===============================

    if (
        search.includes("hostel") ||
        search.includes("accommodation")
    ) {

        result.innerHTML =
            "🏠 Hostel information found. " +
            "<a href='facilities.html'>View Facilities →</a>";

        return;
    }



    // ===============================
    // CANTEEN
    // ===============================

    if (
        search.includes("canteen") ||
        search.includes("food")
    ) {

        result.innerHTML =
            "🍴 Canteen information found. " +
            "<a href='facilities.html'>View Facilities →</a>";

        return;
    }



    // ===============================
    // LABORATORY
    // ===============================

    if (
        search.includes("lab") ||
        search.includes("laboratory")
    ) {

        result.innerHTML =
            "🧪 Laboratory information found. " +
            "<a href='facilities.html'>View Facilities →</a>";

        return;
    }



    // ===============================
    // MAP
    // ===============================

    if (
        search.includes("map") ||
        search.includes("location") ||
        search.includes("where") ||
        search.includes("block")
    ) {

        result.innerHTML =
            "🗺️ Campus location information found. " +
            "<a href='campus-map.html'>Open Campus Map →</a>";

        return;
    }



    // ===============================
    // TRANSPORT
    // ===============================

    if (
        search.includes("bus") ||
        search.includes("transport")
    ) {

        result.innerHTML =
            "🚌 Transport information found. " +
            "<a href='facilities.html'>View Facilities →</a>";

        return;
    }



    // ===============================
    // NO RESULT
    // ===============================

    result.innerHTML =
        "❌ No matching information found. " +
        "Try ECE, CSE, Library, Hostel, Canteen, Lab or Map.";

}



// ==================================================
// AI ASSISTANT
// ==================================================

function askAssistant() {

    let input =
        document.getElementById("chatInput");

    let message =
        input.value.trim();


    if (message === "") {

        return;

    }


    let chat =
        document.getElementById("chatMessages");


    // User message

    chat.innerHTML +=
        "<div class='user-message'>" +
        message +
        "</div>";


    let question =
        message.toLowerCase();


    let answer =
        "I am still learning about the campus. " +
        "Try asking about ECE, CSE, library, hostel, laboratory or facilities.";



    if (
        question.includes("library")
    ) {

        answer =
            "📚 The Central Library provides " +
            "books, journals, digital resources " +
            "and study facilities.";

    }


    else if (
        question.includes("hostel")
    ) {

        answer =
            "🏠 Hostel information can be accessed " +
            "through the Facilities section.";

    }


    else if (
        question.includes("canteen") ||
        question.includes("food")
    ) {

        answer =
            "🍴 Campus canteen facilities provide " +
            "food and refreshments.";

    }


    else if (
        question.includes("ece")
    ) {

        answer =
            "📡 Electronics & Communication Engineering " +
            "is one of the academic departments. " +
            "Visit the Departments page for more information.";

    }


    else if (
        question.includes("cse")
    ) {

        answer =
            "💻 Computer Science & Engineering is one " +
            "of the academic departments.";

    }


    else if (
        question.includes("lab") ||
        question.includes("laboratory")
    ) {

        answer =
            "🧪 Department laboratories support " +
            "practical learning, experiments and research.";

    }


    else if (
        question.includes("facility") ||
        question.includes("facilities")
    ) {

        answer =
            "🏢 KnowMyCampus provides information " +
            "about library, hostel, laboratories, " +
            "canteen, sports, transport and more.";

    }



    chat.innerHTML +=
        "<div class='bot-message'>" +
        answer +
        "</div>";


    chat.scrollTop =
        chat.scrollHeight;


    input.value = "";

}



// ==================================================
// ENTER KEY FOR AI ASSISTANT
// ==================================================

document
    .getElementById("chatInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            askAssistant();

        }

    });