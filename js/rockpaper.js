const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");


// Loop through  each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "../img/rockpaper/rock.png";
        result.textContent = "Kuting..."

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start")

        // Set timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start")
            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Create an array of CPU image options
            let cpuImages = ["../img/rockpaper/rock.png", "../img/rockpaper/paper.png", "../img/rockpaper/scissors.png"];
            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber]
            // Assighn a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index]

            // Create an object with all possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "NR yutdi!!",
                RS: "Siz yutdingiz!!",
                PP: "Draw",
                PR: "Siz yutdingiz!!",
                PS: "NR yutdi!!",
                SS: "Draw",
                SR: "NR yutdi!!",
                SP: "Siz yutdingiz!!",
            };

            // Look up the outcome value based on user and CPU options
            let outComeValue = outcomes[userValue + cpuValue];

            // Display the Result
            result.textContent = userValue === cpuValue ? "Durrang" : `${outComeValue}`
        }, 2500)
    });
});