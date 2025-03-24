import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const formatterStyles = StyleSheet.create({
  messageText: { 
    color: "#000", 
    fontSize: 16,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#000",
  },
  italicText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: "#000",
  },
  bulletPoint: {
    flexDirection: 'row',
    paddingLeft: 5,
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  bulletDot: {
    fontSize: 16,
    marginRight: 8,
    color: '#555',
    lineHeight: 22,
  },
  numberedPoint: {
    flexDirection: 'row',
    paddingLeft: 5,
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  numberedDot: {
    fontSize: 16,
    marginRight: 8,
    color: '#555',
    minWidth: 20,
    lineHeight: 22,
  },
  heading1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  heading2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 6,
  },
  emptyLine: {
    height: 8,
  },
  codeBlockHeader: {
    backgroundColor: '#2b2b2b',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 0,
    marginTop: 8,
  },
  codeBlockHeaderText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
    fontFamily: 'monospace',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
  },
});


export const formatTextWithMarkdown = (text: string) => {
  if (!text) return null;
  
  
  const segments = text.split(/(__BOLD__|__ITALIC__)/);
  
  if (segments.length === 1) {
    return text;
  }
  
  let inBold = false;
  let inItalic = false;
  
  return segments.map((segment, index) => {
    if (segment === '__BOLD__') {
      inBold = !inBold;
      return null;
    }
    if (segment === '__ITALIC__') {
      inItalic = !inItalic;
      return null;
    }
    
    if (inBold) {
      return <Text key={index} style={formatterStyles.boldText}>{segment}</Text>;
    }
    if (inItalic) {
      return <Text key={index} style={formatterStyles.italicText}>{segment}</Text>;
    }
    
    return segment;
  });
};


export const formatMessage = (text: string) => {
  if (!text) return null;
  

  const lines = text.split('\n');
  

  const processedLines = lines.map((line: string) => {
    
    let processedLine = line.replace(/\*\*(.*?)\*\*/g, (_, text) => {
      return `__BOLD__${text}__BOLD__`;
    });
    
    
    processedLine = processedLine.replace(/\*(.*?)\*/g, (_, text) => {
      return `__ITALIC__${text}__ITALIC__`;
    });
    
    return processedLine;
  });
  
  return processedLines.map((line: string, index: number) => {
   
    if (line.trim() === '```' || line.trim().startsWith('```')) {
      return (
        <View key={`line-${index}`} style={formatterStyles.codeBlockHeader}>
          <Text style={formatterStyles.codeBlockHeaderText}>{line.replace('```', '').trim() || 'Code'}</Text>
        </View>
      );
    }
    
    if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
      return (
        <View key={`line-${index}`} style={formatterStyles.bulletPoint}>
          <Text style={formatterStyles.bulletDot}>•</Text>
          <Text style={formatterStyles.messageText}>
            {formatTextWithMarkdown(line.replace(/^[-•]\s*/, ''))}
          </Text>
        </View>
      );
    }
    
 
    if (/^\d+\./.test(line.trim())) {
      const number = line.match(/^\d+/)?.[0] || '';
      const content = line.replace(/^\d+\.\s*/, '');
      return (
        <View key={`line-${index}`} style={formatterStyles.numberedPoint}>
          <Text style={formatterStyles.numberedDot}>{number}.</Text>
          <Text style={formatterStyles.messageText}>
            {formatTextWithMarkdown(content)}
          </Text>
        </View>
      );
    }
    
   
    if (line.trim().startsWith('# ')) {
      return (
        <Text key={`line-${index}`} style={formatterStyles.heading1}>
          {line.replace(/^#\s+/, '')}
        </Text>
      );
    }
    
    if (line.trim().startsWith('## ')) {
      return (
        <Text key={`line-${index}`} style={formatterStyles.heading2}>
          {line.replace(/^##\s+/, '')}
        </Text>
      );
    }
    
   
    if (line.trim() === '') {
      return <View key={`line-${index}`} style={formatterStyles.emptyLine} />;
    }
    
    
    return (
      <Text key={`line-${index}`} style={formatterStyles.messageText}>
        {formatTextWithMarkdown(line)}
      </Text>
    );
  });
}; 