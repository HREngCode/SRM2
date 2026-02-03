# SRM2

## EmailJS Setup 🔧

1. Create an account at https://www.emailjs.com and add an email service and template.
2. Fill the `.env` file at `redesign/.env` with your values:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart the dev server so Vite picks up the environment variables.
4. Test the contact form in the site and look for success or error messages. 💡
