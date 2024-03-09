import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Bot from './Bot';
import { ChatbotRobot2 } from '../Icons';
 
export default function PopupGfg() {
    return ( 
        <div className="fixed right-8 bottom-8
        flex items-center justify-center overflow-hidden ">

            <Popup trigger=
                {<button className='flex items-center justify-center ml-0 bg-primaryDark text-light p-2.5 px-3.0
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-primaryDark 
                dark:bg-primaryDark dark:text-dark hover:dark:bg-light hover:dark:text-light hover:dark:border-primaryDark
                '> <ChatbotRobot2></ChatbotRobot2></button>}
                position="left bottom">
                <Bot></Bot>
            </Popup> 
        </div>   
    )
};


