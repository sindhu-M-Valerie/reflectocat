import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #e6edf3;
    background: linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%);
    min-height: 100vh;
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
  }
`;

const twinkle = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
`;

const StarField = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #58a6ff;
  border-radius: 50%;
  animation: ${twinkle} ${props => props.duration}s infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  box-shadow: 0 0 6px #58a6ff;
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: rgba(33, 38, 45, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const HeroTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 3.2rem;
  font-weight: 700;
  color: #58a6ff;
  margin-bottom: 0.6rem;
  text-shadow: 0 0 20px rgba(88, 166, 255, 0.5);
  letter-spacing: 0.1em;
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  letter-spacing: 0.05em;
 
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ReflectoCatLogo = styled.div`
  width: 160px;
  height: 96px;
  margin: 0 auto 1rem;
  animation: float 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
 
  svg {
    width: 100%;
    height: 100%;
  }
 
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  width: 100%;
 
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #30363d;
  border-radius: 8px;
  font-size: 1.1rem;
  background: #21262d;
  color: #e6edf3;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
 
  &:focus {
    outline: none;
    border-color: #58a6ff;
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
    transform: translateY(-2px);
  }
 
  &::placeholder {
    color: #7d8590;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #238636, #2ea043);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
 
  &:hover {
    background: linear-gradient(45deg, #2ea043, #238636);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  }
 
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
 
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileHeader = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 2rem;
  background: #000000;
  backdrop-filter: blur(10px);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 0.8rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #58a6ff;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 10px rgba(88, 166, 255, 0.3);
  transition: all 0.3s ease;
 
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(88, 166, 255, 0.5);
  }
 
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const ProfileName = styled.h2`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.2rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
 
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileUsername = styled.h3`
  font-size: 0.9rem;
  color: #58a6ff;
  margin-bottom: 0.5rem;
  font-weight: 400;
 
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProfileBio = styled.p`
  font-size: 0.7rem;
  color: #7d8590;
  line-height: 1.3;
  max-width: 400px;
  margin: 0 auto 0.8rem;
  font-style: italic;
 
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const ProfileStatItem = styled.div`
  text-align: center;
  background: rgba(13, 17, 23, 0.8);
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #30363d;
  min-width: 50px;
  transition: all 0.3s ease;
 
  &:hover {
    border-color: #58a6ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }
`;

const ProfileStatValue = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #58a6ff;
  margin-bottom: 0.1rem;
 
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProfileStatLabel = styled.div`
  font-size: 0.6rem;
  color: #7d8590;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

const Dashboard = styled.div`
  background: rgba(33, 38, 45, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
  display: flex;
  gap: 1.5rem;
 
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    margin: 1rem;
    gap: 1rem;
  }
`;

const SideContent = styled.div`
  width: 240px;
 
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LiveUserStats = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  margin-bottom: 1.5rem;
  position: static;
`;

const LiveStatsTitle = styled.h4`
  font-size: 0.8rem;
  color: #58a6ff;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
`;

const LiveStatsItem = styled.div`
  font-size: 0.7rem;
  color: #e6edf3;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(48, 54, 61, 0.5);
 
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const StatLabel = styled.span`
  color: #7d8590;
  font-size: 0.65rem;
`;

const StatValue = styled.span`
  font-weight: 600;
  color: #58a6ff;
  font-size: 0.7rem;
`;

const RecentActivitySection = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const RecentActivityTitle = styled.h4`
  font-size: 0.9rem;
  color: #58a6ff;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
`;

const RecentActivityItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem;
  background: rgba(33, 38, 45, 0.5);
  border-radius: 6px;
  text-decoration: none;
  color: #e6edf3;
  margin-bottom: 0.4rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(88, 166, 255, 0.1);
    border-color: #58a6ff;
    transform: translateX(2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ActivityIcon = styled.span`
  font-size: 0.8rem;
  width: 16px;
  text-align: center;
`;

const ActivityText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  flex: 1;
`;

const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.8rem;
`;

const MetricCard = styled.div`
  background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #30363d;
  border-left: 3px solid ${props => props.color || '#58a6ff'};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
 
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    border-left-color: ${props => props.color || '#58a6ff'};
  }
`;

const MetricTitle = styled.h3`
  font-size: 0.8rem;
  color: #e6edf3;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
`;

const MetricValue = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${props => props.color || '#58a6ff'};
  margin-bottom: 0.3rem;
`;

const MetricDescription = styled.p`
  color: #7d8590;
  font-size: 0.7rem;
  line-height: 1.3;
`;

const CulturalInsightsContainer = styled.div`
  background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BehaviorPatternList = styled.div`
  margin-top: 1.5rem;
`;

const BehaviorPattern = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(48, 54, 61, 0.3);
 
  &:last-child {
    border-bottom: none;
  }
`;

const PatternIcon = styled.span`
  font-size: 1rem;
  width: 20px;
  text-align: center;
`;

const PatternText = styled.span`
  flex: 1;
  color: #c9d1d9;
  font-size: 0.8rem;
`;

const PatternStrength = styled.span`
  background: rgba(88, 166, 255, 0.2);
  color: #58a6ff;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
`;

// Compact styled components for smaller sections
const CompactInsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.8rem;
  margin-top: 0.8rem;
`;

const CompactInsightCard = styled.div`
  background: rgba(33, 38, 45, 0.8);
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 0.8rem;
  position: relative;
  border-left: 3px solid ${props => props.color || '#58a6ff'};
  transition: all 0.2s ease;
 
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }
`;

const CompactInsightTitle = styled.h4`
  font-size: 0.8rem;
  color: #e6edf3;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
`;

const CompactInsightIcon = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const CompactInsightContent = styled.div`
  color: #c9d1d9;
  font-size: 0.75rem;
  line-height: 1.3;
  margin-bottom: 0.6rem;
`;

const CompactMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 0.4rem;
`;

const CompactMetric = styled.div`
  background: rgba(13, 17, 23, 0.6);
  padding: 0.3rem;
  border-radius: 3px;
  border: 1px solid #30363d;
  font-size: 0.65rem;
  text-align: center;
`;

const CompactMetricLabel = styled.span`
  color: #7d8590;
  display: block;
  font-size: 0.6rem;
  margin-bottom: 0.1rem;
`;

const CompactMetricData = styled.span`
  color: ${props => props.color || '#58a6ff'};
  font-weight: 600;
`;

// Sentiment Examples styled components
const SentimentExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SentimentExampleCard = styled.div`
  background: rgba(33, 38, 45, 0.6);
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 1rem;
  border-left: 3px solid ${props => props.color || '#58a6ff'};
`;

const ExampleTitle = styled.h5`
  font-size: 0.8rem;
  color: #e6edf3;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
`;

const ExampleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExampleItem = styled.div`
  font-size: 0.7rem;
  color: #c9d1d9;
  line-height: 1.3;
  padding: 0.4rem;
  background: rgba(13, 17, 23, 0.4);
  border-radius: 4px;
  font-style: italic;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: #58a6ff;
  max-width: 1400px;
  margin: 0 auto;
`;

const ErrorContainer = styled.div`
  background: rgba(248, 81, 73, 0.1);
  border: 1px solid #f85149;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem auto;
  color: #f85149;
  text-align: center;
  max-width: 1400px;
`;

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push(
        <Star
          key={i}
          left={Math.random() * 100}
          top={Math.random() * 100}
          duration={2 + Math.random() * 3}
          delay={Math.random() * 2}
        />
      );
    }
    return stars;
  };

  const getPersonalityColor = (level) => {
    if (level === 'High') return '#2ea043';
    if (level === 'Medium') return '#fb8500';
    return '#f85149';
  };

  const analyzeCulturalPatterns = (user, repos, events) => {
    const insights = [];
   
    // 1. Issue Engagement Analysis
    const issueEvents = events.filter(e => e.type === 'IssuesEvent');
    const issueActions = issueEvents.map(e => e.payload?.action).filter(Boolean);
    const issueOpened = issueActions.filter(a => a === 'opened').length;
    const issueClosed = issueActions.filter(a => a === 'closed').length;
    
    let issueEngagementLevel = 'Low';
    let issueDescription = 'Limited issue tracking engagement';
    let issueColor = '#6c757d';
    
    if (issueEvents.length > 10) {
      issueEngagementLevel = 'High';
      issueDescription = 'Actively engages with issue tracking and discussions';
      issueColor = '#2ea043';
    } else if (issueEvents.length > 5) {
      issueEngagementLevel = 'Moderate';
      issueDescription = 'Regular involvement in issue management';
      issueColor = '#fb8500';
    }

    insights.push({
      title: 'Issue Engagement',
      icon: '🎯',
      color: issueColor,
      pattern: issueEngagementLevel,
      description: issueDescription,
      metrics: {
        'total issues': issueEvents.length,
        'opened': issueOpened,
        'closed': issueClosed,
        'ratio': issueOpened > 0 ? Math.round((issueClosed / issueOpened) * 100) / 100 : 0
      }
    });

    // 2. Pull Request Activity
    const prEvents = events.filter(e => e.type === 'PullRequestEvent');
    const prReviewEvents = events.filter(e => e.type === 'PullRequestReviewEvent');
    const prActions = prEvents.map(e => e.payload?.action).filter(Boolean);
    const prOpened = prActions.filter(a => a === 'opened').length;
    
    let prActivityLevel = 'Minimal';
    let prDescription = 'Limited pull request activity';
    let prColor = '#6c757d';
    
    if (prEvents.length > 15 || prReviewEvents.length > 5) {
      prActivityLevel = 'Highly Active';
      prDescription = 'Very engaged in code review and collaboration processes';
      prColor = '#2ea043';
    } else if (prEvents.length > 5 || prReviewEvents.length > 2) {
      prActivityLevel = 'Moderate';
      prDescription = 'Regular participation in pull request workflows';
      prColor = '#fb8500';
    }

    insights.push({
      title: 'Pull Request Activity',
      icon: '🔄',
      color: prColor,
      pattern: prActivityLevel,
      description: prDescription,
      metrics: {
        'total prs': prEvents.length,
        'reviews': prReviewEvents.length,
        'opened': prOpened,
        'avg per month': Math.round((prEvents.length / 3) * 10) / 10
      }
    });

    // 3. Language & Project Focus
    const languageCount = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });
    
    const sortedLanguages = Object.entries(languageCount)
      .sort(([,a], [,b]) => b - a);
    const primaryLanguage = sortedLanguages[0]?.[0] || 'Unknown';
    const languageDiversity = Object.keys(languageCount).length;
    const starLeader = repos.sort((a, b) => b.stargazers_count - a.stargazers_count)[0]?.language || 'Unknown';
    
    let projectFocus = 'Specialized';
    let focusDescription = 'Focused on specific technology stack';
    let focusColor = '#58a6ff';
    
    if (languageDiversity > 8) {
      projectFocus = 'Polyglot';
      focusDescription = 'Works with diverse programming languages and technologies';
      focusColor = '#e74c3c';
    } else if (languageDiversity > 4) {
      projectFocus = 'Multi-stack';
      focusDescription = 'Comfortable with multiple programming languages';
      focusColor = '#f39c12';
    }

    const dominance = repos.length > 0 ? Math.round((languageCount[primaryLanguage] || 0) / repos.length * 100) : 0;

    insights.push({
      title: 'Language & Project Focus',
      icon: '💻',
      color: focusColor,
      pattern: projectFocus,
      description: focusDescription,
      metrics: {
        'primary lang': primaryLanguage,
        'dominance': `${dominance}%`,
        'total langs': languageDiversity,
        'star leader': starLeader
      }
    });

    // 4. Work Time Patterns
    const workingHours = events.map(e => {
      const hour = new Date(e.created_at).getHours();
      return hour;
    });
 
    const nightOwlActivity = workingHours.filter(h => h >= 22 || h <= 6).length;
    const earlyBirdActivity = workingHours.filter(h => h >= 6 && h <= 9).length;
    const standardHours = workingHours.filter(h => h >= 9 && h <= 17).length;
    const eveningHours = workingHours.filter(h => h >= 17 && h <= 22).length;
    const total = workingHours.length || 1;
 
    let temporalPattern = 'Balanced';
    let temporalDescription = 'Activity spread across different time periods';
    let temporalColor = '#58a6ff';
 
    if (nightOwlActivity > Math.max(earlyBirdActivity, standardHours, eveningHours)) {
      temporalPattern = 'Night Owl';
      temporalDescription = 'Most productive during late night hours (22:00-06:00)';
      temporalColor = '#9d4edd';
    } else if (earlyBirdActivity > Math.max(nightOwlActivity, standardHours, eveningHours)) {
      temporalPattern = 'Early Bird';
      temporalDescription = 'Peak productivity in morning hours (06:00-09:00)';
      temporalColor = '#fca311';
    } else if (standardHours > Math.max(nightOwlActivity, earlyBirdActivity, eveningHours)) {
      temporalPattern = 'Business Hours';
      temporalDescription = 'Most active during standard work hours (09:00-17:00)';
      temporalColor = '#2ea043';
    } else if (eveningHours > Math.max(nightOwlActivity, earlyBirdActivity, standardHours)) {
      temporalPattern = 'Evening Developer';
      temporalDescription = 'Prefers evening coding sessions (17:00-22:00)';
      temporalColor = '#ff6b6b';
    }

    insights.push({
      title: 'Work Time Patterns',
      icon: '🕐',
      color: temporalColor,
      pattern: temporalPattern,
      description: temporalDescription,
      metrics: {
        'night activity': `${Math.round((nightOwlActivity / total) * 100)}%`,
        'day activity': `${Math.round((standardHours / total) * 100)}%`,
        'morning activity': `${Math.round((earlyBirdActivity / total) * 100)}%`,
        'evening activity': `${Math.round((eveningHours / total) * 100)}%`
      }
    });

    // 5. Communication Style
    const repoDescriptions = repos.map(r => r.description || '').filter(Boolean);
    const avgDescLength = repoDescriptions.reduce((sum, desc) => sum + desc.length, 0) / repoDescriptions.length || 0;
    const hasReadme = repos.filter(r => r.description && r.description.length > 20).length;
    const documentationRate = repos.length > 0 ? (hasReadme / repos.length) * 100 : 0;
    
    let communicationStyle = 'Minimal';
    let communicationDescription = 'Basic documentation approach';
    let communicationColor = '#6c757d';
 
    if (documentationRate > 75 && avgDescLength > 50) {
      communicationStyle = 'Articulate';
      communicationDescription = 'Clear, detailed, and comprehensive communication';
      communicationColor = '#2ea043';
    } else if (documentationRate > 50 && avgDescLength > 25) {
      communicationStyle = 'Moderate';
      communicationDescription = 'Adequate documentation with clear explanations';
      communicationColor = '#fb8500';
    }

    insights.push({
      title: 'Communication Style',
      icon: '📝',
      color: communicationColor,
      pattern: communicationStyle,
      description: communicationDescription,
      metrics: {
        'documented': `${Math.round(documentationRate)}%`,
        'avg length': Math.round(avgDescLength),
        'formality': 'Semi-formal',
        'expressiveness': Math.floor(Math.random() * 10)
      }
    });

    // 6. Work Philosophy
    const experimentalRepos = repos.filter(r => 
      r.name?.toLowerCase().includes('experiment') ||
      r.name?.toLowerCase().includes('prototype') ||
      r.description?.toLowerCase().includes('experiment')
    );
    
    let workPhilosophy = 'Balanced';
    let philosophyDescription = 'Mix of different project approaches';
    let philosophyColor = '#58a6ff';
    
    if (experimentalRepos.length > repos.length * 0.3) {
      workPhilosophy = 'Experimental';
      philosophyDescription = 'Enjoys prototyping and exploring new ideas';
      philosophyColor = '#e74c3c';
    }

    insights.push({
      title: 'Work Philosophy',
      icon: '🚀',
      color: philosophyColor,
      pattern: workPhilosophy,
      description: philosophyDescription,
      metrics: {
        'experimental': experimentalRepos.length,
        'production': repos.length - experimentalRepos.length,
        'enthusiasm': 'High',
        'recent activity': events.length
      }
    });

    return insights;
  };

  const analyzeSentiment = (repos) => {
    const descriptions = repos.map(r => r.description || '').filter(Boolean);
    
    // Mock sentiment analysis
    const positiveKeywords = ['awesome', 'amazing', 'great', 'excellent', 'beautiful', 'innovative', 'curated', 'easy'];
    const negativeKeywords = ['hate', 'spam', 'toxic', 'bad', 'horrible', 'terrible'];
    
    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;
    
    const positiveExamples = [];
    const negativeExamples = [];
    const neutralExamples = [];
    
    descriptions.forEach((desc, index) => {
      const lowerDesc = desc.toLowerCase();
      const hasPositive = positiveKeywords.some(keyword => lowerDesc.includes(keyword));
      const hasNegative = negativeKeywords.some(keyword => lowerDesc.includes(keyword));
      
      if (hasPositive && !hasNegative) {
        positiveCount++;
        if (positiveExamples.length < 3) {
          positiveExamples.push({
            text: desc.substring(0, 60) + (desc.length > 60 ? '...' : ''),
            repo: repos[index].name
          });
        }
      } else if (hasNegative && !hasPositive) {
        negativeCount++;
        if (negativeExamples.length < 3) {
          negativeExamples.push({
            text: desc.substring(0, 60) + (desc.length > 60 ? '...' : ''),
            repo: repos[index].name
          });
        }
      } else {
        neutralCount++;
        if (neutralExamples.length < 3) {
          neutralExamples.push({
            text: desc.substring(0, 60) + (desc.length > 60 ? '...' : ''),
            repo: repos[index].name
          });
        }
      }
    });
    
    const totalAnalyzed = descriptions.length;
    const avgSentiment = totalAnalyzed > 0 ? (positiveCount - negativeCount) / totalAnalyzed : 0;
    const overallScore = Math.round(((positiveCount / totalAnalyzed) * 100) || 50);
    
    return {
      overallScore,
      avgSentiment,
      totalAnalyzed,
      positiveCount,
      negativeCount,
      neutralCount,
      communicationStyle: overallScore > 60 ? 'Positive' : overallScore < 40 ? 'Critical' : 'Factual',
      dominantTone: positiveCount > negativeCount ? 'Positive' : positiveCount < negativeCount ? 'Critical' : 'Neutral',
      examples: {
        positive: positiveExamples,
        negative: negativeExamples,
        neutral: neutralExamples
      }
    };
  };

  const analyzeMostDiscussedTopics = (repos) => {
    const topicCount = {};
    const topicRepos = {};
    
    repos.forEach(repo => {
      const text = `${repo.name} ${repo.description || ''}`.toLowerCase();
      const words = text.match(/\b[a-z]+\b/g) || [];
      
      words.forEach(word => {
        if (word.length > 3) {
          topicCount[word] = (topicCount[word] || 0) + 1;
          if (!topicRepos[word]) {
            topicRepos[word] = [];
          }
          if (!topicRepos[word].find(r => r.name === repo.name)) {
            topicRepos[word].push({
              name: repo.name,
              html_url: repo.html_url,
              description: repo.description || ''
            });
          }
        }
      });
    });

    return Object.entries(topicCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 6)
      .map(([topic, count]) => ({ 
        topic, 
        count, 
        repos: topicRepos[topic].slice(0, 3) // Show up to 3 repos per topic
      }));
  };

  const generateBehavioralPatterns = (user, repos, events) => {
    const patterns = [];
 
    const accountAge = new Date().getFullYear() - new Date(user.created_at).getFullYear();
    if (accountAge >= 5) {
      patterns.push({
        icon: '🌟',
        text: `Veteran Developer - ${accountAge} years on GitHub`,
        strength: 'Experienced'
      });
    } else if (accountAge >= 2) {
      patterns.push({
        icon: '📈',
        text: `Established Developer - ${accountAge} years experience`,
        strength: 'Growing'
      });
    } else {
      patterns.push({
        icon: '🌱',
        text: `Emerging Developer - ${accountAge} year${accountAge !== 1 ? 's' : ''} on platform`,
        strength: 'Fresh'
      });
    }

    const recentEvents = events.filter(e => {
      const eventDate = new Date(e.created_at);
      const monthsAgo = (new Date() - eventDate) / (1000 * 60 * 60 * 24 * 30);
      return monthsAgo <= 3;
    });

    if (recentEvents.length > 20) {
      patterns.push({
        icon: '🔥',
        text: 'Highly Consistent - Very active in recent months',
        strength: 'Excellent'
      });
    } else if (recentEvents.length > 10) {
      patterns.push({
        icon: '⚡',
        text: 'Consistent Contributor - Regular activity pattern',
        strength: 'Good'
      });
    }

    return patterns;
  };

  const analyzeProfile = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const user = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const repos = await reposResponse.json();

      const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=50`);
      const events = await eventsResponse.json();

      const [wikipediaResults, newsResults] = await Promise.all([
        searchWikipedia(username, user.name),
        searchNews(username, user.name)
      ]);

      const culturalInsights = analyzeCulturalPatterns(user, repos, events);
      const behavioralPatterns = generateBehavioralPatterns(user, repos, events);
      const mostDiscussedTopics = analyzeMostDiscussedTopics(repos);
      const sentimentAnalysis = analyzeSentiment(repos);

      const analysis = {
        profile: {
          collaboration: repos.filter(r => r.forks_count > 0).length > 5 ? 'High' : 'Medium',
          consistency: events.length > 7 ? 'High' : 'Medium',
          innovation: user.public_repos > 20 ? 'High' : 'Medium'
        },
        repository: {
          avgStars: Math.round(repos.reduce((sum, r) => sum + r.stargazers_count, 0) / repos.length) || 0,
          avgForks: Math.round(repos.reduce((sum, r) => sum + r.forks_count, 0) / repos.length) || 0,
          documentationRate: Math.round((repos.filter(r => r.description).length / repos.length) * 100) || 0
        },
        behavioral: {
          primaryLanguage: repos.sort((a, b) => b.stargazers_count - a.stargazers_count)[0]?.language || 'Unknown',
          projectFocus: repos.length > 15 ? 'Diverse' : 'Focused',
          activityPattern: events.length > 5 ? 'Active' : 'Steady'
        },
        cultural: culturalInsights,
        patterns: behavioralPatterns,
        topics: mostDiscussedTopics,
        sentiment: sentimentAnalysis,
        wikipediaResults,
        newsResults
      };

      setUserData({ 
        user, 
        repos, 
        events, 
        analysis, 
        wikipediaResults, 
        newsResults 
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      analyzeProfile();
    }
  };

  const getActivityUrl = (event) => {
    const repoUrl = `https://github.com/${event.repo?.name}`;
    
    switch (event.type) {
      case 'PushEvent':
        // Link to the commits page
        return `${repoUrl}/commits`;
      case 'CreateEvent':
        if (event.payload.ref_type === 'repository') {
          return repoUrl;
        } else if (event.payload.ref_type === 'branch') {
          return `${repoUrl}/tree/${event.payload.ref}`;
        } else if (event.payload.ref_type === 'tag') {
          return `${repoUrl}/releases/tag/${event.payload.ref}`;
        }
        return repoUrl;
      case 'DeleteEvent':
        return repoUrl;
      case 'IssuesEvent':
        if (event.payload.issue) {
          return event.payload.issue.html_url;
        }
        return `${repoUrl}/issues`;
      case 'PullRequestEvent':
        if (event.payload.pull_request) {
          return event.payload.pull_request.html_url;
        }
        return `${repoUrl}/pulls`;
      case 'WatchEvent':
        return repoUrl;
      case 'ForkEvent':
        if (event.payload.forkee) {
          return event.payload.forkee.html_url;
        }
        return repoUrl;
      default:
        return repoUrl;
    }
  };

  return (
    <>
      <GlobalStyle />
      <StarField>{createStars()}</StarField>
      <Container>
        <HeroSection>
          <ReflectoCatLogo>
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
              <g transform="rotate(180 160 90)">
                <ellipse cx="235" cy="90" rx="60" ry="80" fill="#e3f2fd" stroke="#90a4ae" strokeWidth="4"/>
                <g opacity="0.45">
                  <path d="M265 145 Q280 160 245 140" stroke="#1976d2" strokeWidth="6" fill="none"/>
                  <ellipse cx="235" cy="110" rx="27" ry="36" fill="#1976d2"/>
                  <ellipse cx="235" cy="74" rx="32" ry="30" fill="#2196f3"/>
                  <path d="M217,66 Q210,47 233,65" fill="#2196f3"/>
                  <path d="M253,66 Q260,47 237,65" fill="#2196f3"/>
                  <ellipse cx="227" cy="82" rx="3.5" ry="6" fill="#fff"/>
                  <ellipse cx="243" cy="82" rx="3.5" ry="6" fill="#fff"/>
                  <ellipse cx="227" cy="82" rx="1.6" ry="2.5" fill="#222"/>
                  <ellipse cx="243" cy="82" rx="1.6" ry="2.5" fill="#222"/>
                  <path d="M232 93 Q235 97 238 93" stroke="#0d47a1" strokeWidth="2" fill="none"/>
                  <path d="M218 93 Q208 94 213 97" stroke="#0d47a1" strokeWidth="1"/>
                  <path d="M252 93 Q262 94 257 97" stroke="#0d47a1" strokeWidth="1"/>
                </g>
                <path d="M115 145 Q100 160 135 140" stroke="#1976d2" strokeWidth="6" fill="none"/>
                <ellipse cx="90" cy="110" rx="27" ry="36" fill="#1976d2"/>
                <ellipse cx="90" cy="74" rx="32" ry="30" fill="#2196f3"/>
                <path d="M74,66 Q67,47 92,65" fill="#2196f3"/>
                <path d="M106,66 Q113,47 88,65" fill="#2196f3"/>
                <ellipse cx="82" cy="82" rx="3.5" ry="6" fill="#fff"/>
                <ellipse cx="98" cy="82" rx="3.5" ry="6" fill="#fff"/>
                <ellipse cx="82" cy="82" rx="1.6" ry="2.5" fill="#222"/>
                <ellipse cx="98" cy="82" rx="1.6" ry="2.5" fill="#222"/>
                <path d="M87 93 Q90 97 93 93" stroke="#0d47a1" strokeWidth="2" fill="none"/>
                <path d="M75 93 Q65 94 70 97" stroke="#0d47a1" strokeWidth="1"/>
                <path d="M105 93 Q115 94 110 97" stroke="#0d47a1" strokeWidth="1"/>
              </g>
            </svg>
          </ReflectoCatLogo>
          <HeroTitle>ReflectoCat</HeroTitle>
          <HeroSubtitle>🪞 A playful mirror for your GitHub voice. 🪞</HeroSubtitle>
        </HeroSection>

        <Header>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={analyzeProfile} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Profile'}
            </Button>
          </SearchContainer>
        </Header>

        {error && <ErrorContainer>{error}</ErrorContainer>}

        {loading && (
          <LoadingContainer>
            Analyzing your GitHub personality... 🔍
          </LoadingContainer>
        )}

        {userData && (
          <>
            <ProfileHeader>
              <ProfileAvatar
                src={userData.user.avatar_url}
                alt={`${userData.user.name || userData.user.login}'s avatar`}
              />
              <ProfileName>
                {userData.user.name || userData.user.login}
              </ProfileName>
              <ProfileUsername>@{userData.user.login}</ProfileUsername>
              {userData.user.bio && (
                <ProfileBio>{userData.user.bio}</ProfileBio>
              )}
              <ProfileStats>
                <ProfileStatItem>
                  <ProfileStatValue>{userData.user.public_repos}</ProfileStatValue>
                  <ProfileStatLabel>repos</ProfileStatLabel>
                </ProfileStatItem>
                <ProfileStatItem>
                  <ProfileStatValue>{userData.user.followers}</ProfileStatValue>
                  <ProfileStatLabel>followers</ProfileStatLabel>
                </ProfileStatItem>
                <ProfileStatItem>
                  <ProfileStatValue>{userData.user.following}</ProfileStatValue>
                  <ProfileStatLabel>following</ProfileStatLabel>
                </ProfileStatItem>
                <ProfileStatItem>
                  <ProfileStatValue>
                    {userData.repos.reduce((sum, r) => sum + r.stargazers_count, 0)}
                  </ProfileStatValue>
                  <ProfileStatLabel>stars</ProfileStatLabel>
                </ProfileStatItem>
              </ProfileStats>
            </ProfileHeader>

            {/* Wikipedia & News Section */}
            {(userData.wikipediaResults?.length > 0 || userData.newsResults?.length > 0) && (
              <WikiNewsSection>
                <WikiNewsTitle>📰 External References</WikiNewsTitle>
                <WikiNewsGrid>
                  <WikiNewsColumn>
                    <WikiNewsColumnTitle>📚 Wikipedia</WikiNewsColumnTitle>
                    {userData.wikipediaResults?.length > 0 ? (
                      userData.wikipediaResults.map((article, index) => (
                        <WikiNewsItem 
                          key={index}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WikiNewsItemTitle>{article.title}</WikiNewsItemTitle>
                          <WikiNewsItemSnippet>{article.snippet}</WikiNewsItemSnippet>
                        </WikiNewsItem>
                      ))
                    ) : (
                      <NoResultsMessage>No Wikipedia page found</NoResultsMessage>
                    )}
                  </WikiNewsColumn>
                  
                  <WikiNewsColumn>
                    <WikiNewsColumnTitle>🗞️ Recent News</WikiNewsColumnTitle>
                    {userData.newsResults?.length > 0 ? (
                      userData.newsResults.map((article, index) => (
                        <WikiNewsItem 
                          key={index}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WikiNewsItemTitle>{article.title}</WikiNewsItemTitle>
                          <WikiNewsItemSnippet>{article.snippet}</WikiNewsItemSnippet>
                        </WikiNewsItem>
                      ))
                    ) : (
                      <NoResultsMessage>No recent news found</NoResultsMessage>
                    )}
                  </WikiNewsColumn>
                </WikiNewsGrid>
              </WikiNewsSection>
            )}

            <Dashboard>
              <SideContent>
                <LiveUserStats>
                  <LiveStatsTitle>📊 Live Stats</LiveStatsTitle>
                  <LiveStatsItem>
                    <StatLabel>Public Repos</StatLabel>
                    <StatValue>{userData.user.public_repos}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Followers</StatLabel>
                    <StatValue>{userData.user.followers}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Following</StatLabel>
                    <StatValue>{userData.user.following}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Total Stars</StatLabel>
                    <StatValue>{userData.repos.reduce((sum, r) => sum + r.stargazers_count, 0)}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Total Forks</StatLabel>
                    <StatValue>{userData.repos.reduce((sum, r) => sum + r.forks_count, 0)}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Languages Used</StatLabel>
                    <StatValue>{[...new Set(userData.repos.map(r => r.language).filter(Boolean))].length}</StatValue>
                  </LiveStatsItem>
                  <LiveStatsItem>
                    <StatLabel>Account Age</StatLabel>
                    <StatValue>{new Date().getFullYear() - new Date(userData.user.created_at).getFullYear()} years</StatValue>
                  </LiveStatsItem>
                </LiveUserStats>

                {/* Profile Links Section */}
                <ProfileLinksSection>
                  <ProfileLinksTitle>👤 Profile Links</ProfileLinksTitle>
                  <ProfileLinkItem 
                    href={`https://github.com/${userData.user.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProfileLinkIcon>🔗</ProfileLinkIcon>
                    <ProfileLinkText>View Full Profile</ProfileLinkText>
                  </ProfileLinkItem>
                  <ProfileLinkItem 
                    href={`https://github.com/${userData.user.login}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProfileLinkIcon>📚</ProfileLinkIcon>
                    <ProfileLinkText>All Repositories</ProfileLinkText>
                  </ProfileLinkItem>
                  <ProfileLinkItem 
                    href={`https://github.com/${userData.user.login}?tab=activity`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProfileLinkIcon>⚡</ProfileLinkIcon>
                    <ProfileLinkText>Activity Overview</ProfileLinkText>
                  </ProfileLinkItem>
                  <ProfileLinkItem 
                    href={`https://github.com/${userData.user.login}?tab=followers`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProfileLinkIcon>👥</ProfileLinkIcon>
                    <ProfileLinkText>Followers</ProfileLinkText>
                  </ProfileLinkItem>
                </ProfileLinksSection>

                {/* Top Repositories Section */}
                {userData.repos.length > 0 && (
                  <TopRepositoriesSection>
                    <TopRepositoriesTitle>⭐ Top Repositories</TopRepositoriesTitle>
                    {userData.repos
                      .sort((a, b) => b.stargazers_count - a.stargazers_count)
                      .slice(0, 5)
                      .map((repo, index) => (
                        <TopRepoItem 
                          key={index}
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TopRepoInfo>
                            <TopRepoIcon>🔗</TopRepoIcon>
                            <TopRepoName>{repo.name}</TopRepoName>
                          </TopRepoInfo>
                          <TopRepoStars>
                            ({repo.stargazers_count} ⭐)
                          </TopRepoStars>
                        </TopRepoItem>
                      ))}
                  </TopRepositoriesSection>
                )}

                {/* Recent Activity Section */}
                {userData.events.length > 0 && (
                  <RecentActivitySection>
                    <RecentActivityTitle>🕐 Recent Activity</RecentActivityTitle>
                    {userData.events.slice(0, 4).map((event, index) => (
                      <RecentActivityItem 
                        key={index}
                        href={getActivityUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ActivityIcon>🔗</ActivityIcon>
                        <ActivityText>
                          {event.type.replace('Event', '')} in {event.repo?.name}
                        </ActivityText>
                      </RecentActivityItem>
                    ))}
                  </RecentActivitySection>
                )}
              </SideContent>

              <MainContent>
                <SectionContainer>
                  <SectionTitle>🗣️ Cultural & Behavioral Insights</SectionTitle>
                  <CulturalInsightsContainer>
                    <CompactInsightsGrid>
                      {userData.analysis.cultural.map((insight, index) => (
                        <CompactInsightCard key={index} color={insight.color}>
                          <CompactInsightTitle>
                            <CompactInsightIcon>{insight.icon}</CompactInsightIcon>
                            {insight.title}
                          </CompactInsightTitle>
                          <CompactInsightContent>
                            <strong>{insight.pattern}:</strong> {insight.description}
                          </CompactInsightContent>
                          <CompactMetricsGrid>
                            {Object.entries(insight.metrics).map(([key, value]) => (
                              <CompactMetric key={key}>
                                <CompactMetricLabel>{key}</CompactMetricLabel>
                                <CompactMetricData color={insight.color}>{value}</CompactMetricData>
                              </CompactMetric>
                            ))}
                          </CompactMetricsGrid>
                        </CompactInsightCard>
                      ))}
                    </CompactInsightsGrid>
                   
                    <BehaviorPatternList>
                      <InsightTitle style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <InsightIcon>🧬</InsightIcon>
                        Behavioral Patterns
                      </InsightTitle>
                      {userData.analysis.patterns.map((pattern, index) => (
                        <BehaviorPattern key={index}>
                          <PatternIcon>{pattern.icon}</PatternIcon>
                          <PatternText>{pattern.text}</PatternText>
                          <PatternStrength>{pattern.strength}</PatternStrength>
                        </BehaviorPattern>
                      ))}
                    </BehaviorPatternList>
                  </CulturalInsightsContainer>
                </SectionContainer>

                <SectionContainer>
                  <SectionTitle>😊 Communication Sentiment Analysis</SectionTitle>
                  <CulturalInsightsContainer>
                    <CompactInsightsGrid>
                      <CompactInsightCard color="#2ea043">
                        <CompactInsightTitle>
                          <CompactInsightIcon>😊</CompactInsightIcon>
                          Communication Sentiment
                        </CompactInsightTitle>
                        <CompactInsightContent>
                          <strong>{userData.analysis.sentiment.dominantTone}:</strong> {userData.analysis.sentiment.communicationStyle} communication style
                        </CompactInsightContent>
                        <CompactMetricsGrid>
                          <CompactMetric>
                            <CompactMetricLabel>overall score</CompactMetricLabel>
                            <CompactMetricData color="#2ea043">{userData.analysis.sentiment.overallScore}%</CompactMetricData>
                          </CompactMetric>
                          <CompactMetric>
                            <CompactMetricLabel>avg sentiment</CompactMetricLabel>
                            <CompactMetricData color="#58a6ff">{userData.analysis.sentiment.avgSentiment.toFixed(1)}</CompactMetricData>
                          </CompactMetric>
                          <CompactMetric>
                            <CompactMetricLabel>total analyzed</CompactMetricLabel>
                            <CompactMetricData color="#f39c12">{userData.analysis.sentiment.totalAnalyzed}</CompactMetricData>
                          </CompactMetric>
                          <CompactMetric>
                            <CompactMetricLabel>positive count</CompactMetricLabel>
                            <CompactMetricData color="#2ea043">{userData.analysis.sentiment.positiveCount}</CompactMetricData>
                          </CompactMetric>
                        </CompactMetricsGrid>
                      </CompactInsightCard>
                    </CompactInsightsGrid>

                    <SentimentExamplesGrid>
                      <SentimentExampleCard color="#2ea043">
                        <ExampleTitle>😊 Positive Examples</ExampleTitle>
                        <ExampleList>
                          {userData.analysis.sentiment.examples.positive.map((example, index) => (
                            <ExampleItem key={index}>
                              "{example.text}"<br/>
                              <em style={{color: '#7d8590', fontSize: '0.6rem'}}>from {example.repo}</em>
                            </ExampleItem>
                          ))}
                        </ExampleList>
                      </SentimentExampleCard>

                      <SentimentExampleCard color="#f85149">
                        <ExampleTitle>😔 Critical Examples</ExampleTitle>
                        <ExampleList>
                          {userData.analysis.sentiment.examples.negative.map((example, index) => (
                            <ExampleItem key={index}>
                              "{example.text}"<br/>
                              <em style={{color: '#7d8590', fontSize: '0.6rem'}}>from {example.repo}</em>
                            </ExampleItem>
                          ))}
                        </ExampleList>
                      </SentimentExampleCard>

                      <SentimentExampleCard color="#58a6ff">
                        <ExampleTitle>😐 Neutral Examples</ExampleTitle>
                        <ExampleList>
                          {userData.analysis.sentiment.examples.neutral.map((example, index) => (
                            <ExampleItem key={index}>
                              "{example.text}"<br/>
                              <em style={{color: '#7d8590', fontSize: '0.6rem'}}>from {example.repo}</em>
                            </ExampleItem>
                          ))}
                        </ExampleList>
                      </SentimentExampleCard>
                    </SentimentExamplesGrid>
                  </CulturalInsightsContainer>
                </SectionContainer>
                
                <SectionContainer>
                  <SectionTitle>💬 Most Discussed Topics</SectionTitle>
                  <CulturalInsightsContainer>
                    <TopicsGrid>
                      {userData.analysis.topics.map((topic, index) => (
                        <TopicCard key={index}>
                          <TopicTitle>#{topic.topic}</TopicTitle>
                          <TopicValue>{topic.count}</TopicValue>
                          <TopicDescription>mentions across {topic.repos.length} project{topic.repos.length !== 1 ? 's' : ''}</TopicDescription>
                          <TopicReposList>
                            {topic.repos.map((repo, repoIndex) => (
                              <TopicRepoLink 
                                key={repoIndex}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={repo.description}
                              >
                                <RepoLinkIcon>🔗</RepoLinkIcon>
                                {repo.name}
                              </TopicRepoLink>
                            ))}
                          </TopicReposList>
                        </TopicCard>
                      ))}
                    </TopicsGrid>
                  </CulturalInsightsContainer>
                </SectionContainer>
                
                <SectionContainer>
                  <SectionTitle>👤 Profile & Repository Analysis</SectionTitle>
                  <AnalysisGrid>
                    <MetricCard color="#2ea043">
                      <MetricTitle>🤝 Collaboration</MetricTitle>
                      <MetricValue color={getPersonalityColor(userData.analysis.profile.collaboration)}>
                        {userData.analysis.profile.collaboration}
                      </MetricValue>
                      <MetricDescription>Issue interactions & PR activity</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#1f6feb">
                      <MetricTitle>⚡ Consistency</MetricTitle>
                      <MetricValue color={getPersonalityColor(userData.analysis.profile.consistency)}>
                        {userData.analysis.profile.consistency}
                      </MetricValue>
                      <MetricDescription>Regular contribution patterns</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#fb8500">
                      <MetricTitle>🚀 Innovation</MetricTitle>
                      <MetricValue color={getPersonalityColor(userData.analysis.profile.innovation)}>
                        {userData.analysis.profile.innovation}
                      </MetricValue>
                      <MetricDescription>Public repositories created</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#2ea043">
                      <MetricTitle>⭐ Avg Stars</MetricTitle>
                      <MetricValue>{userData.analysis.repository.avgStars}</MetricValue>
                      <MetricDescription>Community appreciation</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#58a6ff">
                      <MetricTitle>🍴 Avg Forks</MetricTitle>
                      <MetricValue>{userData.analysis.repository.avgForks}</MetricValue>
                      <MetricDescription>Code sharing frequency</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#f1e05a">
                      <MetricTitle>📄 Documentation Rate</MetricTitle>
                      <MetricValue>{userData.analysis.repository.documentationRate}%</MetricValue>
                      <MetricDescription>Clarity of project descriptions</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#f1e05a">
                      <MetricTitle>💻 Primary Language</MetricTitle>
                      <MetricValue>{userData.analysis.behavioral.primaryLanguage}</MetricValue>
                      <MetricDescription>Most frequently used</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#06b6d4">
                      <MetricTitle>🎯 Project Focus</MetricTitle>
                      <MetricValue color={getPersonalityColor(userData.analysis.behavioral.projectFocus)}>
                        {userData.analysis.behavioral.projectFocus}
                      </MetricValue>
                      <MetricDescription>Variety of project types</MetricDescription>
                    </MetricCard>

                    <MetricCard color="#e67e22">
                      <MetricTitle>📈 Activity Pattern</MetricTitle>
                      <MetricValue>{userData.analysis.behavioral.activityPattern}</MetricValue>
                      <MetricDescription>Recent GitHub activity level</MetricDescription>
                    </MetricCard>
                  </AnalysisGrid>
                </SectionContainer>
              </MainContent>
            </Dashboard>
          </>
        )}
      </Container>
    </>
  );
};

export default App;

const InsightTitle = styled.h4`
  font-size: 0.9rem;
  color: #e6edf3;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
`;

const InsightIcon = styled.span`
  font-size: 1rem;
  opacity: 0.8;
`;

const ProfileLinksSection = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const ProfileLinksTitle = styled.h4`
  font-size: 0.9rem;
  color: #58a6ff;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
`;

const ProfileLinkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem;
  background: rgba(33, 38, 45, 0.5);
  border-radius: 6px;
  text-decoration: none;
  color: #e6edf3;
  margin-bottom: 0.4rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(88, 166, 255, 0.1);
    border-color: #58a6ff;
    transform: translateX(2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileLinkIcon = styled.span`
  font-size: 0.8rem;
  width: 16px;
  text-align: center;
`;

const ProfileLinkText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;

const TopRepositoriesSection = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const TopRepositoriesTitle = styled.h4`
  font-size: 0.9rem;
  color: #58a6ff;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
`;

const TopRepoItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.6rem;
  background: rgba(33, 38, 45, 0.5);
  border-radius: 6px;
  text-decoration: none;
  color: #e6edf3;
  margin-bottom: 0.4rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(88, 166, 255, 0.1);
    border-color: #58a6ff;
    transform: translateX(2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TopRepoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

const TopRepoIcon = styled.span`
  font-size: 0.8rem;
  color: #58a6ff;
`;

const TopRepoName = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #58a6ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TopRepoStars = styled.span`
  font-size: 0.7rem;
  color: #7d8590;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-shrink: 0;
`;

const MainContent = styled.div`
  flex: 1;
`;

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #e6edf3;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #30363d;
  padding-bottom: 0.3rem;
`;

// Topics section styled components
const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.6rem;
  margin-top: 0.6rem;
`;

const TopicCard = styled.div`
  background: linear-gradient(135deg, #161b22 0%, #0d1117 100%);
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #30363d;
  border-left: 3px solid #58a6ff;
  transition: all 0.2s ease;
 
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    border-left-color: #58a6ff;
    background: linear-gradient(135deg, #1c2128 0%, #161b22 100%);
  }
`;

const TopicTitle = styled.h3`
  font-size: 0.75rem;
  color: #58a6ff;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
`;

const TopicValue = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: #58a6ff;
  margin-bottom: 0.3rem;
`;

const TopicDescription = styled.p`
  color: #7d8590;
  font-size: 0.65rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`;

const TopicReposList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const TopicRepoLink = styled.a`
  color: #58a6ff;
  font-size: 0.65rem;
  text-decoration: none;
  padding: 0.2rem 0;
  border-bottom: 1px solid rgba(48, 54, 61, 0.3);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: #79c0ff;
    transform: translateX(2px);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const RepoLinkIcon = styled.span`
  font-size: 0.6rem;
  opacity: 0.8;
`;

// Wikipedia & News Section styled components
const WikiNewsSection = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 2rem;
  background: rgba(33, 38, 45, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
`;

const WikiNewsTitle = styled.h3`
  font-size: 1rem;
  color: #58a6ff;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WikiNewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WikiNewsColumn = styled.div``;

const WikiNewsColumnTitle = styled.h4`
  font-size: 0.85rem;
  color: #e6edf3;
  margin-bottom: 0.6rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #30363d;
`;

const WikiNewsItem = styled.a`
  display: block;
  display: block;
  background: rgba(13, 17, 23, 0.6);
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  text-decoration: none;
  color: #e6edf3;
  transition: all 0.2s ease;
  border-left: 3px solid #58a6ff;
  
  &:hover {
    background: rgba(88, 166, 255, 0.1);
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const WikiNewsItemTitle = styled.h5`
  font-size: 0.8rem;
  color: #58a6ff;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

const WikiNewsItemSnippet = styled.p`
  font-size: 0.7rem;
  color: #c9d1d9;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NoResultsMessage = styled.div`
  color: #7d8590;
  font-style: italic;
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem;
`;

// Add these search functions before the App component (around line 800)
const searchWikipedia = async (username, realName) => {
  try {
    // Try exact match first with real name, then username
    const searchTerms = [realName, username].filter(Boolean);
    
    for (const term of searchTerms) {
      if (!term) continue;
      
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(term)}&limit=1&namespace=0&format=json&origin=*`
        );
        
        if (response.ok) {
          const data = await response.json();
          const [, titles, snippets, urls] = data;
          
          if (titles[0] && urls[0]) {
            return [{
              title: titles[0],
              snippet: snippets[0] || 'Wikipedia page found',
              url: urls[0]
            }];
          }
        }
      } catch (error) {
        console.warn(`Wikipedia search failed for: ${term}`);
      }
    }
    
    return [];
  } catch (error) {
    console.error('Wikipedia search error:', error);
    return [];
  }
};

const searchNews = async (username, realName) => {
  try {
    // Since we can't access real news APIs without keys, return empty array
    // In a real implementation, you'd use Google News API, NewsAPI, etc.
    return [];
  // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.error('News search error:', error);
    return [];
  }
};
