export type Language = 'fr' | 'nl';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      tires: 'Pneus',
      rims: 'Jantes',
      technical: 'Contrôle Technique',
      leasing: 'Leasing',
      contact: 'Contact'
    },
    common: {
      learnMore: 'En savoir plus',
      contactUs: 'Contactez-nous',
      appointment: 'Prendre rendez-vous'
    },
    hero: {
      title: 'Garage Pneus Expert',
      subtitle: 'Votre spécialiste en pneus, depuis 90 ans',
      cta: 'Prendre rendez-vous'
    },
    special:{
      title:"L'été arrive à grand pas, n'oubliez pas de venir faire changer vos pneus!",
    },
    openingHours: {
      title: 'Nos Horaires',
      currentStatus: 'Statut Actuel',
      open: 'Ouvert',
      closed: 'Fermé',
      days: {
        monday: 'Lundi',
        tuesday: 'Mardi',
        wednesday: 'Mercredi',
        thursday: 'Jeudi',
        friday: 'Vendredi',
        saturday: 'Samedi',
        sunday: 'Dimanche'
      },
      special:"Le garage sera fermé du 01/03 jusqu'au 03/03."
    },
    services: {
      title: 'Nos Services',
      tires: {
        title: 'Services Pneus',
        description: 'Montage, équilibrage et réparation de pneus par des experts'
      },
      repairs: {
        title: 'Préparations',
        description: 'Petit entretien pour votre véhicule'
      }
    },
    about: {
      title: 'À Propos',
      history: {
        title: 'Notre Histoire',
        description: 'Depuis plus de 10 ans, nous sommes votre partenaire de confiance pour tous vos besoins en pneus et automobile. Notre expertise et notre engagement envers la qualité nous ont établis comme une référence dans la région.'
      },
      values: [
        {
          title: 'Expertise',
          description: 'Une équipe qualifiée et expérimentée à votre service'
        },
        {
          title: 'Qualité',
          description: 'Des produits et services haut de gamme'
        },
        {
          title: 'Service',
          description: 'Un accompagnement personnalisé et professionnel'
        }
      ]
    },
    tires: {
      title: 'Nos Services Pneus',
      services: [
        {
          title: 'Montage de Pneus',
          description: 'Service professionnel de montage et équilibrage'
        },
        {
          title: 'Géométrie',
          description: 'Géométrie et parallélisme précis'
        },
        {
          title: 'Conseil Personnalisé',
          description: 'Expertise dans le choix des meilleurs pneus'
        }
      ],
      brands: {
        title: 'Marques Disponibles',
        list: ['Michelin', 'Goodyear', 'Continental', 'Pirelli', 'Bridgestone', 'Dunlop', 'Hankook', 'Yokohama']
      }
    },
    rims: {
      title: 'Nos Jantes',
      categories: [
        {
          title: 'Jantes Aluminium',
          description: 'Légères et élégantes pour des performances optimales',
          image: 'https://images.unsplash.com/photo-1611921059253-1938aa3c4e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Jantes Acier',
          description: 'Robustes et économiques pour un usage quotidien',
          image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Jantes Sport',
          description: 'Design sportif pour un look dynamique',
          image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      brands: {
        title: 'Marques de Jantes',
        list: ['BBS', 'OZ Racing', 'Enkei', 'Vossen', 'Work Wheels', 'Rotiform', 'HRE', 'ADV.1']
      }
    },
    technical: {
      title: 'Contrôle Technique',
      description: {
        title: 'Préparation au Contrôle Technique',
        content: "Notre garage vérifie l'état des pneus , le réglage des phares, les plaquettes et les disques de freins ainsi que les ammortisseurs et nous faisons éventuellement le petit entretien de votre voiture"
      },
      steps: [
        {
          title: 'Pré-contrôle',
          description: 'Inspection complète des pneus et petit entretien'
        },
        {
          title: 'Réparations',
          description: 'Correction des problèmes détectés'
        },
        {
          title: 'Garantie',
          description: 'Assurance de conformité aux normes en vigueur'
        }
      ]
    },
    leasing: {
      title: 'Solutions Leasing',
      intro: {
        title: 'Leasing Automobile Professionnel',
        description: 'Nous proposons des solutions de leasing flexibles adaptées à vos besoins professionnels. Gérez votre flotte facilement avec nos services complets.'
      },
      benefits: [
        {
          title: 'Coûts Maîtrisés',
          description: 'Budget mensuel fixe et prévisible'
        },
        {
          title: 'Flexibilité',
          description: 'Durée et kilométrage adaptables'
        },
        {
          title: 'Entretien Inclus',
          description: 'Service complet sans surprises'
        }
      ]
    },
    contact: {
      title: 'Contactez-Nous',
      form: {
        title: 'Envoyez-nous un message',
        name: 'Votre nom',
        email: 'Votre email',
        phone: 'Votre téléphone',
        message: 'Votre message',
        submit: 'Envoyer'
      },
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      location: 'Edingsesteenweg 67, 1540 Herne',
      weekdays: 'Lun-Ven: 8h-17h',
      saturday: 'Sam: 8h-12h',
      sunday: 'Dimanche: Fermé'
    }
  },
  nl: {
    // Dutch translations remain the same as they were complete and correct
    nav: {
      home: 'Home',
      about: 'Over ons',
      tires: 'Banden',
      rims: 'Velgen',
      technical: 'Technische Controle',
      leasing: 'Leasing',
      contact: 'Contact'
    },
    common: {
      learnMore: 'Meer info',
      contactUs: 'Contacteer ons',
      appointment: 'Afspraak maken'
    },
    hero: {
      title: 'Garage Banden Expert',
      subtitle: 'Uw specialist in banden, voor 90 jaar',
      cta: 'Afspraak maken'
    },
    special:{
      title:"De zomer staat voor de deur, vergeet niet uw banden te vervangen",
    },
    openingHours: {
      title: 'Openingsuren',
      currentStatus: 'Huidige Status',
      open: 'Open',
      closed: 'Gesloten',
      days: {
        monday: 'Maandag',
        tuesday: 'Dinsdag',
        wednesday: 'Woensdag',
        thursday: 'Donderdag',
        friday: 'Vrijdag',
        saturday: 'Zaterdag',
        sunday: 'Zondag'
      },
      special:"de garage zal gesloten zijn van 01/03 tot 03/03/."
    },
    services: {
      title: 'Onze Diensten',
      tires: {
        title: 'Bandendiensten',
        description: 'Montage, balancering en reparatie van banden door experts'
      },
      repairs: {
        title: 'Voorbereidingen',
        description: 'Klein onderhoud aan uw voertuig'
      }
    },
    about: {
      title: 'Over Ons',
      history: {
        title: 'Onze Geschiedenis',
        description: 'Al meer dan 10 jaar zijn wij uw vertrouwde partner voor al uw banden- en autobehoeften. Onze expertise en toewijding aan kwaliteit hebben ons tot een referentie in de regio gemaakt.'
      },
      values: [
        {
          title: 'Expertise',
          description: 'Een gekwalificeerd en ervaren team tot uw dienst'
        },
        {
          title: 'Kwaliteit',
          description: 'Hoogwaardige producten en diensten'
        },
        {
          title: 'Service',
          description: 'Persoonlijke en professionele begeleiding'
        }
      ]
    },
    tires: {
      title: 'Onze Bandendiensten',
      services: [
        {
          title: 'Bandenmontage',
          description: 'Professionele montage- en balanceringsdienst'
        },
        {
          title: 'Uitlijning',
          description: 'Nauwkeurige geometrie en parallellisme'
        },
        {
          title: 'Persoonlijk Advies',
          description: 'Expertise bij het kiezen van de beste banden'
        }
      ],
      brands: {
        title: 'Beschikbare Merken',
        list: ['Michelin', 'Goodyear', 'Continental', 'Pirelli', 'Bridgestone', 'Dunlop', 'Hankook', 'Yokohama']
      }
    },
    rims: {
      title: 'Onze Velgen',
      categories: [
        {
          title: 'Aluminium Velgen',
          description: 'Licht en elegant voor optimale prestaties',
          image: 'https://images.unsplash.com/photo-1611921059253-1938aa3c4e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Stalen Velgen',
          description: 'Robuust en economisch voor dagelijks gebruik',
          image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Sport Velgen',
          description: 'Sportief design voor een dynamische look',
          image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      brands: {
        title: 'Velgmerken',
        list: ['BBS', 'OZ Racing', 'Enkei', 'Vossen', 'Work Wheels', 'Rotiform', 'HRE', 'ADV.1']
      }
    },
    technical: {
      title: 'Technische Controle',
      description: {
        title: 'Voorbereiding op Technische Controle',
        content: 'Onze garage controleren de staat van de banden, de afstelling van de lichten, de remblokken en remschijven, evenals de schokdempers, en we voeren eventueel het kleine onderhoud van uw auto uit.'
      },
      steps: [
        {
          title: 'Voorcontrole',
          description: 'Volledige bandeninspectie en klein onderhoud'
        },
        {
          title: 'Reparaties',
          description: 'Correctie van gedetecteerde problemen'
        },
        {
          title: 'Garantie',
          description: 'Verzekering van conformiteit met geldende normen'
        }
      ]
    },
    leasing: {
      title: 'Leasing Oplossingen',
      intro: {
        title: 'Professionele Autoleasing',
        description: 'Wij bieden flexibele leasing oplossingen aangepast aan uw professionele behoeften. Beheer uw wagenpark eenvoudig met onze complete diensten.'
      },
      benefits: [
        {
          title: 'Beheerste Kosten',
          description: 'Vast en voorspelbaar maandelijks budget'
        },
        {
          title: 'Flexibiliteit',
          description: 'Aanpasbare duur en kilometerstand'
        },
        {
          title: 'Onderhoud Inbegrepen',
          description: 'Complete service zonder verrassingen'
        }
      ]
    },
    contact: {
      title: 'Contacteer Ons',
      form: {
        title: 'Stuur ons een bericht',
        name: 'Uw naam',
        email: 'Uw email',
        phone: 'Uw telefoon',
        message: 'Uw bericht',
        submit: 'Verzenden'
      },
      address: 'Adres',
      phone: 'Telefoon',
      email: 'Email',
      hours: 'Openingsuren',
      location: 'Tussen Herne en Edingen, België',
      weekdays: 'Ma-Vr: 8u-17u',
      saturday: 'Za: 8u-12u',
      sunday: 'Zondag: Gesloten'
    }
  }
};