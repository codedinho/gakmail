// Define salesmen data
const salesmenData = {
    Charlie: {
        email: "charlie.marshall@gak.co.uk",
        phone: "01273 665426",
        abrev: "CM",
        iconPath: './assets/icons/charlie.png',
        altName: "Charlie"
    },
    Mike: {
        email: "mike.fallon-gray@gak.co.uk",
        phone: "01273 665409",
        abrev: "MF",
        iconPath: './assets/icons/mike.png',
        altName: "Mike"
    },
    Chris: {
        email: "chris.ottrige@gak.co.uk",
        phone: "01273 665401",
        abrev: "CO",
        iconPath: './assets/icons/chris.png',
        altName: "Chris"
    },
    Richard: {
        email: "richard.brincklow@gak.co.uk",
        phone: "01273 665403",
        abrev: "RB",
        iconPath: './assets/icons/richard.png',
        altName: "Richard"
    },
    Dan: {
        email: "dan.harding@gak.co.uk",
        phone: "01273 665407",
        abrev: "DH",
        iconPath: './assets/icons/dan-harding.png',
        altName: "Dan"
    },
    Jules: {
        email: "jules.monk@gak.co.uk",
        phone: "01273 665408",
        abrev: "JM",
        iconPath: './assets/icons/jules.png',
        altName: "Jules"
    },
    James: {
        email: "james.hunter@gak.co.uk",
        phone: "01273 665406",
        abrev: "JH",
        iconPath: './assets/icons/james-hunter.png',
        altName: "James"
    },
    Jack: {
        email: "jack.breeze-lamb@gak.co.uk",
        phone: "01273 665420",
        abrev: "JBL",
        iconPath: './assets/icons/piano-shop.png',
        altName: "Jack"
    },
    Roy: {
        email: "roy@gak.co.uk",
        phone: "01273 665425",
        abrev: "ROY",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Roy"
    },
    Luke: {
        email: "luke.brealey@gak.co.uk",
        phone: "01273 665412",
        abrev: "LB",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Luke"
    },
    Olly: {
        email: "olly-hall@gak.co.uk",
        phone: "01273 665412",
        abrev: "OH",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Olly"
    },
    Ryan: {
        email: "ryan.vega@gak.co.uk",
        phone: "01273 665412",
        abrev: "RV",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Ryan"
    },
    Robson: {
        email: "robson.hawkins@gak.co.uk",
        phone: "01273 665424",
        abrev: "RW",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Robson"
    },
    Joe: {
        email: "joe.corfield@gak.co.uk",
        phone: "01273 665425",
        abrev: "JC",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Ryan"
    },
    Louis: {
        email: "louis.squire@gak.co.uk",
        phone: "01273 665425",
        abrev: "LS",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Louis"
    },
    Jacob: {
        email: "jacob.andrews@gak.co.uk",
        phone: "01273 665414",
        abrev: "DRUMS-JA",
        iconPath: './assets/icons/drum-shop.png',
        altName: "Jacob"
    },
    Sean: {
        email: "sean.millsopp@gak.co.uk",
        phone: "01273 665414",
        abrev: "-DRUMS-SM",
        iconPath: './assets/icons/drum-shop.png',
        altName: "Sean"
    },
    Bradley: {
        email: "bradley.clarke@gak.co.uk",
        phone: "01273 665414",
        abrev: "-DRUMS-BC",
        iconPath: './assets/icons/drum-shop.png',
        altName: "Bradley"
    },
    Jamie: {
        email: "jamie.barnes@gak.co.uk",
        phone: "01273 665412",
        abrev: "JB",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "Jamie"
    },
    MailOrder: {
        email: "mailorder@gak.co.uk",
        phone: "01273 665400",
        abrev: "MO",
        iconPath: './assets/icons/mail-order.png',
        altName: "guys"
    },
    Guitars: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665412",
        abrev: "GS",
        iconPath: './assets/icons/guitar-shop.png',
        altName: "guys"
    },
    Pro: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665413",
        abrev: "PA",
        iconPath: './assets/icons/proaudio-shop.png',
        altName: "guys"
    },
    Drums: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665414",
        abrev: "DS",
        iconPath: './assets/icons/drum-shop.png',
        altName: "guys"
    },
    Pianos: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665420",
        abrev: "PS",
        iconPath: './assets/icons/piano-shop.png',
        altName: "guys"
    },
    SH: {
        email: "secondhand@gak.co.uk",
        phone: "01273 665425",
        abrev: "SH",
        iconPath: './assets/icons/second-hand.png',
        altName: "guys"
    },
    Edu: {
        email: "edu@gak.co.uk",
        phone: "01273 665410",
        abrev: "EDU",
        iconPath: './assets/icons/edu.png',
        altName: "guys"
    }
};

// Select the <select> element by its ID
const salesmanSelect = document.getElementById('salesman');

// Loop through the salesmenData object to populate the <select> element
for (const salesman in salesmenData) {
    if (salesmenData.hasOwnProperty(salesman)) {
        // Create an <option> element
        const option = document.createElement('option');
        
        // Set the text and value of the <option>
        option.textContent = salesman;
        option.value = salesman;
        
        // Append the <option> to the <select>
        salesmanSelect.appendChild(option);
    }
}

