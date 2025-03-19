<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PS3 Console Artifacts</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
    <header>
        <h1>Artifacts Found on a Sony PlayStation 3 Console</h1>
        <div id="navbar"></div> <!-- Navigation will be loaded here -->
    </header>

    <section id="overview">
        <h2>Welcome to the Website.</h2>
        <p>Welcome to the website "Artifacts Found on a Sony PlayStation 3 Console. This website will go over the possible artifacts that can be pulled from a Playstation 3, including the history behind the console and other forms of data that can be pulled from the console.</p>
    </section>

    <footer>
    <p>Forensic analysis by Mohammed Neda | Data extracted from Sony PS3 | 2025</p>
    </footer>

    <script>
        fetch("nav.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("navbar").innerHTML = data;
            })
            .catch(error => console.error("Error loading nav:", error));
    </script>
</body>
</html>
