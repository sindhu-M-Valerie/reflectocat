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