// Add an event listener to the salesman dropdown
salesmanSelect.addEventListener('change', function () {
    const selectedSalesman = salesmanSelect.value;
    
    // Save the selected salesman to localStorage
    localStorage.setItem('selectedSalesman', selectedSalesman);
    
    // Call the function to update the email preview
    updateEmailPreview();
});


// Call the function to generate the icons on page load
document.addEventListener('DOMContentLoaded', function () {
    // Load the previously selected salesman from localStorage (if available)
    const savedSalesman = localStorage.getItem('selectedSalesman');
    if (savedSalesman) {
        // Set the dropdown value to the saved salesman
        salesmanSelect.value = savedSalesman;
    }
    
    // Call updateEmailPreview on page load
    updateEmailPreview();
});

// Select the <select> element for the callback salesman by its ID
const callbackSalesmanSelect = document.getElementById('callbackSalesman');

// Loop through the salesmenData object to populate the callback salesman <select> element
for (const salesman in salesmenData) {
    if (salesmenData.hasOwnProperty(salesman)) {
        // Create an <option> element
        const option = document.createElement('option');
        
        // Set the text and value of the <option>
        option.textContent = salesman;
        option.value = salesman;
        
        // Append the <option> to the callback salesman <select>
        callbackSalesmanSelect.appendChild(option);
    }
}

// Add an event listener to the callback salesman dropdown
callbackSalesmanSelect.addEventListener('change', function () {
    // Call the function to update the email preview when the callback salesman is changed
    updateEmailPreview();
});




// Get all tab buttons and tab contents
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Add a click event listener to each tab button
tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove the 'active' class from all tab buttons
        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove("active");
        });

        // Add the 'active' class to the clicked tab button
        button.classList.add("active");

        // Hide all tab contents
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });

        // Get the ID of the clicked tab button
        const tabId = button.id.replace("-button", "");

        // Show the corresponding tab content
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add("active");

        // Log a message after switching tabs
        console.log("Switched to tab content:", tabId);
    });
});


// Get references to your dropdown elements
const salesmanDropdown = document.getElementById('salesman');
const templateDropdown = document.getElementById('template');
const faultTypeDropdown = document.getElementById('faultType');
const callbackType = document.getElementById('callbackType');
const callbackSalesman = document.getElementById('callbackSalesman');


// Add more dropdowns if needed

// Apply the dropdown-style class to all dropdowns
salesmanDropdown.classList.add('dropdown-style');
templateDropdown.classList.add('dropdown-style');
faultTypeDropdown.classList.add('dropdown-style');
callbackType.classList.add('dropdown-style');
callbackSalesman.classList.add('dropdown-style');


// Add an event listener to the template dropdown
templateDropdown.addEventListener('change', function () {
    const selectedTemplate = templateDropdown.value;
    hideUnusedFields(selectedTemplate);
});

// Apply the CSS class to the dropdown elements
salesmanDropdown.classList.add('custom-dropdown');
templateDropdown.classList.add('custom-dropdown');
faultTypeDropdown.classList.add('custom-dropdown');



// Initial call to set visibility based on the initial template selection
const initialTemplate = templateDropdown.value;
hideUnusedFields(initialTemplate);

// Add event listeners to input fields and select elements
const inputFields = document.querySelectorAll('input[type="text"]');
const selectElements = document.querySelectorAll('select');

// Attach event listeners to all input fields
inputFields.forEach((inputField) => {
    inputField.addEventListener('input', updateEmailPreview);
});

// Attach event listeners to all select elements
selectElements.forEach((selectElement) => {
    selectElement.addEventListener('change', updateEmailPreview);
});

