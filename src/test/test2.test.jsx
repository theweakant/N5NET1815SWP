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
    it('should display error message for invalid email format', async () => {
        // Render the RegisterPageCard component within MemoryRouter
        render(
            <MemoryRouter>
                <RegisterPageCard />
            </MemoryRouter>
        );

        // Find the email input field
        const emailInput = screen.getByLabelText(/Email/i);

        // Simulate entering an invalid email format
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        // Find the submit button by its role and click it
        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i }); // Adjust text as per your button content
        fireEvent.click(submitButton);

        // Wait for the validation error message to appear
        await waitFor(() => {
            const errorMessage = screen.getByText(/Hãy Nhập đúng Email/i); // Adjust text as per your error message
            expect(errorMessage).toBeInTheDocument();
        });

        // Optionally, you can also check that the API is not called
        expect(axios.post).not.toHaveBeenCalled();
    });
});
