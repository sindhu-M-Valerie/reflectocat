import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CatLogo from './CatLogo';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow-x: hidden;
`;

const Header = styled.header`
  padding: 3rem 2rem 1.5rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeInUp} 0.8s ease-out;
`;

const LogoWrap = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  font-size: 4.5rem;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  max-width: 600px;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
`;

const SearchSection = styled.div`
  padding: 2.5rem 2rem 1.5rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 1.2rem 1.5rem 1.2rem 3rem;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  min-width: 350px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  &::placeholder { color: rgba(255, 255, 255, 0.6); }
  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.3);
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 1;
  font-size: 1.2rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SearchButton = styled.button`
  padding: 1.2rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  }
  &:disabled {
    background: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Dashboard = styled.div`
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  position: relative;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) { flex-direction: column; text-align: center; }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: white;
`;

const UserBio = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  line-height: 1.6;
`;

const UserStats = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) { justify-content: center; }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-direction: column;
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #4facfe;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  &::before {
    content: '🔍 Analyzing your GitHub soul...';
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    animation: ${pulse} 2s ease-in-out infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  background: rgba(220, 53, 69, 0.2);
  border: 1px solid rgba(220, 53, 69, 0.4);
  color: #ff6b7a;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0 1.5rem 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MetricRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const MetricBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const MetricTitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const MetricNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const PatternsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const PatternItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`;

const PatternIcon = styled.span`
  font-size: 1.5rem;
`;

const PatternStrength = styled.div`
  font-size: 0.8rem;
  color: #4facfe;
  font-weight: 600;
`;

const PatternText = styled.div`
  flex: 1;
`;

const TopicTag = styled.span`
  background: rgba(79, 172, 254, 0.2);
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: #4facfe;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const TopicCount = styled.span`
  background: rgba(79, 172, 254, 0.4);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const ActivityList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ActivityItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin: 0.8rem 0;
`;

const ActivityContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const ActivityMeta = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const AnalysisSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  color: #4facfe;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: white;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-size: 0.9rem;
`;

// ----------- ANALYSIS HELPERS & LOGIC -----------
function analyzeText(text) {
  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return {
      hostility: 0,
      formality: 0,
      sentiment: 0,
      toxicity: 0,
      constructiveness: 0,
      keywords: {},
      patterns: []
    };
  }
  const hostileWords = ["terrible", "wrong", "stupid", "awful", "hate", "useless", "idiot", "ridiculous"];
  const formalWords = ["therefore", "consequently", "furthermore", "however", "regards", "additionally"];
  const positiveWords = ["thanks", "great", "awesome", "helpful", "appreciate", "good", "excellent"];
  const negativeWords = ["bug", "issue", "problem", "error", "fail", "broken", "bad"];
  const toxicWords = ["stupid", "idiot", "useless", "terrible", "hate", "awful"];
  const constructiveWords = ["suggest", "perhaps", "consider", "improve", "help", "could", "maybe"];
  const words = text.toLowerCase().split(/\W+/).filter(Boolean);
  const wordCount = words.length || 1;
  const hostility = words.filter(w => hostileWords.includes(w)).length / wordCount;
  const formality = words.filter(w => formalWords.includes(w)).length / wordCount;
  const sentiment =
    (words.filter(w => positiveWords.includes(w)).length -
      words.filter(w => negativeWords.includes(w)).length) / wordCount;
  const toxicity = words.filter(w => toxicWords.includes(w)).length / wordCount;
  const constructiveness = words.filter(w => constructiveWords.includes(w)).length / wordCount;
  const patterns = [];
  if (hostility > 0.05) patterns.push('High hostility detected');
  if (formality > 0.1) patterns.push('Formal language used');
  if (sentiment < -0.1) patterns.push('Negative sentiment');
  if (toxicity > 0.02) patterns.push('Toxic language detected');
  if (constructiveness > 0.05) patterns.push('Constructive feedback');
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'can', 'may', 'might', 'must', 'shall', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'];
  const contentWords = words.filter(w => w.length > 3 && !stopWords.includes(w));
  const wordFreq = {};
  contentWords.forEach(w => { wordFreq[w] = (wordFreq[w] || 0) + 1; });
  return {
    hostility: Math.round(hostility * 100),
    formality: Math.round(formality * 100),
    sentiment: Math.round(sentiment * 100),
    toxicity: Math.round(toxicity * 100),
    constructiveness: Math.round(constructiveness * 100),
    keywords: wordFreq,
    patterns
  };
}

