import Table from "@/components/Table";
import { useSession, signOut, getSession } from "next-auth/react";
import React from "react";
import clientAxios from "@/config/clientAxios";
import { dataFormater } from "../utils/winaryDataFormater.js";
import Sidebar from "@/components/Sidebar.jsx";
import Topbar from "@/components/Topbar.jsx";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Winarys = ({ winarys, profile }) => {
  const { t } = useTranslation();
  const filters = useSelector((state) => state.filter);

  const columnas = [
    {
      title: "",
      field: "acciones",
    },
    {
      title: "Id",
      field: "id",
    },

    {
      title: t("Nombre"),
      field: "name",
    },
    {
      title: t("Website"),
      field: "website",
    },
    {
      title: t("Imagen"),
      field: "image",
    },
    {
      title: t("Color Primario"),
      field: "primary_color",
    },

    {
      title: t("Actualizado"),
      field: "updated_at",
    },

    {
      title: "Email",
      field: "email",
    },

    {
      title: t("Secret"),

      field: "secret",
    },
    {
      title: t("Clave Pública"),

      field: "public_key",
    },

    {
      title: "Es Admin",
      field: "isAdmin",
    },
  ];

  const filterData = (data) => {
    if (filters.filter) {
      const searchString = filters.filter.toLowerCase();

      return data.filter((obj) =>
        Object.values(obj).some((value) =>
          String(value).toLowerCase().includes(searchString)
        )
      );
    } else {
      return data;
    }
  };
  const data = filterData(dataFormater(winarys));
  // const data = dataFormater(winarys);
  console.log(data);
  return (
    <div className="">
      <h1>winarys</h1>
      <Sidebar />
      <Topbar profile={profile} />
      <div className="ml-20  min-w-fit top-4 ">
        <Table data={data} columnas={columnas} route="/winaryDetail" n={15} />
      </div>
    </div>
  );
};

export default Winarys;

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
  const { req } = context;
  const { cookie } = req.headers;

  const response = await clientAxios.get("/winarysRoute", {
    params: {
      isAdmin: session.isAdmin,
    },
    headers: {
      Cookie: cookie,
    },
  });
  const profile = await clientAxios.post("/loginRoute", {
    public_key: session.address,
    headers: {
      Cookie: cookie,
    },
  });

  return {
    props: { winarys: response.data, profile: profile.data },
  };
}