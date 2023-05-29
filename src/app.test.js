import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Account from './Components/Account';
import Header from './Blocs/Header';
import EpisodesCard from './Components/EpisodesCard';
import Logo from './Components/Logo';
import Footer from './Blocs/Footer';

it('Проверка отрисовки компонента <Account/>', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Account/>);
});

it('Проверка отрисовки компонента <Header/>', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Header/>);
});

it('Проверка отрисовки компонента <EpisodesCard/>', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<EpisodesCard/>);
});

it('Проверка отрисовки компонента <Logo/>', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Logo/>);
});

it('Проверка отрисовки компонента <Footer/>', () => {
    const div = document.createElement('div');
    createRoot(div).render(<Footer/>);
});
