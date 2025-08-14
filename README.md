# [💰 SavingsHunt](https://savings-hunt.vercel.app/)

> Your AI-powered assistant for smart savings, deal hunting, and subscription management

SavingsHunt is an intelligent chatbot that helps you maximize your savings through deal discovery, subscription optimization, group purchasing coordination, and fraud prevention. Built with Next.js and powered by multiple AI models for the most comprehensive savings advice.


## ✨ Features

### 🔍 **Deal Hunter**
- Discover the best deals and discounts across multiple platforms
- Real-time price comparisons and alerts
- Seasonal and flash sale notifications

### 👥 **Group Splits**
- Coordinate subscription sharing with friends and family
- Calculate fair splits for streaming services, software, and more
- Manage group payment schedules and reminders

### 🎁 **Gift Card Marketplace**
- Find discounted gift cards for popular brands
- Verify gift card authenticity and value
- Track gift card balances and expiration dates

### 🛡️ **Fraud Detection**
- Verify deal legitimacy and identify potential scams
- Check website credibility and seller reputation
- Alert users to suspicious offers and phishing attempts

### 📊 **Savings Tracker**
- Monitor monthly and yearly savings progress
- Categorize savings by type (subscriptions, deals, cashback)
- Generate savings reports and insights

### 🔔 **Deal Alerts**
- Personalized notifications for relevant deals
- Price drop alerts for wishlist items
- Subscription renewal reminders

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Groq API Key
- xAI (Grok) API Key

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/savings-copilot.git
   cd savings-copilot
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   \`\`\`env
   GROQ_API_KEY=your_groq_api_key_here
   XAI_API_KEY=your_xai_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to start using SavingsHunt!

## 🤖 AI Models

SavingsHunt leverages multiple AI models to provide the best possible assistance:

- **Groq (Llama)**: Fast, efficient responses for general savings advice
- **xAI (Grok)**: Advanced reasoning for complex financial decisions and fraud detection

You can switch between models using the model selector in the top-right corner of the interface.

## 💬 Usage Examples

### Deal Hunting
\`\`\`
"Find me the best deals on streaming subscriptions"
"What are the current discounts on electronics?"
"Show me cashback offers for grocery shopping"
\`\`\`

### Subscription Management
\`\`\`
"Help me split a Netflix family plan with 3 friends"
"Which subscriptions should I cancel to save money?"
"Compare streaming service prices and features"
\`\`\`

### Fraud Prevention
\`\`\`
"Is this Amazon deal legitimate?"
"Check if this website is safe for online shopping"
"Verify this discount code before I use it"
\`\`\`

## 🏗️ Architecture

\`\`\`
savings-copilot/
├── app/
│   ├── api/chat/
│   │   ├── groq/route.ts      # Groq AI endpoint
│   │   └── grok/route.ts      # xAI Grok endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main chat interface
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── chat-interface.tsx     # Main chat component
│   ├── message-bubble.tsx     # Chat message display
│   ├── model-selector.tsx     # AI model switcher
│   ├── sidebar.tsx            # Feature navigation
│   └── suggested-prompts.tsx  # Quick start prompts
└── lib/
    └── utils.ts               # Utility functions
\`\`\`

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - AI integration and streaming
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Groq](https://groq.com/)** - Fast AI inference
- **[xAI](https://x.ai/)** - Advanced AI reasoning

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes for extended use
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Smooth Animations**: Polished user experience with loading states
- **Accessible**: Built with accessibility best practices
- **Modern UI**: Clean, professional interface inspired by leading AI chatbots

## 🔧 Configuration

### Model Selection
Users can switch between AI models in real-time using the model selector. Each model has different strengths:

- **Groq**: Optimized for speed and general queries
- **Grok**: Better for complex reasoning and analysis

### Customization
The chatbot can be customized by modifying:
- Suggested prompts in `components/suggested-prompts.tsx`
- Feature list in `components/sidebar.tsx`
- System prompts in the API routes

## 📱 Mobile Support

SavingsHunt is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Collapsible sidebar navigation
- Optimized keyboard handling
- Smooth scrolling and animations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

**Start saving smarter today with SavingsHunt!** 💰✨
