import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

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

const options = [
    {
        label: 'The color red',
        value: 'red',
    },

    {
        label: 'The color green',
        value: 'green',
    },

    {
        label: 'The color blue',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className='app'>
            <div className='ui container'>
                <Translate />
            </div>
        </div>
    );
};

export default App;
