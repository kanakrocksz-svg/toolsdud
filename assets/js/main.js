<script>
        // Mobile menu toggle functionality
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
        
        // Search functionality
        document.getElementById('searchButton').addEventListener('click', function() {
            performSearch();
        });
        
        // Also search when Enter key is pressed
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const resultsContainer = document.getElementById('searchResults');
            const resultsList = document.getElementById('resultsList');
            
            // Clear previous results
            resultsList.innerHTML = '';
            
            if (searchTerm.trim() === '') {
                resultsContainer.style.display = 'none';
                return;
            }
            
            // Get all tool cards
            const toolCards = document.querySelectorAll('.tool-card');
            let foundResults = false;
            
            toolCards.forEach(card => {
                const toolName = card.querySelector('h3').textContent.toLowerCase();
                const toolDesc = card.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    foundResults = true;
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = '#' + card.closest('.tools-section').id;
                    link.textContent = toolName;
                    link.onclick = function() {
                        // Scroll to the tool section
                        card.scrollIntoView({ behavior: 'smooth' });
                        // Highlight the card
                        card.style.boxShadow = '0 0 0 3px var(--primary-blue)';
                        setTimeout(() => {
                            card.style.boxShadow = 'var(--shadow)';
                        }, 2000);
                        resultsContainer.style.display = 'none';
                    };
                    listItem.appendChild(link);
                    resultsList.appendChild(listItem);
                }
            });
            
            if (foundResults) {
                resultsContainer.style.display = 'block';
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = 'No tools found matching your search.';
                resultsList.appendChild(listItem);
                resultsContainer.style.display = 'block';
            }
        }
        
        // Close search results when clicking outside
        document.addEventListener('click', function(event) {
            const searchContainer = document.querySelector('.search-container');
            if (!searchContainer.contains(event.target)) {
                document.getElementById('searchResults').style.display = 'none';
            }
        });
    </script>
