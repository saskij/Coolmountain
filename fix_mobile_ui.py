
import glob
import re

# 1. New Burger Button HTML
# We verify the old button structure from index.html (lines 65-74 approx)
# It has id="menu-toggle"
# We'll rely on replacing the whole button block found via regex or robust matching.

# Old Button Pattern:
# <button id="menu-toggle" ...> ... </button>
# It's an icon only button.

# New Button HTML:
# <button id="menu-toggle" class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm transition hover:bg-slate-50 xl:hidden" type="button">
#   <span>Menu</span>
#   <svg ...> ... </svg>
# </button>

new_burger_html = """              <button id="menu-toggle"
                class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm transition hover:bg-slate-50 xl:hidden"
                type="button">
                <span>Menu</span>
                <svg class="h-4 w-4 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>"""

# 2. Button Contrast Fix
# Targeted Class: "bg-transparent" in the context of "border-white/80" or "Request a Freight Quote"
# We want to change `bg-transparent` to `bg-black/40 backdrop-blur-sm`
# This applies to the outline button.

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # --- Step A: Replace Burger Button ---
    # We look for <button id="menu-toggle" ... </button>
    # Since it might span lines, we need a smarter replace.
    
    # Identify start
    start_marker = '<button id="menu-toggle"'
    if start_marker in content:
        start_idx = content.find(start_marker)
        # Find end of button tag
        # It ends with </button>
        end_marker = '</button>'
        end_idx = content.find(end_marker, start_idx)
        
        if end_idx != -1:
            end_idx += len(end_marker) # Include the tag
            
            # Replace
            content = content[:start_idx] + new_burger_html + content[end_idx:]
            print(f"Updated Burger Button in {filepath}")
    
    # --- Step B: Update Secondary Button Contrast ---
    # Find the class string for the outline button.
    # It contains: rounded-full border-2 border-white/80 bg-transparent
    # We replace 'bg-transparent' with 'bg-black/40 backdrop-blur-sm' IF it is near border-white.
    
    # Regex replacement for safety
    # We want to match: class="... border-white/80 bg-transparent ..."
    # And replace bg-transparent.
    
    # Let's simple string replace `border-white/80 bg-transparent` -> `border-white/80 bg-black/40 backdrop-blur-sm`
    # This combination is unique enough to our button style.
    
    if "border-white/80 bg-transparent" in content:
        content = content.replace("border-white/80 bg-transparent", "border-white/80 bg-black/40 backdrop-blur-md")
        print(f"Updated Button Contrast in {filepath}")
        
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)

html_files = glob.glob("*.html")
for file in html_files:
    process_file(file)
