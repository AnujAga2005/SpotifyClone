document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the DOM
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.close-btn');

    const createPlaylistBtn = document.getElementById('create-playlist-btn');
    const browsePodcastBtn = document.getElementById('browse-podcast-btn');
    const explorePremiumBtn = document.getElementById('explore-premium-btn');
    const installAppBtn = document.getElementById('install-app-btn');

    // --- Modal Functions ---
    // Function to open the modal and inject content
    function openModal(content) {
        modalBody.innerHTML = content;
        modalContainer.classList.add('active');
    }

    // Function to close the modal
    function closeModal() {
        modalContainer.classList.remove('active');
    }

    // --- Event Listeners for Buttons ---

    // 1. Create Playlist Button
    createPlaylistBtn.addEventListener('click', () => {
        const content = `
            <h2>Create a new playlist</h2>
            <p>Give your playlist a name.</p>
            <input type="text" placeholder="My Awesome Playlist" />
            <button>Create</button>
        `;
        openModal(content);
    });

    // 2. Browse Podcast Button
    browsePodcastBtn.addEventListener('click', () => {
        const content = `
            <h2>Browse Podcasts</h2>
            <p>Discover new podcasts from various categories and find your next favorite show.</p>
            <ul>
                <li>Top Charts</li>
                <li>Comedy</li>
                <li>News & Politics</li>
                <li>True Crime</li>
            </ul>
        `;
        openModal(content);
    });

    // 3. Explore Premium Button
    explorePremiumBtn.addEventListener('click', () => {
        const content = `
            <h2>Explore Spotify Premium</h2>
            <p>Get the best Spotify experience with these features:</p>
            <ul>
                <li>Ad-free music listening</li>
                <li>Download to listen offline</li>
                <li>Play songs in any order</li>
                <li>High-quality audio</li>
            </ul>
            <button>Go Premium</button>
        `;
        openModal(content);
    });

    // 4. Install App Button
    installAppBtn.addEventListener('click', () => {
        const content = `
            <h2>Install the Spotify App</h2>
            <p>Listen on your desktop or mobile device for a seamless experience.</p>
            <div class="app-buttons">
                <button><i class="fa-brands fa-apple"></i> App Store</button>
                <button><i class="fa-brands fa-google-play"></i> Google Play</button>
            </div>
        `;
        openModal(content);
    });


    // --- Event Listeners for Closing the Modal ---

    // Close when the 'x' button is clicked
    closeModalBtn.addEventListener('click', closeModal);

    // Close when clicking on the overlay (outside the modal content)
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            closeModal();
        }
    });

    // Close when the 'Escape' key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalContainer.classList.contains('active')) {
            closeModal();
        }
    });
});