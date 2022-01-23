function convertion() {

    var amount = parseFloat(document.getElementById('amount').value);
    var currency = document.getElementById('currency');
    var convertedCurrency = document.getElementById('convertedCurrency');
    var results = document.getElementById('results');

    if (currency.value === 'USD' && convertedCurrency.value === 'UAH'){
        results.value = (amount * 27);
    } 
    
    if (currency.value === 'USD' && convertedCurrency.value === 'EUR') {
        results.value = (amount * 0.9);
    } 
    
    if (currency.value === 'USD' && convertedCurrency.value === 'RUB') {
        results.value = (amount * 77);
    } 
    
    if (currency.value === 'EUR' && convertedCurrency.value === 'USD') {
        results.value = (amount * 1.1);
    } 
    
    if (currency.value === 'EUR' && convertedCurrency.value === 'UAH') {
        results.value = (amount * 30);
    } 
    
    if (currency.value === 'EUR' && convertedCurrency.value === 'RUB') {
        results.value = (amount * 88);
    } 
    
    if (currency.value === 'UAH' && convertedCurrency.value === 'USD') {
        results.value = (amount / 27);
    } 
    
    if (currency.value === 'UAH' && convertedCurrency.value === 'EUR'){
        results.value = (amount / 30);
    } 
    
    if (currency.value === 'UAH' && convertedCurrency.value === 'RUB'){
        results.value = (amount * 2.74);
    } 
    
    if (currency.value === 'RUB' && convertedCurrency.value === 'USD') {
        results.value = (amount / 77);
    } 
    
    if (currency.value === 'RUB' && convertedCurrency.value === 'EUR'){
        results.value = (amount / 88);
    } 
    
    if (currency.value === 'RUB' && convertedCurrency.value === 'UAH'){
        results.value = (amount / 2.74);
    }
}






