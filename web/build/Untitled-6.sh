#!/bin/bash

WEB_DIR="/workspaces/reflectocat/web"
APP_LOG="$WEB_DIR/app.log"

echo "🐱 ReflectoCat Forever Script Started at $(date)"

while true; do
    echo "$(date): Starting ReflectoCat app..."
    cd "$WEB_DIR"
    # Kill any existing process
    pkill -f "npm start" 2>/dev/null || true
    # Start the app
    nohup npm start > "$APP_LOG" 2>&1 &
    APP_PID=$!
    # Wait for the process to exit
    wait $APP_PID
    echo "$(date): App crashed or exited. Restarting in 5 seconds..."
    sleep 5
done

// Add this styled component after your existing styled components
const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  filter: drop-shadow(0 0 10px rgba(79, 172, 254, 0.3));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

// Replace the Title section in your return statement with:
<Title>
  🐱 
  <LogoImage 
    src="/reflectocat-github-logo.png" 
    alt="ReflectoCat Logo" 
    onError={(e) => {
      e.target.style.display = 'none';
    }}
  />
  ReflectoCat
</Title>