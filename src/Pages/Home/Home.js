import React from 'react';
import Category from './Category/Category';
import { Header } from './Header/Header';
import { Stats } from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Stats></Stats>
            <Category></Category>
        </div>
    );
};

export default Home;