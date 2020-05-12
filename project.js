    // Constructor Function for generating Objects
    function storeItem(productId, name, price, quantity, maxPerCustomer, category, costOfShipping, reviews, description, image) {
        this.productId = productId; // String the ID of the product
        this.name = name; // String the name of the product
        this.price = price; // Number Price Canadian / Float – the price of the item
        this.quantity = quantity; // Number Int the amount of the item available on hand
        this.maxPerCustomer = maxPerCustomer; // Int – the max amount that can be added to cart
        this.category = category; // String the category of the item
        this.costOfShipping = costOfShipping; // Float – the cost of shipping
        this.reviews = reviews; // Array – containing some reviews (strings)
        this.description = description; // String – the description of the product
        this.image = image; // String – link to the image file
    }

    function cartItem(productId, price, quantity, shipping) {
        this.productId = productId; // String the id of the product
        this.price = price; // Float – the price of the item
        this.quantity = quantity; // Int – the amount of this product in the cart
        this.shipping = shipping; // Float – cost of shipping for this item
    }

    // Global Empty Arrays to contain our objects of Store Items and Cart Items that will be created through the constructor
    let storeItems = [];
    let cartItems = [];

    // Global variable especially for changing the exchangeRate according to the selection in the dropdown CAD or USD which happens inside of dispalyStoreItems()
    var exchangeRate = 0;



    function initializeStoreItems() {

        //displayStoreItems(); // Calling the function to display store items if I want them be displayed immediately
        // Few lines to reveal the date and time
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateTime = `${date} ${time}`;
        // I know that variable const of today with value new Date(); could display all this with extra information of Gmt Eastern dAylight Time but I wanted
        // to dispaly only the Year, month, date, hours, minutes and seconds but not full info like new Date(); provides)
        // Outputs our date and time through id of the DOM
        document.getElementById('dateArea').innerHTML = dateTime;
        document.getElementById('dateAreaTwo').innerHTML = dateTime;

        // Constructor way adding new objects and pushing them into our array users
        const endeavorOne = storeItems.push(
            new storeItem(
                '1341-0207',
                'Endeavour Perpetual Calendar',
                45000,
                20,
                1,
                'Complications',
                399, [
                    '– Diameter: 40.8 mm ',
                    'Height: 11.1 mm ',
                    'Movement'
                ],
                `Our Endeavour Perpetual Calendar is best known for its simple design.It shows only the time, date, month and power reserve.
                It compensates mechanically
                for the differing number of days in the months, hence the name perpetual.`,
                'images/endvr1.png' // adding filenames as strings in order to add the required images with the indicate path images/
            )
        );
        const endeavorTwo = storeItems.push(
            new storeItem(
                '1200-0401',
                'Endeavour Centre Seconds',
                25000,
                50,
                2,
                'Classic',
                350, [
                    `again the instant the crown is pushed
                     in, to coincide with a time signal.`
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Brown alligator leather`,
                'images/endvr2.png' // adding filenames as strings in order to add the required images with the indicate path images/
            )
        );


        const endeavorThree = storeItems.push(
            new storeItem(
                '1200-0200',
                'Endeavour Centre',
                30000,
                60,
                3,
                'Classic',
                350, [
                    `HACKING SECONDS`
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/endvr3.png' // adding filenames as strings in order to add the required images with the indicate path images/
            )
        );


        const endeavorFour = storeItems.push(
            new storeItem(
                '1200-5679',
                'Endeavour',
                25000,
                65,
                5,
                'Classic',
                320, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/endvr4.png' // adding filenames as strings in order to add the required images
            )
        );

        const endeavorFive = storeItems.push(
            new storeItem(
                '1205-7896',
                'Venturer',
                40000,
                70,
                8,
                'Complications',
                330, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/vntr1.png' // adding filenames as strings in order to add the required images
            )
        );

        const endeavorSix = storeItems.push(
            new storeItem(
                '1245-4455',
                'Venturer Artisan',
                80000,
                40,
                9,
                'Complications',
                320, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Automatic bi-directional pawl winding system 
            – Brown alligator leather`,
                'images/vntr2.png' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorSeven = storeItems.push(
            new storeItem(
                '1243-4466',
                'Venturer Unique',
                42000,
                32,
                5,
                'Complications',
                322, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Automatic bi-directional pawl winding system 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/vntr3.png' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorEight = storeItems.push(
            new storeItem(
                '1211-2345',
                'Venturer Classy',
                23000,
                42,
                4,
                'Complications',
                360, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Automatic bi-directional pawl winding system 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/vntr4.png' // adding filenames as strings in order to add the required images
            )
        );



        const endeavorNine = storeItems.push(
            new storeItem(
                '1244-2344',
                'Pioneer',
                22000,
                42,
                4,
                'Sporty',
                360, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Automatic bi-directional pawl winding system 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/pnr1.png' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorTen = storeItems.push(
            new storeItem(
                '1236-4578',
                'Pioneer Sporty',
                18000,
                42,
                4,
                'Sporty',
                360, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Automatic bi-directional pawl winding system 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/pnr2.png' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorEleven = storeItems.push(
            new storeItem(
                '1241-2784',
                'Swiss Alp',
                26000,
                42,
                4,
                'Sporty',
                360, [
                    `HACKING SECONDS
                The incorporation of a Hacking Seconds into our watches is an ingenious feature, which enables the watch to be set precisely to the second. 
                The seconds hand remains stationary when the crown is pulled out to adjust the time – and it starts moving again the instant the crown is pushed
                 in, to coincide with a time signal. `
                ],
                `Case
            – Diameter: 40 mm – Height: 10.7 mm
            Movement 
            – Self-winding HMC 200 calibre 
            – Minimum 3-day power reserve 
            – 21,600 Vib/h 
            – Automatic bi-directional pawl winding system 
            – Straumann®  hairspring
            Functions 
            – Hours and minutes, central seconds
            Strap 
            – Brown alligator leather`,
                'images/alp1.png' // adding filenames as strings in order to add the required images
            )
        );



        const endeavorTwelve = storeItems.push(
            new storeItem(
                '1246-2234',
                'Swiss Alp New',
                27000,
                42,
                4,
                'Sporty',
                360, ["HACKING SECONDS,", "The incorporation of a Hacking Seconds", "into our watches is an ingenious feature"],
                `Case– Diameter: 40 mm– Height: 10.7 mm
                 Movement– Self - winding HMC 200 calibre– Minimum 3 - day power reserve– 21, 600 Vib / h– Automatic bi - directional pawl winding system– Straumann® hairspring
                 Functions– Hours and minutes, central seconds
                 Strap– Brown alligator leather `,
                'images/alp2.png' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorThirteen = storeItems.push(
            new storeItem(
                '1245-2478',
                'Concept Tourbillon',
                26000,
                40,
                3,
                'Complications',
                350, [
                    `HACKING SECONDS`
                ],
                `
                        Case– Diameter: 40 mm– Height: 10.7 mm
                        Movement– Self - winding HMC 200 calibre– Minimum 3 - day power reserve– 21, 600 Vib / h `,
                'images/concept.jpg' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorFourteen = storeItems.push(
            new storeItem(
                '1244-1254',
                'Concepto',
                29000,
                46,
                8,
                'Complications',
                370, [
                    `HACKING SECONDS`
                ],
                `Case– Diameter: 40 mm– Height: 10.7 mm
                 Movement– Self - winding HMC 200 calibre– Minimum 3 - day power reserve– 21, 600 Vib / h `,
                'images/swiss.jpg' // adding filenames as strings in order to add the required images
            )
        );


        const endeavorFifteen = storeItems.push(
            new storeItem(
                '1256-1234',
                'Conceptoa Complex',
                28000,
                43,
                2,
                'Classic',
                330, [
                    `The incorporation of a Hacking Seconds into our watches`
                ],
                ` Case– Diameter: 40 mm– Height: 10.7 mm
                        Movement– Self - winding HMC 200 calibre– Minimum 3 - day power reserve– 21, 600 Vib / h `,
                'images/concept4.jpg' // adding filenames as strings in order to add the required images with the indicate path images/
            )
        );

    } // End of the function initializeStoreItems()




    document.addEventListener('DomContentLoaded', loadingAll);
    // This line of code helps us in case we attach js folder on top so it Lets HTML code run first and then the rest of JavaScript to load just in case


    // Function to utilize on load specially
    function loadingAll() {
        initializeStoreItems();
        displayStoreItems();
        //displayCartItems();
        calculateCartTotals();
        //once complete activate the calculate
    }





    function displayStoreItems() {

        const outputElement = document.getElementById('inventoryOutput');
        const departmentSelection = document.getElementById('displayFilter')

        // clears the output every time
        outputElement.innerHTML = "";


        //Loop through array main Looping
        for (var i = 0; i < storeItems.length; i++) {

            //var tempEL = document.createElement("p");
            var tempStoreItem = storeItems[i]; //Instead of typing StoreItems[i] every time the array we need, we can assign to a variable and use that to refer
            //to the properties in our object instead
            //The above method is easier as there's like kinda less code

            //First I've written 4 conditioanls to test if it equals which category so much repetitive and redundant code was there for 
            //Bootstrap cards to be created. For few days I thought that there should be a way to do it with one conditional and here you go Fabulous solution
            if (departmentSelection.value === 'All' ||
                departmentSelection.value === tempStoreItem.category) {

                //The awesomeness of JavaScript lies in this if conditionals where I test if it equals the dropdown value CAD or USD and
                // multiply the same price we stored to the exchangeRate like 1.0 for CAD and  0.72 for US. To let it change everywhere
                // I multiplied it in displayCartItems fucntion as well plus the Total Calculation function and exchangeRate is set to 0 as a global variable  
                let currencySelector = document.getElementById('currencySelector');
                if (currencySelector.value === "CAD") {
                    exchangeRate = 1.0;
                    document.querySelector("img.currencyFlag").src = "images/canada.jpg";
                } else if (currencySelector.value === "USD") {
                    exchangeRate = 0.72;
                    document.querySelector("img.currencyFlag").src = "images/US.jpg";

                }


                //main CardItem Div as per Bootstrap card creation system on https://getbootstrap.com/docs/4.0/components/card/
                let cardItem = document.createElement("div");
                cardItem.className = "card col-lg-auto";
                cardItem.style = "width: 18rem;";
                cardItem.setAttribute("id", "card");

                // To create Image element
                let cardImg = document.createElement("img");
                cardImg.className = "card-img-top";
                cardImg.setAttribute('src', tempStoreItem.image);

                // Div element for the cardBody 
                let cardBody = document.createElement("div");
                cardBody.className = "card-body";
                // h5 text for the Product Id:
                let cardId = document.createElement("h5");
                cardId.className = "card-Id";
                cardId.innerText = "Product Id: " + tempStoreItem.productId;

                let cardText = document.createElement("h4");
                cardText.className = "card-name";
                cardText.innerText = "Product Name: " + tempStoreItem.name;

                let listStartUl = document.createElement("ul");
                listStartUl.className = "list-group " + "list-group-flush";

                let price = document.createElement("li");
                price.className = "list-group-item price";
                price.innerText = "Price: $" + tempStoreItem.price * exchangeRate; //Currency change to change when different exchangeRate has been selected in dropdown menu

                let stockItems = document.createElement("li");
                stockItems.className = "list-group-item";
                stockItems.innerText = "Quantity: " + tempStoreItem.quantity;

                let mxpCustomer = document.createElement("li");
                mxpCustomer.className = "list-group-item";
                mxpCustomer.innerText = "Max Per Customer : " + tempStoreItem.maxPerCustomer;

                let categoryChoice = document.createElement("li");
                categoryChoice.className = "list-group-item";
                categoryChoice.innerText = "Category: " + tempStoreItem.category;

                outputElement.appendChild(cardItem);
                cardItem.appendChild(cardImg);
                cardItem.appendChild(cardBody);
                cardBody.appendChild(cardId);
                cardBody.appendChild(cardText);
                cardItem.appendChild(listStartUl);
                listStartUl.appendChild(price);
                listStartUl.appendChild(stockItems);
                cardItem.appendChild(mxpCustomer);
                cardItem.appendChild(categoryChoice);

            } // end main if
        } //end main for loop
    } //end main function

    /*  // First thought to use 4 conditionals but it was a lot of redundant code so came up with that decision luckily to combine in one conditional
                    else if (departmentSelection.value === 'Complications' && tempStoreItem.category == 'Complications') {    */




    function displayCartItems() {

        var outputCart = document.getElementById('cartOutput');

        var tempEL = document.createElement("p");

        // Once OK clicked on alert it removes the last item from the outputCart Display pretty handy to clear the output once done
        outputCart.innerHTML = "";

        let quantityCart = parseInt(document.getElementById("addItemQty").value);

        let addItemQty = document.getElementById('addItemQty');
        // if no  items in the cart available

        /*
         if (quantityCart <= 0) {
             alert('Not correct number entered');

         } else { */
        for (let index = 0; index < cartItems.length; index++) {
            let tempStoreItem = cartItems[index];


            let cardItem = document.createElement("div");
            cardItem.className = "cardTwo col-sm-auto";
            cardItem.style = "width: 14rem;";
            cardItem.setAttribute("id", "card");
            cardItem.style = "background-color: #292b2c;";
            // To create Image element
            /*
            let cardImg = document.createElement("img");
            cardImg.className = "card-img-top-Two"; // or top used to be before
            cardImg.setAttribute('src', tempStoreItem.image); 
            */
            // cardImg.style = "width: 100px;";
            //cardImg.style = "height: 180px;";
            // Div element for the cardBody 
            let cardBody = document.createElement("div");
            cardBody.className = "card-body-Two";
            // h5 text for the Product Id:
            let cardId = document.createElement("h5");
            cardId.className = "card-Id";
            cardId.innerText = "Product Id: " + tempStoreItem.productId;
            cardId.style = "color: #b5c706;";

            let listStartUl = document.createElement("ul");
            listStartUl.className = "list-group " + "list-group-flush";
            listStartUl.style = "color: #b5c706;";
            let price = document.createElement("li");
            price.className = "list-group-item cart";
            //price.innerText = "Price: $" + tempStoreItem.price;
            price.innerText = "Price: $" + tempStoreItem.price * exchangeRate;
            price.style = "background-color: #292b2c;";

            let stockItems = document.createElement("li");
            stockItems.className = "list-group-item cart";
            stockItems.innerText = "Quantity: " + tempStoreItem.quantity;
            stockItems.style = "background-color: #292b2c;";

            let cartSubtotal = document.createElement("li");
            cartSubtotal.className = "list-group-item cart";
            var currencyChangedPrice = tempStoreItem.price * exchangeRate;
            cartSubtotal.innerText = "Subtotal: " + `${(currencyChangedPrice * tempStoreItem.quantity)}`;
            cartSubtotal.style.backgroundColor = "#292b2c;";
            //Why background of li cartSubtotal doesn't turn into grey what's overwriting it?
            cartSubtotal.style = "color: #b5c706;";


            // append elements to the output div
            outputCart.appendChild(cardItem);
            //cardItem.appendChild(cardImg);
            cardItem.appendChild(cardBody);
            cardBody.appendChild(cardId);
            // cardBody.appendChild(cardText);
            cardItem.appendChild(listStartUl);
            listStartUl.appendChild(price);
            listStartUl.appendChild(stockItems);
            cardItem.appendChild(cartSubtotal);
            //cardItem.appendChild(categoryChoice);


        } // end of for loop

        //} // end of else condition

    } //end of the function  displayCartItems()





    //adding to the cart function seems to be working all fine by the rules with all the validations

    function addToCart() {

        var itemID = document.getElementById("addItemId").value;
        var itemIDColor = document.getElementById("addItemId");
        let itemQty = document.getElementById("addItemQty");
        var addQtyValidationMessage = document.getElementById("addQtyValidationMessage");
        var outputErrorQty = document.createElement('p');



        // iterating and validating if item actually exists in our storeItems array, Loved this .filter ES6 method so helpful to iterate and compare in one line
        let obj = storeItems.filter(x => { return x.productId === itemID });
        console.log(itemID);
        console.log(obj);


        let quantityCart = parseInt(document.getElementById("addItemQty").value);

        let points = 0;

        //VALIDATIONS inside the addtoCart function immediately without a seperate validation function

        if (Number.isInteger(quantityCart)) {
            points++;
        } else {
            itemQty.style.borderColor = "#FF0000";
            alert("Please insert the correct number into blank space!");
            outputErrorQty.innerText += 'Please insert the correct number into blank space!';
            addQtyValidationMessage.appendChild(outputErrorQty);
            outputErrorQty.className = "outputProductErNumber"
        }

        if (quantityCart <= 0) {
            alert('Enter an integer number please!');
            itemQty.style.borderColor = "#FF0000";
            outputErrorQty.innerText += 'Enter an integer number please!';
            addQtyValidationMessage.appendChild(outputErrorQty);
            outputErrorQty.className = "outputProductErNumber";
        } else {
            points++;
        }


        if (quantityCart > obj[0].maxPerCustomer) {
            alert(`Unfortunately, We can't let you buy so many timepieces as they're Limited editions`);
            itemQty.style.borderColor = "#FF0000";
            outputErrorQty.innerText += `Unfortunately, We can't let you buy so many timepieces as they're Limited editions`;
            addQtyValidationMessage.appendChild(outputErrorQty);
            outputErrorQty.className = "outputProductErNumber";
        } else {
            points++;
        }

        if (quantityCart > obj[0].quantity) {
            alert(`Unfortunately, We don't have these many watches available in stock `);
            itemQty.style.borderColor = "#FF0000";
            outputErrorQty.innerText += `Unfortunately, We don't have these many watches available in stock `;
            addQtyValidationMessage.appendChild(outputErrorQty);
            outputErrorQty.className = "outputProductErNumber";
        } else {
            points++;
        }

        // The previous valid working condition 
        /*
         if (points === 4) {
             alert("Successful purchase of the Timepiece");
             cartItems.push(new cartItem(itemID, obj[0].price, quantityCart, obj[0].costOfShipping));
             itemIDColor.style.borderColor = "#008000";
             itemQty.style.borderColor = "#008000";
         }
          */

        /*
        if (cartItems.find(p => p.productId === itemID)) {
            cartItems.indexOf.quantity++;
            console.log(cartItems.quantity);
            points++;
            alert("Successful incremented purchase of the Timepiece");
        } else {
            cartItems.push(new cartItem(itemID, obj[0].price, quantityCart, obj[0].costOfShipping));
            displayCartItems();
        }


        if (points === 5) {
            cartItems.push(new cartItem(itemID, obj[0].price, quantityCart, obj[0].costOfShipping));
            displayCartItems();
        }       if (quantityCart > obj[0].maxPerCustomer) {
        */

        if (points === 4) {
            let item = cartItems.find(p => p.productId == itemID);
            if (item) {
                item.quantity += quantityCart; // adds variable amount instead of quantity++ unary operator used to add only one item when there are 2 items
                console.log(cartItems.quantity); // Adding one item for ++ unary operator is the default behaviour
                // points++;        // nope, don't need points anymore
                alert("Successful incremented purchase of the Timepiece");
            } else {
                cartItems.push(new cartItem(itemID, obj[0].price, quantityCart, obj[0].costOfShipping));
                itemIDColor.style.borderColor = "#008000";
                itemQty.style.borderColor = "#008000";
                displayCartItems();
            }
        }



        console.log(cartItems);
        //Calling the function to display the added Items in the cart
        //displayCartItems();
        // calling calculate function here
        calculateCartTotals();

    } // end of the main function







    // removing from Cart Function

    function removeFromCart() {
        var addQtyValidationMessage = document.getElementById("addQtyValidationMessage");
        addQtyValidationMessage.innerHTML = "";
        // clears the error messages from output of errors once removing the items from the cartItems Array

        var itemID = document.getElementById("addItemId").value;
        var qtyToCart = document.getElementById("addItemQty").value;

        let obj = storeItems.filter(x => { return x.productId === itemID });

        console.log(itemID);
        console.log(obj);

        cartItems.shift(new cartItem(itemID, obj[0].price, qtyToCart, obj[0].costOfShipping));

        console.log(cartItems);

        //Calling the function to display the removal
        displayCartItems();

        //calling to clear the cart to 0 once all items are removed from the Cart
        calculateCartTotals();

        // to clear the form if cartItems has 0 items and alert that No Items in the cart
        if (cartItems.length === 0) {
            alert('No items in the cart');
            document.forms[0].reset();

        }

    } // end of function




    // Helper function to return string of object properties
    function storeItemToString(v) {
        // In future we will make this a method of the vehicle object
        return v.productId + " " + v.name + " " + v.price + " " + v.quantity + " " + v.maxPerCustomer + " " + v.category + " " + v.costOfShipping +
            " " + v.reviews + " " + v.description + " " + v.image;
    }




    function calculateCartTotals() {

        // instead of making displayCartCheckout() and calculateCartTotals() made one function that calculates and displays the output of the subtotal and etc...
        // targeting dom elements
        var cartSubtotal = document.getElementById("cartSubtotal");
        var cartShipping = document.getElementById('cartShipping');
        var subtotalShipping = document.getElementById('subtotalShipping');
        var cartTax = document.getElementById('cartTax');
        var cartTotal = document.getElementById('cartTotal');
        //declaring tax and subtotal, shipping empty variables with value 0
        const HST_TAX = 0.13;
        let estimatedShipping = 0;
        let subtotal = 0;

        // calling the function here as well
        displayCartItems();
        // looping through cartItems to get the price of the item and multiply to the quantity and get the cartSubtotal amount by that
        for (let index = 0; index < cartItems.length; index++) {
            const cartPrice = cartItems[index].price;
            var currencyChangedPrice = cartPrice * exchangeRate;
            let qty = cartItems[index].quantity;
            subtotal = subtotal + (currencyChangedPrice * qty);
        }
        cartSubtotal.innerHTML = ` <mark>Subtotal: $${subtotal.toFixed(2)} </mark> `;

        // again loopinh through the cartItems array and getting the shipping price of the item in the cart
        for (let index = 0; index < cartItems.length; index++) {
            const shippingPrice = cartItems[index].shipping;
            estimatedShipping += shippingPrice;
        }
        // output for the cart shipping price
        cartShipping.innerHTML = ` <mark>Cart Shipping: $${estimatedShipping.toFixed(2)} </mark>`;
        subtotalShipping.innerHTML = `<mark>Subtotal & Shipping: $${(estimatedShipping + subtotal).toFixed(2)} </mark>`;
        // output for the cart tax and by multiplying subtotal to the tax abd .toFixed to have 2 digits only
        cartTax.innerHTML = ` <mark>Cart Tax: $${(subtotal * HST_TAX).toFixed(2)} </mark>`;
        // in the end subtotal multiplied to the tax to get taxed amount and subotal with shipping also added so the total amount of the cart in total gets printed to the output div 
        cartTotal.innerHTML = ` <mark>Cart Total: $${(subtotal + (subtotal * HST_TAX) + estimatedShipping).toFixed(2)} </mark>`;
        console.log(cartTotal);
    }



    // JavaScript New Internationalization API whioch applies to the Date and Day we displayed earlier as well 
    // Tried using ES6 API for changing the currency but couldn't n used just calculation inside of displayCartItems function



    function displayItemDetails() {

        var itemID = document.getElementById("addItemId").value;
        var qtyToCart = document.getElementById("addItemQty").value;
        // again super filter iteration through arrays method to display all the details of a particular item
        let obj = storeItems.filter(x => { return x.productId === itemID });

        var display = window.confirm(`Item Details:
                                      ID: ${obj[0].productId} 
                                      Product: ${obj[0].name}  
                                      Price: $${obj[0].price}  
                                      Quantity Available: ${obj[0].quantity} 
                                      Max Per Customer: ${obj[0].maxPerCustomer} 
                                      Cost OF Shipping: $${obj[0].costOfShipping}

                                      Description: ${obj[0].description} 
                                       
                                      Reviews: ${obj[0].reviews}  
                                                                     `); // end of the variable with display items generated

    } // end of the function

    // All seems to be working fine to quickly display the item's details once on the textbox input item is entered
    // First thought to use .map array method for iterating though earlier .filter nade it more accurate to iterate through n show the required
    // Array iteration method to find the data from the array 




    function reviewItem() {


        let reviewDisplay = document.getElementById('reviewId').value;
        let reviewDisplaying = document.getElementById('reviewId');
        let reviewIdInput = document.getElementById('reviewDesc').value;
        let reviewIdEntry = document.getElementById('reviewDesc');
        let reviewIdMsg = document.getElementById('reviewIdMsg');


        for (var i = 0; i < storeItems.length; i++) {
            // check for match

            if (storeItems[i].productId == reviewDisplay) {
                storeItems[i].reviews.push(reviewIdInput);

                alert(`Successful entry of the Review, Thank you!
                          ${reviewIdInput}`);

                reviewDisplaying.style.borderColor = "#008000";
                reviewIdEntry.style.borderColor = "#008000";

                reviewIdMsg.innerHTML += `Latest Review: ${reviewIdInput}`;

                document.forms[1].reset(); // to clear the second form for the next entries still saves the entered input
            }



        } // loop end 


    } // function end




    /*     // Some validations but removed as interfered with addToCart function
        //Some tiny validations happening for the form
        function numberValidation(numbers) {
            const hasNumber = /\d/;
            return hasNumber.test(numbers);
        }

        function formValidation() {
            // addIDValidationMessage.innerHTML = "";

            var addItemQty = document.getElementById("addItemQty");
            var itemID = document.getElementById("addItemId").value;
            var itemIDBorder = document.getElementById("addItemId");
            var addIDValidationMessage = document.getElementById("addIDValidationMessage");
            var addQtyValidationMessage = document.getElementById("addQtyValidationMessage");

            if (itemIDBorder.value.length < 9) {
                alert('Product ID is too short. The Product ID must be 9 characters.');
                itemIDBorder.focus();
                itemIDBorder.style.borderColor = "#FF0000";
                var outputProductError = document.createElement("p");
                outputProductError.innerText += "Product ID is too too short. The Product ID must be 9 characters!";
                outputProductError.className = "outputProductError";
                addIDValidationMessage.appendChild(outputProductError);
            } else if (itemIDBorder.indexof(" ") !== -1) {
                itemIDBorder.style.borderColor = "#FF0000";
                alert("Please check your fields for spaces!");
                itemIDBorder.focus();
            } else if (!numberValidation(addItemQty.value)) {
                alert('Quantity does not include a number. It must include at least 1 number!');
                addItemQty.focus();
                addItemQty.style.borderColor = "#FF0000";
                addQtyValidationMessage.innerHTML += 'Quantity does not include a number. It must include at least 1 number!'
            }

        } // function end

    */



    // Functions and method to generate random Quotes or generate them on click of the button as well with random colors
    // Set the interval to pull up a new quote
    var intervalID = window.setInterval(printQuote, 10000);

    var quotes = [{
            quote: 'Watch that could pass into generations!',
            source: "Elbert Moser",
            tags: ["Horology"]
        },
        {
            quote: 'Rare timepiece!',
            source: "Moser",
            tags: ["Horology"]
        },
        {
            quote: 'Unique timepiece!',
            source: "Herbert Moser",
            tags: ["Horology"]
        },
        {
            quote: 'Moser is the classic forever!',
            source: "H Moser and Cie",
            tags: ["Horology"]
        },
        {
            quote: 'Never goes out of style!',
            source: "Elbert Moser",
            tags: ["Horology"]
        },
        {
            quote: 'The most complicated watches available',
            source: "Elbert Moser",
            tags: ["Horology"]
        },
        {
            quote: '100 % Swiss manufacture',
            source: "Elbert Moser",
            tags: ["Horology"]
        },
        {
            quote: 'Heritage Timepiece',
            source: "Elbert Moser",
            tags: ["Horology"]
        },

        {
            quote: "Do not take life too seriously. You will never get out of it alive.",
            source: "Elbert Hubbard",
            tags: ["humor"]
        },
        {
            quote: "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
            source: "Reba McEntire",
            tags: ["motivation", "humor"]
        },
        {
            quote: "Others have seen what is and asked why. I have seen what could be and asked why not.",
            source: "Pablo Picasso",
            citation: "Pablo Picasso: Metamorphoses of the Human Form: Graphic Works",
            tags: ["creativity"]
        },
        {
            quote: "Imagination is everything. It is the preview of life's coming attractions.",
            source: "Albert Einstein",
            tags: ["creativity"]
        },
        {
            quote: "I never made one of my discoveries through the process of rational thinking.",
            source: "Albert Einstein",
            tags: ["creativity"]
        },
        {
            quote: "The worst enemy to creativity is self-doubt.",
            source: "Sylvia Plath",
            citation: "The Unabridged Journals of Sylvia Plath",
            tags: ["creativity", "motivation"]
        },
        {
            quote: "Only I can change my life. No one can do it for me.",
            source: "Carol Burnett",
            tags: ["motivation"]
        },
        {
            quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence",
            source: "Hellen Keller",
            tags: ["success", "motivation"]
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            source: "Confuscius",
            tags: ["motivation"]
        },
        {
            quote: "If you can dream it, you can do it.",
            source: "Walt Disney",
            tags: ["creativity", "motivation"]
        },
        {
            quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            source: "Thomas A. Edison",
            tags: ["success", "motivation"]
        },
        {
            quote: "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will",
            source: "George Bernard Shaw",
            tags: ["creativity", "motivation"]
        },
        {
            quote: "Success consists of going from failure to failure without loss of enthusiasm.",
            source: "Winston Churchill",
            tags: ["success", "motivation", "persistence"]
        },
        {
            quote: "Mistakes are proof that you are trying.",
            source: "Author unknown",
            tags: ["motivation", "persistance"]
        },
        {
            quote: "If you really look closely, most overnight successes took a long time.",
            source: "Steve Jobs",
            tags: ["success", "time", "persistence"]
        }

    ];

    // a place to hold the quotes that have been shown thus far
    let usedQuotes = [];
    let button = document.getElementById("loadQuote");
    printQuote();

    function getRandomQuote() {
        if (quotes.length === 0) {
            // Quotes is empty, we need to reset the arrays
            quotes = usedQuotes;
            usedQuotes = [];
            return getRandomQuote(); // It's necessary to recurse and go again now it's in the proper state
        } else {
            const selection = quotes.splice(Math.floor(Math.random() * quotes.length), 1)[0]; // This simultaneously gets the object at a random index and removes it from the quotes array
            usedQuotes.push(selection);
            return selection;
        }
    }

    // Build up the HTML to print to the appropriate place
    function printQuote() {
        let html = ""; // Initialized to an empty string to avoid problems with undefined when concatenating
        let selectedQuote = getRandomQuote();

        // No matter what, add these two paragraphs
        html += `<p class="quote">${selectedQuote["quote"]}</p>`;
        html += `<p class="source">${selectedQuote["source"]}`;

        // If the quote has any or all of these properties, add them to the HTML
        if (selectedQuote.hasOwnProperty("citation")) {
            html += `<span class="citation">${selectedQuote["citation"]}</span>`;
        }
        if (selectedQuote.hasOwnProperty("year")) {
            html += `<span class="year">${selectedQuote["year"]}</span>`;
        }
        html += "</p>";
        if (selectedQuote.hasOwnProperty("tags")) {
            html += `<p>`;
            for (var i = 0; i < selectedQuote["tags"].length; i++) {
                html += `<span>#${selectedQuote["tags"][i]}  </span>`;
            }
            html += `</p>`;
        }

        // Write the HTML the DOM by setting the ìnnerHTML property
        document.getElementById('storeQuote').innerHTML = html;
        var storeQuote = document.getElementById('storeQuote');
        // Change the bakcground color to a random color
        let randomColor = getRandomColor();
        storeQuote.style.backgroundColor = randomColor;

        // Clear interval
        clearInterval(intervalID);
        intervalID = window.setInterval(printQuote, 6000);
    }

    function getRandomColor() {
        // Generate random rgb color for changing background color
        // Upper range limited so as to ensure that the white text still shows up
        let color = `rgb(${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*200)}`;
        return color;
    }

    // event listener to respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "printQuote" function is called
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);