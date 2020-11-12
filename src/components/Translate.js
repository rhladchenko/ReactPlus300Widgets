import React, { useState } from 'react';
import Convert from './Convert';
import DropDown from './DropDown';


const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    {
        label: 'Russian',
        value: 'ru',
    }
];

const Translate = (props) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className='translate'>
            <div className='ui form'>
                <div className='field'>
                    <label htmlFor="">Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
            </div>
            <DropDown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
                label='Select a language'
            />
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
