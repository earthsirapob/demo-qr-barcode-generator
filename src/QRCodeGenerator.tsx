import React, { useRef, useEffect, useState } from 'react'
import bwipjs from '@bwip-js/browser'

const QRCodeGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [text, setText] = useState('https://vercel.com')

  useEffect(() => {
    if (canvasRef.current) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: 'qrcode', // QR Code type
          text, // Data to encode
          scale: 6, // Scaling factor
          includetext: false, // No text under QR codes
        })
      } catch (err) {
        console.error('Error generating QR code:', err)
      }
    }
  }, [text])

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />
      <canvas ref={canvasRef} />
    </div>
  )
}

export default QRCodeGenerator
