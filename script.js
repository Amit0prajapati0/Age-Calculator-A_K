function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    const dobDate = new Date(dob);
    const now = new Date();
    
    let years = now.getFullYear() - dobDate.getFullYear();
    let months = now.getMonth() - dobDate.getMonth();
    let days = now.getDate() - dobDate.getDate();

    // Adjust months and years if needed
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust days and months if needed
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    document.getElementById('years').innerText = `Years: ${years}`;
    document.getElementById('months').innerText = `Months: ${months}`;
    document.getElementById('days').innerText = `Days: ${days}`;
}
