

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const loginlink = document.getElementById('sign-in');
    const signuplink = document.getElementById('sign-up');
    const clearButton = document.getElementById('clear');
    const searchButton = document.getElementById('search-btn');

    // Add event listeners
    loginlink.addEventListener('click', function() {
        window.location.href = './public/sign-in.html';
    });

    signuplink.addEventListener('click', function() {
        window.location.href = './public/views/signup.html';
    });

    
    // Search form submit event
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Perform search operation here
        console.log(`Searching for: ${searchInput.value}`);
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchInput.value)}`;
    });

    // Clear button click event
    clearButton.addEventListener('click', function() {
        // Clear the search input
        searchInput.value = '';
    });
});
