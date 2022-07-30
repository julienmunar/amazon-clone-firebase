import React, { useEffect } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const BodyView = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [lastCommands, setLastCommands] = useState(null);
  const userEmail = session?.user?.email;
  useEffect(() => {
    const fetchCommands = async () => {
      const commandeRef = collection(
        db,
        "users/julien.munar.84@gmail.com/orders"
      );
      const GetLastValidatedCommand = await getDocs(commandeRef);
      GetLastValidatedCommand && setLastCommands(GetLastValidatedCommand.docs);
    };
    fetchCommands();
  }, []);

  return (
    <div className="bg-[#eaeded] flex flex-col items-center pb-10 ">
      <div className="pt-2">
        <Image
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          width={1080}
          height={200}
          alt="banner"
        />
      </div>

      <div className=" flex-grow max-w-7xl p-10 pb-20  w-full bg-white rounded-md mx-auto flex flex-col">
        <div className="flex items-center space-x-2 pb-2">
          <TaskAltIcon className=" text-green-700  text-3xl" />
          <p className=" text-2xl">Commande effectuée,merci ! </p>
        </div>

        <p className="text-sm pb-10 ml-2">Une confirmation sera envoyée par mail</p>
        <button className=" bg-yellow-400 px-3 py-1  text-xs  border border-gray-400 w-full hover:opacity-80 cursor-pointer  max-w-sm mx-auto" onClick={()=>{ router.push('/myorders')}}>
          Verifier mes Commandes
        </button>
      </div>
    </div>
  );
};

export default BodyView;
