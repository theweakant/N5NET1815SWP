import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPageCard from '../../pages/RegisterPage/RegisterPage.jsx';
import axios from '../../config/axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

jest.mock('../../config/axios', () => ({
    create: jest.fn(() => ({
        interceptors: {
            request: {
                use: jest.fn(),
            },
        },
        post: jest.fn((url, data) => {
            return Promise.resolve({ data: { success: true, message: 'Tài Khoản của bạn đã được tạo thành công' } });
        }),
    })),
}));

describe('RegisterPageCard component', () => {
    it('should submit form with valid information and display success message', async () => {
        render(
            <MemoryRouter>
                <RegisterPageCard />
                <ToastContainer />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/Họ/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/Tên/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/Ngày Sinh/i), { target: { value: '01/01/1990' } });
        fireEvent.change(screen.getByLabelText(/Số Điện Thoại/i), { target: { value: '123456789' } });
        fireEvent.change(screen.getByLabelText(/Địa Chỉ/i), { target: { value: '123 Street, City' } });
        fireEvent.change(screen.getByLabelText(/Giới Tính/i), { target: { value: 'MALE' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });

        // Password
        const passwordInput = screen.getByTestId('password-input');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Confirm password
        const confirmPasswordInput = screen.getByTestId('confirm-password-input');
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

        // Submit button
        const submitButton = screen.getByRole('button', { name: /Đăng Ký/i });
        fireEvent.click(submitButton);

        // Wait for success message
        const successMessage = await screen.findByText((content, element) => {
            return element.tagName.toLowerCase() === 'div' && content.includes('Tài Khoản của bạn đã được tạo thành công');
        }, {}, { timeout: 3000 });
        expect(successMessage).toBeInTheDocument();

        // Verify the API call
        expect(axios.post).toHaveBeenCalledWith('register', {
            firstname: 'John',
            lastname: 'Doe',
            dob: '01/01/1990',
            phone: '123456789',
            address: '123 Street, City',
            gender: 'MALE',
            email: 'john.doe@example.com',
            password: 'password123',
            confirm: 'password123',
        });
    });
});
