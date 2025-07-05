import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  User, 
  GitBranch, 
  Calendar, 
  TrendUp, 
  ActivityIcon,
  Star,
  Clock,
  ChartBarHorizontal,
  MagnifyingGlass,
  GithubLogo,
  Heart,
  Users,
  BookOpen,
  Warning,
  ThumbsUp,
  Lightbulb,
  LineChart,
  ChatCircle,
  Brain
} from '@phosphor-icons/react';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.header`
  padding: 3rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 700;
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
`;

const SearchSection = styled.div`
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SearchIcon = styled(MagnifyingGlass)`
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.6);
  z-index: 1;
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
  max-width: 1400px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const UserProfile = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MetricCard = styled(Card)`
  text-align: center;
  padding: 2rem 1.5rem;
`;

const MetricValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MetricLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const MetricIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #4facfe;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #4facfe;
    border-radius: 50%;
    animation: spin 1s linear infinite;
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

const RepositoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const RepoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const RepoName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #4facfe;
  font-size: 1.1rem;
`;

const RepoDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const RepoStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const RepoStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 3rem 0 1.5rem 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 3rem 2rem;
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #4facfe;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

// Custom Logo Component
const ReflectocatLogo = styled.svg`
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 0 10px rgba(79, 172, 254, 0.3));
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

// ----------- ANALYSIS HELPERS ------------

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

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);

  const hostility = words.filter(w => hostileWords.includes(w)).length / wordCount;
  const formality = words.filter(w => formalWords.includes(w)).length / wordCount;
  const sentiment =
    (words.filter(w => positiveWords.includes(w)).length -
      words.filter(w => negativeWords.includes(w)).length) / wordCount;
  const toxicity = words.filter(w => toxicWords.includes(w)).length / wordCount;
  const constructiveness = words.filter(w => constructiveWords.includes(w)).length / wordCount;

  // Detect patterns
  const patterns = [];
  if (sentences.length > 0) {
    if (sentences.filter(s => s.includes("?")).length / sentences.length > 0.3) {
      patterns.push("Frequently asks questions - shows engagement");
    }
    if (constructiveness > 0.1) {
      patterns.push("Often provides constructive feedback");
    }
    if (hostility > 0.1) {
      patterns.push("Shows signs of confrontational communication");
    }
    if (formality > 0.15) {
      patterns.push("Maintains professional tone");
    }
  }

  // Extract topic keywords
  const stopWords = new Set(["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for"]);
  const keywords = words
    .filter(w => w.length > 3 && !stopWords.has(w))
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

  return {
    hostility,
    formality,
    sentiment,
    toxicity,
    constructiveness,
    keywords,
    patterns
  };
}

function analyzeBio(bio) {
  if (!bio) return null;
  return analyzeText(bio);
}

function generateCommunicationMetrics(userData, reposData) {
  // Generate mock communication metrics based on user data
  const repoCount = userData.public_repos || 0;
  const followerCount = userData.followers || 0;
  
  // Mock metrics with some logic based on actual data
  const toxicity = Math.max(0, Math.min(0.15, (repoCount > 50 ? 0.02 : 0.05) + Math.random() * 0.03));
  const constructiveness = Math.min(1, (followerCount > 100 ? 0.8 : 0.6) + Math.random() * 0.2);
  const overallTone = Math.random() * 0.4 - 0.1; // -0.1 to +0.3
  
  return {
    toxicity,
    constructiveness,
    overallTone
  };
}

function generateBehavioralPatterns(userData, reposData, eventsData) {
  const languages = reposData.map(repo => repo.language).filter(Boolean);
  const languageCounts = languages.reduce((acc, lang) => {
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});
  
  const topLanguages = Object.entries(languageCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([lang]) => lang);

  const patterns = [];
  if (userData.public_repos > 50) {
    patterns.push("Highly productive contributor");
  }
  if (userData.followers > userData.following) {
    patterns.push("Well-respected community member");
  }
  if (topLanguages.length > 2) {
    patterns.push("Polyglot programmer");
  }
  
  const topics = topLanguages.concat(['open-source', 'collaboration', 'development']);
  
  return {
    communicationStyle: patterns,
    topTopics: topics,
    insights: [
      "Active in open source community",
      "Collaborative development approach",
      "Focus on code quality and best practices"
    ]
  };
}

