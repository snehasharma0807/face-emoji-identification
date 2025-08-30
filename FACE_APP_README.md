# 😊 Face Expression Reader

A real-time facial expression detection web application built with Next.js, face-api.js, and Tailwind CSS. The app uses your webcam to detect faces and classify facial expressions in real-time, displaying the top 3 expressions with confidence scores and corresponding emojis.

## 🚀 Features

### Core Functionality
- **Camera Access**: Request and display live webcam feed
- **Face Detection**: Real-time face detection using face-api.js
- **Expression Recognition**: Classify 7 facial expressions:
  - 😀 Happy
  - 😢 Sad  
  - 😡 Angry
  - 😲 Surprised
  - 😨 Fearful
  - 🤢 Disgusted
  - 😐 Neutral

### UI Features
- **Live Video Feed**: Centered, responsive camera display
- **Emoji Mapping**: Each expression maps to 3 different emojis
- **Top 3 Display**: Shows expressions ranked by confidence
- **Real-time Updates**: Processes every frame for smooth detection
- **Responsive Design**: Works on desktop and mobile devices

### Performance Features
- **Client-side Processing**: All AI processing happens in your browser
- **Optimized Models**: Uses lightweight TinyFaceDetector for speed
- **Frame Rate Control**: Processes frames every 100ms for smooth performance
- **Model Loading**: Shows loading spinner while AI models initialize

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **AI Library**: face-api.js (TensorFlow.js-based)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Models**: Pre-trained neural networks for face detection and expression recognition

## 📱 How to Use

1. **Allow Camera Access**: Click "Allow" when prompted for camera permission
2. **Position Your Face**: Center your face in the camera view
3. **Show Expressions**: Try different facial expressions to see real-time analysis
4. **View Results**: See the top 3 detected expressions with confidence scores

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Supabase provider
│   └── page.tsx            # Main page with face detection app
├── components/
│   ├── VideoFeed.tsx       # Camera handling and face detection
│   └── EmojiDisplay.tsx    # Expression results display
└── contexts/
    └── SupabaseContext.tsx # Supabase integration (legacy)
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- Modern browser with camera access
- HTTPS connection (required for camera access in production)

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 📊 Expression Detection Details

### Supported Expressions
| Expression | Emojis | Description |
|------------|--------|-------------|
| Happy | 😀😄😊 | Smiling, joyful expressions |
| Sad | 😢😭😞 | Downcast, sorrowful expressions |
| Angry | 😡🤬😤 | Frowning, aggressive expressions |
| Surprised | 😲😯😮 | Wide-eyed, shocked expressions |
| Fearful | 😨😱😰 | Scared, anxious expressions |
| Disgusted | 🤢🤮😒 | Repulsed, contemptuous expressions |
| Neutral | 😐🙂😶 | Calm, expressionless faces |

### Confidence Scoring
- Each expression gets a confidence score from 0.0 to 1.0
- Scores are converted to percentages for display
- Top 3 expressions are ranked by confidence
- Updates in real-time as you change expressions

## 🎯 Performance Optimization

### Model Loading
- Models are loaded once on component mount
- Loading state prevents premature camera access
- Error handling for failed model downloads

### Frame Processing
- Processes frames every 100ms (10 FPS)
- Prevents overlapping detection calls
- Canvas overlay for face detection visualization

### Memory Management
- Proper cleanup of video streams
- Efficient model loading and caching
- Optimized for most modern laptops

## 📱 Mobile Compatibility

- **Responsive Design**: Adapts to different screen sizes
- **Touch-Friendly**: Large buttons and touch targets
- **Camera Orientation**: Handles both front and back cameras
- **Performance**: Optimized for mobile devices

## 🔒 Privacy & Security

- **Local Processing**: All AI processing happens in your browser
- **No Data Upload**: No images or data are sent to servers
- **Camera Access**: Only requests camera permission when needed
- **Secure**: Works over HTTPS for production deployment

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git add .
git commit -m "Add face expression detection app"
git push origin main

# Deploy on Vercel
# 1. Go to vercel.com/dashboard
# 2. Import your repository
# 3. Deploy (no environment variables needed)
```

### Other Platforms
- **Netlify**: Supports Next.js static export
- **AWS Amplify**: Full Next.js support
- **Docker**: Containerized deployment

## 🐛 Troubleshooting

### Common Issues

1. **Camera Not Working**
   - Ensure HTTPS connection (required for camera access)
   - Check browser permissions
   - Try refreshing the page

2. **Models Not Loading**
   - Check internet connection
   - Verify `/public/models/` directory exists
   - Check browser console for errors

3. **Poor Performance**
   - Close other browser tabs
   - Ensure good lighting conditions
   - Check device specifications

4. **Face Not Detected**
   - Ensure good lighting
   - Position face in center of camera
   - Remove glasses or accessories if needed

### Browser Compatibility
- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Limited support (camera access restrictions)

## 🔮 Future Enhancements

### Planned Features
- **Video Recording**: Save expression analysis sessions
- **Expression History**: Track expression changes over time
- **Custom Models**: Train on specific expression types
- **Social Sharing**: Share expression results
- **Multi-face Detection**: Detect expressions for multiple people

### Technical Improvements
- **WebGL Acceleration**: GPU-accelerated processing
- **Model Compression**: Smaller, faster models
- **Offline Support**: Service worker for offline usage
- **Real-time Collaboration**: Multi-user expression sharing

## 📚 Resources

### Documentation
- [face-api.js Documentation](https://github.com/justadudewhohacks/face-api.js)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Related Projects
- [TensorFlow.js](https://www.tensorflow.org/js)
- [MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning, personal projects, or commercial applications.

## 🙏 Acknowledgments

- **face-api.js**: Vincent Mühler for the excellent face detection library
- **TensorFlow.js**: Google for the machine learning framework
- **Next.js**: Vercel for the React framework
- **Tailwind CSS**: Adam Wathan for the utility-first CSS framework

---

🎉 **Enjoy exploring facial expressions with AI!** 

Try making different faces and see how accurately the AI can detect your emotions. The app works best with good lighting and clear facial expressions.
