import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

const { Header } = Layout

export const HeaderLayout = ({ collapsed, handleSetCollapsed }) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => handleSetCollapsed(!collapsed),
      })}
    </Header>
  )
}
