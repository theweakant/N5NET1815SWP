import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPageCard from '../pages/RegisterPage/RegisterPage'; // Adjust the path as necessary
import axios from '../config/axios'; // Import the mocked axios instance

jest.mock('../config/axios', () => ({
    create: jest.fn(),
    interceptors: {
        request: {
            use: jest.fn(),
        },
    },
    post: jest.fn(), // Mock the post method
}));

// Test suite for RegisterPageCard component
describe('RegisterPageCard', () => {
    it('should display error message for mismatched passwords', async () => {
        // Render the RegisterPageCard component within MemoryRouter
        render(
            <MemoryRouter>
                <RegisterPageCard />
            </MemoryRouter>
        );

        // Find the password and confirm password input fields by their data-testid attributes
        const passwordInput = screen.getByTestId('password-input');
        const confirmPasswordInput = screen.getByTestId('confirm-password-input');

        fireEvent.change(passwordInput, { target: { value: 'password1' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password2' } });

        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i }); // Adjust text as per your button content
        fireEvent.click(submitButton);

        // Wait for the validation error message to appear
        await waitFor(() => {
            const errorMessage = screen.getByText(/Mật khẩu xác nhận bạn nhập sai/i);
            expect(errorMessage).toBeInTheDocument();
        });

        // Optionally, you can also check that the API is not called
        expect(axios.post).not.toHaveBeenCalled();
    });
});
