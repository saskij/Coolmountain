import os

def extract_between_tags(content, start_marker, end_marker):
    start_idx = content.find(start_marker)
    if start_idx == -1:
        # Try finding just the tag name if specific ID fails
        simple_marker = start_marker.split(' id=')[0] 
        start_idx = content.find(simple_marker)
        if start_idx == -1: return None, None, None
    
    # Correctly find the CLOSING tag after the start index
    end_idx = content.find(end_marker, start_idx)
    if end_idx == -1: return None, None, None
    
    # Include the end marker length
    end_idx += len(end_marker)
    
    return content[start_idx:end_idx], start_idx, end_idx

def update_layout():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            source_content = f.read()
    except FileNotFoundError:
        print("Error: index.html not found.")
        return

    # Extract Header (Logic: find <header ... id="site-header" ... </header>)
    # We look for the start of the tag. 
    header_start_marker = '<header id="site-header"'
    header_end_marker = '</header>'
    
    header_block, _, _ = extract_between_tags(source_content, header_start_marker, header_end_marker)
    if not header_block:
         # Fallback search
         header_block, _, _ = extract_between_tags(source_content, '<header', header_end_marker)

    # Extract Footer
    footer_start_marker = '<footer'
    footer_end_marker = '</footer>'
    footer_block, _, _ = extract_between_tags(source_content, footer_start_marker, footer_end_marker)

    if not header_block or not footer_block:
        print("Error: Could not extract header or footer from index.html")
        return

    print("Extracted Header and Footer.")

    files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']
    print(f"Found {len(files)} files to sync.")

    for filename in files:
        changed = False
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            print(f"Skipping {filename}")
            continue

        # HEADER REPLACEMENT
        # Find existing header
        existing_header, start, end = extract_between_tags(content, header_start_marker, header_end_marker)
        if not existing_header:
             existing_header, start, end = extract_between_tags(content, '<header', header_end_marker)
        
        if existing_header and start is not None:
             new_content = content[:start] + header_block + content[end:]
             if new_content != content:
                 content = new_content
                 changed = True

        # FOOTER REPLACEMENT
        existing_footer, start, end = extract_between_tags(content, footer_start_marker, footer_end_marker)
        if existing_footer and start is not None:
             new_content = content[:start] + footer_block + content[end:]
             if new_content != content:
                 content = new_content
                 changed = True
        
        if changed:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filename}")
        else:
            print(f"Up to date: {filename}")

if __name__ == "__main__":
    update_layout()
