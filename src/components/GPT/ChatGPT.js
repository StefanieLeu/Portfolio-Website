import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GPT from './GPT';
import { OpenAI } from '../Icons';
 

export default function PopupGfg() {
    return (
       
        <div className="fixed right-20 bottom-20
        flex items-center justify-center overflow-hidden">
            <Popup trigger=
                {<button className='flex items-center ml-0 bg-primary2 text-light p-2.5 px-3.0
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-primary2 
                dark:bg-primary2 dark:text-dark hover:dark:bg-light hover:dark:text-light hover:dark:border-primary2
                '>  <OpenAI /></button>}
                position="left bottom"> 
                <GPT />
            </Popup> 
        </div>
   
    )
};


