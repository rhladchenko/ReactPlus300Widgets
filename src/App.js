import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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
                <Header />
                <Route path='/'>
                    <Accordion items={items} />
                </Route>
                <Route path='/list'>
                    <Search />
                </Route>
                <Route path='/dropdown'>
                    <Dropdown 
                    label='Select a color' 
                    options={options}
                    selected={selected} 
                    onSelectedChange={setSelected} />
                </Route>
                <Route path='/translete'>
                    <Translate />
                </Route>
            </div>
        </div>
    );
};

export default App;
