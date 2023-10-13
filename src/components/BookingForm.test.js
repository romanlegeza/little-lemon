import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';


test('renders BookingForm', () => {
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

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent(/Make Your reservation/i);
    expect(submitButton).toBeEnabled();
    expect(submitButton).not.toBeDisabled();
    expect(submitButton).not.toHaveAttribute('disabled');
    expect(submitButton).toHaveAttribute('type', 'submit');

});