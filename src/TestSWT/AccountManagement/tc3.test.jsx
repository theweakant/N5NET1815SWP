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

        // Simulate entering passwords that do not match
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'differentpassword' } });

        // Find the submit button by its role and click it
        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i }); // Adjust text as per your button content
        fireEvent.click(submitButton);

        // Wait for the validation error message to appear
        await waitFor(() => {
            const errorMessage = screen.getByText('Mật Khẩu xác nhận bạn nhập sai');
            expect(errorMessage).toBeInTheDocument();
        });

        // Optionally, you can also check that the API is not called
        expect(axios.post).not.toHaveBeenCalled();
    });
});
