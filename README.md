# Todo Genius ✨

A beautiful, modern todo application built with React, TypeScript, and Tailwind CSS. Organize your tasks with style and efficiency!

## 🌟 Features

- **✅ Task Management**: Add, edit, delete, and toggle completion status of tasks
- **🔍 Smart Filtering**: View all tasks, active tasks, or completed tasks
- **📊 Task Statistics**: Visual stats showing total, active, and completed tasks
- **💾 Local Storage**: Your tasks persist between sessions
- **🎨 Beautiful UI**: Modern design with gradients, animations, and glassmorphism effects
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Instant visual feedback for all actions

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Clean, customizable icons
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd todo-genius
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── TodoForm.tsx    # Add new todos
│   ├── TodoItem.tsx    # Individual todo item
│   ├── TodoFilters.tsx # Filter controls
│   └── TodoStats.tsx   # Statistics display
├── hooks/
│   └── useTodos.ts     # Todo state management
├── types/
│   └── todo.ts         # TypeScript type definitions
├── pages/
│   └── Index.tsx       # Main application page
└── lib/
    └── utils.ts        # Utility functions
```

## 🎨 Design System

The app uses a carefully crafted design system with:

- **Dark theme** with purple gradient accents
- **Glassmorphism effects** for modern UI elements
- **Smooth animations** and hover effects
- **Consistent spacing** and typography
- **Semantic color tokens** for maintainable theming

## 📱 Usage

1. **Add a Task**: Type in the input field and click the + button or press Enter
2. **Complete a Task**: Click the checkbox next to any task
3. **Edit a Task**: Click the edit icon and modify the text
4. **Delete a Task**: Click the trash icon to remove a task
5. **Filter Tasks**: Use the All/Active/Completed buttons to filter your view
6. **Clear Completed**: Remove all completed tasks at once

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Via Lovable
Simply click Share → Publish in the Lovable editor.

### Via GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure GitHub Pages to serve from the appropriate branch

### Via Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
