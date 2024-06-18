import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPageCard from '../pages/RegisterPage/RegisterPage';

describe('RegisterPageCard', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <RegisterPageCard />
            </MemoryRouter>



            //hello
        );
    });
});