async function fetchUserActivity(username) {
  try {
    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);
    const events = await eventsResponse.json();
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
    const repos = await reposResponse.json();
    return { events: Array.isArray(events) ? events : [], repos: Array.isArray(repos) ? repos : [] };
  } catch {
    return { events: [], repos: [] };
  }
}

function analyzeBehaviorPatterns(events, repos, userData) {
  const patterns = [];
  const eventCount = Array.isArray(events) ? events.length : 0;
  if (eventCount > 7) {
    patterns.push({ icon: "🔥", color: '#ff6b47', text: 'Extremely Active Contributor', strength: 'Very Strong' });
  } else if (eventCount > 4) {
    patterns.push({ icon: "📈", color: '#4ade80', text: 'Highly Active', strength: 'Strong' });
  } else if (eventCount > 1) {
    patterns.push({ icon: "⚡", color: '#fbbf24', text: 'Moderate Activity', strength: 'Moderate' });
  } else {
    patterns.push({ icon: "⏰", color: '#94a3b8', text: 'Low Activity', strength: 'Light' });
  }
  const collaborativeEvents = (Array.isArray(events) ? events : []).filter(e =>
    ['PullRequestEvent', 'IssuesEvent', 'IssueCommentEvent'].includes(e.type)
  );
  if (collaborativeEvents.length > 3) {
    patterns.push({ icon: "🤝", color: '#06b6d4', text: 'Team Player', strength: 'Strong' });
  } else if (collaborativeEvents.length > 0) {
    patterns.push({ icon: "👥", color: '#8b5cf6', text: 'Collaborative', strength: 'Moderate' });
  }
  const avgStars = (Array.isArray(repos) && repos.length > 0)
    ? repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) / repos.length
    : 0;
  if (avgStars > 15) {
    patterns.push({ icon: "⭐", color: '#fbbf24', text: 'High-Quality Creator', strength: 'Excellent' });
  } else if (avgStars > 5) {
    patterns.push({ icon: "🌟", color: '#4facfe', text: 'Quality Contributor', strength: 'Good' });
  }
  const languages = new Set();
  (Array.isArray(repos) ? repos : []).forEach(repo => { if (repo.language) languages.add(repo.language); });
  if (languages.size > 4) {
    patterns.push({ icon: "🧠", color: '#ec4899', text: `Polyglot Programmer`, strength: 'Versatile' });
  } else if (languages.size > 2) {
    patterns.push({ icon: "🌐", color: '#8b5cf6', text: `Multi-Language Developer`, strength: 'Flexible' });
  }
  const wellDocumented = (Array.isArray(repos) ? repos : []).filter(repo => repo.description && repo.description.length > 30).length;
  if (wellDocumented > (repos.length || 1) * 0.7) {
    patterns.push({ icon: "📖", color: '#4ade80', text: 'Documentation Focused', strength: 'Professional' });
  }
  if (userData.followers > 100) {
    patterns.push({ icon: "💖", color: '#ef4444', text: `Community Influencer`, strength: 'Influential' });
  } else if (userData.followers > 20) {
    patterns.push({ icon: "💗", color: '#f59e0b', text: `Growing Influence`, strength: 'Emerging' });
  }
  return { patterns };
}

function generateCommunicationMetrics(userData, analysis) {
  const baseMetrics = {
    toxicity: Math.round(Math.random() * 10),
    constructiveness: Math.round(Math.random() * 50 + 50),
    sentiment: Math.round(Math.random() * 60 - 20),
  };
  const activityScore = Math.min(100, Array.isArray(analysis.activity?.events) ? (analysis.activity.events.length || 0) * 10 : 0);
  const collaborativeEvents = Array.isArray(analysis.activity?.events)
    ? analysis.activity.events.filter(e =>
        ['PullRequestEvent', 'IssuesEvent', 'IssueCommentEvent'].includes(e.type)
      )
    : [];
  const collaborationScore = Math.min(100, collaborativeEvents.length * 15);
  return {
    ...baseMetrics,
    engagement: activityScore,
    collaboration: collaborationScore,
  };
}
function getCognitiveBehavior(events) {
  if (!Array.isArray(events) || events.length === 0) return null;
  const hours = events.map(e => new Date(e.created_at).getUTCHours());
  const nightCount = hours.filter(h => h >= 20 || h < 6).length;
  const dayCount = hours.filter(h => h >= 6 && h < 20).length;
  if (nightCount > dayCount) {
    return { type: 'night', text: 'Night Owl 🌙🦉', detail: 'Most activity happens late at night.' };
  } else if (dayCount > nightCount) {
    return { type: 'early', text: 'Early Bird 🌞🐦', detail: 'Most activity happens during the day.' };
  } else {
    return { type: 'mixed', text: 'Balanced ☯️', detail: 'Activity is evenly spread out.' };
  }
}
function generateBehavioralInsights(userData, analysis, activityEvents) {
  const insights = [];
  
  // Add cognitive behavior analysis
  const cognitiveBehavior = getCognitiveBehavior(activityEvents);
  if (cognitiveBehavior) {
    insights.push(`${cognitiveBehavior.text} - ${cognitiveBehavior.detail}`);
  }
  
  if (userData.followers > 50) {
    insights.push('You have a strong community presence and influence.');
  }
  if ((Array.isArray(analysis.activity?.repos) ? analysis.activity.repos.length : 0) > 4) {
    insights.push('You maintain several active repositories, showing commitment.');
  }
  if ((Array.isArray(analysis.activity?.events) ? analysis.activity.events.length : 0) > 7) {
    insights.push('Your recent GitHub activity is impressive.');
  }
  if (analysis.toxicity < 5) {
    insights.push('Your communication style is positive and respectful.');
  }
  if (analysis.constructiveness > 70) {
    insights.push('You provide helpful, constructive feedback.');
  }
  return insights;
}

