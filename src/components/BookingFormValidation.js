export const validateBookingForm = (formData) => {
    let errors = {};

    if (!formData.date) {
        errors.date = "Date is required";
    }

    if (!formData.time) {
        errors.time = "Time is required";
    }

    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
        errors.guests = "Number of guests must be between 1 and 10";
    }

    if (!formData.occasion) {
        errors.occasion = "Occasion is required";
    }

    return errors;
};