import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Main from "../sections/MainSection";
import SelectPoolSection from "../sections/SelectPoolSection";
import StatisticsSection from "../sections/StatisticsSection";
import ReferralsSection from "../sections/ReferralsSection";
import PushFund from "@/sections/PushFund";
/* import { ConnectButton } from "thirdweb/react";
import { client } from "@/client"; */

//En Landing.tsx se llaman los datos necesarios y se le pasan a los componentes, si se debe armar un objeto o un array de objetos, se hace aquí y se le pasa a los demás componentes que muestran esa información
export function Landing() {
  const { t, i18n } = useTranslation();

  //Estos son los datos que se van a mostrar en el main section
  const [wallet, setWallet] = useState(100);
  const [earnings, setEarnings] = useState(20);
  const [commissions, setCommissions] = useState(30);
  const [tlv, setTlv] = useState(1000);
  const [totalInvested, setTotalInvested] = useState(2000);
  const [distributed, setDistributed] = useState(1500);
  //Estos son los datos que se van a mostrar en statistics section
  const [totalUsers, setTotalUsers] = useState({
    totalUsersPosition1: 1000,
    totalUsersPosition2: 800,
    totalUsersPosition3: 600,
    totalUsersPosition4: 900,
    totalUsersPosition5: 700,
    totalUsersPosition6: 500,
    totalUsersPosition7: 400,
  });
  const [paid, setPaid] = useState({
    paidPosition1: 500,
    paidPosition2: 300,
    paidPosition3: 200,
    paidPosition4: 400,
    paidPosition5: 350,
    paidPosition6: 250,
    paidPosition7: 150,
  });
  const [colorIndicator, setColorIndicator] = useState({
    colorIndicatorPosition1: "green",
    colorIndicatorPosition2: "yellow",
    colorIndicatorPosition3: "green",
    colorIndicatorPosition4: "yellow",
    colorIndicatorPosition5: "green",
    colorIndicatorPosition6: "yellow",
    colorIndicatorPosition7: "green",
  });
  const [positionOptions] = useState([
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
    ["option1", "option2", "option3", "option4", "option5"],
  ]);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  //El colorIndicator es la bolita verde o amarilla, como no conozco la lógica que define ese color, dejo este array con las propiedades necesarias para cada carta de estadísticas, para usar esto crean la lógica para definir si el indicador va a ser green o yellow, ponen los datos necesarios en un array con estas propiedades  y lo envían al componente StatisticsSection.tsx y el componente se encarga de mapearlas
  const statisticsData = [
    {
      totalUsers: totalUsers.totalUsersPosition1,
      paid: paid.paidPosition1,
      colorIndicator: colorIndicator.colorIndicatorPosition1 as ColorIndicator,
      positionOptions: positionOptions[0],
    },
    {
      totalUsers: totalUsers.totalUsersPosition2,
      paid: paid.paidPosition2,
      colorIndicator: colorIndicator.colorIndicatorPosition2 as ColorIndicator,
      positionOptions: positionOptions[1],
    },
    {
      totalUsers: totalUsers.totalUsersPosition3,
      paid: paid.paidPosition3,
      colorIndicator: colorIndicator.colorIndicatorPosition3 as ColorIndicator,
      positionOptions: positionOptions[2],
    },
    {
      totalUsers: totalUsers.totalUsersPosition4,
      paid: paid.paidPosition4,
      colorIndicator: colorIndicator.colorIndicatorPosition4 as ColorIndicator,
      positionOptions: positionOptions[3],
    },
    {
      totalUsers: totalUsers.totalUsersPosition5,
      paid: paid.paidPosition5,
      colorIndicator: colorIndicator.colorIndicatorPosition5 as ColorIndicator,
      positionOptions: positionOptions[4],
    },
    {
      totalUsers: totalUsers.totalUsersPosition6,
      paid: paid.paidPosition6,
      colorIndicator: colorIndicator.colorIndicatorPosition6 as ColorIndicator,
      positionOptions: positionOptions[5],
    },
    {
      totalUsers: totalUsers.totalUsersPosition7,
      paid: paid.paidPosition7,
      colorIndicator: colorIndicator.colorIndicatorPosition7 as ColorIndicator,
      positionOptions: positionOptions[6],
    },
  ];

  const referralData = {
    totalReferrals: 10,
    investmentLink:
      "https://www.mandalik.io/?REF=0x70uhdz74yfzO3hewq3puqy3p29ulpdu",
    referrals: [
      {
        level: 1,
        percentage: "10%",
        value: 0,
        downloadLink: "https://example.com/download1",
      },
      {
        level: 2,
        percentage: "3%",
        value: 0,
        downloadLink: "https://example.com/download2",
      },
      {
        level: 3,
        percentage: "2%",
        value: 0,
        downloadLink: "https://example.com/download3",
      },
      {
        level: 4,
        percentage: "1%",
        value: 0,
        downloadLink: "https://example.com/download4",
      },
      {
        level: 5,
        percentage: "1%",
        value: 0,
        downloadLink: "https://example.com/download5",
      },
      {
        level: 6,
        percentage: "1%",
        value: 0,
        downloadLink: "https://example.com/download6",
      },
      {
        level: 7,
        percentage: "2%",
        value: 0,
        downloadLink: "https://example.com/download7",
      },
    ],
  };

  // Estados para el componente PushFund
  const [totalPushFunds, setTotalPushFunds] = useState(0.0);
  const [contractAddress, setContractAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const mainSectionData = {
    initialWallet: wallet,
    initialEarnings: earnings,
    initialCommissions: commissions,
    initialTlv: tlv,
    totalInvested: totalInvested,
    distributed: distributed,
  };

  return (
    <section className="px-4 w-full flex justify-center">
      <div className="max-w-[100%] md:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[40%]">
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-2 z-50">
          <h1>{t("landing.connectWallet")}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage("es")}
              className="px-2 py-1 text-sm"
            >
              Esp
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-2 py-1 text-sm"
            >
              Eng
            </button>
            {/*  <ConnectButton
              client={client}
              connectButton={{
                label: t("landing.connectWallet"),
                className:
                  "!bg-c-violet !h-8 !text-white !font-light !py-1 !px-1 !rounded-md !shadow-lg !hover:bg-purple-600 !transition !text-sm ",
              }}
            /> */}
          </div>
        </nav>
        <Main {...mainSectionData} />
        <SelectPoolSection />
        <StatisticsSection stats={statisticsData} />
        <ReferralsSection data={referralData} />
        <PushFund
          totalPushFunds={totalPushFunds}
          contractAddress={contractAddress}
        />

        <div className="h-52"></div>
      </div>
    </section>
  );
}

type ColorIndicator = "green" | "yellow";