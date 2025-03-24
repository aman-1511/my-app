# My App

Welcome to **My App**, an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). This app is designed to run on Android, iOS, and the web using React Native and Expo.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Architecture](#architecture)
- [Features](#features)
- [Components](#components)
- [Demo](#demo)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-app
npm install
```

## Usage

To start the app, run:

```bash
npx expo start
```

You will have options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Scripts

- `npm start`: Start the Expo development server.
- `npm run reset-project`: Reset the project to a fresh state.
- `npm run android`: Start the app on an Android emulator.
- `npm run ios`: Start the app on an iOS simulator.
- `npm run web`: Start the app in a web browser.
- `npm test`: Run tests using Jest.
- `npm run lint`: Lint the project using Expo's linting tools.

## Dependencies

The project relies on several key dependencies:

- **React**: `18.3.1`
- **React Native**: `0.76.7`
- **Expo**: `~52.0.40`
- **React Navigation**: `@react-navigation/native` and `@react-navigation/bottom-tabs`
- **Expo Modules**: Including `expo-blur`, `expo-constants`, `expo-font`, and more.

For a full list of dependencies, see the `package.json` file.

## Development

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

To reset the project to a fresh state, run:

```bash
npm run reset-project
```

## Learn More

To learn more about developing your project with Expo, check out the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or explore advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial to create a project that runs on Android, iOS, and the web.

## Architecture

The app follows a modular architecture with components organized in the `components` directory. It uses file-based routing for navigation and leverages Expo's managed workflow for building and deploying the app.

## Features

- Cross-platform support for Android, iOS, and web.
- File-based routing for easy navigation.
- Integration with Expo's powerful modules and APIs.
- Responsive design for various screen sizes.

## Components

Our app uses a collection of custom components designed for maximum reusability and consistent theming. Here's an overview of the key components:

### Core Components

#### ThemedText
A theme-aware text component that adapts to light and dark modes.
```jsx
<ThemedText 
  type="title"
  lightColor="#000000"
  darkColor="#FFFFFF"
>
  Hello World
</ThemedText>
```
**Props:**
- `type`: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
- `lightColor`: Color for light theme
- `darkColor`: Color for dark theme

#### ThemedView
A theme-aware container component that adapts its background and border colors based on the current theme.

#### Collapsible
An animated collapsible/expandable container component.
```jsx
<Collapsible collapsed={isCollapsed}>
  <Content />
</Collapsible>
```

#### ExternalLink
A component for handling external URL links with proper styling and behavior.
```jsx
<ExternalLink href="https://example.com">
  Visit Website
</ExternalLink>
```

#### ParallaxScrollView
A scroll view component with parallax effect for enhanced visual experience.

### UI Components

#### HapticTab
A tab component with haptic feedback for better user interaction.

#### IconSymbol
Platform-specific icon component with consistent styling across iOS and Android.

#### TabBarBackground
Custom background component for tab bars with platform-specific styling.

#### HelloWave
An animated wave component for visual flourish.

## Demo

### Video Demo

https://github.com/your-username/my-app/assets/videos/demo.mp4

<video width="100%" controls>
  <source src="./assets/videos/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Note: Place your demo video as `demo.mp4` in the `assets/videos/` directory.*


## Configuration

Ensure you have the necessary environment variables set up for any third-party services or APIs the app interacts with. Refer to the `.env.example` file for guidance.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code follows the project's coding standards and includes tests where applicable.
