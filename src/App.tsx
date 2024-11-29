import React, { useState } from 'react'
import MemberIdTab from './MemberIdTab'
import CouponCodeTab from './CouponCodeTab'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'memberId' | 'couponCode'>(
    'memberId'
  )

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Member ID / Coupon Code Generator</h1>
      {/* Main Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={() => setActiveTab('memberId')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeTab === 'memberId' ? '#007BFF' : '#f0f0f0',
            color: activeTab === 'memberId' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          Member ID
        </button>
        <button
          onClick={() => setActiveTab('couponCode')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'couponCode' ? '#007BFF' : '#f0f0f0',
            color: activeTab === 'couponCode' ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          Coupon Code
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'memberId' && <MemberIdTab />}
      {activeTab === 'couponCode' && <CouponCodeTab />}
    </div>
  )
}

export default App
