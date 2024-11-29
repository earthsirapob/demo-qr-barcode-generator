import React, { useState } from 'react'

type Tab = {
  label: string
  content: React.ReactNode
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div style={{ padding: '20px' }}>
      {/* Tabs Header */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#007BFF' : '#f0f0f0',
              color: activeTab === index ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
