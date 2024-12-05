"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/context/language-context";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-gray-600 dark:text-white hover:text-red-600"
    >
      {language === 'fr' ? 'NL' : 'FR'}
    </Button>
  );
}