import React from 'react';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

interface IconRendererProps {
  name: string;
  type: string;
  size: number;
  color: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ name, type, size, color }) => {
  switch (type) {
    case "material":
      return (
        <MaterialCommunityIcons
          name={name as any}
          size={size}
          color={color}
        />
      );
    case "feather":
    case "FontAwesome5":
    default:
      return <FontAwesome5 name={name as any} size={size} color={color} />;
  }
};

export default IconRenderer; 