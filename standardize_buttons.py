
import glob
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content

    # Patterns to target buttons
    # We want to replace rounded-sm, rounded-md, rounded-none with rounded-full
    # But ONLY for elements that look like buttons (e.g. have bg-[#b91c1c], or are type="submit" or are "Apply" links)

    # Strategy: 
    # 1. Find all `class="..."` strings
    # 2. If the class string contains typical button markers, perform the replacement within that string.
    
    def replacer(match):
        class_str = match.group(0)
        
        # Check if it's a button we want to target
        is_target = False
        if "bg-[#b91c1c]" in class_str: is_target = True
        if "bg-slate-900" in class_str and "text-white" in class_str: is_target = True
        if "bg-white" in class_str and "menu-toggle" in filepath: is_target = False # Don't round independent icons if not desired? Actually user said "all buttons" but usually menu toggles are circular anyway (rounded-full already).
        
        # Specific fix for our known buttons
        if "Apply as a Driver" in content: pass # Context check is hard in regex replacer
        
        # Simpler approach: 
        # Target the specific tailwind chains we know we used or broad ones.
        
        if "rounded-sm" in class_str or "rounded-none" in class_str or "rounded-md" in class_str:
            if "bg-[#b91c1c]" in class_str or "bg-[#ea580c]" in class_str or "bg-slate-900" in class_str or "shadow" in class_str:
                # Replace the rounding classes
                class_str = class_str.replace("rounded-sm", "rounded-full")
                class_str = class_str.replace("rounded-none", "rounded-full")
                class_str = class_str.replace("rounded-md", "rounded-full")
                # Also remove rounded-xl if it's on a button (input fields use rounded-xl, we should careful)
                # Inputs use border-slate-200. Buttons usually have bg-colors.
        
        return class_str

    # Regex to find class attributes
    # class="..."
    content = re.sub(r'class="[^"]+"', replacer, content)

    # Manual specific fix for the "Request a Quote" and "Apply" buttons we just inserted which might be rounded-sm
    content = content.replace("rounded-sm bg-[#b91c1c]", "rounded-full bg-[#b91c1c]")
    content = content.replace("rounded-none bg-[#b91c1c]", "rounded-full bg-[#b91c1c]")
    
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

html_files = glob.glob("*.html")
for file in html_files:
    process_file(file)
