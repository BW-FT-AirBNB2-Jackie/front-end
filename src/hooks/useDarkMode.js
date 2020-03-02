import { useState, useEffect } from 'react';



const useDarkMode = (key, initialValue) => {
const [darkMode, setDarkMode] = useState(key, initialValue)

useEffect(() => {
    if (darkMode === true) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}, [darkMode]);

return [darkMode, setDarkMode];
};

export default useDarkMode