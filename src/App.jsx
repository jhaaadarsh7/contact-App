import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore"; // Removed unnecessary import
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactsSnapShot = await getDocs(contactRef);
        const contactLists = contactsSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="mx_auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="ml-1 absolute text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9"
          />
        </div>
        <IoIosAddCircleOutline className="cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
};

export default App;
