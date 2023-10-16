import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { validateBookingForm } from './BookingFormValidation';


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


test('renders BookingForm', () => {
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

test('BookingForm component can be submitted by the user', () => {
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

/* For each input field, add a unit test to validate that the correct attributes are applied to the HTML element. */
test('BookingForm component has a date input field', () => {
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        formData={mockFormData}
        setFormData={mockSetFormData}
    />);

    const dateInput = screen.getByTestId('date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('name', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('required');
});

test('BookingForm component has a time input field', () => {
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        formData={mockFormData}
        setFormData={mockSetFormData}
    />);

    const timeInput = screen.getByTestId('time');
    expect(timeInput).toBeInTheDocument();
    expect(timeInput.tagName).toBe('SELECT');
    expect(timeInput).toHaveAttribute('name', 'time');
    expect(timeInput).toHaveAttribute('id', 'time');
    expect(timeInput).toHaveAttribute('required');
});

test('BookingForm component has a guests input field', () => {
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        formData={mockFormData}
        setFormData={mockSetFormData}
    />);

    const guestsInput = screen.getByTestId('guests');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('step', '1');
});

test('BookingForm component has an occasion input field', () => {
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        formData={mockFormData}
        setFormData={mockSetFormData}
    />);

    const occasionInput = screen.getByTestId('occasion');
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput.tagName).toBe('SELECT');
    expect(occasionInput).toHaveAttribute('name', 'occasion');
    expect(occasionInput).toHaveAttribute('id', 'occasion');
});

describe('validateBookingForm', () => {
    it('should return errors for empty form data', () => {
        const formData = {
            date: '',
            time: '',
            guests: '',
            occasion: '',
        };

        const errors = validateBookingForm(formData);
        expect(errors.date).toBe("Date is required");
        expect(errors.time).toBe("Time is required");
        expect(errors.guests).toBe("Number of guests must be between 1 and 10");
        expect(errors.occasion).toBe("Occasion is required");
    });

    it('should return errors for invalid guests count', () => {
        const formData = {
            date: '2023-10-10',
            time: '5:00',
            guests: '11',
            occasion: 'birthday',
        };

        const errors = validateBookingForm(formData);
        expect(errors.guests).toBe("Number of guests must be between 1 and 10");
    });

    it('should not return errors for valid form data', () => {
        const formData = {
            date: '2023-10-10',
            time: '5:00',
            guests: '5',
            occasion: 'birthday',
        };

        const errors = validateBookingForm(formData);
        expect(Object.keys(errors).length).toBe(0);
    });
});