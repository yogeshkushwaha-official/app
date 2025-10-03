# Google Form Integration Setup Instructions

## Quick Setup (Recommended)

### Option 1: Direct Google Form Link (Easiest)

1. **Create a Google Form:**
   - Go to [Google Forms](https://forms.google.com/)
   - Click "Create a new form"
   - Add these fields:
     - Name (Short answer)
     - Email (Short answer)
     - Subject (Short answer)  
     - Message (Paragraph)

2. **Get the Form Link:**
   - Click "Send" button in your form
   - Copy the form link
   - Replace `YOUR_FORM_ID` in the Contact.jsx file

3. **Update the Code:**
   ```javascript
   const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?usp=sf_link';
   ```

### Option 2: Embedded Submission (Advanced)

1. **Find Entry IDs:**
   - Open your Google Form
   - Right-click and "View Page Source"
   - Search for "entry." to find entry IDs like:
     - `entry.123456789` (Name field)
     - `entry.987654321` (Email field)
     - etc.

2. **Update Contact.jsx:**
   ```javascript
   formDataToSubmit.append('entry.123456789', formData.name);
   formDataToSubmit.append('entry.987654321', formData.email);
   formDataToSubmit.append('entry.555555555', formData.subject);
   formDataToSubmit.append('entry.777777777', formData.message);
   ```

3. **Get Form Response URL:**
   - Replace `/viewform` with `/formResponse` in your form URL
   - Update the `googleFormUrl` variable

## Current Implementation

Your portfolio currently has both options:
- **Primary**: Embedded form submission (may have CORS issues)
- **Fallback**: Direct Google Form redirect button (always works)

## Testing

1. Create your Google Form with the 4 fields mentioned
2. Update the URLs in Contact.jsx
3. Test both the embedded form and direct link
4. The direct link option will always work as a reliable backup

## Benefits

- ✅ Free form handling via Google Sheets
- ✅ Automatic email notifications
- ✅ Spam protection
- ✅ Mobile-friendly responses
- ✅ Data backup in Google Sheets

## Next Steps

1. Create your Google Form
2. Replace the placeholder URLs in `/src/components/Contact.jsx`
3. Test the integration
4. Your portfolio will have working contact forms!

---

**Need Help?** The current implementation provides both embedded submission and a direct Google Form button, so visitors can always reach you regardless of any technical issues.