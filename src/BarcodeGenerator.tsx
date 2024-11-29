import React, { useRef, useEffect, useState } from 'react'
import bwipjs from '@bwip-js/browser'

const BarcodeGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [text, setText] = useState('KPC993948901834931')

  useEffect(() => {
    if (canvasRef.current) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: 'code128', // Barcode type
          text, // Data to encode
          scale: 2, // Scaling factor
          height: 10, // Bar height
          includetext: true, // Include human-readable text
          textxalign: 'center', // Center-align text
        })
      } catch (err) {
        console.error('Error generating barcode:', err)
      }
    }
  }, [text])

  return (
    <div>
      <h2>Code128 Barcode Generator</h2>
      <input
        type="text"
        placeholder="Enter text for barcode"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />
      <canvas ref={canvasRef} />
    </div>
  )
}

export default BarcodeGenerator
