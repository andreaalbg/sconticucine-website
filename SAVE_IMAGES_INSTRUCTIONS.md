# 📸 How to Add Your Kitchen Images

You've uploaded 3 beautiful kitchen images. Here's how to save them to the project:

## Step 1: Save the Images

Save your uploaded images to: `/Users/andreaalbagli/Documents/BEhome-1/public/images/`

### Required Image Names:

1. **First image** (modern kitchen with marble, coffee machine, plants)
   - Save as: `hero-1.jpg` AND `moderno.jpg`
   - This will be used for Hero Slide 1 and Modern Style showcase

2. **Second image** (minimalist kitchen with marble and clean lines)
   - Save as: `hero-2.jpg`
   - This will be used for Hero Slide 2 and Elegant Style showcase

3. **Third image** (open concept kitchen with living room)
   - Save as: `hero-3.jpg`
   - This will be used for Hero Slide 3 and Luxury Style showcase

## Step 2: Quick Save via Terminal

You can save them using Finder or Terminal:

```bash
# Navigate to images folder
cd /Users/andreaalbagli/Documents/BEhome-1/public/images/

# Then drag and drop your images here from Downloads or Desktop
# Rename them to match the names above
```

## Step 3: Verify Images are Saved

```bash
ls -la /Users/andreaalbagli/Documents/BEhome-1/public/images/
```

You should see:
- hero-1.jpg (or .jpeg)
- hero-2.jpg (or .jpeg)
- hero-3.jpg (or .jpeg)
- moderno.jpg (or .jpeg)

## Where Images Will Appear:

✅ **Hero Carousel** - All 4 slides will use these images
✅ **Product Showcase** - 3 kitchen styles with your images
✅ **Optimized** - Next.js will automatically optimize them for web

## Image Specifications:

- ✅ **Format**: JPG, JPEG, PNG, or WebP
- ✅ **Current size**: Already good quality from your upload
- ✅ **Next.js will handle**: Automatic resizing, format conversion, lazy loading

## After Saving Images:

Just refresh your development server or rebuild:

```bash
npm run dev
```

The images will appear automatically! 🎉

---

**Note**: If you get build errors about missing images, make sure the file names match exactly (case-sensitive).

