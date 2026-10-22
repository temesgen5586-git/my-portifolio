export const profile = {
  name: 'Temesgen Worku',
  firstName: 'Temesgen',
  role: 'Full-Stack Developer & Software Engineering Student',
  roles:[
    'Full Stack Developer',
  'Software Engineer',
  'UI/UX Designer',
  'Problem Solver',
  ],
  tagline: 'I build modern, scalable web applications from UI to database.',
  bio: [
    "I'm a Full-Stack Developer and Software Engineering student who builds modern, scalable web applications from UI to database.",
    'I work with React, Node.js, Express, and MySQL — combining hands-on project experience with a strong academic foundation in software engineering.',
  ],



  location: 'Bahir dar, Ethiopia',

  email: 'temesgen5586@gmail.com',
  availability: 'Available for work',
  cvUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/temesgen5586-git',
    linkedin: 'https://linkedin.com/in/temesgen worku',
    telegram: 'https://t.me/temu55860',
    facebook: 'https://facebook.com/shegaw worku',
    instagram: 'https://instagram.com/yourusername',
    email: 'mailto:temesgen5586@gmail.com',
  },
};

export default profile;
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="e14c78de-edf1-4f55-a066-305c6fc00ee0">
  <input type="hidden" name="subject" value="New message from my portfolio">
  <input type="checkbox" name="botcheck" style="display:none">

  <input type="text" name="name" placeholder="Your name" required>
  <input type="email" name="email" placeholder="Your email" required>
  <textarea name="message" placeholder="Your message" required></textarea>

  <button type="submit">Send message</button>
</form>