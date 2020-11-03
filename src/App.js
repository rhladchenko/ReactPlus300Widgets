import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'Watch is React?',
        content: 'React is a front end javascript framwork.',
    },
    {
        title: 'Why use React?',
        content: 'React is favorite JS library among engineers.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.',
    },
];

const App = () => {
    return (
        <div className='app'>
            <Search />
        </div>
    );
};

export default App;
