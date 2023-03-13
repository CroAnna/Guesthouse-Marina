import React from "react";
import { useTranslation } from "react-i18next";

const BankDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="bank-details-container">
      <p>{t("owner_name")}: Marina Frklić</p>
      <p>{t("address")}: Zamršje 10, Karlovac</p>
      <p>{t("bank")}: SWIFT: XXXXXX</p>
      <p>IBAN ({t("payment_in_euros")}): HRXXXXXXXXXXXXXXXX</p>
    </div>
  );
};

export default BankDetails;
