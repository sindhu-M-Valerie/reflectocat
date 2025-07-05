#!/bin/bash
echo "🐱 ReflectoCat Keep-Alive Script Started at $(date)"
while true; do
    echo "$(date): Keeping codespace alive... 💻"
    # Touch a file to show activity
    touch /workspaces/reflectocat/heartbeat.txt
    echo "$(date)" > /workspaces/reflectocat/heartbeat.txt
    # Wait 25 minutes (1500 seconds)
    sleep 1500
done
