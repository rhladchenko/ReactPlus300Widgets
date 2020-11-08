import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';

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
    return (
        <div className='app'>
            <div className='ui container'>
                <DropDown options={options} />
            </div>
        </div>
    );
};

export default App;
