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
        <h2>Overview of Artifacts on PS3</h2>
        <p>When analyzing a Sony PlayStation 3 (PS3) for forensic purposes, numerous artifacts can be found, each offering insights into the usage of the console. These artifacts may be useful for data recovery, gaming activity analysis, or investigating user behavior.</p>
    </section>

    <footer>
        <p>Forensic analysis by Mohammed Neda | Data extracted from Sony PS3 | 2024</p>
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
