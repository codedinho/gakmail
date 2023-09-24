// Get a reference to the quoteBubbleContainer
const quoteBubbleContainer = document.getElementById("quoteBubbleContainer");

// Function to create and display a quote bubble
function displayQuoteBubble() {
    // Get references to the input fields
    const quoteRef = document.getElementById("quoteReference").value;
    const customerName = document.getElementById("quoteCustomerName").value;
    const customerPhone = document.getElementById("quoteCustomerPhone").value;
    const customerEmail = document.getElementById("quoteCustomerEmail").value;
    const description = document.getElementById("quoteDescription").value;

    // Check if all fields are empty
    if (quoteRef.trim() === "" && customerName.trim() === "" && customerPhone.trim() === "" && customerEmail.trim() === "" && description.trim() === "") {
        return; // Don't display the bubble if all fields are empty
    }

    // Create a new quote bubble element
    const quoteBubble = document.createElement("div");
    quoteBubble.classList.add("quote-bubble");

    // Create a timestamp for the current date and time
    const timestamp = new Date();

    // Create a quote object to store the data
    const quote = {
        quoteRef,
        customerName,
        customerPhone,
        customerEmail,
        description,
        timestamp,
    };

    // Append the timestamp to the quote object
    quote.timestamp = timestamp;

    // Append the quote object to the quoteBubble element
    quoteBubble.quote = quote; // Add the quote object as a property of the quoteBubble

    // Append the quote bubble to the quoteBubbleContainer
    quoteBubbleContainer.appendChild(quoteBubble);

    // Add default and hover icons
    const icon = document.createElement("img");
    icon.src = './assets/icons/uncontacted.png';
    icon.classList.add("icon");
    quoteBubble.appendChild(icon);
      

    // Create and append paragraphs for non-empty fields
    if (quoteRef.trim() !== "") {
        const refParagraph = document.createElement("p");
        refParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Quote Reference:</strong><br><span style='font-family: Arial, sans-serif;'>" + quoteRef + "</span>";
        refParagraph.style.textAlign = "center"; // Align text to the left
        quoteBubble.appendChild(refParagraph);
    }

    if (customerName.trim() !== "") {
        const nameParagraph = document.createElement("p");
        nameParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Name:</strong><br><span style='font-family: Arial, sans-serif;'>" + customerName + "</span>";
        nameParagraph.style.textAlign = "center"; // Align text to the left
        quoteBubble.appendChild(nameParagraph);
    }

    if (customerPhone.trim() !== "") {
        const phoneParagraph = document.createElement("p");
        phoneParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Phone:</strong><br><span style='font-family: Arial, sans-serif;'>" + customerPhone + "</span>";
        phoneParagraph.style.textAlign = "center"; // Align text to the left
        quoteBubble.appendChild(phoneParagraph);
    }

    if (customerEmail.trim() !== "") {
        const emailParagraph = document.createElement("p");
        emailParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Email:</strong><br><span style='font-family: Arial, sans-serif;'>" + customerEmail + "</span>";
        emailParagraph.style.textAlign = "center"; // Align text to the left
        quoteBubble.appendChild(emailParagraph);
    }

    if (description.trim() !== "") {
        const descParagraph = document.createElement("p");
        descParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Notes:</strong><br><span style='font-family: Arial, sans-serif;'>" + description + "</span>";
        descParagraph.style.textAlign = "center"; // Align text to the left
        quoteBubble.appendChild(descParagraph);
    }

    // Append the timestamp to the quote bubble
    quoteBubble.timestamp = timestamp;

    // Append the quote bubble to the quoteBubbleContainer
    // Append the quote bubble to the quoteBubbleContainer
    quoteBubbleContainer.appendChild(quoteBubble);

    // Update the display to show how long it's been since each contact
    updateContactTimes();

    // Add the quote to local storage
    addToLocalStorage(quote);

    // Sort the quote bubbles based on their timestamps
    const sortedQuoteBubbles = Array.from(quoteBubbleContainer.children).sort((a, b) => b.timestamp - a.timestamp);
    quoteBubbleContainer.innerHTML = ''; // Clear the container

    // Append the sorted quote bubbles back to the container
    sortedQuoteBubbles.forEach((bubble) => {
        quoteBubbleContainer.appendChild(bubble);
    });

    // Update the display to show how long it's been since each contact
    updateContactTimes();
}

// Function to update the contact times
function updateContactTimes() {
    const quoteBubbleContainer = document.getElementById("quoteBubbleContainer");
    const quoteBubbles = Array.from(quoteBubbleContainer.children);

    quoteBubbles.forEach((bubble, index) => {
        // Check if the time element has already been added
        if (!bubble.querySelector(".time-display")) {
            const timeDiff = new Date() - bubble.timestamp;
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

            const timeDisplay = daysDiff > 0 ? "<span style='color: black;'>Added " + daysDiff + " days ago</span>" : "<span style='color: #333;'>Added Today</span>";
            const timeElement = document.createElement("p");
            timeElement.className = "time-display"; // Add a class for easy identification
            timeElement.innerHTML = timeDisplay;
            bubble.appendChild(timeElement);
        }
    });
}

// Function to add a quote to local storage
function addToLocalStorage(quote) {
    // Get the existing quotes from local storage
    const existingQuotes = JSON.parse(localStorage.getItem("salesQuotes")) || [];

    // Add the new quote to the array
    existingQuotes.push(quote);

    // Store the updated array back in local storage
    localStorage.setItem("salesQuotes", JSON.stringify(existingQuotes));
}

