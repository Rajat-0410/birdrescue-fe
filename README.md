# 🦜 Bird Rescue Website

A modern, responsive website for bird rescue and rehabilitation services. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### 📱 Modern UI Components
- Responsive design that works on all devices
- Beautiful, nature-themed color scheme
- Smooth animations and transitions
- Interactive components and forms

### 🔍 Key Pages
1. **Home Page**
   - Hero section with nature background
   - Mission statement
   - Key services overview
   - Call-to-action sections

2. **Contact & Report Page**
   - Emergency contact banner
   - Comprehensive bird rescue form
   - AI-powered bird identification
   - Real-time bird information and care instructions
   - Image upload with preview
   - Location tracking

3. **Help Page**
   - Emergency response guidelines
   - Step-by-step rescue instructions
   - Downloadable resources
   - Common situations guide

4. **Rescue Services**
   - Professional services overview
   - Success stories
   - Rehabilitation process
   - Volunteer opportunities

5. **FAQ Page**
   - Interactive Q&A section
   - Common bird rescue questions
   - Best practices
   - Legal information

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components
- **Image Handling**: Next.js Image Optimization
- **Form Handling**: React Hook Form (planned)
- **Validation**: Zod (planned)
- **Bird Identification**: AI Integration (planned)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/birdrescue-fe.git
   cd birdrescue-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   NEXT_PUBLIC_BIRD_API_KEY=your_bird_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
birdrescue-fe/
├── app/
│   ├── components/     # Reusable UI components
│   ├── contact/       # Contact and report form
│   ├── help/          # Help and guidelines
│   ├── rescue/        # Rescue services
│   ├── faq/           # FAQ page
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/
│   └── images/        # Static images
├── styles/           # Global styles
└── types/           # TypeScript types
```

## 🔄 Planned Features

- [ ] Integration with bird identification API
- [ ] Form validation and error handling
- [ ] User authentication for staff
- [ ] Dashboard for tracking rescue cases
- [ ] Real-time chat support
- [ ] Multi-language support
- [ ] Push notifications for emergency cases
- [ ] Interactive bird species database

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: [Your Name]
- UI/UX Design: [Designer Name]
- Frontend Development: [Developer Names]

## 📞 Support

For support, email help@birdrescue.org or join our Slack channel.

## 🙏 Acknowledgments

- Bird images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
- UI inspiration from modern nature conservation websites
