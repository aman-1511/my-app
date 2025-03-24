import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../styles/theme';

const WINDOW_WIDTH = Dimensions.get('window').width;

// Dummy data for health metrics
const healthMetrics = [
  {
    id: '1',
    title: 'Steps',
    value: '7,845',
    unit: 'steps',
    progress: 0.78,
    icon: 'walk',
    iconColor: '#3498db',
  },
  {
    id: '2',
    title: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    progress: 0.65,
    icon: 'heart',
    iconColor: '#e74c3c',
  },
  {
    id: '3',
    title: 'Sleep',
    value: '7.5',
    unit: 'hours',
    progress: 0.85,
    icon: 'moon',
    iconColor: '#9b59b6',
  },
  {
    id: '4',
    title: 'Calories',
    value: '1,756',
    unit: 'kcal',
    progress: 0.58,
    icon: 'flame',
    iconColor: '#f39c12',
  },
];

// Dummy data for health tips
const healthTips = [
  {
    id: '1',
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water daily to maintain optimal health.',
    image: 'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    colors: ['#4facfe', '#00f2fe'],
  },
  {
    id: '2',
    title: 'Morning Stretch',
    description: 'Start your day with a 10-minute stretching routine to improve flexibility.',
    image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    colors: ['#ff9a9e', '#fad0c4'],
  },
  {
    id: '3',
    title: 'Mindful Eating',
    description: 'Take time to enjoy your meals without distractions for better digestion.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    colors: ['#84fab0', '#8fd3f4'],
  },
];

const MetricCard = ({
  title, value, unit, progress, icon, iconColor
}) => (
  <View style={styles.metricCard}>
    <View style={styles.metricHeader}>
      <View style={[styles.iconContainer, { backgroundColor: iconColor + '20' }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
    <View style={styles.metricValueContainer}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricUnit}>{unit}</Text>
    </View>
    <View style={styles.progressContainer}>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill,
            { width: `${progress * 100}%`, backgroundColor: iconColor }
          ]} 
        />
      </View>
    </View>
  </View>
);

const TipCard = ({
  title, description, image, colors
}) => (
  <View style={styles.tipCard}>
    <Image
      source={{ uri: image }}
      style={styles.tipImage}
    />
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.tipGradientBadge}
    >
      <Text style={styles.tipBadgeText}>
        Health Tip
      </Text>
    </LinearGradient>
    <View style={styles.tipContent}>
      <Text style={styles.tipTitle}>{title}</Text>
      <Text style={styles.tipDescription}>{description}</Text>
    </View>
  </View>
);

export default function DiscoverScreen() {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.headerGreeting}>Hello!</Text>
          <Text style={styles.headerTitle}>Your Health Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={36} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'today' && [
              styles.activeTab,
              { borderBottomColor: theme.colors.primary }
            ]
          ]}
          onPress={() => setActiveTab('today')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'today' && { color: theme.colors.primary }
            ]}
          >
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'week' && [
              styles.activeTab,
              { borderBottomColor: theme.colors.primary }
            ]
          ]}
          onPress={() => setActiveTab('week')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'week' && { color: theme.colors.primary }
            ]}
          >
            Week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'month' && [
              styles.activeTab,
              { borderBottomColor: theme.colors.primary }
            ]
          ]}
          onPress={() => setActiveTab('month')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'month' && { color: theme.colors.primary }
            ]}
          >
            Month
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Metrics</Text>
          <View style={styles.metricsContainer}>
            {healthMetrics.map(metric => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                unit={metric.unit}
                progress={metric.progress}
                icon={metric.icon}
                iconColor={metric.iconColor}
              />
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Tips</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.tipsScrollView}
            contentContainerStyle={styles.tipsContainer}
          >
            {healthTips.map(tip => (
              <TipCard
                key={tip.id}
                title={tip.title}
                description={tip.description}
                image={tip.image}
                colors={tip.colors}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerGreeting: {
    fontSize: 16,
    color: theme.colors.textLight,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.textLight,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricCard: {
    width: (WINDOW_WIDTH - 40) / 2,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  metricTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 4,
    color: theme.colors.text,
  },
  metricUnit: {
    fontSize: 12,
    color: theme.colors.textLight,
    marginBottom: 4,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  tipsScrollView: {
    overflow: 'visible',
  },
  tipsContainer: {
    paddingRight: 16,
    paddingBottom: 8,
  },
  tipCard: {
    width: WINDOW_WIDTH * 0.75,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tipImage: {
    width: '100%',
    height: 150,
  },
  tipGradientBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tipBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  tipContent: {
    padding: 16,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.text,
  },
  tipDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.textLight,
  },
}); 