function generateDiscussionTopics(repos, events) {
  const topics = {};
  (Array.isArray(repos) ? repos : []).forEach(repo => {
    if (repo.language) topics[repo.language] = (topics[repo.language] || 0) + 3;
    const repoWords = repo.name.toLowerCase().split(/[-_\s]+/);
    repoWords.forEach(word => { if (word.length > 3) topics[word] = (topics[word] || 0) + 2; });
    if (repo.description) {
      const descWords = repo.description.toLowerCase().split(/\W+/).filter(w => w.length > 4);
      descWords.slice(0, 3).forEach(word => { topics[word] = (topics[word] || 0) + 1; });
    }
  });
  ['development', 'programming', 'software', 'code', 'project', 'technology'].forEach(topic => {
    if (!topics[topic]) topics[topic] = Math.floor(Math.random() * 3) + 1;
  });
  return topics;
}

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }
    setLoading(true); setError(null); setUserData(null); setAnalysis(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      const user = await response.json();
      const activity = await fetchUserActivity(username);
      const behaviorAnalysis = analyzeBehaviorPatterns(activity.events, activity.repos, user);
      const sampleText = `Thanks for the great work on this project! I think we could improve the documentation to make it more accessible. Perhaps we could add more examples and consider restructuring the API guide. This would help new contributors understand the codebase better.`;
      const textAnalysis = analyzeText(sampleText);
      const discussionTopics = generateDiscussionTopics(activity.repos, activity.events);
      setUserData(user);
      setAnalysis({
        ...textAnalysis,
        patterns: [...textAnalysis.patterns, ...behaviorAnalysis.patterns],
        activity: activity,
        discussionTopics: discussionTopics
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = e => { if (e.key === 'Enter') handleSearch(); };

  const activityEvents = analysis && analysis.activity && Array.isArray(analysis.activity.events) ? analysis.activity.events : [];
  const activityRepos = analysis && analysis.activity && Array.isArray(analysis.activity.repos) ? analysis.activity.repos : [];
const behavioralInsights = (userData && analysis) ? generateBehavioralInsights(userData, analysis, activityEvents) : [];
  return (
    <Container>
      <Header>
        <LogoWrap>
                    <CatLogo size={100} color="#4fc3f7" />
        </LogoWrap>
        <Title>ReflectoCat</Title>
        <Subtitle> 🪞 A playful mirror for your GitHub voice. 🪞</Subtitle>
      </Header>
      <SearchSection>
        <SearchContainer>
          <SearchIcon>🔎</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </SearchContainer>
        <SearchButton onClick={handleSearch} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze User'}
          <span role="img" aria-label="profile">👤</span>
        </SearchButton>
      </SearchSection>

      <Dashboard>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <LoadingSpinner />}
        {userData && analysis && (
          <>
            <Card>
              <UserProfile>
                <Avatar src={userData.avatar_url} alt={userData.name || userData.login} />
                <UserInfo>
                  <UserName>{userData.name || userData.login}</UserName>
                  <UserBio>{userData.bio || 'No bio available'}</UserBio>
                  <UserStats>
                    <Stat>👥 {userData.followers} followers</Stat>
                    <Stat>📚 {userData.public_repos} repositories</Stat>
                    <Stat>📅 Joined {new Date(userData.created_at).getFullYear()}</Stat>
                  </UserStats>
                </UserInfo>
              </UserProfile>
            </Card>

            <SectionTitle>💬 Communication Analysis 💬 </SectionTitle>
            <MetricRow>
              {Object.entries(generateCommunicationMetrics(userData, analysis)).map(([key, value]) => (
                <MetricBox key={key}>
                  <MetricTitle>
                    {key === 'toxicity' && 'Toxicity Level'}
                    {key === 'constructiveness' && 'Constructiveness'}
                    {key === 'sentiment' && 'Sentiment Score'}
                    {key === 'engagement' && 'Engagement Level'}
                    {key === 'collaboration' && 'Collaboration'}
                  </MetricTitle>
                  <MetricNumber>{value}%</MetricNumber>
                </MetricBox>
              ))}
            </MetricRow>

            <SectionTitle>🧬 Behavioral Patterns 🧬 </SectionTitle>
            <Card>
              <PatternsList>
                {Array.isArray(analysis.patterns) && analysis.patterns.map((pattern, index) => (
                  <PatternItem key={index}>
                    <PatternIcon>{pattern.icon}</PatternIcon>
                    <PatternText>{pattern.text}</PatternText>
                    <PatternStrength>{pattern.strength}</PatternStrength>
                  </PatternItem>
                ))}
              </PatternsList>
            </Card>

            <SectionTitle>💡 Behavioral Insights</SectionTitle>
<Card>
  <div style={{marginBottom: "1rem", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem"}}>
    Analysis generated on {new Date().toLocaleDateString()}
  </div>
  <ul style={{margin: 0, padding: 0, listStyle: "none"}}>
    {behavioralInsights.map((insight, idx) =>
      <li key={idx} style={{marginBottom: "0.5rem"}}>➤ {insight}</li>
    )}
    {behavioralInsights.length === 0 && <li>No major insights detected from recent activity.</li>}
  </ul>
</Card>

            <SectionTitle>🏷️ Most Discussed Topics</SectionTitle>
            <Card>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {Object.entries(analysis.discussionTopics || {})
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 15)
                  .map(([topic, count]) => (
                    <TopicTag key={topic}>
                      #{topic}
                      <TopicCount>{count}</TopicCount>
                    </TopicTag>
                  ))}
              </div>
            </Card>

            <SectionTitle>⚡ Recent Activity</SectionTitle>
            <AnalysisSection>
              <Card>
                <SectionTitle>⏰ Latest Events</SectionTitle>
                <ActivityList>
                  {activityEvents.length > 0 ? (
                    activityEvents.slice(0, 5).map((event, index) => (
                      <ActivityItem key={index}>
                        <ActivityContent>
                          <strong>{event.type.replace('Event', '')}</strong>
                          {event.repo && ` in ${event.repo.name}`}
                          {event.payload && event.payload.action && ` - ${event.payload.action}`}
                        </ActivityContent>
                        <ActivityMeta>
                          <span>{new Date(event.created_at).toLocaleDateString()}</span>
                          <span>{event.type}</span>
                        </ActivityMeta>
                      </ActivityItem>
                    ))
                  ) : (
                    <ActivityItem>
                      <ActivityContent>No recent public activity found</ActivityContent>
                    </ActivityItem>
                  )}
                </ActivityList>
              </Card>
              <Card>
                <SectionTitle>📚 Recent Repositories</SectionTitle>
                <div>
                  {activityRepos.length > 0 ? (
                    activityRepos.slice(0, 3).map((repo, index) => (
                      <div key={index} style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <h4 style={{ color: '#4facfe', margin: '0 0 0.5rem 0' }}>{repo.name}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                          {repo.description || 'No description available'}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                          {repo.language && <span>🔵 {repo.language}</span>}
                          <span>⭐ {repo.stargazers_count}</span>
                          <span>🍴 {repo.forks_count}</span>
                          <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '1rem', color: 'rgba(255,255,255,0.6)' }}>
                      No recent repositories found
                    </div>
                  )}
                </div>
              </Card>
            </AnalysisSection>
          </>
        )}

        {/* Feature cards for first-time visit */}
        {!userData && !loading && !error && (
          <AnalysisSection>
            <FeatureCard>
              <FeatureIcon>👤</FeatureIcon>
              <FeatureTitle>Profile Analysis</FeatureTitle>
              <FeatureDescription>
                Get comprehensive insights into any GitHub user's profile
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📈</FeatureIcon>
              <FeatureTitle>Repository Metrics</FeatureTitle>
              <FeatureDescription>
                Analyze profile activity stats
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>💬</FeatureIcon>
              <FeatureTitle>Activity Tracking</FeatureTitle>
              <FeatureDescription>
                Track commits, issues, pull requests, and more to understand development patterns
              </FeatureDescription>
            </FeatureCard>
          </AnalysisSection>
        )}
      </Dashboard>
    </Container>
  );
}

export default App;

