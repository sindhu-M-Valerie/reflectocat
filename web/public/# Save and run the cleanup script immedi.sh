# Save and run the cleanup script immediately
cd /workspaces/reflectocat

# Create the cleanup script
cat > cleanup.sh << 'EOF'
#!/bin/bash
echo "🧹 Cleaning up ReflectoCat workspace..."

cd /workspaces/reflectocat

# Remove duplicate and unnecessary directories
echo "Removing duplicate directories..."
rm -rf frontend/ reflectocat/ server/ src/ public/

# Remove unnecessary files from root
echo "Cleaning root directory..."
rm -f "spark code"
rm -f authenticate_github_app.py

# Clean up web directory
echo "Cleaning web directory..."
cd web/

# Remove duplicate files outside public/
rm -f ReflectoCat*.svg ReflectoCat*.png reflectocat-logo.png octocat-mirror.svg
rm -f asset-manifest.json index.html manifest.json logo.svg test.html
rm -f ReflectoCat_placeholder.txt i image image-*
rm -rf static/ a/

# Clean up public directory
cd public/
echo "Cleaning public directory..."
rm -f final i image image-* ReflectoCat_placeholder.txt test.html
rm -rf public/

echo "✅ Cleanup complete!"
EOF

# Make executable and run
chmod +x cleanup.sh
./cleanup.sh

# Remove the cleanup script
rm cleanup.sh

echo "🔍 Checking results..."

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🐱 ReflectoCat Keep-Alive</title>
    <meta http-equiv="refresh" content="1200">
    <style>
        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            color: white;
            font-family: 'Inter', Arial, sans-serif;
            text-align: center;
            padding: 50px;
            margin: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .logo {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            filter: drop-shadow(0 0 10px rgba(79, 172, 254, 0.3));
        }
        .status {
            font-size: 1.5rem;
            margin: 1rem 0;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        .time {
            font-size: 1.2rem;
            color: #4facfe;
        }
        .links {
            margin-top: 2rem;
        }
        .links a {
            color: #4facfe;
            text-decoration: none;
            font-size: 1.1rem;
            margin: 0 1rem;
            padding: 0.5rem 1rem;
            border: 1px solid #4facfe;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        .links a:hover {
            background: #4facfe;
            color: white;
        }
        .pulse {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        .info {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 2rem;
            max-width: 600px;
        }
    </style>
</head>
<body>
    <h1>
        🐱 
        <img src="/reflectocat-github-logo.png" alt="ReflectoCat Logo" class="logo" onerror="this.style.display='none'">
        ReflectoCat Keep-Alive
    </h1>
    
    <div class="status">
        <div class="pulse">✅ Keeping your Codespace active...</div>
        <div>This page refreshes every 20 minutes automatically</div>
    </div>
    
    <div class="time">
        Current time: <span id="time"></span>
    </div>
    
    <div class="status">
        Last refresh: <span id="lastRefresh"></span>
    </div>
    
    <div class="links">
        <a href="/" target="_blank">🚀 Open ReflectoCat App</a>
        <a href="https://github.com/sindhu-M-Valerie/reflectocat" target="_blank">📁 GitHub Repository</a>
    </div>
    
    <div class="info">
        <p>This page helps keep your GitHub Codespace active by maintaining browser activity.</p>
        <p>Keep this tab open while working to prevent your Codespace from hibernating.</p>
    </div>
    
    <script>
        function updateTime() {
            const now = new Date();
            const timeElement = document.getElementById('time');
            if (timeElement) {
                timeElement.textContent = now.toLocaleString();
            }
        }
        
        function setLastRefresh() {
            const now = new Date();
            const refreshElement = document.getElementById('lastRefresh');
            if (refreshElement) {
                refreshElement.textContent = now.toLocaleString();
            }
        }
        
        updateTime();
        setInterval(updateTime, 1000);
        setLastRefresh();
        
        console.log('🐱 ReflectoCat Keep-Alive page loaded at:', new Date().toLocaleString());
        
        setInterval(() => {
            console.log('🐱 Keep-alive ping at:', new Date().toLocaleString());
            fetch(window.location.origin, { 
                method: 'HEAD',
                mode: 'no-cors'
            }).catch(() => {
                console.log('Keep-alive ping completed');
            });
        }, 10 * 60 * 1000);
        
        document.addEventListener('DOMContentLoaded', function() {
            console.log('🐱 Keep-alive page ready!');
        });
    </script>
</body>
</html>