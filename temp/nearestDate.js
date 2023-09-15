// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let selectedPrescription = [
  {
    id: 6,
    is_active: true,
    rx_number: "8",
    written_date: "2023-05-28",
    last_fill_date: "2023-06-20",
    date_filled: "2023-06-01",
    total_refills: 5,
    written_quantity: 30,
    remaining_quantity: 0,
    refill_remaining: 5,
    days_supply: 90,
    fill_quantity: 30,
    expiration_date: "2023-09-01",
    patient: 11,
    pharmacy_name: "Osborn Pharmacy",
    physician_name: "Riko Pattison",
    drug_name: "Aspirin",
    ndc: "123456789",
    next_fill_date: "2023-09-18",
    rxfills: [],
  },
  {
    id: 7,
    is_active: true,
    rx_number: "120",
    written_date: "2023-05-28",
    last_fill_date: "2023-06-20",
    date_filled: "2023-06-01",
    total_refills: 5,
    written_quantity: 30,
    remaining_quantity: 0,
    refill_remaining: 5,
    days_supply: 90,
    fill_quantity: 30,
    expiration_date: "2023-09-01",
    patient: 11,
    pharmacy_name: "Osborn Pharmacy",
    physician_name: "Tuny Watson",
    drug_name: "Ibuprofen",
    ndc: "987654321",
    next_fill_date: "2023-09-18",
    rxfills: [],
  },
];

const findNearestNeededDate = () => {
  const currentDate = new Date();
  let nearestDate = null;

  for (const prescription of selectedPrescription) {
    const prescriptionDate = new Date(prescription.next_fill_date);
    if (!nearestDate || prescriptionDate < nearestDate) {
      nearestDate = prescriptionDate;
    }
  }
  console.log(typeof nearestDate);

  return nearestDate;
};

let date = findNearestNeededDate();
console.log(date);
