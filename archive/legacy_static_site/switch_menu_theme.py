
import glob
import re

# Goal: Switch Mobile Menu to Light Theme
# Background: bg-white/98 backdrop-blur-md (Light)
# Text: text-slate-900
# Hover: text-red-700
# Close Button: text-slate-500
# Social Icons: text-slate-500

# We need to construct the new HTML block.
# We will match the existing <div id="mobile-menu" ... </div> block.

new_menu_html = """        <div id="mobile-menu"
          class="fixed inset-0 z-[200] bg-white/98 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center">
          
          <!-- Close Button -->
          <button id="menu-close" onclick="document.getElementById('menu-toggle').click()" 
            class="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav class="flex flex-col items-center space-y-6 text-center">
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="index.html">Home</a>
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="about.html">About</a>
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="join-our-team.html">Join Our Team</a>
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="equipment.html">Equipment</a>
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="news.html">News</a>
            <a class="text-2xl font-bold text-slate-900 hover:text-red-700 transition" href="contact.html">Contact</a>
          </nav>

          <div class="mt-10 flex flex-col gap-4 w-64">
             <a class="flex items-center justify-center w-full rounded-full bg-[#b91c1c] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#991b1b] transition shadow-lg"
            href="https://intelliapp.driverapponline.com/c/coolmountaintransport?uri_b=ia_coolmountaintransport_1398127899"
            target="_blank">
            Apply as a Driver
          </a>
          <a class="flex items-center justify-center w-full rounded-full border-2 border-slate-900 bg-transparent px-6 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition"
            href="contact.html">
            Freight Quote
          </a>
          </div>

          <div class="mt-8 flex gap-8">
            <a class="text-slate-500 hover:text-blue-600 transition" href="https://www.facebook.com/coolmtntransport" target="_blank">
               <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z"/></svg>
            </a>
            <a class="text-slate-500 hover:text-blue-700 transition" href="https://www.linkedin.com/company/cool-mountain-transport/" target="_blank">
               <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zM8.3 18H5.7V9.7h2.6V18zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-.7 0-1 .5-1.2 1-.1.2-.1.5-.1.8V18h-2.6s.1-6.9 0-8.3h2.6v1.2c.3-.5.9-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z"/></svg>
            </a>
          </div>
        </div>"""

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to find the <div id="mobile-menu" ... </div> block.
    # It ends before </header> usually.
    # We can try to match the ID and then finding the matching closing div.
    
    start_marker = '<div id="mobile-menu"'
    if start_marker not in content:
        print(f"Skipping {filepath} (no menu)")
        return
        
    start_idx = content.find(start_marker)
    
    # We need to find the end of this div.
    # Robust method: stack counter.
    
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
        # Replacement
        new_content = content[:start_idx] + new_menu_html + content[idx:]
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated menu theme in {filepath}")
    else:
        print(f"Could not parse menu in {filepath}")

html_files = glob.glob("*.html")
for file in html_files:
    process_file(file)
