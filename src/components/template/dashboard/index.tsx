import React from 'react'
import { DashboardProps } from '../../../interface/components'
import Header from '../../organisms/header'
import { Continer } from './styles'

const Dashboard = ({ children } : DashboardProps) => {
    return (
        <Continer>
            <Header/>
            <div>
                {children}
            </div>
        </Continer>
    )
}

export default Dashboard
