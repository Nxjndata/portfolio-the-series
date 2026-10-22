import os
from rembg import remove
from PIL import Image

src_path = '/Users/niranjankannan/.gemini/antigravity-ide/brain/28ac0f32-8569-4af7-b00e-25089888ad53/.user_uploaded/media_1792145606513.jpg'
out_png = 'public/assets/niranjan-transparent.png'

print(f"Opening {src_path}...")
input_image = Image.open(src_path)

print("Removing black background with rembg...")
# alpha_matting can be enabled if needed, default u2net does an exceptional job on portrait studio shots
output_image = remove(input_image)

print(f"Saving transparent image to {out_png}...")
output_image.save(out_png, format='PNG')

# Also generate WebP responsive sizes with transparency
sizes = [
    (1100, 'public/assets/portrait-1100.webp'),
    (720, 'public/assets/portrait-720.webp'),
    (420, 'public/assets/portrait-420.webp'),
]

for width, path in sizes:
    ratio = width / output_image.width
    height = int(output_image.height * ratio)
    resized = output_image.resize((width, height), Image.Resampling.LANCZOS)
    resized.save(path, format='WEBP', quality=95, method=6)
    print(f"Saved {path} ({width}x{height})")

print("Done removing background!")
