import os
import re

def convert_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Base replacements to strip all colors
    replacements = [
        # Backgrounds
        (r'bg-slate-[0-9]+(/[0-9]+)?', 'bg-white'),
        (r'bg-blue-[0-9]+(/[0-9]+)?', 'bg-white'),
        (r'bg-zinc-[0-9]+(/[0-9]+)?', 'bg-white'),
        (r'bg-indigo-[0-9]+(/[0-9]+)?', 'bg-white'),
        (r'bg-gray-[0-9]+(/[0-9]+)?', 'bg-white'),
        (r'bg-white/[0-9]+', 'bg-white'),
        (r'backdrop-blur-[a-z0-9]+', ''),
        
        # Specific gradients & glows
        (r'bg-\[radial-gradient[^\]]+\] [^\s"]+ [^\s"]+ [^\s"]+', 'bg-white'),
        (r'bg-\[linear-gradient[^\]]+\] [^\s"]+ [^\s"]+', ''),
        (r'bg-clip-text text-transparent bg-gradient-to-r [^\s"]+ to-[^\s"]+', 'text-black'),
        (r'bg-gradient-to-[a-z]+ [^\s"]+ to-[^\s"]+', 'bg-black text-white'),
        (r'blur-\[[0-9]+px\]', ''),
        
        # Text
        (r'text-slate-[0-9]+', 'text-gray-500'),
        (r'text-blue-[0-9]+', 'text-black'),
        (r'text-zinc-[0-9]+', 'text-black'),
        (r'text-indigo-[0-9]+', 'text-black'),
        
        # Fix the text-black that should be gray for secondary text
        (r'text-zinc-400', 'text-gray-500'),
        (r'text-zinc-500', 'text-gray-500'),
        
        # Borders
        (r'border-slate-[0-9]+', 'border-gray-200'),
        (r'border-blue-[0-9]+', 'border-black'),
        (r'border-zinc-[0-9]+', 'border-gray-200'),
        (r'border-indigo-[0-9]+', 'border-gray-200'),
        (r'border-white/[0-9]+', 'border-gray-200'),
        
        # Shadows
        (r'shadow-[a-z]+', ''),
        (r'shadow-\[[^\]]+\]', ''),
        (r'drop-shadow-[a-z]+', ''),
        
        # Buttons (Standardize to OpenAI style)
        (r'rounded-md', 'rounded-full'),
        (r'rounded-lg', 'rounded-full'),
        (r'rounded-xl', 'rounded-2xl'),
        (r'rounded-2xl', 'rounded-3xl'),
    ]

    new_content = content
    for old, new in replacements:
        new_content = re.sub(old, new, new_content)

    # Some manual strict fixes
    new_content = new_content.replace('text-gray-500', 'text-gray-600') # Slightly darker gray for readability
    new_content = new_content.replace('bg-white', 'bg-white')
    new_content = new_content.replace('text-white', 'text-white')
    
    # Hero text should be pure black
    new_content = new_content.replace('text-gray-600 font-medium tracking-tight', 'text-black font-medium tracking-tight')

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# Process files
for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            convert_file(os.path.join(root, file))

for root, _, files in os.walk('components'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            convert_file(os.path.join(root, file))
