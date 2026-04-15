import os
import re

def convert_to_linear(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Layout Backgrounds
    content = content.replace('bg-white font-sans text-gray-500', 'bg-[#000000] font-sans text-zinc-400')
    content = content.replace('bg-white font-sans text-zinc-500', 'bg-[#000000] font-sans text-zinc-400')
    content = content.replace('bg-white', 'bg-[#000000]')
    content = content.replace('bg-gray-50', 'bg-[#0A0A0A]')
    content = content.replace('bg-zinc-50', 'bg-[#0A0A0A]')
    content = content.replace('bg-slate-50', 'bg-[#0A0A0A]')
    
    # Borders
    content = content.replace('border-gray-200', 'border-white/10')
    content = content.replace('border-zinc-200', 'border-white/10')
    content = content.replace('border-slate-100', 'border-white/10')
    content = content.replace('border-zinc-300', 'border-white/20')
    
    # Text colors
    content = content.replace('text-black', 'text-white')
    content = content.replace('text-zinc-900', 'text-white')
    content = content.replace('text-gray-600', 'text-zinc-400')
    content = content.replace('text-gray-500', 'text-zinc-400')
    content = content.replace('text-zinc-500', 'text-zinc-400')
    content = content.replace('text-zinc-400', 'text-zinc-400') # redundant but safe
    content = content.replace('text-gray-400', 'text-zinc-500')
    
    # Subtle touches
    content = content.replace('shadow-[0_0_30px_rgba(255,255,255,0.05)]', 'shadow-none')
    
    # Buttons
    # "bg-white text-black" (this happens when the button was originally black and we converted it... wait)
    # The previous replacements might conflict: if we replace 'bg-black' to 'bg-white', and 'text-white' to 'text-black'
    
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Updated {filepath}")

convert_to_linear('app/services/page.tsx')
convert_to_linear('app/about/page.tsx')