// Define a function to update the email preview
function updateEmailPreview() {
    const template = document.getElementById('template').value;
    const salesmanName = document.getElementById('salesman').value;
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const bestPrice = document.getElementById('bestPrice').value;
    const returnNumber = document.getElementById('returnNumber').value;
    const faultType = document.getElementById('faultType').value;
    const stockDate = document.getElementById('stockDate').value;
    const salesRef = document.getElementById('salesRef').value;
    const paymentLink = document.getElementById('paymentLink').value;
    const depositLink = document.getElementById('depositLink').value;
    const callbackType = document.getElementById('callbackType').value;
    const callbackSalesman = document.getElementById('callbackSalesman').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const orderNumber = document.getElementById('orderNumber').value;
    const quoteNumber = document.getElementById('quoteNumber').value;
    const additionalInfo = document.getElementById('additionalInfo').value;



    // Define a mapping of template names to headlines
    const templateHeadlines = {
        webQuote: `👋 ${name}, GAK has sent you an offer!`,
        webQuote2: `👋 ${name}, GAK has sent you an offer!`,
        webQuote3: `👋 ${name}, GAK has sent you an offer!`,
        paymentLink: `GAK - Payment Link`,
        paymentLink2: `GAK - Payment Link`,
        preOrder: `GAK - ${product}`,
        bestPrice: `👋 ${name}, GAK has sent you an offer!`,
        webFraudCheck: `GAK - Order Cancellation Update`,
        webReturn: `GAK Return - RM${returnNumber}`,
        webReturnFaultyRefund: `GAK Return - Faulty`,
        webReturnFaultyReplacementInStock: `GAK Return - Replacement In Stock`,
        webReturnFaultyReplacementOutOfStock: `GAK Return - Replacement Out Of Stock`,
        webReturnFaultyAdvanceReplacement: `GAK Return - Replacement Processed`,
        webReturnFaultyRefundRoyalMail: `GAK Return - Royal Mail Freepost`,
        webReturnFaultyReplacementRoyalMailInStock: `GAK Return - Replacement In Stock`,
        webReturnFaultyReplacementRoyalMailOutOfStock: `GAK Return - Replacement Out Of Stock`,
        webReturnFaultyCancelFinance: `GAK Return - Finance Cancellation`,
        webReturnFaultyRoyalMail: `GAK Return - Faulty`,
        webReturnFaultyWorkshopRepair: `GAK Return - Workshop Repair`,
        webReturnWarrantyRepairDPDCollection: `GAK Return - Warranty Repair Collection`,
        webReturnFaultyWarrantyRoyalMail: `GAK Return - Warranty Repair`,
        webUnwantedReturn: `GAK Return - RM-${returnNumber}`,
        webUnwantedReturnDropoff: `GAK Return - Store Drop Off - RM${returnNumber}`,
        unwantedReturn: `👋 ${name}, here's your GAK return details - RM${returnNumber}`,
        unwantedReturn: `👋 ${name}, here's your GAK return details - RM${returnNumber}`,
        contactSupportPioneer: `GAK - Tech Support - Pioneer`,
        contactSupportPioneerOver30: `GAK - Tech Support - Pioneer`,
        contactSupportFocusrite: `GAK - Tech Support - Focusrite`,
        contactSupportFocusriteOver30: `GAK - Tech Support - Focusrite`,
        faultyReturn: `GAK Return - ${product}`,
        warrantyRepair: `GAK Warranty Repair - ${product}`,
        stockNotification: `GAK Stock Notification - ${product}`,
        stockNotificationGibson: `GAK Stock Notification - ${product}`,
        stockNotificationEpiphone: `GAK Stock Notification - ${product}`,
        callbackType: `Callback for ${callbackSalesman} - ${name} - ${customerPhone}`,
        callbackType2: `Callback for ${callbackSalesman} - ${name} - ${customerPhone}`,
        callbackType3: `Callback for ${callbackSalesman} - Order Update - ${orderNumber}`,
        callbackType4: `Callback for ${callbackSalesman} - Return Update - RM${returnNumber}`,
        courierClaimDamaged: `GAK Courier Claim - Damaged Parcel`
    };

    
    // Set the email headline based on the selected template
    const emailHeadline = templateHeadlines[template];
    document.getElementById('email-headline').textContent = emailHeadline;

    // You need to define and initialize emailContent
    const emailTemplate = getEmailTemplate(template);



    const salesmanData = salesmenData[salesmanName];

    // Update the player icon element
    const playerIconImage = document.getElementById('player-icon-image');
    if (salesmanData && salesmanData.iconPath) {
        // Set the src and alt attributes of the image based on the selected user's data
        playerIconImage.src = salesmanData.iconPath;
        playerIconImage.alt = salesmanName; // Set the alt attribute to the salesman's name
        document.getElementById('player-icon').style.display = 'block'; // Show the icon
    } else {
        document.getElementById('player-icon').style.display = 'none'; // Hide the icon if no iconPath is available
    }

    const data = {
        'name': name,
        'product': product,
        'salesman': salesmanName,
        'salesman-phone': salesmanData.phone,
        'salesman-abrv': salesmanData.abrev,
        'salesman-email': salesmanData.email,
        'bestPrice': bestPrice,
        'returnNumber': returnNumber,
        'orderNumber': orderNumber,
        'quoteNumber': quoteNumber,
        'faultType': faultType,  
        'stockDate': stockDate,
        'salesRef': `Q-${salesmanData.abrev}-${salesRef}`, // Construct the quote reference
        'paymentLink': paymentLink,
        'depositLink': depositLink,
        'callbackType': callbackType,
        'callbackSalesman': callbackSalesman,
        'customerEmail': customerEmail,
        'customerPhone': customerPhone,
        'additionalInfo': additionalInfo
    };

    // Fill the template with data
    const emailContent = fillTemplate(emailTemplate, data);

    document.getElementById('email-content').innerHTML = emailContent.replace(/\n/g, '<br>');
}

// Assuming your select element has the id "template"
const templateSelect = document.getElementById("template");

templateSelect.addEventListener("change", function () {
    const selectedTemplate = templateSelect.value;

    // Check if the selected template matches any of the three templates
    if (
        selectedTemplate === "webReturn" ||
        selectedTemplate === "unwantedReturn" ||
        selectedTemplate === "webUnwantedReturn"
    ) {
        // Show the "Download PDF" button
        document.getElementById("downloadButton").style.display = "block";
    } else {
        // Hide the button for other templates
        document.getElementById("downloadButton").style.display = "none";
    }
});

function downloadPDF() {
    // Set the href attribute to the path of your PDF file
    document.getElementById("downloadButton").setAttribute("href", "./assets/PDF/packing-guide.pdf");

    // Set the download attribute to specify the default filename
    document.getElementById("downloadButton").setAttribute("download", "packing-guide.pdf");
}

