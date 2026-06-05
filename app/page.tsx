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
    cost: 0,
  },
]); 

  const [mobileError, setMobileError] = useState("");
  const [billError, setBillError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

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
  { name: "Ahaar Maida", value: 1, cost: 27 },
  { name: "Ahaar Sooji", value: 1, cost: 27 },
  { name: "Amul Butter 100gm", value: 1, cost: 55 },
  { name: "Amul Kool", value: 1, cost: 22 },
  { name: "Bambino Pasta 400gm", value: 7, cost: 30 },
  { name: "Bedmi Poori", value: 11, cost: 53 },
  { name: "Beer Mug", value: 29, cost: 75 },
  { name: "Britannia Cake", value: 1, cost: 20 },
  { name: "Britannia Nutrichoice MRP 385", value: 75, cost: 162 },
  { name: "Chana Dal", value: 7, cost: 78 },
  { name: "Channa Saattu", value: 1, cost: 41 },
  { name: "Coke 2 Ltr", value: 7, cost: 68 },
  { name: "Color Dose Soap", value: 15, cost: 50 },
  { name: "Dark Fantasy MRP 328", value: 75, cost: 147 },
  { name: "Dribble Oven 1 Pcs", value: 29, cost: 90 },
  { name: "Epigamia Milk Shake", value: 1, cost: 17 },
  { name: "Fortune Soya 750 ml", value: 75, cost: 140 },
  { name: "Glass vigneto Bottle", value: 19, cost: 48 },
  { name: "Haldiram Bujia 1 Kg", value: 175, cost: 242 },
  { name: "Haldiram Bujia 200gm", value: 1, cost: 50 },
  { name: "Haldiram Chips", value: 1, cost: 22 },
  { name: "Heinz Ketchup", value: 60, cost: 140 },
  { name: "Home Foil 4 Meter", value: 1, cost: 16 },
  { name: "Hully Gully", value: 1, cost: 32 },
  { name: "HyFUN Momos Mixed Veg mrp-165", value: 25, cost: 50 },
  { name: "Kala Chana", value: 7, cost: 78 },
  { name: "Khadi Soap MRP 78", value: 1, cost: 15 },
  { name: "Kissan Ketchup 1.1 Kg", value: 7, cost: 95 },
  { name: "Maggi Noodles Single Pack", value: 1, cost: 14 },
  { name: "Mangat Ram Besan 500gm", value: 1, cost: 38 },
  { name: "Mangat Ram Poha 500gm", value: 1, cost: 32 },
  { name: "MDH Kitchen King", value: 1, cost: 75 },
  { name: "Milton Bottle", value: 49, cost: 115 },
  { name: "Orion Chocopie", value: 25, cost: 65 },
  { name: "Parle G 800gm", value: 7, cost: 79 },
  { name: "Parle Kaccha Mango", value: 15, cost: 41 },
  { name: "Parle Marie", value: 39, cost: 87 },
  { name: "Parle Melody Toffee", value: 15, cost: 41 },
  { name: "Poure Room Freshener", value: 7, cost: 65 },
  { name: "Pringle", value: 7, cost: 79 },
  { name: "Rajdhani Besan 1 Kg", value: 7, cost: 85 },
  { name: "Real Juice Masala Mixed", value: 19, cost: 68 },
  { name: "Roohafza 750 ml", value: 75, cost: 140 },
  { name: "Santoor Pack Of 4", value: 29, cost: 80 },
  { name: "Smith & Jones Ketchup", value: 1, cost: 45 },
  { name: "Softsens Baby Wipes", value: 7, cost: 65 },
  { name: "Sugar 1 Kg Value @1", value: 1, cost: 46 },
  { name: "Sugar 1 Kg Value @7", value: 7, cost: 46 },
  { name: "Tata Tea Agni 1kg", value: 75, cost: 173 },
  { name: "Thums Up 750ml", value: 1, cost: 27 },
  { name: "Veeba Mayonnaise 875gm", value: 49, cost: 158 },
  { name: "Wai Wai Cup Noodles", value: 1, cost: 24 },
  { name: "Yippee Noodles Box", value: 29, cost: 60 },
  { name: "Yuvaid Gulab", value: 29, cost: 70 }
];
const addItem = () => {
  setItems([
    ...items,
    {
      scheme: "",
      qty: 1,
      value: 0,
      cost: 0,
    },
  ]);
};

const totalAmount = items.reduce(
  (sum, item) => sum + item.qty * item.value,
  0
);

const totalCost = items.reduce(
  (sum, item) => sum + item.qty * item.cost,
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

  const user = users[userId as keyof typeof users];
  console.log("USER ID =", userId);
  console.log("PASSWORD =", password);
  console.log("USER =", user);

  if (!user) {
  setSuccessMessage("");
  alert("❌ USER ID NOT FOUND");
  return;
}

  if (user.password !== password) {
  setSuccessMessage("");
  setErrorMessage("❌ WRONG PASSWORD");
  return;
}
 
 setErrorMessage("");
setStore(user.store);
setSuccessMessage("✅ LOGIN SUCCESSFUL");

setTimeout(() => {
  setSuccessMessage("");
  setLoggedIn(true);
}, 1500);
};
  const submitForm = async () => {
  if (
  !customerName ||
  !mobile ||
  !billNumber ||
  !billAmount ||
  items.some(
    (item) =>
      !item.scheme ||
      !item.qty
  )
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
  totalAmount,   // Total Scheme Value
  items,
};

console.log(JSON.stringify(data, null, 2));
console.timeEnd("submit");
console.log("BEFORE FETCH");

const response = await fetch(
  "https://script.google.com/macros/s/AKfycbwKdfeTpdJuh8wvB3xr-k5L9BX89_F6dC_HsT0IqZMlgWcwNfHhYB4navdwv5ip1lg-Lw/exec",
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

setFormMessage("✅ FORM SUBMITTED SUCCESSFULLY");

setTimeout(() => {
  setFormMessage("");
}, 1000);

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
    cost: 0,
  },
]);

};

if (!loggedIn) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
     
<div className="bg-white p-8 rounded-3xl shadow-2xl w-[450px] space-y-5">

      {successMessage && (
  <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center font-semibold">
    {successMessage}
  </div>
)}

  {errorMessage && (
    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center font-semibold">
      ❌ {errorMessage}
    </div>
  )}

  <div className="text-5xl text-center">
    🔐
  </div>

        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
  RAJMANDIR MATKA KING
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
    setCustomerName(
      e.target.value.replace(/[^a-zA-Z\s]/g, "").toUpperCase()
    )
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
          updated[index].cost = selected ? selected.cost : 0;

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
{formMessage && (
  <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center font-semibold">
    {formMessage}
  </div>
)}
<button
  type="button"
  onClick={addItem}
  className="w-full bg-green-600 text-white py-3 rounded-lg"
>
  + ADD MORE ITEM
</button>
<div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center">
  <h2 className="text-2xl font-bold">
    TOTAL SCHEME VALUE ₹ {totalAmount}
  </h2>
</div>
              <button
  type="button"
  onClick={submitForm}
  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-extrabold text-lg"
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