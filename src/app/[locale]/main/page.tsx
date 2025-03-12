import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";

const MainHomePage = async (
  props: {
    params: Promise<{ locale: string }>;
  }
) => {
  const params = await props.params;

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = await getTranslations();

  return (
      <Button>{t("home")}</Button>
  );
};

export default MainHomePage;
