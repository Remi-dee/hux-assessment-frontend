import { useState, useEffect } from "react";

export default function Header({ user }) {
  const [salutation, setSalutation] = useState("");

  useEffect(() => {
    if (user && user.email) {
      const email = user.email || "";
      setSalutation(`Good day, ${email}!`);
    }
  }, [user]);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-center text-black text-xl font-bold">{salutation}</h1>
    </div>
  );
}
