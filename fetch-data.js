async function fetchUserData() {
  // API endpoint URL to fetch user data
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the HTML element to display the data
  const dataContainer = document.getElementById('api-data');

  // Display a loading message while fetching data
  dataContainer.innerHTML = 'Loading user data...';

  try {
    // Fetch user data from the API asynchronously
    const response = await fetch(apiUrl);

    // Convert the response to JSON format
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create an unordered list to display user names
    const userList = document.createElement('ul');

    // Loop through each user and create a list item for their name
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the user list to the data container element
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors during data fetching
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Call the fetchUserData function when the document is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