// Function to hide unused fields based on the selected template
function hideUnusedFields(templateName) {
    const inputElements = document.querySelectorAll('input[type="text"]');
    const selectElements = document.querySelectorAll('select:not(#template)'); // Exclude the template select

    // Get the placeholders from the email template
    const emailTemplate = getEmailTemplate(templateName);
    const placeholders = emailTemplate.match(/{{([^}]+)}}/g);

    // Loop through input elements and select elements
    inputElements.forEach(inputElement => {
        const fieldId = inputElement.id;
        const label = document.querySelector(`label[for="${fieldId}"]`);
        const shouldHide = !placeholders.some(placeholder => placeholder.includes(fieldId));

        if (fieldId !== 'email-headline') {
            // Exclude the "Headline Suggestion" input field from hiding logic
            if (shouldHide) {
                inputElement.style.display = 'none';
                label.style.display = 'none';
            } else {
                inputElement.style.display = 'block';
                label.style.display = 'block';
            }
        } else {
            // Always show the "Headline Suggestion" input field
            inputElement.style.display = 'block';
            label.style.display = 'block';
        }
    });

    selectElements.forEach(selectElement => {
        const fieldId = selectElement.id;
        const label = document.querySelector(`label[for="${fieldId}"]`);
        const shouldHide = !placeholders.some(placeholder => placeholder.includes(fieldId));

        if (fieldId !== 'taskPriority' && fieldId !== 'taskDay') {
            // Exclude the "taskPriority" and "taskDay" dropdowns from hiding logic
            if (shouldHide) {
                selectElement.style.display = 'none';
                label.style.display = 'none';
            } else {
                selectElement.style.display = 'block';
                label.style.display = 'block';
            }
        } else {
            // Always show the "taskPriority" and "taskDay" dropdowns
            selectElement.style.display = 'block';
            label.style.display = 'block';
        }
    });
}


// Get references to the input field and copy button
const stockDateInput = document.getElementById('stockDate');
const copyButton = document.getElementById('copy-button');


// Add an event listener to the input field
stockDateInput.addEventListener('input', function () {
    // Check if the input field is empty
    if (stockDateInput.value.trim() === '') {
        // If empty, hide the copy button
        copyButton.style.display = 'none';
    } else {
        // If not empty, show the copy button
        copyButton.style.display = 'block';
    }
});


// Get references to the copy button and the copied message container
const copiedMessage = document.getElementById('copiedMessage');

// Add an event listener to the copy button (for copying functionality)
copyButton.addEventListener('click', function () {
    closeAllMessages();
    const emailContent = document.getElementById('email-content');
    
    // Create a range to select the text content
    const range = document.createRange();
    range.selectNodeContents(emailContent);

    // Create a selection and add the range to it
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    selection.removeAllRanges();

    // Show the "Copied!" message
    copiedMessage.classList.remove('hidden');

    // Hide the "Copied!" message after a short delay (e.g., 2 seconds)
    setTimeout(function () {
        copiedMessage.classList.add('hidden');
    }, 2000);
});

// Get a reference to the player icon and tooltip
const playerIcon = document.getElementById('player-icon');
const tooltip = document.getElementById('tooltip') // Updated to match the CSS selector;

// Add event listeners for hover
playerIcon.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

playerIcon.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

// Function to show the tooltip
function showTooltip() {
    tooltip.style.display = 'block';
}

// Function to hide the tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Add event listeners for hover on desktop
playerIcon.addEventListener('mouseenter', showTooltip);
playerIcon.addEventListener('mouseleave', hideTooltip);

// Add event listeners for touch events on mobile
playerIcon.addEventListener('touchstart', showTooltip);
playerIcon.addEventListener('touchend', hideTooltip);

// Prevent the default behavior of touch events to avoid issues with scrolling
playerIcon.addEventListener('touchmove', (e) => {
    e.preventDefault();
});

function copyEmailHeadline() {
    closeAllMessages();
    const emailHeadlineElement = document.getElementById('email-headline');
    const emailHeadlineText = emailHeadlineElement.innerText;
  
    // Create a temporary textarea element to copy the text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = emailHeadlineText;
    document.body.appendChild(tempTextarea);
  
    // Select the text and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  
    // Show the "Email Copied" message
    const emailCopiedMessage = document.getElementById('emailCopiedMessage');
    emailCopiedMessage.classList.remove('hidden');
  
    // Hide the message after a short delay (e.g., 2 seconds)
    setTimeout(function () {
      emailCopiedMessage.classList.add('hidden');
    }, 2000);
  }

// Get references to the popup and password input
const popup = document.getElementById('popup');
const passwordInput = document.getElementById('passwordInput');

// Show the popup on first load
window.addEventListener('load', function () {
    popup.classList.add('show');
});

// Add an event listener to the form's submit event
document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    checkPassword(); // Call the password-checking function
});

// Function to close the popup
function closePopup() {
    popup.classList.remove('show');
}

// Function to check the entered password
function checkPassword() {
    const enteredPassword = passwordInput.value;
    const correctPassword = 'lespaul'; // Yes, I know this isn't hidden. 

    if (enteredPassword === correctPassword) {
        // Password is correct, close the popup
        closePopup();
    } else {
        // Password is incorrect, display an error message (you can customize this)
        alert('Incorrect password. Please try again.');
        passwordInput.value = ''; // Clear the input field
    }
}

// Get references to the info icon and info popup
const infoIcon = document.getElementById("info-icon");
const infoPopup = document.getElementById("info-popup");

