const moodButtons = document.querySelectorAll(".mood-options button");

const moodButtons = document.querySelectorAll(".mood-options button");
const experienceButtons = document.querySelectorAll(".experience-options button");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {

        moodButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        console.log("Selected mood:", button.textContent);
    });
});

experienceButtons.forEach(button => {
    button.addEventListener("click", () => {

        experienceButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        console.log("Selected experience:", button.textContent);
    });
});
const movies = [
    {
        title: "The Dark Knight",
        mood: "Dark & Mysterious",
        experience: "Something familiar",
        description: "A dark and intense superhero crime thriller."
    },

    {
        title: "The Prestige",
        mood: "Mind-bending",
        experience: "Something unexpected",
        description: "Two rival magicians become obsessed with defeating each other."
    },

    {
        title: "The Lord of the Rings",
        mood: "Epic fantasy",
        experience: "Something familiar",
        description: "An epic journey through a world filled with magic and adventure."
    },

    {
        title: "The Pursuit of Happyness",
        mood: "Feel-good",
        experience: "Something familiar",
        description: "An emotional story about hope, determination, and never giving up."
    },

    {
        title: "Interstellar",
        mood: "Emotional",
        experience: "Something unexpected",
        description: "A powerful journey through space, time, and human connection."
    }
];
let selectedMood = null;
let selectedExperience = null;

const moodButtons = document.querySelectorAll(".mood-options button");
const experienceButtons = document.querySelectorAll(".experience-options button");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {

        moodButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedMood = button.textContent;
    });
});

experienceButtons.forEach(button => {
    button.addEventListener("click", () => {

        experienceButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedExperience = button.textContent;
    });
});
const findMovieButton = document.querySelector("#find-movie-button");
const recommendationResult = document.querySelector("#recommendation-result");

findMovieButton.addEventListener("click", () => {

    if (!selectedMood || !selectedExperience) {
        recommendationResult.innerHTML = `
            <p>Please choose a mood and an experience first.</p>
        `;

        return;
    }

    const matchingMovies = movies.filter(movie =>
        movie.mood === selectedMood &&
        movie.experience === selectedExperience
    );

    if (matchingMovies.length === 0) {
        recommendationResult.innerHTML = `
            <p>We couldn't find a perfect match yet.</p>
        `;

        return;
    }

    const randomMovie =
        matchingMovies[Math.floor(Math.random() * matchingMovies.length)];

    recommendationResult.innerHTML = `
        <h2>${randomMovie.title}</h2>
        <p>${randomMovie.description}</p>
    `;
});