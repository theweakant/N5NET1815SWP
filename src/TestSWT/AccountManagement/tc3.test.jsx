import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPageCard from '../../pages/RegisterPage/RegisterPage.jsx';
import axios from '../../config/axios'; // Import axios

jest.mock('../../config/axios', () => ({
    create: jest.fn(),
    interceptors: {
        request: {
            use: jest.fn(),
        },
    },
    post: jest.fn(),
}));


describe('RegisterPageCard', () => {
    it('should display error message for mismatched passwords', async () => {

        render(
            <MemoryRouter>
                <RegisterPageCard />
            </MemoryRouter>
        );


        const passwordInput = screen.getByTestId('password-input');
        const confirmPasswordInput = screen.getByTestId('confirm-password-input');


        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'differentpassword' } });


        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i });
        fireEvent.click(submitButton);


        await waitFor(() => {
            const errorMessage = screen.getByText('Mật Khẩu xác nhận bạn nhập sai');
            expect(errorMessage).toBeInTheDocument();
        });


        expect(axios.post).not.toHaveBeenCalled();
    });
});
