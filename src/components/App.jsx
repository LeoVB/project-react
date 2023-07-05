import React, { useEffect } from 'react';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';
import { motion, AnimatePresence } from 'framer-motion';
/**
 * Anonymus function that returns the principal component of the application
 * @returns {React.Component} Principal component of the application
 */
const App = () => {

  const [dark, setDark] = React.useState(false)
  const [showSettings, setShowSettings] = React.useState(false);


  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'))
    setDark(config.theme)
  }, [])

  const toggleDark = () => setDark(!dark);

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className={`h-screen p-4 bg-gray-100 dark:bg-slate-800 transition dark:text-white`}>
        <TaskList showSettings={showSettings} setShowSettings={setShowSettings} />
        {/* {showSettings && (
          <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: '0' }}
            exit={{ y: '100vh' }}
          >
            <Settings toggleDark={toggleDark} />
          </motion.div>
        )} */}

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ y: '100vh' }}
              animate={{y: '0'}}
              exit={{ y: '100vh' }}
            >
              <Settings toggleDark={toggleDark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    // <Settings />
    // <Counter />
  );
};

export default App;