function processRecentActivity(eventsData) {
  return eventsData.slice(0, 10).map(event => {
    let content = "";
    let type = event.type;
    
    switch (event.type) {
      case 'PushEvent':
        content = `Pushed ${event.payload.commits?.length || 0} commits`;
        break;
      case 'CreateEvent':
        content = `Created ${event.payload.ref_type}`;
        break;
      case 'IssuesEvent':
        content = `${event.payload.action} issue`;
        break;
      case 'PullRequestEvent':
        content = `${event.payload.action} pull request`;
        break;
      default:
        content = type.replace('Event', '');
    }
    
    return {
      type,
      content,
      repo: event.repo.name,
      createdAt: event.created_at,
      url: `https://github.com/${event.repo.name}`
    };
  });
}

// ----------- STYLED COMPONENTS FOR NEW FEATURES ------------

const AnalysisSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const MetricRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  color: ${props => {
    if (props.type === 'toxicity' && parseFloat(props.children) > 10) return '#ff6b7a';
    if (props.type === 'constructiveness' && parseFloat(props.children) > 70) return '#4facfe';
    if (props.type === 'tone' && parseFloat(props.children) > 0) return '#4facfe';
    return 'white';
  }};
`;

const PatternsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const PatternItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
  
  &:before {
    content: '•';
    color: #4facfe;
    font-weight: bold;
  }
`;

