import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Table from "@/components/Table";
import { dataFormater } from "../utils/dataFormater.js";

import clientAxios from "@/config/clientAxios";

const Dashboard = ({ redeems }) => {
  const columnas = [
    {
      title: "",
      field: "acciones",
    },
    // {
    //   title: "Id",
    //   field: "id",
    // },
    // {
    //   title: "Cliente",
    //   field: "customer_id",
    // },
    {
      title: "Nombre",
      field: "name",
    },
    {
      title: "Monto",
      field: "amount",
    },
    {
      title: "País",
      field: "country_id",
    },
    {
      title: "Provincia",
      field: "province_id",
    },

    // {
    //   title: "Actualizado",
    //   field: "updated_at",
    // },
    // {
    //   title: "Borrado",
    //   field: "deleted_at",
    // },
    {
      title: "Email",
      field: "email",
    },

    // {
    //   title: "Calle",
    //   field: "street",
    // },
    // {
    //   title: "Número",
    //   field: "number",
    // },

    // {
    //   title: "Telegram_ID",
    //   field: "telegram_id",
    // },

    // {
    //   title: "Vinería",
    //   field: "winerie_id",
    // },
    {
      title: "Año",
      field: "year",
    },
    {
      title: "CP",
      field: "zip",
    },
    {
      title: "Creado",
      field: "created_at",
    },
    {
      title: "Estado",
      field: "status",
    },
  ];

  const data = dataFormater(redeems);
  const router = useRouter();

  console.log(redeems)
  const [{ data: accountData }, disconnect] = useAccount();

  const session = useSession();
  return (
    <div>
      <Sidebar />
      <div className="fixed left-[6rem] top-4 flex flex-col ">
        <Topbar />
        <div className="mx-auto p-4 flex justify-center">
          <Table data={data} columnas={columnas} n={5} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const redeems = await clientAxios.get("/redeemRoute");

  const response = await clientAxios.get('/redeemRoute', {
    headers: {
      Cookie: cookie,
    },
  });
  return {
    props: { redeems: redeems.data },
  };
}
