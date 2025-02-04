#   TASK-2-HNG
A simple RESTful API that provides interesting mathematical properties about a given number, along with a fun fact.

## Features
- Retrieve a **fun fact** about the number using the numbers API.

---

## **Setup & Installation**

### **Prerequisites**
- Node.js (v12 or later)
- npm or yarn

### **1. Clone the Repository**
```sh
git clone https://github.com/Dom-HTG/HNG-task-2.git
```
### **2. Install dependencies**
```sh
npm install
```

### **3. Start application**
```sh
npm run start:prod
```


## **API Endpoint**
### `GET https://task-2-ft7i.onrender.com/api/classify-number?number=371`

---

## **Example Responses**

###  **Success Response (200 OK)**
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": [
    "Armstrong",
    "odd"
  ],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

## **Example Error**

### **Error Response (400 BAD REQUEST)**
```json
{
    "number": "alphabet",
    "error": true
}
```

### **Error Response (500 INTERNAL SERVER ERROR)**
```json
{
    "message": "Internal Server Error",
    "error": true
}
```

## **Usage**
- Make requests to the API using cURL tool
```sh
curl -X GET "https://task-2-ft7i.onrender.com/api/classify-number?number=371"
```