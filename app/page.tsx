"use client";

import { useState, useRef } from "react";

export default function Home() {

  const [store, setStore] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [items, setItems] = useState([
  {
    scheme: "",
    qty: 1,
    value: 0,
  },
]);

  const [mobileError, setMobileError] = useState("");
  const [billError, setBillError] = useState("");
  const [amountError, setAmountError] = useState("");
  
  const [loggedIn, setLoggedIn] = useState(false);
const [userId, setUserId] = useState("");
const [password, setPassword] = useState("");
const passwordRef = useRef<HTMLInputElement>(null);
const [successMessage, setSuccessMessage] = useState("");
  const stores = {
  AV: "RM SUPER BAZAAR",
  AVB2: "RMAV HYPERMARKET",
  AVB3: "VM ASHOK VIHAR",
  SB: "RMSB HYPERMARKET",
  MT: "RMMT HYPERMARKET",
  KB: "RMKB HYPERMARKET",
};
const schemes = [
  { name: "Chana Dal", value: 7 },
  { name: "Kala Chana", value: 7 },
  { name: "Mangat Ram Besan 500gm", value: 1 },
  { name: "Rajdhani Besan 1 Kg", value: 7 },
  { name: "Roohafza 750 ml", value: 75 },
  { name: "Fortune Soya 750 ml", value: 75 },
  { name: "Softsens Baby Wipes", value: 7 },
  { name: "Pringle", value: 7 },
  { name: "Parle G 800gm", value: 7 },
  { name: "Hully Gully", value: 1 },
  { name: "Milton Bottle", value: 49 },
  { name: "Yuvaid Gulab", value: 49 },
  { name: "Coke 2 Ltr", value: 7 },
  { name: "Sugar 1 Kg", value: 7 },
  { name: "Ahaar Sooji", value: 1 },
  { name: "Ahaar Maida", value: 1 },
  { name: "Heinz Ketchup", value: 60 },
  { name: "Kissan Ketchup 1.1 Kg", value: 7 },
  { name: "Bambino Pasta 400gm", value: 7 },
  { name: "Haldiram Bujia 1 Kg", value: 175 },
  { name: "Dark Fantasy MRP 328", value: 75 },
  { name: "Britannia Nutrichoice MRP 385", value: 75 },
  { name: "Parle Marie", value: 39 },
  { name: "Channa Saattu", value: 1 },
  { name: "Bedmi Poori", value: 11 },
  { name: "Dribble Oven 1 Pcs", value: 29 },
  { name: "Color Dose Soap", value: 15 },
  { name: "Orion Chocopie", value: 25 },
  { name: "Veeba Mayonnaise 875gm", value: 49 },
  { name: "Parle Melody Toffee", value: 15 },
  { name: "Parle Kaccha Mango", value: 15 },
  { name: "Yippee Noodles Box", value: 29 },
  { name: "Wai Wai Cup Noodles", value: 1 },
  { name: "Santoor Pack Of 4", value: 29 },
  { name: "Real Juice Masala Mixed", value: 19 },
  { name: "Haldiram Chips", value: 50 },
  { name: "Smith & Jones Ketchup", value: 7 },
  { name: "Home Foil 4 Meter", value: 1 },
  { name: "Epigamia Milk Shake", value: 1 },
  { name: "Beer Mug", value: 29 },
  { name: "Amul Kool", value: 1 },
  { name: "Amul Butter 100gm", value: 1 },
  { name: "Britannia Cake", value: 1 },
  { name: "Poure Room Freshener", value: 7 },
  { name: "MDH Kitchen King", value: 7 },
  { name: "Haldiram Bujia 200gm", value: 1 },
  { name: "Khadi Soap MRP 78", value: 1 },
  { name: "Mangat Ram Poha 500gm", value: 7 },
  { name: "Maggi Noodles Single Pack", value: 1 },
  { name: "Thums Up 750ml", value: 7 },
  { name: "Tata Tea Agni 1kg", value: 7 },
  { name: "Glass vigneto Bottle", value: 48 },
  { name: "HyFUN Momos Mixed Veg mrp-165", value: 25 },
];
const addItem = () => {
  setItems([
    ...items,
    {
      scheme: "",
      qty: 1,
      value: 0,
    },
  ]);
};

const totalValue = items.reduce(
  (sum, item) => sum + item.qty * item.value,
  0
);
const users = {
  AV: {
    password: "1111",
    store: "RM SUPER BAZAAR",
  },

  AVB2: {
    password: "2222",
    store: "RMAV HYPERMARKET",
  },

  AVB3: {
    password: "3333",
    store: "VM ASHOK VIHAR",
  },

  SB: {
    password: "6666",
    store: "RMSB HYPERMARKET",
  },

  MT: {
    password: "5555",
    store: "RMMT HYPERMARKET",
  },

  KB: {
    password: "4444",
    store: "RMKB HYPERMARKET",
  },
};

const login = () => {
  setSuccessMessage("Login Successful");
  const user = users[userId as keyof typeof users];
  console.log("USER ID =", userId);
  console.log("PASSWORD =", password);
  console.log("USER =", user);
  if (!user) {
    alert("INVALID USER ID");
    return;
  }

  if (user.password !== password) {
    alert("WRONG PASSWORD");
    return;
  }
 setStore(user.store);
  setLoggedIn(true);
};
  const submitForm = async () => {
  if (
    !store ||
    !customerName ||
    !mobile ||
    !billNumber ||
    !billAmount
  ) {
    alert("PLEASE FILL ALL REQUIRED FIELDS");
    return;
  }

  if (mobile.length !== 10) {
    alert("MOBILE NUMBER MUST BE 10 DIGITS");
    return;
  }
const data = {
  store,
  customerName,
  mobile,
  billNumber,
  billAmount,
  totalValue,
  items,
};
console.log("BEFORE FETCH");
const response = await fetch(
  "https://script.google.com/macros/s/AKfycbz3MjTkOPdPT4c8j-heveHHJQBP-mc3vC1tESldgindlWj7jGBcss1NTDUviR02p4Gr/exec",
  {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
);

console.log("FETCH DONE");
console.log("FETCH DONE");

// FORM RESET
setCustomerName("");
setMobile("");
setBillNumber("");
setBillAmount("");

setItems([
  {
    scheme: "",
    qty: 1,
    value: 0,
  },
]);

setSuccessMessage("✅ Data Saved Successfully");
setSuccessMessage("✅ Data Saved Successfully");

setSuccessMessage("✅ Data Saved Successfully");
};

if (!loggedIn) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      
      {successMessage && (
  <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center font-semibold">
    {successMessage}
  </div>
)}
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-[450px] space-y-5">
         <div className="text-5xl text-center">
  🔐
</div>
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
  RAJMANDIR OFFER FORM
</h1>

<p className="text-center text-gray-500">
  Store Login Portal
</p>
<p className="text-center text-gray-600">
  Welcome to Rajmandir Offer Management System
</p>
        <input
          type="text"
          placeholder="USER ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
  if (e.key === "Enter") {
    passwordRef.current?.focus();
  }
}}
          className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 outline-none"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter") login();
}}
          className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 outline-none"
        />

        <button
          onClick={login}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold p-4 rounded-xl transition-all"
        >
          LOGIN
        </button>
