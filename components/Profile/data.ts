
import { MaterialIcons } from '@expo/vector-icons';

export interface MenuItem {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
  isLogout?: boolean;
}

export const GENERAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 'personal_info',
    icon: 'person-outline',
    text: 'Personal information'
  },
  {
    id: 'insurances',
    icon: 'verified-user',
    text: 'Insurances'
  },
  {
    id: 'settings',
    icon: 'settings',
    text: 'Settings'
  }
];

export const OTHER_MENU_ITEMS: MenuItem[] = [
  {
    id: 'help_center',
    icon: 'help-outline',
    text: 'Help center'
  },
  {
    id: 'about_us',
    icon: 'info-outline',
    text: 'About us'
  },
  {
    id: 'terms',
    icon: 'description',
    text: 'Terms of use'
  },
  {
    id: 'logout',
    icon: 'logout',
    text: 'Logout',
    isLogout: true
  }
];

export const USER_PROFILE = {
  name: 'Aman Chaudhary',
  email: 'aman.chaudhary@gmail.com',
  imageUri: 'https://randomuser.me/api/portraits/men/1.jpg'
}; 