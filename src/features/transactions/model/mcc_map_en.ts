interface MccEntry {
	mcc: string
	group: {
		type: string
		description: string
	}
	shortDescription: string
	fullDescription: string
}

// MCC codes json list (merchant category code (MCC) is a four-digit number
// used to classify a business by the types of goods or services it provides).
//
// The map was obtained from https://github.com/Oleksios/Merchant-Category-Codes
export const mccMap: Record<string, MccEntry> = {
	'1520': {
		mcc: '1520',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'General Contractors',
		fullDescription: 'General Contractors - Residential and Commercial',
	},
	'1711': {
		mcc: '1711',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Heating, Plumbing, A/C',
		fullDescription:
			'Air Conditioning Contractors - Sales and Installation, Heating Contractors - Sales, Service, Installation',
	},
	'1731': {
		mcc: '1731',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Electrical Contractors',
		fullDescription: 'Electrical Contractors',
	},
	'1740': {
		mcc: '1740',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Masonry, Stonework, and Plaster',
		fullDescription:
			'Insulation - Contractors, Masonry, Stonework Contractors, Plastering Contractors, Stonework and Masonry Contractors, Tile Settings Contractors',
	},
	'1750': {
		mcc: '1750',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Carpentry Contractors',
		fullDescription: 'Carpentry Contractors',
	},
	'1761': {
		mcc: '1761',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Roofing/Siding, Sheet Metal',
		fullDescription:
			'Roofing - Contractors, Sheet Metal Work - Contractors, Siding - Contractors',
	},
	'1771': {
		mcc: '1771',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Concrete Work Contractors',
		fullDescription: 'Contractors - Concrete Work',
	},
	'1799': {
		mcc: '1799',
		group: {
			type: 'CS',
			description: 'Contract services',
		},
		shortDescription: 'Special Trade Contractors',
		fullDescription: 'Contractors - Special Trade',
	},
	'2741': {
		mcc: '2741',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Miscellaneous Publishing and Printing',
		fullDescription: 'Miscellaneous Publishing and Printing',
	},
	'2744': {
		mcc: '2744',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Miscellaneous Publishing and Printing',
		fullDescription: 'Miscellaneous Publishing and Printing',
	},
	'2791': {
		mcc: '2791',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Typesetting, Plate Making',
		fullDescription: 'Typesetting, Plate Making & Related Services',
	},
	'2842': {
		mcc: '2842',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Specialty Cleaning',
		fullDescription:
			'Specialty Cleaning, Polishing, and Sanitation Preparations',
	},
	'3000': {
		mcc: '3000',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'United Airlines',
	},
	'3001': {
		mcc: '3001',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'American Airlines',
	},
	'3002': {
		mcc: '3002',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Pan American World Airways',
	},
	'3003': {
		mcc: '3003',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Eurofly',
	},
	'3004': {
		mcc: '3004',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Dragon Airlines',
	},
	'3005': {
		mcc: '3005',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'British Airways',
	},
	'3006': {
		mcc: '3006',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Japan Air Lines',
	},
	'3007': {
		mcc: '3007',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air France',
	},
	'3008': {
		mcc: '3008',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Lufthansa',
	},
	'3009': {
		mcc: '3009',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Canada',
	},
	'3010': {
		mcc: '3010',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'KLM (Royal Dutch Airlines)',
	},
	'3011': {
		mcc: '3011',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aeroflot - Russian Airlines',
	},
	'3012': {
		mcc: '3012',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Qantas',
	},
	'3013': {
		mcc: '3013',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Alitalia',
	},
	'3014': {
		mcc: '3014',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Saudi Arabian Airlines',
	},
	'3015': {
		mcc: '3015',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Swiss International Air Lines',
	},
	'3016': {
		mcc: '3016',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Scandinavian Airline System',
	},
	'3017': {
		mcc: '3017',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'South African Airways',
	},
	'3018': {
		mcc: '3018',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Varig (Brazil)',
	},
	'3019': {
		mcc: '3019',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3020': {
		mcc: '3020',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air India',
	},
	'3021': {
		mcc: '3021',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Algerie',
	},
	'3022': {
		mcc: '3022',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Philippine Airlines',
	},
	'3023': {
		mcc: '3023',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Mexicana de Aviación',
	},
	'3024': {
		mcc: '3024',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Pakistan International Airlines',
	},
	'3025': {
		mcc: '3025',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air New Zealand Limited International',
	},
	'3026': {
		mcc: '3026',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Emirates Airlines',
	},
	'3027': {
		mcc: '3027',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Union de Transports Aeriens',
	},
	'3028': {
		mcc: '3028',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Malta',
	},
	'3029': {
		mcc: '3029',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'SN Brussels Airlines',
	},
	'3030': {
		mcc: '3030',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aerolineas Argentinas',
	},
	'3031': {
		mcc: '3031',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Olympic Airways',
	},
	'3032': {
		mcc: '3032',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'El Al',
	},
	'3033': {
		mcc: '3033',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Ansett Airlines',
	},
	'3034': {
		mcc: '3034',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Etihad Airways',
	},
	'3035': {
		mcc: '3035',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Tap (Portugal)',
	},
	'3036': {
		mcc: '3036',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'VASP (Brazil)',
	},
	'3037': {
		mcc: '3037',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'EgyptAir',
	},
	'3038': {
		mcc: '3038',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Kuwait Airways',
	},
	'3039': {
		mcc: '3039',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Avianca',
	},
	'3040': {
		mcc: '3040',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Gulf Air (Bahrain)',
	},
	'3041': {
		mcc: '3041',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Balkan-Bulgarian Airlines',
	},
	'3042': {
		mcc: '3042',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Finnair',
	},
	'3043': {
		mcc: '3043',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aer Lingus (Ireland)',
	},
	'3044': {
		mcc: '3044',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Lanka',
	},
	'3045': {
		mcc: '3045',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Nigeria Airways',
	},
	'3046': {
		mcc: '3046',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Cruzeiro do Sul (Brazil)',
	},
	'3047': {
		mcc: '3047',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Turkish Airlines',
	},
	'3048': {
		mcc: '3048',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Royal Air Maroc',
	},
	'3049': {
		mcc: '3049',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Tunis Air',
	},
	'3050': {
		mcc: '3050',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Icelandair',
	},
	'3051': {
		mcc: '3051',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Austrian Airlines',
	},
	'3052': {
		mcc: '3052',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LATAM Chile Airlines',
	},
	'3053': {
		mcc: '3053',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'AVIACO (Spain)',
	},
	'3054': {
		mcc: '3054',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LADECO (Chile)',
	},
	'3055': {
		mcc: '3055',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LAB (Bolivia)',
	},
	'3056': {
		mcc: '3056',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Jet Airways (India)',
	},
	'3057': {
		mcc: '3057',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Virgin America',
	},
	'3058': {
		mcc: '3058',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Delta Air Lines',
	},
	'3059': {
		mcc: '3059',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'DBA Airlines',
	},
	'3060': {
		mcc: '3060',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Northwest Airlines (USA)',
	},
	'3061': {
		mcc: '3061',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Continental Airlines',
	},
	'3062': {
		mcc: '3062',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Hapag-Lloyd Express',
	},
	'3063': {
		mcc: '3063',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'U.S. Airways',
	},
	'3064': {
		mcc: '3064',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Adria Airways',
	},
	'3065': {
		mcc: '3065',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Inter',
	},
	'3066': {
		mcc: '3066',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Southwest Airlines (USA)',
	},
	'3067': {
		mcc: '3067',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Vanguard Airlines (USA)',
	},
	'3068': {
		mcc: '3068',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Astana',
	},
	'3069': {
		mcc: '3069',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Sun Country Airlines',
	},
	'3070': {
		mcc: '3070',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Pacific Southwest Airlines',
	},
	'3071': {
		mcc: '3071',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air British Columbia (Canada)',
	},
	'3072': {
		mcc: '3072',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Cebu Pacific (Philippines)',
	},
	'3073': {
		mcc: '3073',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air California',
	},
	'3074': {
		mcc: '3074',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3075': {
		mcc: '3075',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Singapore Airlines',
	},
	'3076': {
		mcc: '3076',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aeromexico',
	},
	'3077': {
		mcc: '3077',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Thai International Airlines',
	},
	'3078': {
		mcc: '3078',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'China Airlines',
	},
	'3079': {
		mcc: '3079',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Jetstar Airways (Australia)',
	},
	'3080': {
		mcc: '3080',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3081': {
		mcc: '3081',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Nordair (Canada)',
	},
	'3082': {
		mcc: '3082',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Korean Airlines',
	},
	'3083': {
		mcc: '3083',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Afrique',
	},
	'3084': {
		mcc: '3084',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Eva Airways (Taiwan)',
	},
	'3085': {
		mcc: '3085',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Midwest Express Airlines',
	},
	'3086': {
		mcc: '3086',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Carnival Airlines (USA)',
	},
	'3087': {
		mcc: '3087',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Metro Airlines',
	},
	'3088': {
		mcc: '3088',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Croatia Air',
	},
	'3089': {
		mcc: '3089',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Transaero (Russia)',
	},
	'3090': {
		mcc: '3090',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Uni Airways (Taiwan)',
	},
	'3091': {
		mcc: '3091',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3092': {
		mcc: '3092',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Midway Airlines (USA)',
	},
	'3093': {
		mcc: '3093',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3094': {
		mcc: '3094',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Zambia Airways',
	},
	'3095': {
		mcc: '3095',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3096': {
		mcc: '3096',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Zimbabwe',
	},
	'3097': {
		mcc: '3097',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Spanair',
	},
	'3098': {
		mcc: '3098',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Asiana Airlines',
	},
	'3099': {
		mcc: '3099',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Cathay Pacific (Hong Kong)',
	},
	'3100': {
		mcc: '3100',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Malaysian Airline System',
	},
	'3101': {
		mcc: '3101',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3102': {
		mcc: '3102',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Iberia (Spain)',
	},
	'3103': {
		mcc: '3103',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Garuda (Indonesia)',
	},
	'3104': {
		mcc: '3104',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3105': {
		mcc: '3105',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3106': {
		mcc: '3106',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Braathens S.A.F.E. (Norway)',
	},
	'3107': {
		mcc: '3107',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3108': {
		mcc: '3108',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3109': {
		mcc: '3109',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3110': {
		mcc: '3110',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3111': {
		mcc: '3111',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'British Midland Airways',
	},
	'3112': {
		mcc: '3112',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Windward Island',
	},
	'3113': {
		mcc: '3113',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3114': {
		mcc: '3114',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3115': {
		mcc: '3115',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3116': {
		mcc: '3116',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3117': {
		mcc: '3117',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Venezolana International de Aviacion',
	},
	'3118': {
		mcc: '3118',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Valley International Airport',
	},
	'3119': {
		mcc: '3119',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3120': {
		mcc: '3120',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3121': {
		mcc: '3121',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3122': {
		mcc: '3122',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3123': {
		mcc: '3123',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3124': {
		mcc: '3124',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3125': {
		mcc: '3125',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Tan Airlines',
	},
	'3126': {
		mcc: '3126',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Talair (Papua New Guinea)',
	},
	'3127': {
		mcc: '3127',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'TACA International',
	},
	'3128': {
		mcc: '3128',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3129': {
		mcc: '3129',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Surinam Airways',
	},
	'3130': {
		mcc: '3130',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Sunworld International Airways',
	},
	'3131': {
		mcc: '3131',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'VLM Airlines (Belgium)',
	},
	'3132': {
		mcc: '3132',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Frontier Airlines (USA)',
	},
	'3133': {
		mcc: '3133',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Sunbelt Airlines',
	},
	'3134': {
		mcc: '3134',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3135': {
		mcc: '3135',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Sudan Airways',
	},
	'3136': {
		mcc: '3136',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Qatar Airways',
	},
	'3137': {
		mcc: '3137',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Singleton',
	},
	'3138': {
		mcc: '3138',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Simmons Airlines (USA)',
	},
	'3139': {
		mcc: '3139',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3140': {
		mcc: '3140',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3141': {
		mcc: '3141',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3142': {
		mcc: '3142',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3143': {
		mcc: '3143',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Scenic Airlines (USA)',
	},
	'3144': {
		mcc: '3144',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Virgin Atlantic (USA)',
	},
	'3145': {
		mcc: '3145',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'San Juan Airlines',
	},
	'3146': {
		mcc: '3146',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Luxair (Luxembourg)',
	},
	'3147': {
		mcc: '3147',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3148': {
		mcc: '3148',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Littoral (France)',
	},
	'3149': {
		mcc: '3149',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3150': {
		mcc: '3150',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3151': {
		mcc: '3151',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Zaire',
	},
	'3152': {
		mcc: '3152',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3153': {
		mcc: '3153',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3154': {
		mcc: '3154',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Princeville',
	},
	'3155': {
		mcc: '3155',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3156': {
		mcc: '3156',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'GO FLY Airline',
	},
	'3157': {
		mcc: '3157',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3158': {
		mcc: '3158',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3159': {
		mcc: '3159',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Provincetown-Boston Airways',
	},
	'3160': {
		mcc: '3160',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3161': {
		mcc: '3161',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'All Nippon Airways (Japan)',
	},
	'3162': {
		mcc: '3162',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3163': {
		mcc: '3163',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3164': {
		mcc: '3164',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Norontair (Canada)',
	},
	'3165': {
		mcc: '3165',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3166': {
		mcc: '3166',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3167': {
		mcc: '3167',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aero Continente (Peru)',
	},
	'3168': {
		mcc: '3168',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3169': {
		mcc: '3169',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3170': {
		mcc: '3170',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Mount Cook',
	},
	'3171': {
		mcc: '3171',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Canadian Airlines',
	},
	'3172': {
		mcc: '3172',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'National Airlines (USA)',
	},
	'3173': {
		mcc: '3173',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3174': {
		mcc: '3174',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'JetBlue Airways (USA)',
	},
	'3175': {
		mcc: '3175',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Middle East Air (Lebanon)',
	},
	'3176': {
		mcc: '3176',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Metroflight airlines (USA)',
	},
	'3177': {
		mcc: '3177',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'AirTran Airways (USA)',
	},
	'3178': {
		mcc: '3178',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Mesa Air (USA)',
	},
	'3179': {
		mcc: '3179',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3180': {
		mcc: '3180',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Westjet Airlines (Canada)',
	},
	'3181': {
		mcc: '3181',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Malev Hungarian Airlines',
	},
	'3182': {
		mcc: '3182',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LOT - Polish Airlines',
	},
	'3183': {
		mcc: '3183',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Oman Aviation Services',
	},
	'3184': {
		mcc: '3184',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LIAT (Antigua and Barbuda)',
	},
	'3185': {
		mcc: '3185',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LAV (Venezuela)',
	},
	'3186': {
		mcc: '3186',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'LAP (Paraguay)',
	},
	'3187': {
		mcc: '3187',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Avianca Costa Rica',
	},
	'3188': {
		mcc: '3188',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Virgin Express (Belgium)',
	},
	'3189': {
		mcc: '3189',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3190': {
		mcc: '3190',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Jugoslav Air (Serbia)',
	},
	'3191': {
		mcc: '3191',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Island Airlines (USA)',
	},
	'3192': {
		mcc: '3192',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Iran Air',
	},
	'3193': {
		mcc: '3193',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Indian Airlines',
	},
	'3194': {
		mcc: '3194',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3195': {
		mcc: '3195',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3196': {
		mcc: '3196',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Hawaiian Airlines',
	},
	'3197': {
		mcc: '3197',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Havasu Airlines',
	},
	'3198': {
		mcc: '3198',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3199': {
		mcc: '3199',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Servicios Aereos Militares',
	},
	'3200': {
		mcc: '3200',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Guyana Airways',
	},
	'3201': {
		mcc: '3201',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3202': {
		mcc: '3202',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3203': {
		mcc: '3203',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Golden Pacific Airlines (USA)',
	},
	'3204': {
		mcc: '3204',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Freedom Airline Express (Kenya)',
	},
	'3205': {
		mcc: '3205',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3206': {
		mcc: '3206',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'China Eastern Airlines',
	},
	'3207': {
		mcc: '3207',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3208': {
		mcc: '3208',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3209': {
		mcc: '3209',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3210': {
		mcc: '3210',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3211': {
		mcc: '3211',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Norwegian Air Shuttle',
	},
	'3212': {
		mcc: '3212',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Dominicana de Aviacion',
	},
	'3213': {
		mcc: '3213',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Braathens Regional Airlines (Sweden)',
	},
	'3214': {
		mcc: '3214',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3215': {
		mcc: '3215',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Dan-Air (United Kingdom)',
	},
	'3216': {
		mcc: '3216',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Greater Cumberland Regional Airport',
	},
	'3217': {
		mcc: '3217',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'CSA Ceskoslovenske Aerolinie',
	},
	'3218': {
		mcc: '3218',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Crown Airways (USA)',
	},
	'3219': {
		mcc: '3219',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Compania Panamena de Aviacion',
	},
	'3220': {
		mcc: '3220',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Compania Faucett (Peru)',
	},
	'3221': {
		mcc: '3221',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Transportes Aeros Militares Ecuatorianos',
	},
	'3222': {
		mcc: '3222',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Command Airways (USA)',
	},
	'3223': {
		mcc: '3223',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Comair (South Africa)',
	},
	'3224': {
		mcc: '3224',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3225': {
		mcc: '3225',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3226': {
		mcc: '3226',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Skyways Express (Sweden)',
	},
	'3227': {
		mcc: '3227',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3228': {
		mcc: '3228',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Cayman Airways',
	},
	'3229': {
		mcc: '3229',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Sociedad Ecuatorianas De Transportes Aereo',
	},
	'3230': {
		mcc: '3230',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3231': {
		mcc: '3231',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Servicio Aero de Honduras',
	},
	'3232': {
		mcc: '3232',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3233': {
		mcc: '3233',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Capitol Air',
	},
	'3234': {
		mcc: '3234',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Caribbean Airlines / West Indies Airways',
	},
	'3235': {
		mcc: '3235',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Brockway Air',
	},
	'3236': {
		mcc: '3236',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Arabia Airline (United Arab Emirates)',
	},
	'3237': {
		mcc: '3237',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3238': {
		mcc: '3238',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Bemidji Airlines (USA)',
	},
	'3239': {
		mcc: '3239',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Bar Harbor Airlines (USA)',
	},
	'3240': {
		mcc: '3240',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Bahamasair (Bahamas)',
	},
	'3241': {
		mcc: '3241',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Avianca (Guatemala)',
	},
	'3242': {
		mcc: '3242',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Avensa (Venezuela)',
	},
	'3243': {
		mcc: '3243',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Austrian Airlines',
	},
	'3244': {
		mcc: '3244',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3245': {
		mcc: '3245',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'EasyJet (United Kingdom)',
	},
	'3246': {
		mcc: '3246',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Ryanair',
	},
	'3247': {
		mcc: '3247',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Gol Airlines (Brazil)',
	},
	'3248': {
		mcc: '3248',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Tam Airlines (Brazil)',
	},
	'3249': {
		mcc: '3249',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3250': {
		mcc: '3250',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3251': {
		mcc: '3251',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aloha Airlines (USA)',
	},
	'3252': {
		mcc: '3252',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'ALM Antilean Airlines',
	},
	'3253': {
		mcc: '3253',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'America West Airlines',
	},
	'3254': {
		mcc: '3254',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Trump Airline',
	},
	'3255': {
		mcc: '3255',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3256': {
		mcc: '3256',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Alaska Airlines',
	},
	'3257': {
		mcc: '3257',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3258': {
		mcc: '3258',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3259': {
		mcc: '3259',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'American Trans Air',
	},
	'3260': {
		mcc: '3260',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Spirit Airlines (USA)',
	},
	'3261': {
		mcc: '3261',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air China',
	},
	'3262': {
		mcc: '3262',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Reno Air, Inc. / American Airlines',
	},
	'3263': {
		mcc: '3263',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aserca Airlines / Aero Servicio Carabobo (Venezuela)',
	},
	'3264': {
		mcc: '3264',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3265': {
		mcc: '3265',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3266': {
		mcc: '3266',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Seychelles',
	},
	'3267': {
		mcc: '3267',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Panama International',
	},
	'3268': {
		mcc: '3268',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3269': {
		mcc: '3269',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3270': {
		mcc: '3270',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3271': {
		mcc: '3271',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3272': {
		mcc: '3272',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3273': {
		mcc: '3273',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3274': {
		mcc: '3274',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3275': {
		mcc: '3275',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3276': {
		mcc: '3276',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3277': {
		mcc: '3277',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3278': {
		mcc: '3278',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3279': {
		mcc: '3279',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3280': {
		mcc: '3280',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Jamaica',
	},
	'3281': {
		mcc: '3281',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Djibouti',
	},
	'3282': {
		mcc: '3282',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Djibouti',
	},
	'3283': {
		mcc: '3283',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3284': {
		mcc: '3284',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aero Virgin Islands',
	},
	'3285': {
		mcc: '3285',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aero Peru',
	},
	'3286': {
		mcc: '3286',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aero Nicaraguenses',
	},
	'3287': {
		mcc: '3287',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Aero Coach Aviation',
	},
	'3288': {
		mcc: '3288',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3289': {
		mcc: '3289',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3290': {
		mcc: '3290',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Airlines',
	},
	'3291': {
		mcc: '3291',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Ariana Afghan Airlines',
	},
	'3292': {
		mcc: '3292',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Cyprus Airways',
	},
	'3293': {
		mcc: '3293',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Ecuatoriana de Aviación',
	},
	'3294': {
		mcc: '3294',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Ethiopian Airlines',
	},
	'3295': {
		mcc: '3295',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Kenya Airways',
	},
	'3296': {
		mcc: '3296',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Berlin',
	},
	'3297': {
		mcc: '3297',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'TAROM / Romanian Air Transport',
	},
	'3298': {
		mcc: '3298',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Mauritius',
	},
	'3299': {
		mcc: '3299',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Wideroes Flyveselskap (Norway)',
	},
	'3300': {
		mcc: '3300',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Azul Airlines (Brazil)',
	},
	'3301': {
		mcc: '3301',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Wizz Air (Hungary)',
	},
	'3302': {
		mcc: '3302',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Flybe Air (United Kingdom)',
	},
	'3351': {
		mcc: '3351',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Affiliated Auto Rental',
	},
	'3352': {
		mcc: '3352',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'American Intl Rent-a-car',
	},
	'3353': {
		mcc: '3353',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Brooks Rent-a-car',
	},
	'3354': {
		mcc: '3354',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Action Auto Rental',
	},
	'3355': {
		mcc: '3355',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3356': {
		mcc: '3356',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3357': {
		mcc: '3357',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Hertz Rent-a-car',
	},
	'3358': {
		mcc: '3358',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3359': {
		mcc: '3359',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Payless Car Rental',
	},
	'3360': {
		mcc: '3360',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Snappy Car Rental',
	},
	'3361': {
		mcc: '3361',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Airways Rent-a-car',
	},
	'3362': {
		mcc: '3362',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Altra Auto Rental',
	},
	'3363': {
		mcc: '3363',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3364': {
		mcc: '3364',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Agency Rent-a-car',
	},
	'3365': {
		mcc: '3365',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3366': {
		mcc: '3366',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Budget Rent a Car',
	},
	'3367': {
		mcc: '3367',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3368': {
		mcc: '3368',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Holiday Rent-a-wreck',
	},
	'3369': {
		mcc: '3369',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3370': {
		mcc: '3370',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Rent-a-wreck',
	},
	'3371': {
		mcc: '3371',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3372': {
		mcc: '3372',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3373': {
		mcc: '3373',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3374': {
		mcc: '3374',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3375': {
		mcc: '3375',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3376': {
		mcc: '3376',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Ajax Rent-a-car',
	},
	'3377': {
		mcc: '3377',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3378': {
		mcc: '3378',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3379': {
		mcc: '3379',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3380': {
		mcc: '3380',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3381': {
		mcc: '3381',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Europ Car',
	},
	'3382': {
		mcc: '3382',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3383': {
		mcc: '3383',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3384': {
		mcc: '3384',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3385': {
		mcc: '3385',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Tropical Rent-a-car',
	},
	'3386': {
		mcc: '3386',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Showcase Rental Cars',
	},
	'3387': {
		mcc: '3387',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Alamo Rent-a-car',
	},
	'3388': {
		mcc: '3388',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3389': {
		mcc: '3389',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Avis Rent-a-car',
	},
	'3390': {
		mcc: '3390',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Dollar Rent-a-car',
	},
	'3391': {
		mcc: '3391',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Europe By Car',
	},
	'3392': {
		mcc: '3392',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3393': {
		mcc: '3393',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'National Car Rental',
	},
	'3394': {
		mcc: '3394',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Kemwell Group Rent-a-car',
	},
	'3395': {
		mcc: '3395',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Thrifty Rent-a-car',
	},
	'3396': {
		mcc: '3396',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Tilden Tent-a-car',
	},
	'3397': {
		mcc: '3397',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3398': {
		mcc: '3398',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Econo-car Rent-a-car',
	},
	'3399': {
		mcc: '3399',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Amerex Rent-a-Car',
	},
	'3400': {
		mcc: '3400',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Auto Host Cost Car Rentals',
	},
	'3401': {
		mcc: '3401',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3402': {
		mcc: '3402',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3403': {
		mcc: '3403',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3404': {
		mcc: '3404',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3405': {
		mcc: '3405',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Enterprise Rent-a-car',
	},
	'3406': {
		mcc: '3406',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3407': {
		mcc: '3407',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3408': {
		mcc: '3408',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3409': {
		mcc: '3409',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'General Rent-a-car',
	},
	'3410': {
		mcc: '3410',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3411': {
		mcc: '3411',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3412': {
		mcc: '3412',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'A-1 Rent-a-car',
	},
	'3413': {
		mcc: '3413',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3414': {
		mcc: '3414',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Godfrey Natl Rent-a-car',
	},
	'3415': {
		mcc: '3415',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3416': {
		mcc: '3416',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3417': {
		mcc: '3417',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3418': {
		mcc: '3418',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3419': {
		mcc: '3419',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Alpha Rent-a-car',
	},
	'3420': {
		mcc: '3420',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Ansa Intl Rent-a-car',
	},
	'3421': {
		mcc: '3421',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Allstae Rent-a-car',
	},
	'3422': {
		mcc: '3422',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3423': {
		mcc: '3423',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Avcar Rent-a-car',
	},
	'3424': {
		mcc: '3424',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3425': {
		mcc: '3425',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Automate Rent-a-car',
	},
	'3426': {
		mcc: '3426',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3427': {
		mcc: '3427',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Avon Rent-a-car',
	},
	'3428': {
		mcc: '3428',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Carey Rent-a-car',
	},
	'3429': {
		mcc: '3429',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Insurance Rent-a-car',
	},
	'3430': {
		mcc: '3430',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Major Rent-a-car',
	},
	'3431': {
		mcc: '3431',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Replacement Rent-a-car',
	},
	'3432': {
		mcc: '3432',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Reserve Rent-a-car',
	},
	'3433': {
		mcc: '3433',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Ugly Duckling Rent-a-car',
	},
	'3434': {
		mcc: '3434',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'USA Rent-a-car',
	},
	'3435': {
		mcc: '3435',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Value Rent-a-car',
	},
	'3436': {
		mcc: '3436',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Autohansa Rent-a-car',
	},
	'3437': {
		mcc: '3437',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Cite Rent-a-car',
	},
	'3438': {
		mcc: '3438',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Interent Rent-a-car',
	},
	'3439': {
		mcc: '3439',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Milleville Rent-a-car',
	},
	'3440': {
		mcc: '3440',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Via Route Rent-a-Car',
	},
	'3441': {
		mcc: '3441',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Car rental agencies',
	},
	'3501': {
		mcc: '3501',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Holiday Inns',
	},
	'3502': {
		mcc: '3502',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Best Western Hotels & Resorts',
	},
	'3503': {
		mcc: '3503',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sheraton Hotels and Resorts',
	},
	'3504': {
		mcc: '3504',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hilton Hotels & Resorts',
	},
	'3505': {
		mcc: '3505',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rocco Forte Hotels',
	},
	'3506': {
		mcc: '3506',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Golden Tulip Hotels',
	},
	'3507': {
		mcc: '3507',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Friendship Inns',
	},
	'3508': {
		mcc: '3508',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Quality Inns',
	},
	'3509': {
		mcc: '3509',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Marriott Hotels',
	},
	'3510': {
		mcc: '3510',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Days Inn',
	},
	'3511': {
		mcc: '3511',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Arabella Hotels',
	},
	'3512': {
		mcc: '3512',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Inter-continental Hotels',
	},
	'3513': {
		mcc: '3513',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Westin Hotels & Resorts',
	},
	'3514': {
		mcc: '3514',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'AmeriSuites Hotels',
	},
	'3515': {
		mcc: '3515',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rodeway Inns',
	},
	'3516': {
		mcc: '3516',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'La Quinta Motor Inns',
	},
	'3517': {
		mcc: '3517',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Americana Hotels',
	},
	'3518': {
		mcc: '3518',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sol Hotels',
	},
	'3519': {
		mcc: '3519',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Pullman International Hotels',
	},
	'3520': {
		mcc: '3520',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Meridien Hotels',
	},
	'3521': {
		mcc: '3521',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Forte Crest Hotels',
	},
	'3522': {
		mcc: '3522',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Tokyo Hotel',
	},
	'3523': {
		mcc: '3523',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Peninsula Hotels',
	},
	'3524': {
		mcc: '3524',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Welcomgroup Hotels',
	},
	'3525': {
		mcc: '3525',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Dunfey Hotels',
	},
	'3526': {
		mcc: '3526',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Prince Hotels',
	},
	'3527': {
		mcc: '3527',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Downtowner-passport Hotel',
	},
	'3528': {
		mcc: '3528',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Red Lion Hotels',
	},
	'3529': {
		mcc: '3529',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Canadian Pacific Hotels',
	},
	'3530': {
		mcc: '3530',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Renaissance Hotels',
	},
	'3531': {
		mcc: '3531',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Astir Hotels',
	},
	'3532': {
		mcc: '3532',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sun Route Hotels',
	},
	'3533': {
		mcc: '3533',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Ibis',
	},
	'3534': {
		mcc: '3534',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Southern Pacific Hotels',
	},
	'3535': {
		mcc: '3535',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hilton International',
	},
	'3536': {
		mcc: '3536',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Amfac Hotels',
	},
	'3537': {
		mcc: '3537',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'ANA Hotel',
	},
	'3538': {
		mcc: '3538',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Concorde Hotels',
	},
	'3539': {
		mcc: '3539',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Summerfield Suites Hotels',
	},
	'3540': {
		mcc: '3540',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Iberotel Hotels',
	},
	'3541': {
		mcc: '3541',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Okura Hotels & Resorts',
	},
	'3542': {
		mcc: '3542',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Royal Hotels',
	},
	'3543': {
		mcc: '3543',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Four Seasons Hotels',
	},
	'3544': {
		mcc: '3544',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ciga Hotels',
	},
	'3545': {
		mcc: '3545',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Shangri-La Hotels and Resorts',
	},
	'3546': {
		mcc: '3546',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Sierra',
	},
	'3547': {
		mcc: '3547',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Breakers Resort',
	},
	'3548': {
		mcc: '3548',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Melia Hotels International',
	},
	'3549': {
		mcc: '3549',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Auberge Des Governeurs',
	},
	'3550': {
		mcc: '3550',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Regal 8 Inns',
	},
	'3551': {
		mcc: '3551',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Mirage Hotels and Casino',
	},
	'3552': {
		mcc: '3552',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Coast Hotels',
	},
	'3553': {
		mcc: '3553',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Park Inns International',
	},
	'3554': {
		mcc: '3554',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Pinehurst Resort',
	},
	'3555': {
		mcc: '3555',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Treasure Island Hotel and Casino',
	},
	'3556': {
		mcc: '3556',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Barton Creek Resort',
	},
	'3557': {
		mcc: '3557',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Manhattan East Suite Hotels',
	},
	'3558': {
		mcc: '3558',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Jolly Hotels',
	},
	'3559': {
		mcc: '3559',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Candleood Suites',
	},
	'3560': {
		mcc: '3560',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Alladin Resort and Casino',
	},
	'3561': {
		mcc: '3561',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Golden Nugget',
	},
	'3562': {
		mcc: '3562',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Comfort Inns',
	},
	'3563': {
		mcc: '3563',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Journey’s End Motеls',
	},
	'3564': {
		mcc: '3564',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sam Town Hotel and Casino',
	},
	'3565': {
		mcc: '3565',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Relax Inns',
	},
	'3566': {
		mcc: '3566',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Garden Place Hotel',
	},
	'3567': {
		mcc: '3567',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Soho Grand Hotel',
	},
	'3568': {
		mcc: '3568',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ladbroke Hotels',
	},
	'3569': {
		mcc: '3569',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Tribeca Grand Hotels',
	},
	'3570': {
		mcc: '3570',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Grand Met Forum Hotels',
	},
	'3571': {
		mcc: '3571',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Grand Wailea Hotels',
	},
	'3572': {
		mcc: '3572',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Miyako Hotels & Resorts',
	},
	'3573': {
		mcc: '3573',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sandman Hotels',
	},
	'3574': {
		mcc: '3574',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Venture Inns',
	},
	'3575': {
		mcc: '3575',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Vagabond Hotels',
	},
	'3576': {
		mcc: '3576',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'La Quinta Resort',
	},
	'3577': {
		mcc: '3577',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Mandarin Oriental Hotel',
	},
	'3578': {
		mcc: '3578',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Bavarian Inn Lodge',
	},
	'3579': {
		mcc: '3579',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Mercure',
	},
	'3580': {
		mcc: '3580',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Del Coronado',
	},
	'3581': {
		mcc: '3581',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Delta Hotels',
	},
	'3582': {
		mcc: '3582',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'California Hotel and Casino',
	},
	'3583': {
		mcc: '3583',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Radisson Blue Hotel',
	},
	'3584': {
		mcc: '3584',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Princess Hotels International',
	},
	'3585': {
		mcc: '3585',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hungary Hotels',
	},
	'3586': {
		mcc: '3586',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sokos Hotels',
	},
	'3587': {
		mcc: '3587',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Doral Hotels',
	},
	'3588': {
		mcc: '3588',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Helmsley Hotels',
	},
	'3589': {
		mcc: '3589',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Doral Golf Resort',
	},
	'3590': {
		mcc: '3590',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Fairmont Hotels',
	},
	'3591': {
		mcc: '3591',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sonesta Hotels',
	},
	'3592': {
		mcc: '3592',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Omni Hotels & Resorts',
	},
	'3593': {
		mcc: '3593',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Cunard Hotels',
	},
	'3594': {
		mcc: '3594',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Arizona Biltmore, A Waldorf Astoria Resort',
	},
	'3595': {
		mcc: '3595',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hospitality International',
	},
	'3596': {
		mcc: '3596',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Wynn Las Vegas',
	},
	'3597': {
		mcc: '3597',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Riverside Resort and Casino',
	},
	'3598': {
		mcc: '3598',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Regent Hotels & Resorts',
	},
	'3599': {
		mcc: '3599',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Pannonia Hotels',
	},
	'3600': {
		mcc: '3600',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Saddlebrook Resort',
	},
	'3601': {
		mcc: '3601',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'TradeWinds Island Grand Resort',
	},
	'3602': {
		mcc: '3602',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hudson Hotel',
	},
	'3603': {
		mcc: '3603',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Noah\'s Ark Hotel and Resort',
	},
	'3604': {
		mcc: '3604',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hilton Garden Inn',
	},
	'3605': {
		mcc: '3605',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Jurys Inn',
	},
	'3606': {
		mcc: '3606',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Jefferson Hotel',
	},
	'3607': {
		mcc: '3607',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Fontainebleau Resort',
	},
	'3608': {
		mcc: '3608',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Gaylord Opryland Resort',
	},
	'3609': {
		mcc: '3609',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Gaylord Palms Resort',
	},
	'3610': {
		mcc: '3610',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Gaylord Texan Resort',
	},
	'3611': {
		mcc: '3611',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'C\'mon Inn Hotel & Suites',
	},
	'3612': {
		mcc: '3612',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Movenpick Hotels & Resorts',
	},
	'3613': {
		mcc: '3613',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Microtel Inn and Suites',
	},
	'3614': {
		mcc: '3614',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'AmericInn',
	},
	'3615': {
		mcc: '3615',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Travelodge Hotels',
	},
	'3616': {
		mcc: '3616',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hermitage Hotels',
	},
	'3617': {
		mcc: '3617',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'America’s Best Value Inn',
	},
	'3618': {
		mcc: '3618',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Great Wolf Resorts',
	},
	'3619': {
		mcc: '3619',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Aloft Hotels',
	},
	'3620': {
		mcc: '3620',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Binions Horseshoe Club',
	},
	'3621': {
		mcc: '3621',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Extended Stay',
	},
	'3622': {
		mcc: '3622',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Merlin Hotel (Perth)',
	},
	'3623': {
		mcc: '3623',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Dorint Hotels & Resort',
	},
	'3624': {
		mcc: '3624',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Lady Luck Hotel and Casino',
	},
	'3625': {
		mcc: '3625',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Universal',
	},
	'3626': {
		mcc: '3626',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Prince Hotels / Studio Plus Hotel',
	},
	'3627': {
		mcc: '3627',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Extended Stay America',
	},
	'3628': {
		mcc: '3628',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Excalibur Hotel and Casino',
	},
	'3629': {
		mcc: '3629',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Dan Hotels',
	},
	'3630': {
		mcc: '3630',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Extended Stay Deluxe',
	},
	'3631': {
		mcc: '3631',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sleep Inn',
	},
	'3632': {
		mcc: '3632',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Phoenician Resort',
	},
	'3633': {
		mcc: '3633',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rank Hotels',
	},
	'3634': {
		mcc: '3634',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Swissôtel Hotels & Resorts',
	},
	'3635': {
		mcc: '3635',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Reso Hotels',
	},
	'3636': {
		mcc: '3636',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sarova Hotels',
	},
	'3637': {
		mcc: '3637',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ramada Inns',
	},
	'3638': {
		mcc: '3638',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Howard Johnson Hotels',
	},
	'3639': {
		mcc: '3639',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Mount Charlotte Hotels',
	},
	'3640': {
		mcc: '3640',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hyatt Hotels/International',
	},
	'3641': {
		mcc: '3641',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sofitel Hotels & Resorts',
	},
	'3642': {
		mcc: '3642',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Novotel Sieh (Accor)',
	},
	'3643': {
		mcc: '3643',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Steigenberger Hotels and Resorts',
	},
	'3644': {
		mcc: '3644',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Econo-Travel Motor Hotel',
	},
	'3645': {
		mcc: '3645',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Queens Moat Houses',
	},
	'3646': {
		mcc: '3646',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Swallow Hotels',
	},
	'3647': {
		mcc: '3647',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'HUSA Hotels',
	},
	'3648': {
		mcc: '3648',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'De Vere Hotels',
	},
	'3649': {
		mcc: '3649',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Radisson Hotels',
	},
	'3650': {
		mcc: '3650',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Red Roof Inns',
	},
	'3651': {
		mcc: '3651',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Imperial London Hotels',
	},
	'3652': {
		mcc: '3652',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Embassy Suites Hotels by Hilton',
	},
	'3653': {
		mcc: '3653',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Penta Hotels',
	},
	'3654': {
		mcc: '3654',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Loews Hotels',
	},
	'3655': {
		mcc: '3655',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Scandic Hotels',
	},
	'3656': {
		mcc: '3656',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sara Hotels',
	},
	'3657': {
		mcc: '3657',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Oberoi Hotels & Resorts',
	},
	'3658': {
		mcc: '3658',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'New Otani Hotels',
	},
	'3659': {
		mcc: '3659',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Taj Hotels Intl',
	},
	'3660': {
		mcc: '3660',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Knights Inn',
	},
	'3661': {
		mcc: '3661',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Metropole Hotel and SPA',
	},
	'3662': {
		mcc: '3662',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Circus Circus Hotel and Casino',
	},
	'3663': {
		mcc: '3663',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hoteles El Presidente',
	},
	'3664': {
		mcc: '3664',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Flag Inns',
	},
	'3665': {
		mcc: '3665',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hampton Inns by Hilton',
	},
	'3666': {
		mcc: '3666',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Stakis Hotels',
	},
	'3667': {
		mcc: '3667',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Luxor Hotel and Casino',
	},
	'3668': {
		mcc: '3668',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Maritim',
	},
	'3669': {
		mcc: '3669',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Eldorado Hotel and Casino',
	},
	'3670': {
		mcc: '3670',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Arcade Hotel',
	},
	'3671': {
		mcc: '3671',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Arctia Hotels',
	},
	'3672': {
		mcc: '3672',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Campanile Hotel',
	},
	'3673': {
		mcc: '3673',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ibusz Hotels',
	},
	'3674': {
		mcc: '3674',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rantasipi Hotels',
	},
	'3675': {
		mcc: '3675',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Interhotel Cedok',
	},
	'3676': {
		mcc: '3676',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Monte Carlo Hotel and Casino',
	},
	'3677': {
		mcc: '3677',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Climat De France Hotels',
	},
	'3678': {
		mcc: '3678',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Cumulus Hotels',
	},
	'3679': {
		mcc: '3679',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Silver Legacy Hotel and Casino',
	},
	'3680': {
		mcc: '3680',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hoteis Othan',
	},
	'3681': {
		mcc: '3681',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Adams Mark Hotels',
	},
	'3682': {
		mcc: '3682',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sahara Hotel and Casino',
	},
	'3683': {
		mcc: '3683',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Bradbury Suites',
	},
	'3684': {
		mcc: '3684',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Budget Host Hotels',
	},
	'3685': {
		mcc: '3685',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Budgetel',
	},
	'3686': {
		mcc: '3686',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Suisse Chalet Hotels',
	},
	'3687': {
		mcc: '3687',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Clarion Hotels',
	},
	'3688': {
		mcc: '3688',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Compri Hotel Bucks County',
	},
	'3689': {
		mcc: '3689',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Consort Hotel',
	},
	'3690': {
		mcc: '3690',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Courtyard by Marriott Hotel',
	},
	'3691': {
		mcc: '3691',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Dillon Inn',
	},
	'3692': {
		mcc: '3692',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'DoubleTree by Hilton',
	},
	'3693': {
		mcc: '3693',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Drury Hotels',
	},
	'3694': {
		mcc: '3694',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Economy Inns Of America',
	},
	'3695': {
		mcc: '3695',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Embassy Suites by Hilton',
	},
	'3696': {
		mcc: '3696',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Excel Inn',
	},
	'3697': {
		mcc: '3697',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Fairfield Hotel by Marriott',
	},
	'3698': {
		mcc: '3698',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Harley Hotel',
	},
	'3699': {
		mcc: '3699',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Midway Motor Lodge',
	},
	'3700': {
		mcc: '3700',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Motel 6',
	},
	'3701': {
		mcc: '3701',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'La Mansion Del Rio',
	},
	'3702': {
		mcc: '3702',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Registry Hotels',
	},
	'3703': {
		mcc: '3703',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Residence Inn by Marriott',
	},
	'3704': {
		mcc: '3704',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Royce Hotel',
	},
	'3705': {
		mcc: '3705',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sandman Inn',
	},
	'3706': {
		mcc: '3706',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Shilo Inn',
	},
	'3707': {
		mcc: '3707',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Shoneys Inn',
	},
	'3708': {
		mcc: '3708',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Virgin River Hotel and Casino',
	},
	'3709': {
		mcc: '3709',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Super 8 Motel',
	},
	'3710': {
		mcc: '3710',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ritz-Carlton Hotel',
	},
	'3711': {
		mcc: '3711',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Flag Inns (Australia)',
	},
	'3712': {
		mcc: '3712',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Buffalo Bills Hotel and Casino',
	},
	'3713': {
		mcc: '3713',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Quality Pacific Hotel',
	},
	'3714': {
		mcc: '3714',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Four Seasons Hotels (Australia)',
	},
	'3715': {
		mcc: '3715',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Fairfield Inn',
	},
	'3716': {
		mcc: '3716',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Carlton Hotels',
	},
	'3717': {
		mcc: '3717',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'City Lodge Hotels',
	},
	'3718': {
		mcc: '3718',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Karos Hotels',
	},
	'3719': {
		mcc: '3719',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Protea Hotels by Marriott',
	},
	'3720': {
		mcc: '3720',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Southern Sun Hotels',
	},
	'3721': {
		mcc: '3721',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Conrad Hotels',
	},
	'3722': {
		mcc: '3722',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Wyndham Hotels & Resorts',
	},
	'3723': {
		mcc: '3723',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rica Hotels',
	},
	'3724': {
		mcc: '3724',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Inter Nor Hotels',
	},
	'3725': {
		mcc: '3725',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sea Pines Resort',
	},
	'3726': {
		mcc: '3726',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rio Suites',
	},
	'3727': {
		mcc: '3727',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Broadmoor Hotel',
	},
	'3728': {
		mcc: '3728',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ballys Hotel and Casino',
	},
	'3729': {
		mcc: '3729',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Nugget Casino Resort',
	},
	'3730': {
		mcc: '3730',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'MGM Grand Hotel',
	},
	'3731': {
		mcc: '3731',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Harrah’s Hotels and Casinos',
	},
	'3732': {
		mcc: '3732',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Opryland Hotel',
	},
	'3733': {
		mcc: '3733',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Boca Raton Resort and Club',
	},
	'3734': {
		mcc: '3734',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Harvey Bristol Hotels',
	},
	'3735': {
		mcc: '3735',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Masters Economy Inns',
	},
	'3736': {
		mcc: '3736',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Colorado Belle Edgewater Resort',
	},
	'3737': {
		mcc: '3737',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Riviera Hotel and Casino',
	},
	'3738': {
		mcc: '3738',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Tropicana Resort and Casino',
	},
	'3739': {
		mcc: '3739',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Woodside Hotels and Resorts',
	},
	'3740': {
		mcc: '3740',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Towneplace Suites',
	},
	'3741': {
		mcc: '3741',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Millennium Times Square New York',
	},
	'3742': {
		mcc: '3742',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Club Med',
	},
	'3743': {
		mcc: '3743',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Atlanta Biltmore Hotel and Apartments',
	},
	'3744': {
		mcc: '3744',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Carefree Resorts',
	},
	'3745': {
		mcc: '3745',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'St. Regis Hotel',
	},
	'3746': {
		mcc: '3746',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Eliot Hotel',
	},
	'3747': {
		mcc: '3747',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Club Corporation / Club Resorts',
	},
	'3748': {
		mcc: '3748',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Wellesley Inns',
	},
	'3749': {
		mcc: '3749',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Beverly Hills Hotel',
	},
	'3750': {
		mcc: '3750',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Crowne Plaza Hotels',
	},
	'3751': {
		mcc: '3751',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Homewood Suites by Hilton',
	},
	'3752': {
		mcc: '3752',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Peabody Hotels',
	},
	'3753': {
		mcc: '3753',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Greenbriar Resorts',
	},
	'3754': {
		mcc: '3754',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Amelia Island Plantation',
	},
	'3755': {
		mcc: '3755',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Homestead Hotels',
	},
	'3756': {
		mcc: '3756',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'South Seas Island Resort',
	},
	'3757': {
		mcc: '3757',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Canyon Ranch',
	},
	'3758': {
		mcc: '3758',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Kahala Mandarin Oriental Hotel',
	},
	'3759': {
		mcc: '3759',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Orchid At Mauna Lani',
	},
	'3760': {
		mcc: '3760',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Halekulani Hotel / Waikiki Parc',
	},
	'3761': {
		mcc: '3761',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Primadonna Hotel and Casino',
	},
	'3762': {
		mcc: '3762',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Whiskey Pete’s Hotel and Casino',
	},
	'3763': {
		mcc: '3763',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Chateau Elan Winery and Resort',
	},
	'3764': {
		mcc: '3764',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Beau Rivage Hotel and Casino',
	},
	'3765': {
		mcc: '3765',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Bellagio Resort and Casino',
	},
	'3766': {
		mcc: '3766',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Fremont Hotel and Casino',
	},
	'3767': {
		mcc: '3767',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Main Street Station Casino Brewery Hotel',
	},
	'3768': {
		mcc: '3768',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Silver Star Hotel and Casino',
	},
	'3769': {
		mcc: '3769',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Stratosphere Hotel and Casino',
	},
	'3770': {
		mcc: '3770',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Springhill Suites',
	},
	'3771': {
		mcc: '3771',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Caesars Hotel and Casino',
	},
	'3772': {
		mcc: '3772',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Nemacolin Woodlands',
	},
	'3773': {
		mcc: '3773',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Venetian Resort Hotel and Casino',
	},
	'3774': {
		mcc: '3774',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'New York-New York Hotel & Casino',
	},
	'3775': {
		mcc: '3775',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Sands Resort',
	},
	'3776': {
		mcc: '3776',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Nevele Grande Resort and Country Club',
	},
	'3777': {
		mcc: '3777',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Mandalay Bay Resort',
	},
	'3778': {
		mcc: '3778',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Four Points Hotels',
	},
	'3779': {
		mcc: '3779',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'W Hotels',
	},
	'3780': {
		mcc: '3780',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Disneyland Resorts',
	},
	'3781': {
		mcc: '3781',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Patricia Grand Resort Hotels',
	},
	'3782': {
		mcc: '3782',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Rosen Hotel and Resorts',
	},
	'3783': {
		mcc: '3783',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Town and Country Resort and Convention Center',
	},
	'3784': {
		mcc: '3784',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'First Hospitality Hotels',
	},
	'3785': {
		mcc: '3785',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Outrigger Hotels and Resorts ',
	},
	'3786': {
		mcc: '3786',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ohana Hotels of Hawaii',
	},
	'3787': {
		mcc: '3787',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Caribe Royal Orlando Resort Suite and Villas',
	},
	'3788': {
		mcc: '3788',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Ala Moana Honolulu by Mantra',
	},
	'3789': {
		mcc: '3789',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Smugglers Notch Resort',
	},
	'3790': {
		mcc: '3790',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Raffles Hotels & Resorts',
	},
	'3791': {
		mcc: '3791',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Staybridge Suites',
	},
	'3792': {
		mcc: '3792',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Claridge Casino Hotel',
	},
	'3793': {
		mcc: '3793',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Flamingo Hotels',
	},
	'3794': {
		mcc: '3794',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Grand Casino Hotel & Resort',
	},
	'3795': {
		mcc: '3795',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Paris Las Vegas Hotel',
	},
	'3796': {
		mcc: '3796',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Peppermill Hotel Casino',
	},
	'3797': {
		mcc: '3797',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Atlantic Club Casino Hotel',
	},
	'3798': {
		mcc: '3798',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Embassy Vacation Resort',
	},
	'3799': {
		mcc: '3799',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hale Koa Hotel',
	},
	'3800': {
		mcc: '3800',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Homestead Suites',
	},
	'3801': {
		mcc: '3801',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Wilderness Hotel and Resort',
	},
	'3802': {
		mcc: '3802',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Palace Hotel',
	},
	'3803': {
		mcc: '3803',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Wigwam Golf Resort and Spa',
	},
	'3804': {
		mcc: '3804',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Diplomat Country Club and Spa',
	},
	'3805': {
		mcc: '3805',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Atlantic Hotel',
	},
	'3806': {
		mcc: '3806',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Princeville Resort',
	},
	'3807': {
		mcc: '3807',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Element Hotel',
	},
	'3808': {
		mcc: '3808',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'LXR (Luxury Resorts)',
	},
	'3809': {
		mcc: '3809',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Settle Inn',
	},
	'3810': {
		mcc: '3810',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'La Costa Resort',
	},
	'3811': {
		mcc: '3811',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Premier Travel Inns',
	},
	'3812': {
		mcc: '3812',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hyatt Place',
	},
	'3813': {
		mcc: '3813',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel Indigo',
	},
	'3814': {
		mcc: '3814',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Roosevelt Hotel NY',
	},
	'3815': {
		mcc: '3815',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Nickelodeon Family Suites by Holiday Inn',
	},
	'3816': {
		mcc: '3816',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Home2 Suites by Hilton',
	},
	'3817': {
		mcc: '3817',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Affinia Hotels',
	},
	'3818': {
		mcc: '3818',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Mainstay Suites',
	},
	'3819': {
		mcc: '3819',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Oxford Suites',
	},
	'3820': {
		mcc: '3820',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Jumeirah Essex House',
	},
	'3821': {
		mcc: '3821',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Caribe Royal Orlando Resort Suite and Villas',
	},
	'3822': {
		mcc: '3822',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Crossland Economy Studios Hotels',
	},
	'3823': {
		mcc: '3823',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Grand Sierra Resort',
	},
	'3824': {
		mcc: '3824',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Aria Hotels',
	},
	'3825': {
		mcc: '3825',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Vdara Hotel & Spa',
	},
	'3826': {
		mcc: '3826',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotel am Steinplatz',
	},
	'3827': {
		mcc: '3827',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'The Galt House Hotel by Wyndham',
	},
	'3828': {
		mcc: '3828',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Cosmopolitan of Las Vegas',
	},
	'3829': {
		mcc: '3829',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Country Inn By Carlson',
	},
	'3830': {
		mcc: '3830',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Park Plaza Hotel',
	},
	'3831': {
		mcc: '3831',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Waldorf Astoria Hotels & Resorts',
	},
	'3832': {
		mcc: '3832',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Curio Hotels Country Inn by Hilton',
	},
	'3833': {
		mcc: '3833',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Canopy Hotels by Hilton',
	},
	'3834': {
		mcc: '3834',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Baymont Inn & Suites',
	},
	'3835': {
		mcc: '3835',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Dolce Hotels and Resorts',
	},
	'3836': {
		mcc: '3836',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hawthorn by Wyndham',
	},
	'3837': {
		mcc: '3837',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hoshino Resorts',
	},
	'3838': {
		mcc: '3838',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Kimpton Hotels',
	},
	'3882': {
		mcc: '3882',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Сashing',
		fullDescription: 'Cash collection (cashing)',
	},
	'4011': {
		mcc: '4011',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Railway',
		fullDescription: 'Railroads - Freight',
	},
	'4111': {
		mcc: '4111',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Passenger transportation',
		fullDescription:
			'Transportation-Suburban and Local Commuter Passenger, including Ferries',
	},
	'4112': {
		mcc: '4112',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Passenger railways',
		fullDescription: 'Passenger Railways',
	},
	'4119': {
		mcc: '4119',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Ambulance',
		fullDescription: 'Ambulance Services',
	},
	'4121': {
		mcc: '4121',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Taxi',
		fullDescription: 'Taxicabs and Limousines',
	},
	'4131': {
		mcc: '4131',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Transportation. Bus',
		fullDescription: 'Bus Lines',
	},
	'4214': {
		mcc: '4214',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Transportation. Delivery',
		fullDescription:
			'Motor Freight Carriers,Trucking-Local/Long Distance, Moving and Storage Companies, Local Delivery',
	},
	'4215': {
		mcc: '4215',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Delivery service',
		fullDescription: 'Courier Services - Air and Ground, Freight Forwarders',
	},
	'4225': {
		mcc: '4225',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Storage',
		fullDescription:
			'Public Warehousing-Farm Products, Refrigerated Goods, Household Goods Storage',
	},
	'4304': {
		mcc: '4304',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'4411': {
		mcc: '4411',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Cruise Lines',
		fullDescription: 'Cruise Lines',
	},
	'4457': {
		mcc: '4457',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Boat Rentals',
		fullDescription: 'Boat Leases and Boat Rentals',
	},
	'4468': {
		mcc: '4468',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Yachting service',
		fullDescription: 'Marinas, Marine Service/Supplies',
	},
	'4511': {
		mcc: '4511',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Airlines',
		fullDescription: 'Air Carriers, Airlines',
	},
	'4582': {
		mcc: '4582',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Airports',
		fullDescription: 'Airports, Airport Terminals, Flying Fields',
	},
	'4722': {
		mcc: '4722',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Tourism',
		fullDescription: 'Travel Agencies and Tour Operators',
	},
	'4723': {
		mcc: '4723',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Tour operators',
		fullDescription: 'Package Tour Operators (Germany Only)',
	},
	'4729': {
		mcc: '4729',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Transportation Services',
		fullDescription: 'Passenger transportation services',
	},
	'4761': {
		mcc: '4761',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Telemarketing',
		fullDescription: 'Telemarketing of Travel Related Services and Vitamins',
	},
	'4784': {
		mcc: '4784',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Toll roads',
		fullDescription: 'Bridge and Road Fees, Tolls',
	},
	'4785': {
		mcc: '4785',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'4789': {
		mcc: '4789',
		group: {
			type: 'TS',
			description: 'Transportation Services',
		},
		shortDescription: 'Railway',
		fullDescription: 'Transportation Services',
	},
	'4812': {
		mcc: '4812',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Telecommunication equipment',
		fullDescription: 'Telecommunication Equipment Including Telephone Sales',
	},
	'4813': {
		mcc: '4813',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Retail outlets with telephony',
		fullDescription:
			'Key-Entry Telecom Merchant providing single local and long-distance phone calls using a central access number in a non-face-to-face environment using key entry',
	},
	'4814': {
		mcc: '4814',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Mobile connection',
		fullDescription: 'Telecommunication Services',
	},
	'4815': {
		mcc: '4815',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Telephone services',
		fullDescription: 'Telephone services',
	},
	'4816': {
		mcc: '4816',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Information Services',
		fullDescription: 'Computer Network/Information Services',
	},
	'4821': {
		mcc: '4821',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Telegraph',
		fullDescription: 'Telegraph Services',
	},
	'4829': {
		mcc: '4829',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Wire Transfer Money Orders / Money Transfer',
	},
	'4899': {
		mcc: '4899',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'The television',
		fullDescription:
			'Cable, Satellite, and Other Pay Television and Radio Services',
	},
	'4900': {
		mcc: '4900',
		group: {
			type: 'US',
			description: 'Utility Services',
		},
		shortDescription: 'Utilities',
		fullDescription: 'Utilities - Electric, Gas, Heating Oil, Sanitary, Water',
	},
	'5013': {
		mcc: '5013',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Auto Parts',
		fullDescription: 'Motor Vehicle Supplies and New Parts',
	},
	'5021': {
		mcc: '5021',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Furniture',
		fullDescription: 'Office and Commercial Furniture',
	},
	'5039': {
		mcc: '5039',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Building materials',
		fullDescription: 'Construction Materials',
	},
	'5044': {
		mcc: '5044',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Office equipment',
		fullDescription: 'Office, Photographic, Photocopy and Microfilm Equipment',
	},
	'5045': {
		mcc: '5045',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Computers and software',
		fullDescription: 'Computers, Computer Peripheral Equipment, Software',
	},
	'5046': {
		mcc: '5046',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Equipment',
		fullDescription: 'Commercial Equipment',
	},
	'5047': {
		mcc: '5047',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Medical equipment',
		fullDescription:
			'Dental / Laboratory / Medical / Ophthalmic Hospital Equipment and Supplies',
	},
	'5051': {
		mcc: '5051',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Metal processing',
		fullDescription: 'Metal Service Centers and Offices',
	},
	'5065': {
		mcc: '5065',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Electronics',
		fullDescription: 'Electrical Parts and Equipment',
	},
	'5072': {
		mcc: '5072',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Equipment',
		fullDescription: 'Hardware Equipment and Supplies',
	},
	'5074': {
		mcc: '5074',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Plumbing',
		fullDescription: 'Plumbing and Heating Equipment',
	},
	'5085': {
		mcc: '5085',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Industry',
		fullDescription: 'Industrial Supplies',
	},
	'5094': {
		mcc: '5094',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Jewelry',
		fullDescription: 'Precious Stones and Metals, Watches and Jewelry',
	},
	'5099': {
		mcc: '5099',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Goods',
		fullDescription: 'Durable Goods',
	},
	'5111': {
		mcc: '5111',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Chancery',
		fullDescription: 'Stationery, Office Supplies, Printing and Writing Paper',
	},
	'5122': {
		mcc: '5122',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Drugs',
		fullDescription: 'Drugs, Drug Proprietors and Druggists Sundries',
	},
	'5131': {
		mcc: '5131',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Haberdashery',
		fullDescription: 'Piece Goods, Notions, and Other Dry Goods',
	},
	'5137': {
		mcc: '5137',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Clothing',
		fullDescription:
			'Men’s, Women’s and Children’s Uniforms and Commercial Clothing',
	},
	'5139': {
		mcc: '5139',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Footwear',
		fullDescription: 'Commercial Footware',
	},
	'5169': {
		mcc: '5169',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Chemicals',
		fullDescription: 'Chemicals and Allied Products',
	},
	'5172': {
		mcc: '5172',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Petroleum',
		fullDescription: 'Petroleum and Petroleum Products',
	},
	'5192': {
		mcc: '5192',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Books. Press',
		fullDescription: 'Books, Periodicals and Newspapers',
	},
	'5193': {
		mcc: '5193',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Flowers',
		fullDescription: 'Florists Supplies, Nursery Stock and Flowers',
	},
	'5198': {
		mcc: '5198',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Paints',
		fullDescription: 'Paints, Varnishes and Supplies',
	},
	'5199': {
		mcc: '5199',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Goods',
		fullDescription: 'Non-Durable Goods',
	},
	'5200': {
		mcc: '5200',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Household products',
		fullDescription: 'Home Supply Warehouse Stores',
	},
	'5211': {
		mcc: '5211',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Building materials',
		fullDescription: 'Building Materials, Lumber Stores',
	},
	'5231': {
		mcc: '5231',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Renovation',
		fullDescription: 'Glass, Paint, Wallpaper Stores',
	},
	'5251': {
		mcc: '5251',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Hardware Stores',
		fullDescription: 'Hardware Stores',
	},
	'5261': {
		mcc: '5261',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Garden accessories',
		fullDescription: 'Lawn and Garden Supply Stores',
	},
	'5262': {
		mcc: '5262',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Marketplaces',
		fullDescription: 'Marketplaces',
	},
	'5271': {
		mcc: '5271',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Mobile homes',
		fullDescription: 'Mobile Home Dealers',
	},
	'5292': {
		mcc: '5292',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'5295': {
		mcc: '5295',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'5297': {
		mcc: '5297',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Retail stores',
		fullDescription: 'Online retail stores',
	},
	'5298': {
		mcc: '5298',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Retail stores',
		fullDescription: 'Internet Shopping Grocery Store',
	},
	'5299': {
		mcc: '5299',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Gas sales',
		fullDescription: 'Warehouse Club Gas',
	},
	'5300': {
		mcc: '5300',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Wholesalers',
		fullDescription: 'Wholesale Clubs',
	},
	'5309': {
		mcc: '5309',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Duty Free',
		fullDescription: 'Duty Free Stores',
	},
	'5310': {
		mcc: '5310',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Discounters',
		fullDescription: 'Discount Stores',
	},
	'5311': {
		mcc: '5311',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Department stores',
		fullDescription: 'Department Stores',
	},
	'5331': {
		mcc: '5331',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Variety stores',
		fullDescription: 'Variety Stores',
	},
	'5399': {
		mcc: '5399',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Merchandise stores',
		fullDescription: 'Miscellaneous General Merchandise Stores',
	},
	'5411': {
		mcc: '5411',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Grocery',
		fullDescription: 'Grocery Stores, Supermarkets',
	},
	'5415': {
		mcc: '5415',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'5422': {
		mcc: '5422',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Meat',
		fullDescription: 'Freezer and Locker Meat Provisioners',
	},
	'5441': {
		mcc: '5441',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Sweets',
		fullDescription: 'Candy, Nut and Confectionery Stores',
	},
	'5451': {
		mcc: '5451',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Farm goods',
		fullDescription: 'Dairy Products Stores',
	},
	'5462': {
		mcc: '5462',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Bakeries',
		fullDescription: 'Bakeries',
	},
	'5499': {
		mcc: '5499',
		group: {
			type: 'ROS',
			description: 'Retail Outlet Services',
		},
		shortDescription: 'Food stores',
		fullDescription:
			'Miscellaneous Food Stores - Convenience Stores, Markets, Specialty Stores, and Vending Machines',
	},
	'5511': {
		mcc: '5511',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription:
			'Automobile and Truck Dealers - Sales, Service, Repairs, Parts and Leasing',
	},
	'5521': {
		mcc: '5521',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription: 'Automobile and Truck Dealers-(Used Only)-Sales',
	},
	'5531': {
		mcc: '5531',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Auto parts',
		fullDescription: 'Auto shops and household goods',
	},
	'5532': {
		mcc: '5532',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Tires',
		fullDescription: 'Automotive Tire Stores',
	},
	'5533': {
		mcc: '5533',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Auto shops',
		fullDescription: 'Automotive Parts and Accessories Stores',
	},
	'5541': {
		mcc: '5541',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Service Stations',
		fullDescription: 'Service Stations (With or Without Ancillary Services)',
	},
	'5542': {
		mcc: '5542',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Gas station',
		fullDescription: 'Fuel Dispenser, Automated',
	},
	'5551': {
		mcc: '5551',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Boats',
		fullDescription: 'Boat Dealers',
	},
	'5552': {
		mcc: '5552',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Charging stations',
		fullDescription: 'Electric car charging stations',
	},
	'5561': {
		mcc: '5561',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription: 'Camper Dealers, Recreational and Utility Trailers',
	},
	'5571': {
		mcc: '5571',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription: 'Motorcycle Shops and Dealers',
	},
	'5592': {
		mcc: '5592',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription: 'Motor Home Dealers',
	},
	'5598': {
		mcc: '5598',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription: 'Snowmobile Dealers',
	},
	'5599': {
		mcc: '5599',
		group: {
			type: 'CV',
			description: 'Cars and vehicles',
		},
		shortDescription: 'Car dealerships',
		fullDescription:
			'Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers',
	},
	'5611': {
		mcc: '5611',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Mens clothing',
		fullDescription: 'Men’s and Boys’ Clothing and Accessories Stores',
	},
	'5621': {
		mcc: '5621',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Womens clothing',
		fullDescription: 'Women’s Ready to Wear Stores',
	},
	'5631': {
		mcc: '5631',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Clothing stores',
		fullDescription: 'Women’s Accessory and Specialty Stores',
	},
	'5641': {
		mcc: '5641',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Baby clothes',
		fullDescription: 'Children’s and Infants’ Wear Stores',
	},
	'5651': {
		mcc: '5651',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Clothes',
		fullDescription: 'Family Clothing Stores',
	},
	'5655': {
		mcc: '5655',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Sportswear',
		fullDescription: 'Sports Apparel, and Riding Apparel Stores',
	},
	'5661': {
		mcc: '5661',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Shoes',
		fullDescription: 'Shoe Stores',
	},
	'5681': {
		mcc: '5681',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Fur',
		fullDescription: 'Furriers and Fur Shops',
	},
	'5691': {
		mcc: '5691',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Clothes',
		fullDescription: 'Men’s and Women’s Clothing Stores',
	},
	'5697': {
		mcc: '5697',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Atelier',
		fullDescription: 'Alterations, Mending, Seamstresses, Tailors',
	},
	'5698': {
		mcc: '5698',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Wigs',
		fullDescription: 'Wig and Toupee Shops',
	},
	'5699': {
		mcc: '5699',
		group: {
			type: 'CLS',
			description: 'Clothing stores',
		},
		shortDescription: 'Accessories',
		fullDescription: 'Accessory and Apparel Stores - Miscellaneous',
	},
	'5712': {
		mcc: '5712',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Furniture',
		fullDescription:
			'Equipment, Furniture and Home Furnishings Stores (except Appliances)',
	},
	'5713': {
		mcc: '5713',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Floor coverings',
		fullDescription: 'Floor Covering Stores',
	},
	'5714': {
		mcc: '5714',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Curtains',
		fullDescription: 'Drapery, Upholstery and Window Coverings Stores',
	},
	'5715': {
		mcc: '5715',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Alcohol',
		fullDescription: 'Wholesalers of alcohol',
	},
	'5718': {
		mcc: '5718',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Fireplaces',
		fullDescription: 'Fireplace, Fireplace Screens and Accessories Stores',
	},
	'5719': {
		mcc: '5719',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Furniture',
		fullDescription: 'Miscellaneous House Furnishing Specialty Shops',
	},
	'5722': {
		mcc: '5722',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Household appliance',
		fullDescription: 'Household Appliance Stores',
	},
	'5732': {
		mcc: '5732',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Household appliance',
		fullDescription: 'Electronics Sales',
	},
	'5733': {
		mcc: '5733',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Musical Instruments',
		fullDescription:
			'Music Stores - Musical Instruments, Pianos and Sheet Music',
	},
	'5734': {
		mcc: '5734',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Computer Software',
		fullDescription: 'Computer Software Stores',
	},
	'5735': {
		mcc: '5735',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Record Shops',
		fullDescription: 'Record Shops',
	},
	'5811': {
		mcc: '5811',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Caterers',
		fullDescription: 'Caterers',
	},
	'5812': {
		mcc: '5812',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Cafe. Restaurants',
		fullDescription: 'Eating Places and Restaurants ',
	},
	'5813': {
		mcc: '5813',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Bars',
		fullDescription:
			'Bars, Cocktail Lounges, Discotheques, Nightclubs and Taverns-Drinking Places (Alcoholic Beverages)',
	},
	'5814': {
		mcc: '5814',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Fast Food',
		fullDescription: 'Fast Food Restaurants',
	},
	'5815': {
		mcc: '5815',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Digital Goods',
		fullDescription: 'Digital Goods: Books, Movies, Music',
	},
	'5816': {
		mcc: '5816',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Games',
		fullDescription: 'Digital Goods: Games',
	},
	'5817': {
		mcc: '5817',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Applications',
		fullDescription: 'Digital Goods: Applications (Excludes Games)',
	},
	'5818': {
		mcc: '5818',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Digital Goods',
		fullDescription:
			'Digital Goods: Large Digital Goods Merchant / Digital Goods: Multi-Category',
	},
	'5832': {
		mcc: '5832',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Antiques',
		fullDescription: 'Antique Shops - Sales, Repairs, and Restoration Services',
	},
	'5912': {
		mcc: '5912',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Drug Stores',
		fullDescription: 'Drug Stores and Pharmacies',
	},
	'5921': {
		mcc: '5921',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Alcohol',
		fullDescription: 'Package Stores - Beer, Wine and Liquor',
	},
	'5931': {
		mcc: '5931',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Second Hand',
		fullDescription: 'Second Hand Stores, Used Merchandise Stores',
	},
	'5932': {
		mcc: '5932',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Antiques',
		fullDescription: 'Antique Shops-Sales, Repairs and Restoration Services',
	},
	'5933': {
		mcc: '5933',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Pawn Shops',
		fullDescription: 'Pawn Shops',
	},
	'5935': {
		mcc: '5935',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Car dump',
		fullDescription: 'Wrecking and Salvage Yards',
	},
	'5937': {
		mcc: '5937',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Reproduction Stores',
		fullDescription: 'Antique Reproduction Stores',
	},
	'5940': {
		mcc: '5940',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Bicycles',
		fullDescription: 'Bicycle Shops-Sales and Service',
	},
	'5941': {
		mcc: '5941',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Sports goods',
		fullDescription: 'Sporting Goods Stores',
	},
	'5942': {
		mcc: '5942',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Book Stores',
		fullDescription: 'Book Stores',
	},
	'5943': {
		mcc: '5943',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Stationery',
		fullDescription: 'Office, School Supply and Stationery Stores',
	},
	'5944': {
		mcc: '5944',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Clock',
		fullDescription: 'Clock, Jewelry, Watch and Silverware Stores',
	},
	'5945': {
		mcc: '5945',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Toys',
		fullDescription: 'Game, Toy and Hobby Shops',
	},
	'5946': {
		mcc: '5946',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Photo goods',
		fullDescription: 'Camera and Photographic Supply Stores',
	},
	'5947': {
		mcc: '5947',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Souvenirs',
		fullDescription: 'Card, Gift, Novelty and Souvenir Shops',
	},
	'5948': {
		mcc: '5948',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Leather Products',
		fullDescription: 'Leather Goods and Luggage Stores',
	},
	'5949': {
		mcc: '5949',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Sewing supplies',
		fullDescription: 'Fabric, Needlework, Piece Goods and Sewing Stores',
	},
	'5950': {
		mcc: '5950',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Crystal / glassware',
		fullDescription: 'Crystal and Glassware Stores',
	},
	'5960': {
		mcc: '5960',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Insurance',
		fullDescription: 'Direct Marketing Insurance Services',
	},
	'5961': {
		mcc: '5961',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Goods by mail',
		fullDescription: 'Mail Order Houses Including Catalog Order Stores',
	},
	'5962': {
		mcc: '5962',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Travels',
		fullDescription: 'Direct Marketing - Travel Related Arrangement Services',
	},
	'5963': {
		mcc: '5963',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Salesmen',
		fullDescription: 'Door-to-Door Sales',
	},
	'5964': {
		mcc: '5964',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Goods by mail',
		fullDescription: 'Direct Marketing-Catalog Merchants',
	},
	'5965': {
		mcc: '5965',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Goods by mail',
		fullDescription:
			'Direct Marketing - Combination Catalog and Retail Merchant',
	},
	'5966': {
		mcc: '5966',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Goods by mail',
		fullDescription: 'Direct Marketing - Outbound Telemarketing Merchants',
	},
	'5967': {
		mcc: '5967',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Information Services',
		fullDescription: 'Direct Marketing - Inbound Telemarketing Merchants',
	},
	'5968': {
		mcc: '5968',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Subscriptions',
		fullDescription: 'Direct Marketing - Continuity / Subscription Merchants',
	},
	'5969': {
		mcc: '5969',
		group: {
			type: 'MTS',
			description: 'Mail / Telephone Sales',
		},
		shortDescription: 'Goods by mail',
		fullDescription: 'Direct Marketing - Other Direct Marketers',
	},
	'5970': {
		mcc: '5970',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Art goods',
		fullDescription: 'Artist Supply Stores, Craft Shops',
	},
	'5971': {
		mcc: '5971',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Galleries',
		fullDescription: 'Art Dealers and Galleries',
	},
	'5972': {
		mcc: '5972',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Philatelicism',
		fullDescription:
			'Stamp and Coin Stores - Philatelic and Numismatic Supplies',
	},
	'5973': {
		mcc: '5973',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Church shops',
		fullDescription: 'Religious Goods Stores',
	},
	'5974': {
		mcc: '5974',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Rubber stamp',
		fullDescription: 'Rubber Stamp Store',
	},
	'5975': {
		mcc: '5975',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Hearing Aids',
		fullDescription: 'Hearing Aids - Sales, Service, Supply Stores',
	},
	'5976': {
		mcc: '5976',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Prostheses',
		fullDescription: 'Orthopedic Goods - Artificial Limb Stores',
	},
	'5977': {
		mcc: '5977',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Cosmetics',
		fullDescription: 'Cosmetic Stores',
	},
	'5978': {
		mcc: '5978',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Printing machines',
		fullDescription: 'Typewriter Stores - Rentals, Sales, Service',
	},
	'5983': {
		mcc: '5983',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Fuel',
		fullDescription: 'Fuel Dealers - Coal, Fuel Oil, Liquefied Petroleum, Wood',
	},
	'5992': {
		mcc: '5992',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Florists',
		fullDescription: 'Florists',
	},
	'5993': {
		mcc: '5993',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Tobacco products',
		fullDescription: 'Cigar Stores and Stands',
	},
	'5994': {
		mcc: '5994',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Newspapers. Magazines',
		fullDescription: 'News Dealers and Newsstands',
	},
	'5995': {
		mcc: '5995',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Pet supplies',
		fullDescription: 'Pet Shops, Pet Food and Supplies',
	},
	'5996': {
		mcc: '5996',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Swimming Pools',
		fullDescription: 'Swimming Pools - Sales and Supplies',
	},
	'5997': {
		mcc: '5997',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Razors',
		fullDescription: 'Electric Razor Stores - Sales and Service',
	},
	'5998': {
		mcc: '5998',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Tents',
		fullDescription: 'Tent and Awning Shops',
	},
	'5999': {
		mcc: '5999',
		group: {
			type: 'MS',
			description: 'Miscellaneous Stores',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous and Specialty Retail Stores',
	},
	'6010': {
		mcc: '6010',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Сashier\'s office',
		fullDescription: 'Member Financial Institution - Manual Cash Disbursements',
	},
	'6011': {
		mcc: '6011',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Сashier\'s office',
		fullDescription:
			'Member Financial Institution - Automated Cash Disbursements',
	},
	'6012': {
		mcc: '6012',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Financial services',
		fullDescription: 'Member Financial Institution - Merchandise And Services',
	},
	'6022': {
		mcc: '6022',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Banks',
		fullDescription: 'Financial Institution (internal RCL)',
	},
	'6023': {
		mcc: '6023',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Banks',
		fullDescription: 'State Banks (RCL Internal)',
	},
	'6025': {
		mcc: '6025',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Banks',
		fullDescription: 'National Banks (RCL Internal)',
	},
	'6026': {
		mcc: '6026',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Banks',
		fullDescription: 'National Banks Non Federal (RCL Internal)',
	},
	'6028': {
		mcc: '6028',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Banks',
		fullDescription: 'Unincorporated Private Banks (RCL Internal)',
	},
	'6050': {
		mcc: '6050',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Quasi Cash',
		fullDescription: 'Quasi Cash - Member Financial Institution',
	},
	'6051': {
		mcc: '6051',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Quasi Cash',
		fullDescription: 'Quasi Cash - Merchant',
	},
	'6211': {
		mcc: '6211',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Securities',
		fullDescription: 'Securities - Brokers and Dealers',
	},
	'6236': {
		mcc: '6236',
		group: {
			type: 'AL',
			description: 'Airlines',
		},
		shortDescription: 'Securities',
		fullDescription: 'Aserca Airlines / Aero Servicio Carabobo (Venezuela)',
	},
	'6300': {
		mcc: '6300',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Insurance',
		fullDescription: 'Insurance Sales, Underwriting and Premiums',
	},
	'6381': {
		mcc: '6381',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Insurance',
		fullDescription: 'Insurance - Premiums',
	},
	'6399': {
		mcc: '6399',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Insurance',
		fullDescription: 'Insurance',
	},
	'6513': {
		mcc: '6513',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Rental Property',
		fullDescription: 'Real Estate Agents and Managers - Rentals',
	},
	'6529': {
		mcc: '6529',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Сard replenishment',
		fullDescription: 'Remote Stored Value Load - Member Financial Institution',
	},
	'6530': {
		mcc: '6530',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Сard replenishment',
		fullDescription: 'Remove Stored Value Load - Merchant',
	},
	'6531': {
		mcc: '6531',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Payment for services - money transfers',
	},
	'6532': {
		mcc: '6532',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Payment Transaction - Financial Institution',
	},
	'6533': {
		mcc: '6533',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Payment operation - seller',
	},
	'6534': {
		mcc: '6534',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Money Transfer - Financial Institution',
	},
	'6535': {
		mcc: '6535',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Value Purchase - Member Financial Institution',
	},
	'6536': {
		mcc: '6536',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'MoneySend Intracountry',
	},
	'6537': {
		mcc: '6537',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'MoneySend Intercountry',
	},
	'6538': {
		mcc: '6538',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'MoneySend Funding',
	},
	'6539': {
		mcc: '6539',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Funding Transaction (Excluding MoneySend)',
	},
	'6540': {
		mcc: '6540',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription:
			'POI (Point of Interaction) Funding Transactions (Excluding MoneySend)',
	},
	'6611': {
		mcc: '6611',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Money transfer',
		fullDescription: 'Overpayments',
	},
	'6760': {
		mcc: '6760',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Bonds',
		fullDescription: 'Savings Bonds',
	},
	'7011': {
		mcc: '7011',
		group: {
			type: 'HR',
			description: 'Hotels / Resorts',
		},
		shortDescription: 'Hotels and resorts',
		fullDescription: 'Hotels and resorts',
	},
	'7012': {
		mcc: '7012',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Timeshares',
		fullDescription: 'Timeshares',
	},
	'7032': {
		mcc: '7032',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Recreation',
		fullDescription: 'Sporting and Recreational Camps',
	},
	'7033': {
		mcc: '7033',
		group: {
			type: 'SP',
			description: 'Service provider',
		},
		shortDescription: 'Campgrounds',
		fullDescription: 'Campgrounds and Trailer Parks',
	},
	'7210': {
		mcc: '7210',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Cleaning',
		fullDescription: 'Cleaning, Garment and Laundry Services',
	},
	'7211': {
		mcc: '7211',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Laundry',
		fullDescription: 'Laundry Services - Family and Commercial',
	},
	'7216': {
		mcc: '7216',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Dry Cleaners',
		fullDescription: 'Dry Cleaners',
	},
	'7217': {
		mcc: '7217',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Cleaning',
		fullDescription: 'Carpet and Upholstery Cleaning',
	},
	'7221': {
		mcc: '7221',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Photographic Studios',
		fullDescription: 'Photographic Studios',
	},
	'7230': {
		mcc: '7230',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'The beauty',
		fullDescription: 'Barber and Beauty Shops',
	},
	'7251': {
		mcc: '7251',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Clothing repair',
		fullDescription:
			'Hat Cleaning Shops, Shoe Repair Shops, Shoe Shine Parlors',
	},
	'7261': {
		mcc: '7261',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Funeral services',
		fullDescription: 'Funeral Service and Crematories',
	},
	'7272': {
		mcc: '7272',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Escort',
		fullDescription: 'Escort Services',
	},
	'7273': {
		mcc: '7273',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Dating. Escort',
		fullDescription: 'Dating Services',
	},
	'7276': {
		mcc: '7276',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Taxes',
		fullDescription: 'Tax Preparation Service',
	},
	'7277': {
		mcc: '7277',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Consultation',
		fullDescription: 'Debt, Marriage, Personal - Counseling Services',
	},
	'7278': {
		mcc: '7278',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Shopping',
		fullDescription: 'Buying / Shopping Clubs, Services',
	},
	'7280': {
		mcc: '7280',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Hospitals',
		fullDescription: 'Hospital Patient - Personal Funds Withdrawal',
	},
	'7295': {
		mcc: '7295',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Babysitters',
		fullDescription: 'Babysitting Services',
	},
	'7296': {
		mcc: '7296',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Clothing rental',
		fullDescription: 'Clothing Rental - Costumes, Uniforms and Formal Wear',
	},
	'7297': {
		mcc: '7297',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Massage',
		fullDescription: 'Massage Parlors',
	},
	'7298': {
		mcc: '7298',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Health and beauty',
		fullDescription: 'Health and Beauty Spas',
	},
	'7299': {
		mcc: '7299',
		group: {
			type: 'PS',
			description: 'Personal services',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Other Services',
	},
	'7311': {
		mcc: '7311',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Advertising',
		fullDescription: 'Advertising Services',
	},
	'7321': {
		mcc: '7321',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Credit bureaus',
		fullDescription: 'Consumer Credit Reporting Agencies',
	},
	'7322': {
		mcc: '7322',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Collection agencies',
		fullDescription: 'Debt collection agencies',
	},
	'7332': {
		mcc: '7332',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Copy centers',
		fullDescription: 'Blueprinting and Photocopying Services',
	},
	'7333': {
		mcc: '7333',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Photography and art',
		fullDescription: 'Commercial Art, Graphics, Photography',
	},
	'7338': {
		mcc: '7338',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Copy centers',
		fullDescription: 'Quick Copy, Reproduction and Blueprinting Services',
	},
	'7339': {
		mcc: '7339',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Stenography',
		fullDescription: 'Stenographic and Secretarial Support Services',
	},
	'7342': {
		mcc: '7342',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Disinfecting',
		fullDescription: 'Exterminating and Disinfecting Services',
	},
	'7349': {
		mcc: '7349',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Cleaning and maintenance',
		fullDescription: 'Cleaning and Maintenance, Janitorial Services',
	},
	'7361': {
		mcc: '7361',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Employment',
		fullDescription: 'Employment Agencies and Temporary Help Services',
	},
	'7372': {
		mcc: '7372',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Programming',
		fullDescription:
			'Computer Programming, Data Processing and Integrated System Design Services',
	},
	'7375': {
		mcc: '7375',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Information Services',
		fullDescription: 'Information Retrieval Services',
	},
	'7379': {
		mcc: '7379',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Computer Repair',
		fullDescription: 'Computer Maintenance, Repair And Services',
	},
	'7389': {
		mcc: '7389',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Business Services',
		fullDescription: 'Business Services',
	},
	'7392': {
		mcc: '7392',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Consulting, PR',
		fullDescription: 'Consulting, Management and Public Relations Services',
	},
	'7393': {
		mcc: '7393',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Detective agencies',
		fullDescription:
			'Detective Agencies, Protective Agencies, Security Services including Armored Cars, Guard Dogs',
	},
	'7394': {
		mcc: '7394',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Equipment rental',
		fullDescription:
			'Equipment Rental and Leasing Services, Furniture Rental, Tool Rental',
	},
	'7395': {
		mcc: '7395',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Photo printing',
		fullDescription: 'Photo Developing, Photofinishing Laboratories',
	},
	'7399': {
		mcc: '7399',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Business Services',
		fullDescription: 'Business Services',
	},
	'7511': {
		mcc: '7511',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Parking',
		fullDescription: 'Truck parking',
	},
	'7512': {
		mcc: '7512',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Automobile Rental Agency',
	},
	'7513': {
		mcc: '7513',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Truck Rental',
		fullDescription: 'Truck Rental',
	},
	'7519': {
		mcc: '7519',
		group: {
			type: 'CR',
			description: 'Car rent',
		},
		shortDescription: 'Car rent',
		fullDescription: 'Motor Home and Recreational Vehicle Rental',
	},
	'7523': {
		mcc: '7523',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Parking',
		fullDescription: 'Automobile Parking Lots and Garages',
	},
	'7524': {
		mcc: '7524',
		group: {
			type: 'BS',
			description: 'Business Services',
		},
		shortDescription: 'Parking',
		fullDescription:
			'Express Payment Service Merchants - Parking Lots and Garages',
	},
	'7531': {
		mcc: '7531',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Auto repair',
		fullDescription: 'Automotive Body Repair Shops',
	},
	'7534': {
		mcc: '7534',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Tire service',
		fullDescription: 'Tire Retreading and Repair Shops',
	},
	'7535': {
		mcc: '7535',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Car paints',
		fullDescription: 'Automotive Paint Shops',
	},
	'7538': {
		mcc: '7538',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Maintenance stations',
		fullDescription: 'Automotive Service Shops',
	},
	'7542': {
		mcc: '7542',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Car Washes',
		fullDescription: 'Car Washes',
	},
	'7549': {
		mcc: '7549',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Tow truck',
		fullDescription: 'Towing Services',
	},
	'7622': {
		mcc: '7622',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Repair of equipment',
		fullDescription: 'Electronic Repair Shops',
	},
	'7623': {
		mcc: '7623',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'HVAC equipment repair',
		fullDescription: 'Air Conditioning and Refrigeration Repair Shops',
	},
	'7629': {
		mcc: '7629',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Repair of equipment',
		fullDescription: 'Appliance Repair Shops, Electrical and Small ',
	},
	'7631': {
		mcc: '7631',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Repair of watches and jewelry',
		fullDescription: 'Clock, Jewelry and Watch Repair Shops',
	},
	'7641': {
		mcc: '7641',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Furniture repair',
		fullDescription: 'Furniture - Reupholstery, Repair and Refinishing',
	},
	'7692': {
		mcc: '7692',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Welding works',
		fullDescription: 'Welding Repair',
	},
	'7699': {
		mcc: '7699',
		group: {
			type: 'RS',
			description: 'Repair services',
		},
		shortDescription: 'Repairs',
		fullDescription: 'Miscellaneous Repair Shops and Related Services',
	},
	'7800': {
		mcc: '7800',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Government Owned Lottery',
		fullDescription: 'Government Owned Lottery',
	},
	'7801': {
		mcc: '7801',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Online casino',
		fullDescription:
			'Government-Licensed Casinos (Online or Internet Gambling)',
	},
	'7802': {
		mcc: '7802',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Horse / Dog racing',
		fullDescription: 'Government-Licensed Horse / Dog Racing',
	},
	'7829': {
		mcc: '7829',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Video rental',
		fullDescription:
			'Motion Picture and Video Tape Production and Distribution',
	},
	'7832': {
		mcc: '7832',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Cinemas',
		fullDescription: 'Motion Picture Theaters',
	},
	'7833': {
		mcc: '7833',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Cinemas',
		fullDescription: 'Express Payment Service — Motion Picture Theater',
	},
	'7841': {
		mcc: '7841',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Video rental',
		fullDescription: 'DVD/Video Tape Rental Stores',
	},
	'7911': {
		mcc: '7911',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Dance studios. Dance schools',
		fullDescription: 'Dance Halls, Schools and Studios',
	},
	'7922': {
		mcc: '7922',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Tickets',
		fullDescription:
			'Theatrical Producers (Except Motion Pictures), Ticket Agencies',
	},
	'7929': {
		mcc: '7929',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Music bands. Orchestras',
		fullDescription: 'Bands, Orchestras and Miscellaneous Entertainers',
	},
	'7932': {
		mcc: '7932',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Billiard',
		fullDescription: 'Pool and Billiard Establishments',
	},
	'7933': {
		mcc: '7933',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Bowling clubs',
		fullDescription: 'Bowling Alleys',
	},
	'7941': {
		mcc: '7941',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Sports clubs',
		fullDescription:
			'Athletic Fields, Commercial Sports, Professional Sports Clubs, Sports Promoters',
	},
	'7991': {
		mcc: '7991',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Tourism',
		fullDescription: 'Tourist Attractions and Exhibits',
	},
	'7992': {
		mcc: '7992',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Golf',
		fullDescription: 'Golf Courses, Public',
	},
	'7993': {
		mcc: '7993',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Videogames',
		fullDescription: 'Video Amusement Game Supplies',
	},
	'7994': {
		mcc: '7994',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Videogames',
		fullDescription: 'Video Game Arcades and Establishments',
	},
	'7995': {
		mcc: '7995',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Gambling',
		fullDescription: 'Gambling Transactions, Betting',
	},
	'7996': {
		mcc: '7996',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Entertainment',
		fullDescription: 'Amusement Parks, Carnivals, Circuses, Fortune Tellers',
	},
	'7997': {
		mcc: '7997',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Entertainment and sport',
		fullDescription:
			'Clubs-Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf Courses',
	},
	'7998': {
		mcc: '7998',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Aquariums. Dolphinariums',
		fullDescription: 'Aquariums, Dolphinariums, Zoos and Seaquariums',
	},
	'7999': {
		mcc: '7999',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Entertainment and sport',
		fullDescription: 'Recreation Services',
	},
	'8011': {
		mcc: '8011',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Medicine',
		fullDescription: 'Doctors',
	},
	'8021': {
		mcc: '8021',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Dentistry',
		fullDescription: 'Dentists and Orthodontists',
	},
	'8031': {
		mcc: '8031',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Medicine',
		fullDescription: 'Osteopathic Physicians',
	},
	'8041': {
		mcc: '8041',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Chiropractors',
		fullDescription: 'Chiropractors',
	},
	'8042': {
		mcc: '8042',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Optics',
		fullDescription: 'Optometrists and Ophthalmologists',
	},
	'8043': {
		mcc: '8043',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Optics',
		fullDescription: 'Opticians, Optical Goods and Eyeglasses',
	},
	'8044': {
		mcc: '8044',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Optics',
		fullDescription: 'Optical Goods and Eyeglasses',
	},
	'8049': {
		mcc: '8049',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Podiatrists',
		fullDescription: 'Chiropodists, Podiatrists',
	},
	'8050': {
		mcc: '8050',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Caregiver / Nurse',
		fullDescription: 'Nursing and Personal Care Facilities',
	},
	'8062': {
		mcc: '8062',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Hospitals',
		fullDescription: 'Hospitals',
	},
	'8071': {
		mcc: '8071',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Medicine and dentistry',
		fullDescription: 'Dental and Medical Laboratories',
	},
	'8099': {
		mcc: '8099',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Medical services',
		fullDescription: 'Health Practitioners, Medical Services',
	},
	'8110': {
		mcc: '8110',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Lawyers',
		fullDescription: 'Attorneys, Legal Services',
	},
	'8111': {
		mcc: '8111',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Lawyers',
		fullDescription: 'Attorneys, Legal Services',
	},
	'8211': {
		mcc: '8211',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'School',
		fullDescription: 'Schools, Elementary and Secondary',
	},
	'8220': {
		mcc: '8220',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Education. University',
		fullDescription:
			'Colleges, Universities, Professional Schools and Junior Colleges',
	},
	'8241': {
		mcc: '8241',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Schools, Correspondence',
		fullDescription: 'Schools, Correspondence',
	},
	'8244': {
		mcc: '8244',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Education. Business',
		fullDescription: 'Schools, Business and Secretarial ',
	},
	'8249': {
		mcc: '8249',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Education',
		fullDescription: 'Schools, Trade and Vocational',
	},
	'8299': {
		mcc: '8299',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Education',
		fullDescription: 'Schools And Educational Services',
	},
	'8351': {
		mcc: '8351',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Kindergarten',
		fullDescription: 'Child Care Services',
	},
	'8398': {
		mcc: '8398',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Charity',
		fullDescription: 'Organizations, Charitable and Social Service',
	},
	'8641': {
		mcc: '8641',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Public organizations',
		fullDescription: 'Associations - Civic, Social and Fraternal',
	},
	'8651': {
		mcc: '8651',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Organizations, Political',
		fullDescription: 'Organizations, Political',
	},
	'8661': {
		mcc: '8661',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Organizations, Religious',
		fullDescription: 'Organizations, Religious',
	},
	'8664': {
		mcc: '8664',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'8675': {
		mcc: '8675',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Autoclub',
		fullDescription: 'Automobile Associations',
	},
	'8699': {
		mcc: '8699',
		group: {
			type: 'MO',
			description: 'Membership оrganizations',
		},
		shortDescription: 'Organizations, Membership',
		fullDescription: 'Organizations, Membership',
	},
	'8734': {
		mcc: '8734',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Testing laboratories',
		fullDescription: 'Testing Laboratories (Non-Medical)',
	},
	'8743': {
		mcc: '8743',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Testing laboratories',
		fullDescription: 'Testing Laboratories (Non-Medical)',
	},
	'8911': {
		mcc: '8911',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Architects',
		fullDescription: 'Architectural, Engineering and Surveying Services',
	},
	'8931': {
		mcc: '8931',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Accounting. Audit',
		fullDescription: 'Accounting, Auditing and Bookkeeping Services',
	},
	'8999': {
		mcc: '8999',
		group: {
			type: 'PFS',
			description: 'Professional services',
		},
		shortDescription: 'Professional services',
		fullDescription: 'Professional services',
	},
	'9034': {
		mcc: '9034',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'I-Purchasing Pilot',
		fullDescription: 'I-Purchasing Pilot',
	},
	'9211': {
		mcc: '9211',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Court',
		fullDescription: 'Court Costs Including Alimony and Child Support',
	},
	'9222': {
		mcc: '9222',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Fines',
		fullDescription: 'Fines',
	},
	'9223': {
		mcc: '9223',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Payouts. Bonds',
		fullDescription: 'Bail and Bond Payments',
	},
	'9311': {
		mcc: '9311',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Taxes',
		fullDescription: 'Tax Payments',
	},
	'9399': {
		mcc: '9399',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Government Services',
		fullDescription: 'Government Services',
	},
	'9401': {
		mcc: '9401',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'I-Purchasing Pilot',
		fullDescription: 'I-Purchasing Pilot',
	},
	'9402': {
		mcc: '9402',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Mail',
		fullDescription: 'Postal Services - Government Only',
	},
	'9405': {
		mcc: '9405',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Government procurement',
		fullDescription: 'Intra-Government Purchases - Government Only',
	},
	'9406': {
		mcc: '9406',
		group: {
			type: 'ES',
			description: 'Entertainment services',
		},
		shortDescription: 'Government Owned Lottery',
		fullDescription: 'Government Owned Lottery',
	},
	'9411': {
		mcc: '9411',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Government Services',
		fullDescription: 'Government loan payments',
	},
	'9700': {
		mcc: '9700',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Cashback',
		fullDescription: 'Automated Referral Service',
	},
	'9701': {
		mcc: '9701',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'VISA',
		fullDescription: 'Visa Credential Server',
	},
	'9702': {
		mcc: '9702',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Emergency services',
		fullDescription: 'GCAS Emergency Services',
	},
	'9751': {
		mcc: '9751',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Document flow',
		fullDescription: 'UK Supermarkets, Electronic Hot File',
	},
	'9752': {
		mcc: '9752',
		group: {
			type: 'WSM',
			description: 'Wholesale suppliers and manufacturers',
		},
		shortDescription: 'Document flow',
		fullDescription: 'UK Petrol Stations, Electronic Hot File',
	},
	'9754': {
		mcc: '9754',
		group: {
			type: 'GS',
			description: 'Government Services',
		},
		shortDescription: 'Horse / Dog racing',
		fullDescription: 'Government-Licensed Horse / Dog Racing',
	},
	'9950': {
		mcc: '9950',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'In-company purchases',
		fullDescription: 'Intra-Company Purchases',
	},
	'9999': {
		mcc: '9999',
		group: {
			type: 'NC',
			description: 'Not categorized',
		},
		shortDescription: 'Miscellaneous',
		fullDescription: 'Miscellaneous',
	},
	'0742': {
		mcc: '0742',
		group: {
			type: 'AS',
			description: 'Agricultural Services',
		},
		shortDescription: 'Veterinary Services',
		fullDescription: 'Veterinary Services',
	},
	'0743': {
		mcc: '0743',
		group: {
			type: 'AS',
			description: 'Agricultural Services',
		},
		shortDescription: 'Wine producers',
		fullDescription: 'Wine producers',
	},
	'0744': {
		mcc: '0744',
		group: {
			type: 'AS',
			description: 'Agricultural Services',
		},
		shortDescription: 'Champagne producers',
		fullDescription: 'Champagne producers',
	},
	'0763': {
		mcc: '0763',
		group: {
			type: 'AS',
			description: 'Agricultural Services',
		},
		shortDescription: 'Agricultural Co-operatives',
		fullDescription: 'Agricultural Co-operatives',
	},
	'0780': {
		mcc: '0780',
		group: {
			type: 'AS',
			description: 'Agricultural Services',
		},
		shortDescription: 'Horticultural and landscaping',
		fullDescription: 'Horticultural Services, Landscaping Services',
	},
}
