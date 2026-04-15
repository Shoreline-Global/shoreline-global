import os
import re

def convert_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Base replacements
    replacements = [
        # Backgrounds
        (r'bg-slate-950', 'bg-white'),
        (r'bg-black', 'bg-white'),
        (r'bg-zinc-950', 'bg-white'),
        (r'bg-slate-900/50', 'bg-zinc-50/80'),
        (r'bg-slate-900/30', 'bg-zinc-50/50'),
        (r'bg-slate-900/40', 'bg-zinc-50'),
        (r'bg-slate-900/80', 'bg-white'),
        (r'bg-slate-950/60', 'bg-white/80'),
        (r'bg-zinc-950/80', 'bg-white'),
        (r'bg-zinc-900/40', 'bg-zinc-50'),
        (r'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800/40 via-slate-950 to-slate-950', 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white'),
        (r'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-800/40 via-slate-950 to-slate-950', 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white'),
        (r'bg-white/5', 'bg-zinc-50'),
        (r'bg-white/10', 'bg-zinc-100'),
        
        # Text
        (r'text-white', 'text-zinc-900'),
        (r'text-zinc-300', 'text-zinc-600'),
        (r'text-zinc-400', 'text-zinc-500'),
        (r'text-zinc-500', 'text-zinc-400'),
        (r'text-zinc-600', 'text-zinc-500'),
        
        # Borders
        (r'border-white/5', 'border-zinc-200'),
        (r'border-white/10', 'border-zinc-200'),
        (r'border-white/20', 'border-zinc-300'),
        (r'border-zinc-800', 'border-zinc-200'),
        (r'border-zinc-700', 'border-zinc-300'),
        
        # Specific gradients/neon
        (r'bg-gradient-to-r from-blue-500 to-purple-600', 'bg-zinc-900'),
        (r'shadow-\[0_0_20px_rgba\(168,85,247,0\.3\)\]', 'shadow-sm'),
        (r'drop-shadow-\[0_0_15px_rgba\(99,102,241,0\.5\)\]', ''),
        (r'from-blue-400 via-indigo-400 to-purple-400', 'from-zinc-900 via-zinc-700 to-zinc-900'),
        (r'bg-indigo-500/30 blur-\[120px\]', 'bg-zinc-200/50 blur-[100px]'),
        
        # Form inputs
        (r'focus:ring-purple-500 focus:border-purple-500', 'focus:ring-zinc-900 focus:border-zinc-900'),
        (r'rgba\(168,85,247,0\.5\)', 'rgba(24,24,27,1)'),
        (r'rgba\(255,255,255,0\.1\)', 'rgba(228,228,231,1)'), # border-zinc-200 is e4e4e7
        
        # Hovers
        (r'hover:bg-indigo-900/20', 'hover:bg-zinc-50'),
        (r'hover:border-indigo-400/50', 'hover:border-zinc-300'),
        (r'hover:shadow-\[0_0_30px_rgba\(79,70,229,0\.2\)\]', 'hover:shadow-md'),
        (r'group-hover:border-indigo-400/50', 'group-hover:border-zinc-300'),
        (r'group-hover:bg-indigo-900/20', 'group-hover:bg-zinc-50'),
        (r'group-hover:shadow-\[0_0_30px_rgba\(79,70,229,0\.2\)\]', 'group-hover:shadow-md'),
    ]

    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old.replace('\\', ''), new)

    # Some manual fixes:
    # "bg-zinc-900 text-white" for buttons that were converted to "bg-zinc-900 text-zinc-900"
    new_content = new_content.replace('className="w-full md:w-auto bg-zinc-900 text-zinc-900', 'className="w-full md:w-auto bg-zinc-900 text-white')
    new_content = new_content.replace('className="bg-zinc-900 text-zinc-900', 'className="bg-zinc-900 text-white')
    
    # "bg-white text-black" from old design needs to be converted if it exists
    new_content = new_content.replace('bg-white text-black', 'bg-zinc-900 text-white')

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
