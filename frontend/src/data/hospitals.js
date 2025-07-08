const Hospitals = [
  {
    name: "City Hospital",
    email: "cityhospital@example.com",
    phone: "+1234567890",
    organs: [
      { name: "Kidney", quantity: 5 },
      { name: "Liver", quantity: 3 },
      { name: "Heart", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Ramesh Sharma", specialization: "Nephrologist" },
      { name: "Dr. Priya Patel", specialization: "Cardiologist" },
    ]
  },
  {
    name: "General Health Hospital",
    email: "generalhealth@example.com",
    phone: "+1987654321",
    organs: [
      { name: "Kidney", quantity: 8 },
      { name: "Liver", quantity: 4 },
      { name: "Lungs", quantity: 1 },
    ],
    doctors: [
      { name: "Dr. Sunita Yadav", specialization: "Pulmonologist" },
      { name: "Dr. Rajesh Kumar", specialization: "Surgeon" },
    ]
  },
  {
    name: "Downtown Medical Center",
    email: "downtownmedical@example.com",
    phone: "+1122334455",
    organs: [
      { name: "Kidney", quantity: 6 },
      { name: "Heart", quantity: 1 },
    ],
    doctors: [
      { name: "Dr. Sandeep Agarwal", specialization: "Cardiothoracic Surgeon" },
      { name: "Dr. Meera Desai", specialization: "General Practitioner" },
    ]
  },
  {
    name: "Sunrise Clinic",
    email: "sunriseclinic@example.com",
    phone: "+1222333444",
    organs: [
      { name: "Kidney", quantity: 2 },
      { name: "Liver", quantity: 1 },
    ],
    doctors: [
      { name: "Dr. Neha Verma", specialization: "Pediatrician" },
      { name: "Dr. Anil Gupta", specialization: "Orthopedic Surgeon" },
    ]
  },
  {
    name: "Evergreen Hospital",
    email: "evergreenhospital@example.com",
    phone: "+1333444555",
    organs: [
      { name: "Heart", quantity: 3 },
      { name: "Liver", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Snehal Joshi", specialization: "Cardiologist" },
      { name: "Dr. Arvind Mehta", specialization: "General Practitioner" },
    ]
  },
  {
    name: "HopeCare Hospital",
    email: "hopecarehospital@example.com",
    phone: "+1444555666",
    organs: [
      { name: "Kidney", quantity: 4 },
      { name: "Lungs", quantity: 1 },
    ],
    doctors: [
      { name: "Dr. Rekha Sharma", specialization: "Pulmonologist" },
      { name: "Dr. Pankaj Singh", specialization: "Surgeon" },
    ]
  },
  {
    name: "Green Valley Medical",
    email: "greenvalleymedical@example.com",
    phone: "+1555666777",
    organs: [
      { name: "Kidney", quantity: 7 },
      { name: "Heart", quantity: 2 },
      { name: "Liver", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Amit Patel", specialization: "Nephrologist" },
      { name: "Dr. Reena Rathi", specialization: "Cardiologist" },
    ]
  },
  {
    name: "RiverView Hospital",
    email: "riverviewhospital@example.com",
    phone: "+1666777888",
    organs: [
      { name: "Liver", quantity: 2 },
      { name: "Lungs", quantity: 1 },
    ],
    doctors: [
      { name: "Dr. Ritu Kapoor", specialization: "Pulmonologist" },
      { name: "Dr. Ankit Sharma", specialization: "Heart Specialist" },
    ]
  },
  {
    name: "Healing Touch Hospital",
    email: "healingtouchhospital@example.com",
    phone: "+1777888999",
    organs: [
      { name: "Heart", quantity: 1 },
      { name: "Kidney", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Vinay Tiwari", specialization: "Cardiologist" },
      { name: "Dr. Pooja Mehta", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Tranquil Medical Center",
    email: "tranquilmedical@example.com",
    phone: "+1888999000",
    organs: [
      { name: "Kidney", quantity: 5 },
      { name: "Lungs", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Shalini Verma", specialization: "Pulmonologist" },
      { name: "Dr. Vikram Agarwal", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Shifa Hospital",
    email: "shifahospital@example.com",
    phone: "+1999001122",
    organs: [
      { name: "Heart", quantity: 2 },
      { name: "Kidney", quantity: 4 },
    ],
    doctors: [
      { name: "Dr. Karan Gupta", specialization: "Cardiologist" },
      { name: "Dr. Maya Soni", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Bhopal Heart Institute",
    email: "bhopalheart@example.com",
    phone: "+0755222333",
    organs: [
      { name: "Heart", quantity: 5 },
      { name: "Liver", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Naveen Joshi", specialization: "Cardiac Surgeon" },
      { name: "Dr. Seema Sharma", specialization: "General Practitioner" },
    ]
  },
  {
    name: "Bhopal General Hospital",
    email: "bhopalgeneral@example.com",
    phone: "+0755333444",
    organs: [
      { name: "Kidney", quantity: 6 },
      { name: "Heart", quantity: 4 },
      { name: "Liver", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Arvind Choudhary", specialization: "Nephrologist" },
      { name: "Dr. Rashmi Verma", specialization: "Cardiologist" },
    ]
  },
  {
    name: "People's Hospital Bhopal",
    email: "peoplesbhopal@example.com",
    phone: "+0755444555",
    organs: [
      { name: "Kidney", quantity: 3 },
      { name: "Heart", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Manish Patel", specialization: "Nephrologist" },
      { name: "Dr. Neeraj Sharma", specialization: "Cardiologist" },
    ]
  },
  {
    name: "Kamla Nehru Hospital",
    email: "kamla@example.com",
    phone: "+0755555666",
    organs: [
      { name: "Kidney", quantity: 7 },
      { name: "Heart", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Vijay Gupta", specialization: "Nephrologist" },
      { name: "Dr. Nisha Patil", specialization: "Cardiologist" },
    ]
  },
  {
    name: "AIIMS Bhopal",
    email: "aiimsbhopal@example.com",
    phone: "+0755666777",
    organs: [
      { name: "Heart", quantity: 5 },
      { name: "Liver", quantity: 4 },
      { name: "Kidney", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Ravi Yadav", specialization: "Cardiac Surgeon" },
      { name: "Dr. Aarti Mehta", specialization: "Nephrologist" },
    ]
  },
  {
    name: "National Heart Institute",
    email: "nationalheart@example.com",
    phone: "+0755888999",
    organs: [
      { name: "Heart", quantity: 6 },
      { name: "Kidney", quantity: 4 },
    ],
    doctors: [
      { name: "Dr. Sanjay Sharma", specialization: "Cardiologist" },
      { name: "Dr. Rajeev Kumar", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Sarvodya Hospital Bhopal",
    email: "sarvodyahospital@example.com",
    phone: "+0755999000",
    organs: [
      { name: "Heart", quantity: 3 },
      { name: "Liver", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Anjali Verma", specialization: "Cardiologist" },
      { name: "Dr. Pradeep Kumar", specialization: "General Surgeon" },
    ]
  },
  {
    name: "Medicover Hospital Bhopal",
    email: "medicoverbhopal@example.com",
    phone: "+0756000111",
    organs: [
      { name: "Kidney", quantity: 5 },
      { name: "Heart", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Neelam Soni", specialization: "Cardiologist" },
      { name: "Dr. Mohan Singh", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Shree Hospital Bhopal",
    email: "shreehospital@example.com",
    phone: "+0756112233",
    organs: [
      { name: "Kidney", quantity: 4 },
      { name: "Liver", quantity: 2 },
    ],
    doctors: [
      { name: "Dr. Nitin Jain", specialization: "General Practitioner" },
      { name: "Dr. Pallavi Yadav", specialization: "Nephrologist" },
    ]
  },
  {
    name: "Madhya Pradesh Hospital",
    email: "mphospital@example.com",
    phone: "+0756223344",
    organs: [
      { name: "Kidney", quantity: 6 },
      { name: "Liver", quantity: 3 },
    ],
    doctors: [
      { name: "Dr. Shilpa Sharma", specialization: "Nephrologist" },
      { name: "Dr. Vikram Patel", specialization: "Cardiologist" },
    ]
  }
];

export default Hospitals;
