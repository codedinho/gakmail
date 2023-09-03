// Define salesmen data
const salesmenData = {
    Charlie: {
        email: "charlie.marshall@gak.co.uk",
        phone: "01273 665426",
        abrev: "CM",
        iconPath: './assets/icons/charlie.png'
    },
    Mike: {
        email: "mike.fallon-gray@gak.co.uk",
        phone: "01273 665409",
        abrev: "MF",
        iconPath: './assets/icons/mike.png'
    },
    Chris: {
        email: "chris.ottrige@gak.co.uk",
        phone: "01273 665401",
        abrev: "CO",
        iconPath: './assets/icons/chris.png'
    },
    Richard: {
        email: "richard.brincklow@gak.co.uk",
        phone: "01273 665403",
        abrev: "RB",
        iconPath: './assets/icons/richard.png'
    },
    Dan: {
        email: "dan.harding@gak.co.uk",
        phone: "01273 665406",
        abrev: "DH",
        iconPath: './assets/icons/dan-harding.png'
    },
    Jules: {
        email: "jules.monk@gak.co.uk",
        phone: "01273 665408",
        abrev: "JM",
        iconPath: './assets/icons/jules.png'
    },
    Reif: {
        email: "james.hunter@gak.co.uk",
        phone: "01273 665",
        abrev: "RB",
        iconPath: './assets/icons/james-hunter.png'
    },
    Jack: {
        email: "jack.breeze-lamb@gak.co.uk",
        phone: "01273 665420",
        abrev: "JBL",
        iconPath: './assets/icons/jack-breeze-lamb.png'
    },
    Education: {
        email: "edu@gak.co.uk",
        phone: "01273 665410",
        abrev: "EDU",
        iconPath: './assets/icons/edu.png'
    },
    GuitarShop: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665412",
        abrev: "GS",
        iconPath: './assets/icons/guitar-shop.png'
    },
    ProAudio: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665413",
        abrev: "PA",
        iconPath: './assets/icons/proaudio-shop.png'
    },
    DrumShop: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665414",
        abrev: "DS",
        iconPath: './assets/icons/drum-shop.png'
    },
    PianoShop: {
        email: "guitarshop@gak.co.uk",
        phone: "01273 665420",
        abrev: "PS",
        iconPath: './assets/icons/piano-shop.png'
    }
};

// Call the function to generate the icons on page load
window.addEventListener('load', function () {
    updateEmailPreview(); // Call updateEmailPreview on page load
});

// Function to generate salesman icons
function generateSalesmanIcons(selectedSalesman = 'Charlie') {

    for (const salesmanName in salesmenData) {
        const salesman = salesmenData[salesmanName];
        const iconElement = document.createElement('div');
        iconElement.classList.add('salesman-icon');
        iconElement.setAttribute('data-salesman', salesmanName); // Store the salesman name as a data attribute

        // Create an image element for the icon
        const iconImage = document.createElement('img');
        iconImage.src = salesman.iconPath;
        iconImage.alt = salesmanName;

        iconElement.appendChild(iconImage);

        // Attach a click event listener to each icon
        iconElement.addEventListener('click', function () {
            // Handle icon click event here
            const selectedSalesman = iconElement.getAttribute('data-salesman');
            document.getElementById('salesman').value = selectedSalesman;
            updateEmailPreview();
        });
    }

    // Set the default icon based on the selected salesman
    const defaultIcon = salesmenData[selectedSalesman].iconPath;
    document.getElementById('player-icon-image').src = defaultIcon;
}

// Call the function to generate the icons on page load
window.addEventListener('load', function () {
    generateSalesmanIcons();
});

// Get a reference to the player icon image element
const playerIconImage = document.getElementById('player-icon-image');

// Set the default icon to Charlie's icon
playerIconImage.src = salesmenData['Charlie'].iconPath;

