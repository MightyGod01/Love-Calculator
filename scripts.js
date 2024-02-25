function calculateLove() {
    const name1 = document.getElementById('nameInput1').value;
    const name2 = document.getElementById('nameInput2').value;

    if (!name1 || !name2) {
        document.getElementById('resultDiv').innerText = 'Please fill the both name fields.';
        return;
    }
    const lovePercentage = Math.abs(hashCode(name1 + name2)) % 101;
    document.getElementById('resultDiv').innerText = ` Love Relationship between (${name1} and ${name2}): is ${lovePercentage}% !`;

    document.getElementById('nameInput1').value = '';
    document.getElementById('nameInput2').value = '';

    document.getElementById('nameInput1') = '';
    document.getElementById('nameInput2') = '';
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}