/**
 * Clean, minimal color palette with white backgrounds and blue accents.
 * Main colors:
 * - Primary: Royal Blue (#1A73E8) - Clean, professional blue for buttons and actions
 * - Background: Pure White (#FFFFFF) - For all backgrounds
 * - Text: Navy Blue (#1A2B4C) - Deep blue-black for text
 */

const tintColorLight = '#1A73E8'; // Royal Blue
const tintColorDark = '#4DA3FF'; // Lighter blue for dark mode

export const Colors = {
  light: {
    text: '#1A2B4C', // Navy blue-black for text
    background: '#FFFFFF', // Pure white background
    tint: tintColorLight,
    icon: '#4A5568', // Medium slate for icons
    tabIconDefault: '#B3C1D1', // Light slate for inactive tabs
    tabIconSelected: tintColorLight,
    cardBackground: '#FFFFFF', // White for cards
    success: '#34C759', // Clean green for success states
    error: '#FF3B30', // Bright red for errors
    warning: '#FF9500', // Orange for warnings
    info: '#5AC8FA', // Light blue for information
    border: '#E2E8F0', // Very light gray-blue border
    overlay: 'rgba(26, 43, 76, 0.05)', // Subtle shadow
    highlight: '#F7FAFF', // Extremely light blue for highlighting
  },
  dark: {
    text: '#1A2B4C', // Navy text even in "dark" mode
    background: '#FFFFFF', // White background even in dark mode
    tint: tintColorLight, // Using light mode tint
    icon: '#4A5568', // Using light mode icon color
    tabIconDefault: '#B3C1D1', // Using light mode tab icon
    tabIconSelected: tintColorLight,
    cardBackground: '#FFFFFF', // White cards even in dark mode
    success: '#34C759', // Using light mode success color
    error: '#FF3B30', // Using light mode error color
    warning: '#FF9500', // Using light mode warning
    info: '#5AC8FA', // Using light mode info
    border: '#E2E8F0', // Using light mode border
    overlay: 'rgba(26, 43, 76, 0.05)', // Using light mode overlay
    highlight: '#F7FAFF', // Using light mode highlight
  },
};
