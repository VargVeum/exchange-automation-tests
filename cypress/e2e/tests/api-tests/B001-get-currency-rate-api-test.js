import { ApiHelpers } from "../../../helpers/apiHelpers";

describe('[B001] API tests', function(){
    const apiHelpers = new ApiHelpers();
            
    it('Get currency rate', () => {
        apiHelpers.getCurrencyRate();
    })
    
});