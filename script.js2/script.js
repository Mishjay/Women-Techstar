const profileImage = document.getElementById("image");
const profileEmail = document.getElementById("profile-email");
const profileLocation = document.getElementById("profile-location");
const profileName = document.getElementById("profile-name");
const generateBtn = document.getElementById("generate-btn");
function result(profile){
    const data = profile.results[0]
    profileImage.src = data.picture.medium;
    profileEmail.textContent = data.email;
    profileLocation.textContent = data.location.country;
    profileName.textContent = data.name.first;
    prof.add(profile)
}

async function getResult(){
    const response = await
    fetch("https://randomuser.me/api/")
    const profile = await response.json()
    console.log(profile);
    result(profile)
}
getResult();
generateBtn.addEventListener("click", getResult)