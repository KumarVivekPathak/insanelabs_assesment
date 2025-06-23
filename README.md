# Insane Labs Assessment - User Directory App

A React Native application that displays a list of users with search functionality and detailed user profiles.

## Features

- **User List**: Browse through a list of users with their avatars, names, and email addresses
- **Search**: Real-time search functionality that filters users by name or email
- **User Details**: Detailed view of each user including:
  - Large profile image
  - Contact information
  - Bio/description
- **Responsive Design**: Works on both mobile and tablet devices
- **Smooth Navigation**: Intuitive navigation between screens

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/insanelabs_assessment.git
   cd insanelabs_assessment
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

4. **Run on your device/emulator**
   - For Android: Press `a` in the terminal
   - For iOS: Press `i` in the terminal (requires macOS)
   - Scan the QR code with Expo Go app on your mobile device

## Project Structure

```
insanelabs_assessment/
├── assets/               # Images and other static files
├── components/           # Reusable UI components
├── navigation/           # Navigation configuration
├── screens/             # App screens
├── App.tsx              # Main application component
├── UserData.ts          # Sample user data
└── package.json         # Project dependencies
```

## Available Scripts

- `yarn start`: Start the development server
- `yarn android`: Run on Android device/emulator
- `yarn ios`: Run on iOS simulator (macOS only)
- `yarn web`: Run in web browser

## Dependencies

- React Native
- React Navigation
- Expo
- TypeScript
- Expo Vector Icons