const TopicTag = styled.span`
  background: rgba(79, 172, 254, 0.2);
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: #4facfe;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 0.2rem;
  display: inline-block;
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
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
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

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysisData, setAnalysisData] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;
    
    setLoading(true);
    setError('');
    setUserData(null);
    setRepositories([]);
    setAnalysisData(null);

    try {
      // Fetch real user data from GitHub API
      const userResponse = await fetch(`https://api.github.com/users/${username.trim()}`);
      
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      
      const userData = await userResponse.json();
      
      // Fetch user's repositories
      const reposResponse = await fetch(`https://api.github.com/users/${username.trim()}/repos?sort=updated&per_page=20`);
      const reposData = await reposResponse.json();
      
      // Fetch recent events/activity
      const eventsResponse = await fetch(`https://api.github.com/users/${username.trim()}/events?per_page=30`);
      const eventsData = await eventsResponse.json();
      
      // Generate analysis data
      const analysis = {
        bioAnalysis: analyzeBio(userData.bio),
        communicationMetrics: generateCommunicationMetrics(userData, reposData),
        behavioralPatterns: generateBehavioralPatterns(userData, reposData, eventsData),
        recentActivity: processRecentActivity(eventsData)
      };
      
      setUserData(userData);
      setRepositories(reposData);
      setAnalysisData(analysis);
      setLoading(false);
      
    } catch (err) {
      setError(err.message === 'User not found' ? 'User not found' : 'API error occurred');
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Python: '#3572A5',
      Java: '#b07219',
      Ruby: '#701516',
      Go: '#00ADD8',
      TypeScript: '#2b7489',
      PHP: '#4F5D95'
    };
    return colors[language] || '#ffffff';
  };

  return (
    <Container>
      <Header>
        <Title>
          <LogoContainer>
            <img 
              src="/image-1751584833621.png" 
              alt="ReflectoCat Logo" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                filter: 'drop-shadow(0 0 20px rgba(79, 172, 254, 0.5))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{
              display: 'none',
              fontSize: '160px',
              filter: 'drop-shadow(0 0 20px rgba(79, 172, 254, 0.5))'
            }}>
              🐱
            </div>
          </LogoContainer>
          ReflectoCat
        </Title>
        <Subtitle>
          A playful mirror for your GitHub voice.
        </Subtitle>
      </Header>

      <SearchSection>
        <SearchContainer>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </SearchContainer>
        <SearchButton onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Analyze Profile'}
          <ActivityIcon size={20} />
        </SearchButton>
      </SearchSection>

      <Dashboard>
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!userData && !loading && !error && (
          <MetricsGrid>
            <FeatureCard>
              <FeatureIcon>
                <User size={64} />
              </FeatureIcon>
              <FeatureTitle>Profile Analysis</FeatureTitle>
              <FeatureDescription>
                Get comprehensive insights into any GitHub user's profile, including bio analysis, stats, and activity patterns.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <ChartBarHorizontal size={64} />
              </FeatureIcon>
              <FeatureTitle>Repository Metrics</FeatureTitle>
              <FeatureDescription>
                Analyze repository statistics, languages used, star counts, and contribution patterns across projects.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <TrendUp size={64} />
              </FeatureIcon>
              <FeatureTitle>Activity Tracking</FeatureTitle>
              <FeatureDescription>
                Track commits, issues, pull requests, and other activities to understand development patterns.
              </FeatureDescription>
            </FeatureCard>
          </MetricsGrid>
        )}

        {userData && (
          <>
            <Card>
              <UserProfile>
                <Avatar src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                <UserInfo>
                  <UserName>{userData.name || userData.login}</UserName>
                  <UserBio>{userData.bio || 'No bio available'}</UserBio>
                  <UserStats>
                    <Stat>
                      <Users size={16} />
                      {userData.followers} followers
                    </Stat>
                    <Stat>
                      <Heart size={16} />
                      {userData.following} following
                    </Stat>
                    <Stat>
                      <BookOpen size={16} />
                      {userData.public_repos} repos
                    </Stat>
                    <Stat>
                      <Calendar size={16} />
                      Joined {formatDate(userData.created_at)}
                    </Stat>
                  </UserStats>
                </UserInfo>
              </UserProfile>
            </Card>

            {/* Profile Bio Analysis */}
            {analysisData?.bioAnalysis && userData.bio && (
              <Card>
                <SectionTitle>
                  <Lightbulb size={24} />
                  Profile Bio Analysis
                </SectionTitle>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem', fontStyle: 'italic' }}>
                  "{userData.bio}"
                </div>
                <MetricRow>
                  <MetricBox>
                    <MetricTitle>Toxicity Risk</MetricTitle>
                    <MetricNumber type="toxicity">{(analysisData.bioAnalysis.toxicity * 100).toFixed(1)}%</MetricNumber>
                  </MetricBox>
                  <MetricBox>
                    <MetricTitle>Constructiveness</MetricTitle>
                    <MetricNumber type="constructiveness">{(analysisData.bioAnalysis.constructiveness * 100).toFixed(1)}%</MetricNumber>
                  </MetricBox>
                  <MetricBox>
                    <MetricTitle>Overall Tone</MetricTitle>
                    <MetricNumber type="tone">
                      {analysisData.bioAnalysis.sentiment > 0 ? '+' : ''}{(analysisData.bioAnalysis.sentiment * 100).toFixed(1)}%
                    </MetricNumber>
                  </MetricBox>
                </MetricRow>
                {Object.keys(analysisData.bioAnalysis.keywords).length > 0 && (
                  <div>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Key Terms:</h4>
                    <div>
                      {Object.entries(analysisData.bioAnalysis.keywords)
                        .sort(([,a], [,b]) => b - a)
                        .slice(0, 6)
                        .map(([word, count]) => (
                          <TopicTag key={word}>{word} ({count})</TopicTag>
                        ))}
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Communication Metrics */}
            {analysisData?.communicationMetrics && (
              <Card>
                <SectionTitle>
                  <ChatCircle size={24} />
                  Communication Metrics
                </SectionTitle>
                <MetricRow>
                  <MetricBox>
                    <MetricTitle>Toxicity Risk</MetricTitle>
                    <MetricNumber type="toxicity">{(analysisData.communicationMetrics.toxicity * 100).toFixed(1)}%</MetricNumber>
                    {analysisData.communicationMetrics.toxicity > 0.1 && (
                      <Warning size={16} style={{ color: '#ff6b7a', marginTop: '0.5rem' }} />
                    )}
                  </MetricBox>
                  <MetricBox>
                    <MetricTitle>Constructiveness</MetricTitle>
                    <MetricNumber type="constructiveness">{(analysisData.communicationMetrics.constructiveness * 100).toFixed(1)}%</MetricNumber>
                    {analysisData.communicationMetrics.constructiveness > 0.7 && (
                      <ThumbsUp size={16} style={{ color: '#4facfe', marginTop: '0.5rem' }} />
                    )}
                  </MetricBox>
                  <MetricBox>
                    <MetricTitle>Overall Tone</MetricTitle>
                    <MetricNumber type="tone">
                      {analysisData.communicationMetrics.overallTone > 0 ? '+' : ''}{(analysisData.communicationMetrics.overallTone * 100).toFixed(1)}%
                    </MetricNumber>
                  </MetricBox>
                </MetricRow>
              </Card>
            )}

            {/* Behavioral Patterns */}
            {analysisData?.behavioralPatterns && (
              <Card>
                <SectionTitle>
                  <Brain size={24} />
                  Behavioral Patterns
                </SectionTitle>
                <AnalysisSection>
                  <div>
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>Communication Style</h3>
                    <PatternsList>
                      {analysisData.behavioralPatterns.communicationStyle.map((pattern, index) => (
                        <PatternItem key={index}>{pattern}</PatternItem>
                      ))}
                    </PatternsList>
                  </div>
                  <div>
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>Most Discussed Topics</h3>
                    <div>
                      {analysisData.behavioralPatterns.topTopics.map((topic, index) => (
                        <TopicTag key={index}>{topic}</TopicTag>
                      ))}
                    </div>
                  </div>
                </AnalysisSection>
                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                  <h3 style={{ color: 'white', marginBottom: '1rem' }}>Behavioral Insights</h3>
                  <PatternsList>
                    {analysisData.behavioralPatterns.insights.map((insight, index) => (
                      <PatternItem key={index}>{insight}</PatternItem>
                    ))}
                  </PatternsList>
                </div>
              </Card>
            )}

            {/* Recent Activity */}
            {analysisData?.recentActivity && analysisData.recentActivity.length > 0 && (
              <Card>
                <SectionTitle>
                  <ActivityIcon size={24} />
                  Recent Activity
                </SectionTitle>
                <ActivityList>
                  {analysisData.recentActivity.map((activity, index) => (
                    <ActivityItem key={index}>
                      <ActivityContent>{activity.content}</ActivityContent>
                      <ActivityMeta>
                        <span>{activity.repo}</span>
                        <span>{formatDate(activity.createdAt)}</span>
                      </ActivityMeta>
                    </ActivityItem>
                  ))}
                </ActivityList>
              </Card>
            )}

            <MetricsGrid>
              <MetricCard>
                <MetricIcon>
                  <Star size={32} />
                </MetricIcon>
                <MetricLabel>Total Stars</MetricLabel>
                <MetricValue>
                  {repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0).toLocaleString()}
                </MetricValue>
              </MetricCard>

              <MetricCard>
                <MetricIcon>
                  <GitBranch size={32} />
                </MetricIcon>
                <MetricLabel>Total Forks</MetricLabel>
                <MetricValue>
                  {repositories.reduce((sum, repo) => sum + repo.forks_count, 0).toLocaleString()}
                </MetricValue>
              </MetricCard>

              <MetricCard>
                <MetricIcon>
                  <BookOpen size={32} />
                </MetricIcon>
                <MetricLabel>Public Repositories</MetricLabel>
                <MetricValue>{userData.public_repos}</MetricValue>
              </MetricCard>

              <MetricCard>
                <MetricIcon>
                  <Users size={32} />
                </MetricIcon>
                <MetricLabel>Followers</MetricLabel>
                <MetricValue>{userData.followers.toLocaleString()}</MetricValue>
              </MetricCard>
            </MetricsGrid>

            <Card>
              <SectionTitle>
                <BookOpen size={24} />
                Popular Repositories
              </SectionTitle>
              <RepositoryGrid>
                {repositories.map((repo, index) => (
                  <RepoCard key={index}>
                    <RepoName>{repo.name}</RepoName>
                    <RepoDescription>
                      {repo.description || 'No description available'}
                    </RepoDescription>
                    <RepoStats>
                      <RepoStat>
                        <Star size={14} />
                        {repo.stargazers_count.toLocaleString()}
                      </RepoStat>
                      <RepoStat>
                        <GitBranch size={14} />
                        {repo.forks_count.toLocaleString()}
                      </RepoStat>
                      {repo.language && (
                        <RepoStat>
                          <div 
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              backgroundColor: getLanguageColor(repo.language)
                            }}
                          />
                          {repo.language}
                        </RepoStat>
                      )}
                      <RepoStat>
                        <Clock size={14} />
                        {formatDate(repo.updated_at)}
                      </RepoStat>
                    </RepoStats>
                  </RepoCard>
                ))}
              </RepositoryGrid>
            </Card>
          </>
        )}
      </Dashboard>
    </Container>
  );
}

export default App;
