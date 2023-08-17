# ShelterSeek

# Table of Contents
Introduction
Features
Technologies Used
Usage
Limitations
License

# Introduction
Shelter Seek helps animal places and people who want to adopt pets come together. Our website lets animal places show which animals need new homes. People looking for pets can search for the right one or find animal places near them. Kind people can also give money to these places. Come see all the animals waiting for new homes!

# Features
For Shelters:
- Profile Management: Customize shelter profiles with address, contact information, and operating hours.
- Pet Listings: Seamlessly add, update, or remove animals available for adoption.
- Donation Tracker: Monitor all donations received, their amounts, and donor details.

For Users:
- Shelter Locator: Find shelters in your vicinity with geolocation or manual searches.
- Pet Search: Use filters like type, or breed to find your specific animal
- Donation Feature: Support shelters with easy, integrated donation options.

# Technologies Used
Backend: Node.js with Express.js framework.
Database: MongoDB with Mongoose ORM.
Frontend: React.js with materiel UI
Styling: Bootstrap and custom CSS.
Payment Gateway: Stripe for donation processing.
Geolocation: Google Maps API.
Authentication: JSON Web Tokens (JWT).

# Usage
Setup:
Clone the repository: git clone https://github.com/your-repo/pet-adoption-portal.git
Navigate to the directory: cd pet-adoption-portal
Install dependencies: npm install

Run:
Start the server: npm start
Access via browser at: http://localhost:3000

Navigation:
For shelters, register via the "Shelter Sign-up". Users can start browsing immediately.
Shelters can add pets post-registration.
Users can filter pets, contact shelters, and donate through the portal.

# Limitations
Geolocation Accuracy: While we use Google Maps API, accuracy is not always guaranteed
Data Completeness: Relying on shelters to provide accurate and comprehensive data. Incomplete profiles or pet listings might be encountered.
Mobile Optimization: The platform is primarily designed for web browsers. While it is responsive, the experience might not be as refined on mobile devices.

# License
The Pet Adoption Portal is licensed under the MIT License
