import {NO_AUTH_API} from "../API";

export const subscribe = (form) => {
    const {firstName, lastName, phoneNo, address, ssn} = form;
    const request = {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNo: phoneNo.value,
        address: address.value,
        ssn: ssn.value
    }

    NO_AUTH_API().post('/subscribe', request).then(res => form.reset());
};