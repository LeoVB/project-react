import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const defaultConfig = {
    theme: 'light',
    language: 'en'
};
/**
 * Component to show the settings of the app
 * @returns {React.Component} Settings component
 */
export default function Settings({toggleDark}) {

    /**
     * Uses a custom hook to get the config from local storage
     */
    const [config, setConfig] = useLocalStorage('config', defaultConfig)

    const toggleMode = (e) => {
        e.preventDefault();
        setConfig((oldConfig)=>({
            ...oldConfig,
            theme: oldConfig.theme === 'light' ? 'dark' : 'light'
        }));
        toggleDark();
    }

    return (
        <div className='text-center'>
        <hr className='my-4'/>
            <h1 className='text-3xl text-cyan-800 font-semibold mb-4 dark:text-cyan-400'>App Settings</h1>
            <p className='text-sm mb-2'>Current theme: <span className='italic'>{config.theme}</span></p>
            <button onClick={toggleMode} type='button' className='btn'>Toggle DarkMode</button>
        </div>
    )
}
