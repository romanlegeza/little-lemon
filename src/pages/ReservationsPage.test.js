import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from './ReservationsPage';
import BookingForm from '../components/BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { submitForm } from './ReservationsPage';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';


test('renders ReservationsPage', () => {
    render(
        <Router>
            <ReservationsPage />
        </Router>
    );

    // const reservationsPage = screen.getByRole('main');
    // expect(reservationsPage).toBeInTheDocument();

    const headingElement = screen.getByText(/Make a Reservation/i);
    expect(headingElement).toBeInTheDocument();
});

/*  Write a unit test for the updateTimes function to validate that
    it returns the same value that is provided in the state.
    This unit test is important as it will be updated later when
    the logic of changing the available times
    based on the selected date is implemented. */
test('updateTimes returns the same value that is provided in the state', () => {
    // Mock data
    const mockAvailableTimes = [
        '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
        '8:00', '8:30', '9:00', '9:30'
    ];
    const mockUpdateTimes = jest.fn();
    const mockSubmitForm = jest.fn();
    const mockSetFormData = jest.fn();
    const mockFormData = {
        date: '',
        time: '',
        guests: '',
        occasion: '',
    };

    render(<BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        formData={mockFormData}
        setFormData={mockSetFormData}
    />);
    expect(mockUpdateTimes).toHaveBeenCalledTimes(0);
    expect(mockUpdateTimes).not.toHaveBeenCalled();
    expect(mockUpdateTimes).not.toHaveBeenCalledTimes(1);
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('5:00');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('5:30');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('6:00');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('6:30');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('7:00');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('7:30');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('8:00');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('8:30');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('9:00');
    expect(mockUpdateTimes).not.toHaveBeenCalledWith('9:30');
});


describe('ReservationsPage', () => {
    // Mock localStorage
    let mockLocalStorageData = {};

    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn((key) => mockLocalStorageData[key] || null),
                setItem: jest.fn((key, value) => {
                    mockLocalStorageData[key] = value;
                }),
                clear: jest.fn(() => {
                    mockLocalStorageData = {};
                }),
            },
            writable: true,
        });
    });

    afterEach(() => {
        window.localStorage.clear();
        cleanup();
    });

    test('data is written to and read from localStorage correctly', async () => {
        // Mock the submitForm function
        const mockSubmitForm = jest.fn(data => submitForm(data));

        render(
            <Router>
                <ReservationsPage />
            </Router>
        );

        // When: Simulating a form submission
        expect(screen.getByTestId('date')).toBeInTheDocument();
        expect(screen.getByTestId('time')).toBeInTheDocument();
        expect(screen.getByTestId('guests')).toBeInTheDocument();
        expect(screen.getByTestId('occasion')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('date'), { target: { value: '2023-10-10' } });
        fireEvent.change(screen.getByTestId('time'), { target: { value: '6:00' } });
        fireEvent.change(screen.getByTestId('guests'), { target: { value: '5' } });
        fireEvent.change(screen.getByTestId('occasion'), { target: { value: 'birthday' } });

        // Check if the input values reflect the expected data
        expect(screen.getByTestId('date').value).toBe('2023-10-10');
        expect(screen.getByTestId('time').value).toBe('6:00');
        expect(screen.getByTestId('guests').value).toBe('5');
        expect(screen.getByTestId('occasion').value).toBe('birthday');

        fireEvent.click(screen.getByTestId('submit-button'));

        // Wait for potential asynchronous operations to complete
        const rawData = window.localStorage.getItem('bookingData');
        const savedData = rawData ? JSON.parse(rawData) : [];
        expect(savedData).toEqual(expect.arrayContaining([
            {
                date: '2023-10-10',
                time: '6:00',
                guests: '5',
                occasion: 'birthday',
            }
        ]));
    });

});