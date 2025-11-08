'use client'

import { useState } from 'react'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [tone, setTone] = useState('engaging')
  const [duration, setDuration] = useState('30')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const examples = [
    {
      title: '🍳 Cooking Tips',
      topic: '5 kitchen hacks for beginners',
      description: 'Quick cooking tips that save time'
    },
    {
      title: '💪 Fitness Routine',
      topic: '10-minute morning workout',
      description: 'Fast workout for busy people'
    },
    {
      title: '🎨 DIY Crafts',
      topic: 'Transform old t-shirts into tote bags',
      description: 'Sustainable fashion project'
    },
    {
      title: '📱 Tech Tips',
      topic: 'Hidden smartphone features you never knew',
      description: 'Unlock your phone\'s potential'
    }
  ]

  const generateReel = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic for your reel')
      return
    }

    setLoading(true)
    setOutput('')

    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000))

    const reelScript = generateReelScript(topic, platform, tone, duration, additionalNotes)
    setOutput(reelScript)
    setLoading(false)
  }

  const generateReelScript = (topic: string, platform: string, tone: string, duration: string, notes: string) => {
    const hooks = [
      `"Wait... you've been doing this WRONG the whole time!"`,
      `"This ${topic.toLowerCase()} trick changed everything for me..."`,
      `"Stop! Before you ${topic.toLowerCase()}, watch this..."`,
      `"POV: You just discovered the secret to ${topic.toLowerCase()}"`
    ]

    const hook = hooks[Math.floor(Math.random() * hooks.length)]

    return `🎬 REEL SCRIPT: ${topic}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 Platform: ${platform.charAt(0).toUpperCase() + platform.slice(1)}
⏱️  Duration: ${duration} seconds
🎭 Tone: ${tone.charAt(0).toUpperCase() + tone.slice(1)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎣 HOOK (0-3 seconds):
${hook}

Visual: Close-up of your face with an intrigued expression, or a dynamic shot that immediately grabs attention.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 MAIN CONTENT (3-${parseInt(duration) - 5} seconds):

Scene 1:
"Here's what most people don't know about ${topic.toLowerCase()}..."
Visual: Show the problem or common mistake

Scene 2:
"The secret is actually simple:"
Visual: Reveal your solution with clear, dynamic shots

Scene 3:
"Let me break it down step by step:"
Visual: Quick cuts showing the process
- Step 1: [Key action]
- Step 2: [Key action]
- Step 3: [Key action]

Scene 4:
"And here's the result..."
Visual: Show the impressive before/after or final outcome

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CALL-TO-ACTION (Last 3-5 seconds):
"Try this and let me know how it works! Follow for more tips like this 👆"

Visual: Smile at camera, point up to the follow button

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎵 MUSIC SUGGESTIONS:
- Upbeat trending audio (check ${platform} trending sounds)
- Fast-paced instrumental
- Popular remix of current hit song

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 CAPTION IDEAS:

1. "${topic} made easy! 🚀 Which tip surprised you most? Comment below! #${topic.replace(/\s+/g, '')} #tutorial #tips"

2. "You've been asking for ${topic.toLowerCase()} content... here it is! 💯 Save this for later! #howto #lifehack"

3. "This ${topic.toLowerCase()} method is GENIUS 🤯 Tag someone who needs to see this! #viral #trending"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏷️ HASHTAG STRATEGY:
#${topic.replace(/\s+/g, '')} #${platform}reels #viral #trending #fyp #explore #tutorial #howto #tips #lifehack #mustwatch

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 PRO TIPS:

✅ Film in good lighting (natural light is best)
✅ Use fast cuts every 2-3 seconds to maintain attention
✅ Add text overlays for key points
✅ Include trending audio for better reach
✅ Post during peak hours (11am-2pm or 7pm-9pm)
✅ Engage with comments in the first hour
${notes ? `\n🎨 Custom Notes: ${notes}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ready to film? 🎥 Let's make this viral! 🚀`
  }

  const loadExample = (example: any) => {
    setTopic(example.topic)
    setAdditionalNotes('')
  }

  const reset = () => {
    setTopic('')
    setPlatform('instagram')
    setTone('engaging')
    setDuration('30')
    setAdditionalNotes('')
    setOutput('')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🎬 Reel Creator Agent</h1>
        <p>AI-Powered Viral Reel Script Generator</p>
      </div>

      <div className="main-content">
        <div className="card input-section">
          <h2>Create Your Reel</h2>

          <div className="form-group">
            <label htmlFor="topic">Reel Topic *</label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., 5 morning habits that changed my life"
            />
          </div>

          <div className="form-group">
            <label htmlFor="platform">Platform</label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="instagram">Instagram Reels</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube Shorts</option>
              <option value="facebook">Facebook Reels</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tone">Content Tone</label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="engaging">Engaging & Fun</option>
              <option value="educational">Educational</option>
              <option value="inspirational">Inspirational</option>
              <option value="humorous">Humorous</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (seconds)</label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="15">15 seconds</option>
              <option value="30">30 seconds</option>
              <option value="45">45 seconds</option>
              <option value="60">60 seconds</option>
              <option value="90">90 seconds</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes (optional)</label>
            <textarea
              id="notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Any specific requirements or style preferences..."
            />
          </div>

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={generateReel}
              disabled={loading}
            >
              {loading ? 'Generating...' : '✨ Generate Reel Script'}
            </button>
            <button
              className="btn btn-secondary"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="card examples">
          <h2>💡 Quick Examples</h2>
          <div className="example-grid">
            {examples.map((example, index) => (
              <div
                key={index}
                className="example-card"
                onClick={() => loadExample(example)}
              >
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card output-section" style={{ gridColumn: 'span 2' }}>
          <h2>📄 Generated Script</h2>
          <div className="output-content">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Creating your viral reel script...</p>
              </div>
            ) : output ? (
              <pre style={{ fontFamily: 'inherit', margin: 0 }}>{output}</pre>
            ) : (
              <div className="empty">
                Your reel script will appear here once generated
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