// Get references to your dropdown elements
const salesmanDropdown = document.getElementById('salesman');
const templateDropdown = document.getElementById('template');
const faultTypeDropdown = document.getElementById('fault-type');

// Add more dropdowns if needed

// Apply the dropdown-style class to all dropdowns
salesmanDropdown.classList.add('dropdown-style');
templateDropdown.classList.add('dropdown-style');
faultTypeDropdown.classList.add('dropdown-style');


// Add an event listener to the template dropdown
templateDropdown.addEventListener('change', function () {
    const selectedTemplate = templateDropdown.value;
    hideUnusedFields(selectedTemplate);
});


// Define a CSS class for styling the dropdown
const dropdownStyle = `
    width: 100%; /* Set the width to 100% or adjust as needed */
    height: 48px;
    padding: 10px;
    padding-left: 7px;
    border-radius: 4px;
    background-color: #ffffff;
    font-family: 'Arial', cursive;
    font-size: 14px;
    color: #333;
    display: block;
    color: #000000;
    line-height: 35px;
`;

// Apply the CSS class to the dropdown element
salesmanDropdown.style = dropdownStyle;
templateDropdown.style = dropdownStyle;
faultTypeDropdown.style = dropdownStyle;

// Populate the salesman dropdown
for (const salesmanName in salesmenData) {
    const option = document.createElement('option');
    option.value = salesmanName;
    option.textContent = salesmanName;


    salesmanDropdown.appendChild(option);
}