<p className="text-center text-xs text-gray-400">
  © 2026 Rajmandir Group. All Rights Reserved.
</p>
      </div>
    </div>
  );
}
  
return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="max-w-2xl mx-auto">

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
  src="/banner.png"
  alt="Rajmandir Offer"
  className="w-full h-auto rounded-t-xl"
/>
          <div className="p-6 bg-gradient-to-b from-orange-50 to-white">

            <h1 className="text-4xl font-extrabold text-center text-white bg-orange-500 py-4 rounded-lg">
              RAJMANDIR OFFER FORM
            </h1>

            <p className="text-center text-gray-500 mb-8">
            </p>

            <div className="space-y-5">

              <div className="w-full border rounded-lg p-3 bg-gray-100 font-bold">
  STORE: {store}
</div>

<input
  required
  type="text"
  placeholder="CUSTOMER NAME"
  value={customerName}
  onChange={(e) =>
    setCustomerName(e.target.value.toUpperCase())
  }
  className="w-full border rounded-lg p-3"
/>
  <input
  type="text"
  placeholder="MOBILE NUMBER"
  maxLength={10}
  value={mobile}
  onChange={(e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setMobile(value);

    if (value.length > 0 && value.length < 10) {
      setMobileError("ENTER 10 DIGIT MOBILE NUMBER");
    } else {
      setMobileError("");
    }
  }}
  className="w-full border rounded-lg p-3"
/>

{mobileError && (
  <p className="text-red-600 text-sm">{mobileError}</p>
)}

 <input
  type="text"
  placeholder="BILL NUMBER"
  value={billNumber}
  onChange={(e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setBillNumber(value);
      setBillError("");
    } else {
      setBillError("ONLY NUMBERS ALLOWED");
    }
  }}
  className="w-full border rounded-lg p-3"
/>

{billError && (
  <p className="text-red-600 text-sm">{billError}</p>
)}
 <input
  type="text"
  placeholder="BILL AMOUNT ₹"
  value={billAmount}
  onChange={(e) => {
    const value = e.target.value;

    if (/^\d*\.?\d*$/.test(value)) {
      setBillAmount(value);
      setAmountError("");
    } else {
      setAmountError("ENTER VALID AMOUNT");
    }
  }}
  className="w-full border rounded-lg p-3"
/>

{amountError && (
  <p className="text-red-600 text-sm">{amountError}</p>
)}

              {items.map((item, index) => (
  <div
    key={index}
    className="border rounded-lg p-4 bg-gray-50 space-y-3"
  >
    <h3 className="font-bold">
      ITEM {index + 1}
    </h3>

    <select
      value={item.scheme}
      onChange={(e) => {
        const selected = schemes.find(
          (s) => s.name === e.target.value
        );

        const updated = [...items];

        updated[index].scheme = e.target.value;
        updated[index].value = selected
          ? selected.value
          : 0;

        setItems(updated);
      }}
      className="w-full border rounded-lg p-3"
    >
      <option value="">
        SELECT ITEM
      </option>

      {schemes.map((s) => (
        <option
          key={s.name}
          value={s.name}
        >
          {s.name}
        </option>
      ))}
    </select>

    <input
      type="number"
      placeholder="QTY"
      value={item.qty}
      onChange={(e) => {
        const updated = [...items];

        updated[index].qty =
          Number(e.target.value);

        setItems(updated);
      }}
      className="w-full border rounded-lg p-3"
    />

    <input
  type="text"
  value={`₹ ${item.qty * item.value}`}
  readOnly
  className="w-full border rounded-lg p-3 bg-gray-100"
/>
  </div>
))}
<button
  type="button"
  onClick={addItem}
  className="w-full bg-green-600 text-white py-3 rounded-lg"
>
  + ADD MORE ITEM
</button>
<div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center">
  <h2 className="text-2xl font-bold">
    TOTAL SCHEME VALUE ₹ {totalValue}
  </h2>
</div>
              <button
                onClick={submitForm}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
              >
                Submit Form
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}