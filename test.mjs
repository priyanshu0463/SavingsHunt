// test-api.js
import { xai } from "@ai-sdk/xai"
import { groq } from "@ai-sdk/groq"
import { streamText } from "ai"
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env' })

async function testAPIs() {
  console.log("🔑 Testing API Keys...\n")
  
  // Check if environment variables are loaded
  console.log("Environment check:")
  console.log("XAI_API_KEY:", process.env.XAI_API_KEY ? "✅ Set" : "❌ Missing")
  console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY ? "✅ Set" : "❌ Missing")
  console.log("")

  // Test XAI (Grok)
  console.log("Testing XAI (Grok)...")
  try {
    const result = await streamText({
      model: xai("grok-beta", {
        apiKey: process.env.XAI_API_KEY,
      }),
      prompt: "Hello, test message",
      maxTokens: 50,
    })
    
    console.log("✅ XAI API Key working!")
    
    // Read the stream to verify it works
    const response = await result.text
    console.log("Sample response:", response.substring(0, 100) + "...")
    
  } catch (error) {
    console.log("❌ XAI API failed:", error.message)
  }
  
  console.log("")

  // Test Groq
  console.log("Testing Groq...")
  try {
    const result = await streamText({
      model: groq("llama-3.1-8b-instant", {
        apiKey: process.env.GROQ_API_KEY,
      }),
      prompt: "Hello, test message",
      maxTokens: 50,
    })
    
    console.log("✅ Groq API Key working!")
    
    // Read the stream to verify it works
    const response = await result.text
    console.log("Sample response:", response.substring(0, 100) + "...")
    
  } catch (error) {
    console.log("❌ Groq API failed:", error.message)
  }

  console.log("\n🎉 API testing complete!")
}

testAPIs().catch(console.error)