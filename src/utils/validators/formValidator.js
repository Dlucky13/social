
export const requiredField = value => {
    return value ? undefined : 'field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return ( 'maxLength is: ' + maxLength + ' symbols')
    };
    return undefined;
};