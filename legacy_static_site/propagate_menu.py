
import glob
import re

# Goal: Propagate the verified #mobile-menu from contact.html to all other files.

def get_menu_block(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    start_marker = '<div id="mobile-menu"'
    if start_marker not in content:
        return None
        
    start_idx = content.find(start_marker)
    
    # Matching closing div
    idx = start_idx + len(start_marker)
    open_divs = 1
    
    while idx < len(content) and open_divs > 0:
        if content[idx:].startswith('<div'):
            open_divs += 1
            idx += 4
        elif content[idx:].startswith('</div>'):
            open_divs -= 1
            idx += 6
        else:
            idx += 1
            
    if open_divs == 0:
        return content[start_idx:idx]
    return None

# 1. Get Source
source_menu = get_menu_block("contact.html")

if not source_menu:
    print("Error: Could not find mobile menu in contact.html")
    exit()

print(f"Captured Menu Block ({len(source_menu)} chars)")

# 2. Propagate
def update_file(filepath):
    if filepath == "contact.html": 
        return

    with open(filepath, 'r') as f:
        content = f.read()
        
    start_marker = '<div id="mobile-menu"'
    if start_marker not in content:
        return
    
    start_idx = content.find(start_marker)
    
    # Matching closing div
    idx = start_idx + len(start_marker)
    open_divs = 1
    
    while idx < len(content) and open_divs > 0:
        if content[idx:].startswith('<div'):
            open_divs += 1
            idx += 4
        elif content[idx:].startswith('</div>'):
            open_divs -= 1
            idx += 6
        else:
            idx += 1
            
    if open_divs == 0:
        # Replace
        new_content = content[:start_idx] + source_menu + content[idx:]
        
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
        else:
            print(f"No changes for {filepath}")

html_files = glob.glob("*.html")
for file in html_files:
    update_file(file)
