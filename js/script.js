
const randomFolks = document.querySelector(".random-peeps");
const selectNumberUser = document.querySelector("#users")

const getData = async function(numUsers) {

    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); // apperently you can use placeholders inside the paramters for your API fetching

    const data = await userRequest.json();

    const userResults = data.results; // .results is the property name of the array.

    console.log(userResults);

    displayUsers(userResults);

};

getData(1); // this provides the selection element with an intial value


const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for(let user of userResults) { // this loops through array of userResults, user is the name given to each element as it is being iterated
        const country = user.location.country; // extracting the key value properties
        const name = user.name.first;
        const imageUrl = user.picture.medium;

        const userDiv = document.createElement("div"); // creates a div element.

        userDiv.innerHTML = ` <h3>${name}</h3> <p>${country}</p> <img src =${imageUrl} alt="User Avatar"> `

        randomFolks.append(userDiv); // adding the div element into the randomFolks section of the HTMl
    }
}; 

selectNumberUser.addEventListener("change", function(e) { // Remember the "e" itself deals with the item that was selected, and works with that variable
    const numUsers = e.target.value;

    getData(numUsers);

})

