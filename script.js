        // JavaScript for Dynamic Tabs
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

        // Function to handle hamburger menu toggle
        function toggleHamburger(x) {
            x.classList.toggle("change");
            var navbar = document.getElementById("myNavbar");
            if (navbar.className === "navbar") {
                navbar.className += " responsive";
            } else {
                navbar.className = "navbar";
            }
        }

        // Function to load and apply the selected language
        function changeLanguage() {
            var flagIcon = document.getElementById('flag-icon');
            var currentLang = flagIcon.alt;

            // Determine the new language based on the current language
            var newLang = currentLang === 'English' ? 'jp' : 'en';
            var newFlag = currentLang === 'English' ? 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg' : 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
            var newAlt = currentLang === 'English' ? 'Japanese' : 'English';

            // Update the flag icon
            flagIcon.src = newFlag;
            flagIcon.alt = newAlt;

            // Fetch the new language file and update text content
            fetch(newLang + '.json')
                .then(response => response.json())
                .then(data => {
                    document.querySelectorAll('[data-lang-key]').forEach(element => {
                        const key = element.getAttribute('data-lang-key');
                        element.textContent = data[key];
                    });
                })
                .catch(error => console.error('Error loading language file:', error));
        }

        // Initial language setup
        changeLanguage('en'); // Load English by default
