# Awadh Green Developers — Website

Ye aapki website ke saare files hain, GitHub Pages pe deploy karne ke liye ready.

## Files kya hain
- `index.html` — main page
- `assets/css/style.css` — design/styling
- `assets/js/script.js` — savings calculator + animations
- `assets/img/logo.png` — aapka logo
- `CNAME` — isse GitHub ko pata chalega ki custom domain use karna hai (awadhgreendevelopers.in)

---

## Step 1: Repo pe files upload karein

1. GitHub pe login karein (`awadhgreendevelopersin-cyber` account se).
2. Repo `awadhgreendevelopers` open karein (agar bana nahi hai, "New repository" se **public** repo banayein isi naam se).
3. **"Add file" → "Upload files"** par click karein.
4. Is zip mein se saari files aur `assets` folder (uski poori structure ke saath) drag-and-drop karein.
   - Zaroori: `assets/css/style.css`, `assets/js/script.js`, `assets/img/logo.png` — folder structure exactly aise hi rakhein, warna site tooti hui dikhegi.
5. Neeche "Commit changes" par click karein.

## Step 2: GitHub Pages enable karein

1. Repo ke andar **Settings** tab kholein.
2. Left sidebar mein **Pages** par click karein.
3. "Build and deployment" ke "Branch" section mein `main` branch aur `/ (root)` select karein, phir **Save**.
4. Kuch minute baad aapki site is link par live ho jayegi: `https://awadhgreendevelopersin-cyber.github.io/awadhgreendevelopers/`

## Step 3: Custom domain (awadhgreendevelopers.in) jodna

Ye tabhi karein jab aap already domain kharid chuke hain (GoDaddy, Namecheap, ya jahan se bhi liya ho).

1. Usi **Settings → Pages** page par, "Custom domain" box mein type karein: `awadhgreendevelopers.in`, phir Save. (Isse repo mein CNAME file already maujood hai, GitHub use recognize kar lega.)
2. Apne domain registrar (GoDaddy/Namecheap/etc.) ki DNS settings mein jaayein aur ye records add karein:

   **4 A records** (Host/Name: `@`), in IP addresses ke saath:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **1 CNAME record** (optional, `www` ke liye):
   ```
   Host: www
   Value: awadhgreendevelopersin-cyber.github.io
   ```
3. DNS update hone mein kuch ghante se 24 ghante tak lag sakte hain.
4. Jab domain verify ho jaaye, wapas **Settings → Pages** mein "Enforce HTTPS" checkbox on kar dein.

Uske baad aapki site `https://awadhgreendevelopers.in` par live ho jayegi.

---

## Baad mein edit karna ho toh

- Text/content change karna ho → `index.html` file edit karein.
- Colors/design change karna ho → `assets/css/style.css` mein `:root` section ke color values badlein.
- Phone numbers/address already sahi hain jo aapne diye the — agar koi change ho toh `index.html` mein "Contact" section dhoondh kar update kar dein.
