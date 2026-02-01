import os
import re

# Definitons of the NEW content we want to propagate (taken from index.html)

HEADER_LOGO_NEW = """<a href="index.html" class="flex items-center gap-3 transition-transform duration-300 hover:scale-110">
              <img src="assets/images/logo-transparent.png" alt="Cool Mountain"
                class="h-[50px] w-auto sm:h-[60px] lg:h-[92px]" />
            </a>"""

# Footer block includes the container to ensure clean replacement of the image-link structure
FOOTER_LOGO_BLOCK_NEW = """<div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 sm:items-center">
          <a href="index.html" class="transition-transform duration-300 hover:scale-105 inline-block">
            <img src="assets/images/logo-transparent.png" alt="Cool Mountain" class="h-24 w-auto object-contain" />
          </a>
          <img src="assets/images/smartway-logo.png" alt="SmartWay Transport Partner"
            class="h-20 w-auto object-contain" />
        </div>"""

def update_files():
    # Regex Patterns
    # Header: Matches the anchor tag wrapping the transparent logo
    # flexible on whitespace
    header_pattern = re.compile(
        r'<a href="index\.html" class="flex items-center gap-3(?:[^"]*)">\s*<img src="assets/images/logo-transparent\.png".*?</a>',
        re.DOTALL | re.IGNORECASE
    )

    # Footer: Matches the div container with the logo and smartway logo
    # We match the old structure (img only) AND the new structure (a + img) to ensure we can update future changes too
    footer_pattern = re.compile(
        r'<div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-10 sm:items-center">\s*(?:<a[^>]*>\s*)?<img src="assets/images/logo-transparent\.png"[^>]*>(?:</a>)?\s*<img src="assets/images/smartway-logo\.png"[^>]*>\s*</div>',
        re.DOTALL | re.IGNORECASE
    )

    files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']
    
    print(f"Found {len(files)} HTML files to update.")

    for filename in files:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Update Header
        if header_pattern.search(content):
            content = header_pattern.sub(HEADER_LOGO_NEW, content)
        else:
            print(f"Warning: Could not find header logo pattern in {filename}")

        # Update Footer
        if footer_pattern.search(content):
            content = footer_pattern.sub(FOOTER_LOGO_BLOCK_NEW, content)
        else:
             print(f"Warning: Could not find footer logo pattern in {filename}")

        if content != original_content:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
        else:
            print(f"No changes needed for {filename}")

if __name__ == "__main__":
    update_files()
