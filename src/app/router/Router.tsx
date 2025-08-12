import { createHashRouter } from "react-router-dom";
import App from "../App";
import { HelpProject } from "../../pages/subpages/HelpProject";
import { GetHelp } from "../../pages/subpages/GetHelp";
import { MorePromotion } from "../../pages/subpages/MorePromotion";
import FinancialReport from "../../pages/subpages/FinancialReport";
import { MoreKindness } from "../../pages/subpages/interestingSubpages/MoreKindness";
import { WhoInterferes } from "../../pages/subpages/interestingSubpages/WhoInterferes";
import { BeVolonteur } from "../../pages/subpages/interestingSubpages/BeVolonteur";
import { HavingHope } from "../../pages/subpages/HavingHope";
import { YourTime } from "../../pages/subpages/interestingSubpages/YourTime";
import { BePartner } from "../../pages/subpages/supportSubpages/BePartner";
import { BeDonor } from "../../pages/subpages/supportSubpages/beDonor";
import { TreeInParadise } from "../../pages/subpages/supportSubpages/TreeInParadise";
import { OurChild } from "../../pages/subpages/footerSubpages/OurChild";
import { ProductsPoor } from "../../pages/subpages/footerSubpages/ProductsPoor";
import { Read } from "../../pages/subpages/footerSubpages/Read";
import { HistoryProject } from "../../pages/subpages/footerSubpages/HistoryProject";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HelpProject",
    element: <HelpProject />,
  },
  {
    path: "/getHelp",
    element: <GetHelp />
  },
  {
    path: "/morepromotion",
    element: <MorePromotion />
  },
  {
    path: "/financialreport",
    element: <FinancialReport />
  },
  {
    path: "/placeholder-1",
    element: <MoreKindness />
  },
  {
    path: "/placeholder-2",
    element: <WhoInterferes />
  },
  {
    path: "/placeholder-3",
    element: <BeVolonteur />
  },
  {
    path: "/placeholder-4",
    element: <HavingHope />
  },
  {
    path: "/placeholder-5",
    element: <YourTime />
  },
  {
    path: "/support/finance",
    element: <BePartner />
  },
  {
    path: "/support/BeDonor",
    element: <BeDonor />
  },
  {
    path: "/support/tree",
    element: <TreeInParadise />
  },
  {
    path: "/support/volunteer",
    element: <BeVolonteur />
  },
  {
    path: "/footer/ourchild",
    element: <OurChild />
  },
  {
    path: "/footer/productspoor",
    element: <ProductsPoor />
  },
  {
    path: "/footer/read",
    element: <Read />
  },
  {
    path: "/footer/historyproject",
    element: <HistoryProject />
  },
]);



// {
//   path: "*",
//   element: <NotFoundPage />,
// },