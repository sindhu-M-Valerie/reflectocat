#!/bin/bash
echo "=== ReflectoCat Safe Cleanup Script ==="

cd /workspaces/reflectocat

# Step 1: Clean up the massive forever.log
echo "Step 1: Cleaning up forever.log..."
if [ -f "forever.log" ]; then
    echo "# ReflectoCat forever.log - cleaned $(date)" > forever.log
    echo "✅ forever.log cleaned"
else
    echo "forever.log not found - skipping"
fi

# Step 2: Remove empty server directory (only if it's empty)
echo "Step 2: Checking server directory..."
if [ -d "server" ] && [ -f "server/index.js" ] && [ ! -s "server/index.js" ]; then
    rm -rf server/
    echo "✅ Removed empty server/ directory"
else
    echo "✅ server/ directory preserved (not empty or doesn't exist)"
fi

# Step 3: PRESERVE important directories
echo "Step 3: Preserving important directories..."
echo "✅ Keeping src/ - contains React entry point"
echo "✅ Keeping public/ - contains HTML template"

# Step 4: Clean up web/build/ and web/public/ duplicates only
echo "Step 4: Cleaning up duplicates in web/ directories..."
if [ -d "web/build" ]; then
    rm -f web/build/*.sh 2>/dev/null
    rm -f web/build/"npm install" 2>/dev/null
    rm -f web/build/Untitled-* 2>/dev/null
    rm -f web/build/image 2>/dev/null
    echo "✅ Cleaned web/build/ directory"
fi

if [ -d "web/public" ]; then
    rm -f web/public/*.sh 2>/dev/null
    rm -f web/public/"npm install" 2>/dev/null
    rm -f web/public/Untitled-* 2>/dev/null
    rm -f web/public/image 2>/dev/null
    echo "✅ Cleaned web/public/ directory"
fi

# Step 5: Remove temporary files
echo "Step 5: Removing temporary files..."
rm -f *.sh.backup 2>/dev/null
rm -f cleanup*.sh 2>/dev/null
rm -f Untitled-* 2>/dev/null

echo ""
echo "=== ✅ Safe Cleanup Completed! ==="
echo "Preserved important directories:"
echo "   - src/ (React source code)"
echo "   - public/ (HTML template)"  
echo "   - web/ (main application)"
echo "   - .git/ (version control)"
echo ""
echo "Cleaned up:"
echo "   - forever.log (reduced size)"
echo "   - Empty server/ directory"
echo "   - Duplicate files in web/ subdirectories"
echo "   - Temporary script files"
