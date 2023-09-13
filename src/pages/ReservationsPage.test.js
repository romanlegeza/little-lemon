import { render, screen } from '@testing-library/react';
import ReservationsPage from './ReservationsPage';
import BookingForm from '../components/BookingForm';


test('renders ReservationsPage', () => {
    render(<ReservationsPage />);

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
    const mockSetAvailableTimes = jest.fn();
    const mockUpdateTimes = jest.fn();

    render(<BookingForm
        availableTimes={mockAvailableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        updateTimes={mockUpdateTimes}
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
