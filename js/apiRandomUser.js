const userContainer = document.getElementById("user-container");
const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchRandomUser();
