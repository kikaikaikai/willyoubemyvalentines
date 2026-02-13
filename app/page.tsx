'use client'

import { useState, useEffect } from 'react'

const MUSIC_PATH = 'love.mp3' // REPLACE THIS with your music file path

const messages = [
  "its my boyfriend mo nakahawig ni Jungkook",
  "tbh i'm shaking on how to ask you",
  "to be your valentines , na may efforts hehe",
  "so ida-daan ko sa pagiging it ulit, pero simple lang keke",
  "maybe my way of asking you to be my valentines",
  "not as good as you expect",
  "before than anyone, way of asking",
  "probably someone ask you and somebody will",
  "pero i hope me you choose , to be your valentines",
  "maybe i'm broke and broke ur heart , pero",
  "pero this chance na you given saken",
  "10000% na hinding hindi mo pagsisihan",
  "not just a word,pero with action sabi ng kahawig ni Jungkook",
  "i buy you things, i buy everything except na expensive one",
  "but when i can, yk i will give anything sayo mahal ko",
  "not just giving things but, i will love you more than ur love towards saken"
]

const noMessages = [
  "pleasee mahal",
  "nagmamakaawa ako say yes mahalko",
  "alam ko address nyo",
  "Kahit ano gagawin ko",
  "please choose me mahal ko",
  "PLEASE PLEASE PLEASE PLEASE"
]

export default function Page() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [answered, setAnswered] = useState(null)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noMessageIndex, setNoMessageIndex] = useState(0)

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1)
      }, 4000)
      return () => clearTimeout(timer)
    } else {
      setShowButtons(true)
    }
  }, [currentMessageIndex])

  useEffect(() => {
    const audio = new Audio(MUSIC_PATH)
    audio.autoplay = true
    audio.loop = true
    audio.volume = 0.5
    audio.play().catch(err => console.log('Autoplay blocked:', err))
    
    return () => {
      audio.pause()
    }
  }, [])

  const handleYes = () => {
    setAnswered('yes')
  }

  const handleNo = () => {
    setNoMessageIndex((prev) => (prev + 1) % noMessages.length)
    const randomX = Math.random() * 200 - 100
    const randomY = Math.random() * 200 - 100
    setNoButtonPos({ x: randomX, y: randomY })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100 p-4" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="w-full max-w-2xl">
        {answered === 'yes' ? (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8">
              <img
                src="2ndpic.jpg"
                alt="Happy bears hugging"
                className="w-80 h-80 object-contain mx-auto"
              />
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-pink-600 animate-bounce">
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.1s' }}>
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.2s' }}>
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.3s' }}>
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.4s' }}>
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.5s' }}>
                I LOVE YOU
              </div>
              <div className="text-4xl font-bold text-pink-600 animate-bounce" style={{ animationDelay: '0.6s' }}>
                I LOVE YOU
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="min-h-24 flex items-center justify-center">
              {currentMessageIndex > 0 && currentMessageIndex <= messages.length && (
                <p className="text-2xl text-center text-gray-800 font-bold">
                  {messages[currentMessageIndex - 1]}
                </p>
              )}
            </div>

            {showButtons && (
              <div className="flex flex-col items-center gap-8">
                <div className="mb-4">
                  <img
                    src="1stpic.png"
                    alt="Bear asking"
                    className="w-64 h-64 object-contain mx-auto"
                  />
                </div>

                <div className="text-center mb-8">
                  <p className="text-3xl font-bold text-pink-600">Will you be my forever valentines? 💗</p>
                </div>

                <div className="flex gap-8 justify-center items-center relative">
                  <button
                    onClick={handleYes}
                    className="px-12 py-4 bg-pink-500 text-white text-2xl font-bold rounded-lg hover:bg-pink-600 transition-all duration-200 cursor-pointer"
                  >
                    YES PO
                  </button>

                  <div style={{
                    position: 'relative',
                    width: '120px',
                    height: '56px'
                  }}>
                    <button
                      onClick={handleNo}
                      style={{
                        transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                        position: 'absolute',
                        left: '0',
                        top: '0'
                      }}
                      className="px-8 py-4 bg-gray-400 text-white text-lg font-bold rounded-lg hover:bg-gray-500 transition-all duration-200 cursor-pointer whitespace-nowrap"
                    >
                      hell nawh
                    </button>
                  </div>
                </div>

                {noMessageIndex > 0 && (
                  <div className="text-center mt-8 text-xl text-gray-700 font-bold">
                    {noMessages[noMessageIndex - 1]}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
