<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
</head>
<body>
    <div id="end-date"></div>
    <input type="text" placeholder="Days" readonly>
    <input type="text" placeholder="Hours" readonly>
    <input type="text" placeholder="Minutes" readonly>
    <input type="text" placeholder="Seconds" readonly>
    
    <script>
        const endDate = "31 de dezembro de 2024 23:59:00";
        
        document.getElementById("end-date").innerText = endDate;
        const inputs = document.querySelectorAll("input");
        
        function clock() {
            const end = new Date(endDate);
            const now = new Date();
            const diff = (end - now) / 1000;

            if (diff < 0) {
                clearInterval(interval);
                return; // Countdown finished
            }

            inputs[0].value = Math.floor(diff / 3600 / 24);
            inputs[1].value = Math.floor(diff / 3600) % 24;
            inputs[2].value = Math.floor(diff / 60) % 60;
            inputs[3].value = Math.floor(diff) % 60;
        }

        // Initial call
        clock();

        // Update every second
        const interval = setInterval(clock, 1000);
    </script>
</body>
</html>
