function billCalculator()
{
    let total =parseFloat(document.getElementById('number1').value);
    let tipRate = parseFloat(document.getElementById('number2').value)
    const taxRate = 5.5
    const tip = total * (tipRate/100);
    const tax = total * (taxRate/100);
    const grandTotal = total + tip + tax; 

    document.getElementById('tipvalue').innerHTML = tip.toFixed(2)
    document.getElementById('taxvalue').innerHTML = tax.toFixed(2)
    document.getElementById('grandvalue').innerHTML = grandTotal.toFixed(2)
 
}