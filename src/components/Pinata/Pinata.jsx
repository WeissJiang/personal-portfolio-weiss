import { useState } from 'react';
import { Segmented, Tabs } from 'antd';
import CloudRain from './CloudRain';
import './Pinata.scss';

export default function Pinata(){
    const [mode, setMode] = useState('top');

    const pinataTabs = [
        {
            label: 'Cloud Rain',
            key: 'cloud-rain',
            children: (
                <CloudRain />
            )
        },
        {
            label: 'Custom Cursor',
            key: 'custom-cursor',
            children: (
                <p>TODO</p>
            )
        }
    ]

    return (
        <div className='pinata-tabs'>
            <Segmented
                defaultValue="top"
                onChange={(value) => setMode(value)}
                options={['top', 'left']}
            />
            <Tabs
                tabPosition={mode}
                items={pinataTabs}
                indicator={{
                    size: (origin) => origin - 20,
                    align: mode,
                }}
            />
        </div>
    )
}