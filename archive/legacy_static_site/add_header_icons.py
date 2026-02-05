
import glob
import re

# SVGs extracted from footer
fb_svg_path = 'M13.5 9H15V6.5c0-.7.1-1 .9-1H18V3h-2.5C12.9 3 12 4.5 12 6.7V9H10v2.5h2V21h2.5v-9.5H17L17.5 9h-3z'
li_svg_path = 'M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3zM8.3 18H5.7V9.7h2.6V18zm-1.3-9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-2.6v-4.1c0-1-.3-1.6-1.2-1.6-.7 0-1 .5-1.2 1-.1.2-.1.5-.1.8V18h-2.6s.1-6.9 0-8.3h2.6v1.2c.3-.5.9-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5V18z'

# Desktop HTML (Hidden on mobile, Flex on lg/xl)
# Inserted at the start of the right-side header container
desktop_icons_html = f"""
            <div class="hidden items-center gap-3 xl:flex mr-6">
              <a class="text-slate-700 hover:text-red-700 transition" href="https://www.facebook.com/coolmtntransport" target="_blank" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="{fb_svg_path}" />
                </svg>
              </a>
              <a class="text-slate-700 hover:text-red-700 transition" href="https://www.linkedin.com/company/cool-mountain-transport/" target="_blank" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path d="{li_svg_path}" />
                </svg>
              </a>
            </div>
"""

# Mobile HTML (White icons, at bottom of menu)
mobile_icons_html = f"""
          <div class="mt-6 flex items-center justify-center gap-6 border-t border-white/10 pt-6">
            <a class="text-white hover:text-red-400 transition" href="https://www.facebook.com/coolmtntransport" target="_blank" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path d="{fb_svg_path}" />
              </svg>
            </a>
            <a class="text-white hover:text-red-400 transition" href="https://www.linkedin.com/company/cool-mountain-transport/" target="_blank" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path d="{li_svg_path}" />
              </svg>
            </a>
          </div>
"""

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Inject Desktop Icons
    # Target: <div class="ml-auto flex items-center gap-2 md:gap-4">
    # We want to insert AFTER the opening tag
    desktop_target = r'(<div class="ml-auto flex items-center gap-2 md:gap-4">\s*)'
    
    # Check if already injected (avoid double injection if re-run)
    if "aria-label=\"Facebook\"" not in content[:content.find("nav-shell")]: # Rough check in header area
        if re.search(desktop_target, content):
            content = re.sub(desktop_target, r'\1' + desktop_icons_html, content, count=1)
            print(f"Injected Desktop icons into {filepath}")
    
    # 2. Inject Mobile Icons
    # Target: Closing tag of #mobile-menu div. 
    # The menu usually ends with `</div>` then `</div>` (header container).
    # We look for the closing </div> of the element with id="mobile-menu"
    
    # Regex to find the content of id="mobile-menu" is tricky.
    # Simpler: Find the line `        </div>` that comes after `id="mobile-menu"`'s content.
    # In our files, the menu ends after the "Apply" button link.
    
    # Strategy: Find the last </a> inside the mobile menu, and insert after it.
    # The mobile menu container starts with <div id="mobile-menu" ...>
    # We can rely on the fact that we have a standard structure.
    
    if "aria-label=\"Facebook\"" not in content[content.find("id=\"mobile-menu\""):]: # Rough check in mobile area
        # Look for the closing of the mobile menu. It's properly indented in the source.
        # It typically looks like:
        #           </a>
        #         </div>
        #       </div>
        #     </header>
        
        # We'll target the closing </div> of the mobile menu.
        # We can find the `<div id="mobile-menu"` and then find the matching closing div? 
        # Or just insert before the `</div>` that precedes `</div>` and `</header>`.
        
        # Safer: Insert after the specific "Apply" or "Request Quote" button in the mobile menu.
        # In index.html: ...Apply as a Driver... </a> </div>
        # In subpages: ...Request a Freight Quote... </a> </div> OR just </a> </div> if buttons removed?
        # WE REMOVED buttons from subpages mobile menu?
        # Wait, implementation plan said "Hide/Remove buttons from header menu", did we remove from mobile too?
        # Task 91: "Hide/Remove buttons from header menu on subpages".
        # If I removed them, the mobile menu might just end with "Contact".
        
        # New Strategy: Insert right before the closing `</div>` of the `#mobile-menu`.
        # Locate `id="mobile-menu"`
        # Then find the next `</div>` that acts as its closer.
        # Since HTML structure varies, let's use a unique marker if possible.
        # The mobile menu always spans a block.
        # Let's try to match the end of the mobile menu div.
        
        # In all files, the mobile menu is followed by `      </div>` (end of header container) then `    </header>`.
        # So we can target `        </div>\s*</div>\s*</header>`
        
        mobile_closer_pattern = r'(\s*</div>)(\s*</div>\s*</header>)'
        if re.search(mobile_closer_pattern, content):
             content = re.sub(mobile_closer_pattern, mobile_icons_html + r'\1\2', content, count=1)
             print(f"Injected Mobile icons into {filepath}")
        else:
             print(f"WARNING: Could not find mobile menu closer in {filepath}")

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

html_files = glob.glob("*.html")
for file in html_files:
    process_file(file)
