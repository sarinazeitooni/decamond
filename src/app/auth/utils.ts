export const validatePhone = (phone: string) => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
    return iranPhoneRegex.test(phone);
};
