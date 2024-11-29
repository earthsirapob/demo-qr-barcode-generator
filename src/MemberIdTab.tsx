import React, { useRef, useState, useEffect } from 'react'
import bwipjs from '@bwip-js/browser'

const MemberIdTab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [memberId, setMemberId] = useState('')

  useEffect(() => {
    if (canvasRef.current && memberId) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: 'qrcode', // QR Code type
          text: memberId.padStart(9, '0'), // Pad member ID to 9 digits
          scale: 6,
          includetext: false,
        })
      } catch (err) {
        console.error('Error generating QR code:', err)
      }
    }
  }, [memberId])

  return (
    <div>
      <h2>Member ID QR Code</h2>
      <input
        type="text"
        placeholder="Enter Member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px', // Limiting max width
          marginBottom: '20px',
          boxSizing: 'border-box', // Ensures padding is included in width calculation
          overflowX: 'auto', // Prevents overflow if text exceeds the width
          textOverflow: 'ellipsis', // Displays ellipsis for long text
        }}
      />
      {memberId && (
        <>
          <h2>Member ID: {memberId.padStart(9, '0')}</h2>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </>
      )}
    </div>
  )
}

export default MemberIdTab
