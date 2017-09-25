export default function fetchRequest(url, method, body, token) {
    return new Promise((resolve, reject) => {
        const requestData = {
            method: method,
        };
        if (body) requestData.body = body;
        return fetch(url, requestData)
            .then((response) => {
                if (response.status === 204) return resolve();
                return response.json()
                    .then((parsed) => {
                        if (parsed.error) {
                            // eslint-disable-next-line no-console
                            console.error(
                                'An error has occurred making fetch request:',
                                parsed.error
                            );
                            return reject(parsed.error);
                        }
                        return resolve(parsed);
                    })
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.error(
                            'An error has occurred parsing response from fetch request:',
                            error
                        );
                        return reject(error);
                    });
            });
    });
}
