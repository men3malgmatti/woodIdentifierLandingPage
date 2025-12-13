# Landing Page

A standalone, reusable landing page for identifier apps that meets App Store requirements.

## Features

- ✅ App Store compliant (includes Contact, Terms, Privacy links)
- ✅ Fully configurable via `config.js`
- ✅ Responsive design (mobile & desktop)
- ✅ Dynamic theming (colors from config)
- ✅ No external dependencies
- ✅ Easy to customize for new apps

## Quick Start

1. **Customize the configuration** - Edit `config.js`:
   - Update `APP_NAME` with your app name
   - Update `LOGO_PATH` to point to your logo
   - Update `CONTACT_EMAIL`, `PRIVACY_POLICY_URL`, and `TERMS_OF_SERVICE_URL`
   - Update `COLORS` to match your app's theme

2. **Add your logo** - Place your logo file in the `assets/` directory:
   - Recommended: PNG with transparent background
   - Size: 200x200px to 400x400px
   - Update `LOGO_PATH` in `config.js` if using a different filename

3. **Deploy** - Upload the entire `LandingPage` folder to your hosting service

## File Structure

```
LandingPage/
├── config.js          # Configuration file (customize this)
├── index.html         # Main HTML structure
├── index.css          # Styles (uses CSS variables from config)
├── index.js           # JavaScript (applies config to page)
├── assets/            # Logo and other assets
│   ├── README.md      # Logo requirements
│   └── logo.svg       # Placeholder logo (replace with your own)
└── README.md          # This file
```

## Customization for New Apps

To reuse this landing page for a different identifier app:

1. **Update `config.js`**:
   ```javascript
   const CONFIG = {
     APP_NAME: 'Bird Identifier',  // Change app name
     LOGO_PATH: 'assets/bird-logo.png',  // Update logo path
     CONTACT_EMAIL: 'bird-support@example.com',  // Update contact
     PRIVACY_POLICY_URL: 'https://example.com/bird-privacy',  // Update URLs
     TERMS_OF_SERVICE_URL: 'https://example.com/bird-terms',
     COLORS: {
       // Update colors to match Bird Identifier theme
       primary: '#4A90E2',  // Example: blue theme
       // ... other colors
     }
   };
   ```

2. **Replace logo** - Add your new app's logo to `assets/` directory

3. **Deploy** - Upload to hosting service

That's it! No other files need to be modified.

## Testing Locally

You can test the landing page locally using a simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## App Store Requirements

This landing page includes all required links for App Store compliance:

- ✅ **Contact Us** - Email link (mailto:)
- ✅ **Terms of Service** - Link to terms page
- ✅ **Privacy Policy** - Link to privacy policy page

All links are clearly visible in the footer and can be customized in `config.js`.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS custom properties (CSS variables) are used for theming

## Notes

- The page is completely standalone - no dependencies on other projects
- All styling is self-contained in `index.css`
- Colors are applied dynamically via JavaScript from `config.js`
- The page uses semantic HTML5 for accessibility

