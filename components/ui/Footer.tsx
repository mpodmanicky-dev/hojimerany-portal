import Link from "next/link";
import { NAV_ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-accent-mint/30 bg-background text-clinical-blue/90">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <Logo variant="dark" size="lg" />
            <p className="text-sm text-clinical-blue/80 max-w-md leading-relaxed">
              Odborný a vzdelávací sprievodca modernou liečbou akútnych a
              chronických rán, popálenín a jaziev na báze superoxidovaných roztokov
              a medicínskeho medu.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xs tracking-wider uppercase text-clinical-blue/60 mb-1">
              Navigácia
            </h3>
            {NAV_ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm text-clinical-blue/80 hover:text-accent-teal transition-colors duration-200"
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xs tracking-wider uppercase text-clinical-blue/60 mb-1">
              Odporúčané postupy
            </h3>
            <Link
              href="/hojenie#popaleniny"
              className="text-sm text-clinical-blue/80 hover:text-accent-teal transition-colors duration-200"
            >
              Popáleniny v domácnosti
            </Link>
            <Link
              href="/hojenie#odreniny"
              className="text-sm text-clinical-blue/80 hover:text-accent-teal transition-colors duration-200"
            >
              Akútne cestné odreniny
            </Link>
            <Link
              href="/hojenie#pooperacne"
              className="text-sm text-clinical-blue/80 hover:text-accent-teal transition-colors duration-200"
            >
              Jazvy a pooperačné rany
            </Link>
            <Link
              href="/hojenie#chronicke"
              className="text-sm text-clinical-blue/80 hover:text-accent-teal transition-colors duration-200"
            >
              Dekubity a bércové vredy
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="rounded-2xl border border-accent-mint/40 bg-accent-mint/10 p-5 text-xs text-clinical-blue/80 leading-relaxed mb-6">
          <p className="font-bold text-clinical-blue mb-1">
            Dôležité lekárske upozornenie
          </p>
          <p className="mb-2">{SITE_CONFIG.disclaimer}</p>
          <p className="text-clinical-blue/60">{SITE_CONFIG.complianceNotice}</p>
        </div>

        {/* Distribútor & Farmakovigilancia Box */}
        <div className="rounded-2xl border border-clinical-blue/15 bg-white p-5 text-xs text-clinical-blue/80 leading-relaxed mb-8 flex flex-col sm:flex-row justify-between gap-6">
          <div className="sm:max-w-xs">
            <h4 className="font-bold text-clinical-blue mb-1">
              Distribúcia v SR:
            </h4>
            <p className="font-semibold text-clinical-blue">{SITE_CONFIG.distributor.name}</p>
            <p className="text-clinical-blue/70">{SITE_CONFIG.distributor.address}</p>
            <p className="text-accent-teal mt-1 font-mono">{SITE_CONFIG.distributor.web}</p>
          </div>
          <div className="flex-1 sm:max-w-md">
            <h4 className="font-bold text-clinical-blue mb-1">
              {SITE_CONFIG.pharmacovigilance.title}:
            </h4>
            <p className="text-clinical-blue/70 mb-2">
              {SITE_CONFIG.pharmacovigilance.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span>E-mail: {SITE_CONFIG.pharmacovigilance.email}</span>
              <span>Tel: {SITE_CONFIG.pharmacovigilance.phone}</span>
              <a
                href={SITE_CONFIG.pharmacovigilance.suklReportingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal underline font-sans font-semibold"
              >
                Hlásenie ŠÚKL
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-accent-mint/20 flex flex-col sm:flex-row items-center justify-center text-xs text-clinical-blue/60 gap-4">
          <p>© {SITE_CONFIG.year} {SITE_CONFIG.name}. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