// Function to open the info popup
function openInfoPopup(event) {
    event.stopPropagation(); // Prevent click event from propagating
    
    infoPopup.style.display = "block";
    
    // Add a keydown event listener to the document to close the popup when pressing the "Esc" key
    document.addEventListener("keydown", closeInfoPopupOnEsc);

    // Add a click event listener to the document to close the popup when clicking outside of it
    document.addEventListener("click", closeInfoPopupOnClick);
}

// Function to close the info popup
function closeInfoPopup() {
    infoPopup.style.display = "none";
    
    // Remove the keydown event listener
    document.removeEventListener("keydown", closeInfoPopupOnEsc);

    // Remove the click event listener
    document.removeEventListener("click", closeInfoPopupOnClick);
}

// Function to close the info popup when pressing the "Esc" key
function closeInfoPopupOnEsc(event) {
    if (event.key === "Escape") {
        closeInfoPopup();
    }
}

// Function to close the info popup when clicking outside of it
function closeInfoPopupOnClick(event) {
    if (!infoPopup.contains(event.target)) {
        closeInfoPopup();
    }
}

// Add a click event listener to the info icon to open the info popup
infoIcon.addEventListener("click", openInfoPopup);





// Get references to the Clear button and the Fields Cleared message container
const clearButton = document.getElementById('clearFieldsButton');
const fieldsClearedMessage = document.getElementById('fieldsClearedMessage');

// Add an event listener to the Clear button (for clearing fields and displaying the message)
clearButton.addEventListener('click', function () {
    // Close all messages
    closeAllMessages();
    // JavaScript to clear all fields when the Clear button is clicked
    document.getElementById("callbackSalesman").value = "";
    document.getElementById("callbackType").value = "";
    document.getElementById("orderNumber").value = "";
    document.getElementById("quoteNumber").value = "";
    document.getElementById("name").value = "";
    document.getElementById("product").value = "";
    document.getElementById("bestPrice").value = "";
    document.getElementById("returnNumber").value = "";
    document.getElementById("salesRef").value = "";
    document.getElementById("stockDate").value = "";
    document.getElementById("paymentLink").value = "";
    document.getElementById("depositLink").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("faultType").value = "";
    document.getElementById("additionalInfo").value = "";
    updateEmailPreview();

    // Show the "Fields Cleared" message
    fieldsClearedMessage.classList.remove('hidden');

    // Hide the "Fields Cleared" message after a short delay (e.g., 2 seconds)
    setTimeout(function () {
        fieldsClearedMessage.classList.add('hidden');
    }, 2000);
});

// Get references to the Clear button and the message containers
const emailCopiedMessage = document.getElementById('emailCopiedMessage');

// Function to close all messages
function closeAllMessages() {
    fieldsClearedMessage.classList.add('hidden');
    emailCopiedMessage.classList.add('hidden');
    copiedMessage.classList.add('hidden');
}

