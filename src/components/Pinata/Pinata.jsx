import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import CloudRain from './CloudRain';
import './Pinata.scss';

export default function Pinata(){
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(() => e.target.value);
    };

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
            <Space>
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                <Radio.Button value="top">top</Radio.Button>
                <Radio.Button value="bottom">bottom</Radio.Button>
                <Radio.Button value="left">left</Radio.Button>
                <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space>
            <Tabs
                tabPosition={tabPosition}
                items={pinataTabs}
            />
        </div>
    )
}