import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';


test('renders BookingForm', () => {
    // Mock data
    const mockAvailableTimes = [
        '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
        '8:00', '8:30', '9:00', '9:30'
    ];
    const mockSetAvailableTimes = jest.fn();
    const mockUpdateTimes = jest.fn();

    render(<BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        updateTimes={mockUpdateTimes}
    />);

    const headingElement = screen.getByText(/Make Your reservation/i);
    expect(headingElement).toBeInTheDocument();
});

/* Write a unit test that BookingForm component can be submitted by the user. */
test('BookingForm component can be submitted by the user', () => {
    // Mock data
    const mockAvailableTimes = [
        '5:00', '5:30', '6:00', '6:30', '7:00', '7:30',
        '8:00', '8:30', '9:00', '9:30'
    ];
    const mockSetAvailableTimes = jest.fn();
    const mockUpdateTimes = jest.fn();

    render(<BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        updateTimes={mockUpdateTimes}
    />);

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent(/Make Your reservation/i);
    expect(submitButton).toBeEnabled();
    expect(submitButton).not.toBeDisabled();
    expect(submitButton).not.toHaveAttribute('disabled');
    expect(submitButton).toHaveAttribute('type', 'submit');

});