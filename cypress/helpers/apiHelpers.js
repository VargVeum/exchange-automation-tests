export class ApiHelpers {

    getCurrencyRate() {

        const data = new FormData();
        data.set('_token', 'WRAxAMo62lH7Vo7dwF6XqvNjpVndwdj5m4tARGGE');

        cy.request({            
            method: 'POST',
            url: 'https://btcbit.net/ajax/currency-rates',
            headers: {      
                'Content-Type': 'multipart/form-data',
            },
            body: data
            }).then((response) => {
                expect(response).property('status').to.equal(200)
            })
            return this;
    }
}