// Add an event listener to the template dropdown
templateDropdown.addEventListener('change', function () {
    const selectedTemplate = templateDropdown.value;
    hideUnusedFields(selectedTemplate);
});


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
    const faultType = document.getElementById('fault-type').value;
    const stockDate = document.getElementById('stockDate').value;
    const salesRef = document.getElementById('salesRef').value;
    const paymentLink = document.getElementById('paymentLink').value;


    // Define a mapping of template names to headlines
    const templateHeadlines = {
        paymentLink: `GAK - Payment Link`,
        paymentLink2: `GAK - Payment Link - ${product}`,
        webQuote: `👋 ${name}, GAK has sent you an offer!`,
        webQuote2: `👋 ${name}, GAK has sent you an offer!`,
        webQuote3: `👋 ${name}, GAK has sent you an offer!`,
        bestPrice: `GAK - Best Price - ${product}!`,
        webReturn: `GAK Web Return - ${returnNumber}`,
        unwantedReturn: `👋 ${name}, here's your GAK return details - ${returnNumber}`,
        faultyReturn: `GAK Return - ${product}`,
        warrantyRepair: `GAK Warranty Repair - ${product}`,
        stockNotification: `GAK Stock Notification - ${product}`,
        stockNotificationGibson: `GAK Stock Notification - ${product}`
    };

    // Set a default headline of "GAK" for templates without a specific headline
    let subjectHeadline = 'GAK';

    // Check if the template name has a corresponding headline, if not, use the default
    if (template in templateHeadlines) {
        subjectHeadline = templateHeadlines[template];
    }

    // Use the subjectHeadline variable in the email preview or wherever needed
    document.getElementById('email-headline').textContent = subjectHeadline;

    
    // Set the email headline based on the selected template
    const emailHeadline = templateHeadlines[template];
    document.getElementById('email-headline').textContent = emailHeadline;

    // You need to define and initialize emailContent
    const emailTemplate = getEmailTemplate(template);

    const salesmanDropdown = document.getElementById('salesman');
    const selectedOption = salesmanDropdown.options[salesmanDropdown.selectedIndex];

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
        'fault-type': faultType, 
        'stockDate': stockDate,
        'salesRef': `Q-${salesmanData.abrev}-${salesRef}`, // Construct the quote reference
        'paymentLink': paymentLink,
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
        selectedTemplate === "unwantedReturn"
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

        if (shouldHide) {
            selectElement.style.display = 'none';
            label.style.display = 'none';
        } else {
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

// Function to copy text to the clipboard
function copyToClipboard(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}

// Get references to the copy button and the copied message container
const copiedMessage = document.getElementById('copiedMessage');

// Add an event listener to the copy button (for copying functionality)
copyButton.addEventListener('click', function () {
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
    const correctPassword = 'lespaul'; // Yes, I know this isn't hidden. Well found. 

    if (enteredPassword === correctPassword) {
        // Password is correct, close the popup
        closePopup();
    } else {
        // Password is incorrect, display an error message (you can customize this)
        alert('Incorrect password. Please try again.');
        passwordInput.value = ''; // Clear the input field
    }
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
GAK

`,

paymentLink2: `Hi {{name}},

You can follow the link below to complete your purchase of the <b>{{product}}</b>, your reference is {{salesRef}}.

{{paymentLink}}

Please respond to this email and let me know once this is complete. 

<em>Please also ensure you fill out the appropriate fields for an alternative delivery address if you intend to send it somewhere other than your billing address. If you are using Paypal, double check your address is up to date.</em>

You can reach me via email, or on {{salesman-phone}} if any issues.

Kind regards,
{{salesman}}
GAK

`,

        webQuote: `Hi {{name}},

        {{salesman}} here from GAK, I can see you were interested in the {{product}} online. I am pleased to say that not only do I have it available in stock but if you ordered over the phone or via email with me I would be able to look into either offering a deal on the price or including some extra bits depending on what is available. If you would like to order or find out more please call me on {{salesman-phone}} or email back via {{salesman-email}} for a quote on the price.

If you are looking to finance the order, then the web price is usually the best I can do however, I do have some extra options that may not be available on the website.

Kind Regards,
{{salesman}}
GAK`,

        webQuote2: `Hi {{name}},

{{salesman}} here from GAK. We've noticed from your recent GAK Websearch that you've been checking out this - {{product}}

Great choice! Just letting you know that there is possibly a small discount or free gift we can include with this order should you so wish. This deal is only available if you order through me, and discounts can only be applied for an outright purchase.
    
We also offer great finance options over the phone if that is the way that you intend to go (unfortunately only at our advertised prices for 0% finance, though I may either have some extra options not listed or I may be able to throw in some freebies!).

If you are interested, you can call me direct on {{salesman-phone}} between 11.30-5.30pm, or call the main 01273 665400 on the site and ask for {{salesman}}. Alternatively you can email me at {{salesman-email}}. 

If not, please disregard this email and have a great week!

Kind regards,
{{salesman}}
GAK`,


        webQuote3: `Hi {{name}},

{{salesman}} here from the GAK Mail Order team, I can see you were interested in the {{product}} online. I am pleased to say that not only do I have it available in stock but if you ordered over the phone or via email with me I would be able to look into either offering a deal on the price or including some extra bits depending on what is available. If you would like to order or find out more please call me on {{salesman-phone}} or email back via {{salesman-email}} for a quote on the price.

If you were looking for finance, then the web price is usually the best I can do however, I do have some extra options that may not be available on the website.

Kind Regards,
{{salesman}}
GAK`,

        bestPrice: `Hi {{name}},

{{salesman}} here from GAK, thanks for getting in touch. 

I am pleased to say the {{product}} is currently in stock. The best price I can offer for a cash purchase is {{bestPrice}}. How would that sound?

Just give me a call on {{salesman-phone}} quoting reference {{salesRef}} or email back anytime to proceed. 

Kind Regards,
{{salesman}}
GAK`,

        webReturn: `Hi {{name}},

Please send the items you wish to return back to the below address. Ideally, each item will need to be returned with all the original packaging and any other items included in the box such as a power supply or any documentation. Please ensure the package is wrapped and/or double boxed for transit to protect the manufacturers packaging against damage. Please do not write on or mark the manufacturers packaging. When appropriate we advise using a service that offers insurance, tracking and a signature upon receipt. We have no preference which courier service you use.

<b>({{returnNumber}})
GAK Returns
60 Gladstone Place
Brighton
BN2 3QD</b>

From the date of receipt of this email you have 14 days in which to return the goods. Please allow up to 7 days for the refund to be processed. Our Returns Dept. will send you a confirmation email as soon as the refund is processed. Please allow up to 7 days for you bank to clear the funds from that point. Please be aware that we can no longer offer collections for unwanted orders and do not reimburse the cost of returns postage.

Please be aware that if any item cannot be restocked as new we may need to reduce your refund total to reflect any depreciation in the value of the goods. Please see the terms and conditions on our website (link here www.gak.co.uk/en/terms-and-conditions) for more information.

Kind Regards,
{{salesman}}`,

        unwantedReturn: `Hi {{name}},

I'm sorry to hear you are not getting on with your {{product}}. Please can you confirm you have all the original packaging?

You will need to post it back to us - we recommend these guys, they're a comparison site aimed at helping you find the best service and price. 

https://www.parcelmonkey.co.uk

Here are the returns details for you. Your returns number is: {{returnNumber}}

The returns address is:

<b>The Guitar, Amp, and Keyboard Centre
Returns Dept ({{returnNumber}})
60 Gladstone Place
Brighton
East Sussex
BN2 3QD</b>

Please respond to this email once posted, along with any tracking info if it's available.

Also, please read the attached returns document, it is important. Once it has been received, inspected and deemed in a 'sellable as new' condition, we will action your refund. 

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Many thanks, 
{{salesman}}
GAK`,

        faultyReturn: `Hi {{name}},

I'm sorry to hear your {{product}} {{fault-type}}, I will be able to get that sorted for you.

Please reply to this email with the following:

The address you would like me to collect from and your ideal working day for a courier collection.

Confirmation that the unit is ready for collection as per the below. 

<b>• Ensure the item is well packaged, wrapped and/or double boxed and ready for transit. </b>

<b>• The packaging will need to offer equal or better protection than the original did if the original is no longer available.</b>

The driver will bring all the relevant labels and return the parcel to us within a few working days.

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind regards,
{{salesman}}
GAK`,

        warrantyRepair: `Hi {{name}}, 

Sorry to hear that your {{product}} has gone faulty, it is still within warranty though, so I will be able to get it sorted for you.

Please reply to this email with the following:

<b> • The fault description.

    • The address you would like me to collect from.

    • Confirmation that the unit is ready for collection as per the below:</b>

<em>Please ensure the item is well packaged, wrapped and/or double boxed and ready for transit. The packaging will need to offer equal or better protection than the original did if the original is no longer available.</em>

If you have any issues you can reach me on my direct line {{salesman-phone}} or email back at {{salesman-email}}.

Kind Regards,
{{salesman}}
GAK`,

        stockNotification: `Hi {{name}},

{{salesman}} here from GAK. I noticed you have requested a stock notification on the {{product}}.

I am pleased to say that we are hoping to see stock around {{stockDate}}.

It's hard to guarantee stock will be free upon arrival so if you are interested a 10% deposit will secure one for you. 

Just give me a call on {{salesman-phone}} quoting reference {{salesRef}} or email back anytime if you wish to hear more. 

Kind regards,
{{salesman}}
GAK`,

        stockNotificationGibson: `Hi {{name}},

You recently requested to receive stock notification on the out of stock <b>{{product}}</b> - Great choice! 

I have this on order already but unfortunately Gibson are vague with delivery dates so the best estimate I can give would be within 1-3 months. If you don't mind the wait and want to ensure you get one of the first ones back in the country, I can get the ball rolling with a 10% deposit. How does that sound?

To place a preorder please call me on {{salesman-phone}} below or reply to this email and quote ref {{salesRef}}

Kind regards,
{{salesman}}
GAK`,
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
