import React, { useRef, useState, useEffect } from 'react'
import bwipjs from '@bwip-js/browser'

const CouponCodeTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'qr' | 'barcode'>('qr')
  const [selectedCoupon, setSelectedCoupon] = useState('')
  const [search, setSearch] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const couponList = [
    'KPC993948901834931',
    'OCG-12329814938204',
    'OCG-12WER29PW820',
    'OCG_W231ER29PW08',
    '903849584234982443',
    '93AN342GSDFK23908',
    'GWL0923834',
    '43453872423',
  ]

  useEffect(() => {
    if (canvasRef.current && selectedCoupon) {
      try {
        if (activeSubTab === 'qr') {
          bwipjs.toCanvas(canvasRef.current, {
            bcid: 'qrcode',
            text: selectedCoupon,
            scale: 4,
            includetext: false,
          })
        } else if (activeSubTab === 'barcode') {
          bwipjs.toCanvas(canvasRef.current, {
            bcid: 'code128',
            text: selectedCoupon,
            scale: 3,
            height: 10,
            includetext: true,
            textxalign: 'center',
          })
        }
      } catch (err) {
        console.error('Error generating code:', err)
      }
    }
  }, [selectedCoupon, activeSubTab])

  return (
    <div>
      <h2>Coupon Code Generator</h2>
      <select
        value={selectedCoupon}
        onChange={(e) => setSelectedCoupon(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      >
        <option value="">Select a coupon code</option>
        {couponList
          .filter((coupon) =>
            coupon.toLowerCase().includes(search.toLowerCase())
          )
          .map((coupon) => (
            <option key={coupon} value={coupon}>
              {coupon}
            </option>
          ))}
      </select>

      {/* Sub Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveSubTab('qr')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeSubTab === 'qr' ? '#007BFF' : '#f0f0f0',
            color: activeSubTab === 'qr' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          QR Code
        </button>
        <button
          onClick={() => setActiveSubTab('barcode')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeSubTab === 'barcode' ? '#007BFF' : '#f0f0f0',
            color: activeSubTab === 'barcode' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          Barcode
        </button>
      </div>

      {/* Sub Tab Content */}
      {selectedCoupon &&
      (activeSubTab === 'qr' || activeSubTab === 'barcode') ? (
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ) : (
        <div>Please select a coupon code to generate</div>
      )}
    </div>
  )
}

export default CouponCodeTab