function getEmailTemplate(templateName) {
    const templates = {

        paymentLink: `Hi {{name}},

You can follow the link below to complete your purchase.

{{paymentLink}}

Please respond to this email and let me know once this is complete. 

<em>Please also ensure you fill out the appropriate fields for an alternative delivery address if you intend to send it somewhere other than your billing address. If you are using Paypal, double check your address is up to date.</em>

You can reach me via email at {{salesman-email}}, or on {{salesman-phone}} if any issues.

Kind regards,

{{salesman}}
GAK.co.uk`,

        paymentLink2: `Hi {{name}},

You can follow the link below to complete your purchase of the <b>{{product}}</b>, your reference is {{salesRef}}.

{{paymentLink}}

Please respond to this email and let me know once this is complete. 

<em>Please also ensure you fill out the appropriate fields for an alternative delivery address if you intend to send it somewhere other than your billing address. If you are using Paypal, double check your address is up to date.</em>

You can reach me via email, or on {{salesman-phone}} if any issues.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webQuote: `Hi {{name}},

        {{salesman}} here from GAK, I can see you were interested in the {{product}} online. I am pleased to say that not only do I have it available in stock but if you ordered over the phone or via email with me I would be able to look into either offering a deal on the price or including some extra bits depending on what is available. If you would like to order or find out more please call me on {{salesman-phone}} or email back via {{salesman-email}} for a quote on the price.

If you are looking to finance the order, then the web price is usually the best I can do however, I do have some extra options that may not be available on the website.

Kind Regards,

{{salesman}}
GAK.co.uk`,

        webQuote2: `Hi {{name}},

{{salesman}} here from GAK. We've noticed from your recent GAK Websearch that you've been checking out this - {{product}}

Great choice! Just letting you know that there is possibly a small discount or free gift we can include with this order should you so wish. This deal is only available if you order through me, as well as any discounts that can be applied for an outright purchase.
    
We also offer great finance options over the phone if that is the way that you intend to go (unfortunately only at our advertised prices for 0% finance, though I may either have some extra options not listed or I may be able to throw in some freebies!).

If you are interested, you can call me direct on {{salesman-phone}} between 11.30-5.30pm, or call the main 01273 665400 on the site and ask for {{salesman}}. Alternatively you can email me at {{salesman-email}}. 

If not, please disregard this email and have a great week!

Kind regards,

{{salesman}}
GAK.co.uk`,

        webQuote3: `Hi {{name}},

{{salesman}} here from GAK, I can see you've shown some interest in the {{product}} online. Great choice!

I am pleased to say that this is in stock and ready for shipping. I have checked our pricing and we may even have some room for either a deal on the price or some free accessories depending on what is available. How would that sound?

If you are looking to finance the order, then the web price is usually the best I can do however, I do sometimes have some extra options that may not be available on the website.

Alternatively, if you are still considering options right now, please feel free to send any questions my way and I'll be happy to help. 

For more information, you can reach me directly on {{salesman-phone}} or email back anytime via {{salesman-email}}.

Kind regards,

{{salesman}}
GAK.co.uk`,

        preOrder: `Hi {{name}},

{{salesman}} here from the GAK Mail Order team, I can see you were looking at the new {{product}}, online. As I'm sure you're aware, this is a brand new and has only just been launched and is already proving incredibly popular - not surprising really though! 

All being equal, we are hoping to see stock around {{stockDate}}. A 10% deposit is all I would need to get the ball moving and a pre order set up, how does that sound?

If you would like to get your name down and place an order, please use either of the links below to make payment and I'll get this sorted for you.

Deposit: {{depositLink}}

Full amount: {{paymentLink}}

Alternatively, if you would like more information or a quick chat, please do not hestitate to get in touch with me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind regards,

{{salesman}}
GAK.co.uk`,

        bestPrice: `Hi {{name}},

{{salesman}} here from GAK, thanks for getting in touch. 

I am pleased to say the {{product}} is currently in stock. The best price I can offer for a cash purchase is {{bestPrice}}. How would that sound?

Just give me a call on {{salesman-phone}} quoting reference {{salesRef}} or email back anytime to proceed. 

Kind Regards,

{{salesman}}
GAK.co.uk`,

        webReturn: `Hi {{name}},

Please send the items you wish to return back to the below address. Ideally, each item will need to be returned with all the original packaging and any other items included in the box such as a power supply or any documentation. Please ensure the package is wrapped and/or double boxed for transit to protect the manufacturers packaging against damage. Please do not write on or mark the manufacturers packaging. When appropriate we advise using a service that offers insurance, tracking and a signature upon receipt. We have no preference which courier service you use.

RM-{{returnNumber}}
GAK Returns
60 Gladstone Place
Brighton
BN2 3QD</b>

From the date of receipt of this email you have 14 days in which to return the goods. Please allow up to 7 days for the refund to be processed. Our Returns Dept. will send you a confirmation email as soon as the refund is processed. Please allow up to 7 days for you bank to clear the funds from that point. Please be aware that we can no longer offer collections for unwanted orders and do not reimburse the cost of returns postage.

Please be aware that if any item cannot be restocked as new we may need to reduce your refund total to reflect any depreciation in the value of the goods. Please see the terms and conditions on our website (link here www.gak.co.uk/en/terms-and-conditions) for more information.

Kind Regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyRefund: `Hi {{name}},

I'm sorry to hear about this. We can collect the order for a full refund.

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The item will need to be boxed for transit. Please ensure all items originally included in the box are also returned. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyReplacementInStock: `Hi {{name}},

I'm sorry to hear about this. We have stock available and can replace this for you.

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The item will need to be boxed for transit. Please ensure all items originally included in the box are also returned. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyReplacementOutOfStock: `Hi {{name}},

I'm sorry to hear about this. Unfortunately we do not currently have another in stock so we cannot replace this for you straight away. It might be a week or two until we see new stock come in. Would you like a replacement when stock is available?

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The faulty item will need to be boxed for transit. Please ensure all items originally included in the box are also returned. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyCancelFinance: `Hi {{name}},

I'm sorry to hear about this. As soon as the return has been processed we will contact V12 and cancel your finance agreement. 

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The goods will need to be boxed for transit. Please ensure all items originally included in the box are also returned. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyRefundRoyalMail: `Hi {{name}},

I'm sorry to hear about this. Please use the link below to get a Royal Mail free post label for your return. 

www.royalmail.com/track-my-return/pick-a-retailer

The goods will need to be boxed for transit. Please ensure all items originally included in the box are returned. The packaging will need to offer the same protection as the original did if the original is no longer available.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyReplacementRoyalMailInStock: `Hi {{name}},

I'm sorry to hear about this. We have stock available and can replace this for you. Please use the link below to get a Royal Mail free post label for your return.

www.royalmail.com/track-my-return/pick-a-retailer

The goods will need to be boxed for transit. Please ensure all items originally included in the box are returned. 

The packaging will need to offer the same protection as the original did if the original is no longer available.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyReplacementRoyalMailOutOfStock: `Hi {{name}},

I'm sorry to hear about this. Unfortunately we do not currently have another in stock so we cannot replace this for you straight away. It might be a week or two until we see new stock come in. Would you like a replacement when stock is available?

Please use the link below to get a Royal Mail free post label for your return.

www.royalmail.com/track-my-return/pick-a-retailer

The goods will need to be boxed for transit. Please ensure all items originally included in the box are returned. The packaging will need to offer the same protection as the original did if the original is no longer available.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnWarrantyRepairDPDCollection: `Hi {{name}},

I'm sorry to hear about this. Lets get it back and book it in for repair under warranty with the service centre. 

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The goods will need to be boxed for transit. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyWarrantyRoyalMail: `Hi {{name}},

I'm sorry to hear about this!

Let’s get it back and booked in for repair under warranty with the service centre. The item will need to be boxed for transit and the packaging will need to offer the same protection as the original did if the original is no longer available. 

Please click on the link below to get your Royal Mail returns label. 

www.royalmail.com/track-my-return/pick-a-retailer

We will be in touch as soon as the repair has been completed. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyWorkshopRepair: `Hi {{name}},

I'm sorry to hear about this. I'm sure our workshop can sort this out for you.

Please let me know the best week day and address and I can book a collection with DPD for the return. The driver will bring a label. Unfortunately it is not possible to select a time slot when booking the collection but you will be allocated a time slot on the day. If the time slot you are given is not convenient, please follow the link on the txt or email from DPD to change the day. We do not advise taking a day off work.

The guitar will need to be boxed for transit. The packaging will need to offer the same protection as the original did if the original is no longer available. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        webUnwantedReturn: `Hi {{name}},
        
Please send the {{product}} you wish to return back to the below address with all the original packaging and any other items included in the box. Please ensure the goods are packaged in a way that offers equal protection to the packaging in which they were received. Please do not write on or mark the manufacturer's packaging. When appropriate we advise using a delivery service that offers insurance, tracking and a signature upon receipt. We have no preference which courier you use.

RM-{{returnNumber}}
GAK Returns
60 Gladstone Place
Brighton
BN2 3QD

Our returns address is not customer facing and as such cannot accept returns in person. 

Please return the goods to us within 14 days. Your order will be refunded as soon as the goods are processed by our returns team. Please allow up to 7 days for your bank to clear the funds from that point. Paypal refunds are usually processed and clear on the day the transaction is refunded. 

Please note! Unfortunately we cannot offer collections or reimburse the cost of returns postage for unwanted orders. If any item cannot be restocked as new we may seek to reduce your refund total to reflect any depreciation in the value of the goods. If there are any issues processing your return we will be in touch to discuss this before any final action is taken. 

Please see the Returns & Refunds page on our website www.gak.co.uk/en/returns-and-refunds for more information.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webUnwantedReturnDropoff: `Hi {{name}},

If you wish to drop off the return in store please have your returns reference RM-{{returnNumber}} ready to give to to a member of staff. All items will need to be returned with original packaging and any other items included in the box such as a power supply or any documentation.

As you paid for the order online, the staff in our store might not be able to exchange or refund the goods for you. Your returned goods will be transferred to our Returns Department where the return will be processed. 

Unfortunately we cannot always transfer credit from online orders to orders placed in store but our shop staff will be happy to help you with any new purchase you wish to make.

Please be aware that if any item cannot be restocked as new we may need to reduce your refund total to reflect any depreciation in the value of the goods.

Full terms and conditions can be found on our website www.gak.co.uk/en/returns-and-refunds.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webReturnFaultyAdvanceReplacement: `Hi {{name}},

I'm sorry to hear about this. A replacement should be with you tomorrow. Please use the link below to get a Royal Mail free post label for your return. 

www.royalmail.com/track-my-return/pick-a-retailer

The goods will need to be boxed for transit. Please ensure all items originally included in the box are returned. The packaging will need to offer the same protection as the original did if the original is no longer available.

Kind regards,

{{salesman}}
GAK.co.uk`,

        webFraudCheck: `Hi {{name}},

Unfortunately we cannot process this order for you. The payment has been successful, but the security information cannot be verified as the card used is not 3D Secure enrolled. 

The order will be cancelled and no funds will be processed.

Your bank have already preauthorised the funds but the transaction will not be completed. The payment has been reversed and the funds will usually clear back to your available balance within 3-5 working days. If you still require the goods, please replace the order and use a 3D Secure enrolled card or an alternative method of payment.

Kind regards,

{{salesman}}
GAK.co.uk`,


        contactSupportPioneer: `Hi {{name}},
        
I'm sorry to hear about this. If the product is faulty we can offer you a replacement. 

Before we proceed with the return, it is worth contacting tech support to see if they have any solution to the issues you have reported. Sometimes updating drivers, reinstalling or adjusting user setting can fix the issue and save you the hassle of having to return the product. 

www.pioneerdj.com/en-gb/support/contact/united-kingdom

If they think that the product is faulty, simply reply to this email and we can arrange the return for you. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        contactSupportPioneerOver30: `Hi {{name}},
        
I'm sorry to hear about this. The item is covered by a manufacturers warranty so we can send it back for repair however before we do this it would be worth contacting Tech Support to see if they can trouble shoot this issue for you or offer any advice. 

www.pioneerdj.com/en-gb/support/contact/united-kingdom

If they think the unit is faulty they will advise returning it to us. If this turns out to be the case please get back in touch and we can arrange this. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        contactSupportFocusrite: `Hi {{name}},
        
I'm sorry to hear about this. 

Focusrite usually like to deal with end-users direct for all warranty issues. If you open a support ticket and let them know that the goods are faulty they can arrange a repair/replacement for you. 

https://support.focusrite.com/hc/en-gb/requests/new?ticket_form_id=70511

Kind regards,

{{salesman}}
GAK.co.uk`,

        contactSupportFocusriteOver30: `Hi {{name}},
        
I'm sorry to hear about this. The item is covered by a manufacturers warranty so we can send it back for repair however before we do this it would be worth contacting Tech Support to see if they can trouble shoot this issue for you or offer any advice. 

https://support.focusrite.com/hc/en-gb/requests/new?ticket_form_id=70511

If they think the unit is faulty they will advise returning it to us. If this turns out to be the case please get back in touch and we can arrange this. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        unwantedReturn: `Hi {{name}},

I'm sorry to hear you are not getting on with your {{product}}. Please can you confirm you have all the original packaging?

You will need to post it back to us - we recommend these guys, they're a comparison site aimed at helping you find the best service and price. 

https://www.parcelmonkey.co.uk

Here are the returns details for you. Your returns number is: RM-{{returnNumber}}

The returns address is:

<b>The Guitar, Amp, and Keyboard Centre
Returns Dept (RM-{{returnNumber}})
60 Gladstone Place
Brighton
East Sussex
BN2 3QD</b>

Please respond to this email once posted, along with any tracking info if it's available.

Also, please read the attached returns document, it is important. Once it has been received, inspected and deemed in a 'sellable as new' condition, we will action your refund. 

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind regards, 

{{salesman}}
GAK.co.uk`,

        faultyReturn: `Hi {{name}},

I'm sorry to hear your {{product}} {{faultType}}, though I will be able to get that sorted for you. {{additionalInfo}}

Please reply to this email with the following:

The address you would like me to collect from and your ideal working day for a courier collection.

Confirmation that the unit is ready for collection as per the below. 

<b>• Ensure the item is well packaged, wrapped and/or double boxed and ready for transit. </b>

<b>• The packaging will need to offer equal or better protection than the original did if the original is no longer available.</b>

The driver will bring all the relevant labels and return the parcel to us within a few working days.

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind regards,

{{salesman}}
GAK.co.uk`,

        warrantyRepair: `Hi {{name}}, 

Sorry to hear that your {{product}} has gone faulty, it is still within warranty though, so I will be able to get it sorted for you. {{additionalInfo}}

Please reply to this email with the following:

<b> • The fault description.

    • The address you would like me to collect from.

    • Confirmation that the unit is ready for collection as per the below:</b>

<em>Please ensure the item is well packaged, wrapped and/or double boxed and ready for transit. The packaging will need to offer equal or better protection than the original did if the original is no longer available.</em>

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind Regards,

{{salesman}}
GAK.co.uk`,

        stockNotification: `Hi {{name}},

{{salesman}} here from GAK. I noticed you have requested a stock notification on the {{product}}.

I am pleased to say that we are hoping to see stock around {{stockDate}}.

It's hard to guarantee stock will be free upon arrival so if you are interested a 10% deposit will secure one for you. 

Just give me a call on {{salesman-phone}} quoting reference {{salesRef}} or email back anytime if you wish to hear more. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        stockNotificationGibson: `Hi {{name}},

You recently requested to receive stock notification on the out of stock <b>{{product}}</b> - Great choice! 

I have this on order already but unfortunately Gibson are vague with delivery dates so the best estimate I can give would be within 1-3 months. If you don't mind the wait and want to ensure you get one of the first ones back in the country, I can get the ball rolling with a 10% deposit. How does that sound?

To place a preorder please call me on {{salesman-phone}} below or reply to this email and quote ref {{salesRef}}

Kind regards,

{{salesman}}
GAK.co.uk`,

        stockNotificationEpiphone: `Hi {{name}},

You recently requested to receive stock notification on the out of stock <b>{{product}}</b> - Great choice! 

I have this on order already but unfortunately Epiphone are vague with delivery dates so the best estimate I can give would be within 1-3 months. If you don't mind the wait and want to ensure you get one of the first ones back in the country, I can get the ball rolling with a 10% deposit. How does that sound?

To place a preorder please call me on {{salesman-phone}} below or reply to this email and quote ref {{salesRef}}

Kind regards,

{{salesman}}
GAK.co.uk`,

        callbackType: `Hey {{callbackSalesman}},

{{name}} is after a call back when you're free.</b> {{additionalInfo}}

Please call on {{customerPhone}}.

Cheers,
{{salesman}}`,

        callbackType2: `Hey {{callbackSalesman}},

{{name}} {{callbackType}} <b>{{product}}.</b> {{additionalInfo}}

Please call on {{customerPhone}} or email them at {{customerEmail}}.

Cheers,
{{salesman}}`,

        callbackType3: `Hey {{callbackSalesman}},

{{name}} has requested an update on his order. {{additionalInfo}}

Please call on {{customerPhone}} or email them at {{customerEmail}}.

Return Number: RM-<a href="https://admin.gak.co.uk/StockreturnItems/Edit/{{returnNumber}}" target="_blank">{{returnNumber}}</a>

Cheers,

{{salesman}}`,

        callbackType4: `Hey {{callbackSalesman}},

{{name}} has requested an update on his return. {{additionalInfo}}

Please call on {{customerPhone}} or email them at {{customerEmail}}.

Return Number: RM-<a href="https://admin.gak.co.uk/StockreturnItems/Edit/{{returnNumber}}" target="_blank">{{returnNumber}}</a>

Cheers,

{{salesman}}`,

        courierClaimDamaged: `Hi {{name}},
        
I'm so sorry to hear about this. Can you please send some photos of this issue to me at {{salesman-email}}. In order to claim with the courier will require photos showing the following:

- Outer box
- Inner box and/or packaging
- Couriers shipping label
- Damage to the item

Please remember to include your order number and I'll have a look at this for you. 

Kind regards,

{{salesman}}
GAK.co.uk`,

        };

    return templates[templateName];
}

function fillTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, data[key]);
    }
    return template;
}