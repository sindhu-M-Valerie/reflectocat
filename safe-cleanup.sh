#!/bin/bash
echo "=== ReflectoCat Safe Cleanup Script ==="

cd /workspaces/reflectocat

# Step 1: Clean up the massive forever.log
echo "Step 1: Cleaning up forever.log..."
if [ -f "forever.log" ]; then
    echo "# ReflectoCat forever.log - cleaned $(date)" > forever.log
    echo "forever.log cleaned"
fi

# Step 2: Remove empty server directory (only if it's empty)
echo "Step 2: Checking server directory..."
if [ -d "server" ] && [ -f "server/index.js" ] && [ ! -s "server/index.js" ]; then
    rm -rf server/
    echo "Removed empty server/ directory"
fi

# Step 3: Clean up web/build/ and web/public/ duplicates
echo "Step 3: Cleaning up duplicates in web/ directories..."
if [ -d "web/build" ]; then
    rm -f web/build/*.sh web/build/"npm install" web/build/Untitled-* web/build/image
    echo "Cleaned web/build/ directory"
fi

if [ -d "web/public" ]; then
    rm -f web/public/*.sh web/public/"npm install" web/public/Untitled-* web/public/image
    echo "Cleaned web/public/ directory"
fi

# Step 4: Remove temporary files
rm -f *.sh.backup cleanup*.sh Untitled-*

echo "=== Safe Cleanup Completed! ==="
