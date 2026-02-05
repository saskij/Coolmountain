
import glob
import re
import os

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    filename = os.path.basename(filepath)
    
    # helper for active class
    news_active = ' active' if filename == 'news.html' else ''
    
    # 1. Desktop Nav Injection
    # Target: <a class="nav-link" href="equipment.html">Equipment</a>
    # We want to insert News after it.
    desktop_target = r'(<a class="nav-link[^"]*" href="equipment.html">Equipment</a>)'
    
    # Check if News is already there
    if 'href="news.html"' not in content[:content.find("mobile-menu")]: # heuristics
         if re.search(desktop_target, content):
             # The replacement
             news_link = f'\n              <a class="nav-link{news_active}" href="news.html">News</a>'
             content = re.sub(desktop_target, r'\1' + news_link, content, count=1)
             print(f"Injected Desktop News link into {filepath}")

    # 2. Mobile Menu Injection
    # Target: <a class="block min-h-[48px] py-4 text-sm text-white" href="equipment.html">\s*Equipment\s*</a>
    # Note: The mobile menu link usually has `border-b border-white/10` in some files (application.html) but maybe not all?
    # Let's check index.html from previous views. index.html mobile menu items didn't seem to have border-b, but application.html did.
    # index.html lines 81+:
    # <a class="block min-h-[48px] py-4 text-sm text-white" href="about.html">About</a>
    #
    # application.html lines 70+:
    # <a class="block min-h-[48px] py-4 text-sm text-white border-b border-white/10" href="index.html">Home</a>
    #
    # So we need a regex that handles optional class attributes or extra classes.
    
    # Regex: <a [^>]*href="equipment.html"[^>]*>...Equipment...</a>
    # capture the whole tag.
    
    mobile_target = r'(<a [^>]*href="equipment.html"[^>]*>\s*Equipment\s*</a>)'
    
    if 'href="news.html"' not in content[content.find("mobile-menu"):]:
        match = re.search(mobile_target, content)
        if match:
            # We want to replicate the style of the Equipment link but for News
            eq_link = match.group(0)
            # Create news link by replacing "equipment.html" with "news.html" and "Equipment" with "News"
            # And handling active state if we wanted to support it in mobile (usually just text color? or font weight?)
            # The current mobile menu doesn't seem to have "active" class logic visible in the snippet, 
            # or maybe it does (font-semibold vs text-white).
            # index.html line 82: `text-sm font-semibold text-white` for Home (active).
            # Others: `text-sm text-white`.
            
            # Let's just clone the class from Equipment link but make sure we respect "News" content.
            # If equipment link lays out Equipment, we replace Equipment with News.
            
            # If news page, we might want to make it font-semibold? 
            # Let's simple start by cloning the equipment link structure.
            
            news_link_mobile = eq_link.replace('href="equipment.html"', 'href="news.html"')
            news_link_mobile = re.sub(r'>\s*Equipment\s*<', '>\n            News\n          <', news_link_mobile) # Layout formatted
            
            # Insert after
            content = re.sub(mobile_target, r'\1' + '\n          ' + news_link_mobile, content, count=1)
            print(f"Injected Mobile News link into {filepath}")

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

html_files = glob.glob("*.html")
for file in html_files:
    process_file(file)
