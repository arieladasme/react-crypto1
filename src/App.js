import React, { useState } from 'react'
import './App.less'
import { Layout } from 'antd'
import { ContentLayout } from './components/layout/Content'
import { HeaderLayout } from './components/layout/Header'
import { SiderLayout } from './components/layout/Sider'

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleSetCollapsed = newCollapsed => {
    setCollapsed(newCollapsed)
  }
  return (
    <Layout>
      <SiderLayout collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderLayout
          collapsed={collapsed}
          handleSetCollapsed={value => handleSetCollapsed(value)}
        />
        <ContentLayout />
      </Layout>
    </Layout>
  )
}

export default App
