const joinForm = document.getElementById('join-form');
const membersList = document.getElementById('members-list');
const totalSavingsElement = document.getElementById('total-savings');


let members = [];
let totalSavings = 0;
let currentWeek = 0;

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const tier = parseInt(document.getElementById('tier').value);


  if (tier !== 10000 && tier !== 20000 && tier !== 30000) {
    alert('Invalid tier selection!');
    return;
  }

  const interestRate = getInterestRate(tier);
  const interest = tier * interestRate;
  const totalAmount = tier + interest;

  const newMember = {
    name: name,
    tier: tier,
    interest: interest,
    totalAmount: totalAmount
  };

  members.push(newMember);
  totalSavings += tier;

  updateSummary();
  joinForm.reset();
});

// Function to get interest rate 
function getInterestRate(tier) {
  switch (tier) {
    case 10000: return 0.05;
    case 20000: return 0.1;
    case 30000: return 0.2;
    default: return 0;
  }
}

// Function to update the savings summary display
function updateSummary() {
  membersList.innerHTML = '';
  members.forEach(member => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${member.name} - Tier : ₦${member.tier} - 
      Interest: ₦${member.interest.toFixed(2)} - 
      Withdrawable Amount: ₦${member.totalAmount.toFixed(2)} 
    `;
    membersList.appendChild(li);
  });

  totalSavingsElement.textContent = `Total Savings: ₦${totalSavings.toFixed(2)}`;
}

  updateSummary();