// Function to retrieve quotes from local storage
function getQuotesFromLocalStorage() {
    const quotes = JSON.parse(localStorage.getItem("salesQuotes")) || [];
    return quotes;
}

// Function to display quotes on page load
function displayQuotesOnLoad() {
    const quotes = getQuotesFromLocalStorage();
    quotes.forEach((quote) => {
        // Create a new quote bubble element
        const quoteBubble = document.createElement("div");
        quoteBubble.classList.add("quote-bubble");

        // Create a timestamp for the current date and time
        const timestamp = quote.timestamp;

        // Add default and hover icons
        const icon = document.createElement("img");
        icon.src = './assets/icons/uncontacted.png';
        icon.classList.add("icon");
        quoteBubble.appendChild(icon);

        // Create and append paragraphs for non-empty fields
        if (quote.quoteRef.trim() !== "") {
            const refParagraph = document.createElement("p");
            refParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Customer Quote Reference:</strong><br><span style='font-family: Arial, sans-serif;'>" + quote.quoteRef + "</span>";
            refParagraph.style.textAlign = "center"; // Align text to the left
            quoteBubble.appendChild(refParagraph);
        }

        if (quote.customerName.trim() !== "") {
            const nameParagraph = document.createElement("p");
            nameParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Customer Name:</strong><br><span style='font-family: Arial, sans-serif;'>" + quote.customerName + "</span>";
            nameParagraph.style.textAlign = "center"; // Align text to the left
            quoteBubble.appendChild(nameParagraph);
        }

        if (quote.customerPhone.trim() !== "") {
            const phoneParagraph = document.createElement("p");
            phoneParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Customer Phone:</strong><br><span style='font-family: Arial, sans-serif;'>" + quote.customerPhone + "</span>";
            phoneParagraph.style.textAlign = "center"; // Align text to the left
            quoteBubble.appendChild(phoneParagraph);
        }

        if (quote.customerEmail.trim() !== "") {
            const emailParagraph = document.createElement("p");
            emailParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Customer Email:</strong><br><span style='font-family: Arial, sans-serif;'>" + quote.customerEmail + "</span>";
            emailParagraph.style.textAlign = "center"; // Align text to the left
            quoteBubble.appendChild(emailParagraph);
        }

        if (quote.description.trim() !== "") {
            const descParagraph = document.createElement("p");
            descParagraph.innerHTML = "<strong style='font-size: 20px; color: #fff;'>Notes:</strong><br><span style='font-family: Arial, sans-serif;'>" + quote.description + "</span>";
            descParagraph.style.textAlign = "center"; // Align text to the left
            quoteBubble.appendChild(descParagraph);
        }

        // Append the timestamp to the quote bubble
        quoteBubble.timestamp = timestamp;

        // Append the quote bubble to the quoteBubbleContainer
        quoteBubbleContainer.appendChild(quoteBubble);
    });

    // Sort the quote bubbles based on their timestamps
    const sortedQuoteBubbles = Array.from(quoteBubbleContainer.children).sort((a, b) => b.timestamp - a.timestamp);
    quoteBubbleContainer.innerHTML = ''; // Clear the container

    // Append the sorted quote bubbles back to the container
    sortedQuoteBubbles.forEach((bubble) => {
        quoteBubbleContainer.appendChild(bubble);
    });

    // Update the display to show how long it's been since each contact
    updateContactTimes();
}

// Add an event listener to the Send button to display the quote bubble
const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", displayQuoteBubble);

// Update the mouseover and mouseout event listeners using event delegation
quoteBubbleContainer.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("icon")) {
        event.target.src = './assets/icons/contacted.png';
    }
});

quoteBubbleContainer.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("icon")) {
        event.target.src = './assets/icons/uncontacted.png';
    }
});

// Simulate a click event on quote bubbles
quoteBubbleContainer.addEventListener("mousedown", function (event) {
    console.log("Quote bubble clicked"); // Check if this message appears in the console
    // Prompt the user to confirm
    const confirmContact = window.confirm("Are you sure you want to mark this as contacted?");
    if (confirmContact) {
        // Get the clicked quote bubble element
        const clickedQuoteBubble = event.target.closest('.quote-bubble');
        if (clickedQuoteBubble) {
            // Remove the bubble from the display
            removeQuoteBubble(clickedQuoteBubble);
        }
    }
});

// Function to remove a quote bubble from the display and local storage
function removeQuoteBubble(quoteBubble) {
    // Remove the bubble from the display
    quoteBubbleContainer.removeChild(quoteBubble)
    removeFromLocalStorage(quoteBubble)
}

// Function to remove a quote from local storage
function removeFromLocalStorage(quote) {
    const existingQuotes = JSON.parse(localStorage.getItem("salesQuotes")) || [];

    // Find and remove the quote from the array based on a unique identifier, e.g., timestamp
    const updatedQuotes = existingQuotes.filter((q) => q.timestamp !== quote.timestamp);

    // Store the updated array back in local storage
    localStorage.setItem("salesQuotes", JSON.stringify(updatedQuotes));
}

// Call the displayQuotesOnLoad function when the page loads
window.addEventListener("load", displayQuotesOnLoad);
