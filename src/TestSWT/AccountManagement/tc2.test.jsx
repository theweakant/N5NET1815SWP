import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPageCard from '../../pages/RegisterPage/RegisterPage.jsx';
import axios from '../../config/axios';

jest.mock('../../config/axios.js', () => ({
    create: jest.fn(),
    post: jest.fn(),
    interceptors: {
        request: jest.fn()
    }
}));


describe('RegisterPageCard', () => {
    it('should display error message for invalid email format', async () => {

        render(
            <MemoryRouter>
                <RegisterPageCard />
            </MemoryRouter>
        );

        //email input 
        const emailInput = screen.getByLabelText(/Email/i);

        // enter email
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        //submit button
        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i });
        fireEvent.click(submitButton);


        await waitFor(() => {
            const errorMessage = screen.getByText(/Hãy Nhập đúng Email/i);
            expect(errorMessage).toBeInTheDocument();
        });


        expect(axios.post).not.toHaveBeenCalled();
    });
});
