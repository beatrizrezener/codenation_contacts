export default class ContactService {

    static requestContacts(callback) {
        fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
            .then(response => response.json())
            .then(data => callback(data));
    }
}