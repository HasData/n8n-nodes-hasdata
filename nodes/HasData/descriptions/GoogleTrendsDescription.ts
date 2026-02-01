/* eslint-disable n8n-nodes-base/node-param-description-excess-final-period */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-default-wrong-for-options */
/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
/* eslint-disable n8n-nodes-base/node-param-description-untrimmed */
/* eslint-disable n8n-nodes-base/node-param-description-excess-inner-whitespace */
/* eslint-disable n8n-nodes-base/node-param-description-excess-final-period */
/* eslint-disable n8n-nodes-base/node-param-description-miscased-json */
/* eslint-disable n8n-nodes-base/node-param-type-options-missing-from-limit */
/* eslint-disable n8n-nodes-base/node-param-default-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-comma-separated-hyphen */
/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
/* eslint-disable n8n-nodes-base/node-param-description-identical-to-display-name */
/* eslint-disable n8n-nodes-base/node-param-multi-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow';

export const googleTrendsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_trends'],
			},
		},
		options: [
			{
				name: 'Get Google Trends Data',
				value: 'search',
				description: 'Retrieves Google Trends data for specified search terms and parameters.',
				action: 'Get Google Trends Data',
			},
		],
		default: 'search',
	},
];

export const googleTrendsFields: INodeProperties[] = [
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Specify the search term for which you want to retrieve trends data.',
		displayOptions: {
			show: {
				resource: [
					'google_trends',
				],
				operation: [
					'search',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'google_trends',
				],
				operation: [
					'search',
				],
			},
		},
		options: [
			{
				displayName: 'Location',
				name: 'geo',
				type: 'options',
				default: '',
				description: 'Specifies the location for the search. Defaults to Worldwide if not set or empty.',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: 'AD - Andorra',
						value: 'AD',
					},
					{
						name: 'AD-02 - Canillo',
						value: 'AD-02',
					},
					{
						name: 'AD-03 - Encamp',
						value: 'AD-03',
					},
					{
						name: 'AD-04 - La Massana',
						value: 'AD-04',
					},
					{
						name: 'AD-05 - Ordino',
						value: 'AD-05',
					},
					{
						name: 'AD-06 - Sant Julià de Lòria',
						value: 'AD-06',
					},
					{
						name: 'AD-07 - Andorra la Vella',
						value: 'AD-07',
					},
					{
						name: 'AD-08 - Escaldes-Engordany',
						value: 'AD-08',
					},
					{
						name: 'AE - United Arab Emirates',
						value: 'AE',
					},
					{
						name: 'AE-AJ - Ajman',
						value: 'AE-AJ',
					},
					{
						name: 'AE-AZ - Abu Dhabi',
						value: 'AE-AZ',
					},
					{
						name: 'AE-DU - Dubai',
						value: 'AE-DU',
					},
					{
						name: 'AE-FU - Fujairah',
						value: 'AE-FU',
					},
					{
						name: 'AE-RK - Ras al Khaimah',
						value: 'AE-RK',
					},
					{
						name: 'AE-SH - Sharjah',
						value: 'AE-SH',
					},
					{
						name: 'AE-UQ - Umm Al Quwain',
						value: 'AE-UQ',
					},
					{
						name: 'AF - Afghanistan',
						value: 'AF',
					},
					{
						name: 'AF-BAL - Balkh',
						value: 'AF-BAL',
					},
					{
						name: 'AF-BAM - Bamiyan',
						value: 'AF-BAM',
					},
					{
						name: 'AF-BDG - Badghis',
						value: 'AF-BDG',
					},
					{
						name: 'AF-BDS - Badakhshan',
						value: 'AF-BDS',
					},
					{
						name: 'AF-BGL - Baghlan',
						value: 'AF-BGL',
					},
					{
						name: 'AF-DAY - Daykundi',
						value: 'AF-DAY',
					},
					{
						name: 'AF-FRA - Farah',
						value: 'AF-FRA',
					},
					{
						name: 'AF-FYB - Faryab',
						value: 'AF-FYB',
					},
					{
						name: 'AF-GHA - Ghazni',
						value: 'AF-GHA',
					},
					{
						name: 'AF-GHO - Ghor',
						value: 'AF-GHO',
					},
					{
						name: 'AF-HEL - Helmand',
						value: 'AF-HEL',
					},
					{
						name: 'AF-HER - Herat',
						value: 'AF-HER',
					},
					{
						name: 'AF-JOW - Jowzjan',
						value: 'AF-JOW',
					},
					{
						name: 'AF-KAB - Kabul',
						value: 'AF-KAB',
					},
					{
						name: 'AF-KAN - Kandahar',
						value: 'AF-KAN',
					},
					{
						name: 'AF-KAP - Kapisa',
						value: 'AF-KAP',
					},
					{
						name: 'AF-KDZ - Kunduz',
						value: 'AF-KDZ',
					},
					{
						name: 'AF-KHO - Khost',
						value: 'AF-KHO',
					},
					{
						name: 'AF-KNR - Kunar',
						value: 'AF-KNR',
					},
					{
						name: 'AF-LAG - Laghman',
						value: 'AF-LAG',
					},
					{
						name: 'AF-LOG - Logar',
						value: 'AF-LOG',
					},
					{
						name: 'AF-NAN - Nangarhar',
						value: 'AF-NAN',
					},
					{
						name: 'AF-NIM - Nimruz',
						value: 'AF-NIM',
					},
					{
						name: 'AF-NUR - Nuristan',
						value: 'AF-NUR',
					},
					{
						name: 'AF-PAN - Panjshir',
						value: 'AF-PAN',
					},
					{
						name: 'AF-PAR - Parvan',
						value: 'AF-PAR',
					},
					{
						name: 'AF-PIA - Paktia',
						value: 'AF-PIA',
					},
					{
						name: 'AF-PKA - Paktika',
						value: 'AF-PKA',
					},
					{
						name: 'AF-SAM - Samangan',
						value: 'AF-SAM',
					},
					{
						name: 'AF-SAR - Sare Pol',
						value: 'AF-SAR',
					},
					{
						name: 'AF-TAK - Takhar',
						value: 'AF-TAK',
					},
					{
						name: 'AF-URU - Oruzgan',
						value: 'AF-URU',
					},
					{
						name: 'AF-WAR - Wardak',
						value: 'AF-WAR',
					},
					{
						name: 'AF-ZAB - Zabul',
						value: 'AF-ZAB',
					},
					{
						name: 'AG - Antigua & Barbuda',
						value: 'AG',
					},
					{
						name: 'AG-05 - Saint Mary',
						value: 'AG-05',
					},
					{
						name: 'AG-06 - Saint Paul',
						value: 'AG-06',
					},
					{
						name: 'AG-10 - Barbuda',
						value: 'AG-10',
					},
					{
						name: 'AG-11 - Redonda',
						value: 'AG-11',
					},
					{
						name: 'AI - Anguilla',
						value: 'AI',
					},
					{
						name: 'AL - Albania',
						value: 'AL',
					},
					{
						name: 'AL-01 - Berat',
						value: 'AL-01',
					},
					{
						name: 'AL-02 - Durrës',
						value: 'AL-02',
					},
					{
						name: 'AL-03 - Elbasan',
						value: 'AL-03',
					},
					{
						name: 'AL-04 - Fier',
						value: 'AL-04',
					},
					{
						name: 'AL-05 - Gjirokastra',
						value: 'AL-05',
					},
					{
						name: 'AL-06 - Korca',
						value: 'AL-06',
					},
					{
						name: 'AL-07 - Kukës County',
						value: 'AL-07',
					},
					{
						name: 'AL-08 - Lezhë County',
						value: 'AL-08',
					},
					{
						name: 'AL-09 - Dibër County',
						value: 'AL-09',
					},
					{
						name: 'AL-10 - Shkodër County',
						value: 'AL-10',
					},
					{
						name: 'AL-11 - Tirana',
						value: 'AL-11',
					},
					{
						name: 'AL-12 - Vlora',
						value: 'AL-12',
					},
					{
						name: 'AM - Armenia',
						value: 'AM',
					},
					{
						name: 'AM-AG - Aragatsotn Province',
						value: 'AM-AG',
					},
					{
						name: 'AM-AR - Ararat Province',
						value: 'AM-AR',
					},
					{
						name: 'AM-AV - Armavir Province',
						value: 'AM-AV',
					},
					{
						name: 'AM-ER - Yerevan',
						value: 'AM-ER',
					},
					{
						name: 'AM-GR - Gegharkunik Province',
						value: 'AM-GR',
					},
					{
						name: 'AM-KT - Kotayk Province',
						value: 'AM-KT',
					},
					{
						name: 'AM-LO - Lori Province',
						value: 'AM-LO',
					},
					{
						name: 'AM-SH - Shirak Province',
						value: 'AM-SH',
					},
					{
						name: 'AM-SU - Syunik Province',
						value: 'AM-SU',
					},
					{
						name: 'AM-TV - Tavush Province',
						value: 'AM-TV',
					},
					{
						name: 'AM-VD - Vayots Dzor Province',
						value: 'AM-VD',
					},
					{
						name: 'AO - Angola',
						value: 'AO',
					},
					{
						name: 'AO-BGO - Bengo Province',
						value: 'AO-BGO',
					},
					{
						name: 'AO-BGU - Benguela Province',
						value: 'AO-BGU',
					},
					{
						name: 'AO-BIE - Bié Province',
						value: 'AO-BIE',
					},
					{
						name: 'AO-CAB - Cabinda Province',
						value: 'AO-CAB',
					},
					{
						name: 'AO-CCU - Cuando Cubango Province',
						value: 'AO-CCU',
					},
					{
						name: 'AO-CNN - Cunene',
						value: 'AO-CNN',
					},
					{
						name: 'AO-CNO - Cuanza Norte Province',
						value: 'AO-CNO',
					},
					{
						name: 'AO-CUS - Cuanza Sul',
						value: 'AO-CUS',
					},
					{
						name: 'AO-HUA - Huambo Province',
						value: 'AO-HUA',
					},
					{
						name: 'AO-HUI - Huila Province',
						value: 'AO-HUI',
					},
					{
						name: 'AO-LNO - Lunda Norte',
						value: 'AO-LNO',
					},
					{
						name: 'AO-LSU - Lunda Sul Province',
						value: 'AO-LSU',
					},
					{
						name: 'AO-LUA - Luanda Province',
						value: 'AO-LUA',
					},
					{
						name: 'AO-MAL - Malanje Province',
						value: 'AO-MAL',
					},
					{
						name: 'AO-MOX - Moxico Province',
						value: 'AO-MOX',
					},
					{
						name: 'AO-NAM - Namibe Province',
						value: 'AO-NAM',
					},
					{
						name: 'AO-UIG - Uíge Province',
						value: 'AO-UIG',
					},
					{
						name: 'AO-ZAI - Zaire Province',
						value: 'AO-ZAI',
					},
					{
						name: 'AQ - Antarctica',
						value: 'AQ',
					},
					{
						name: 'AR - Argentina',
						value: 'AR',
					},
					{
						name: 'AR-A - Salta Province',
						value: 'AR-A',
					},
					{
						name: 'AR-B - Buenos Aires Province',
						value: 'AR-B',
					},
					{
						name: 'AR-C - Autonomous City of Buenos Aires',
						value: 'AR-C',
					},
					{
						name: 'AR-D - San Luis Province',
						value: 'AR-D',
					},
					{
						name: 'AR-E - Entre Rios',
						value: 'AR-E',
					},
					{
						name: 'AR-F - La Rioja Province',
						value: 'AR-F',
					},
					{
						name: 'AR-G - Santiago del Estero Province',
						value: 'AR-G',
					},
					{
						name: 'AR-H - Chaco Province',
						value: 'AR-H',
					},
					{
						name: 'AR-K - Catamarca Province',
						value: 'AR-K',
					},
					{
						name: 'AR-L - La Pampa Province',
						value: 'AR-L',
					},
					{
						name: 'AR-M - Mendoza Province',
						value: 'AR-M',
					},
					{
						name: 'AR-N - Misiones Province',
						value: 'AR-N',
					},
					{
						name: 'AR-P - Formosa Province',
						value: 'AR-P',
					},
					{
						name: 'AR-Q - Neuquen',
						value: 'AR-Q',
					},
					{
						name: 'AR-R - Río Negro',
						value: 'AR-R',
					},
					{
						name: 'AR-S - Santa Fe Province',
						value: 'AR-S',
					},
					{
						name: 'AR-T - Tucumán',
						value: 'AR-T',
					},
					{
						name: 'AR-U - Chubut Province',
						value: 'AR-U',
					},
					{
						name: 'AR-V - Tierra del Fuego Province',
						value: 'AR-V',
					},
					{
						name: 'AR-W - Corrientes Province',
						value: 'AR-W',
					},
					{
						name: 'AR-Y - Jujuy',
						value: 'AR-Y',
					},
					{
						name: 'AR-Z - Santa Cruz Province',
						value: 'AR-Z',
					},
					{
						name: 'AS - American Samoa',
						value: 'AS',
					},
					{
						name: 'AT - Austria',
						value: 'AT',
					},
					{
						name: 'AT-1 - Burgenland',
						value: 'AT-1',
					},
					{
						name: 'AT-2 - Carinthia',
						value: 'AT-2',
					},
					{
						name: 'AT-3 - Lower Austria',
						value: 'AT-3',
					},
					{
						name: 'AT-4 - Upper Austria',
						value: 'AT-4',
					},
					{
						name: 'AT-5 - Salzburg',
						value: 'AT-5',
					},
					{
						name: 'AT-6 - Styria',
						value: 'AT-6',
					},
					{
						name: 'AT-7 - Tyrol',
						value: 'AT-7',
					},
					{
						name: 'AT-8 - Vorarlberg',
						value: 'AT-8',
					},
					{
						name: 'AT-9 - Vienna',
						value: 'AT-9',
					},
					{
						name: 'AU - Australia',
						value: 'AU',
					},
					{
						name: 'AU-ACT - Australian Capital Territory',
						value: 'AU-ACT',
					},
					{
						name: 'AU-NSW - New South Wales',
						value: 'AU-NSW',
					},
					{
						name: 'AU-NT - Northern Territory',
						value: 'AU-NT',
					},
					{
						name: 'AU-QLD - Queensland',
						value: 'AU-QLD',
					},
					{
						name: 'AU-SA - South Australia',
						value: 'AU-SA',
					},
					{
						name: 'AU-TAS - Tasmania',
						value: 'AU-TAS',
					},
					{
						name: 'AU-VIC - Victoria',
						value: 'AU-VIC',
					},
					{
						name: 'AU-WA - Western Australia',
						value: 'AU-WA',
					},
					{
						name: 'AW - Aruba',
						value: 'AW',
					},
					{
						name: 'AX - Åland Islands',
						value: 'AX',
					},
					{
						name: 'AZ - Azerbaijan',
						value: 'AZ',
					},
					{
						name: 'AZ-NX - Nakhchivan Autonomous Republic',
						value: 'AZ-NX',
					},
					{
						name: 'BA - Bosnia & Herzegovina',
						value: 'BA',
					},
					{
						name: 'BA-BIH - Federation of Bosnia and Herzegovina',
						value: 'BA-BIH',
					},
					{
						name: 'BA-BRC - Brčko Distrikt',
						value: 'BA-BRC',
					},
					{
						name: 'BA-SRP - Republika Srpska',
						value: 'BA-SRP',
					},
					{
						name: 'BB - Barbados',
						value: 'BB',
					},
					{
						name: 'BB-01 - Christ Church',
						value: 'BB-01',
					},
					{
						name: 'BB-04 - Saint James',
						value: 'BB-04',
					},
					{
						name: 'BB-06 - Saint Joseph',
						value: 'BB-06',
					},
					{
						name: 'BB-07 - Saint Lucy',
						value: 'BB-07',
					},
					{
						name: 'BB-08 - Saint Michael',
						value: 'BB-08',
					},
					{
						name: 'BB-09 - Saint Peter',
						value: 'BB-09',
					},
					{
						name: 'BB-10 - Saint Philip',
						value: 'BB-10',
					},
					{
						name: 'BD - Bangladesh',
						value: 'BD',
					},
					{
						name: 'BD-A - Barisal Division',
						value: 'BD-A',
					},
					{
						name: 'BD-B - Chittagong Division',
						value: 'BD-B',
					},
					{
						name: 'BD-C - Dhaka Division',
						value: 'BD-C',
					},
					{
						name: 'BD-D - Khulna Division',
						value: 'BD-D',
					},
					{
						name: 'BD-E - Rajshahi Division',
						value: 'BD-E',
					},
					{
						name: 'BD-F - Rangpur Division',
						value: 'BD-F',
					},
					{
						name: 'BD-G - Sylhet Division',
						value: 'BD-G',
					},
					{
						name: 'BE - Belgium',
						value: 'BE',
					},
					{
						name: 'BE-BRU - Brussels',
						value: 'BE-BRU',
					},
					{
						name: 'BE-VLG - Flanders',
						value: 'BE-VLG',
					},
					{
						name: 'BE-WAL - Walloon Region',
						value: 'BE-WAL',
					},
					{
						name: 'BF - Burkina Faso',
						value: 'BF',
					},
					{
						name: 'BF-01 - Boucle du Mouhoun',
						value: 'BF-01',
					},
					{
						name: 'BF-02 - Cascades',
						value: 'BF-02',
					},
					{
						name: 'BF-04 - Centre Est',
						value: 'BF-04',
					},
					{
						name: 'BF-05 - Centre-Nord',
						value: 'BF-05',
					},
					{
						name: 'BF-06 - Centre-Ouest',
						value: 'BF-06',
					},
					{
						name: 'BF-07 - Centre-Sud',
						value: 'BF-07',
					},
					{
						name: 'BF-08 - Est',
						value: 'BF-08',
					},
					{
						name: 'BF-09 - Hauts-Bassins',
						value: 'BF-09',
					},
					{
						name: 'BF-11 - Plateau-Central Region',
						value: 'BF-11',
					},
					{
						name: 'BF-12 - Sahel',
						value: 'BF-12',
					},
					{
						name: 'BF-13 - Sud-Ouest',
						value: 'BF-13',
					},
					{
						name: 'BG - Bulgaria',
						value: 'BG',
					},
					{
						name: 'BG-01 - Blagoevgrad Province',
						value: 'BG-01',
					},
					{
						name: 'BG-02 - Burgas',
						value: 'BG-02',
					},
					{
						name: 'BG-03 - Varna',
						value: 'BG-03',
					},
					{
						name: 'BG-04 - Veliko Tarnovo Province',
						value: 'BG-04',
					},
					{
						name: 'BG-05 - Vidin',
						value: 'BG-05',
					},
					{
						name: 'BG-06 - Vraca',
						value: 'BG-06',
					},
					{
						name: 'BG-07 - Gabrovo',
						value: 'BG-07',
					},
					{
						name: 'BG-08 - Dobrich Province',
						value: 'BG-08',
					},
					{
						name: 'BG-09 - Kardzhali Province',
						value: 'BG-09',
					},
					{
						name: 'BG-10 - Kyustendil Province',
						value: 'BG-10',
					},
					{
						name: 'BG-11 - Lovec',
						value: 'BG-11',
					},
					{
						name: 'BG-12 - Montana Province',
						value: 'BG-12',
					},
					{
						name: 'BG-13 - Pazardzik',
						value: 'BG-13',
					},
					{
						name: 'BG-14 - Pernik',
						value: 'BG-14',
					},
					{
						name: 'BG-15 - Pleven Province',
						value: 'BG-15',
					},
					{
						name: 'BG-16 - Plovdiv Province',
						value: 'BG-16',
					},
					{
						name: 'BG-17 - Razgrad',
						value: 'BG-17',
					},
					{
						name: 'BG-18 - Ruse',
						value: 'BG-18',
					},
					{
						name: 'BG-19 - Silistra',
						value: 'BG-19',
					},
					{
						name: 'BG-20 - Sliven Province',
						value: 'BG-20',
					},
					{
						name: 'BG-21 - Smoljan',
						value: 'BG-21',
					},
					{
						name: 'BG-22 - Sofia City Province',
						value: 'BG-22',
					},
					{
						name: 'BG-23 - Sofia Province',
						value: 'BG-23',
					},
					{
						name: 'BG-24 - Stara Zagora',
						value: 'BG-24',
					},
					{
						name: 'BG-25 - Targovishte Province',
						value: 'BG-25',
					},
					{
						name: 'BG-26 - Haskovo Province',
						value: 'BG-26',
					},
					{
						name: 'BG-27 - Shumen Province',
						value: 'BG-27',
					},
					{
						name: 'BG-28 - Jambol',
						value: 'BG-28',
					},
					{
						name: 'BH - Bahrain',
						value: 'BH',
					},
					{
						name: 'BH-13 - Capital Governorate',
						value: 'BH-13',
					},
					{
						name: 'BH-14 - Southern Governorate',
						value: 'BH-14',
					},
					{
						name: 'BH-15 - Muharraq Governorate',
						value: 'BH-15',
					},
					{
						name: 'BH-16 - Central Governorate',
						value: 'BH-16',
					},
					{
						name: 'BH-17 - Northern Governorate',
						value: 'BH-17',
					},
					{
						name: 'BI - Burundi',
						value: 'BI',
					},
					{
						name: 'BI-BB - Bubanza',
						value: 'BI-BB',
					},
					{
						name: 'BI-BL - Bujumbura Rural',
						value: 'BI-BL',
					},
					{
						name: 'BI-BM - Bujumbura Mairie',
						value: 'BI-BM',
					},
					{
						name: 'BI-BR - Bururi',
						value: 'BI-BR',
					},
					{
						name: 'BI-CA - Cankuzo',
						value: 'BI-CA',
					},
					{
						name: 'BI-CI - Cibitoke',
						value: 'BI-CI',
					},
					{
						name: 'BI-GI - Gitega',
						value: 'BI-GI',
					},
					{
						name: 'BI-KI - Kirundo',
						value: 'BI-KI',
					},
					{
						name: 'BI-KR - Karuzi',
						value: 'BI-KR',
					},
					{
						name: 'BI-KY - Kayanza',
						value: 'BI-KY',
					},
					{
						name: 'BI-MA - Makamba',
						value: 'BI-MA',
					},
					{
						name: 'BI-MU - Muramvya',
						value: 'BI-MU',
					},
					{
						name: 'BI-MW - Mwaro',
						value: 'BI-MW',
					},
					{
						name: 'BI-MY - Muyinga',
						value: 'BI-MY',
					},
					{
						name: 'BI-NG - Ngozi',
						value: 'BI-NG',
					},
					{
						name: 'BI-RT - Rutana',
						value: 'BI-RT',
					},
					{
						name: 'BI-RY - Ruyigi',
						value: 'BI-RY',
					},
					{
						name: 'BJ - Benin',
						value: 'BJ',
					},
					{
						name: 'BJ-AK - Atakora',
						value: 'BJ-AK',
					},
					{
						name: 'BJ-AL - Alibori',
						value: 'BJ-AL',
					},
					{
						name: 'BJ-AQ - Atlantique',
						value: 'BJ-AQ',
					},
					{
						name: 'BJ-BO - Borgou',
						value: 'BJ-BO',
					},
					{
						name: 'BJ-CO - Collines',
						value: 'BJ-CO',
					},
					{
						name: 'BJ-DO - Donga',
						value: 'BJ-DO',
					},
					{
						name: 'BJ-KO - Kouffo',
						value: 'BJ-KO',
					},
					{
						name: 'BJ-MO - Mono',
						value: 'BJ-MO',
					},
					{
						name: 'BJ-OU - Oueme',
						value: 'BJ-OU',
					},
					{
						name: 'BJ-ZO - Zou',
						value: 'BJ-ZO',
					},
					{
						name: 'BL - St. Barthélemy',
						value: 'BL',
					},
					{
						name: 'BM - Bermuda',
						value: 'BM',
					},
					{
						name: 'BN - Brunei',
						value: 'BN',
					},
					{
						name: 'BN-BE - Belait',
						value: 'BN-BE',
					},
					{
						name: 'BN-BM - Brunei-Muara',
						value: 'BN-BM',
					},
					{
						name: 'BN-TE - Temburong',
						value: 'BN-TE',
					},
					{
						name: 'BN-TU - Tutong',
						value: 'BN-TU',
					},
					{
						name: 'BO - Bolivia',
						value: 'BO',
					},
					{
						name: 'BO-B - Beni Department',
						value: 'BO-B',
					},
					{
						name: 'BO-C - Cochabamba Department',
						value: 'BO-C',
					},
					{
						name: 'BO-H - Chuquisaca Department',
						value: 'BO-H',
					},
					{
						name: 'BO-L - La Paz Department',
						value: 'BO-L',
					},
					{
						name: 'BO-N - Pando Department',
						value: 'BO-N',
					},
					{
						name: 'BO-O - Oruro Department',
						value: 'BO-O',
					},
					{
						name: 'BO-P - Potosi Department',
						value: 'BO-P',
					},
					{
						name: 'BO-T - Tarija Department',
						value: 'BO-T',
					},
					{
						name: 'BQ - Caribbean Netherlands',
						value: 'BQ',
					},
					{
						name: 'BQ-BO - Bonaire',
						value: 'BQ-BO',
					},
					{
						name: 'BQ-SA - Saba',
						value: 'BQ-SA',
					},
					{
						name: 'BQ-SE - Sint Eustatius',
						value: 'BQ-SE',
					},
					{
						name: 'BR - Brazil',
						value: 'BR',
					},
					{
						name: 'BR-AC - State of Acre',
						value: 'BR-AC',
					},
					{
						name: 'BR-AL - State of Alagoas',
						value: 'BR-AL',
					},
					{
						name: 'BR-AM - State of Amazonas',
						value: 'BR-AM',
					},
					{
						name: 'BR-AP - State of Amapá',
						value: 'BR-AP',
					},
					{
						name: 'BR-BA - State of Bahia',
						value: 'BR-BA',
					},
					{
						name: 'BR-CE - State of Ceará',
						value: 'BR-CE',
					},
					{
						name: 'BR-DF - Federal District',
						value: 'BR-DF',
					},
					{
						name: 'BR-ES - State of Espírito Santo',
						value: 'BR-ES',
					},
					{
						name: 'BR-GO - State of Goiás',
						value: 'BR-GO',
					},
					{
						name: 'BR-MA - State of Maranhão',
						value: 'BR-MA',
					},
					{
						name: 'BR-MG - State of Minas Gerais',
						value: 'BR-MG',
					},
					{
						name: 'BR-MS - State of Mato Grosso do Sul',
						value: 'BR-MS',
					},
					{
						name: 'BR-MT - State of Mato Grosso',
						value: 'BR-MT',
					},
					{
						name: 'BR-PA - State of Pará',
						value: 'BR-PA',
					},
					{
						name: 'BR-PB - State of Paraíba',
						value: 'BR-PB',
					},
					{
						name: 'BR-PE - State of Pernambuco',
						value: 'BR-PE',
					},
					{
						name: 'BR-PI - State of Piauí',
						value: 'BR-PI',
					},
					{
						name: 'BR-PR - State of Paraná',
						value: 'BR-PR',
					},
					{
						name: 'BR-RJ - State of Rio de Janeiro',
						value: 'BR-RJ',
					},
					{
						name: 'BR-RN - State of Rio Grande do Norte',
						value: 'BR-RN',
					},
					{
						name: 'BR-RO - State of Rondônia',
						value: 'BR-RO',
					},
					{
						name: 'BR-RR - State of Roraima',
						value: 'BR-RR',
					},
					{
						name: 'BR-RS - State of Rio Grande do Sul',
						value: 'BR-RS',
					},
					{
						name: 'BR-SC - State of Santa Catarina',
						value: 'BR-SC',
					},
					{
						name: 'BR-SE - State of Sergipe',
						value: 'BR-SE',
					},
					{
						name: 'BR-SP - State of São Paulo',
						value: 'BR-SP',
					},
					{
						name: 'BR-TO - State of Tocantins',
						value: 'BR-TO',
					},
					{
						name: 'BS - Bahamas',
						value: 'BS',
					},
					{
						name: 'BS-AK - Acklins',
						value: 'BS-AK',
					},
					{
						name: 'BS-BI - Bimini',
						value: 'BS-BI',
					},
					{
						name: 'BS-BP - Black Point',
						value: 'BS-BP',
					},
					{
						name: 'BS-BY - Berry Islands',
						value: 'BS-BY',
					},
					{
						name: 'BS-CE - Central Eleuthera',
						value: 'BS-CE',
					},
					{
						name: 'BS-CI - Cat Island',
						value: 'BS-CI',
					},
					{
						name: 'BS-CK - Crooked Island and Long Cay',
						value: 'BS-CK',
					},
					{
						name: 'BS-CO - Central Abaco',
						value: 'BS-CO',
					},
					{
						name: 'BS-CS - Central Andros',
						value: 'BS-CS',
					},
					{
						name: 'BS-EG - East Grand Bahama',
						value: 'BS-EG',
					},
					{
						name: 'BS-EX - Exuma',
						value: 'BS-EX',
					},
					{
						name: 'BS-FP - Freeport',
						value: 'BS-FP',
					},
					{
						name: 'BS-GC - Grand Cay',
						value: 'BS-GC',
					},
					{
						name: 'BS-HI - Harbour Island',
						value: 'BS-HI',
					},
					{
						name: 'BS-HT - Hope Town',
						value: 'BS-HT',
					},
					{
						name: 'BS-IN - Inagua',
						value: 'BS-IN',
					},
					{
						name: 'BS-LI - Long Island',
						value: 'BS-LI',
					},
					{
						name: 'BS-MC - Mangrove Cay',
						value: 'BS-MC',
					},
					{
						name: 'BS-MG - Mayaguana',
						value: 'BS-MG',
					},
					{
						name: 'BS-MI - Moore\'s Island',
						value: 'BS-MI',
					},
					{
						name: 'BS-NE - North Eleuthera',
						value: 'BS-NE',
					},
					{
						name: 'BS-NO - North Abaco',
						value: 'BS-NO',
					},
					{
						name: 'BS-NS - North Andros',
						value: 'BS-NS',
					},
					{
						name: 'BS-RC - Rum Cay',
						value: 'BS-RC',
					},
					{
						name: 'BS-RI - Ragged Island',
						value: 'BS-RI',
					},
					{
						name: 'BS-SA - South Andros',
						value: 'BS-SA',
					},
					{
						name: 'BS-SE - South Eleuthera',
						value: 'BS-SE',
					},
					{
						name: 'BS-SO - South Abaco',
						value: 'BS-SO',
					},
					{
						name: 'BS-SW - Spanish Wells',
						value: 'BS-SW',
					},
					{
						name: 'BS-WG - West Grand Bahama',
						value: 'BS-WG',
					},
					{
						name: 'BT - Bhutan',
						value: 'BT',
					},
					{
						name: 'BT-11 - Paro',
						value: 'BT-11',
					},
					{
						name: 'BT-12 - Chhukha',
						value: 'BT-12',
					},
					{
						name: 'BT-13 - Haa',
						value: 'BT-13',
					},
					{
						name: 'BT-14 - Samtse',
						value: 'BT-14',
					},
					{
						name: 'BT-15 - Thimphu',
						value: 'BT-15',
					},
					{
						name: 'BT-21 - Tsirang',
						value: 'BT-21',
					},
					{
						name: 'BT-22 - Dagana',
						value: 'BT-22',
					},
					{
						name: 'BT-23 - Punakha',
						value: 'BT-23',
					},
					{
						name: 'BT-24 - Wangdue Phodrang',
						value: 'BT-24',
					},
					{
						name: 'BT-31 - Sarpang',
						value: 'BT-31',
					},
					{
						name: 'BT-32 - Trongsa',
						value: 'BT-32',
					},
					{
						name: 'BT-33 - Bumthang',
						value: 'BT-33',
					},
					{
						name: 'BT-34 - Zhemgang',
						value: 'BT-34',
					},
					{
						name: 'BT-41 - Trashigang',
						value: 'BT-41',
					},
					{
						name: 'BT-42 - Mongar',
						value: 'BT-42',
					},
					{
						name: 'BT-43 - Pemagatshel',
						value: 'BT-43',
					},
					{
						name: 'BT-44 - Lhuntse',
						value: 'BT-44',
					},
					{
						name: 'BT-45 - Samdrup Jongkhar',
						value: 'BT-45',
					},
					{
						name: 'BT-GA - Gasa',
						value: 'BT-GA',
					},
					{
						name: 'BT-TY - Trashiyangtse',
						value: 'BT-TY',
					},
					{
						name: 'BV - Bouvet Island',
						value: 'BV',
					},
					{
						name: 'BW - Botswana',
						value: 'BW',
					},
					{
						name: 'BW-GH - Ghanzi',
						value: 'BW-GH',
					},
					{
						name: 'BW-KG - Kgalagadi',
						value: 'BW-KG',
					},
					{
						name: 'BW-KL - Kgatleng',
						value: 'BW-KL',
					},
					{
						name: 'BW-KW - Kweneng',
						value: 'BW-KW',
					},
					{
						name: 'BW-NE - North-East',
						value: 'BW-NE',
					},
					{
						name: 'BW-SE - South-East',
						value: 'BW-SE',
					},
					{
						name: 'BY - Belarus',
						value: 'BY',
					},
					{
						name: 'BY-BR - Brest Region',
						value: 'BY-BR',
					},
					{
						name: 'BY-HO - Gomel Region',
						value: 'BY-HO',
					},
					{
						name: 'BY-HR - Hrodna Region',
						value: 'BY-HR',
					},
					{
						name: 'BY-MA - Mogilev Region',
						value: 'BY-MA',
					},
					{
						name: 'BY-MI - Minsk Region',
						value: 'BY-MI',
					},
					{
						name: 'BY-VI - Vitebsk Region',
						value: 'BY-VI',
					},
					{
						name: 'BZ-BZ - Belize',
						value: 'BZ-BZ',
					},
					{
						name: 'BZ-CY - Cayo',
						value: 'BZ-CY',
					},
					{
						name: 'BZ-CZL - Corozal',
						value: 'BZ-CZL',
					},
					{
						name: 'BZ-OW - Orange Walk',
						value: 'BZ-OW',
					},
					{
						name: 'BZ-SC - Stann Creek',
						value: 'BZ-SC',
					},
					{
						name: 'BZ-TOL - Toledo',
						value: 'BZ-TOL',
					},
					{
						name: 'CA - Canada',
						value: 'CA',
					},
					{
						name: 'CA-AB - Alberta',
						value: 'CA-AB',
					},
					{
						name: 'CA-BC - British Columbia',
						value: 'CA-BC',
					},
					{
						name: 'CA-MB - Manitoba',
						value: 'CA-MB',
					},
					{
						name: 'CA-NB - New Brunswick',
						value: 'CA-NB',
					},
					{
						name: 'CA-NL - Newfoundland and Labrador',
						value: 'CA-NL',
					},
					{
						name: 'CA-NS - Nova Scotia',
						value: 'CA-NS',
					},
					{
						name: 'CA-NT - Northwest Territories',
						value: 'CA-NT',
					},
					{
						name: 'CA-NU - Nunavut',
						value: 'CA-NU',
					},
					{
						name: 'CA-ON - Ontario',
						value: 'CA-ON',
					},
					{
						name: 'CA-PE - Prince Edward Island',
						value: 'CA-PE',
					},
					{
						name: 'CA-QC - Québec',
						value: 'CA-QC',
					},
					{
						name: 'CA-SK - Saskatchewan',
						value: 'CA-SK',
					},
					{
						name: 'CA-YT - Yukon Territory',
						value: 'CA-YT',
					},
					{
						name: 'CC - Cocos (Keeling) Islands',
						value: 'CC',
					},
					{
						name: 'CD - Congo - Kinshasa',
						value: 'CD',
					},
					{
						name: 'CD-BC - Bas Congo',
						value: 'CD-BC',
					},
					{
						name: 'CD-BN - Bandundu',
						value: 'CD-BN',
					},
					{
						name: 'CD-EQ - Equator',
						value: 'CD-EQ',
					},
					{
						name: 'CD-KA - Katanga',
						value: 'CD-KA',
					},
					{
						name: 'CD-KE - Kasai Oriental',
						value: 'CD-KE',
					},
					{
						name: 'CD-KN - Kinshasa',
						value: 'CD-KN',
					},
					{
						name: 'CD-KW - Kasai Occidental',
						value: 'CD-KW',
					},
					{
						name: 'CD-MA - Maniema',
						value: 'CD-MA',
					},
					{
						name: 'CD-NK - North-Kivu',
						value: 'CD-NK',
					},
					{
						name: 'CD-OR - Orientale',
						value: 'CD-OR',
					},
					{
						name: 'CD-SK - South-Kivu',
						value: 'CD-SK',
					},
					{
						name: 'CF - Central African Republic',
						value: 'CF',
					},
					{
						name: 'CF-AC - Ouham',
						value: 'CF-AC',
					},
					{
						name: 'CF-BB - Bamingui-Bangoran',
						value: 'CF-BB',
					},
					{
						name: 'CF-BGF - Bangui',
						value: 'CF-BGF',
					},
					{
						name: 'CF-BK - Basse-Kotto',
						value: 'CF-BK',
					},
					{
						name: 'CF-HK - Haute-Kotto',
						value: 'CF-HK',
					},
					{
						name: 'CF-HM - Haut-Mbomou',
						value: 'CF-HM',
					},
					{
						name: 'CF-HS - Mambere-Kadei',
						value: 'CF-HS',
					},
					{
						name: 'CF-KB - Nana-Grebizi',
						value: 'CF-KB',
					},
					{
						name: 'CF-KG - Kemo',
						value: 'CF-KG',
					},
					{
						name: 'CF-LB - Lobaye',
						value: 'CF-LB',
					},
					{
						name: 'CF-MB - Mbomou',
						value: 'CF-MB',
					},
					{
						name: 'CF-MP - Ombella-M\'Poko',
						value: 'CF-MP',
					},
					{
						name: 'CF-NM - Nana-Mambéré',
						value: 'CF-NM',
					},
					{
						name: 'CF-OP - Ouham-Pendé',
						value: 'CF-OP',
					},
					{
						name: 'CF-SE - Sangha-Mbare',
						value: 'CF-SE',
					},
					{
						name: 'CF-UK - Ouaka',
						value: 'CF-UK',
					},
					{
						name: 'CF-VK - Vakaga',
						value: 'CF-VK',
					},
					{
						name: 'CG - Congo - Brazzaville',
						value: 'CG',
					},
					{
						name: 'CG-11 - Bouenza',
						value: 'CG-11',
					},
					{
						name: 'CG-12 - Pool',
						value: 'CG-12',
					},
					{
						name: 'CG-13 - Sangha',
						value: 'CG-13',
					},
					{
						name: 'CG-15 - Cuvette-Ouest',
						value: 'CG-15',
					},
					{
						name: 'CG-16 - Pointe Noire',
						value: 'CG-16',
					},
					{
						name: 'CG-2 - Lekoumou',
						value: 'CG-2',
					},
					{
						name: 'CG-5 - Kouilou',
						value: 'CG-5',
					},
					{
						name: 'CG-7 - Likouala',
						value: 'CG-7',
					},
					{
						name: 'CG-8 - Cuvette',
						value: 'CG-8',
					},
					{
						name: 'CG-9 - Niari',
						value: 'CG-9',
					},
					{
						name: 'CG-BZV - Brazzaville',
						value: 'CG-BZV',
					},
					{
						name: 'CH - Switzerland',
						value: 'CH',
					},
					{
						name: 'CH-AG - Aargau',
						value: 'CH-AG',
					},
					{
						name: 'CH-AI - Appenzell Innerrhoden',
						value: 'CH-AI',
					},
					{
						name: 'CH-AR - Appenzell Outer Rhodes',
						value: 'CH-AR',
					},
					{
						name: 'CH-BE - Canton of Bern',
						value: 'CH-BE',
					},
					{
						name: 'CH-BL - Basel-Landschaft',
						value: 'CH-BL',
					},
					{
						name: 'CH-BS - Basel-Stadt',
						value: 'CH-BS',
					},
					{
						name: 'CH-FR - Canton of Fribourg',
						value: 'CH-FR',
					},
					{
						name: 'CH-GE - Geneva',
						value: 'CH-GE',
					},
					{
						name: 'CH-GL - Canton of Glarus',
						value: 'CH-GL',
					},
					{
						name: 'CH-GR - Grisons',
						value: 'CH-GR',
					},
					{
						name: 'CH-JU - Canton of Jura',
						value: 'CH-JU',
					},
					{
						name: 'CH-LU - Lucerne',
						value: 'CH-LU',
					},
					{
						name: 'CH-NE - Canton of Neuchâtel',
						value: 'CH-NE',
					},
					{
						name: 'CH-NW - Nidwalden',
						value: 'CH-NW',
					},
					{
						name: 'CH-OW - Canton of Obwalden',
						value: 'CH-OW',
					},
					{
						name: 'CH-SG - St. Gallen',
						value: 'CH-SG',
					},
					{
						name: 'CH-SH - Canton of Schaffhausen',
						value: 'CH-SH',
					},
					{
						name: 'CH-SO - Canton of Solothurn',
						value: 'CH-SO',
					},
					{
						name: 'CH-SZ - Canton of Schwyz',
						value: 'CH-SZ',
					},
					{
						name: 'CH-TG - Thurgau',
						value: 'CH-TG',
					},
					{
						name: 'CH-TI - Ticino',
						value: 'CH-TI',
					},
					{
						name: 'CH-UR - Canton of Uri',
						value: 'CH-UR',
					},
					{
						name: 'CH-VD - Vaud',
						value: 'CH-VD',
					},
					{
						name: 'CH-VS - Valais',
						value: 'CH-VS',
					},
					{
						name: 'CH-ZG - Canton of Zug',
						value: 'CH-ZG',
					},
					{
						name: 'CH-ZH - Zurich',
						value: 'CH-ZH',
					},
					{
						name: 'CI - Côte d’Ivoire',
						value: 'CI',
					},
					{
						name: 'CI-01 - Lagunes',
						value: 'CI-01',
					},
					{
						name: 'CI-02 - Haut-Sassandra',
						value: 'CI-02',
					},
					{
						name: 'CI-04 - Vallee du Bandama',
						value: 'CI-04',
					},
					{
						name: 'CI-05 - Moyen-Comoe',
						value: 'CI-05',
					},
					{
						name: 'CI-06 - Dix-Huit Montagnes',
						value: 'CI-06',
					},
					{
						name: 'CI-07 - Lacs',
						value: 'CI-07',
					},
					{
						name: 'CI-08 - Zanzan',
						value: 'CI-08',
					},
					{
						name: 'CI-09 - Bas-Sassandra',
						value: 'CI-09',
					},
					{
						name: 'CI-10 - Denguele',
						value: 'CI-10',
					},
					{
						name: 'CI-11 - Nzi-Comoe',
						value: 'CI-11',
					},
					{
						name: 'CI-12 - Marahoue',
						value: 'CI-12',
					},
					{
						name: 'CI-13 - Sud-Comoe',
						value: 'CI-13',
					},
					{
						name: 'CI-14 - Worodougou',
						value: 'CI-14',
					},
					{
						name: 'CI-15 - Sud-Bandama',
						value: 'CI-15',
					},
					{
						name: 'CI-16 - Agnebi',
						value: 'CI-16',
					},
					{
						name: 'CI-17 - Bafing',
						value: 'CI-17',
					},
					{
						name: 'CI-18 - Fromager',
						value: 'CI-18',
					},
					{
						name: 'CI-19 - Moyen-Cavally',
						value: 'CI-19',
					},
					{
						name: 'CK - Cook Islands',
						value: 'CK',
					},
					{
						name: 'CL - Chile',
						value: 'CL',
					},
					{
						name: 'CL-AI - XI Región',
						value: 'CL-AI',
					},
					{
						name: 'CL-AN - Antofagasta Region',
						value: 'CL-AN',
					},
					{
						name: 'CL-AP - Arica y Parinacota Region',
						value: 'CL-AP',
					},
					{
						name: 'CL-AR - Araucania',
						value: 'CL-AR',
					},
					{
						name: 'CL-AT - Atacama Region',
						value: 'CL-AT',
					},
					{
						name: 'CL-BI - Bío Bío Region',
						value: 'CL-BI',
					},
					{
						name: 'CL-CO - Coquimbo Region',
						value: 'CL-CO',
					},
					{
						name: 'CL-LI - O\'Higgins Region',
						value: 'CL-LI',
					},
					{
						name: 'CL-LL - Los Lagos Region',
						value: 'CL-LL',
					},
					{
						name: 'CL-LR - Los Ríos Region',
						value: 'CL-LR',
					},
					{
						name: 'CL-MA - Magallanes y la Antártica Chilena Region',
						value: 'CL-MA',
					},
					{
						name: 'CL-ML - Maule Region',
						value: 'CL-ML',
					},
					{
						name: 'CL-RM - Santiago Metropolitan Region',
						value: 'CL-RM',
					},
					{
						name: 'CL-TA - Tarapacá Region',
						value: 'CL-TA',
					},
					{
						name: 'CL-VS - Valparaiso Region',
						value: 'CL-VS',
					},
					{
						name: 'CM - Cameroon',
						value: 'CM',
					},
					{
						name: 'CM-AD - Adamawa Region',
						value: 'CM-AD',
					},
					{
						name: 'CM-EN - Extreme North',
						value: 'CM-EN',
					},
					{
						name: 'CM-ES - East',
						value: 'CM-ES',
					},
					{
						name: 'CM-LT - Littoral',
						value: 'CM-LT',
					},
					{
						name: 'CM-NW - Northwest',
						value: 'CM-NW',
					},
					{
						name: 'CM-OU - West',
						value: 'CM-OU',
					},
					{
						name: 'CM-SW - Southwest',
						value: 'CM-SW',
					},
					{
						name: 'CN - China',
						value: 'CN',
					},
					{
						name: 'CN-11 - Beijing',
						value: 'CN-11',
					},
					{
						name: 'CN-12 - Tianjin',
						value: 'CN-12',
					},
					{
						name: 'CN-13 - Hebei',
						value: 'CN-13',
					},
					{
						name: 'CN-14 - Shanxi',
						value: 'CN-14',
					},
					{
						name: 'CN-15 - Inner Mongolia',
						value: 'CN-15',
					},
					{
						name: 'CN-21 - Liaoning',
						value: 'CN-21',
					},
					{
						name: 'CN-22 - Jilin',
						value: 'CN-22',
					},
					{
						name: 'CN-23 - Heilongjiang',
						value: 'CN-23',
					},
					{
						name: 'CN-31 - Shanghai',
						value: 'CN-31',
					},
					{
						name: 'CN-32 - Jiangsu',
						value: 'CN-32',
					},
					{
						name: 'CN-33 - Zhejiang',
						value: 'CN-33',
					},
					{
						name: 'CN-34 - Anhui',
						value: 'CN-34',
					},
					{
						name: 'CN-35 - Fujian',
						value: 'CN-35',
					},
					{
						name: 'CN-36 - Jiangxi',
						value: 'CN-36',
					},
					{
						name: 'CN-37 - Shandong',
						value: 'CN-37',
					},
					{
						name: 'CN-41 - Henan',
						value: 'CN-41',
					},
					{
						name: 'CN-42 - Hubei',
						value: 'CN-42',
					},
					{
						name: 'CN-43 - Hunan',
						value: 'CN-43',
					},
					{
						name: 'CN-44 - Guangdong',
						value: 'CN-44',
					},
					{
						name: 'CN-45 - Guangxi',
						value: 'CN-45',
					},
					{
						name: 'CN-46 - Hainan',
						value: 'CN-46',
					},
					{
						name: 'CN-50 - Chongqing',
						value: 'CN-50',
					},
					{
						name: 'CN-51 - Sichuan',
						value: 'CN-51',
					},
					{
						name: 'CN-52 - Guizhou',
						value: 'CN-52',
					},
					{
						name: 'CN-53 - Yunnan',
						value: 'CN-53',
					},
					{
						name: 'CN-54 - Tibet',
						value: 'CN-54',
					},
					{
						name: 'CN-61 - Shaanxi',
						value: 'CN-61',
					},
					{
						name: 'CN-62 - Gansu',
						value: 'CN-62',
					},
					{
						name: 'CN-63 - Qinghai',
						value: 'CN-63',
					},
					{
						name: 'CN-64 - Ningxia',
						value: 'CN-64',
					},
					{
						name: 'CN-65 - Xinjiang',
						value: 'CN-65',
					},
					{
						name: 'CO - Colombia',
						value: 'CO',
					},
					{
						name: 'CO-AMA - Amazonas Department',
						value: 'CO-AMA',
					},
					{
						name: 'CO-ANT - Antioquia',
						value: 'CO-ANT',
					},
					{
						name: 'CO-ARA - Arauca',
						value: 'CO-ARA',
					},
					{
						name: 'CO-ATL - Atlantico',
						value: 'CO-ATL',
					},
					{
						name: 'CO-BOL - Bolivar',
						value: 'CO-BOL',
					},
					{
						name: 'CO-BOY - Boyaca',
						value: 'CO-BOY',
					},
					{
						name: 'CO-CAL - Caldas',
						value: 'CO-CAL',
					},
					{
						name: 'CO-CAQ - Caquetá',
						value: 'CO-CAQ',
					},
					{
						name: 'CO-CAS - Casanare',
						value: 'CO-CAS',
					},
					{
						name: 'CO-CAU - Cauca Department',
						value: 'CO-CAU',
					},
					{
						name: 'CO-CES - Cesar',
						value: 'CO-CES',
					},
					{
						name: 'CO-CHO - Choco',
						value: 'CO-CHO',
					},
					{
						name: 'CO-COR - Cordoba',
						value: 'CO-COR',
					},
					{
						name: 'CO-CUN - Cundinamarca',
						value: 'CO-CUN',
					},
					{
						name: 'CO-DC - Bogota',
						value: 'CO-DC',
					},
					{
						name: 'CO-GUA - Guainia',
						value: 'CO-GUA',
					},
					{
						name: 'CO-GUV - Guaviare',
						value: 'CO-GUV',
					},
					{
						name: 'CO-HUI - Huila',
						value: 'CO-HUI',
					},
					{
						name: 'CO-LAG - La Guajira',
						value: 'CO-LAG',
					},
					{
						name: 'CO-MAG - Magdalena',
						value: 'CO-MAG',
					},
					{
						name: 'CO-MET - Meta',
						value: 'CO-MET',
					},
					{
						name: 'CO-NAR - Narino',
						value: 'CO-NAR',
					},
					{
						name: 'CO-NSA - North Santander',
						value: 'CO-NSA',
					},
					{
						name: 'CO-PUT - Putumayo',
						value: 'CO-PUT',
					},
					{
						name: 'CO-QUI - Quindio',
						value: 'CO-QUI',
					},
					{
						name: 'CO-RIS - Risaralda',
						value: 'CO-RIS',
					},
					{
						name: 'CO-SAN - Santander Department',
						value: 'CO-SAN',
					},
					{
						name: 'CO-SAP - San Andrés and Providencia',
						value: 'CO-SAP',
					},
					{
						name: 'CO-TOL - Tolima',
						value: 'CO-TOL',
					},
					{
						name: 'CO-VAC - Valle del Cauca',
						value: 'CO-VAC',
					},
					{
						name: 'CO-VAU - Vaupes',
						value: 'CO-VAU',
					},
					{
						name: 'CO-VID - Vichada',
						value: 'CO-VID',
					},
					{
						name: 'CR - Costa Rica',
						value: 'CR',
					},
					{
						name: 'CR-A - Alajuela',
						value: 'CR-A',
					},
					{
						name: 'CR-C - Provincia de Cartago',
						value: 'CR-C',
					},
					{
						name: 'CR-G - Guanacaste Province',
						value: 'CR-G',
					},
					{
						name: 'CR-H - Heredia Province',
						value: 'CR-H',
					},
					{
						name: 'CR-L - Limón Province',
						value: 'CR-L',
					},
					{
						name: 'CR-P - Puntarenas Province',
						value: 'CR-P',
					},
					{
						name: 'CR-SJ - San José Province',
						value: 'CR-SJ',
					},
					{
						name: 'CU - Cuba',
						value: 'CU',
					},
					{
						name: 'CU-01 - Pinar del Rio',
						value: 'CU-01',
					},
					{
						name: 'CU-03 - Havana',
						value: 'CU-03',
					},
					{
						name: 'CU-04 - Matanzas',
						value: 'CU-04',
					},
					{
						name: 'CU-05 - Villa Clara',
						value: 'CU-05',
					},
					{
						name: 'CU-06 - Cienfuegos',
						value: 'CU-06',
					},
					{
						name: 'CU-07 - Sancti Spiritus',
						value: 'CU-07',
					},
					{
						name: 'CU-08 - Ciego de Avila',
						value: 'CU-08',
					},
					{
						name: 'CU-09 - Camaguey',
						value: 'CU-09',
					},
					{
						name: 'CU-10 - Las Tunas',
						value: 'CU-10',
					},
					{
						name: 'CU-11 - Holguin',
						value: 'CU-11',
					},
					{
						name: 'CU-12 - Granma',
						value: 'CU-12',
					},
					{
						name: 'CU-13 - Santiago de Cuba',
						value: 'CU-13',
					},
					{
						name: 'CU-14 - Guantanamo',
						value: 'CU-14',
					},
					{
						name: 'CU-15 - Artemisa Province',
						value: 'CU-15',
					},
					{
						name: 'CU-16 - Mayabeque',
						value: 'CU-16',
					},
					{
						name: 'CU-99 - Isla de la Juventud',
						value: 'CU-99',
					},
					{
						name: 'CV - Cape Verde',
						value: 'CV',
					},
					{
						name: 'CV-BR - Brava',
						value: 'CV-BR',
					},
					{
						name: 'CV-BV - Boa Vista',
						value: 'CV-BV',
					},
					{
						name: 'CV-CA - Santa Catarina',
						value: 'CV-CA',
					},
					{
						name: 'CV-CF - Santa Catarina do Fogo',
						value: 'CV-CF',
					},
					{
						name: 'CV-CR - Santa Cruz',
						value: 'CV-CR',
					},
					{
						name: 'CV-MA - Maio',
						value: 'CV-MA',
					},
					{
						name: 'CV-MO - Mosteiros',
						value: 'CV-MO',
					},
					{
						name: 'CV-PA - Paul',
						value: 'CV-PA',
					},
					{
						name: 'CV-PN - Porto Novo',
						value: 'CV-PN',
					},
					{
						name: 'CV-PR - Praia',
						value: 'CV-PR',
					},
					{
						name: 'CV-RB - Ribeira Brava',
						value: 'CV-RB',
					},
					{
						name: 'CV-RG - Ribeira Grande',
						value: 'CV-RG',
					},
					{
						name: 'CV-RS - Ribeira Grande de Santiago',
						value: 'CV-RS',
					},
					{
						name: 'CV-SD - Sao Domingos',
						value: 'CV-SD',
					},
					{
						name: 'CV-SF - Sao Filipe',
						value: 'CV-SF',
					},
					{
						name: 'CV-SL - Sal',
						value: 'CV-SL',
					},
					{
						name: 'CV-SM - Sao Miguel',
						value: 'CV-SM',
					},
					{
						name: 'CV-SO - Sao Lourenco dos Orgaos',
						value: 'CV-SO',
					},
					{
						name: 'CV-SS - Sao Salvador do Mundo',
						value: 'CV-SS',
					},
					{
						name: 'CV-SV - Sao Vicente',
						value: 'CV-SV',
					},
					{
						name: 'CV-TA - Tarrafal',
						value: 'CV-TA',
					},
					{
						name: 'CV-TS - Tarrafal de Sao Nicolau',
						value: 'CV-TS',
					},
					{
						name: 'CW - Curaçao',
						value: 'CW',
					},
					{
						name: 'CX - Christmas Island',
						value: 'CX',
					},
					{
						name: 'CY - Cyprus',
						value: 'CY',
					},
					{
						name: 'CY-01 - Nicosia District',
						value: 'CY-01',
					},
					{
						name: 'CY-02 - Limassol',
						value: 'CY-02',
					},
					{
						name: 'CY-03 - Larnaca',
						value: 'CY-03',
					},
					{
						name: 'CY-04 - Famagusta',
						value: 'CY-04',
					},
					{
						name: 'CY-05 - Paphos',
						value: 'CY-05',
					},
					{
						name: 'CY-06 - Girne',
						value: 'CY-06',
					},
					{
						name: 'CZ - Czechia',
						value: 'CZ',
					},
					{
						name: 'CZ-JC - South Bohemian Region',
						value: 'CZ-JC',
					},
					{
						name: 'CZ-JM - South Moravian Region',
						value: 'CZ-JM',
					},
					{
						name: 'CZ-KA - Karlovy Vary Region',
						value: 'CZ-KA',
					},
					{
						name: 'CZ-KR - Hradec Králové Region',
						value: 'CZ-KR',
					},
					{
						name: 'CZ-LI - Liberec Region',
						value: 'CZ-LI',
					},
					{
						name: 'CZ-MO - Moravian-Silesian Region',
						value: 'CZ-MO',
					},
					{
						name: 'CZ-OL - Olomouc Region',
						value: 'CZ-OL',
					},
					{
						name: 'CZ-PA - Pardubice Region',
						value: 'CZ-PA',
					},
					{
						name: 'CZ-PL - Plzeň Region',
						value: 'CZ-PL',
					},
					{
						name: 'CZ-PR - Prague',
						value: 'CZ-PR',
					},
					{
						name: 'CZ-ST - Central Bohemian Region',
						value: 'CZ-ST',
					},
					{
						name: 'CZ-US - Ústí nad Labem Region',
						value: 'CZ-US',
					},
					{
						name: 'CZ-VY - Vysocina Region',
						value: 'CZ-VY',
					},
					{
						name: 'CZ-ZL - Zlin Region',
						value: 'CZ-ZL',
					},
					{
						name: 'DE - Germany',
						value: 'DE',
					},
					{
						name: 'DE-BB - Brandenburg',
						value: 'DE-BB',
					},
					{
						name: 'DE-BE - Berlin',
						value: 'DE-BE',
					},
					{
						name: 'DE-BW - Baden-Württemberg',
						value: 'DE-BW',
					},
					{
						name: 'DE-BY - Bavaria',
						value: 'DE-BY',
					},
					{
						name: 'DE-HB - Bremen',
						value: 'DE-HB',
					},
					{
						name: 'DE-HE - Hesse',
						value: 'DE-HE',
					},
					{
						name: 'DE-HH - Hamburg',
						value: 'DE-HH',
					},
					{
						name: 'DE-MV - Mecklenburg-Vorpommern',
						value: 'DE-MV',
					},
					{
						name: 'DE-NI - Lower Saxony',
						value: 'DE-NI',
					},
					{
						name: 'DE-NW - North Rhine-Westphalia',
						value: 'DE-NW',
					},
					{
						name: 'DE-RP - Rhineland-Palatinate',
						value: 'DE-RP',
					},
					{
						name: 'DE-SH - Schleswig-Holstein',
						value: 'DE-SH',
					},
					{
						name: 'DE-SL - Saarland',
						value: 'DE-SL',
					},
					{
						name: 'DE-SN - Saxony',
						value: 'DE-SN',
					},
					{
						name: 'DE-ST - Saxony-Anhalt',
						value: 'DE-ST',
					},
					{
						name: 'DE-TH - Thuringia',
						value: 'DE-TH',
					},
					{
						name: 'DJ-AR - Arta',
						value: 'DJ-AR',
					},
					{
						name: 'DJ-AS - Ali Sabieh',
						value: 'DJ-AS',
					},
					{
						name: 'DJ-DI - Dikhil',
						value: 'DJ-DI',
					},
					{
						name: 'DJ-DJ - Djibouti',
						value: 'DJ-DJ',
					},
					{
						name: 'DJ-OB - Obock',
						value: 'DJ-OB',
					},
					{
						name: 'DJ-TA - Tadjourah',
						value: 'DJ-TA',
					},
					{
						name: 'DK - Denmark',
						value: 'DK',
					},
					{
						name: 'DK-81 - North Denmark Region',
						value: 'DK-81',
					},
					{
						name: 'DK-82 - Central Denmark Region',
						value: 'DK-82',
					},
					{
						name: 'DK-83 - Region Syddanmark',
						value: 'DK-83',
					},
					{
						name: 'DK-84 - Capital Region of Denmark',
						value: 'DK-84',
					},
					{
						name: 'DK-85 - Region Zealand',
						value: 'DK-85',
					},
					{
						name: 'DM - Dominica',
						value: 'DM',
					},
					{
						name: 'DM-03 - Saint David Parish',
						value: 'DM-03',
					},
					{
						name: 'DM-04 - Saint George Parish',
						value: 'DM-04',
					},
					{
						name: 'DM-05 - Saint John Parish',
						value: 'DM-05',
					},
					{
						name: 'DM-06 - Saint Joseph Parish',
						value: 'DM-06',
					},
					{
						name: 'DM-07 - Saint Luke Parish',
						value: 'DM-07',
					},
					{
						name: 'DM-08 - Saint Mark Parish',
						value: 'DM-08',
					},
					{
						name: 'DM-09 - Saint Patrick Parish',
						value: 'DM-09',
					},
					{
						name: 'DM-10 - Saint Paul Parish',
						value: 'DM-10',
					},
					{
						name: 'DM-11 - Saint Peter Parish',
						value: 'DM-11',
					},
					{
						name: 'DO - Dominican Republic',
						value: 'DO',
					},
					{
						name: 'DO-01 - Distrito Nacional',
						value: 'DO-01',
					},
					{
						name: 'DO-02 - Azua Province',
						value: 'DO-02',
					},
					{
						name: 'DO-03 - Baoruco Province',
						value: 'DO-03',
					},
					{
						name: 'DO-04 - Barahona Province',
						value: 'DO-04',
					},
					{
						name: 'DO-05 - Dajabón Province',
						value: 'DO-05',
					},
					{
						name: 'DO-06 - Duarte Province',
						value: 'DO-06',
					},
					{
						name: 'DO-07 - Elías Piña Province',
						value: 'DO-07',
					},
					{
						name: 'DO-08 - El Seibo Province',
						value: 'DO-08',
					},
					{
						name: 'DO-09 - Espaillat Province',
						value: 'DO-09',
					},
					{
						name: 'DO-10 - Independencia Province',
						value: 'DO-10',
					},
					{
						name: 'DO-11 - La Altagracia Province',
						value: 'DO-11',
					},
					{
						name: 'DO-12 - La Romana Province',
						value: 'DO-12',
					},
					{
						name: 'DO-13 - La Vega Province',
						value: 'DO-13',
					},
					{
						name: 'DO-14 - María Trinidad Sánchez Province',
						value: 'DO-14',
					},
					{
						name: 'DO-15 - Monte Cristi Province',
						value: 'DO-15',
					},
					{
						name: 'DO-16 - Pedernales Province',
						value: 'DO-16',
					},
					{
						name: 'DO-17 - Peravia Province',
						value: 'DO-17',
					},
					{
						name: 'DO-18 - Puerto Plata Province',
						value: 'DO-18',
					},
					{
						name: 'DO-19 - Hermanas Mirabal Province',
						value: 'DO-19',
					},
					{
						name: 'DO-20 - Samaná Province',
						value: 'DO-20',
					},
					{
						name: 'DO-21 - San Cristóbal Province',
						value: 'DO-21',
					},
					{
						name: 'DO-22 - San Juan Province',
						value: 'DO-22',
					},
					{
						name: 'DO-23 - San Pedro de Macorís Province',
						value: 'DO-23',
					},
					{
						name: 'DO-24 - Sánchez Ramírez Province',
						value: 'DO-24',
					},
					{
						name: 'DO-25 - Santiago Province',
						value: 'DO-25',
					},
					{
						name: 'DO-26 - Santiago Rodríguez Province',
						value: 'DO-26',
					},
					{
						name: 'DO-27 - Valverde Province',
						value: 'DO-27',
					},
					{
						name: 'DO-28 - Monseñor Nouel Province',
						value: 'DO-28',
					},
					{
						name: 'DO-29 - Monte Plata Province',
						value: 'DO-29',
					},
					{
						name: 'DO-30 - Hato Mayor Province',
						value: 'DO-30',
					},
					{
						name: 'DO-31 - San José de Ocoa Province',
						value: 'DO-31',
					},
					{
						name: 'DO-32 - Santo Domingo Province',
						value: 'DO-32',
					},
					{
						name: 'DZ - Algeria',
						value: 'DZ',
					},
					{
						name: 'DZ-01 - Adrar Province',
						value: 'DZ-01',
					},
					{
						name: 'DZ-02 - Chlef Province',
						value: 'DZ-02',
					},
					{
						name: 'DZ-03 - Laghouat Province',
						value: 'DZ-03',
					},
					{
						name: 'DZ-04 - Oum El Bouaghi Province',
						value: 'DZ-04',
					},
					{
						name: 'DZ-05 - Batna Province',
						value: 'DZ-05',
					},
					{
						name: 'DZ-06 - Béjaïa',
						value: 'DZ-06',
					},
					{
						name: 'DZ-07 - Biskra',
						value: 'DZ-07',
					},
					{
						name: 'DZ-08 - Béchar',
						value: 'DZ-08',
					},
					{
						name: 'DZ-09 - Blida Province',
						value: 'DZ-09',
					},
					{
						name: 'DZ-10 - Bouïra Province',
						value: 'DZ-10',
					},
					{
						name: 'DZ-11 - Province of Tamanrasset',
						value: 'DZ-11',
					},
					{
						name: 'DZ-12 - Tebessa',
						value: 'DZ-12',
					},
					{
						name: 'DZ-13 - Tlemcen Province',
						value: 'DZ-13',
					},
					{
						name: 'DZ-14 - Tiaret Province',
						value: 'DZ-14',
					},
					{
						name: 'DZ-15 - Tizi Ouzou Province',
						value: 'DZ-15',
					},
					{
						name: 'DZ-16 - Algiers Province',
						value: 'DZ-16',
					},
					{
						name: 'DZ-17 - Djelfa Province',
						value: 'DZ-17',
					},
					{
						name: 'DZ-18 - Jijel Province',
						value: 'DZ-18',
					},
					{
						name: 'DZ-19 - Setif',
						value: 'DZ-19',
					},
					{
						name: 'DZ-20 - Saïda Province',
						value: 'DZ-20',
					},
					{
						name: 'DZ-21 - Skikda Province',
						value: 'DZ-21',
					},
					{
						name: 'DZ-22 - Sidi-Bel-Abbes',
						value: 'DZ-22',
					},
					{
						name: 'DZ-23 - Annaba Province',
						value: 'DZ-23',
					},
					{
						name: 'DZ-24 - Guelma Province',
						value: 'DZ-24',
					},
					{
						name: 'DZ-25 - Constantine',
						value: 'DZ-25',
					},
					{
						name: 'DZ-26 - Médéa Province',
						value: 'DZ-26',
					},
					{
						name: 'DZ-27 - Mostaganem Province',
						value: 'DZ-27',
					},
					{
						name: 'DZ-28 - M\'Sila Province',
						value: 'DZ-28',
					},
					{
						name: 'DZ-29 - Mascara Province',
						value: 'DZ-29',
					},
					{
						name: 'DZ-30 - Ouargla Province',
						value: 'DZ-30',
					},
					{
						name: 'DZ-31 - Oran Province',
						value: 'DZ-31',
					},
					{
						name: 'DZ-32 - El Bayadh Province',
						value: 'DZ-32',
					},
					{
						name: 'DZ-33 - Illizi Province',
						value: 'DZ-33',
					},
					{
						name: 'DZ-34 - Bordj Bou Arreridj',
						value: 'DZ-34',
					},
					{
						name: 'DZ-35 - Boumerdès Province',
						value: 'DZ-35',
					},
					{
						name: 'DZ-36 - El Taref Province',
						value: 'DZ-36',
					},
					{
						name: 'DZ-37 - Tindouf Province',
						value: 'DZ-37',
					},
					{
						name: 'DZ-38 - Tissemsilt',
						value: 'DZ-38',
					},
					{
						name: 'DZ-39 - El Oued Province',
						value: 'DZ-39',
					},
					{
						name: 'DZ-40 - Khenchela Province',
						value: 'DZ-40',
					},
					{
						name: 'DZ-41 - Souk Ahras Province',
						value: 'DZ-41',
					},
					{
						name: 'DZ-42 - Tipaza Province',
						value: 'DZ-42',
					},
					{
						name: 'DZ-43 - Mila Province',
						value: 'DZ-43',
					},
					{
						name: 'DZ-44 - Aïn Defla Province',
						value: 'DZ-44',
					},
					{
						name: 'DZ-45 - Naâma Province',
						value: 'DZ-45',
					},
					{
						name: 'DZ-46 - Aïn Témouchent Province',
						value: 'DZ-46',
					},
					{
						name: 'DZ-47 - Ghardaia Province',
						value: 'DZ-47',
					},
					{
						name: 'DZ-48 - Relizane Province',
						value: 'DZ-48',
					},
					{
						name: 'EC - Ecuador',
						value: 'EC',
					},
					{
						name: 'EC-A - Azuay',
						value: 'EC-A',
					},
					{
						name: 'EC-B - Bolívar Province',
						value: 'EC-B',
					},
					{
						name: 'EC-C - Carchi Province',
						value: 'EC-C',
					},
					{
						name: 'EC-D - Orellana Province',
						value: 'EC-D',
					},
					{
						name: 'EC-E - Esmeraldas Province',
						value: 'EC-E',
					},
					{
						name: 'EC-F - Cañar Province',
						value: 'EC-F',
					},
					{
						name: 'EC-G - Guayas',
						value: 'EC-G',
					},
					{
						name: 'EC-H - Chimborazo Province',
						value: 'EC-H',
					},
					{
						name: 'EC-I - Imbabura Province',
						value: 'EC-I',
					},
					{
						name: 'EC-L - Loja',
						value: 'EC-L',
					},
					{
						name: 'EC-M - Manabí Province',
						value: 'EC-M',
					},
					{
						name: 'EC-N - Provincia de Napo',
						value: 'EC-N',
					},
					{
						name: 'EC-O - El Oro',
						value: 'EC-O',
					},
					{
						name: 'EC-P - Pichincha',
						value: 'EC-P',
					},
					{
						name: 'EC-R - Los Ríos Province',
						value: 'EC-R',
					},
					{
						name: 'EC-S - Morona-Santiago Province',
						value: 'EC-S',
					},
					{
						name: 'EC-SD - Santo Domingo de los Tsáchilas Province',
						value: 'EC-SD',
					},
					{
						name: 'EC-SE - Santa Elena Province',
						value: 'EC-SE',
					},
					{
						name: 'EC-T - Tungurahua',
						value: 'EC-T',
					},
					{
						name: 'EC-U - Sucumbíos Province',
						value: 'EC-U',
					},
					{
						name: 'EC-W - Galápagos Islands',
						value: 'EC-W',
					},
					{
						name: 'EC-X - Cotopaxi Province',
						value: 'EC-X',
					},
					{
						name: 'EC-Y - Pastaza Province',
						value: 'EC-Y',
					},
					{
						name: 'EC-Z - Zamora-Chinchipe Province',
						value: 'EC-Z',
					},
					{
						name: 'EE - Estonia',
						value: 'EE',
					},
					{
						name: 'EE-37 - Harju County',
						value: 'EE-37',
					},
					{
						name: 'EE-39 - Hiiu County',
						value: 'EE-39',
					},
					{
						name: 'EE-44 - Ida-Viru County',
						value: 'EE-44',
					},
					{
						name: 'EE-49 - Jõgeva County',
						value: 'EE-49',
					},
					{
						name: 'EE-51 - Järva County',
						value: 'EE-51',
					},
					{
						name: 'EE-57 - Lääne County',
						value: 'EE-57',
					},
					{
						name: 'EE-59 - Lääne-Viru County',
						value: 'EE-59',
					},
					{
						name: 'EE-65 - Põlva County',
						value: 'EE-65',
					},
					{
						name: 'EE-67 - Pärnu County',
						value: 'EE-67',
					},
					{
						name: 'EE-70 - Rapla County',
						value: 'EE-70',
					},
					{
						name: 'EE-74 - Saare County',
						value: 'EE-74',
					},
					{
						name: 'EE-78 - Tartu County',
						value: 'EE-78',
					},
					{
						name: 'EE-82 - Valga County',
						value: 'EE-82',
					},
					{
						name: 'EE-84 - Viljandi County',
						value: 'EE-84',
					},
					{
						name: 'EE-86 - Võru County',
						value: 'EE-86',
					},
					{
						name: 'EG - Egypt',
						value: 'EG',
					},
					{
						name: 'EG-ALX - Alexandria Governorate',
						value: 'EG-ALX',
					},
					{
						name: 'EG-ASN - Aswan Governorate',
						value: 'EG-ASN',
					},
					{
						name: 'EG-AST - Assiut Governorate',
						value: 'EG-AST',
					},
					{
						name: 'EG-BA - Red Sea Governorate',
						value: 'EG-BA',
					},
					{
						name: 'EG-BH - El Beheira Governorate',
						value: 'EG-BH',
					},
					{
						name: 'EG-BNS - Beni Suef Governorate',
						value: 'EG-BNS',
					},
					{
						name: 'EG-C - Cairo Governorate',
						value: 'EG-C',
					},
					{
						name: 'EG-DK - Dakahlia Governorate',
						value: 'EG-DK',
					},
					{
						name: 'EG-DT - Damietta Governorate',
						value: 'EG-DT',
					},
					{
						name: 'EG-FYM - Faiyum Governorate',
						value: 'EG-FYM',
					},
					{
						name: 'EG-GH - Gharbia Governorate',
						value: 'EG-GH',
					},
					{
						name: 'EG-GZ - Giza Governorate',
						value: 'EG-GZ',
					},
					{
						name: 'EG-IS - Ismailia Governorate',
						value: 'EG-IS',
					},
					{
						name: 'EG-JS - South Sinai Governorate',
						value: 'EG-JS',
					},
					{
						name: 'EG-KB - Al Qalyubia Governorate',
						value: 'EG-KB',
					},
					{
						name: 'EG-KFS - Kafr El Sheikh Governorate',
						value: 'EG-KFS',
					},
					{
						name: 'EG-KN - Qena Governorate',
						value: 'EG-KN',
					},
					{
						name: 'EG-LX - Luxor Governorate',
						value: 'EG-LX',
					},
					{
						name: 'EG-MN - Menia Governorate',
						value: 'EG-MN',
					},
					{
						name: 'EG-MNF - Menofia Governorate',
						value: 'EG-MNF',
					},
					{
						name: 'EG-MT - Matrouh Governorate',
						value: 'EG-MT',
					},
					{
						name: 'EG-PTS - Port Said Governorate',
						value: 'EG-PTS',
					},
					{
						name: 'EG-SHG - Sohag Governorate',
						value: 'EG-SHG',
					},
					{
						name: 'EG-SHR - Ash Sharqia Governorate',
						value: 'EG-SHR',
					},
					{
						name: 'EG-SIN - North Sinai Governorate',
						value: 'EG-SIN',
					},
					{
						name: 'EG-SUZ - Suez Governorate',
						value: 'EG-SUZ',
					},
					{
						name: 'EG-WAD - New Valley Governorate',
						value: 'EG-WAD',
					},
					{
						name: 'EH - Western Sahara',
						value: 'EH',
					},
					{
						name: 'ER - Eritrea',
						value: 'ER',
					},
					{
						name: 'ER-AN - Anseba',
						value: 'ER-AN',
					},
					{
						name: 'ER-DK - Southern Red Sea',
						value: 'ER-DK',
					},
					{
						name: 'ER-GB - Gash-Barka',
						value: 'ER-GB',
					},
					{
						name: 'ER-SK - Northern Red Sea',
						value: 'ER-SK',
					},
					{
						name: 'ES - Spain',
						value: 'ES',
					},
					{
						name: 'ES-AN - Andalusia',
						value: 'ES-AN',
					},
					{
						name: 'ES-AR - Aragon',
						value: 'ES-AR',
					},
					{
						name: 'ES-AS - Asturias',
						value: 'ES-AS',
					},
					{
						name: 'ES-CB - Cantabria',
						value: 'ES-CB',
					},
					{
						name: 'ES-CE - Ceuta',
						value: 'ES-CE',
					},
					{
						name: 'ES-CL - Castile and León',
						value: 'ES-CL',
					},
					{
						name: 'ES-CM - Castile-La Mancha',
						value: 'ES-CM',
					},
					{
						name: 'ES-CN - Canary Islands',
						value: 'ES-CN',
					},
					{
						name: 'ES-CT - Catalonia',
						value: 'ES-CT',
					},
					{
						name: 'ES-EX - Extremadura',
						value: 'ES-EX',
					},
					{
						name: 'ES-GA - Galicia',
						value: 'ES-GA',
					},
					{
						name: 'ES-IB - Balearic Islands',
						value: 'ES-IB',
					},
					{
						name: 'ES-MC - Region of Murcia',
						value: 'ES-MC',
					},
					{
						name: 'ES-MD - Community of Madrid',
						value: 'ES-MD',
					},
					{
						name: 'ES-ML - Melilla',
						value: 'ES-ML',
					},
					{
						name: 'ES-NC - Navarre',
						value: 'ES-NC',
					},
					{
						name: 'ES-PV - Basque Country',
						value: 'ES-PV',
					},
					{
						name: 'ES-RI - La Rioja',
						value: 'ES-RI',
					},
					{
						name: 'ES-VC - Valencian Community',
						value: 'ES-VC',
					},
					{
						name: 'ET - Ethiopia',
						value: 'ET',
					},
					{
						name: 'ET-AA - Addis Ababa',
						value: 'ET-AA',
					},
					{
						name: 'ET-AF - Afar',
						value: 'ET-AF',
					},
					{
						name: 'ET-AM - Amhara',
						value: 'ET-AM',
					},
					{
						name: 'ET-BE - Benishangul-Gumuz',
						value: 'ET-BE',
					},
					{
						name: 'ET-DD - Dire Dawa',
						value: 'ET-DD',
					},
					{
						name: 'ET-GA - Gambella',
						value: 'ET-GA',
					},
					{
						name: 'ET-HA - Harari',
						value: 'ET-HA',
					},
					{
						name: 'ET-OR - Oromia',
						value: 'ET-OR',
					},
					{
						name: 'ET-SN - Southern Nations Nationalities and People\'s Region',
						value: 'ET-SN',
					},
					{
						name: 'ET-SO - Somali',
						value: 'ET-SO',
					},
					{
						name: 'ET-TI - Tigray',
						value: 'ET-TI',
					},
					{
						name: 'FI - Finland',
						value: 'FI',
					},
					{
						name: 'FI-02 - South Karelia',
						value: 'FI-02',
					},
					{
						name: 'FI-03 - Southern Ostrobothnia',
						value: 'FI-03',
					},
					{
						name: 'FI-04 - Southern Savonia',
						value: 'FI-04',
					},
					{
						name: 'FI-05 - Kainuu',
						value: 'FI-05',
					},
					{
						name: 'FI-06 - Tavastia Proper',
						value: 'FI-06',
					},
					{
						name: 'FI-07 - Central Ostrobothnia',
						value: 'FI-07',
					},
					{
						name: 'FI-08 - Central Finland',
						value: 'FI-08',
					},
					{
						name: 'FI-09 - Kymenlaakso',
						value: 'FI-09',
					},
					{
						name: 'FI-10 - Lapland',
						value: 'FI-10',
					},
					{
						name: 'FI-11 - Pirkanmaa',
						value: 'FI-11',
					},
					{
						name: 'FI-12 - Ostrobothnia',
						value: 'FI-12',
					},
					{
						name: 'FI-13 - North - Karelia',
						value: 'FI-13',
					},
					{
						name: 'FI-14 - Northern Ostrobothnia',
						value: 'FI-14',
					},
					{
						name: 'FI-15 - Northern Savonia',
						value: 'FI-15',
					},
					{
						name: 'FI-16 - Päijänne Tavastia',
						value: 'FI-16',
					},
					{
						name: 'FI-17 - Satakunta',
						value: 'FI-17',
					},
					{
						name: 'FI-18 - Uusimaa',
						value: 'FI-18',
					},
					{
						name: 'FI-19 - Southwest Finland',
						value: 'FI-19',
					},
					{
						name: 'FJ - Fiji',
						value: 'FJ',
					},
					{
						name: 'FJ-C - Central Division',
						value: 'FJ-C',
					},
					{
						name: 'FJ-E - Eastern Division',
						value: 'FJ-E',
					},
					{
						name: 'FJ-N - Northern Division',
						value: 'FJ-N',
					},
					{
						name: 'FJ-R - Rotuma',
						value: 'FJ-R',
					},
					{
						name: 'FJ-W - Western Division',
						value: 'FJ-W',
					},
					{
						name: 'FK - Falkland Islands (Islas Malvinas)',
						value: 'FK',
					},
					{
						name: 'FM - Micronesia',
						value: 'FM',
					},
					{
						name: 'FM-KSA - Kosrae',
						value: 'FM-KSA',
					},
					{
						name: 'FM-PNI - Pohnpei',
						value: 'FM-PNI',
					},
					{
						name: 'FM-TRK - Chuuk',
						value: 'FM-TRK',
					},
					{
						name: 'FM-YAP - Yap',
						value: 'FM-YAP',
					},
					{
						name: 'FO - Faroe Islands',
						value: 'FO',
					},
					{
						name: 'FR - France',
						value: 'FR',
					},
					{
						name: 'FR-A - Alsace',
						value: 'FR-A',
					},
					{
						name: 'FR-B - Aquitaine',
						value: 'FR-B',
					},
					{
						name: 'FR-C - Auvergne',
						value: 'FR-C',
					},
					{
						name: 'FR-D - Burgundy',
						value: 'FR-D',
					},
					{
						name: 'FR-E - Brittany',
						value: 'FR-E',
					},
					{
						name: 'FR-F - Centre-Val de Loire',
						value: 'FR-F',
					},
					{
						name: 'FR-G - Champagne-Ardenne',
						value: 'FR-G',
					},
					{
						name: 'FR-H - Corsica',
						value: 'FR-H',
					},
					{
						name: 'FR-I - Franche-Comté',
						value: 'FR-I',
					},
					{
						name: 'FR-J - Île-de-France',
						value: 'FR-J',
					},
					{
						name: 'FR-K - Languedoc-Roussillon',
						value: 'FR-K',
					},
					{
						name: 'FR-L - Limousin',
						value: 'FR-L',
					},
					{
						name: 'FR-M - Lorraine',
						value: 'FR-M',
					},
					{
						name: 'FR-N - Midi-Pyrénées',
						value: 'FR-N',
					},
					{
						name: 'FR-O - Nord-Pas-de-Calais',
						value: 'FR-O',
					},
					{
						name: 'FR-P - Lower Normandy',
						value: 'FR-P',
					},
					{
						name: 'FR-Q - Upper Normandy',
						value: 'FR-Q',
					},
					{
						name: 'FR-R - Pays de la Loire',
						value: 'FR-R',
					},
					{
						name: 'FR-S - Picardy',
						value: 'FR-S',
					},
					{
						name: 'FR-T - Poitou-Charentes',
						value: 'FR-T',
					},
					{
						name: 'FR-U - Provence-Alpes-Côte d\'Azur',
						value: 'FR-U',
					},
					{
						name: 'FR-V - Rhone-Alpes',
						value: 'FR-V',
					},
					{
						name: 'GA - Gabon',
						value: 'GA',
					},
					{
						name: 'GA-1 - Estuaire',
						value: 'GA-1',
					},
					{
						name: 'GA-2 - Haut-Ogooue',
						value: 'GA-2',
					},
					{
						name: 'GA-3 - Moyen-Ogooue',
						value: 'GA-3',
					},
					{
						name: 'GA-4 - Ngounie',
						value: 'GA-4',
					},
					{
						name: 'GA-5 - Nyanga',
						value: 'GA-5',
					},
					{
						name: 'GA-6 - Ogooue-Ivindo',
						value: 'GA-6',
					},
					{
						name: 'GA-7 - Ogooue-Lolo',
						value: 'GA-7',
					},
					{
						name: 'GA-8 - Ogooue-Maritime',
						value: 'GA-8',
					},
					{
						name: 'GA-9 - Woleu-Ntem',
						value: 'GA-9',
					},
					{
						name: 'GB - United Kingdom',
						value: 'GB',
					},
					{
						name: 'GB-ENG - England',
						value: 'GB-ENG',
					},
					{
						name: 'GB-NIR - Northern Ireland',
						value: 'GB-NIR',
					},
					{
						name: 'GB-SCT - Scotland',
						value: 'GB-SCT',
					},
					{
						name: 'GB-WLS - Wales',
						value: 'GB-WLS',
					},
					{
						name: 'GD - Grenada',
						value: 'GD',
					},
					{
						name: 'GD-04 - Saint John',
						value: 'GD-04',
					},
					{
						name: 'GD-05 - Saint Mark',
						value: 'GD-05',
					},
					{
						name: 'GD-10 - Carriacou and Petite Martinique',
						value: 'GD-10',
					},
					{
						name: 'GE-AB - Abkhazia',
						value: 'GE-AB',
					},
					{
						name: 'GE-AJ - Adjara',
						value: 'GE-AJ',
					},
					{
						name: 'GE-GU - Guria',
						value: 'GE-GU',
					},
					{
						name: 'GE-IM - Imereti',
						value: 'GE-IM',
					},
					{
						name: 'GE-KA - Kakheti',
						value: 'GE-KA',
					},
					{
						name: 'GE-KK - Kvemo Kartli',
						value: 'GE-KK',
					},
					{
						name: 'GE-MM - Mtskheta-Mtianeti',
						value: 'GE-MM',
					},
					{
						name: 'GE-RL - Racha-Lechkhumi and Lower Svaneti',
						value: 'GE-RL',
					},
					{
						name: 'GE-SJ - Samtskhe-Javakheti',
						value: 'GE-SJ',
					},
					{
						name: 'GE-SK - Shida Kartli',
						value: 'GE-SK',
					},
					{
						name: 'GE-SZ - Samegrelo-Upper Svaneti',
						value: 'GE-SZ',
					},
					{
						name: 'GE-TB - Tbilisi',
						value: 'GE-TB',
					},
					{
						name: 'GF - French Guiana',
						value: 'GF',
					},
					{
						name: 'GG - Guernsey',
						value: 'GG',
					},
					{
						name: 'GH - Ghana',
						value: 'GH',
					},
					{
						name: 'GH-AA - Greater Accra Region',
						value: 'GH-AA',
					},
					{
						name: 'GH-AH - Ashanti Region',
						value: 'GH-AH',
					},
					{
						name: 'GH-BA - Brong-Ahafo Region',
						value: 'GH-BA',
					},
					{
						name: 'GH-TV - Volta Region',
						value: 'GH-TV',
					},
					{
						name: 'GH-UE - Upper East Region',
						value: 'GH-UE',
					},
					{
						name: 'GH-UW - Upper West Region',
						value: 'GH-UW',
					},
					{
						name: 'GI - Gibraltar',
						value: 'GI',
					},
					{
						name: 'GL - Greenland',
						value: 'GL',
					},
					{
						name: 'GL-KU - Kujalleq',
						value: 'GL-KU',
					},
					{
						name: 'GL-QA - Qaasuitsup',
						value: 'GL-QA',
					},
					{
						name: 'GL-QE - Qeqqata',
						value: 'GL-QE',
					},
					{
						name: 'GL-SM - Sermersooq',
						value: 'GL-SM',
					},
					{
						name: 'GM - Gambia',
						value: 'GM',
					},
					{
						name: 'GM-B - Banjul',
						value: 'GM-B',
					},
					{
						name: 'GM-L - Lower River',
						value: 'GM-L',
					},
					{
						name: 'GM-M - Central River',
						value: 'GM-M',
					},
					{
						name: 'GM-N - North Bank Division',
						value: 'GM-N',
					},
					{
						name: 'GM-U - Upper River',
						value: 'GM-U',
					},
					{
						name: 'GM-W - West Coast Region',
						value: 'GM-W',
					},
					{
						name: 'GN - Guinea',
						value: 'GN',
					},
					{
						name: 'GN-B - Boké',
						value: 'GN-B',
					},
					{
						name: 'GN-C - Conakry',
						value: 'GN-C',
					},
					{
						name: 'GN-D - Kindia',
						value: 'GN-D',
					},
					{
						name: 'GN-F - Faranah',
						value: 'GN-F',
					},
					{
						name: 'GN-K - Kankan',
						value: 'GN-K',
					},
					{
						name: 'GN-L - Labé',
						value: 'GN-L',
					},
					{
						name: 'GN-M - Mamou',
						value: 'GN-M',
					},
					{
						name: 'GN-N - Nzérékoré',
						value: 'GN-N',
					},
					{
						name: 'GP - Guadeloupe',
						value: 'GP',
					},
					{
						name: 'GQ - Equatorial Guinea',
						value: 'GQ',
					},
					{
						name: 'GQ-AN - Annobón',
						value: 'GQ-AN',
					},
					{
						name: 'GQ-BN - Bioko Norte',
						value: 'GQ-BN',
					},
					{
						name: 'GQ-BS - Bioko Sur',
						value: 'GQ-BS',
					},
					{
						name: 'GQ-CS - Centro Sur',
						value: 'GQ-CS',
					},
					{
						name: 'GQ-KN - Kie-Ntem',
						value: 'GQ-KN',
					},
					{
						name: 'GQ-LI - Litoral',
						value: 'GQ-LI',
					},
					{
						name: 'GQ-WN - Wele-Nzas',
						value: 'GQ-WN',
					},
					{
						name: 'GR - Greece',
						value: 'GR',
					},
					{
						name: 'GS - South Georgia & South Sandwich Islands',
						value: 'GS',
					},
					{
						name: 'GT - Guatemala',
						value: 'GT',
					},
					{
						name: 'GT-AV - Alta Verapaz',
						value: 'GT-AV',
					},
					{
						name: 'GT-BV - Baja Verapaz Department',
						value: 'GT-BV',
					},
					{
						name: 'GT-CM - Chimaltenango Department',
						value: 'GT-CM',
					},
					{
						name: 'GT-CQ - Chiquimula Department',
						value: 'GT-CQ',
					},
					{
						name: 'GT-ES - Escuintla',
						value: 'GT-ES',
					},
					{
						name: 'GT-GU - Guatemala Department',
						value: 'GT-GU',
					},
					{
						name: 'GT-HU - Huehuetenango Department',
						value: 'GT-HU',
					},
					{
						name: 'GT-IZ - Izabal Department',
						value: 'GT-IZ',
					},
					{
						name: 'GT-JA - Jalapa Department',
						value: 'GT-JA',
					},
					{
						name: 'GT-JU - Jutiapa Department',
						value: 'GT-JU',
					},
					{
						name: 'GT-PE - Petén Department',
						value: 'GT-PE',
					},
					{
						name: 'GT-PR - El Progreso Department',
						value: 'GT-PR',
					},
					{
						name: 'GT-QC - Quiché Department',
						value: 'GT-QC',
					},
					{
						name: 'GT-QZ - Quetzaltenango Department',
						value: 'GT-QZ',
					},
					{
						name: 'GT-RE - Retalhuleu Department',
						value: 'GT-RE',
					},
					{
						name: 'GT-SA - Sacatepequez',
						value: 'GT-SA',
					},
					{
						name: 'GT-SM - San Marcos Department',
						value: 'GT-SM',
					},
					{
						name: 'GT-SO - Sololá Department',
						value: 'GT-SO',
					},
					{
						name: 'GT-SR - Santa Rosa Department',
						value: 'GT-SR',
					},
					{
						name: 'GT-SU - Suchitepequez',
						value: 'GT-SU',
					},
					{
						name: 'GT-TO - Totonicapán Department',
						value: 'GT-TO',
					},
					{
						name: 'GT-ZA - Zacapa Department',
						value: 'GT-ZA',
					},
					{
						name: 'GU - Guam',
						value: 'GU',
					},
					{
						name: 'GW - Guinea-Bissau',
						value: 'GW',
					},
					{
						name: 'GW-BA - Bafata',
						value: 'GW-BA',
					},
					{
						name: 'GW-BL - Bolama',
						value: 'GW-BL',
					},
					{
						name: 'GW-BM - Biombo',
						value: 'GW-BM',
					},
					{
						name: 'GW-BS - Bissau',
						value: 'GW-BS',
					},
					{
						name: 'GW-CA - Cacheu',
						value: 'GW-CA',
					},
					{
						name: 'GW-GA - Gabu',
						value: 'GW-GA',
					},
					{
						name: 'GW-OI - Oio',
						value: 'GW-OI',
					},
					{
						name: 'GW-QU - Quinara',
						value: 'GW-QU',
					},
					{
						name: 'GW-TO - Tombali Region',
						value: 'GW-TO',
					},
					{
						name: 'GY - Guyana',
						value: 'GY',
					},
					{
						name: 'GY-BA - Barima-Waini',
						value: 'GY-BA',
					},
					{
						name: 'GY-CU - Cuyuni-Mazaruni',
						value: 'GY-CU',
					},
					{
						name: 'GY-DE - Demerara-Mahaica',
						value: 'GY-DE',
					},
					{
						name: 'GY-EB - East Berbice-Corentyne',
						value: 'GY-EB',
					},
					{
						name: 'GY-ES - Essequibo Islands-West Demerara',
						value: 'GY-ES',
					},
					{
						name: 'GY-MA - Mahaica-Berbice',
						value: 'GY-MA',
					},
					{
						name: 'GY-PM - Pomeroon-Supenaam',
						value: 'GY-PM',
					},
					{
						name: 'GY-PT - Potaro-Siparuni',
						value: 'GY-PT',
					},
					{
						name: 'GY-UD - Upper Demerara-Berbice',
						value: 'GY-UD',
					},
					{
						name: 'GY-UT - Upper Takutu-Upper Essequibo',
						value: 'GY-UT',
					},
					{
						name: 'HK - Hong Kong',
						value: 'HK',
					},
					{
						name: 'HM - Heard & McDonald Islands',
						value: 'HM',
					},
					{
						name: 'HN - Honduras',
						value: 'HN',
					},
					{
						name: 'HN-AT - Atlantida',
						value: 'HN-AT',
					},
					{
						name: 'HN-CH - Choluteca',
						value: 'HN-CH',
					},
					{
						name: 'HN-CL - Colon',
						value: 'HN-CL',
					},
					{
						name: 'HN-CM - Comayagua',
						value: 'HN-CM',
					},
					{
						name: 'HN-CP - Copan',
						value: 'HN-CP',
					},
					{
						name: 'HN-CR - Cortés',
						value: 'HN-CR',
					},
					{
						name: 'HN-EP - El Paraiso',
						value: 'HN-EP',
					},
					{
						name: 'HN-FM - Francisco Morazan',
						value: 'HN-FM',
					},
					{
						name: 'HN-GD - Gracias a Dios',
						value: 'HN-GD',
					},
					{
						name: 'HN-IB - Bay Islands',
						value: 'HN-IB',
					},
					{
						name: 'HN-IN - Intibuca',
						value: 'HN-IN',
					},
					{
						name: 'HN-LE - Lempira',
						value: 'HN-LE',
					},
					{
						name: 'HN-LP - La Paz',
						value: 'HN-LP',
					},
					{
						name: 'HN-OC - Ocotepeque',
						value: 'HN-OC',
					},
					{
						name: 'HN-OL - Olancho',
						value: 'HN-OL',
					},
					{
						name: 'HN-SB - Santa Barbara',
						value: 'HN-SB',
					},
					{
						name: 'HN-VA - Valle',
						value: 'HN-VA',
					},
					{
						name: 'HN-YO - Yoro',
						value: 'HN-YO',
					},
					{
						name: 'HR - Croatia',
						value: 'HR',
					},
					{
						name: 'HR-01 - Zagreb County',
						value: 'HR-01',
					},
					{
						name: 'HR-02 - Krapina-Zagorje County',
						value: 'HR-02',
					},
					{
						name: 'HR-03 - Sisak-Moslavina County',
						value: 'HR-03',
					},
					{
						name: 'HR-04 - Karlovac County',
						value: 'HR-04',
					},
					{
						name: 'HR-05 - Varaždin County',
						value: 'HR-05',
					},
					{
						name: 'HR-06 - Koprivnica-Križevci County',
						value: 'HR-06',
					},
					{
						name: 'HR-07 - Bjelovar-Bilogora County',
						value: 'HR-07',
					},
					{
						name: 'HR-08 - Primorje-Gorski Kotar County',
						value: 'HR-08',
					},
					{
						name: 'HR-09 - Lika-Senj County',
						value: 'HR-09',
					},
					{
						name: 'HR-10 - Virovitica-Podravina County',
						value: 'HR-10',
					},
					{
						name: 'HR-11 - Požega-Slavonia County',
						value: 'HR-11',
					},
					{
						name: 'HR-12 - Brod-Posavina County',
						value: 'HR-12',
					},
					{
						name: 'HR-13 - Zadar County',
						value: 'HR-13',
					},
					{
						name: 'HR-14 - Osijek-Baranja County',
						value: 'HR-14',
					},
					{
						name: 'HR-15 - Šibenik-Knin County',
						value: 'HR-15',
					},
					{
						name: 'HR-16 - Vukovar-Srijem County',
						value: 'HR-16',
					},
					{
						name: 'HR-17 - Split-Dalmatia County',
						value: 'HR-17',
					},
					{
						name: 'HR-18 - Istria County',
						value: 'HR-18',
					},
					{
						name: 'HR-19 - Dubrovnik-Neretva County',
						value: 'HR-19',
					},
					{
						name: 'HR-20 - Međimurje County',
						value: 'HR-20',
					},
					{
						name: 'HR-21 - City of Zagreb',
						value: 'HR-21',
					},
					{
						name: 'HT - Haiti',
						value: 'HT',
					},
					{
						name: 'HT-AR - Artibonite',
						value: 'HT-AR',
					},
					{
						name: 'HT-CE - Centre',
						value: 'HT-CE',
					},
					{
						name: 'HT-GA - Grand\'Anse',
						value: 'HT-GA',
					},
					{
						name: 'HT-ND - Nord',
						value: 'HT-ND',
					},
					{
						name: 'HT-NE - Nord-Est',
						value: 'HT-NE',
					},
					{
						name: 'HT-NI - Nippes',
						value: 'HT-NI',
					},
					{
						name: 'HT-NO - Nord-Ouest',
						value: 'HT-NO',
					},
					{
						name: 'HT-OU - Ouest',
						value: 'HT-OU',
					},
					{
						name: 'HT-SD - Sud',
						value: 'HT-SD',
					},
					{
						name: 'HT-SE - Sud-Est',
						value: 'HT-SE',
					},
					{
						name: 'HU - Hungary',
						value: 'HU',
					},
					{
						name: 'HU-BA - Baranya',
						value: 'HU-BA',
					},
					{
						name: 'HU-BE - Békés County',
						value: 'HU-BE',
					},
					{
						name: 'HU-BK - Bács-Kiskun',
						value: 'HU-BK',
					},
					{
						name: 'HU-BU - Budapest',
						value: 'HU-BU',
					},
					{
						name: 'HU-BZ - Borsod-Abaúj-Zemplén',
						value: 'HU-BZ',
					},
					{
						name: 'HU-CS - Csongrád',
						value: 'HU-CS',
					},
					{
						name: 'HU-FE - Fejér',
						value: 'HU-FE',
					},
					{
						name: 'HU-GS - Gyor-Moson-Sopron',
						value: 'HU-GS',
					},
					{
						name: 'HU-HB - Hajdú-Bihar',
						value: 'HU-HB',
					},
					{
						name: 'HU-HE - Heves County',
						value: 'HU-HE',
					},
					{
						name: 'HU-JN - Jász-Nagykun-Szolnok',
						value: 'HU-JN',
					},
					{
						name: 'HU-KE - Komárom-Esztergom',
						value: 'HU-KE',
					},
					{
						name: 'HU-NO - Nógrád County',
						value: 'HU-NO',
					},
					{
						name: 'HU-PE - Pest County',
						value: 'HU-PE',
					},
					{
						name: 'HU-SO - Somogy County',
						value: 'HU-SO',
					},
					{
						name: 'HU-SZ - Szabolcs-Szatmár-Bereg',
						value: 'HU-SZ',
					},
					{
						name: 'HU-TO - Tolna County',
						value: 'HU-TO',
					},
					{
						name: 'HU-VA - Vas County',
						value: 'HU-VA',
					},
					{
						name: 'HU-VE - Veszprém',
						value: 'HU-VE',
					},
					{
						name: 'HU-ZA - Zala County',
						value: 'HU-ZA',
					},
					{
						name: 'ID - Indonesia',
						value: 'ID',
					},
					{
						name: 'ID-AC - Aceh',
						value: 'ID-AC',
					},
					{
						name: 'ID-BA - Bali',
						value: 'ID-BA',
					},
					{
						name: 'ID-BB - Bangka Belitung Islands',
						value: 'ID-BB',
					},
					{
						name: 'ID-BE - Bengkulu',
						value: 'ID-BE',
					},
					{
						name: 'ID-BT - Banten',
						value: 'ID-BT',
					},
					{
						name: 'ID-GO - Gorontalo',
						value: 'ID-GO',
					},
					{
						name: 'ID-JA - Jambi',
						value: 'ID-JA',
					},
					{
						name: 'ID-JB - West Java',
						value: 'ID-JB',
					},
					{
						name: 'ID-JI - East Java',
						value: 'ID-JI',
					},
					{
						name: 'ID-JK - Special Capital Region of Jakarta',
						value: 'ID-JK',
					},
					{
						name: 'ID-JT - Central Java',
						value: 'ID-JT',
					},
					{
						name: 'ID-KB - West Kalimantan',
						value: 'ID-KB',
					},
					{
						name: 'ID-KI - East Kalimantan',
						value: 'ID-KI',
					},
					{
						name: 'ID-KR - Riau Islands',
						value: 'ID-KR',
					},
					{
						name: 'ID-KS - South Kalimantan',
						value: 'ID-KS',
					},
					{
						name: 'ID-KT - Central Kalimantan',
						value: 'ID-KT',
					},
					{
						name: 'ID-KU - North Kalimantan',
						value: 'ID-KU',
					},
					{
						name: 'ID-LA - Lampung',
						value: 'ID-LA',
					},
					{
						name: 'ID-MA - Maluku',
						value: 'ID-MA',
					},
					{
						name: 'ID-MU - North Maluku',
						value: 'ID-MU',
					},
					{
						name: 'ID-NB - West Nusa Tenggara',
						value: 'ID-NB',
					},
					{
						name: 'ID-NT - East Nusa Tenggara',
						value: 'ID-NT',
					},
					{
						name: 'ID-PA - Papua',
						value: 'ID-PA',
					},
					{
						name: 'ID-PB - West Papua',
						value: 'ID-PB',
					},
					{
						name: 'ID-RI - Riau',
						value: 'ID-RI',
					},
					{
						name: 'ID-SA - North Sulawesi',
						value: 'ID-SA',
					},
					{
						name: 'ID-SB - West Sumatra',
						value: 'ID-SB',
					},
					{
						name: 'ID-SG - South East Sulawesi',
						value: 'ID-SG',
					},
					{
						name: 'ID-SN - South Sulawesi',
						value: 'ID-SN',
					},
					{
						name: 'ID-SR - West Sulawesi',
						value: 'ID-SR',
					},
					{
						name: 'ID-SS - South Sumatra',
						value: 'ID-SS',
					},
					{
						name: 'ID-ST - Central Sulawesi',
						value: 'ID-ST',
					},
					{
						name: 'ID-SU - North Sumatra',
						value: 'ID-SU',
					},
					{
						name: 'ID-YO - Special Region of Yogyakarta',
						value: 'ID-YO',
					},
					{
						name: 'IE - Ireland',
						value: 'IE',
					},
					{
						name: 'IL - Israel',
						value: 'IL',
					},
					{
						name: 'IL-D - South District',
						value: 'IL-D',
					},
					{
						name: 'IL-HA - Haifa District',
						value: 'IL-HA',
					},
					{
						name: 'IL-JM - Jerusalem District',
						value: 'IL-JM',
					},
					{
						name: 'IL-M - Center District',
						value: 'IL-M',
					},
					{
						name: 'IL-TA - Tel Aviv District',
						value: 'IL-TA',
					},
					{
						name: 'IL-Z - North District',
						value: 'IL-Z',
					},
					{
						name: 'IM - Isle of Man',
						value: 'IM',
					},
					{
						name: 'IN - India',
						value: 'IN',
					},
					{
						name: 'IN-AN - Andaman and Nicobar Islands',
						value: 'IN-AN',
					},
					{
						name: 'IN-AP - Andhra Pradesh',
						value: 'IN-AP',
					},
					{
						name: 'IN-AR - Arunachal Pradesh',
						value: 'IN-AR',
					},
					{
						name: 'IN-AS - Assam',
						value: 'IN-AS',
					},
					{
						name: 'IN-BR - Bihar',
						value: 'IN-BR',
					},
					{
						name: 'IN-CH - Chandigarh',
						value: 'IN-CH',
					},
					{
						name: 'IN-CT - Chhattisgarh',
						value: 'IN-CT',
					},
					{
						name: 'IN-DD - Daman and Diu',
						value: 'IN-DD',
					},
					{
						name: 'IN-DL - Delhi',
						value: 'IN-DL',
					},
					{
						name: 'IN-DN - Dadra and Nagar Haveli',
						value: 'IN-DN',
					},
					{
						name: 'IN-GA - Goa',
						value: 'IN-GA',
					},
					{
						name: 'IN-GJ - Gujarat',
						value: 'IN-GJ',
					},
					{
						name: 'IN-HP - Himachal Pradesh',
						value: 'IN-HP',
					},
					{
						name: 'IN-HR - Haryana',
						value: 'IN-HR',
					},
					{
						name: 'IN-JH - Jharkhand',
						value: 'IN-JH',
					},
					{
						name: 'IN-JK - Jammu and Kashmir',
						value: 'IN-JK',
					},
					{
						name: 'IN-KA - Karnataka',
						value: 'IN-KA',
					},
					{
						name: 'IN-KL - Kerala',
						value: 'IN-KL',
					},
					{
						name: 'IN-LD - Lakshadweep',
						value: 'IN-LD',
					},
					{
						name: 'IN-MH - Maharashtra',
						value: 'IN-MH',
					},
					{
						name: 'IN-ML - Meghalaya',
						value: 'IN-ML',
					},
					{
						name: 'IN-MN - Manipur',
						value: 'IN-MN',
					},
					{
						name: 'IN-MP - Madhya Pradesh',
						value: 'IN-MP',
					},
					{
						name: 'IN-MZ - Mizoram',
						value: 'IN-MZ',
					},
					{
						name: 'IN-NL - Nagaland',
						value: 'IN-NL',
					},
					{
						name: 'IN-OR - Odisha',
						value: 'IN-OR',
					},
					{
						name: 'IN-PY - Puducherry',
						value: 'IN-PY',
					},
					{
						name: 'IN-RJ - Rajasthan',
						value: 'IN-RJ',
					},
					{
						name: 'IN-SK - Sikkim',
						value: 'IN-SK',
					},
					{
						name: 'IN-TG - Telangana',
						value: 'IN-TG',
					},
					{
						name: 'IN-TN - Tamil Nadu',
						value: 'IN-TN',
					},
					{
						name: 'IN-TR - Tripura',
						value: 'IN-TR',
					},
					{
						name: 'IN-UP - Uttar Pradesh',
						value: 'IN-UP',
					},
					{
						name: 'IN-UT - Uttarakhand',
						value: 'IN-UT',
					},
					{
						name: 'IN-WB - West Bengal',
						value: 'IN-WB',
					},
					{
						name: 'IO - British Indian Ocean Territory',
						value: 'IO',
					},
					{
						name: 'IQ - Iraq',
						value: 'IQ',
					},
					{
						name: 'IQ-AN - Al Anbar',
						value: 'IQ-AN',
					},
					{
						name: 'IQ-AR - Erbil',
						value: 'IQ-AR',
					},
					{
						name: 'IQ-BA - Basrah',
						value: 'IQ-BA',
					},
					{
						name: 'IQ-BB - Babil',
						value: 'IQ-BB',
					},
					{
						name: 'IQ-BG - Baghdad',
						value: 'IQ-BG',
					},
					{
						name: 'IQ-DA - Duhok',
						value: 'IQ-DA',
					},
					{
						name: 'IQ-DI - Diyala',
						value: 'IQ-DI',
					},
					{
						name: 'IQ-DQ - Dhi Qar',
						value: 'IQ-DQ',
					},
					{
						name: 'IQ-KA - Karbala',
						value: 'IQ-KA',
					},
					{
						name: 'IQ-MA - Maysan',
						value: 'IQ-MA',
					},
					{
						name: 'IQ-MU - Al Muthanna',
						value: 'IQ-MU',
					},
					{
						name: 'IQ-NA - An-Najaf',
						value: 'IQ-NA',
					},
					{
						name: 'IQ-NI - Ninawa',
						value: 'IQ-NI',
					},
					{
						name: 'IQ-QA - Al-Qadisiyyah',
						value: 'IQ-QA',
					},
					{
						name: 'IQ-SD - Salah Al-Din',
						value: 'IQ-SD',
					},
					{
						name: 'IQ-SU - Sulaymaniyah',
						value: 'IQ-SU',
					},
					{
						name: 'IQ-TS - Kirkuk',
						value: 'IQ-TS',
					},
					{
						name: 'IQ-WA - Wasit',
						value: 'IQ-WA',
					},
					{
						name: 'IR - Iran',
						value: 'IR',
					},
					{
						name: 'IR-01 - East Azerbaijan',
						value: 'IR-01',
					},
					{
						name: 'IR-02 - West Azerbaijan',
						value: 'IR-02',
					},
					{
						name: 'IR-03 - Ardabil',
						value: 'IR-03',
					},
					{
						name: 'IR-04 - Isfahan',
						value: 'IR-04',
					},
					{
						name: 'IR-05 - Ilam',
						value: 'IR-05',
					},
					{
						name: 'IR-06 - Bushehr',
						value: 'IR-06',
					},
					{
						name: 'IR-07 - Tehran',
						value: 'IR-07',
					},
					{
						name: 'IR-08 - Chaharmahal and Bakhtiari',
						value: 'IR-08',
					},
					{
						name: 'IR-10 - Khuzestan',
						value: 'IR-10',
					},
					{
						name: 'IR-11 - Zanjan',
						value: 'IR-11',
					},
					{
						name: 'IR-12 - Semnan',
						value: 'IR-12',
					},
					{
						name: 'IR-13 - Sistan and Baluchestan',
						value: 'IR-13',
					},
					{
						name: 'IR-14 - Fars',
						value: 'IR-14',
					},
					{
						name: 'IR-15 - Kerman',
						value: 'IR-15',
					},
					{
						name: 'IR-16 - Kurdistan',
						value: 'IR-16',
					},
					{
						name: 'IR-17 - Kermanshah',
						value: 'IR-17',
					},
					{
						name: 'IR-18 - Kohgiluyeh Va Boyer Ahmad',
						value: 'IR-18',
					},
					{
						name: 'IR-19 - Gilan',
						value: 'IR-19',
					},
					{
						name: 'IR-20 - Lorestan',
						value: 'IR-20',
					},
					{
						name: 'IR-21 - Mazandaran',
						value: 'IR-21',
					},
					{
						name: 'IR-22 - Markazi',
						value: 'IR-22',
					},
					{
						name: 'IR-23 - Hormozgan',
						value: 'IR-23',
					},
					{
						name: 'IR-24 - Hamadan',
						value: 'IR-24',
					},
					{
						name: 'IR-25 - Yazd',
						value: 'IR-25',
					},
					{
						name: 'IR-26 - Qom',
						value: 'IR-26',
					},
					{
						name: 'IR-27 - Golestan',
						value: 'IR-27',
					},
					{
						name: 'IR-28 - Qazvin',
						value: 'IR-28',
					},
					{
						name: 'IR-29 - South Khorasan',
						value: 'IR-29',
					},
					{
						name: 'IR-30 - Khorasan Razavi',
						value: 'IR-30',
					},
					{
						name: 'IR-31 - North Khorasan',
						value: 'IR-31',
					},
					{
						name: 'IR-32 - Alborz',
						value: 'IR-32',
					},
					{
						name: 'IS - Iceland',
						value: 'IS',
					},
					{
						name: 'IS-1 - Capital Region',
						value: 'IS-1',
					},
					{
						name: 'IS-2 - Southern Peninsula Region',
						value: 'IS-2',
					},
					{
						name: 'IS-4 - Westfjords Region',
						value: 'IS-4',
					},
					{
						name: 'IS-5 - Northwestern Region',
						value: 'IS-5',
					},
					{
						name: 'IS-6 - Northeast',
						value: 'IS-6',
					},
					{
						name: 'IT - Italy',
						value: 'IT',
					},
					{
						name: 'IT-21 - Piedmont',
						value: 'IT-21',
					},
					{
						name: 'IT-23 - Aosta',
						value: 'IT-23',
					},
					{
						name: 'IT-25 - Lombardy',
						value: 'IT-25',
					},
					{
						name: 'IT-32 - Trentino-Alto Adige/South Tyrol',
						value: 'IT-32',
					},
					{
						name: 'IT-34 - Veneto',
						value: 'IT-34',
					},
					{
						name: 'IT-36 - Friuli-Venezia Giulia',
						value: 'IT-36',
					},
					{
						name: 'IT-42 - Liguria',
						value: 'IT-42',
					},
					{
						name: 'IT-45 - Emilia-Romagna',
						value: 'IT-45',
					},
					{
						name: 'IT-52 - Tuscany',
						value: 'IT-52',
					},
					{
						name: 'IT-55 - Umbria',
						value: 'IT-55',
					},
					{
						name: 'IT-57 - Marche',
						value: 'IT-57',
					},
					{
						name: 'IT-62 - Lazio',
						value: 'IT-62',
					},
					{
						name: 'IT-65 - Abruzzo',
						value: 'IT-65',
					},
					{
						name: 'IT-67 - Molise',
						value: 'IT-67',
					},
					{
						name: 'IT-72 - Campania',
						value: 'IT-72',
					},
					{
						name: 'IT-75 - Apulia',
						value: 'IT-75',
					},
					{
						name: 'IT-77 - Basilicata',
						value: 'IT-77',
					},
					{
						name: 'IT-78 - Calabria',
						value: 'IT-78',
					},
					{
						name: 'IT-82 - Sicily',
						value: 'IT-82',
					},
					{
						name: 'IT-88 - Sardinia',
						value: 'IT-88',
					},
					{
						name: 'JE - Jersey',
						value: 'JE',
					},
					{
						name: 'JM - Jamaica',
						value: 'JM',
					},
					{
						name: 'JM-01 - Kingston Parish',
						value: 'JM-01',
					},
					{
						name: 'JM-02 - Saint Andrew Parish',
						value: 'JM-02',
					},
					{
						name: 'JM-03 - Saint Thomas Parish',
						value: 'JM-03',
					},
					{
						name: 'JM-04 - Portland Parish',
						value: 'JM-04',
					},
					{
						name: 'JM-05 - Saint Mary Parish',
						value: 'JM-05',
					},
					{
						name: 'JM-06 - Saint Ann Parish',
						value: 'JM-06',
					},
					{
						name: 'JM-07 - Trelawny Parish',
						value: 'JM-07',
					},
					{
						name: 'JM-08 - Saint James Parish',
						value: 'JM-08',
					},
					{
						name: 'JM-09 - Hanover Parish',
						value: 'JM-09',
					},
					{
						name: 'JM-10 - Westmoreland Parish',
						value: 'JM-10',
					},
					{
						name: 'JM-11 - Saint Elizabeth Parish',
						value: 'JM-11',
					},
					{
						name: 'JM-12 - Manchester Parish',
						value: 'JM-12',
					},
					{
						name: 'JM-13 - Clarendon Parish',
						value: 'JM-13',
					},
					{
						name: 'JM-14 - Saint Catherine Parish',
						value: 'JM-14',
					},
					{
						name: 'JO - Jordan',
						value: 'JO',
					},
					{
						name: 'JO-AJ - Ajloun Governorate',
						value: 'JO-AJ',
					},
					{
						name: 'JO-AM - Amman Governorate',
						value: 'JO-AM',
					},
					{
						name: 'JO-AQ - Aqaba Governorate',
						value: 'JO-AQ',
					},
					{
						name: 'JO-AT - Tafilah Governorate',
						value: 'JO-AT',
					},
					{
						name: 'JO-AZ - Zarqa Governorate',
						value: 'JO-AZ',
					},
					{
						name: 'JO-BA - Balqa Governorate',
						value: 'JO-BA',
					},
					{
						name: 'JO-IR - Irbid Governorate',
						value: 'JO-IR',
					},
					{
						name: 'JO-JA - Jerash Governorate',
						value: 'JO-JA',
					},
					{
						name: 'JO-KA - Karak Governorate',
						value: 'JO-KA',
					},
					{
						name: 'JO-MA - Mafraq Governorate',
						value: 'JO-MA',
					},
					{
						name: 'JO-MD - Madaba Governorate',
						value: 'JO-MD',
					},
					{
						name: 'JO-MN - Ma\'an Governorate',
						value: 'JO-MN',
					},
					{
						name: 'JP - Japan',
						value: 'JP',
					},
					{
						name: 'JP-01 - Hokkaido Prefecture',
						value: 'JP-01',
					},
					{
						name: 'JP-02 - Aomori Prefecture',
						value: 'JP-02',
					},
					{
						name: 'JP-03 - Iwate Prefecture',
						value: 'JP-03',
					},
					{
						name: 'JP-04 - Miyagi Prefecture',
						value: 'JP-04',
					},
					{
						name: 'JP-05 - Akita Prefecture',
						value: 'JP-05',
					},
					{
						name: 'JP-06 - Yamagata Prefecture',
						value: 'JP-06',
					},
					{
						name: 'JP-07 - Fukushima Prefecture',
						value: 'JP-07',
					},
					{
						name: 'JP-08 - Ibaraki Prefecture',
						value: 'JP-08',
					},
					{
						name: 'JP-09 - Tochigi Prefecture',
						value: 'JP-09',
					},
					{
						name: 'JP-10 - Gunma Prefecture',
						value: 'JP-10',
					},
					{
						name: 'JP-11 - Saitama Prefecture',
						value: 'JP-11',
					},
					{
						name: 'JP-12 - Chiba Prefecture',
						value: 'JP-12',
					},
					{
						name: 'JP-13 - Tokyo',
						value: 'JP-13',
					},
					{
						name: 'JP-14 - Kanagawa Prefecture',
						value: 'JP-14',
					},
					{
						name: 'JP-15 - Niigata Prefecture',
						value: 'JP-15',
					},
					{
						name: 'JP-16 - Toyama Prefecture',
						value: 'JP-16',
					},
					{
						name: 'JP-17 - Ishikawa Prefecture',
						value: 'JP-17',
					},
					{
						name: 'JP-18 - Fukui Prefecture',
						value: 'JP-18',
					},
					{
						name: 'JP-19 - Yamanashi Prefecture',
						value: 'JP-19',
					},
					{
						name: 'JP-20 - Nagano Prefecture',
						value: 'JP-20',
					},
					{
						name: 'JP-21 - Gifu Prefecture',
						value: 'JP-21',
					},
					{
						name: 'JP-22 - Shizuoka Prefecture',
						value: 'JP-22',
					},
					{
						name: 'JP-23 - Aichi Prefecture',
						value: 'JP-23',
					},
					{
						name: 'JP-24 - Mie Prefecture',
						value: 'JP-24',
					},
					{
						name: 'JP-25 - Shiga Prefecture',
						value: 'JP-25',
					},
					{
						name: 'JP-26 - Kyoto Prefecture',
						value: 'JP-26',
					},
					{
						name: 'JP-27 - Osaka Prefecture',
						value: 'JP-27',
					},
					{
						name: 'JP-28 - Hyogo Prefecture',
						value: 'JP-28',
					},
					{
						name: 'JP-29 - Nara Prefecture',
						value: 'JP-29',
					},
					{
						name: 'JP-30 - Wakayama Prefecture',
						value: 'JP-30',
					},
					{
						name: 'JP-31 - Tottori Prefecture',
						value: 'JP-31',
					},
					{
						name: 'JP-32 - Shimane Prefecture',
						value: 'JP-32',
					},
					{
						name: 'JP-33 - Okayama Prefecture',
						value: 'JP-33',
					},
					{
						name: 'JP-34 - Hiroshima Prefecture',
						value: 'JP-34',
					},
					{
						name: 'JP-35 - Yamaguchi Prefecture',
						value: 'JP-35',
					},
					{
						name: 'JP-36 - Tokushima Prefecture',
						value: 'JP-36',
					},
					{
						name: 'JP-37 - Kagawa Prefecture',
						value: 'JP-37',
					},
					{
						name: 'JP-38 - Ehime Prefecture',
						value: 'JP-38',
					},
					{
						name: 'JP-39 - Kochi Prefecture',
						value: 'JP-39',
					},
					{
						name: 'JP-40 - Fukuoka Prefecture',
						value: 'JP-40',
					},
					{
						name: 'JP-41 - Saga Prefecture',
						value: 'JP-41',
					},
					{
						name: 'JP-42 - Nagasaki Prefecture',
						value: 'JP-42',
					},
					{
						name: 'JP-43 - Kumamoto Prefecture',
						value: 'JP-43',
					},
					{
						name: 'JP-44 - Oita Prefecture',
						value: 'JP-44',
					},
					{
						name: 'JP-45 - Miyazaki Prefecture',
						value: 'JP-45',
					},
					{
						name: 'JP-46 - Kagoshima Prefecture',
						value: 'JP-46',
					},
					{
						name: 'JP-47 - Okinawa Prefecture',
						value: 'JP-47',
					},
					{
						name: 'KE - Kenya',
						value: 'KE',
					},
					{
						name: 'KG - Kyrgyzstan',
						value: 'KG',
					},
					{
						name: 'KG-B - Batken Province',
						value: 'KG-B',
					},
					{
						name: 'KG-C - Chuy Province',
						value: 'KG-C',
					},
					{
						name: 'KG-J - Dzhalal-Abadskaya',
						value: 'KG-J',
					},
					{
						name: 'KG-N - Naryn Province',
						value: 'KG-N',
					},
					{
						name: 'KG-O - Osh Province',
						value: 'KG-O',
					},
					{
						name: 'KG-T - Talas',
						value: 'KG-T',
					},
					{
						name: 'KG-Y - Ysyk Kol Province',
						value: 'KG-Y',
					},
					{
						name: 'KH - Cambodia',
						value: 'KH',
					},
					{
						name: 'KH-1 - Banteay Meanchey',
						value: 'KH-1',
					},
					{
						name: 'KH-10 - Kratie',
						value: 'KH-10',
					},
					{
						name: 'KH-11 - Mondulkiri',
						value: 'KH-11',
					},
					{
						name: 'KH-12 - Phnom Penh',
						value: 'KH-12',
					},
					{
						name: 'KH-13 - Preah Vihear',
						value: 'KH-13',
					},
					{
						name: 'KH-14 - Prey Veng',
						value: 'KH-14',
					},
					{
						name: 'KH-15 - Pursat',
						value: 'KH-15',
					},
					{
						name: 'KH-16 - Ratanakiri',
						value: 'KH-16',
					},
					{
						name: 'KH-17 - Siem Reap',
						value: 'KH-17',
					},
					{
						name: 'KH-18 - Preah Sihanouk',
						value: 'KH-18',
					},
					{
						name: 'KH-19 - Stung Treng',
						value: 'KH-19',
					},
					{
						name: 'KH-2 - Battambang',
						value: 'KH-2',
					},
					{
						name: 'KH-20 - Svay Rieng',
						value: 'KH-20',
					},
					{
						name: 'KH-21 - Takeo',
						value: 'KH-21',
					},
					{
						name: 'KH-22 - Oddar Meancheay',
						value: 'KH-22',
					},
					{
						name: 'KH-23 - Kep',
						value: 'KH-23',
					},
					{
						name: 'KH-24 - Pailin',
						value: 'KH-24',
					},
					{
						name: 'KH-25 - Tbong Khmum',
						value: 'KH-25',
					},
					{
						name: 'KH-3 - Kampong Cham',
						value: 'KH-3',
					},
					{
						name: 'KH-4 - Kampong Chhnang',
						value: 'KH-4',
					},
					{
						name: 'KH-5 - Kampong Speu​',
						value: 'KH-5',
					},
					{
						name: 'KH-6 - Kampong Thom',
						value: 'KH-6',
					},
					{
						name: 'KH-7 - Kampot',
						value: 'KH-7',
					},
					{
						name: 'KH-8 - Kandal',
						value: 'KH-8',
					},
					{
						name: 'KH-9 - Koh Kong',
						value: 'KH-9',
					},
					{
						name: 'KI - Kiribati',
						value: 'KI',
					},
					{
						name: 'KI-G - Gilbert Islands',
						value: 'KI-G',
					},
					{
						name: 'KI-L - Line Islands',
						value: 'KI-L',
					},
					{
						name: 'KI-P - Phoenix Islands',
						value: 'KI-P',
					},
					{
						name: 'KM - Comoros',
						value: 'KM',
					},
					{
						name: 'KM-A - Nzwani',
						value: 'KM-A',
					},
					{
						name: 'KM-G - Ngazidja',
						value: 'KM-G',
					},
					{
						name: 'KM-M - Mwali',
						value: 'KM-M',
					},
					{
						name: 'KN - St. Kitts & Nevis',
						value: 'KN',
					},
					{
						name: 'KN-01 - Christ Church Nichola Town Parish',
						value: 'KN-01',
					},
					{
						name: 'KN-02 - Saint Anne Sandy Point Parish',
						value: 'KN-02',
					},
					{
						name: 'KN-03 - Saint George Basseterre Parish',
						value: 'KN-03',
					},
					{
						name: 'KN-04 - Saint George Gingerland Parish',
						value: 'KN-04',
					},
					{
						name: 'KN-05 - Saint James Windward Parish',
						value: 'KN-05',
					},
					{
						name: 'KN-06 - Saint John Capisterre',
						value: 'KN-06',
					},
					{
						name: 'KN-07 - Saint John Figtree Parish',
						value: 'KN-07',
					},
					{
						name: 'KN-08 - Saint Mary Cayon Parish',
						value: 'KN-08',
					},
					{
						name: 'KN-09 - Saint Paul Capisterre Parish',
						value: 'KN-09',
					},
					{
						name: 'KN-10 - Saint Paul Charlestown Parish',
						value: 'KN-10',
					},
					{
						name: 'KN-11 - Saint Peter Basseterre Parish',
						value: 'KN-11',
					},
					{
						name: 'KN-12 - Saint Thomas Lowland Parish',
						value: 'KN-12',
					},
					{
						name: 'KN-13 - Saint Thomas Middle Island Parish',
						value: 'KN-13',
					},
					{
						name: 'KN-15 - Trinity Palmetto Point Parish',
						value: 'KN-15',
					},
					{
						name: 'KP - North Korea',
						value: 'KP',
					},
					{
						name: 'KP-01 - Pyongyang',
						value: 'KP-01',
					},
					{
						name: 'KP-02 - South Pyongan',
						value: 'KP-02',
					},
					{
						name: 'KP-03 - North Pyongan',
						value: 'KP-03',
					},
					{
						name: 'KP-04 - Chagang',
						value: 'KP-04',
					},
					{
						name: 'KP-05 - South Hwanghae',
						value: 'KP-05',
					},
					{
						name: 'KP-06 - North Hwanghae',
						value: 'KP-06',
					},
					{
						name: 'KP-07 - Kangwon',
						value: 'KP-07',
					},
					{
						name: 'KP-08 - South Hamgyong',
						value: 'KP-08',
					},
					{
						name: 'KP-09 - North Hamgyong',
						value: 'KP-09',
					},
					{
						name: 'KP-10 - Ryanggang',
						value: 'KP-10',
					},
					{
						name: 'KP-13 - Rason',
						value: 'KP-13',
					},
					{
						name: 'KR - South Korea',
						value: 'KR',
					},
					{
						name: 'KR-11 - Seoul',
						value: 'KR-11',
					},
					{
						name: 'KR-26 - Busan',
						value: 'KR-26',
					},
					{
						name: 'KR-27 - Daegu',
						value: 'KR-27',
					},
					{
						name: 'KR-28 - Incheon',
						value: 'KR-28',
					},
					{
						name: 'KR-29 - Gwangju',
						value: 'KR-29',
					},
					{
						name: 'KR-30 - Daejeon',
						value: 'KR-30',
					},
					{
						name: 'KR-31 - Ulsan',
						value: 'KR-31',
					},
					{
						name: 'KR-41 - Gyeonggi-do',
						value: 'KR-41',
					},
					{
						name: 'KR-42 - Gangwon-do',
						value: 'KR-42',
					},
					{
						name: 'KR-43 - Chungcheongbuk-do',
						value: 'KR-43',
					},
					{
						name: 'KR-44 - Chungcheongnam-do',
						value: 'KR-44',
					},
					{
						name: 'KR-45 - Jeollabuk-do',
						value: 'KR-45',
					},
					{
						name: 'KR-46 - Jeollanam-do',
						value: 'KR-46',
					},
					{
						name: 'KR-47 - Gyeongsangbuk-do',
						value: 'KR-47',
					},
					{
						name: 'KR-48 - Gyeongsangnam-do',
						value: 'KR-48',
					},
					{
						name: 'KR-49 - Jeju-do',
						value: 'KR-49',
					},
					{
						name: 'KW - Kuwait',
						value: 'KW',
					},
					{
						name: 'KW-AH - Al Ahmadi Governorate',
						value: 'KW-AH',
					},
					{
						name: 'KW-FA - Al Farwaniyah Governorate',
						value: 'KW-FA',
					},
					{
						name: 'KW-HA - Hawalli Governorate',
						value: 'KW-HA',
					},
					{
						name: 'KW-JA - Al Jahra Governorate',
						value: 'KW-JA',
					},
					{
						name: 'KW-KU - Al Asimah Governate',
						value: 'KW-KU',
					},
					{
						name: 'KW-MU - Mubarak Al-Kabeer Governorate',
						value: 'KW-MU',
					},
					{
						name: 'KY - Cayman Islands',
						value: 'KY',
					},
					{
						name: 'KZ - Kazakhstan',
						value: 'KZ',
					},
					{
						name: 'KZ-AKM - Akmola Region',
						value: 'KZ-AKM',
					},
					{
						name: 'KZ-AKT - Aktobe Region',
						value: 'KZ-AKT',
					},
					{
						name: 'KZ-ALM - Almaty Region',
						value: 'KZ-ALM',
					},
					{
						name: 'KZ-ATY - Atyrau Province',
						value: 'KZ-ATY',
					},
					{
						name: 'KZ-KAR - Karagandy Region',
						value: 'KZ-KAR',
					},
					{
						name: 'KZ-KUS - Kostanay Region',
						value: 'KZ-KUS',
					},
					{
						name: 'KZ-KZY - Kyzylorda Province',
						value: 'KZ-KZY',
					},
					{
						name: 'KZ-MAN - Mangystau Region',
						value: 'KZ-MAN',
					},
					{
						name: 'KZ-PAV - Pavlodar Province',
						value: 'KZ-PAV',
					},
					{
						name: 'KZ-SEV - North Kazakhstan Province',
						value: 'KZ-SEV',
					},
					{
						name: 'KZ-VOS - East Kazakhstan Region',
						value: 'KZ-VOS',
					},
					{
						name: 'KZ-YUZ - South Kazakhstan Region',
						value: 'KZ-YUZ',
					},
					{
						name: 'KZ-ZAP - West Kazakhstan Province',
						value: 'KZ-ZAP',
					},
					{
						name: 'KZ-ZHA - Jambyl Province',
						value: 'KZ-ZHA',
					},
					{
						name: 'LA - Laos',
						value: 'LA',
					},
					{
						name: 'LA-AT - Attapeu',
						value: 'LA-AT',
					},
					{
						name: 'LA-BK - Bokeo',
						value: 'LA-BK',
					},
					{
						name: 'LA-BL - Bolikhamsai',
						value: 'LA-BL',
					},
					{
						name: 'LA-CH - Champasak',
						value: 'LA-CH',
					},
					{
						name: 'LA-HO - Houaphan',
						value: 'LA-HO',
					},
					{
						name: 'LA-KH - Khammouane',
						value: 'LA-KH',
					},
					{
						name: 'LA-LM - Luang Namtha',
						value: 'LA-LM',
					},
					{
						name: 'LA-LP - Louangphabang',
						value: 'LA-LP',
					},
					{
						name: 'LA-OU - Oudomxay',
						value: 'LA-OU',
					},
					{
						name: 'LA-PH - Phongsaly',
						value: 'LA-PH',
					},
					{
						name: 'LA-SL - Salavan',
						value: 'LA-SL',
					},
					{
						name: 'LA-SV - Savannakhet',
						value: 'LA-SV',
					},
					{
						name: 'LA-VI - Vientiane',
						value: 'LA-VI',
					},
					{
						name: 'LA-VT - Vientiane Prefecture',
						value: 'LA-VT',
					},
					{
						name: 'LA-XA - Sayabouly',
						value: 'LA-XA',
					},
					{
						name: 'LA-XE - Xekong',
						value: 'LA-XE',
					},
					{
						name: 'LA-XI - Xiangkhouang',
						value: 'LA-XI',
					},
					{
						name: 'LB - Lebanon',
						value: 'LB',
					},
					{
						name: 'LB-AS - North',
						value: 'LB-AS',
					},
					{
						name: 'LB-BA - Beirut',
						value: 'LB-BA',
					},
					{
						name: 'LB-BI - Beqaa',
						value: 'LB-BI',
					},
					{
						name: 'LB-JA - South',
						value: 'LB-JA',
					},
					{
						name: 'LB-JL - Mount Lebanon',
						value: 'LB-JL',
					},
					{
						name: 'LB-NA - Nabatiyeh',
						value: 'LB-NA',
					},
					{
						name: 'LC - St. Lucia',
						value: 'LC',
					},
					{
						name: 'LC-01 - Anse La Raye',
						value: 'LC-01',
					},
					{
						name: 'LC-02 - Castries',
						value: 'LC-02',
					},
					{
						name: 'LC-03 - Choiseul',
						value: 'LC-03',
					},
					{
						name: 'LC-04 - Dauphin',
						value: 'LC-04',
					},
					{
						name: 'LC-05 - Dennery',
						value: 'LC-05',
					},
					{
						name: 'LC-06 - Gros Islet',
						value: 'LC-06',
					},
					{
						name: 'LC-07 - Laborie',
						value: 'LC-07',
					},
					{
						name: 'LC-08 - Micoud',
						value: 'LC-08',
					},
					{
						name: 'LC-09 - Praslin',
						value: 'LC-09',
					},
					{
						name: 'LC-10 - Soufriere',
						value: 'LC-10',
					},
					{
						name: 'LC-11 - Vieux Fort',
						value: 'LC-11',
					},
					{
						name: 'LI - Liechtenstein',
						value: 'LI',
					},
					{
						name: 'LI-01 - Balzers',
						value: 'LI-01',
					},
					{
						name: 'LI-02 - Eschen',
						value: 'LI-02',
					},
					{
						name: 'LI-03 - Gamprin',
						value: 'LI-03',
					},
					{
						name: 'LI-04 - Mauren',
						value: 'LI-04',
					},
					{
						name: 'LI-05 - Planken',
						value: 'LI-05',
					},
					{
						name: 'LI-06 - Ruggell',
						value: 'LI-06',
					},
					{
						name: 'LI-07 - Schaan',
						value: 'LI-07',
					},
					{
						name: 'LI-08 - Schellenberg',
						value: 'LI-08',
					},
					{
						name: 'LI-09 - Triesen',
						value: 'LI-09',
					},
					{
						name: 'LI-10 - Triesenberg',
						value: 'LI-10',
					},
					{
						name: 'LI-11 - Vaduz',
						value: 'LI-11',
					},
					{
						name: 'LK - Sri Lanka',
						value: 'LK',
					},
					{
						name: 'LK-1 - Western Province',
						value: 'LK-1',
					},
					{
						name: 'LK-2 - Central Province',
						value: 'LK-2',
					},
					{
						name: 'LK-3 - Southern Province',
						value: 'LK-3',
					},
					{
						name: 'LK-4 - Northern Province',
						value: 'LK-4',
					},
					{
						name: 'LK-5 - Eastern Province',
						value: 'LK-5',
					},
					{
						name: 'LK-6 - North Western Province',
						value: 'LK-6',
					},
					{
						name: 'LK-7 - North Central Province',
						value: 'LK-7',
					},
					{
						name: 'LK-8 - Uva Province',
						value: 'LK-8',
					},
					{
						name: 'LK-9 - Sabaragamuwa Province',
						value: 'LK-9',
					},
					{
						name: 'LR - Liberia',
						value: 'LR',
					},
					{
						name: 'LR-BG - Bong',
						value: 'LR-BG',
					},
					{
						name: 'LR-BM - Bomi',
						value: 'LR-BM',
					},
					{
						name: 'LR-CM - Grand Cape Mount',
						value: 'LR-CM',
					},
					{
						name: 'LR-GB - Grand Bassa',
						value: 'LR-GB',
					},
					{
						name: 'LR-GG - Grand Gedeh',
						value: 'LR-GG',
					},
					{
						name: 'LR-GK - Grand Kru',
						value: 'LR-GK',
					},
					{
						name: 'LR-GP - Gbarpolu',
						value: 'LR-GP',
					},
					{
						name: 'LR-LO - Lofa',
						value: 'LR-LO',
					},
					{
						name: 'LR-MG - Margibi',
						value: 'LR-MG',
					},
					{
						name: 'LR-MO - Montserrado',
						value: 'LR-MO',
					},
					{
						name: 'LR-NI - Nimba',
						value: 'LR-NI',
					},
					{
						name: 'LR-RG - River Gee',
						value: 'LR-RG',
					},
					{
						name: 'LR-RI - River Cess',
						value: 'LR-RI',
					},
					{
						name: 'LR-SI - Sinoe',
						value: 'LR-SI',
					},
					{
						name: 'LS - Lesotho',
						value: 'LS',
					},
					{
						name: 'LS-A - Maseru',
						value: 'LS-A',
					},
					{
						name: 'LS-B - Butha-Buthe',
						value: 'LS-B',
					},
					{
						name: 'LS-C - Leribe',
						value: 'LS-C',
					},
					{
						name: 'LS-D - Berea',
						value: 'LS-D',
					},
					{
						name: 'LS-E - Mafeteng',
						value: 'LS-E',
					},
					{
						name: 'LS-F - Mohale\'s Hoek',
						value: 'LS-F',
					},
					{
						name: 'LS-G - Quthing',
						value: 'LS-G',
					},
					{
						name: 'LS-H - Qacha\'s Nek',
						value: 'LS-H',
					},
					{
						name: 'LS-J - Mokhotlong',
						value: 'LS-J',
					},
					{
						name: 'LS-K - Thaba-Tseka',
						value: 'LS-K',
					},
					{
						name: 'LT - Lithuania',
						value: 'LT',
					},
					{
						name: 'LT-AL - Alytus County',
						value: 'LT-AL',
					},
					{
						name: 'LT-KL - Klaipėda County',
						value: 'LT-KL',
					},
					{
						name: 'LT-KU - Kaunas County',
						value: 'LT-KU',
					},
					{
						name: 'LT-MR - Marijampolė County',
						value: 'LT-MR',
					},
					{
						name: 'LT-PN - Panevėžys County',
						value: 'LT-PN',
					},
					{
						name: 'LT-SA - Šiauliai County',
						value: 'LT-SA',
					},
					{
						name: 'LT-TA - Tauragė County',
						value: 'LT-TA',
					},
					{
						name: 'LT-TE - Telšiai County',
						value: 'LT-TE',
					},
					{
						name: 'LT-UT - Utena County',
						value: 'LT-UT',
					},
					{
						name: 'LT-VL - Vilnius County',
						value: 'LT-VL',
					},
					{
						name: 'LU - Luxembourg',
						value: 'LU',
					},
					{
						name: 'LU-D - Diekirch',
						value: 'LU-D',
					},
					{
						name: 'LU-G - Grevenmacher',
						value: 'LU-G',
					},
					{
						name: 'LU-L - Luxembourg District',
						value: 'LU-L',
					},
					{
						name: 'LV - Latvia',
						value: 'LV',
					},
					{
						name: 'LV-001 - Aglona Municipality',
						value: 'LV-001',
					},
					{
						name: 'LV-002 - Aizkraukle Municipality',
						value: 'LV-002',
					},
					{
						name: 'LV-003 - Aizpute Municipality',
						value: 'LV-003',
					},
					{
						name: 'LV-004 - Aknīste Municipality',
						value: 'LV-004',
					},
					{
						name: 'LV-005 - Aloja Municipality',
						value: 'LV-005',
					},
					{
						name: 'LV-006 - Alsunga Municipality',
						value: 'LV-006',
					},
					{
						name: 'LV-007 - Alūksne Municipality',
						value: 'LV-007',
					},
					{
						name: 'LV-008 - Amata Municipality',
						value: 'LV-008',
					},
					{
						name: 'LV-009 - Ape Municipality',
						value: 'LV-009',
					},
					{
						name: 'LV-010 - Auce Municipality',
						value: 'LV-010',
					},
					{
						name: 'LV-011 - Ādaži Municipality',
						value: 'LV-011',
					},
					{
						name: 'LV-012 - Babīte Municipality',
						value: 'LV-012',
					},
					{
						name: 'LV-013 - Baldone Municipality',
						value: 'LV-013',
					},
					{
						name: 'LV-014 - Baltinava Municipality',
						value: 'LV-014',
					},
					{
						name: 'LV-015 - Balvi Municipality',
						value: 'LV-015',
					},
					{
						name: 'LV-016 - Bauska Municipality',
						value: 'LV-016',
					},
					{
						name: 'LV-017 - Beverīna Municipality',
						value: 'LV-017',
					},
					{
						name: 'LV-018 - Brocēni Municipality',
						value: 'LV-018',
					},
					{
						name: 'LV-019 - Burtnieki Municipality',
						value: 'LV-019',
					},
					{
						name: 'LV-020 - Carnikava Municipality',
						value: 'LV-020',
					},
					{
						name: 'LV-021 - Cesvaine Municipality',
						value: 'LV-021',
					},
					{
						name: 'LV-022 - Cēsis Municipality',
						value: 'LV-022',
					},
					{
						name: 'LV-023 - Cibla Municipality',
						value: 'LV-023',
					},
					{
						name: 'LV-024 - Dagdas novads',
						value: 'LV-024',
					},
					{
						name: 'LV-025 - Daugavpils Municipality',
						value: 'LV-025',
					},
					{
						name: 'LV-026 - Dobele Municipality',
						value: 'LV-026',
					},
					{
						name: 'LV-027 - Dundaga Municipality',
						value: 'LV-027',
					},
					{
						name: 'LV-028 - Durbe Municipality',
						value: 'LV-028',
					},
					{
						name: 'LV-029 - Engure Municipality',
						value: 'LV-029',
					},
					{
						name: 'LV-030 - Ērgļi Municipality',
						value: 'LV-030',
					},
					{
						name: 'LV-031 - Garkalne Municipality',
						value: 'LV-031',
					},
					{
						name: 'LV-032 - Grobiņa Municipality',
						value: 'LV-032',
					},
					{
						name: 'LV-033 - Gulbene Municipality',
						value: 'LV-033',
					},
					{
						name: 'LV-034 - Iecava Municipality',
						value: 'LV-034',
					},
					{
						name: 'LV-035 - Ikšķile Municipality',
						value: 'LV-035',
					},
					{
						name: 'LV-036 - Ilūkste Municipality',
						value: 'LV-036',
					},
					{
						name: 'LV-037 - Inčukalna novads',
						value: 'LV-037',
					},
					{
						name: 'LV-038 - Jaunjelgava Municipality',
						value: 'LV-038',
					},
					{
						name: 'LV-039 - Jaunpiebalga Municipality',
						value: 'LV-039',
					},
					{
						name: 'LV-040 - Jaunpils Municipality',
						value: 'LV-040',
					},
					{
						name: 'LV-041 - Jelgava Municipality',
						value: 'LV-041',
					},
					{
						name: 'LV-042 - Jēkabpils Municipality',
						value: 'LV-042',
					},
					{
						name: 'LV-043 - Kandava Municipality',
						value: 'LV-043',
					},
					{
						name: 'LV-044 - Kārsava Municipality',
						value: 'LV-044',
					},
					{
						name: 'LV-045 - Kocēni Municipality',
						value: 'LV-045',
					},
					{
						name: 'LV-046 - Koknese Municipality',
						value: 'LV-046',
					},
					{
						name: 'LV-047 - Krāslava Municipality',
						value: 'LV-047',
					},
					{
						name: 'LV-048 - Krimulda Municipality',
						value: 'LV-048',
					},
					{
						name: 'LV-049 - Krustpils Municipality',
						value: 'LV-049',
					},
					{
						name: 'LV-050 - Kuldīga Municipality',
						value: 'LV-050',
					},
					{
						name: 'LV-051 - Ķegums Municipality',
						value: 'LV-051',
					},
					{
						name: 'LV-052 - Ķekava Municipality',
						value: 'LV-052',
					},
					{
						name: 'LV-053 - Lielvārde Municipality',
						value: 'LV-053',
					},
					{
						name: 'LV-054 - Limbaži Municipality',
						value: 'LV-054',
					},
					{
						name: 'LV-055 - Līgatne Municipality',
						value: 'LV-055',
					},
					{
						name: 'LV-056 - Līvāni Municipality',
						value: 'LV-056',
					},
					{
						name: 'LV-057 - Lubāna Municipality',
						value: 'LV-057',
					},
					{
						name: 'LV-058 - Ludza Municipality',
						value: 'LV-058',
					},
					{
						name: 'LV-059 - Madona Municipality',
						value: 'LV-059',
					},
					{
						name: 'LV-060 - Mazsalaca Municipality',
						value: 'LV-060',
					},
					{
						name: 'LV-061 - Mālpils Municipality',
						value: 'LV-061',
					},
					{
						name: 'LV-062 - Mārupe Municipality',
						value: 'LV-062',
					},
					{
						name: 'LV-063 - Mērsrags Municipality',
						value: 'LV-063',
					},
					{
						name: 'LV-064 - Naukšēni Municipality',
						value: 'LV-064',
					},
					{
						name: 'LV-065 - Nereta Municipality',
						value: 'LV-065',
					},
					{
						name: 'LV-066 - Nīca Municipality',
						value: 'LV-066',
					},
					{
						name: 'LV-067 - Ogre Municipality',
						value: 'LV-067',
					},
					{
						name: 'LV-068 - Olaines novads',
						value: 'LV-068',
					},
					{
						name: 'LV-069 - Ozolnieki Municipality',
						value: 'LV-069',
					},
					{
						name: 'LV-070 - Pārgauja Municipality',
						value: 'LV-070',
					},
					{
						name: 'LV-071 - Pāvilosta Municipality',
						value: 'LV-071',
					},
					{
						name: 'LV-072 - Pļaviņas Municipality',
						value: 'LV-072',
					},
					{
						name: 'LV-073 - Preiļi Municipality',
						value: 'LV-073',
					},
					{
						name: 'LV-074 - Priekule Municipality',
						value: 'LV-074',
					},
					{
						name: 'LV-075 - Priekuļi Municipality',
						value: 'LV-075',
					},
					{
						name: 'LV-076 - Rauna Municipality',
						value: 'LV-076',
					},
					{
						name: 'LV-078 - Riebiņi Municipality',
						value: 'LV-078',
					},
					{
						name: 'LV-079 - Roja Municipality',
						value: 'LV-079',
					},
					{
						name: 'LV-080 - Ropaži Municipality',
						value: 'LV-080',
					},
					{
						name: 'LV-081 - Rucava Municipality',
						value: 'LV-081',
					},
					{
						name: 'LV-082 - Rugāji Municipality',
						value: 'LV-082',
					},
					{
						name: 'LV-083 - Rundāle Municipality',
						value: 'LV-083',
					},
					{
						name: 'LV-084 - Rūjiena Municipality',
						value: 'LV-084',
					},
					{
						name: 'LV-085 - Sala Municipality',
						value: 'LV-085',
					},
					{
						name: 'LV-086 - Salacgrīva Municipality',
						value: 'LV-086',
					},
					{
						name: 'LV-087 - Salaspils Municipality',
						value: 'LV-087',
					},
					{
						name: 'LV-088 - Saldus Municipality',
						value: 'LV-088',
					},
					{
						name: 'LV-089 - Saulkrasti Municipality',
						value: 'LV-089',
					},
					{
						name: 'LV-090 - Sēja Municipality',
						value: 'LV-090',
					},
					{
						name: 'LV-091 - Sigulda Municipality',
						value: 'LV-091',
					},
					{
						name: 'LV-092 - Skrīveri Municipality',
						value: 'LV-092',
					},
					{
						name: 'LV-093 - Skrunda Municipality',
						value: 'LV-093',
					},
					{
						name: 'LV-094 - Smiltene Municipality',
						value: 'LV-094',
					},
					{
						name: 'LV-095 - Stopiņi Municipality',
						value: 'LV-095',
					},
					{
						name: 'LV-096 - Strenči Municipality',
						value: 'LV-096',
					},
					{
						name: 'LV-097 - Talsi Municipality',
						value: 'LV-097',
					},
					{
						name: 'LV-098 - Tērvete Municipality',
						value: 'LV-098',
					},
					{
						name: 'LV-099 - Tukums Municipality',
						value: 'LV-099',
					},
					{
						name: 'LV-100 - Vaiņode Municipality',
						value: 'LV-100',
					},
					{
						name: 'LV-101 - Valka Municipality',
						value: 'LV-101',
					},
					{
						name: 'LV-102 - Varakļāni Municipality',
						value: 'LV-102',
					},
					{
						name: 'LV-103 - Vārkava Municipality',
						value: 'LV-103',
					},
					{
						name: 'LV-104 - Vecpiebalga Municipality',
						value: 'LV-104',
					},
					{
						name: 'LV-105 - Vecumnieki Municipality',
						value: 'LV-105',
					},
					{
						name: 'LV-106 - Ventspils Municipality',
						value: 'LV-106',
					},
					{
						name: 'LV-107 - Viesīte Municipality',
						value: 'LV-107',
					},
					{
						name: 'LV-108 - Viļaka Municipality',
						value: 'LV-108',
					},
					{
						name: 'LV-109 - Viļāni Municipality',
						value: 'LV-109',
					},
					{
						name: 'LV-110 - Zilupe Municipality',
						value: 'LV-110',
					},
					{
						name: 'LV-DGV - Daugavpils',
						value: 'LV-DGV',
					},
					{
						name: 'LV-JEL - Jelgava',
						value: 'LV-JEL',
					},
					{
						name: 'LV-JKB - Jēkabpils',
						value: 'LV-JKB',
					},
					{
						name: 'LV-JUR - Jūrmala',
						value: 'LV-JUR',
					},
					{
						name: 'LV-LPX - Liepājas pilsēta',
						value: 'LV-LPX',
					},
					{
						name: 'LV-REZ - Rēzekne Municipality',
						value: 'LV-REZ',
					},
					{
						name: 'LV-RIX - Riga',
						value: 'LV-RIX',
					},
					{
						name: 'LV-VEN - Ventspils',
						value: 'LV-VEN',
					},
					{
						name: 'LV-VMR - Valmiera',
						value: 'LV-VMR',
					},
					{
						name: 'LY - Libya',
						value: 'LY',
					},
					{
						name: 'LY-BA - Banghazi',
						value: 'LY-BA',
					},
					{
						name: 'LY-BU - Al Butnan',
						value: 'LY-BU',
					},
					{
						name: 'LY-DR - Darnah',
						value: 'LY-DR',
					},
					{
						name: 'LY-GT - Ghat',
						value: 'LY-GT',
					},
					{
						name: 'LY-JA - Al Jabal al Akhdar',
						value: 'LY-JA',
					},
					{
						name: 'LY-JG - Al Jabal al Gharbi',
						value: 'LY-JG',
					},
					{
						name: 'LY-JI - Al Jafara',
						value: 'LY-JI',
					},
					{
						name: 'LY-JU - Al Jufrah',
						value: 'LY-JU',
					},
					{
						name: 'LY-KF - Al Kufrah',
						value: 'LY-KF',
					},
					{
						name: 'LY-MB - Al Murqub',
						value: 'LY-MB',
					},
					{
						name: 'LY-MI - Misratah',
						value: 'LY-MI',
					},
					{
						name: 'LY-MJ - Al Marj',
						value: 'LY-MJ',
					},
					{
						name: 'LY-MQ - Murzuq',
						value: 'LY-MQ',
					},
					{
						name: 'LY-NL - Nalut',
						value: 'LY-NL',
					},
					{
						name: 'LY-NQ - An Nuqat al Khams',
						value: 'LY-NQ',
					},
					{
						name: 'LY-SB - Sabha',
						value: 'LY-SB',
					},
					{
						name: 'LY-SR - Surt',
						value: 'LY-SR',
					},
					{
						name: 'LY-TB - Tripoli',
						value: 'LY-TB',
					},
					{
						name: 'LY-WA - Al Wahat',
						value: 'LY-WA',
					},
					{
						name: 'LY-WD - Wadi Al Hayaa',
						value: 'LY-WD',
					},
					{
						name: 'LY-WS - Wadi Ash-Shati',
						value: 'LY-WS',
					},
					{
						name: 'LY-ZA - Az Zawiyah',
						value: 'LY-ZA',
					},
					{
						name: 'MA - Morocco',
						value: 'MA',
					},
					{
						name: 'MA-01 - Tangier-Tetouan',
						value: 'MA-01',
					},
					{
						name: 'MA-02 - Gharb-Chrarda-Beni Hssen',
						value: 'MA-02',
					},
					{
						name: 'MA-03 - Taza-Al Hoceima-Taounate',
						value: 'MA-03',
					},
					{
						name: 'MA-04 - Oriental',
						value: 'MA-04',
					},
					{
						name: 'MA-05 - Fes-Boulemane',
						value: 'MA-05',
					},
					{
						name: 'MA-06 - Meknes-Tafilalet',
						value: 'MA-06',
					},
					{
						name: 'MA-07 - Rabat-Sale-Zemmour-Zaer',
						value: 'MA-07',
					},
					{
						name: 'MA-08 - Grand Casablanca',
						value: 'MA-08',
					},
					{
						name: 'MA-09 - Chaouia-Ouardigha',
						value: 'MA-09',
					},
					{
						name: 'MA-10 - Doukkala-Abda',
						value: 'MA-10',
					},
					{
						name: 'MA-11 - Marrakesh-Tensift-El Haouz',
						value: 'MA-11',
					},
					{
						name: 'MA-12 - Tadla-Azilal',
						value: 'MA-12',
					},
					{
						name: 'MA-13 - Souss-Massa-Draa',
						value: 'MA-13',
					},
					{
						name: 'MA-14 - Guelmim-Es Semara',
						value: 'MA-14',
					},
					{
						name: 'MA-15 - Laayoune-Boujdour-Sakia El Hamra',
						value: 'MA-15',
					},
					{
						name: 'MC - Monaco',
						value: 'MC',
					},
					{
						name: 'MD - Moldova',
						value: 'MD',
					},
					{
						name: 'MD-AN - Anenii Noi',
						value: 'MD-AN',
					},
					{
						name: 'MD-BA - Balti',
						value: 'MD-BA',
					},
					{
						name: 'MD-BD - Bender',
						value: 'MD-BD',
					},
					{
						name: 'MD-BR - Briceni',
						value: 'MD-BR',
					},
					{
						name: 'MD-BS - Basarabeasca District',
						value: 'MD-BS',
					},
					{
						name: 'MD-CA - Cahul',
						value: 'MD-CA',
					},
					{
						name: 'MD-CL - Calarasi',
						value: 'MD-CL',
					},
					{
						name: 'MD-CM - Cimișlia',
						value: 'MD-CM',
					},
					{
						name: 'MD-CR - Criuleni',
						value: 'MD-CR',
					},
					{
						name: 'MD-CS - Causeni',
						value: 'MD-CS',
					},
					{
						name: 'MD-CT - Cantemir',
						value: 'MD-CT',
					},
					{
						name: 'MD-CU - Chisinau',
						value: 'MD-CU',
					},
					{
						name: 'MD-DO - Donduseni',
						value: 'MD-DO',
					},
					{
						name: 'MD-DR - Drochia',
						value: 'MD-DR',
					},
					{
						name: 'MD-DU - Dubasari',
						value: 'MD-DU',
					},
					{
						name: 'MD-ED - Edineţ District',
						value: 'MD-ED',
					},
					{
						name: 'MD-FA - Falesti',
						value: 'MD-FA',
					},
					{
						name: 'MD-FL - Floresti',
						value: 'MD-FL',
					},
					{
						name: 'MD-GA - Gagauzia',
						value: 'MD-GA',
					},
					{
						name: 'MD-GL - Glodeni',
						value: 'MD-GL',
					},
					{
						name: 'MD-HI - Hincesti',
						value: 'MD-HI',
					},
					{
						name: 'MD-IA - Ialoveni',
						value: 'MD-IA',
					},
					{
						name: 'MD-LE - Leova',
						value: 'MD-LE',
					},
					{
						name: 'MD-NI - Nisporeni',
						value: 'MD-NI',
					},
					{
						name: 'MD-OC - Ocnita',
						value: 'MD-OC',
					},
					{
						name: 'MD-OR - Orhei',
						value: 'MD-OR',
					},
					{
						name: 'MD-RE - Rezina',
						value: 'MD-RE',
					},
					{
						name: 'MD-RI - Riscani',
						value: 'MD-RI',
					},
					{
						name: 'MD-SD - Soldanesti',
						value: 'MD-SD',
					},
					{
						name: 'MD-SI - Singerei',
						value: 'MD-SI',
					},
					{
						name: 'MD-SN - Transnistria',
						value: 'MD-SN',
					},
					{
						name: 'MD-SO - Soroca',
						value: 'MD-SO',
					},
					{
						name: 'MD-ST - Straseni',
						value: 'MD-ST',
					},
					{
						name: 'MD-SV - Stefan Voda',
						value: 'MD-SV',
					},
					{
						name: 'MD-TA - Taraclia',
						value: 'MD-TA',
					},
					{
						name: 'MD-TE - Telenești District',
						value: 'MD-TE',
					},
					{
						name: 'MD-UN - Ungheni',
						value: 'MD-UN',
					},
					{
						name: 'ME - Montenegro',
						value: 'ME',
					},
					{
						name: 'ME-01 - Andrijevica',
						value: 'ME-01',
					},
					{
						name: 'ME-02 - Bar',
						value: 'ME-02',
					},
					{
						name: 'ME-03 - Berane',
						value: 'ME-03',
					},
					{
						name: 'ME-04 - Bijelo Polje',
						value: 'ME-04',
					},
					{
						name: 'ME-05 - Budva',
						value: 'ME-05',
					},
					{
						name: 'ME-06 - Cetinje',
						value: 'ME-06',
					},
					{
						name: 'ME-07 - Danilovgrad',
						value: 'ME-07',
					},
					{
						name: 'ME-08 - Herceg Novi',
						value: 'ME-08',
					},
					{
						name: 'ME-09 - Kolasin',
						value: 'ME-09',
					},
					{
						name: 'ME-10 - Kotor',
						value: 'ME-10',
					},
					{
						name: 'ME-11 - Mojkovac',
						value: 'ME-11',
					},
					{
						name: 'ME-12 - Niksic',
						value: 'ME-12',
					},
					{
						name: 'ME-13 - Plav',
						value: 'ME-13',
					},
					{
						name: 'ME-14 - Pljevlja',
						value: 'ME-14',
					},
					{
						name: 'ME-15 - Pluzine',
						value: 'ME-15',
					},
					{
						name: 'ME-16 - Podgorica',
						value: 'ME-16',
					},
					{
						name: 'ME-17 - Rozaje',
						value: 'ME-17',
					},
					{
						name: 'ME-18 - Savnik',
						value: 'ME-18',
					},
					{
						name: 'ME-19 - Tivat',
						value: 'ME-19',
					},
					{
						name: 'ME-20 - Ulcinj',
						value: 'ME-20',
					},
					{
						name: 'ME-21 - Zabljak',
						value: 'ME-21',
					},
					{
						name: 'MF - St. Martin',
						value: 'MF',
					},
					{
						name: 'MG - Madagascar',
						value: 'MG',
					},
					{
						name: 'MG-A - Toamasina',
						value: 'MG-A',
					},
					{
						name: 'MG-D - Antsiranana',
						value: 'MG-D',
					},
					{
						name: 'MG-F - Fianarantsoa',
						value: 'MG-F',
					},
					{
						name: 'MG-M - Mahajanga',
						value: 'MG-M',
					},
					{
						name: 'MG-T - Antananarivo',
						value: 'MG-T',
					},
					{
						name: 'MG-U - Toliara',
						value: 'MG-U',
					},
					{
						name: 'MH - Marshall Islands',
						value: 'MH',
					},
					{
						name: 'MH-ALK - Ailuk Atoll',
						value: 'MH-ALK',
					},
					{
						name: 'MH-ALL - Ailinglaplap Atoll',
						value: 'MH-ALL',
					},
					{
						name: 'MH-ARN - Arno Atoll',
						value: 'MH-ARN',
					},
					{
						name: 'MH-AUR - Aur Atoll',
						value: 'MH-AUR',
					},
					{
						name: 'MH-EBO - Ebon',
						value: 'MH-EBO',
					},
					{
						name: 'MH-ENI - Enewetak Atoll',
						value: 'MH-ENI',
					},
					{
						name: 'MH-JAB - Jabat Island',
						value: 'MH-JAB',
					},
					{
						name: 'MH-JAL - Jaluit Atoll',
						value: 'MH-JAL',
					},
					{
						name: 'MH-KIL - Kili Island',
						value: 'MH-KIL',
					},
					{
						name: 'MH-KWA - Kwajalein Atoll',
						value: 'MH-KWA',
					},
					{
						name: 'MH-LAE - Lae Atoll',
						value: 'MH-LAE',
					},
					{
						name: 'MH-LIB - Lib Island',
						value: 'MH-LIB',
					},
					{
						name: 'MH-LIK - Likiep Atoll',
						value: 'MH-LIK',
					},
					{
						name: 'MH-MAJ - Majuro Atoll',
						value: 'MH-MAJ',
					},
					{
						name: 'MH-MAL - Maloelap Atoll',
						value: 'MH-MAL',
					},
					{
						name: 'MH-MEJ - Mejit Island',
						value: 'MH-MEJ',
					},
					{
						name: 'MH-MIL - Mili Atoll',
						value: 'MH-MIL',
					},
					{
						name: 'MH-NMK - Namorik Atoll',
						value: 'MH-NMK',
					},
					{
						name: 'MH-NMU - Namu Atoll',
						value: 'MH-NMU',
					},
					{
						name: 'MH-RON - Rongelap Atoll',
						value: 'MH-RON',
					},
					{
						name: 'MH-UJA - Ujae Atoll',
						value: 'MH-UJA',
					},
					{
						name: 'MH-UTI - Utirik Atoll',
						value: 'MH-UTI',
					},
					{
						name: 'MH-WTH - Wotho Atoll',
						value: 'MH-WTH',
					},
					{
						name: 'MH-WTJ - Wotje Atoll',
						value: 'MH-WTJ',
					},
					{
						name: 'MK - North Macedonia',
						value: 'MK',
					},
					{
						name: 'MK-02 - Municipality of Arachinovo',
						value: 'MK-02',
					},
					{
						name: 'MK-03 - Municipality of Berovo',
						value: 'MK-03',
					},
					{
						name: 'MK-04 - Municipality of Bitola',
						value: 'MK-04',
					},
					{
						name: 'MK-05 - Municipality of Bogdanci',
						value: 'MK-05',
					},
					{
						name: 'MK-06 - Municipality of Bogovinje',
						value: 'MK-06',
					},
					{
						name: 'MK-07 - Bosilovo',
						value: 'MK-07',
					},
					{
						name: 'MK-08 - Brvenitsa',
						value: 'MK-08',
					},
					{
						name: 'MK-10 - Valandovo',
						value: 'MK-10',
					},
					{
						name: 'MK-11 - Municipality of Vasilevo',
						value: 'MK-11',
					},
					{
						name: 'MK-12 - Municipality of Vevchani',
						value: 'MK-12',
					},
					{
						name: 'MK-13 - Municipality of Veles',
						value: 'MK-13',
					},
					{
						name: 'MK-14 - Municipality of Vinica',
						value: 'MK-14',
					},
					{
						name: 'MK-16 - Vrapchishte',
						value: 'MK-16',
					},
					{
						name: 'MK-18 - Municipality of Gevgelija',
						value: 'MK-18',
					},
					{
						name: 'MK-19 - Gostivar',
						value: 'MK-19',
					},
					{
						name: 'MK-20 - Municipality of Gradsko',
						value: 'MK-20',
					},
					{
						name: 'MK-21 - Municipality of Debar',
						value: 'MK-21',
					},
					{
						name: 'MK-22 - Municipality of Debarca',
						value: 'MK-22',
					},
					{
						name: 'MK-23 - Delchevo',
						value: 'MK-23',
					},
					{
						name: 'MK-24 - Municipality of Demir Kapija',
						value: 'MK-24',
					},
					{
						name: 'MK-25 - Municipality of Demir Hisar',
						value: 'MK-25',
					},
					{
						name: 'MK-26 - Dojran',
						value: 'MK-26',
					},
					{
						name: 'MK-27 - Municipality of Dolneni',
						value: 'MK-27',
					},
					{
						name: 'MK-30 - Municipality of Zhelino',
						value: 'MK-30',
					},
					{
						name: 'MK-31 - Municipality of Zajas',
						value: 'MK-31',
					},
					{
						name: 'MK-32 - Zelenikovo',
						value: 'MK-32',
					},
					{
						name: 'MK-33 - Municipality of Zrnovci',
						value: 'MK-33',
					},
					{
						name: 'MK-34 - Municipality of Ilinden',
						value: 'MK-34',
					},
					{
						name: 'MK-35 - Municipality of Jegunovce',
						value: 'MK-35',
					},
					{
						name: 'MK-36 - Municipality of Kavadarci',
						value: 'MK-36',
					},
					{
						name: 'MK-37 - Municipality of Karbinci',
						value: 'MK-37',
					},
					{
						name: 'MK-40 - Municipality of Kichevo',
						value: 'MK-40',
					},
					{
						name: 'MK-41 - Municipality of Konche',
						value: 'MK-41',
					},
					{
						name: 'MK-42 - Municipality of Kochani',
						value: 'MK-42',
					},
					{
						name: 'MK-43 - Municipality of Kratovo',
						value: 'MK-43',
					},
					{
						name: 'MK-44 - Municipality of Kriva Palanka',
						value: 'MK-44',
					},
					{
						name: 'MK-45 - Municipality of Krivogashtani',
						value: 'MK-45',
					},
					{
						name: 'MK-46 - Municipality of Krushevo',
						value: 'MK-46',
					},
					{
						name: 'MK-47 - Municipality of Kumanovo',
						value: 'MK-47',
					},
					{
						name: 'MK-48 - Municipality of Lipkovo',
						value: 'MK-48',
					},
					{
						name: 'MK-49 - Municipality of Lozovo',
						value: 'MK-49',
					},
					{
						name: 'MK-50 - Municipality of Mavrovo and Rostusha',
						value: 'MK-50',
					},
					{
						name: 'MK-51 - Makedonska Kamenitsa',
						value: 'MK-51',
					},
					{
						name: 'MK-52 - Municipality of Makedonski Brod',
						value: 'MK-52',
					},
					{
						name: 'MK-53 - Mogila',
						value: 'MK-53',
					},
					{
						name: 'MK-54 - Municipality of Negotino',
						value: 'MK-54',
					},
					{
						name: 'MK-55 - Municipality of Novatsi',
						value: 'MK-55',
					},
					{
						name: 'MK-56 - Municipality of Novo Selo',
						value: 'MK-56',
					},
					{
						name: 'MK-58 - Ohrid',
						value: 'MK-58',
					},
					{
						name: 'MK-59 - Municipality of Petrovets',
						value: 'MK-59',
					},
					{
						name: 'MK-60 - Municipality of Pehchevo',
						value: 'MK-60',
					},
					{
						name: 'MK-61 - Municipality of Plasnitsa',
						value: 'MK-61',
					},
					{
						name: 'MK-62 - Municipality of Prilep',
						value: 'MK-62',
					},
					{
						name: 'MK-63 - Probishtip',
						value: 'MK-63',
					},
					{
						name: 'MK-64 - Radovish',
						value: 'MK-64',
					},
					{
						name: 'MK-65 - Municipality of Rankovtse',
						value: 'MK-65',
					},
					{
						name: 'MK-66 - Municipality of Resen',
						value: 'MK-66',
					},
					{
						name: 'MK-67 - Municipality of Rosoman',
						value: 'MK-67',
					},
					{
						name: 'MK-69 - Sveti Nikole',
						value: 'MK-69',
					},
					{
						name: 'MK-70 - Municipality of Sopishte',
						value: 'MK-70',
					},
					{
						name: 'MK-71 - Staro Nagorichane',
						value: 'MK-71',
					},
					{
						name: 'MK-72 - Municipality of Struga',
						value: 'MK-72',
					},
					{
						name: 'MK-73 - Strumitsa',
						value: 'MK-73',
					},
					{
						name: 'MK-74 - Studenichani',
						value: 'MK-74',
					},
					{
						name: 'MK-75 - Tearce',
						value: 'MK-75',
					},
					{
						name: 'MK-76 - Tetovo',
						value: 'MK-76',
					},
					{
						name: 'MK-78 - Centar Zhupa',
						value: 'MK-78',
					},
					{
						name: 'MK-80 - Chashka',
						value: 'MK-80',
					},
					{
						name: 'MK-81 - Municipality of Cheshinovo-Obleshevo',
						value: 'MK-81',
					},
					{
						name: 'MK-82 - Municipality of Chucher Sandevo',
						value: 'MK-82',
					},
					{
						name: 'MK-83 - Municipality of Shtip',
						value: 'MK-83',
					},
					{
						name: 'MK-85 - Skopje',
						value: 'MK-85',
					},
					{
						name: 'ML - Mali',
						value: 'ML',
					},
					{
						name: 'ML-1 - Kayes',
						value: 'ML-1',
					},
					{
						name: 'ML-2 - Koulikoro',
						value: 'ML-2',
					},
					{
						name: 'ML-3 - Sikasso',
						value: 'ML-3',
					},
					{
						name: 'ML-4 - Segou',
						value: 'ML-4',
					},
					{
						name: 'ML-5 - Mopti',
						value: 'ML-5',
					},
					{
						name: 'ML-6 - Tombouctou',
						value: 'ML-6',
					},
					{
						name: 'ML-7 - Gao',
						value: 'ML-7',
					},
					{
						name: 'ML-8 - Kidal',
						value: 'ML-8',
					},
					{
						name: 'ML-BKO - Bamako',
						value: 'ML-BKO',
					},
					{
						name: 'MM - Myanmar (Burma)',
						value: 'MM',
					},
					{
						name: 'MM-01 - Sagaing Region',
						value: 'MM-01',
					},
					{
						name: 'MM-02 - Bago Region',
						value: 'MM-02',
					},
					{
						name: 'MM-03 - Magway Region',
						value: 'MM-03',
					},
					{
						name: 'MM-04 - Mandalay Region',
						value: 'MM-04',
					},
					{
						name: 'MM-05 - Tanintharyi Region',
						value: 'MM-05',
					},
					{
						name: 'MM-06 - Yangon Region',
						value: 'MM-06',
					},
					{
						name: 'MM-07 - Ayeyarwady',
						value: 'MM-07',
					},
					{
						name: 'MM-11 - Kachin',
						value: 'MM-11',
					},
					{
						name: 'MM-12 - Kayah',
						value: 'MM-12',
					},
					{
						name: 'MM-13 - Kayin State',
						value: 'MM-13',
					},
					{
						name: 'MM-14 - Chin State',
						value: 'MM-14',
					},
					{
						name: 'MM-15 - Mon State',
						value: 'MM-15',
					},
					{
						name: 'MM-16 - Rakhine',
						value: 'MM-16',
					},
					{
						name: 'MM-17 - Shan',
						value: 'MM-17',
					},
					{
						name: 'MM-18 - Naypyidaw Union Territory',
						value: 'MM-18',
					},
					{
						name: 'MN - Mongolia',
						value: 'MN',
					},
					{
						name: 'MN-035 - Orkhon',
						value: 'MN-035',
					},
					{
						name: 'MN-037 - Darkhan-Uul',
						value: 'MN-037',
					},
					{
						name: 'MN-039 - Khentii',
						value: 'MN-039',
					},
					{
						name: 'MN-041 - Khuvsgul',
						value: 'MN-041',
					},
					{
						name: 'MN-043 - Khovd',
						value: 'MN-043',
					},
					{
						name: 'MN-046 - Uvs',
						value: 'MN-046',
					},
					{
						name: 'MN-047 - Tov',
						value: 'MN-047',
					},
					{
						name: 'MN-049 - Selenge',
						value: 'MN-049',
					},
					{
						name: 'MN-051 - Sukhbaatar',
						value: 'MN-051',
					},
					{
						name: 'MN-053 - Umnugovi',
						value: 'MN-053',
					},
					{
						name: 'MN-055 - Uvurkhangai',
						value: 'MN-055',
					},
					{
						name: 'MN-057 - Zavkhan',
						value: 'MN-057',
					},
					{
						name: 'MN-059 - Dundgovi',
						value: 'MN-059',
					},
					{
						name: 'MN-061 - Dornod',
						value: 'MN-061',
					},
					{
						name: 'MN-063 - Dornogovi',
						value: 'MN-063',
					},
					{
						name: 'MN-064 - Govisumber',
						value: 'MN-064',
					},
					{
						name: 'MN-065 - Govi-Altai',
						value: 'MN-065',
					},
					{
						name: 'MN-067 - Bulgan',
						value: 'MN-067',
					},
					{
						name: 'MN-069 - Bayankhongor',
						value: 'MN-069',
					},
					{
						name: 'MN-071 - Bayan-Ulgii',
						value: 'MN-071',
					},
					{
						name: 'MN-073 - Arkhangai',
						value: 'MN-073',
					},
					{
						name: 'MN-1 - Ulaanbaatar',
						value: 'MN-1',
					},
					{
						name: 'MO - Macao',
						value: 'MO',
					},
					{
						name: 'MP - Northern Mariana Islands',
						value: 'MP',
					},
					{
						name: 'MQ - Martinique',
						value: 'MQ',
					},
					{
						name: 'MR - Mauritania',
						value: 'MR',
					},
					{
						name: 'MR-01 - Hodh Ech Chargui',
						value: 'MR-01',
					},
					{
						name: 'MR-02 - Hodh El Gharbi',
						value: 'MR-02',
					},
					{
						name: 'MR-03 - Assaba',
						value: 'MR-03',
					},
					{
						name: 'MR-04 - Gorgol',
						value: 'MR-04',
					},
					{
						name: 'MR-05 - Brakna',
						value: 'MR-05',
					},
					{
						name: 'MR-06 - Trarza',
						value: 'MR-06',
					},
					{
						name: 'MR-07 - Adrar',
						value: 'MR-07',
					},
					{
						name: 'MR-08 - Dakhlet Nouadhibou',
						value: 'MR-08',
					},
					{
						name: 'MR-09 - Tagant',
						value: 'MR-09',
					},
					{
						name: 'MR-10 - Guidimaka',
						value: 'MR-10',
					},
					{
						name: 'MR-11 - Tiris Zemmour',
						value: 'MR-11',
					},
					{
						name: 'MR-12 - Inchiri',
						value: 'MR-12',
					},
					{
						name: 'MR-NKC - Nouakchott',
						value: 'MR-NKC',
					},
					{
						name: 'MS - Montserrat',
						value: 'MS',
					},
					{
						name: 'MT - Malta',
						value: 'MT',
					},
					{
						name: 'MU - Mauritius',
						value: 'MU',
					},
					{
						name: 'MU-AG - Agalega Islands',
						value: 'MU-AG',
					},
					{
						name: 'MU-BL - Black River',
						value: 'MU-BL',
					},
					{
						name: 'MU-CC - Cargados Carajos',
						value: 'MU-CC',
					},
					{
						name: 'MU-FL - Flacq',
						value: 'MU-FL',
					},
					{
						name: 'MU-GP - Grand Port',
						value: 'MU-GP',
					},
					{
						name: 'MU-MO - Moka',
						value: 'MU-MO',
					},
					{
						name: 'MU-PA - Pamplemousses',
						value: 'MU-PA',
					},
					{
						name: 'MU-PL - Port Louis',
						value: 'MU-PL',
					},
					{
						name: 'MU-PW - Plaines Wilhems',
						value: 'MU-PW',
					},
					{
						name: 'MU-RO - Rodrigues',
						value: 'MU-RO',
					},
					{
						name: 'MU-RR - Rivière du Rempart',
						value: 'MU-RR',
					},
					{
						name: 'MU-SA - Savanne',
						value: 'MU-SA',
					},
					{
						name: 'MV - Maldives',
						value: 'MV',
					},
					{
						name: 'MV-MLE - Male',
						value: 'MV-MLE',
					},
					{
						name: 'MV-NO - North Province',
						value: 'MV-NO',
					},
					{
						name: 'MV-SC - South Central Province',
						value: 'MV-SC',
					},
					{
						name: 'MV-SU - South Province',
						value: 'MV-SU',
					},
					{
						name: 'MV-UN - Upper North Province',
						value: 'MV-UN',
					},
					{
						name: 'MV-US - Upper South Province',
						value: 'MV-US',
					},
					{
						name: 'MW - Malawi',
						value: 'MW',
					},
					{
						name: 'MW-S - Southern Region',
						value: 'MW-S',
					},
					{
						name: 'MX - Mexico',
						value: 'MX',
					},
					{
						name: 'MX-AGU - Aguascalientes',
						value: 'MX-AGU',
					},
					{
						name: 'MX-BCN - Baja California',
						value: 'MX-BCN',
					},
					{
						name: 'MX-BCS - Baja California Sur',
						value: 'MX-BCS',
					},
					{
						name: 'MX-CAM - Campeche',
						value: 'MX-CAM',
					},
					{
						name: 'MX-CHH - Chihuahua',
						value: 'MX-CHH',
					},
					{
						name: 'MX-CHP - Chiapas',
						value: 'MX-CHP',
					},
					{
						name: 'MX-COA - Coahuila',
						value: 'MX-COA',
					},
					{
						name: 'MX-COL - Colima',
						value: 'MX-COL',
					},
					{
						name: 'MX-DIF - Mexico City',
						value: 'MX-DIF',
					},
					{
						name: 'MX-DUR - Durango',
						value: 'MX-DUR',
					},
					{
						name: 'MX-GRO - Guerrero',
						value: 'MX-GRO',
					},
					{
						name: 'MX-GUA - Guanajuato',
						value: 'MX-GUA',
					},
					{
						name: 'MX-HID - Hidalgo',
						value: 'MX-HID',
					},
					{
						name: 'MX-JAL - Jalisco',
						value: 'MX-JAL',
					},
					{
						name: 'MX-MEX - State of Mexico',
						value: 'MX-MEX',
					},
					{
						name: 'MX-MIC - Michoacán',
						value: 'MX-MIC',
					},
					{
						name: 'MX-MOR - Morelos',
						value: 'MX-MOR',
					},
					{
						name: 'MX-NAY - Nayarit',
						value: 'MX-NAY',
					},
					{
						name: 'MX-NLE - Nuevo Leon',
						value: 'MX-NLE',
					},
					{
						name: 'MX-OAX - Oaxaca',
						value: 'MX-OAX',
					},
					{
						name: 'MX-PUE - Puebla',
						value: 'MX-PUE',
					},
					{
						name: 'MX-QUE - Querétaro',
						value: 'MX-QUE',
					},
					{
						name: 'MX-ROO - Quintana Roo',
						value: 'MX-ROO',
					},
					{
						name: 'MX-SIN - Sinaloa',
						value: 'MX-SIN',
					},
					{
						name: 'MX-SLP - San Luis Potosi',
						value: 'MX-SLP',
					},
					{
						name: 'MX-SON - Sonora',
						value: 'MX-SON',
					},
					{
						name: 'MX-TAB - Tabasco',
						value: 'MX-TAB',
					},
					{
						name: 'MX-TAM - Tamaulipas',
						value: 'MX-TAM',
					},
					{
						name: 'MX-TLA - Tlaxcala',
						value: 'MX-TLA',
					},
					{
						name: 'MX-VER - Veracruz',
						value: 'MX-VER',
					},
					{
						name: 'MX-YUC - Yucatan',
						value: 'MX-YUC',
					},
					{
						name: 'MX-ZAC - Zacatecas',
						value: 'MX-ZAC',
					},
					{
						name: 'MY - Malaysia',
						value: 'MY',
					},
					{
						name: 'MY-01 - Johor',
						value: 'MY-01',
					},
					{
						name: 'MY-02 - Kedah',
						value: 'MY-02',
					},
					{
						name: 'MY-03 - Kelantan',
						value: 'MY-03',
					},
					{
						name: 'MY-04 - Malacca',
						value: 'MY-04',
					},
					{
						name: 'MY-05 - Negeri Sembilan',
						value: 'MY-05',
					},
					{
						name: 'MY-06 - Pahang',
						value: 'MY-06',
					},
					{
						name: 'MY-07 - Penang',
						value: 'MY-07',
					},
					{
						name: 'MY-08 - Perak',
						value: 'MY-08',
					},
					{
						name: 'MY-09 - Perlis',
						value: 'MY-09',
					},
					{
						name: 'MY-10 - Selangor',
						value: 'MY-10',
					},
					{
						name: 'MY-11 - Terengganu',
						value: 'MY-11',
					},
					{
						name: 'MY-12 - Sabah',
						value: 'MY-12',
					},
					{
						name: 'MY-13 - Sarawak',
						value: 'MY-13',
					},
					{
						name: 'MY-14 - Federal Territory of Kuala Lumpur',
						value: 'MY-14',
					},
					{
						name: 'MY-15 - Labuan Federal Territory',
						value: 'MY-15',
					},
					{
						name: 'MY-16 - Putrajaya',
						value: 'MY-16',
					},
					{
						name: 'MZ - Mozambique',
						value: 'MZ',
					},
					{
						name: 'MZ-A - Niassa Province',
						value: 'MZ-A',
					},
					{
						name: 'MZ-B - Manica Province',
						value: 'MZ-B',
					},
					{
						name: 'MZ-G - Gaza Province',
						value: 'MZ-G',
					},
					{
						name: 'MZ-I - Inhambane Province',
						value: 'MZ-I',
					},
					{
						name: 'MZ-L - Maputo Province',
						value: 'MZ-L',
					},
					{
						name: 'MZ-MPM - Maputo City',
						value: 'MZ-MPM',
					},
					{
						name: 'MZ-N - Nampula Province',
						value: 'MZ-N',
					},
					{
						name: 'MZ-P - Cabo Delgado Province',
						value: 'MZ-P',
					},
					{
						name: 'MZ-Q - Zambezia Province',
						value: 'MZ-Q',
					},
					{
						name: 'MZ-S - Sofala Province',
						value: 'MZ-S',
					},
					{
						name: 'MZ-T - Tete Province',
						value: 'MZ-T',
					},
					{
						name: 'NA - Namibia',
						value: 'NA',
					},
					{
						name: 'NA-CA - Zambezi Region',
						value: 'NA-CA',
					},
					{
						name: 'NA-ER - Erongo',
						value: 'NA-ER',
					},
					{
						name: 'NA-HA - Hardap Region',
						value: 'NA-HA',
					},
					{
						name: 'NA-KA - Karas Region',
						value: 'NA-KA',
					},
					{
						name: 'NA-KH - Khomas Region',
						value: 'NA-KH',
					},
					{
						name: 'NA-KU - Kunene Region',
						value: 'NA-KU',
					},
					{
						name: 'NA-OD - Otjozondjupa Region',
						value: 'NA-OD',
					},
					{
						name: 'NA-OH - Omaheke Region',
						value: 'NA-OH',
					},
					{
						name: 'NA-OK - Kavango Region',
						value: 'NA-OK',
					},
					{
						name: 'NA-ON - Oshana Region',
						value: 'NA-ON',
					},
					{
						name: 'NA-OS - Omusati Region',
						value: 'NA-OS',
					},
					{
						name: 'NA-OT - Oshikoto Region',
						value: 'NA-OT',
					},
					{
						name: 'NA-OW - Ohangwena',
						value: 'NA-OW',
					},
					{
						name: 'NC - New Caledonia',
						value: 'NC',
					},
					{
						name: 'NE-1 - Agadez',
						value: 'NE-1',
					},
					{
						name: 'NE-2 - Diffa',
						value: 'NE-2',
					},
					{
						name: 'NE-3 - Dosso',
						value: 'NE-3',
					},
					{
						name: 'NE-4 - Maradi',
						value: 'NE-4',
					},
					{
						name: 'NE-5 - Tahoua',
						value: 'NE-5',
					},
					{
						name: 'NE-6 - Tillaberi',
						value: 'NE-6',
					},
					{
						name: 'NE-7 - Zinder',
						value: 'NE-7',
					},
					{
						name: 'NE-8 - Niamey',
						value: 'NE-8',
					},
					{
						name: 'NF - Norfolk Island',
						value: 'NF',
					},
					{
						name: 'NG - Nigeria',
						value: 'NG',
					},
					{
						name: 'NG-AB - Abia',
						value: 'NG-AB',
					},
					{
						name: 'NG-AD - Adamawa',
						value: 'NG-AD',
					},
					{
						name: 'NG-AK - Akwa Ibom',
						value: 'NG-AK',
					},
					{
						name: 'NG-AN - Anambra',
						value: 'NG-AN',
					},
					{
						name: 'NG-BA - Bauchi',
						value: 'NG-BA',
					},
					{
						name: 'NG-BE - Benue',
						value: 'NG-BE',
					},
					{
						name: 'NG-BO - Borno',
						value: 'NG-BO',
					},
					{
						name: 'NG-BY - Bayelsa',
						value: 'NG-BY',
					},
					{
						name: 'NG-CR - Cross River',
						value: 'NG-CR',
					},
					{
						name: 'NG-DE - Delta',
						value: 'NG-DE',
					},
					{
						name: 'NG-EB - Ebonyi',
						value: 'NG-EB',
					},
					{
						name: 'NG-ED - Edo',
						value: 'NG-ED',
					},
					{
						name: 'NG-EK - Ekiti',
						value: 'NG-EK',
					},
					{
						name: 'NG-EN - Enugu',
						value: 'NG-EN',
					},
					{
						name: 'NG-FC - Federal Capital Territory',
						value: 'NG-FC',
					},
					{
						name: 'NG-GO - Gombe',
						value: 'NG-GO',
					},
					{
						name: 'NG-IM - Imo',
						value: 'NG-IM',
					},
					{
						name: 'NG-JI - Jigawa',
						value: 'NG-JI',
					},
					{
						name: 'NG-KD - Kaduna',
						value: 'NG-KD',
					},
					{
						name: 'NG-KE - Kebbi',
						value: 'NG-KE',
					},
					{
						name: 'NG-KN - Kano',
						value: 'NG-KN',
					},
					{
						name: 'NG-KO - Kogi',
						value: 'NG-KO',
					},
					{
						name: 'NG-KT - Katsina',
						value: 'NG-KT',
					},
					{
						name: 'NG-KW - Kwara',
						value: 'NG-KW',
					},
					{
						name: 'NG-LA - Lagos',
						value: 'NG-LA',
					},
					{
						name: 'NG-NA - Nasarawa',
						value: 'NG-NA',
					},
					{
						name: 'NG-NI - Niger',
						value: 'NG-NI',
					},
					{
						name: 'NG-OG - Ogun State',
						value: 'NG-OG',
					},
					{
						name: 'NG-ON - Ondo',
						value: 'NG-ON',
					},
					{
						name: 'NG-OS - Osun',
						value: 'NG-OS',
					},
					{
						name: 'NG-OY - Oyo',
						value: 'NG-OY',
					},
					{
						name: 'NG-PL - Plateau',
						value: 'NG-PL',
					},
					{
						name: 'NG-RI - Rivers',
						value: 'NG-RI',
					},
					{
						name: 'NG-SO - Sokoto',
						value: 'NG-SO',
					},
					{
						name: 'NG-TA - Taraba',
						value: 'NG-TA',
					},
					{
						name: 'NG-YO - Yobe',
						value: 'NG-YO',
					},
					{
						name: 'NG-ZA - Zamfara',
						value: 'NG-ZA',
					},
					{
						name: 'NI - Nicaragua',
						value: 'NI',
					},
					{
						name: 'NI-AN - Autonomous Region of the Northern Atlantic',
						value: 'NI-AN',
					},
					{
						name: 'NI-AS - Autonomous Region of the Southern Atlantic',
						value: 'NI-AS',
					},
					{
						name: 'NI-BO - Boaco',
						value: 'NI-BO',
					},
					{
						name: 'NI-CA - Carazo',
						value: 'NI-CA',
					},
					{
						name: 'NI-CI - Chinandega',
						value: 'NI-CI',
					},
					{
						name: 'NI-CO - Chontales',
						value: 'NI-CO',
					},
					{
						name: 'NI-ES - Esteli',
						value: 'NI-ES',
					},
					{
						name: 'NI-GR - Granada',
						value: 'NI-GR',
					},
					{
						name: 'NI-JI - Jinotega',
						value: 'NI-JI',
					},
					{
						name: 'NI-LE - Leon',
						value: 'NI-LE',
					},
					{
						name: 'NI-MD - Madriz',
						value: 'NI-MD',
					},
					{
						name: 'NI-MN - Managua',
						value: 'NI-MN',
					},
					{
						name: 'NI-MS - Masaya',
						value: 'NI-MS',
					},
					{
						name: 'NI-MT - Matagalpa',
						value: 'NI-MT',
					},
					{
						name: 'NI-NS - Nueva Segovia',
						value: 'NI-NS',
					},
					{
						name: 'NI-RI - Rivas',
						value: 'NI-RI',
					},
					{
						name: 'NI-SJ - Rio San Juan',
						value: 'NI-SJ',
					},
					{
						name: 'NL - Netherlands',
						value: 'NL',
					},
					{
						name: 'NL-DR - Drenthe',
						value: 'NL-DR',
					},
					{
						name: 'NL-FL - Flevoland',
						value: 'NL-FL',
					},
					{
						name: 'NL-FR - Friesland',
						value: 'NL-FR',
					},
					{
						name: 'NL-GE - Gelderland',
						value: 'NL-GE',
					},
					{
						name: 'NL-GR - Groningen',
						value: 'NL-GR',
					},
					{
						name: 'NL-LI - Limburg',
						value: 'NL-LI',
					},
					{
						name: 'NL-NB - North Brabant',
						value: 'NL-NB',
					},
					{
						name: 'NL-NH - North Holland',
						value: 'NL-NH',
					},
					{
						name: 'NL-OV - Overijssel',
						value: 'NL-OV',
					},
					{
						name: 'NL-UT - Utrecht',
						value: 'NL-UT',
					},
					{
						name: 'NL-ZE - Zeeland',
						value: 'NL-ZE',
					},
					{
						name: 'NL-ZH - South Holland',
						value: 'NL-ZH',
					},
					{
						name: 'NO - Norway',
						value: 'NO',
					},
					{
						name: 'NO-01 - Ostfold',
						value: 'NO-01',
					},
					{
						name: 'NO-02 - Akershus',
						value: 'NO-02',
					},
					{
						name: 'NO-03 - Oslo',
						value: 'NO-03',
					},
					{
						name: 'NO-04 - Hedmark',
						value: 'NO-04',
					},
					{
						name: 'NO-05 - Oppland',
						value: 'NO-05',
					},
					{
						name: 'NO-06 - Buskerud',
						value: 'NO-06',
					},
					{
						name: 'NO-07 - Vestfold',
						value: 'NO-07',
					},
					{
						name: 'NO-08 - Telemark',
						value: 'NO-08',
					},
					{
						name: 'NO-09 - Aust-Agder',
						value: 'NO-09',
					},
					{
						name: 'NO-10 - Vest-Agder',
						value: 'NO-10',
					},
					{
						name: 'NO-11 - Rogaland',
						value: 'NO-11',
					},
					{
						name: 'NO-12 - Hordaland',
						value: 'NO-12',
					},
					{
						name: 'NO-14 - Sogn og Fjordane',
						value: 'NO-14',
					},
					{
						name: 'NO-15 - Møre og Romsdal',
						value: 'NO-15',
					},
					{
						name: 'NO-16 - Sor-Trondelag',
						value: 'NO-16',
					},
					{
						name: 'NO-17 - Nord-Trondelag',
						value: 'NO-17',
					},
					{
						name: 'NO-18 - Nordland',
						value: 'NO-18',
					},
					{
						name: 'NO-19 - Troms',
						value: 'NO-19',
					},
					{
						name: 'NO-20 - Finnmark',
						value: 'NO-20',
					},
					{
						name: 'NP - Nepal',
						value: 'NP',
					},
					{
						name: 'NP-2 - Mid-Western Region',
						value: 'NP-2',
					},
					{
						name: 'NP-5 - Far-Western Region',
						value: 'NP-5',
					},
					{
						name: 'NR - Nauru',
						value: 'NR',
					},
					{
						name: 'NR-01 - Aiwo',
						value: 'NR-01',
					},
					{
						name: 'NR-02 - Anabar',
						value: 'NR-02',
					},
					{
						name: 'NR-03 - Anetan',
						value: 'NR-03',
					},
					{
						name: 'NR-04 - Anibare',
						value: 'NR-04',
					},
					{
						name: 'NR-05 - Baiti',
						value: 'NR-05',
					},
					{
						name: 'NR-06 - Boe',
						value: 'NR-06',
					},
					{
						name: 'NR-07 - Buada',
						value: 'NR-07',
					},
					{
						name: 'NR-08 - Denigomodu',
						value: 'NR-08',
					},
					{
						name: 'NR-09 - Ewa',
						value: 'NR-09',
					},
					{
						name: 'NR-10 - Ijuw',
						value: 'NR-10',
					},
					{
						name: 'NR-11 - Meneng',
						value: 'NR-11',
					},
					{
						name: 'NR-12 - Nibok',
						value: 'NR-12',
					},
					{
						name: 'NR-13 - Uaboe',
						value: 'NR-13',
					},
					{
						name: 'NR-14 - Yaren',
						value: 'NR-14',
					},
					{
						name: 'NU - Niue',
						value: 'NU',
					},
					{
						name: 'NU-TOI - Toi',
						value: 'NU-TOI',
					},
					{
						name: 'NZ - New Zealand',
						value: 'NZ',
					},
					{
						name: 'NZ-AUK - Auckland',
						value: 'NZ-AUK',
					},
					{
						name: 'NZ-BOP - Bay Of Plenty',
						value: 'NZ-BOP',
					},
					{
						name: 'NZ-CAN - Canterbury',
						value: 'NZ-CAN',
					},
					{
						name: 'NZ-CIT - Chatham Islands',
						value: 'NZ-CIT',
					},
					{
						name: 'NZ-GIS - Gisborne',
						value: 'NZ-GIS',
					},
					{
						name: 'NZ-HKB - Hawke\'s Bay',
						value: 'NZ-HKB',
					},
					{
						name: 'NZ-MBH - Marlborough',
						value: 'NZ-MBH',
					},
					{
						name: 'NZ-MWT - Manawatu-Wanganui',
						value: 'NZ-MWT',
					},
					{
						name: 'NZ-NSN - Nelson',
						value: 'NZ-NSN',
					},
					{
						name: 'NZ-NTL - Northland',
						value: 'NZ-NTL',
					},
					{
						name: 'NZ-OTA - Otago',
						value: 'NZ-OTA',
					},
					{
						name: 'NZ-STL - Southland',
						value: 'NZ-STL',
					},
					{
						name: 'NZ-TAS - Tasman',
						value: 'NZ-TAS',
					},
					{
						name: 'NZ-TKI - Taranaki',
						value: 'NZ-TKI',
					},
					{
						name: 'NZ-WGN - Wellington',
						value: 'NZ-WGN',
					},
					{
						name: 'NZ-WKO - Waikato',
						value: 'NZ-WKO',
					},
					{
						name: 'NZ-WTC - West Coast',
						value: 'NZ-WTC',
					},
					{
						name: 'OM - Oman',
						value: 'OM',
					},
					{
						name: 'OM-BJ - Al Batinah South Governorate',
						value: 'OM-BJ',
					},
					{
						name: 'OM-BS - Al Batinah North Governorate',
						value: 'OM-BS',
					},
					{
						name: 'OM-BU - Al Buraymi Governorate',
						value: 'OM-BU',
					},
					{
						name: 'OM-DA - Ad Dakhiliyah ‍Governorate',
						value: 'OM-DA',
					},
					{
						name: 'OM-MA - Muscat Governorate',
						value: 'OM-MA',
					},
					{
						name: 'OM-MU - Musandam Governorate',
						value: 'OM-MU',
					},
					{
						name: 'OM-SJ - Ash Sharqiyah South Governorate',
						value: 'OM-SJ',
					},
					{
						name: 'OM-SS - Ash Sharqiyah North Governorate',
						value: 'OM-SS',
					},
					{
						name: 'OM-WU - Al Wusta Governorate',
						value: 'OM-WU',
					},
					{
						name: 'OM-ZA - Ad Dhahirah Governorate',
						value: 'OM-ZA',
					},
					{
						name: 'OM-ZU - Dhofar Governorate',
						value: 'OM-ZU',
					},
					{
						name: 'PA-1 - Bocas del Toro Province',
						value: 'PA-1',
					},
					{
						name: 'PA-2 - Coclé Province',
						value: 'PA-2',
					},
					{
						name: 'PA-3 - Colón Province',
						value: 'PA-3',
					},
					{
						name: 'PA-4 - Chiriquí Province',
						value: 'PA-4',
					},
					{
						name: 'PA-5 - Darién Province',
						value: 'PA-5',
					},
					{
						name: 'PA-6 - Herrera Province',
						value: 'PA-6',
					},
					{
						name: 'PA-7 - Los Santos Province',
						value: 'PA-7',
					},
					{
						name: 'PA-8 - Panama',
						value: 'PA-8',
					},
					{
						name: 'PA-9 - Veraguas Province',
						value: 'PA-9',
					},
					{
						name: 'PA-EM - Emberá-Wounaan Comarca',
						value: 'PA-EM',
					},
					{
						name: 'PA-KY - Guna Yala',
						value: 'PA-KY',
					},
					{
						name: 'PA-NB - Ngäbe-Buglé Comarca',
						value: 'PA-NB',
					},
					{
						name: 'PE - Peru',
						value: 'PE',
					},
					{
						name: 'PE-ANC - Ancash',
						value: 'PE-ANC',
					},
					{
						name: 'PE-APU - Apurimac',
						value: 'PE-APU',
					},
					{
						name: 'PE-ARE - Arequipa',
						value: 'PE-ARE',
					},
					{
						name: 'PE-AYA - Ayacucho',
						value: 'PE-AYA',
					},
					{
						name: 'PE-CAJ - Cajamarca',
						value: 'PE-CAJ',
					},
					{
						name: 'PE-CAL - Callao',
						value: 'PE-CAL',
					},
					{
						name: 'PE-CUS - Cusco',
						value: 'PE-CUS',
					},
					{
						name: 'PE-HUC - Huanuco',
						value: 'PE-HUC',
					},
					{
						name: 'PE-HUV - Huancavelica',
						value: 'PE-HUV',
					},
					{
						name: 'PE-ICA - Ica',
						value: 'PE-ICA',
					},
					{
						name: 'PE-JUN - Junin',
						value: 'PE-JUN',
					},
					{
						name: 'PE-LAL - La Libertad',
						value: 'PE-LAL',
					},
					{
						name: 'PE-LAM - Lambayeque',
						value: 'PE-LAM',
					},
					{
						name: 'PE-LIM - Lima Region',
						value: 'PE-LIM',
					},
					{
						name: 'PE-LOR - Loreto',
						value: 'PE-LOR',
					},
					{
						name: 'PE-MDD - Madre de Dios',
						value: 'PE-MDD',
					},
					{
						name: 'PE-MOQ - Moquegua',
						value: 'PE-MOQ',
					},
					{
						name: 'PE-PAS - Pasco',
						value: 'PE-PAS',
					},
					{
						name: 'PE-PIU - Piura',
						value: 'PE-PIU',
					},
					{
						name: 'PE-PUN - Puno',
						value: 'PE-PUN',
					},
					{
						name: 'PE-SAM - San Martin',
						value: 'PE-SAM',
					},
					{
						name: 'PE-TAC - Tacna',
						value: 'PE-TAC',
					},
					{
						name: 'PE-TUM - Tumbes',
						value: 'PE-TUM',
					},
					{
						name: 'PE-UCA - Ucayali',
						value: 'PE-UCA',
					},
					{
						name: 'PF - French Polynesia',
						value: 'PF',
					},
					{
						name: 'PG - Papua New Guinea',
						value: 'PG',
					},
					{
						name: 'PG-CPK - Chimbu Province',
						value: 'PG-CPK',
					},
					{
						name: 'PG-EBR - East New Britain Province',
						value: 'PG-EBR',
					},
					{
						name: 'PG-EHG - Eastern Highlands Province',
						value: 'PG-EHG',
					},
					{
						name: 'PG-EPW - Enga Province',
						value: 'PG-EPW',
					},
					{
						name: 'PG-ESW - East Sepik Province',
						value: 'PG-ESW',
					},
					{
						name: 'PG-GPK - Gulf Province',
						value: 'PG-GPK',
					},
					{
						name: 'PG-JWK - Jiwaka Province',
						value: 'PG-JWK',
					},
					{
						name: 'PG-MBA - Milne Bay Province',
						value: 'PG-MBA',
					},
					{
						name: 'PG-MPL - Morobe Province',
						value: 'PG-MPL',
					},
					{
						name: 'PG-MPM - Madang Province',
						value: 'PG-MPM',
					},
					{
						name: 'PG-MRL - Manus Province',
						value: 'PG-MRL',
					},
					{
						name: 'PG-NCD - National Capital District',
						value: 'PG-NCD',
					},
					{
						name: 'PG-NIK - New Ireland Province',
						value: 'PG-NIK',
					},
					{
						name: 'PG-NSB - Autonomous Region of Bougainville',
						value: 'PG-NSB',
					},
					{
						name: 'PG-SAN - West Sepik Province',
						value: 'PG-SAN',
					},
					{
						name: 'PG-SHM - Southern Highlands Province',
						value: 'PG-SHM',
					},
					{
						name: 'PG-WBK - West New Britain Province',
						value: 'PG-WBK',
					},
					{
						name: 'PG-WHM - Western Highlands Province',
						value: 'PG-WHM',
					},
					{
						name: 'PH - Philippines',
						value: 'PH',
					},
					{
						name: 'PH-00 - Metro Manila',
						value: 'PH-00',
					},
					{
						name: 'PH-01 - Ilocos Region',
						value: 'PH-01',
					},
					{
						name: 'PH-02 - Cagayan Valley',
						value: 'PH-02',
					},
					{
						name: 'PH-03 - Central Luzon',
						value: 'PH-03',
					},
					{
						name: 'PH-05 - Bicol',
						value: 'PH-05',
					},
					{
						name: 'PH-06 - Western Visayas',
						value: 'PH-06',
					},
					{
						name: 'PH-07 - Central Visayas',
						value: 'PH-07',
					},
					{
						name: 'PH-08 - Eastern Visayas',
						value: 'PH-08',
					},
					{
						name: 'PH-09 - Zamboanga Peninsula',
						value: 'PH-09',
					},
					{
						name: 'PH-10 - Northern Mindanao',
						value: 'PH-10',
					},
					{
						name: 'PH-11 - Davao Region',
						value: 'PH-11',
					},
					{
						name: 'PH-12 - Region XII',
						value: 'PH-12',
					},
					{
						name: 'PH-13 - Caraga',
						value: 'PH-13',
					},
					{
						name: 'PH-14 - Autonomous Region in Muslim Mindanao',
						value: 'PH-14',
					},
					{
						name: 'PH-15 - Cordillera Administrative Region',
						value: 'PH-15',
					},
					{
						name: 'PH-40 - Calabarzon',
						value: 'PH-40',
					},
					{
						name: 'PH-41 - MIMAROPA',
						value: 'PH-41',
					},
					{
						name: 'PK - Pakistan',
						value: 'PK',
					},
					{
						name: 'PK-BA - Balochistan',
						value: 'PK-BA',
					},
					{
						name: 'PK-GB - Gilgit-Baltistan',
						value: 'PK-GB',
					},
					{
						name: 'PK-IS - Islamabad Capital Territory',
						value: 'PK-IS',
					},
					{
						name: 'PK-JK - Azad Jammu and Kashmir',
						value: 'PK-JK',
					},
					{
						name: 'PK-KP - Khyber Pakhtunkhwa',
						value: 'PK-KP',
					},
					{
						name: 'PK-PB - Punjab',
						value: 'PK-PB',
					},
					{
						name: 'PK-SD - Sindh',
						value: 'PK-SD',
					},
					{
						name: 'PK-TA - Federally Administered Tribal Areas',
						value: 'PK-TA',
					},
					{
						name: 'PL - Poland',
						value: 'PL',
					},
					{
						name: 'PL-DS - Lower Silesian Voivodeship',
						value: 'PL-DS',
					},
					{
						name: 'PL-KP - Kuyavian-Pomeranian Voivodeship',
						value: 'PL-KP',
					},
					{
						name: 'PL-LB - Lubusz Voivodeship',
						value: 'PL-LB',
					},
					{
						name: 'PL-LD - Łódź Voivodeship',
						value: 'PL-LD',
					},
					{
						name: 'PL-LU - Lublin Voivodeship',
						value: 'PL-LU',
					},
					{
						name: 'PL-MA - Lesser Poland Voivodeship',
						value: 'PL-MA',
					},
					{
						name: 'PL-MZ - Masovian Voivodeship',
						value: 'PL-MZ',
					},
					{
						name: 'PL-OP - Opole Voivodeship',
						value: 'PL-OP',
					},
					{
						name: 'PL-PD - Podlaskie Voivodeship',
						value: 'PL-PD',
					},
					{
						name: 'PL-PK - Podkarpackie Voivodeship',
						value: 'PL-PK',
					},
					{
						name: 'PL-PM - Pomeranian Voivodeship',
						value: 'PL-PM',
					},
					{
						name: 'PL-SK - Swietokrzyskie',
						value: 'PL-SK',
					},
					{
						name: 'PL-SL - Silesian Voivodeship',
						value: 'PL-SL',
					},
					{
						name: 'PL-WN - Warmian-Masurian Voivodeship',
						value: 'PL-WN',
					},
					{
						name: 'PL-WP - Greater Poland Voivodeship',
						value: 'PL-WP',
					},
					{
						name: 'PL-ZP - West Pomeranian Voivodeship',
						value: 'PL-ZP',
					},
					{
						name: 'PM - St. Pierre & Miquelon',
						value: 'PM',
					},
					{
						name: 'PN - Pitcairn Islands',
						value: 'PN',
					},
					{
						name: 'PR - Puerto Rico',
						value: 'PR',
					},
					{
						name: 'PS - Palestine',
						value: 'PS',
					},
					{
						name: 'PT - Portugal',
						value: 'PT',
					},
					{
						name: 'PT-01 - Aveiro District',
						value: 'PT-01',
					},
					{
						name: 'PT-02 - Beja District',
						value: 'PT-02',
					},
					{
						name: 'PT-03 - Braga',
						value: 'PT-03',
					},
					{
						name: 'PT-04 - Bragança District',
						value: 'PT-04',
					},
					{
						name: 'PT-05 - Castelo Branco District',
						value: 'PT-05',
					},
					{
						name: 'PT-06 - Coimbra District',
						value: 'PT-06',
					},
					{
						name: 'PT-07 - Évora District',
						value: 'PT-07',
					},
					{
						name: 'PT-08 - Faro District',
						value: 'PT-08',
					},
					{
						name: 'PT-09 - Guarda District',
						value: 'PT-09',
					},
					{
						name: 'PT-10 - Leiria District',
						value: 'PT-10',
					},
					{
						name: 'PT-11 - Lisbon',
						value: 'PT-11',
					},
					{
						name: 'PT-12 - Portalegre District',
						value: 'PT-12',
					},
					{
						name: 'PT-13 - Porto District',
						value: 'PT-13',
					},
					{
						name: 'PT-14 - Santarém District',
						value: 'PT-14',
					},
					{
						name: 'PT-15 - Setubal',
						value: 'PT-15',
					},
					{
						name: 'PT-16 - Viana do Castelo District',
						value: 'PT-16',
					},
					{
						name: 'PT-17 - Vila Real District',
						value: 'PT-17',
					},
					{
						name: 'PT-18 - Viseu District',
						value: 'PT-18',
					},
					{
						name: 'PT-20 - Azores',
						value: 'PT-20',
					},
					{
						name: 'PT-30 - Madeira',
						value: 'PT-30',
					},
					{
						name: 'PW - Palau',
						value: 'PW',
					},
					{
						name: 'PW-002 - Aimeliik',
						value: 'PW-002',
					},
					{
						name: 'PW-004 - Airai',
						value: 'PW-004',
					},
					{
						name: 'PW-010 - Angaur',
						value: 'PW-010',
					},
					{
						name: 'PW-050 - Hatohobei',
						value: 'PW-050',
					},
					{
						name: 'PW-100 - Kayangel',
						value: 'PW-100',
					},
					{
						name: 'PW-150 - Koror',
						value: 'PW-150',
					},
					{
						name: 'PW-212 - Melekeok',
						value: 'PW-212',
					},
					{
						name: 'PW-214 - Ngaraard',
						value: 'PW-214',
					},
					{
						name: 'PW-218 - Ngarchelong',
						value: 'PW-218',
					},
					{
						name: 'PW-222 - Ngardmau',
						value: 'PW-222',
					},
					{
						name: 'PW-224 - Ngatpang',
						value: 'PW-224',
					},
					{
						name: 'PW-226 - Ngchesar',
						value: 'PW-226',
					},
					{
						name: 'PW-227 - Ngaremlengui',
						value: 'PW-227',
					},
					{
						name: 'PW-228 - Ngiwal',
						value: 'PW-228',
					},
					{
						name: 'PW-350 - Peleliu',
						value: 'PW-350',
					},
					{
						name: 'PW-370 - Sonsorol',
						value: 'PW-370',
					},
					{
						name: 'PY - Paraguay',
						value: 'PY',
					},
					{
						name: 'PY-1 - Concepcion',
						value: 'PY-1',
					},
					{
						name: 'PY-10 - Alto Parana',
						value: 'PY-10',
					},
					{
						name: 'PY-12 - Neembucu',
						value: 'PY-12',
					},
					{
						name: 'PY-13 - Amambay Department',
						value: 'PY-13',
					},
					{
						name: 'PY-14 - Canindeyu',
						value: 'PY-14',
					},
					{
						name: 'PY-15 - Presidente Hayes Department',
						value: 'PY-15',
					},
					{
						name: 'PY-16 - Alto Paraguay',
						value: 'PY-16',
					},
					{
						name: 'PY-19 - Boqueron',
						value: 'PY-19',
					},
					{
						name: 'PY-2 - San Pedro',
						value: 'PY-2',
					},
					{
						name: 'PY-3 - Cordillera',
						value: 'PY-3',
					},
					{
						name: 'PY-4 - Guaira',
						value: 'PY-4',
					},
					{
						name: 'PY-5 - Caaguazu',
						value: 'PY-5',
					},
					{
						name: 'PY-6 - Caazapa',
						value: 'PY-6',
					},
					{
						name: 'PY-7 - Itapua',
						value: 'PY-7',
					},
					{
						name: 'PY-8 - Misiones',
						value: 'PY-8',
					},
					{
						name: 'PY-9 - Paraguari',
						value: 'PY-9',
					},
					{
						name: 'PY-ASU - Asunción',
						value: 'PY-ASU',
					},
					{
						name: 'QA - Qatar',
						value: 'QA',
					},
					{
						name: 'QA-DA - Doha',
						value: 'QA-DA',
					},
					{
						name: 'QA-KH - Al Khor',
						value: 'QA-KH',
					},
					{
						name: 'QA-MS - Madinat ash Shamal',
						value: 'QA-MS',
					},
					{
						name: 'QA-RA - Al Rayyan Municipality',
						value: 'QA-RA',
					},
					{
						name: 'QA-US - Umm Salal Municipality',
						value: 'QA-US',
					},
					{
						name: 'QA-WA - Al Wakrah Municipality',
						value: 'QA-WA',
					},
					{
						name: 'QA-ZA - Al Daayen',
						value: 'QA-ZA',
					},
					{
						name: 'RE - Réunion',
						value: 'RE',
					},
					{
						name: 'RO - Romania',
						value: 'RO',
					},
					{
						name: 'RO-AB - Alba County',
						value: 'RO-AB',
					},
					{
						name: 'RO-AG - Argeș County',
						value: 'RO-AG',
					},
					{
						name: 'RO-AR - Arad County',
						value: 'RO-AR',
					},
					{
						name: 'RO-B - Bucharest',
						value: 'RO-B',
					},
					{
						name: 'RO-BC - Bacău County',
						value: 'RO-BC',
					},
					{
						name: 'RO-BH - Bihor County',
						value: 'RO-BH',
					},
					{
						name: 'RO-BN - Bistrița-Năsăud County',
						value: 'RO-BN',
					},
					{
						name: 'RO-BR - Brăila County',
						value: 'RO-BR',
					},
					{
						name: 'RO-BT - Botoșani County',
						value: 'RO-BT',
					},
					{
						name: 'RO-BV - Brașov County',
						value: 'RO-BV',
					},
					{
						name: 'RO-BZ - Buzău County',
						value: 'RO-BZ',
					},
					{
						name: 'RO-CJ - Cluj County',
						value: 'RO-CJ',
					},
					{
						name: 'RO-CL - Călărași County',
						value: 'RO-CL',
					},
					{
						name: 'RO-CS - Caraș-Severin County',
						value: 'RO-CS',
					},
					{
						name: 'RO-CT - Constanța County',
						value: 'RO-CT',
					},
					{
						name: 'RO-CV - Covasna County',
						value: 'RO-CV',
					},
					{
						name: 'RO-DB - Dâmbovița County',
						value: 'RO-DB',
					},
					{
						name: 'RO-DJ - Dolj County',
						value: 'RO-DJ',
					},
					{
						name: 'RO-GJ - Gorj County',
						value: 'RO-GJ',
					},
					{
						name: 'RO-GL - Galați',
						value: 'RO-GL',
					},
					{
						name: 'RO-GR - Giurgiu County',
						value: 'RO-GR',
					},
					{
						name: 'RO-HD - Hunedoara County',
						value: 'RO-HD',
					},
					{
						name: 'RO-HR - Harghita County',
						value: 'RO-HR',
					},
					{
						name: 'RO-IF - Ilfov County',
						value: 'RO-IF',
					},
					{
						name: 'RO-IL - Ialomița County',
						value: 'RO-IL',
					},
					{
						name: 'RO-IS - Iași County',
						value: 'RO-IS',
					},
					{
						name: 'RO-MH - Mehedinți County',
						value: 'RO-MH',
					},
					{
						name: 'RO-MM - Maramureș County',
						value: 'RO-MM',
					},
					{
						name: 'RO-MS - Mureș County',
						value: 'RO-MS',
					},
					{
						name: 'RO-NT - Neamț County',
						value: 'RO-NT',
					},
					{
						name: 'RO-OT - Olt County',
						value: 'RO-OT',
					},
					{
						name: 'RO-PH - Prahova',
						value: 'RO-PH',
					},
					{
						name: 'RO-SB - Sibiu',
						value: 'RO-SB',
					},
					{
						name: 'RO-SJ - Sălaj',
						value: 'RO-SJ',
					},
					{
						name: 'RO-SM - Satu Mare County',
						value: 'RO-SM',
					},
					{
						name: 'RO-SV - Suceava County',
						value: 'RO-SV',
					},
					{
						name: 'RO-TL - Tulcea County',
						value: 'RO-TL',
					},
					{
						name: 'RO-TM - Timiș County',
						value: 'RO-TM',
					},
					{
						name: 'RO-TR - Teleorman County',
						value: 'RO-TR',
					},
					{
						name: 'RO-VL - Vâlcea County',
						value: 'RO-VL',
					},
					{
						name: 'RO-VN - Vrancea County',
						value: 'RO-VN',
					},
					{
						name: 'RO-VS - Vaslui County',
						value: 'RO-VS',
					},
					{
						name: 'RS - Serbia',
						value: 'RS',
					},
					{
						name: 'RS-VO - Vojvodina',
						value: 'RS-VO',
					},
					{
						name: 'RU - Russia',
						value: 'RU',
					},
					{
						name: 'RU-AD - Adygea',
						value: 'RU-AD',
					},
					{
						name: 'RU-AL - Altai Republic',
						value: 'RU-AL',
					},
					{
						name: 'RU-ALT - Altai Krai',
						value: 'RU-ALT',
					},
					{
						name: 'RU-AMU - Amur Oblast',
						value: 'RU-AMU',
					},
					{
						name: 'RU-ARK - Arkhangelsk Oblast',
						value: 'RU-ARK',
					},
					{
						name: 'RU-AST - Astrakhan Oblast',
						value: 'RU-AST',
					},
					{
						name: 'RU-BA - Republic of Bashkortostan',
						value: 'RU-BA',
					},
					{
						name: 'RU-BEL - Belgorod Oblast',
						value: 'RU-BEL',
					},
					{
						name: 'RU-BRY - Bryansk Oblast',
						value: 'RU-BRY',
					},
					{
						name: 'RU-BU - Buryatia',
						value: 'RU-BU',
					},
					{
						name: 'RU-CE - Chechnya',
						value: 'RU-CE',
					},
					{
						name: 'RU-CHE - Chelyabinsk Oblast',
						value: 'RU-CHE',
					},
					{
						name: 'RU-CHU - Chukotka Autonomous Okrug',
						value: 'RU-CHU',
					},
					{
						name: 'RU-CU - Chuvashia Republic',
						value: 'RU-CU',
					},
					{
						name: 'RU-DA - Dagestan Republic',
						value: 'RU-DA',
					},
					{
						name: 'RU-IN - Ingushetia',
						value: 'RU-IN',
					},
					{
						name: 'RU-IRK - Irkutsk Oblast',
						value: 'RU-IRK',
					},
					{
						name: 'RU-IVA - Ivanovo Oblast',
						value: 'RU-IVA',
					},
					{
						name: 'RU-KAM - Kamchatka Krai',
						value: 'RU-KAM',
					},
					{
						name: 'RU-KB - Kabardino-Balkaria',
						value: 'RU-KB',
					},
					{
						name: 'RU-KC - Karachay-Cherkessia',
						value: 'RU-KC',
					},
					{
						name: 'RU-KDA - Krasnodar Krai',
						value: 'RU-KDA',
					},
					{
						name: 'RU-KEM - Kemerovo Oblast',
						value: 'RU-KEM',
					},
					{
						name: 'RU-KGD - Kaliningrad Oblast',
						value: 'RU-KGD',
					},
					{
						name: 'RU-KGN - Kurgan Oblast',
						value: 'RU-KGN',
					},
					{
						name: 'RU-KHA - Khabarovsk Krai',
						value: 'RU-KHA',
					},
					{
						name: 'RU-KHM - Khanty-Mansi Autonomous Okrug',
						value: 'RU-KHM',
					},
					{
						name: 'RU-KIR - Kirov Oblast',
						value: 'RU-KIR',
					},
					{
						name: 'RU-KK - Republic of Khakassia',
						value: 'RU-KK',
					},
					{
						name: 'RU-KL - Kalmykia',
						value: 'RU-KL',
					},
					{
						name: 'RU-KLU - Kaluga Oblast',
						value: 'RU-KLU',
					},
					{
						name: 'RU-KO - Komi Republic',
						value: 'RU-KO',
					},
					{
						name: 'RU-KOS - Kostroma Oblast',
						value: 'RU-KOS',
					},
					{
						name: 'RU-KR - Republic of Karelia',
						value: 'RU-KR',
					},
					{
						name: 'RU-KRS - Kursk Oblast',
						value: 'RU-KRS',
					},
					{
						name: 'RU-KYA - Krasnoyarsk Krai',
						value: 'RU-KYA',
					},
					{
						name: 'RU-LEN - Leningrad Oblast',
						value: 'RU-LEN',
					},
					{
						name: 'RU-LIP - Lipetsk Oblast',
						value: 'RU-LIP',
					},
					{
						name: 'RU-MAG - Magadan Oblast',
						value: 'RU-MAG',
					},
					{
						name: 'RU-ME - Mari El Republic',
						value: 'RU-ME',
					},
					{
						name: 'RU-MO - Mordovia',
						value: 'RU-MO',
					},
					{
						name: 'RU-MOS - Moscow Oblast',
						value: 'RU-MOS',
					},
					{
						name: 'RU-MOW - Moscow',
						value: 'RU-MOW',
					},
					{
						name: 'RU-MUR - Murmansk Oblast',
						value: 'RU-MUR',
					},
					{
						name: 'RU-NEN - Nenets Autonomous Okrug',
						value: 'RU-NEN',
					},
					{
						name: 'RU-NGR - Novgorod Oblast',
						value: 'RU-NGR',
					},
					{
						name: 'RU-NIZ - Nizhny Novgorod Oblast',
						value: 'RU-NIZ',
					},
					{
						name: 'RU-NVS - Novosibirsk Oblast',
						value: 'RU-NVS',
					},
					{
						name: 'RU-OMS - Omsk Oblast',
						value: 'RU-OMS',
					},
					{
						name: 'RU-ORE - Orenburg Oblast',
						value: 'RU-ORE',
					},
					{
						name: 'RU-ORL - Oryol Oblast',
						value: 'RU-ORL',
					},
					{
						name: 'RU-PER - Perm Krai',
						value: 'RU-PER',
					},
					{
						name: 'RU-PNZ - Penza Oblast',
						value: 'RU-PNZ',
					},
					{
						name: 'RU-PRI - Primorsky Krai',
						value: 'RU-PRI',
					},
					{
						name: 'RU-PSK - Pskov Oblast',
						value: 'RU-PSK',
					},
					{
						name: 'RU-ROS - Rostov Oblast',
						value: 'RU-ROS',
					},
					{
						name: 'RU-RYA - Ryazan Oblast',
						value: 'RU-RYA',
					},
					{
						name: 'RU-SA - Sakha Republic',
						value: 'RU-SA',
					},
					{
						name: 'RU-SAK - Sakhalin Oblast',
						value: 'RU-SAK',
					},
					{
						name: 'RU-SAM - Samara Oblast',
						value: 'RU-SAM',
					},
					{
						name: 'RU-SAR - Saratov Oblast',
						value: 'RU-SAR',
					},
					{
						name: 'RU-SE - North Ossetia–Alania',
						value: 'RU-SE',
					},
					{
						name: 'RU-SMO - Smolensk Oblast',
						value: 'RU-SMO',
					},
					{
						name: 'RU-SPE - Saint Petersburg',
						value: 'RU-SPE',
					},
					{
						name: 'RU-STA - Stavropol Krai',
						value: 'RU-STA',
					},
					{
						name: 'RU-SVE - Sverdlovsk Oblast',
						value: 'RU-SVE',
					},
					{
						name: 'RU-TA - Tatarstan',
						value: 'RU-TA',
					},
					{
						name: 'RU-TAM - Tambov Oblast',
						value: 'RU-TAM',
					},
					{
						name: 'RU-TOM - Tomsk Oblast',
						value: 'RU-TOM',
					},
					{
						name: 'RU-TUL - Tula Oblast',
						value: 'RU-TUL',
					},
					{
						name: 'RU-TVE - Tver Oblast',
						value: 'RU-TVE',
					},
					{
						name: 'RU-TY - Tuva',
						value: 'RU-TY',
					},
					{
						name: 'RU-TYU - Tyumen Oblast',
						value: 'RU-TYU',
					},
					{
						name: 'RU-UD - Udmurt Republic',
						value: 'RU-UD',
					},
					{
						name: 'RU-ULY - Ulyanovsk Oblast',
						value: 'RU-ULY',
					},
					{
						name: 'RU-VGG - Volgograd Oblast',
						value: 'RU-VGG',
					},
					{
						name: 'RU-VLA - Vladimir Oblast',
						value: 'RU-VLA',
					},
					{
						name: 'RU-VLG - Vologda Oblast',
						value: 'RU-VLG',
					},
					{
						name: 'RU-VOR - Voronezh Oblast',
						value: 'RU-VOR',
					},
					{
						name: 'RU-YAN - Yamalo-Nenets Autonomous Okrug',
						value: 'RU-YAN',
					},
					{
						name: 'RU-YAR - Yaroslavl Oblast',
						value: 'RU-YAR',
					},
					{
						name: 'RU-YEV - Jewish Autonomous Oblast',
						value: 'RU-YEV',
					},
					{
						name: 'RU-ZAB - Zabaykalsky Krai',
						value: 'RU-ZAB',
					},
					{
						name: 'RW - Rwanda',
						value: 'RW',
					},
					{
						name: 'RW-01 - Kigali',
						value: 'RW-01',
					},
					{
						name: 'SA - Saudi Arabia',
						value: 'SA',
					},
					{
						name: 'SA-01 - Riyadh Province',
						value: 'SA-01',
					},
					{
						name: 'SA-02 - Makkah Province',
						value: 'SA-02',
					},
					{
						name: 'SA-03 - Al Madinah Province',
						value: 'SA-03',
					},
					{
						name: 'SA-05 - Al Qassim',
						value: 'SA-05',
					},
					{
						name: 'SA-06 - Hail Province',
						value: 'SA-06',
					},
					{
						name: 'SA-07 - Tabuk Province',
						value: 'SA-07',
					},
					{
						name: 'SA-08 - Northern Borders Province',
						value: 'SA-08',
					},
					{
						name: 'SA-09 - Jazan',
						value: 'SA-09',
					},
					{
						name: 'SA-10 - Najran',
						value: 'SA-10',
					},
					{
						name: 'SA-11 - Al Bahah Province',
						value: 'SA-11',
					},
					{
						name: 'SA-12 - Al Jowf',
						value: 'SA-12',
					},
					{
						name: 'SA-14 - Aseer Province',
						value: 'SA-14',
					},
					{
						name: 'SB - Solomon Islands',
						value: 'SB',
					},
					{
						name: 'SB-CH - Choiseul Province',
						value: 'SB-CH',
					},
					{
						name: 'SB-CT - Capital Territory',
						value: 'SB-CT',
					},
					{
						name: 'SB-GU - Guadalcanal Province',
						value: 'SB-GU',
					},
					{
						name: 'SB-IS - Isabel Province',
						value: 'SB-IS',
					},
					{
						name: 'SB-MK - Makira-Ulawa',
						value: 'SB-MK',
					},
					{
						name: 'SB-ML - Malaita Province',
						value: 'SB-ML',
					},
					{
						name: 'SB-RB - Rennell and Bellona Province',
						value: 'SB-RB',
					},
					{
						name: 'SB-TE - Temotu Province',
						value: 'SB-TE',
					},
					{
						name: 'SC - Seychelles',
						value: 'SC',
					},
					{
						name: 'SC-01 - Anse Aux Pins',
						value: 'SC-01',
					},
					{
						name: 'SC-02 - Anse Boileau',
						value: 'SC-02',
					},
					{
						name: 'SC-03 - Anse Etoile',
						value: 'SC-03',
					},
					{
						name: 'SC-04 - Au Cap',
						value: 'SC-04',
					},
					{
						name: 'SC-05 - Anse Royale',
						value: 'SC-05',
					},
					{
						name: 'SC-06 - Baie Lazare',
						value: 'SC-06',
					},
					{
						name: 'SC-07 - Baie Sainte Anne',
						value: 'SC-07',
					},
					{
						name: 'SC-08 - Beau Vallon',
						value: 'SC-08',
					},
					{
						name: 'SC-09 - Bel Air',
						value: 'SC-09',
					},
					{
						name: 'SC-10 - Bel Ombre',
						value: 'SC-10',
					},
					{
						name: 'SC-11 - Cascade',
						value: 'SC-11',
					},
					{
						name: 'SC-12 - Glacis',
						value: 'SC-12',
					},
					{
						name: 'SC-13 - Grand Anse Mahe',
						value: 'SC-13',
					},
					{
						name: 'SC-14 - Grand Anse Praslin',
						value: 'SC-14',
					},
					{
						name: 'SC-15 - La Digue',
						value: 'SC-15',
					},
					{
						name: 'SC-16 - La Riviere Anglaise',
						value: 'SC-16',
					},
					{
						name: 'SC-17 - Mont Buxton',
						value: 'SC-17',
					},
					{
						name: 'SC-18 - Mont Fleuri',
						value: 'SC-18',
					},
					{
						name: 'SC-19 - Plaisance',
						value: 'SC-19',
					},
					{
						name: 'SC-20 - Pointe La Rue',
						value: 'SC-20',
					},
					{
						name: 'SC-21 - Port Glaud',
						value: 'SC-21',
					},
					{
						name: 'SC-22 - Saint Louis',
						value: 'SC-22',
					},
					{
						name: 'SC-23 - Takamaka',
						value: 'SC-23',
					},
					{
						name: 'SC-24 - Les Mamelles',
						value: 'SC-24',
					},
					{
						name: 'SC-25 - Roche Caiman',
						value: 'SC-25',
					},
					{
						name: 'SD - Sudan',
						value: 'SD',
					},
					{
						name: 'SD-DN - Shamal Darfur',
						value: 'SD-DN',
					},
					{
						name: 'SD-DS - Janub Darfur',
						value: 'SD-DS',
					},
					{
						name: 'SD-DW - Gharb Darfur',
						value: 'SD-DW',
					},
					{
						name: 'SD-GD - Al Qadarif',
						value: 'SD-GD',
					},
					{
						name: 'SD-GZ - Al Jazirah',
						value: 'SD-GZ',
					},
					{
						name: 'SD-KA - Kassala',
						value: 'SD-KA',
					},
					{
						name: 'SD-KH - Khartoum',
						value: 'SD-KH',
					},
					{
						name: 'SD-KN - North Kurdufan',
						value: 'SD-KN',
					},
					{
						name: 'SD-KS - South Kordofan',
						value: 'SD-KS',
					},
					{
						name: 'SD-NB - Blue Nile',
						value: 'SD-NB',
					},
					{
						name: 'SD-NR - River Nile',
						value: 'SD-NR',
					},
					{
						name: 'SD-NW - White Nile',
						value: 'SD-NW',
					},
					{
						name: 'SD-RS - Red Sea',
						value: 'SD-RS',
					},
					{
						name: 'SD-SI - Sennar',
						value: 'SD-SI',
					},
					{
						name: 'SE - Sweden',
						value: 'SE',
					},
					{
						name: 'SE-AB - Stockholm County',
						value: 'SE-AB',
					},
					{
						name: 'SE-AC - Västerbotten County',
						value: 'SE-AC',
					},
					{
						name: 'SE-BD - Norrbotten County',
						value: 'SE-BD',
					},
					{
						name: 'SE-C - Uppsala County',
						value: 'SE-C',
					},
					{
						name: 'SE-D - Södermanland County',
						value: 'SE-D',
					},
					{
						name: 'SE-E - Östergötland County',
						value: 'SE-E',
					},
					{
						name: 'SE-F - Jonkoping County',
						value: 'SE-F',
					},
					{
						name: 'SE-G - Kronoberg County',
						value: 'SE-G',
					},
					{
						name: 'SE-H - Kalmar County',
						value: 'SE-H',
					},
					{
						name: 'SE-I - Gotland County',
						value: 'SE-I',
					},
					{
						name: 'SE-K - Blekinge County',
						value: 'SE-K',
					},
					{
						name: 'SE-M - Skåne County',
						value: 'SE-M',
					},
					{
						name: 'SE-N - Halland County',
						value: 'SE-N',
					},
					{
						name: 'SE-O - Västra Götaland County',
						value: 'SE-O',
					},
					{
						name: 'SE-S - Varmland County',
						value: 'SE-S',
					},
					{
						name: 'SE-T - Örebro County',
						value: 'SE-T',
					},
					{
						name: 'SE-U - Västmanland County',
						value: 'SE-U',
					},
					{
						name: 'SE-W - Dalarna County',
						value: 'SE-W',
					},
					{
						name: 'SE-X - Gavleborg County',
						value: 'SE-X',
					},
					{
						name: 'SE-Y - Västernorrland County',
						value: 'SE-Y',
					},
					{
						name: 'SE-Z - Jamtland County',
						value: 'SE-Z',
					},
					{
						name: 'SG - Singapore',
						value: 'SG',
					},
					{
						name: 'SH - St. Helena',
						value: 'SH',
					},
					{
						name: 'SH-AC - Ascension',
						value: 'SH-AC',
					},
					{
						name: 'SH-HL - Saint Helena',
						value: 'SH-HL',
					},
					{
						name: 'SH-TA - Tristan da Cunha',
						value: 'SH-TA',
					},
					{
						name: 'SI - Slovenia',
						value: 'SI',
					},
					{
						name: 'SJ - Svalbard & Jan Mayen',
						value: 'SJ',
					},
					{
						name: 'SK - Slovakia',
						value: 'SK',
					},
					{
						name: 'SK-BC - Banská Bystrica Region',
						value: 'SK-BC',
					},
					{
						name: 'SK-BL - Bratislava Region',
						value: 'SK-BL',
					},
					{
						name: 'SK-KI - Košice Region',
						value: 'SK-KI',
					},
					{
						name: 'SK-NI - Nitra Region',
						value: 'SK-NI',
					},
					{
						name: 'SK-PV - Prešov Region',
						value: 'SK-PV',
					},
					{
						name: 'SK-TA - Trnava Region',
						value: 'SK-TA',
					},
					{
						name: 'SK-TC - Trenčín Region',
						value: 'SK-TC',
					},
					{
						name: 'SK-ZI - Žilina Region',
						value: 'SK-ZI',
					},
					{
						name: 'SL - Sierra Leone',
						value: 'SL',
					},
					{
						name: 'SL-W - Western Area',
						value: 'SL-W',
					},
					{
						name: 'SM-01 - Acquaviva',
						value: 'SM-01',
					},
					{
						name: 'SM-02 - Chiesanuova',
						value: 'SM-02',
					},
					{
						name: 'SM-03 - Domagnano',
						value: 'SM-03',
					},
					{
						name: 'SM-04 - Faetano',
						value: 'SM-04',
					},
					{
						name: 'SM-05 - Fiorentino',
						value: 'SM-05',
					},
					{
						name: 'SM-06 - Borgo Maggiore',
						value: 'SM-06',
					},
					{
						name: 'SM-07 - San Marino',
						value: 'SM-07',
					},
					{
						name: 'SM-08 - Montegiardino',
						value: 'SM-08',
					},
					{
						name: 'SM-09 - Serravalle',
						value: 'SM-09',
					},
					{
						name: 'SN - Senegal',
						value: 'SN',
					},
					{
						name: 'SN-DB - Diourbel Region',
						value: 'SN-DB',
					},
					{
						name: 'SN-DK - Dakar',
						value: 'SN-DK',
					},
					{
						name: 'SN-FK - Fatick Region',
						value: 'SN-FK',
					},
					{
						name: 'SN-KA - Kaffrine Region',
						value: 'SN-KA',
					},
					{
						name: 'SN-KD - Kolda Region',
						value: 'SN-KD',
					},
					{
						name: 'SN-KE - Kédougou Region',
						value: 'SN-KE',
					},
					{
						name: 'SN-KL - Kaolack Region',
						value: 'SN-KL',
					},
					{
						name: 'SN-LG - Louga Region',
						value: 'SN-LG',
					},
					{
						name: 'SN-MT - Matam Region',
						value: 'SN-MT',
					},
					{
						name: 'SN-SE - Sédhiou Region',
						value: 'SN-SE',
					},
					{
						name: 'SN-SL - Saint-Louis Region',
						value: 'SN-SL',
					},
					{
						name: 'SN-TC - Tambacounda Region',
						value: 'SN-TC',
					},
					{
						name: 'SN-TH - Thiès Region',
						value: 'SN-TH',
					},
					{
						name: 'SN-ZG - Ziguinchor',
						value: 'SN-ZG',
					},
					{
						name: 'SO - Somalia',
						value: 'SO',
					},
					{
						name: 'SO-AW - Awdal',
						value: 'SO-AW',
					},
					{
						name: 'SO-BK - Bakool',
						value: 'SO-BK',
					},
					{
						name: 'SO-BN - Banaadir',
						value: 'SO-BN',
					},
					{
						name: 'SO-BR - Bari',
						value: 'SO-BR',
					},
					{
						name: 'SO-BY - Bay',
						value: 'SO-BY',
					},
					{
						name: 'SO-GA - Galguduud',
						value: 'SO-GA',
					},
					{
						name: 'SO-GE - Gedo',
						value: 'SO-GE',
					},
					{
						name: 'SO-HI - Hiran',
						value: 'SO-HI',
					},
					{
						name: 'SO-JD - Jubbada Dhexe',
						value: 'SO-JD',
					},
					{
						name: 'SO-JH - Jubbada Hoose',
						value: 'SO-JH',
					},
					{
						name: 'SO-MU - Mudug',
						value: 'SO-MU',
					},
					{
						name: 'SO-NU - Nugaal',
						value: 'SO-NU',
					},
					{
						name: 'SO-SA - Sanaag',
						value: 'SO-SA',
					},
					{
						name: 'SO-SD - Shabeellaha Dhexe',
						value: 'SO-SD',
					},
					{
						name: 'SO-SH - Shabeellaha Hoose',
						value: 'SO-SH',
					},
					{
						name: 'SO-SO - Sool',
						value: 'SO-SO',
					},
					{
						name: 'SO-TO - Togdheer',
						value: 'SO-TO',
					},
					{
						name: 'SO-WO - Woqooyi Galbeed',
						value: 'SO-WO',
					},
					{
						name: 'SR - Suriname',
						value: 'SR',
					},
					{
						name: 'SR-BR - Brokopondo',
						value: 'SR-BR',
					},
					{
						name: 'SR-CM - Commewijne',
						value: 'SR-CM',
					},
					{
						name: 'SR-CR - Coronie',
						value: 'SR-CR',
					},
					{
						name: 'SR-MA - Marowijne',
						value: 'SR-MA',
					},
					{
						name: 'SR-NI - Nickerie District',
						value: 'SR-NI',
					},
					{
						name: 'SR-PM - Paramaribo District',
						value: 'SR-PM',
					},
					{
						name: 'SR-PR - Para',
						value: 'SR-PR',
					},
					{
						name: 'SR-SA - Saramacca',
						value: 'SR-SA',
					},
					{
						name: 'SR-SI - Sipaliwini',
						value: 'SR-SI',
					},
					{
						name: 'SR-WA - Wanica',
						value: 'SR-WA',
					},
					{
						name: 'SS - South Sudan',
						value: 'SS',
					},
					{
						name: 'SS-BN - Northern Bahr el Ghazal',
						value: 'SS-BN',
					},
					{
						name: 'SS-BW - Western Bahr el Ghazal',
						value: 'SS-BW',
					},
					{
						name: 'SS-EC - Central Equatoria',
						value: 'SS-EC',
					},
					{
						name: 'SS-EE - Eastern Equatoria',
						value: 'SS-EE',
					},
					{
						name: 'SS-EW - Western Equatoria',
						value: 'SS-EW',
					},
					{
						name: 'SS-JG - Jonglei',
						value: 'SS-JG',
					},
					{
						name: 'SS-LK - Al-Buhayrat',
						value: 'SS-LK',
					},
					{
						name: 'SS-NU - Upper Nile',
						value: 'SS-NU',
					},
					{
						name: 'SS-UY - Al Wahdah',
						value: 'SS-UY',
					},
					{
						name: 'SS-WR - Warrap',
						value: 'SS-WR',
					},
					{
						name: 'ST - São Tomé & Príncipe',
						value: 'ST',
					},
					{
						name: 'ST-P - Principe',
						value: 'ST-P',
					},
					{
						name: 'ST-S - Sao Tome',
						value: 'ST-S',
					},
					{
						name: 'SV - El Salvador',
						value: 'SV',
					},
					{
						name: 'SV-AH - Ahuachapan',
						value: 'SV-AH',
					},
					{
						name: 'SV-CA - Cabanas',
						value: 'SV-CA',
					},
					{
						name: 'SV-CH - Chalatenango',
						value: 'SV-CH',
					},
					{
						name: 'SV-CU - Cuscatlan',
						value: 'SV-CU',
					},
					{
						name: 'SV-MO - Morazan',
						value: 'SV-MO',
					},
					{
						name: 'SV-SA - Santa Ana',
						value: 'SV-SA',
					},
					{
						name: 'SV-SM - San Miguel',
						value: 'SV-SM',
					},
					{
						name: 'SV-SO - Sonsonate',
						value: 'SV-SO',
					},
					{
						name: 'SV-SS - San Salvador',
						value: 'SV-SS',
					},
					{
						name: 'SV-SV - San Vicente',
						value: 'SV-SV',
					},
					{
						name: 'SV-UN - La Union',
						value: 'SV-UN',
					},
					{
						name: 'SV-US - Usulutan',
						value: 'SV-US',
					},
					{
						name: 'SX - Sint Maarten',
						value: 'SX',
					},
					{
						name: 'SY - Syria',
						value: 'SY',
					},
					{
						name: 'SY-DI - Damascus Governorate',
						value: 'SY-DI',
					},
					{
						name: 'SY-DR - Daraa Governorate',
						value: 'SY-DR',
					},
					{
						name: 'SY-DY - Deir Ez-Zor Governorate',
						value: 'SY-DY',
					},
					{
						name: 'SY-HA - Al Hasakah',
						value: 'SY-HA',
					},
					{
						name: 'SY-HI - Homs Governorate',
						value: 'SY-HI',
					},
					{
						name: 'SY-HL - Aleppo Governorate',
						value: 'SY-HL',
					},
					{
						name: 'SY-HM - Hama Governorate',
						value: 'SY-HM',
					},
					{
						name: 'SY-ID - Idlib Governorate',
						value: 'SY-ID',
					},
					{
						name: 'SY-LA - Latakia Governorate',
						value: 'SY-LA',
					},
					{
						name: 'SY-QU - Quneitra Governorate',
						value: 'SY-QU',
					},
					{
						name: 'SY-RA - Ar-Raqqah Governorate',
						value: 'SY-RA',
					},
					{
						name: 'SY-RD - Rif-Dimashq Governorate',
						value: 'SY-RD',
					},
					{
						name: 'SY-SU - As-Suwayda Governorate',
						value: 'SY-SU',
					},
					{
						name: 'SY-TA - Tartus Governorate',
						value: 'SY-TA',
					},
					{
						name: 'SZ - Eswatini',
						value: 'SZ',
					},
					{
						name: 'SZ-HH - Hhohho',
						value: 'SZ-HH',
					},
					{
						name: 'SZ-LU - Lubombo',
						value: 'SZ-LU',
					},
					{
						name: 'SZ-MA - Manzini',
						value: 'SZ-MA',
					},
					{
						name: 'SZ-SH - Shiselweni',
						value: 'SZ-SH',
					},
					{
						name: 'TC - Turks & Caicos Islands',
						value: 'TC',
					},
					{
						name: 'TD - Chad',
						value: 'TD',
					},
					{
						name: 'TD-BA - Batha',
						value: 'TD-BA',
					},
					{
						name: 'TD-BG - Bahr El Gazel',
						value: 'TD-BG',
					},
					{
						name: 'TD-BO - Borkou',
						value: 'TD-BO',
					},
					{
						name: 'TD-CB - Chari-Baguirmi',
						value: 'TD-CB',
					},
					{
						name: 'TD-EN - Ennedi',
						value: 'TD-EN',
					},
					{
						name: 'TD-GR - Guera',
						value: 'TD-GR',
					},
					{
						name: 'TD-HL - Hadjer-Lamis',
						value: 'TD-HL',
					},
					{
						name: 'TD-KA - Kanem',
						value: 'TD-KA',
					},
					{
						name: 'TD-LC - Lac',
						value: 'TD-LC',
					},
					{
						name: 'TD-LO - Logone Occidental',
						value: 'TD-LO',
					},
					{
						name: 'TD-LR - Logone Oriental',
						value: 'TD-LR',
					},
					{
						name: 'TD-MA - Mandoul',
						value: 'TD-MA',
					},
					{
						name: 'TD-MC - Moyen-Chari',
						value: 'TD-MC',
					},
					{
						name: 'TD-ME - Mayo-Kebbi Est',
						value: 'TD-ME',
					},
					{
						name: 'TD-MO - Mayo-Kebbi Ouest',
						value: 'TD-MO',
					},
					{
						name: 'TD-ND - N\'Djamena',
						value: 'TD-ND',
					},
					{
						name: 'TD-OD - Ouaddai',
						value: 'TD-OD',
					},
					{
						name: 'TD-SA - سلمات',
						value: 'TD-SA',
					},
					{
						name: 'TD-SI - Sila',
						value: 'TD-SI',
					},
					{
						name: 'TD-TA - Tandjile',
						value: 'TD-TA',
					},
					{
						name: 'TD-TI - Tibesti',
						value: 'TD-TI',
					},
					{
						name: 'TD-WF - Wadi Fira',
						value: 'TD-WF',
					},
					{
						name: 'TF - French Southern Territories',
						value: 'TF',
					},
					{
						name: 'TG - Togo',
						value: 'TG',
					},
					{
						name: 'TG-C - Centrale',
						value: 'TG-C',
					},
					{
						name: 'TG-K - Kara',
						value: 'TG-K',
					},
					{
						name: 'TG-M - Maritime',
						value: 'TG-M',
					},
					{
						name: 'TG-P - Plateaux',
						value: 'TG-P',
					},
					{
						name: 'TG-S - Savanes',
						value: 'TG-S',
					},
					{
						name: 'TH - Thailand',
						value: 'TH',
					},
					{
						name: 'TH-10 - Bangkok',
						value: 'TH-10',
					},
					{
						name: 'TH-11 - Samut Prakan',
						value: 'TH-11',
					},
					{
						name: 'TH-12 - Nonthaburi',
						value: 'TH-12',
					},
					{
						name: 'TH-13 - Pathum Thani',
						value: 'TH-13',
					},
					{
						name: 'TH-14 - Phra Nakhon Si Ayutthaya',
						value: 'TH-14',
					},
					{
						name: 'TH-15 - Ang Thong',
						value: 'TH-15',
					},
					{
						name: 'TH-16 - Lopburi',
						value: 'TH-16',
					},
					{
						name: 'TH-17 - Sing Buri',
						value: 'TH-17',
					},
					{
						name: 'TH-18 - Chai Nat',
						value: 'TH-18',
					},
					{
						name: 'TH-19 - Saraburi',
						value: 'TH-19',
					},
					{
						name: 'TH-20 - Chon Buri',
						value: 'TH-20',
					},
					{
						name: 'TH-21 - Rayong',
						value: 'TH-21',
					},
					{
						name: 'TH-22 - Chanthaburi',
						value: 'TH-22',
					},
					{
						name: 'TH-23 - Trat',
						value: 'TH-23',
					},
					{
						name: 'TH-24 - Chachoengsao',
						value: 'TH-24',
					},
					{
						name: 'TH-25 - Prachin Buri',
						value: 'TH-25',
					},
					{
						name: 'TH-26 - Nakhon Nayok',
						value: 'TH-26',
					},
					{
						name: 'TH-27 - Sa Kaeo',
						value: 'TH-27',
					},
					{
						name: 'TH-30 - Nakhon Ratchasima',
						value: 'TH-30',
					},
					{
						name: 'TH-31 - Buri Ram',
						value: 'TH-31',
					},
					{
						name: 'TH-32 - Surin',
						value: 'TH-32',
					},
					{
						name: 'TH-33 - Si Sa Ket',
						value: 'TH-33',
					},
					{
						name: 'TH-34 - Ubon Ratchathani',
						value: 'TH-34',
					},
					{
						name: 'TH-35 - Yasothon',
						value: 'TH-35',
					},
					{
						name: 'TH-36 - Chaiyaphum',
						value: 'TH-36',
					},
					{
						name: 'TH-37 - Amnat Charoen',
						value: 'TH-37',
					},
					{
						name: 'TH-38 - Bueng Kan',
						value: 'TH-38',
					},
					{
						name: 'TH-39 - Nong Bua Lam Phu',
						value: 'TH-39',
					},
					{
						name: 'TH-40 - Khon Kaen',
						value: 'TH-40',
					},
					{
						name: 'TH-41 - Udon Thani',
						value: 'TH-41',
					},
					{
						name: 'TH-42 - Loei',
						value: 'TH-42',
					},
					{
						name: 'TH-43 - Nong Khai',
						value: 'TH-43',
					},
					{
						name: 'TH-44 - Maha Sarakham',
						value: 'TH-44',
					},
					{
						name: 'TH-45 - Roi Et',
						value: 'TH-45',
					},
					{
						name: 'TH-46 - Kalasin',
						value: 'TH-46',
					},
					{
						name: 'TH-47 - Sakon Nakhon',
						value: 'TH-47',
					},
					{
						name: 'TH-48 - Nakhon Phanom',
						value: 'TH-48',
					},
					{
						name: 'TH-49 - Mukdahan',
						value: 'TH-49',
					},
					{
						name: 'TH-50 - Chiang Mai',
						value: 'TH-50',
					},
					{
						name: 'TH-51 - Lamphun',
						value: 'TH-51',
					},
					{
						name: 'TH-52 - Lampang',
						value: 'TH-52',
					},
					{
						name: 'TH-53 - Uttaradit',
						value: 'TH-53',
					},
					{
						name: 'TH-54 - Phrae',
						value: 'TH-54',
					},
					{
						name: 'TH-55 - Nan',
						value: 'TH-55',
					},
					{
						name: 'TH-56 - Phayao',
						value: 'TH-56',
					},
					{
						name: 'TH-57 - Chiang Rai',
						value: 'TH-57',
					},
					{
						name: 'TH-58 - Mae Hong Son',
						value: 'TH-58',
					},
					{
						name: 'TH-60 - Nakhon Sawan',
						value: 'TH-60',
					},
					{
						name: 'TH-61 - Uthai Thani',
						value: 'TH-61',
					},
					{
						name: 'TH-62 - Kamphaeng Phet',
						value: 'TH-62',
					},
					{
						name: 'TH-63 - Tak',
						value: 'TH-63',
					},
					{
						name: 'TH-64 - Sukhothai',
						value: 'TH-64',
					},
					{
						name: 'TH-65 - Phitsanulok',
						value: 'TH-65',
					},
					{
						name: 'TH-66 - Phichit',
						value: 'TH-66',
					},
					{
						name: 'TH-67 - Phetchabun',
						value: 'TH-67',
					},
					{
						name: 'TH-70 - Ratchaburi',
						value: 'TH-70',
					},
					{
						name: 'TH-71 - Kanchanaburi',
						value: 'TH-71',
					},
					{
						name: 'TH-72 - Suphan Buri',
						value: 'TH-72',
					},
					{
						name: 'TH-73 - Nakhon Pathom',
						value: 'TH-73',
					},
					{
						name: 'TH-74 - Samut Sakhon',
						value: 'TH-74',
					},
					{
						name: 'TH-75 - Samut Songkhram',
						value: 'TH-75',
					},
					{
						name: 'TH-76 - Phetchaburi',
						value: 'TH-76',
					},
					{
						name: 'TH-77 - Prachuap Khiri Khan',
						value: 'TH-77',
					},
					{
						name: 'TH-80 - Nakhon Si Thammarat',
						value: 'TH-80',
					},
					{
						name: 'TH-81 - Krabi',
						value: 'TH-81',
					},
					{
						name: 'TH-82 - Phang-nga',
						value: 'TH-82',
					},
					{
						name: 'TH-83 - Phuket',
						value: 'TH-83',
					},
					{
						name: 'TH-84 - Surat Thani',
						value: 'TH-84',
					},
					{
						name: 'TH-85 - Ranong',
						value: 'TH-85',
					},
					{
						name: 'TH-86 - Chumphon',
						value: 'TH-86',
					},
					{
						name: 'TH-90 - Songkhla',
						value: 'TH-90',
					},
					{
						name: 'TH-91 - Satun',
						value: 'TH-91',
					},
					{
						name: 'TH-92 - Trang',
						value: 'TH-92',
					},
					{
						name: 'TH-93 - Phatthalung',
						value: 'TH-93',
					},
					{
						name: 'TH-94 - Pattani',
						value: 'TH-94',
					},
					{
						name: 'TH-95 - Yala',
						value: 'TH-95',
					},
					{
						name: 'TH-96 - Narathiwat',
						value: 'TH-96',
					},
					{
						name: 'TJ - Tajikistan',
						value: 'TJ',
					},
					{
						name: 'TJ-GB - Gorno-Badakhshan Autonomous Province',
						value: 'TJ-GB',
					},
					{
						name: 'TJ-KT - Khatlon',
						value: 'TJ-KT',
					},
					{
						name: 'TJ-RR - Districts of Republican Subordination',
						value: 'TJ-RR',
					},
					{
						name: 'TJ-SU - Sughd Province',
						value: 'TJ-SU',
					},
					{
						name: 'TK - Tokelau',
						value: 'TK',
					},
					{
						name: 'TL - Timor-Leste',
						value: 'TL',
					},
					{
						name: 'TL-AL - Aileu',
						value: 'TL-AL',
					},
					{
						name: 'TL-AN - Ainaro',
						value: 'TL-AN',
					},
					{
						name: 'TL-BA - Baucau',
						value: 'TL-BA',
					},
					{
						name: 'TL-BO - Bobonaro',
						value: 'TL-BO',
					},
					{
						name: 'TL-CO - Cova-Lima',
						value: 'TL-CO',
					},
					{
						name: 'TL-DI - Dili',
						value: 'TL-DI',
					},
					{
						name: 'TL-ER - Ermera',
						value: 'TL-ER',
					},
					{
						name: 'TL-LA - Lautem',
						value: 'TL-LA',
					},
					{
						name: 'TL-LI - Liquica',
						value: 'TL-LI',
					},
					{
						name: 'TL-MF - Manufahi',
						value: 'TL-MF',
					},
					{
						name: 'TL-MT - Manatuto',
						value: 'TL-MT',
					},
					{
						name: 'TL-OE - Oecussi-Ambeno',
						value: 'TL-OE',
					},
					{
						name: 'TL-VI - Viqueque',
						value: 'TL-VI',
					},
					{
						name: 'TM - Turkmenistan',
						value: 'TM',
					},
					{
						name: 'TM-A - Ahal',
						value: 'TM-A',
					},
					{
						name: 'TM-B - Balkan',
						value: 'TM-B',
					},
					{
						name: 'TM-D - Dashoguz Province',
						value: 'TM-D',
					},
					{
						name: 'TM-L - Lebap',
						value: 'TM-L',
					},
					{
						name: 'TM-M - Mary',
						value: 'TM-M',
					},
					{
						name: 'TM-S - Ashgabat',
						value: 'TM-S',
					},
					{
						name: 'TN - Tunisia',
						value: 'TN',
					},
					{
						name: 'TN-11 - Tunis',
						value: 'TN-11',
					},
					{
						name: 'TN-12 - Ariana',
						value: 'TN-12',
					},
					{
						name: 'TN-13 - Ben Arous',
						value: 'TN-13',
					},
					{
						name: 'TN-14 - La Manouba',
						value: 'TN-14',
					},
					{
						name: 'TN-21 - Nabeul',
						value: 'TN-21',
					},
					{
						name: 'TN-22 - Zaghouan',
						value: 'TN-22',
					},
					{
						name: 'TN-23 - Bizerte',
						value: 'TN-23',
					},
					{
						name: 'TN-31 - Beja',
						value: 'TN-31',
					},
					{
						name: 'TN-32 - Jendouba',
						value: 'TN-32',
					},
					{
						name: 'TN-33 - Kef',
						value: 'TN-33',
					},
					{
						name: 'TN-34 - Siliana',
						value: 'TN-34',
					},
					{
						name: 'TN-41 - Kairouan',
						value: 'TN-41',
					},
					{
						name: 'TN-42 - Kasserine',
						value: 'TN-42',
					},
					{
						name: 'TN-43 - Sidi Bou Zid',
						value: 'TN-43',
					},
					{
						name: 'TN-51 - Sousse',
						value: 'TN-51',
					},
					{
						name: 'TN-52 - Monastir',
						value: 'TN-52',
					},
					{
						name: 'TN-53 - Mahdia',
						value: 'TN-53',
					},
					{
						name: 'TN-61 - Sfax',
						value: 'TN-61',
					},
					{
						name: 'TN-71 - Gafsa',
						value: 'TN-71',
					},
					{
						name: 'TN-72 - Tozeur',
						value: 'TN-72',
					},
					{
						name: 'TN-73 - Kebili',
						value: 'TN-73',
					},
					{
						name: 'TN-81 - Gabes',
						value: 'TN-81',
					},
					{
						name: 'TN-82 - Medenine',
						value: 'TN-82',
					},
					{
						name: 'TN-83 - Tataouine',
						value: 'TN-83',
					},
					{
						name: 'TO - Tonga',
						value: 'TO',
					},
					{
						name: 'TO-01 - \'Eua',
						value: 'TO-01',
					},
					{
						name: 'TO-02 - Ha\'apai',
						value: 'TO-02',
					},
					{
						name: 'TO-03 - Niuas',
						value: 'TO-03',
					},
					{
						name: 'TO-04 - Tongatapu',
						value: 'TO-04',
					},
					{
						name: 'TO-05 - Vava\'u',
						value: 'TO-05',
					},
					{
						name: 'TR - Turkey',
						value: 'TR',
					},
					{
						name: 'TR-01 - Adana',
						value: 'TR-01',
					},
					{
						name: 'TR-02 - Adıyaman Province',
						value: 'TR-02',
					},
					{
						name: 'TR-03 - Afyonkarahisar Province',
						value: 'TR-03',
					},
					{
						name: 'TR-04 - Ağrı',
						value: 'TR-04',
					},
					{
						name: 'TR-05 - Amasya Province',
						value: 'TR-05',
					},
					{
						name: 'TR-06 - Ankara',
						value: 'TR-06',
					},
					{
						name: 'TR-07 - Antalya',
						value: 'TR-07',
					},
					{
						name: 'TR-08 - Artvin',
						value: 'TR-08',
					},
					{
						name: 'TR-09 - Aydın Province',
						value: 'TR-09',
					},
					{
						name: 'TR-10 - Balıkesir Province',
						value: 'TR-10',
					},
					{
						name: 'TR-11 - Bilecik',
						value: 'TR-11',
					},
					{
						name: 'TR-12 - Bingöl Province',
						value: 'TR-12',
					},
					{
						name: 'TR-13 - Bitlis',
						value: 'TR-13',
					},
					{
						name: 'TR-14 - Bolu',
						value: 'TR-14',
					},
					{
						name: 'TR-15 - Burdur Province',
						value: 'TR-15',
					},
					{
						name: 'TR-16 - Bursa',
						value: 'TR-16',
					},
					{
						name: 'TR-17 - Çanakkale Province',
						value: 'TR-17',
					},
					{
						name: 'TR-18 - Çankırı',
						value: 'TR-18',
					},
					{
						name: 'TR-19 - Çorum Province',
						value: 'TR-19',
					},
					{
						name: 'TR-20 - Denizli',
						value: 'TR-20',
					},
					{
						name: 'TR-21 - Diyarbakır',
						value: 'TR-21',
					},
					{
						name: 'TR-22 - Edirne',
						value: 'TR-22',
					},
					{
						name: 'TR-23 - Elazığ',
						value: 'TR-23',
					},
					{
						name: 'TR-24 - Erzincan',
						value: 'TR-24',
					},
					{
						name: 'TR-25 - Erzurum',
						value: 'TR-25',
					},
					{
						name: 'TR-26 - Eskişehir Province',
						value: 'TR-26',
					},
					{
						name: 'TR-27 - Gaziantep',
						value: 'TR-27',
					},
					{
						name: 'TR-28 - Giresun',
						value: 'TR-28',
					},
					{
						name: 'TR-29 - Gümüşhane',
						value: 'TR-29',
					},
					{
						name: 'TR-30 - Hakkâri',
						value: 'TR-30',
					},
					{
						name: 'TR-31 - Hatay',
						value: 'TR-31',
					},
					{
						name: 'TR-32 - Isparta Province',
						value: 'TR-32',
					},
					{
						name: 'TR-33 - Mersin Province',
						value: 'TR-33',
					},
					{
						name: 'TR-34 - İstanbul',
						value: 'TR-34',
					},
					{
						name: 'TR-35 - İzmir',
						value: 'TR-35',
					},
					{
						name: 'TR-36 - Kars',
						value: 'TR-36',
					},
					{
						name: 'TR-37 - Kastamonu',
						value: 'TR-37',
					},
					{
						name: 'TR-38 - Kayseri Province',
						value: 'TR-38',
					},
					{
						name: 'TR-39 - Kırklareli',
						value: 'TR-39',
					},
					{
						name: 'TR-40 - Kırşehir',
						value: 'TR-40',
					},
					{
						name: 'TR-41 - Kocaeli',
						value: 'TR-41',
					},
					{
						name: 'TR-42 - Konya',
						value: 'TR-42',
					},
					{
						name: 'TR-43 - Kütahya',
						value: 'TR-43',
					},
					{
						name: 'TR-44 - Malatya',
						value: 'TR-44',
					},
					{
						name: 'TR-45 - Manisa',
						value: 'TR-45',
					},
					{
						name: 'TR-46 - Kahramanmaraş Province',
						value: 'TR-46',
					},
					{
						name: 'TR-47 - Mardin',
						value: 'TR-47',
					},
					{
						name: 'TR-48 - Muğla Province',
						value: 'TR-48',
					},
					{
						name: 'TR-49 - Muş',
						value: 'TR-49',
					},
					{
						name: 'TR-50 - Nevşehir',
						value: 'TR-50',
					},
					{
						name: 'TR-51 - Niğde',
						value: 'TR-51',
					},
					{
						name: 'TR-52 - Ordu',
						value: 'TR-52',
					},
					{
						name: 'TR-53 - Rize',
						value: 'TR-53',
					},
					{
						name: 'TR-54 - Sakarya',
						value: 'TR-54',
					},
					{
						name: 'TR-55 - Samsun',
						value: 'TR-55',
					},
					{
						name: 'TR-56 - Siirt Province',
						value: 'TR-56',
					},
					{
						name: 'TR-57 - Sinop Province',
						value: 'TR-57',
					},
					{
						name: 'TR-58 - Sivas',
						value: 'TR-58',
					},
					{
						name: 'TR-59 - Tekirdağ',
						value: 'TR-59',
					},
					{
						name: 'TR-60 - Tokat',
						value: 'TR-60',
					},
					{
						name: 'TR-61 - Trabzon',
						value: 'TR-61',
					},
					{
						name: 'TR-62 - Tunceli',
						value: 'TR-62',
					},
					{
						name: 'TR-63 - Şanlıurfa Province',
						value: 'TR-63',
					},
					{
						name: 'TR-64 - Uşak',
						value: 'TR-64',
					},
					{
						name: 'TR-65 - Van',
						value: 'TR-65',
					},
					{
						name: 'TR-66 - Yozgat',
						value: 'TR-66',
					},
					{
						name: 'TR-67 - Zonguldak',
						value: 'TR-67',
					},
					{
						name: 'TR-68 - Aksaray',
						value: 'TR-68',
					},
					{
						name: 'TR-69 - Bayburt',
						value: 'TR-69',
					},
					{
						name: 'TR-70 - Karaman',
						value: 'TR-70',
					},
					{
						name: 'TR-71 - Kırıkkale',
						value: 'TR-71',
					},
					{
						name: 'TR-72 - Batman',
						value: 'TR-72',
					},
					{
						name: 'TR-73 - Şırnak',
						value: 'TR-73',
					},
					{
						name: 'TR-74 - Bartın Province',
						value: 'TR-74',
					},
					{
						name: 'TR-75 - Ardahan Province',
						value: 'TR-75',
					},
					{
						name: 'TR-76 - Iğdır',
						value: 'TR-76',
					},
					{
						name: 'TR-77 - Yalova Province',
						value: 'TR-77',
					},
					{
						name: 'TR-78 - Karabük',
						value: 'TR-78',
					},
					{
						name: 'TR-79 - Kilis',
						value: 'TR-79',
					},
					{
						name: 'TR-80 - Osmaniye',
						value: 'TR-80',
					},
					{
						name: 'TR-81 - Düzce Province',
						value: 'TR-81',
					},
					{
						name: 'TT - Trinidad & Tobago',
						value: 'TT',
					},
					{
						name: 'TT-ARI - Arima',
						value: 'TT-ARI',
					},
					{
						name: 'TT-CHA - Chaguanas',
						value: 'TT-CHA',
					},
					{
						name: 'TT-CTT - Couva-Tabaquite-Talparo',
						value: 'TT-CTT',
					},
					{
						name: 'TT-DMN - Diego Martin',
						value: 'TT-DMN',
					},
					{
						name: 'TT-ETO - Eastern Tobago',
						value: 'TT-ETO',
					},
					{
						name: 'TT-PED - Penal-Debe',
						value: 'TT-PED',
					},
					{
						name: 'TT-POS - Port of Spain',
						value: 'TT-POS',
					},
					{
						name: 'TT-PRT - Princes Town',
						value: 'TT-PRT',
					},
					{
						name: 'TT-PTF - Point Fortin',
						value: 'TT-PTF',
					},
					{
						name: 'TT-RCM - Rio Claro-Mayaro',
						value: 'TT-RCM',
					},
					{
						name: 'TT-SFO - San Fernando',
						value: 'TT-SFO',
					},
					{
						name: 'TT-SGE - Sangre Grande',
						value: 'TT-SGE',
					},
					{
						name: 'TT-SIP - Siparia',
						value: 'TT-SIP',
					},
					{
						name: 'TT-SJL - San Juan-Laventille',
						value: 'TT-SJL',
					},
					{
						name: 'TT-TUP - Tunapuna-Piarco',
						value: 'TT-TUP',
					},
					{
						name: 'TT-WTO - Western Tobago',
						value: 'TT-WTO',
					},
					{
						name: 'TV - Tuvalu',
						value: 'TV',
					},
					{
						name: 'TV-FUN - Funafuti',
						value: 'TV-FUN',
					},
					{
						name: 'TV-NIT - Niutao',
						value: 'TV-NIT',
					},
					{
						name: 'TV-NIU - Nui',
						value: 'TV-NIU',
					},
					{
						name: 'TV-NKF - Nukufetau',
						value: 'TV-NKF',
					},
					{
						name: 'TV-NKL - Nukulaelae',
						value: 'TV-NKL',
					},
					{
						name: 'TV-NMA - Nanumea',
						value: 'TV-NMA',
					},
					{
						name: 'TV-NMG - Nanumanga',
						value: 'TV-NMG',
					},
					{
						name: 'TV-VAI - Vaitupu',
						value: 'TV-VAI',
					},
					{
						name: 'TW - Taiwan',
						value: 'TW',
					},
					{
						name: 'TW-KHH - Kaohsiung City',
						value: 'TW-KHH',
					},
					{
						name: 'TW-TAO - Taoyuan City',
						value: 'TW-TAO',
					},
					{
						name: 'TW-TNN - Tainan City',
						value: 'TW-TNN',
					},
					{
						name: 'TW-TPE - Taipei City',
						value: 'TW-TPE',
					},
					{
						name: 'TW-TPQ - New Taipei City',
						value: 'TW-TPQ',
					},
					{
						name: 'TW-TXG - Taichung City',
						value: 'TW-TXG',
					},
					{
						name: 'TZ - Tanzania',
						value: 'TZ',
					},
					{
						name: 'TZ-01 - Arusha',
						value: 'TZ-01',
					},
					{
						name: 'TZ-03 - Dodoma',
						value: 'TZ-03',
					},
					{
						name: 'TZ-04 - Iringa',
						value: 'TZ-04',
					},
					{
						name: 'TZ-05 - Kagera',
						value: 'TZ-05',
					},
					{
						name: 'TZ-06 - Pemba North',
						value: 'TZ-06',
					},
					{
						name: 'TZ-07 - Zanzibar North',
						value: 'TZ-07',
					},
					{
						name: 'TZ-08 - Kigoma',
						value: 'TZ-08',
					},
					{
						name: 'TZ-09 - Kilimanjaro',
						value: 'TZ-09',
					},
					{
						name: 'TZ-10 - Pemba South',
						value: 'TZ-10',
					},
					{
						name: 'TZ-11 - Zanzibar Central/South',
						value: 'TZ-11',
					},
					{
						name: 'TZ-12 - Lindi',
						value: 'TZ-12',
					},
					{
						name: 'TZ-13 - Mara',
						value: 'TZ-13',
					},
					{
						name: 'TZ-14 - Mbeya',
						value: 'TZ-14',
					},
					{
						name: 'TZ-15 - Zanzibar Urban/West',
						value: 'TZ-15',
					},
					{
						name: 'TZ-16 - Morogoro',
						value: 'TZ-16',
					},
					{
						name: 'TZ-17 - Mtwara',
						value: 'TZ-17',
					},
					{
						name: 'TZ-18 - Mwanza',
						value: 'TZ-18',
					},
					{
						name: 'TZ-19 - Pwani',
						value: 'TZ-19',
					},
					{
						name: 'TZ-20 - Rukwa',
						value: 'TZ-20',
					},
					{
						name: 'TZ-21 - Ruvuma',
						value: 'TZ-21',
					},
					{
						name: 'TZ-22 - Shinyanga',
						value: 'TZ-22',
					},
					{
						name: 'TZ-23 - Singida',
						value: 'TZ-23',
					},
					{
						name: 'TZ-24 - Tabora',
						value: 'TZ-24',
					},
					{
						name: 'TZ-25 - Tanga',
						value: 'TZ-25',
					},
					{
						name: 'TZ-26 - Manyara',
						value: 'TZ-26',
					},
					{
						name: 'UA - Ukraine',
						value: 'UA',
					},
					{
						name: 'UA-05 - Vinnyts\'ka oblast',
						value: 'UA-05',
					},
					{
						name: 'UA-07 - Volyns\'ka oblast',
						value: 'UA-07',
					},
					{
						name: 'UA-09 - Luhans\'ka oblast',
						value: 'UA-09',
					},
					{
						name: 'UA-12 - Dnipropetrovsk Oblast',
						value: 'UA-12',
					},
					{
						name: 'UA-14 - Donetsk Oblast',
						value: 'UA-14',
					},
					{
						name: 'UA-18 - Zhytomyrs\'ka oblast',
						value: 'UA-18',
					},
					{
						name: 'UA-21 - Zakarpats\'ka oblast',
						value: 'UA-21',
					},
					{
						name: 'UA-23 - Zaporiz\'ka oblast',
						value: 'UA-23',
					},
					{
						name: 'UA-26 - Ivano-Frankivs\'ka oblast',
						value: 'UA-26',
					},
					{
						name: 'UA-30 - Kyiv city',
						value: 'UA-30',
					},
					{
						name: 'UA-32 - Kyivs\'ka oblast',
						value: 'UA-32',
					},
					{
						name: 'UA-35 - Kirovohrads\'ka oblast',
						value: 'UA-35',
					},
					{
						name: 'UA-40 - Sevastopol\' city',
						value: 'UA-40',
					},
					{
						name: 'UA-43 - Crimea',
						value: 'UA-43',
					},
					{
						name: 'UA-46 - Lviv Oblast',
						value: 'UA-46',
					},
					{
						name: 'UA-48 - Mykolaivs\'ka oblast',
						value: 'UA-48',
					},
					{
						name: 'UA-51 - Odessa Oblast',
						value: 'UA-51',
					},
					{
						name: 'UA-53 - Poltavs\'ka oblast',
						value: 'UA-53',
					},
					{
						name: 'UA-56 - Rivnens\'ka oblast',
						value: 'UA-56',
					},
					{
						name: 'UA-59 - Sums\'ka oblast',
						value: 'UA-59',
					},
					{
						name: 'UA-61 - Ternopil\'s\'ka oblast',
						value: 'UA-61',
					},
					{
						name: 'UA-63 - Kharkiv Oblast',
						value: 'UA-63',
					},
					{
						name: 'UA-65 - Khersons\'ka oblast',
						value: 'UA-65',
					},
					{
						name: 'UA-68 - Khmel\'nyts\'ka oblast',
						value: 'UA-68',
					},
					{
						name: 'UA-71 - Cherkas\'ka oblast',
						value: 'UA-71',
					},
					{
						name: 'UA-74 - Chernihivs\'ka oblast',
						value: 'UA-74',
					},
					{
						name: 'UA-77 - Chernivets\'ka oblast',
						value: 'UA-77',
					},
					{
						name: 'UG - Uganda',
						value: 'UG',
					},
					{
						name: 'UG-C - Central Region',
						value: 'UG-C',
					},
					{
						name: 'UG-E - Eastern Region',
						value: 'UG-E',
					},
					{
						name: 'UG-N - Northern Region',
						value: 'UG-N',
					},
					{
						name: 'UG-W - Western Region',
						value: 'UG-W',
					},
					{
						name: 'UM - U.S. Outlying Islands',
						value: 'UM',
					},
					{
						name: 'US - United States',
						value: 'US',
					},
					{
						name: 'US-AK - Alaska',
						value: 'US-AK',
					},
					{
						name: 'US-AK-743 - Anchorage AK',
						value: 'US-AK-743',
					},
					{
						name: 'US-AK-745 - Fairbanks AK',
						value: 'US-AK-745',
					},
					{
						name: 'US-AK-747 - Juneau AK',
						value: 'US-AK-747',
					},
					{
						name: 'US-AL - Alabama',
						value: 'US-AL',
					},
					{
						name: 'US-AL-630 - Birmingham AL',
						value: 'US-AL-630',
					},
					{
						name: 'US-AL-691 - Huntsville-Decatur (Florence) AL',
						value: 'US-AL-691',
					},
					{
						name: 'US-AL-698 - Montgomery (Selma) AL',
						value: 'US-AL-698',
					},
					{
						name: 'US-AR - Arkansas',
						value: 'US-AR',
					},
					{
						name: 'US-AR-693 - Little Rock-Pine Bluff AR',
						value: 'US-AR-693',
					},
					{
						name: 'US-AR-734 - Jonesboro AR',
						value: 'US-AR-734',
					},
					{
						name: 'US-AZ - Arizona',
						value: 'US-AZ',
					},
					{
						name: 'US-AZ-753 - Phoenix AZ',
						value: 'US-AZ-753',
					},
					{
						name: 'US-AZ-789 - Tucson (Sierra Vista) AZ',
						value: 'US-AZ-789',
					},
					{
						name: 'US-CA - California',
						value: 'US-CA',
					},
					{
						name: 'US-CA-771 - Yuma AZ-El Centro CA',
						value: 'US-CA-771',
					},
					{
						name: 'US-CA-800 - Bakersfield CA',
						value: 'US-CA-800',
					},
					{
						name: 'US-CA-802 - Eureka CA',
						value: 'US-CA-802',
					},
					{
						name: 'US-CA-803 - Los Angeles CA',
						value: 'US-CA-803',
					},
					{
						name: 'US-CA-804 - Palm Springs CA',
						value: 'US-CA-804',
					},
					{
						name: 'US-CA-807 - San Francisco-Oakland-San Jose CA',
						value: 'US-CA-807',
					},
					{
						name: 'US-CA-825 - San Diego CA',
						value: 'US-CA-825',
					},
					{
						name: 'US-CA-828 - Monterey-Salinas CA',
						value: 'US-CA-828',
					},
					{
						name: 'US-CA-855 - Santa Barbara-Santa Maria-San Luis Obispo CA',
						value: 'US-CA-855',
					},
					{
						name: 'US-CA-862 - Sacramento-Stockton-Modesto CA',
						value: 'US-CA-862',
					},
					{
						name: 'US-CA-866 - Fresno-Visalia CA',
						value: 'US-CA-866',
					},
					{
						name: 'US-CA-868 - Chico-Redding CA',
						value: 'US-CA-868',
					},
					{
						name: 'US-CO - Colorado',
						value: 'US-CO',
					},
					{
						name: 'US-CO-752 - Colorado Springs-Pueblo CO',
						value: 'US-CO-752',
					},
					{
						name: 'US-CO-773 - Grand Junction-Montrose CO',
						value: 'US-CO-773',
					},
					{
						name: 'US-CT - Connecticut',
						value: 'US-CT',
					},
					{
						name: 'US-CT-533 - Hartford & New Haven CT',
						value: 'US-CT-533',
					},
					{
						name: 'US-DC - District of Columbia',
						value: 'US-DC',
					},
					{
						name: 'US-DE - Delaware',
						value: 'US-DE',
					},
					{
						name: 'US-FL - Florida',
						value: 'US-FL',
					},
					{
						name: 'US-FL-528 - Miami-Ft. Lauderdale FL',
						value: 'US-FL-528',
					},
					{
						name: 'US-FL-534 - Orlando-Daytona Beach-Melbourne FL',
						value: 'US-FL-534',
					},
					{
						name: 'US-FL-539 - Tampa-St. Petersburg (Sarasota) FL',
						value: 'US-FL-539',
					},
					{
						name: 'US-FL-548 - West Palm Beach-Ft. Pierce FL',
						value: 'US-FL-548',
					},
					{
						name: 'US-FL-571 - Ft. Myers-Naples FL',
						value: 'US-FL-571',
					},
					{
						name: 'US-FL-592 - Gainesville FL',
						value: 'US-FL-592',
					},
					{
						name: 'US-FL-656 - Panama City FL',
						value: 'US-FL-656',
					},
					{
						name: 'US-FL-686 - Mobile AL-Pensacola (Ft. Walton Beach) FL',
						value: 'US-FL-686',
					},
					{
						name: 'US-GA - Georgia',
						value: 'US-GA',
					},
					{
						name: 'US-GA-503 - Macon GA',
						value: 'US-GA-503',
					},
					{
						name: 'US-GA-522 - Columbus GA',
						value: 'US-GA-522',
					},
					{
						name: 'US-GA-524 - Atlanta GA',
						value: 'US-GA-524',
					},
					{
						name: 'US-GA-525 - Albany GA',
						value: 'US-GA-525',
					},
					{
						name: 'US-GA-530 - Tallahassee FL-Thomasville GA',
						value: 'US-GA-530',
					},
					{
						name: 'US-GA-561 - Jacksonville FL',
						value: 'US-GA-561',
					},
					{
						name: 'US-GA-606 - Dothan AL',
						value: 'US-GA-606',
					},
					{
						name: 'US-HI - Hawaii',
						value: 'US-HI',
					},
					{
						name: 'US-HI-744 - Honolulu HI',
						value: 'US-HI-744',
					},
					{
						name: 'US-IA - Iowa',
						value: 'US-IA',
					},
					{
						name: 'US-IA-637 - Cedar Rapids-Waterloo-Iowa City & Dubuque IA',
						value: 'US-IA-637',
					},
					{
						name: 'US-IA-679 - Des Moines-Ames IA',
						value: 'US-IA-679',
					},
					{
						name: 'US-IA-682 - Davenport IA-Rock Island-Moline IL',
						value: 'US-IA-682',
					},
					{
						name: 'US-ID - Idaho',
						value: 'US-ID',
					},
					{
						name: 'US-ID-760 - Twin Falls ID',
						value: 'US-ID-760',
					},
					{
						name: 'US-IL - Illinois',
						value: 'US-IL',
					},
					{
						name: 'US-IL-610 - Rockford IL',
						value: 'US-IL-610',
					},
					{
						name: 'US-IL-648 - Champaign & Springfield-Decatur IL',
						value: 'US-IL-648',
					},
					{
						name: 'US-IL-675 - Peoria-Bloomington IL',
						value: 'US-IL-675',
					},
					{
						name: 'US-IN - Indiana',
						value: 'US-IN',
					},
					{
						name: 'US-IN-527 - Indianapolis IN',
						value: 'US-IN-527',
					},
					{
						name: 'US-IN-581 - Terre Haute IN',
						value: 'US-IN-581',
					},
					{
						name: 'US-IN-582 - Lafayette IN',
						value: 'US-IN-582',
					},
					{
						name: 'US-IN-602 - Chicago IL',
						value: 'US-IN-602',
					},
					{
						name: 'US-KS - Kansas',
						value: 'US-KS',
					},
					{
						name: 'US-KS-605 - Topeka KS',
						value: 'US-KS-605',
					},
					{
						name: 'US-KS-678 - Wichita-Hutchinson KS',
						value: 'US-KS-678',
					},
					{
						name: 'US-KY - Kentucky',
						value: 'US-KY',
					},
					{
						name: 'US-KY-529 - Louisville KY',
						value: 'US-KY-529',
					},
					{
						name: 'US-KY-541 - Lexington KY',
						value: 'US-KY-541',
					},
					{
						name: 'US-KY-649 - Evansville IN',
						value: 'US-KY-649',
					},
					{
						name: 'US-KY-736 - Bowling Green KY',
						value: 'US-KY-736',
					},
					{
						name: 'US-LA - Louisiana',
						value: 'US-LA',
					},
					{
						name: 'US-LA-622 - New Orleans LA',
						value: 'US-LA-622',
					},
					{
						name: 'US-LA-628 - Monroe LA-El Dorado AR',
						value: 'US-LA-628',
					},
					{
						name: 'US-LA-642 - Lafayette LA',
						value: 'US-LA-642',
					},
					{
						name: 'US-LA-643 - Lake Charles LA',
						value: 'US-LA-643',
					},
					{
						name: 'US-LA-644 - Alexandria LA',
						value: 'US-LA-644',
					},
					{
						name: 'US-MA - Massachusetts',
						value: 'US-MA',
					},
					{
						name: 'US-MA-521 - Providence RI-New Bedford MA',
						value: 'US-MA-521',
					},
					{
						name: 'US-MA-543 - Springfield-Holyoke MA',
						value: 'US-MA-543',
					},
					{
						name: 'US-MD - Maryland',
						value: 'US-MD',
					},
					{
						name: 'US-MD-512 - Baltimore MD',
						value: 'US-MD-512',
					},
					{
						name: 'US-MD-576 - Salisbury MD',
						value: 'US-MD-576',
					},
					{
						name: 'US-ME - Maine',
						value: 'US-ME',
					},
					{
						name: 'US-ME-537 - Bangor ME',
						value: 'US-ME-537',
					},
					{
						name: 'US-ME-552 - Presque Isle ME',
						value: 'US-ME-552',
					},
					{
						name: 'US-MI - Michigan',
						value: 'US-MI',
					},
					{
						name: 'US-MI-505 - Detroit MI',
						value: 'US-MI-505',
					},
					{
						name: 'US-MI-513 - Flint-Saginaw-Bay City MI',
						value: 'US-MI-513',
					},
					{
						name: 'US-MI-540 - Traverse City-Cadillac MI',
						value: 'US-MI-540',
					},
					{
						name: 'US-MI-551 - Lansing MI',
						value: 'US-MI-551',
					},
					{
						name: 'US-MI-553 - Marquette MI',
						value: 'US-MI-553',
					},
					{
						name: 'US-MI-563 - Grand Rapids-Kalamazoo-Battle Creek MI',
						value: 'US-MI-563',
					},
					{
						name: 'US-MI-583 - Alpena MI',
						value: 'US-MI-583',
					},
					{
						name: 'US-MI-588 - South Bend-Elkhart IN',
						value: 'US-MI-588',
					},
					{
						name: 'US-MN - Minnesota',
						value: 'US-MN',
					},
					{
						name: 'US-MN-611 - Rochester MN-Mason City IA-Austin MN',
						value: 'US-MN-611',
					},
					{
						name: 'US-MN-737 - Mankato MN',
						value: 'US-MN-737',
					},
					{
						name: 'US-MO - Missouri',
						value: 'US-MO',
					},
					{
						name: 'US-MO-603 - Joplin MO-Pittsburg KS',
						value: 'US-MO-603',
					},
					{
						name: 'US-MO-604 - Columbia-Jefferson City MO',
						value: 'US-MO-604',
					},
					{
						name: 'US-MO-609 - St. Louis MO',
						value: 'US-MO-609',
					},
					{
						name: 'US-MO-616 - Kansas City MO',
						value: 'US-MO-616',
					},
					{
						name: 'US-MO-619 - Springfield MO',
						value: 'US-MO-619',
					},
					{
						name: 'US-MO-631 - Ottumwa IA-Kirksville MO',
						value: 'US-MO-631',
					},
					{
						name: 'US-MO-632 - Paducah KY-Cape Girardeau MO-Harrisburg-Mount Vernon IL',
						value: 'US-MO-632',
					},
					{
						name: 'US-MO-638 - St. Joseph MO',
						value: 'US-MO-638',
					},
					{
						name: 'US-MO-717 - Quincy IL-Hannibal MO-Keokuk IA',
						value: 'US-MO-717',
					},
					{
						name: 'US-MS - Mississippi',
						value: 'US-MS',
					},
					{
						name: 'US-MS-647 - Greenwood-Greenville MS',
						value: 'US-MS-647',
					},
					{
						name: 'US-MS-673 - Columbus-Tupelo-West Point MS',
						value: 'US-MS-673',
					},
					{
						name: 'US-MS-710 - Hattiesburg-Laurel MS',
						value: 'US-MS-710',
					},
					{
						name: 'US-MS-711 - Meridian MS',
						value: 'US-MS-711',
					},
					{
						name: 'US-MS-716 - Baton Rouge LA',
						value: 'US-MS-716',
					},
					{
						name: 'US-MS-718 - Jackson MS',
						value: 'US-MS-718',
					},
					{
						name: 'US-MS-746 - Biloxi-Gulfport MS',
						value: 'US-MS-746',
					},
					{
						name: 'US-MT - Montana',
						value: 'US-MT',
					},
					{
						name: 'US-MT-754 - Butte-Bozeman MT',
						value: 'US-MT-754',
					},
					{
						name: 'US-MT-755 - Great Falls MT',
						value: 'US-MT-755',
					},
					{
						name: 'US-MT-762 - Missoula MT',
						value: 'US-MT-762',
					},
					{
						name: 'US-MT-766 - Helena MT',
						value: 'US-MT-766',
					},
					{
						name: 'US-MT-798 - Glendive MT',
						value: 'US-MT-798',
					},
					{
						name: 'US-NC - North Carolina',
						value: 'US-NC',
					},
					{
						name: 'US-NC-518 - Greensboro-High Point-Winston Salem NC',
						value: 'US-NC-518',
					},
					{
						name: 'US-NC-545 - Greenville-New Bern-Washington NC',
						value: 'US-NC-545',
					},
					{
						name: 'US-NC-550 - Wilmington NC',
						value: 'US-NC-550',
					},
					{
						name: 'US-NC-560 - Raleigh-Durham (Fayetteville) NC',
						value: 'US-NC-560',
					},
					{
						name: 'US-ND - North Dakota',
						value: 'US-ND',
					},
					{
						name: 'US-ND-687 - Minot-Bismarck-Dickinson(Williston) ND',
						value: 'US-ND-687',
					},
					{
						name: 'US-ND-724 - Fargo-Valley City ND',
						value: 'US-ND-724',
					},
					{
						name: 'US-NE - Nebraska',
						value: 'US-NE',
					},
					{
						name: 'US-NE-624 - Sioux City IA',
						value: 'US-NE-624',
					},
					{
						name: 'US-NE-652 - Omaha NE',
						value: 'US-NE-652',
					},
					{
						name: 'US-NE-722 - Lincoln & Hastings-Kearney NE',
						value: 'US-NE-722',
					},
					{
						name: 'US-NE-740 - North Platte NE',
						value: 'US-NE-740',
					},
					{
						name: 'US-NH - New Hampshire',
						value: 'US-NH',
					},
					{
						name: 'US-NH-500 - Portland-Auburn ME',
						value: 'US-NH-500',
					},
					{
						name: 'US-NH-506 - Boston MA-Manchester NH',
						value: 'US-NH-506',
					},
					{
						name: 'US-NJ - New Jersey',
						value: 'US-NJ',
					},
					{
						name: 'US-NM - New Mexico',
						value: 'US-NM',
					},
					{
						name: 'US-NM-790 - Albuquerque-Santa Fe NM',
						value: 'US-NM-790',
					},
					{
						name: 'US-NV - Nevada',
						value: 'US-NV',
					},
					{
						name: 'US-NV-811 - Reno NV',
						value: 'US-NV-811',
					},
					{
						name: 'US-NV-839 - Las Vegas NV',
						value: 'US-NV-839',
					},
					{
						name: 'US-NY - New York',
						value: 'US-NY',
					},
					{
						name: 'US-NY-501 - New York NY',
						value: 'US-NY-501',
					},
					{
						name: 'US-NY-502 - Binghamton NY',
						value: 'US-NY-502',
					},
					{
						name: 'US-NY-526 - Utica NY',
						value: 'US-NY-526',
					},
					{
						name: 'US-NY-532 - Albany-Schenectady-Troy NY',
						value: 'US-NY-532',
					},
					{
						name: 'US-NY-538 - Rochester NY',
						value: 'US-NY-538',
					},
					{
						name: 'US-NY-549 - Watertown NY',
						value: 'US-NY-549',
					},
					{
						name: 'US-NY-555 - Syracuse NY',
						value: 'US-NY-555',
					},
					{
						name: 'US-OH - Ohio',
						value: 'US-OH',
					},
					{
						name: 'US-OH-509 - Ft. Wayne IN',
						value: 'US-OH-509',
					},
					{
						name: 'US-OH-510 - Cleveland-Akron (Canton) OH',
						value: 'US-OH-510',
					},
					{
						name: 'US-OH-515 - Cincinnati OH',
						value: 'US-OH-515',
					},
					{
						name: 'US-OH-535 - Columbus OH',
						value: 'US-OH-535',
					},
					{
						name: 'US-OH-542 - Dayton OH',
						value: 'US-OH-542',
					},
					{
						name: 'US-OH-547 - Toledo OH',
						value: 'US-OH-547',
					},
					{
						name: 'US-OH-558 - Lima OH',
						value: 'US-OH-558',
					},
					{
						name: 'US-OH-596 - Zanesville OH',
						value: 'US-OH-596',
					},
					{
						name: 'US-OK - Oklahoma',
						value: 'US-OK',
					},
					{
						name: 'US-OK-650 - Oklahoma City OK',
						value: 'US-OK-650',
					},
					{
						name: 'US-OK-670 - Ft. Smith-Fayetteville-Springdale-Rogers AR',
						value: 'US-OK-670',
					},
					{
						name: 'US-OK-671 - Tulsa OK',
						value: 'US-OK-671',
					},
					{
						name: 'US-OR - Oregon',
						value: 'US-OR',
					},
					{
						name: 'US-OR-757 - Boise ID',
						value: 'US-OR-757',
					},
					{
						name: 'US-OR-801 - Eugene OR',
						value: 'US-OR-801',
					},
					{
						name: 'US-OR-813 - Medford-Klamath Falls OR',
						value: 'US-OR-813',
					},
					{
						name: 'US-OR-821 - Bend OR',
						value: 'US-OR-821',
					},
					{
						name: 'US-PA - Pennsylvania',
						value: 'US-PA',
					},
					{
						name: 'US-PA-504 - Philadelphia PA',
						value: 'US-PA-504',
					},
					{
						name: 'US-PA-508 - Pittsburgh PA',
						value: 'US-PA-508',
					},
					{
						name: 'US-PA-514 - Buffalo NY',
						value: 'US-PA-514',
					},
					{
						name: 'US-PA-516 - Erie PA',
						value: 'US-PA-516',
					},
					{
						name: 'US-PA-536 - Youngstown OH',
						value: 'US-PA-536',
					},
					{
						name: 'US-PA-565 - Elmira NY',
						value: 'US-PA-565',
					},
					{
						name: 'US-PA-566 - Harrisburg-Lancaster-Lebanon-York PA',
						value: 'US-PA-566',
					},
					{
						name: 'US-PA-574 - Johnstown-Altoona PA',
						value: 'US-PA-574',
					},
					{
						name: 'US-PA-577 - Wilkes Barre-Scranton PA',
						value: 'US-PA-577',
					},
					{
						name: 'US-RI - Rhode Island',
						value: 'US-RI',
					},
					{
						name: 'US-SC - South Carolina',
						value: 'US-SC',
					},
					{
						name: 'US-SC-507 - Savannah GA',
						value: 'US-SC-507',
					},
					{
						name: 'US-SC-517 - Charlotte NC',
						value: 'US-SC-517',
					},
					{
						name: 'US-SC-519 - Charleston SC',
						value: 'US-SC-519',
					},
					{
						name: 'US-SC-520 - Augusta GA',
						value: 'US-SC-520',
					},
					{
						name: 'US-SC-546 - Columbia SC',
						value: 'US-SC-546',
					},
					{
						name: 'US-SC-567 - Greenville-Spartanburg SC-Asheville NC-Anderson SC',
						value: 'US-SC-567',
					},
					{
						name: 'US-SC-570 - Florence-Myrtle Beach SC',
						value: 'US-SC-570',
					},
					{
						name: 'US-SD - South Dakota',
						value: 'US-SD',
					},
					{
						name: 'US-SD-725 - Sioux Falls(Mitchell) SD',
						value: 'US-SD-725',
					},
					{
						name: 'US-TN - Tennessee',
						value: 'US-TN',
					},
					{
						name: 'US-TN-557 - Knoxville TN',
						value: 'US-TN-557',
					},
					{
						name: 'US-TN-575 - Chattanooga TN',
						value: 'US-TN-575',
					},
					{
						name: 'US-TN-639 - Jackson TN',
						value: 'US-TN-639',
					},
					{
						name: 'US-TN-640 - Memphis TN',
						value: 'US-TN-640',
					},
					{
						name: 'US-TN-659 - Nashville TN',
						value: 'US-TN-659',
					},
					{
						name: 'US-TX - Texas',
						value: 'US-TX',
					},
					{
						name: 'US-TX-600 - Corpus Christi TX',
						value: 'US-TX-600',
					},
					{
						name: 'US-TX-612 - Shreveport LA',
						value: 'US-TX-612',
					},
					{
						name: 'US-TX-618 - Houston TX',
						value: 'US-TX-618',
					},
					{
						name: 'US-TX-623 - Dallas-Ft. Worth TX',
						value: 'US-TX-623',
					},
					{
						name: 'US-TX-625 - Waco-Temple-Bryan TX',
						value: 'US-TX-625',
					},
					{
						name: 'US-TX-626 - Victoria TX',
						value: 'US-TX-626',
					},
					{
						name: 'US-TX-627 - Wichita Falls TX & Lawton OK',
						value: 'US-TX-627',
					},
					{
						name: 'US-TX-633 - Odessa-Midland TX',
						value: 'US-TX-633',
					},
					{
						name: 'US-TX-634 - Amarillo TX',
						value: 'US-TX-634',
					},
					{
						name: 'US-TX-635 - Austin TX',
						value: 'US-TX-635',
					},
					{
						name: 'US-TX-636 - Harlingen-Weslaco-Brownsville-McAllen TX',
						value: 'US-TX-636',
					},
					{
						name: 'US-TX-641 - San Antonio TX',
						value: 'US-TX-641',
					},
					{
						name: 'US-TX-651 - Lubbock TX',
						value: 'US-TX-651',
					},
					{
						name: 'US-TX-657 - Sherman TX-Ada OK',
						value: 'US-TX-657',
					},
					{
						name: 'US-TX-661 - San Angelo TX',
						value: 'US-TX-661',
					},
					{
						name: 'US-TX-662 - Abilene-Sweetwater TX',
						value: 'US-TX-662',
					},
					{
						name: 'US-TX-692 - Beaumont-Port Arthur TX',
						value: 'US-TX-692',
					},
					{
						name: 'US-TX-709 - Tyler-Longview(Lufkin & Nacogdoches) TX',
						value: 'US-TX-709',
					},
					{
						name: 'US-TX-749 - Laredo TX',
						value: 'US-TX-749',
					},
					{
						name: 'US-TX-765 - El Paso TX',
						value: 'US-TX-765',
					},
					{
						name: 'US-UT - Utah',
						value: 'US-UT',
					},
					{
						name: 'US-VA - Virginia',
						value: 'US-VA',
					},
					{
						name: 'US-VA-531 - Tri-Cities TN-VA',
						value: 'US-VA-531',
					},
					{
						name: 'US-VA-544 - Norfolk-Portsmouth-Newport News VA',
						value: 'US-VA-544',
					},
					{
						name: 'US-VA-556 - Richmond-Petersburg VA',
						value: 'US-VA-556',
					},
					{
						name: 'US-VA-573 - Roanoke-Lynchburg VA',
						value: 'US-VA-573',
					},
					{
						name: 'US-VA-584 - Charlottesville VA',
						value: 'US-VA-584',
					},
					{
						name: 'US-VT - Vermont',
						value: 'US-VT',
					},
					{
						name: 'US-VT-523 - Burlington VT-Plattsburgh NY',
						value: 'US-VT-523',
					},
					{
						name: 'US-WA - Washington',
						value: 'US-WA',
					},
					{
						name: 'US-WA-810 - Yakima-Pasco-Richland-Kennewick WA',
						value: 'US-WA-810',
					},
					{
						name: 'US-WA-819 - Seattle-Tacoma WA',
						value: 'US-WA-819',
					},
					{
						name: 'US-WA-820 - Portland OR',
						value: 'US-WA-820',
					},
					{
						name: 'US-WA-881 - Spokane WA',
						value: 'US-WA-881',
					},
					{
						name: 'US-WI - Wisconsin',
						value: 'US-WI',
					},
					{
						name: 'US-WI-613 - Minneapolis-St. Paul MN',
						value: 'US-WI-613',
					},
					{
						name: 'US-WI-617 - Milwaukee WI',
						value: 'US-WI-617',
					},
					{
						name: 'US-WI-658 - Green Bay-Appleton WI',
						value: 'US-WI-658',
					},
					{
						name: 'US-WI-669 - Madison WI',
						value: 'US-WI-669',
					},
					{
						name: 'US-WI-676 - Duluth MN-Superior WI',
						value: 'US-WI-676',
					},
					{
						name: 'US-WI-702 - La Crosse-Eau Claire WI',
						value: 'US-WI-702',
					},
					{
						name: 'US-WI-705 - Wausau-Rhinelander WI',
						value: 'US-WI-705',
					},
					{
						name: 'US-WV - West Virginia',
						value: 'US-WV',
					},
					{
						name: 'US-WV-511 - Washington DC (Hagerstown MD)',
						value: 'US-WV-511',
					},
					{
						name: 'US-WV-554 - Wheeling WV-Steubenville OH',
						value: 'US-WV-554',
					},
					{
						name: 'US-WV-559 - Bluefield-Beckley-Oak Hill WV',
						value: 'US-WV-559',
					},
					{
						name: 'US-WV-564 - Charleston-Huntington WV',
						value: 'US-WV-564',
					},
					{
						name: 'US-WV-569 - Harrisonburg VA',
						value: 'US-WV-569',
					},
					{
						name: 'US-WV-597 - Parkersburg WV',
						value: 'US-WV-597',
					},
					{
						name: 'US-WV-598 - Clarksburg-Weston WV',
						value: 'US-WV-598',
					},
					{
						name: 'US-WY - Wyoming',
						value: 'US-WY',
					},
					{
						name: 'US-WY-751 - Denver CO',
						value: 'US-WY-751',
					},
					{
						name: 'US-WY-756 - Billings MT',
						value: 'US-WY-756',
					},
					{
						name: 'US-WY-758 - Idaho Falls-Pocatello ID',
						value: 'US-WY-758',
					},
					{
						name: 'US-WY-759 - Cheyenne WY-Scottsbluff NE',
						value: 'US-WY-759',
					},
					{
						name: 'US-WY-764 - Rapid City SD',
						value: 'US-WY-764',
					},
					{
						name: 'US-WY-767 - Casper-Riverton WY',
						value: 'US-WY-767',
					},
					{
						name: 'US-WY-770 - Salt Lake City UT',
						value: 'US-WY-770',
					},
					{
						name: 'UY - Uruguay',
						value: 'UY',
					},
					{
						name: 'UY-AR - Artigas Department',
						value: 'UY-AR',
					},
					{
						name: 'UY-CA - Canelones Department',
						value: 'UY-CA',
					},
					{
						name: 'UY-CL - Cerro Largo Department',
						value: 'UY-CL',
					},
					{
						name: 'UY-CO - Colonia',
						value: 'UY-CO',
					},
					{
						name: 'UY-DU - Durazno Department',
						value: 'UY-DU',
					},
					{
						name: 'UY-FD - Florida Department',
						value: 'UY-FD',
					},
					{
						name: 'UY-FS - Flores Department',
						value: 'UY-FS',
					},
					{
						name: 'UY-LA - Lavalleja Department',
						value: 'UY-LA',
					},
					{
						name: 'UY-MA - Maldonado Department',
						value: 'UY-MA',
					},
					{
						name: 'UY-MO - Montevideo Department',
						value: 'UY-MO',
					},
					{
						name: 'UY-PA - Paysandú Department',
						value: 'UY-PA',
					},
					{
						name: 'UY-RN - Río Negro Department',
						value: 'UY-RN',
					},
					{
						name: 'UY-RO - Rocha Department',
						value: 'UY-RO',
					},
					{
						name: 'UY-RV - Rivera Department',
						value: 'UY-RV',
					},
					{
						name: 'UY-SA - Salto',
						value: 'UY-SA',
					},
					{
						name: 'UY-SJ - San José Department',
						value: 'UY-SJ',
					},
					{
						name: 'UY-SO - Soriano Department',
						value: 'UY-SO',
					},
					{
						name: 'UY-TA - Tacuarembó Department',
						value: 'UY-TA',
					},
					{
						name: 'UY-TT - Treinta y Tres Department',
						value: 'UY-TT',
					},
					{
						name: 'UZ - Uzbekistan',
						value: 'UZ',
					},
					{
						name: 'UZ-AN - Andijan Province',
						value: 'UZ-AN',
					},
					{
						name: 'UZ-BU - Bukhara Province',
						value: 'UZ-BU',
					},
					{
						name: 'UZ-FA - Ferghana Province',
						value: 'UZ-FA',
					},
					{
						name: 'UZ-JI - Jizzakh Province',
						value: 'UZ-JI',
					},
					{
						name: 'UZ-NG - Namangan Province',
						value: 'UZ-NG',
					},
					{
						name: 'UZ-NW - Navoiy Province',
						value: 'UZ-NW',
					},
					{
						name: 'UZ-QA - Kashkadarya Province',
						value: 'UZ-QA',
					},
					{
						name: 'UZ-QR - Republic of Karakalpakstan',
						value: 'UZ-QR',
					},
					{
						name: 'UZ-SA - Samarkand Province',
						value: 'UZ-SA',
					},
					{
						name: 'UZ-SI - Sirdarya Province',
						value: 'UZ-SI',
					},
					{
						name: 'UZ-SU - Surkhandarya Province',
						value: 'UZ-SU',
					},
					{
						name: 'UZ-TO - Tashkent Province',
						value: 'UZ-TO',
					},
					{
						name: 'UZ-XO - Khorezm Province',
						value: 'UZ-XO',
					},
					{
						name: 'VA - Vatican City',
						value: 'VA',
					},
					{
						name: 'VC - St. Vincent & Grenadines',
						value: 'VC',
					},
					{
						name: 'VC-01 - Charlotte',
						value: 'VC-01',
					},
					{
						name: 'VC-02 - Saint Andrew',
						value: 'VC-02',
					},
					{
						name: 'VC-03 - Saint David',
						value: 'VC-03',
					},
					{
						name: 'VC-04 - Saint George',
						value: 'VC-04',
					},
					{
						name: 'VC-05 - Saint Patrick',
						value: 'VC-05',
					},
					{
						name: 'VC-06 - Grenadines',
						value: 'VC-06',
					},
					{
						name: 'VE - Venezuela',
						value: 'VE',
					},
					{
						name: 'VE-A - Capital District',
						value: 'VE-A',
					},
					{
						name: 'VE-B - Anzoategui',
						value: 'VE-B',
					},
					{
						name: 'VE-C - Apure',
						value: 'VE-C',
					},
					{
						name: 'VE-D - Aragua',
						value: 'VE-D',
					},
					{
						name: 'VE-E - Barinas',
						value: 'VE-E',
					},
					{
						name: 'VE-F - Bolívar',
						value: 'VE-F',
					},
					{
						name: 'VE-G - Carabobo',
						value: 'VE-G',
					},
					{
						name: 'VE-H - Cojedes',
						value: 'VE-H',
					},
					{
						name: 'VE-I - Falcón',
						value: 'VE-I',
					},
					{
						name: 'VE-J - Guárico',
						value: 'VE-J',
					},
					{
						name: 'VE-K - Lara',
						value: 'VE-K',
					},
					{
						name: 'VE-L - Mérida',
						value: 'VE-L',
					},
					{
						name: 'VE-M - Miranda',
						value: 'VE-M',
					},
					{
						name: 'VE-N - Monagas',
						value: 'VE-N',
					},
					{
						name: 'VE-O - Nueva Esparta',
						value: 'VE-O',
					},
					{
						name: 'VE-P - Portuguesa',
						value: 'VE-P',
					},
					{
						name: 'VE-R - Sucre',
						value: 'VE-R',
					},
					{
						name: 'VE-S - Táchira',
						value: 'VE-S',
					},
					{
						name: 'VE-T - Trujillo',
						value: 'VE-T',
					},
					{
						name: 'VE-U - Yaracuy',
						value: 'VE-U',
					},
					{
						name: 'VE-V - Zulia',
						value: 'VE-V',
					},
					{
						name: 'VE-W - Federal Dependencies',
						value: 'VE-W',
					},
					{
						name: 'VE-X - Vargas',
						value: 'VE-X',
					},
					{
						name: 'VE-Y - Delta Amacuro',
						value: 'VE-Y',
					},
					{
						name: 'VE-Z - Amazonas',
						value: 'VE-Z',
					},
					{
						name: 'VG - British Virgin Islands',
						value: 'VG',
					},
					{
						name: 'VI - U.S. Virgin Islands',
						value: 'VI',
					},
					{
						name: 'VN - Vietnam',
						value: 'VN',
					},
					{
						name: 'VN-01 - Lai Chau',
						value: 'VN-01',
					},
					{
						name: 'VN-02 - Lao Cai',
						value: 'VN-02',
					},
					{
						name: 'VN-03 - Ha Giang',
						value: 'VN-03',
					},
					{
						name: 'VN-04 - Cao Bang',
						value: 'VN-04',
					},
					{
						name: 'VN-05 - Son La',
						value: 'VN-05',
					},
					{
						name: 'VN-06 - Yen Bai Province',
						value: 'VN-06',
					},
					{
						name: 'VN-07 - Tuyên Quang Province',
						value: 'VN-07',
					},
					{
						name: 'VN-09 - Lang Son Province',
						value: 'VN-09',
					},
					{
						name: 'VN-13 - Quảng Ninh Province',
						value: 'VN-13',
					},
					{
						name: 'VN-14 - Hoa Binh',
						value: 'VN-14',
					},
					{
						name: 'VN-18 - Ninh Bình Province',
						value: 'VN-18',
					},
					{
						name: 'VN-20 - Thai Binh',
						value: 'VN-20',
					},
					{
						name: 'VN-21 - Thanh Hoa',
						value: 'VN-21',
					},
					{
						name: 'VN-22 - Nghe An',
						value: 'VN-22',
					},
					{
						name: 'VN-23 - Ha Tinh Province',
						value: 'VN-23',
					},
					{
						name: 'VN-24 - Quang Binh Province',
						value: 'VN-24',
					},
					{
						name: 'VN-25 - Quảng Trị Province',
						value: 'VN-25',
					},
					{
						name: 'VN-26 - Thua Thien Hue',
						value: 'VN-26',
					},
					{
						name: 'VN-27 - Quang Nam Province',
						value: 'VN-27',
					},
					{
						name: 'VN-28 - Kon Tum Province',
						value: 'VN-28',
					},
					{
						name: 'VN-29 - Quang Ngai',
						value: 'VN-29',
					},
					{
						name: 'VN-30 - Gia Lai Province',
						value: 'VN-30',
					},
					{
						name: 'VN-31 - Binh Dinh Province',
						value: 'VN-31',
					},
					{
						name: 'VN-32 - Phú Yên Province',
						value: 'VN-32',
					},
					{
						name: 'VN-33 - Đắk Lắk Province',
						value: 'VN-33',
					},
					{
						name: 'VN-34 - Khanh Hoa Province',
						value: 'VN-34',
					},
					{
						name: 'VN-35 - Lâm Đồng',
						value: 'VN-35',
					},
					{
						name: 'VN-36 - Ninh Thuan Province',
						value: 'VN-36',
					},
					{
						name: 'VN-37 - Tây Ninh Province',
						value: 'VN-37',
					},
					{
						name: 'VN-39 - Dong Nai',
						value: 'VN-39',
					},
					{
						name: 'VN-40 - Binh Thuan',
						value: 'VN-40',
					},
					{
						name: 'VN-41 - Long An Province',
						value: 'VN-41',
					},
					{
						name: 'VN-43 - Ba Ria - Vung Tau',
						value: 'VN-43',
					},
					{
						name: 'VN-44 - An Giang Province',
						value: 'VN-44',
					},
					{
						name: 'VN-45 - Đồng Tháp Province',
						value: 'VN-45',
					},
					{
						name: 'VN-46 - Tien Giang',
						value: 'VN-46',
					},
					{
						name: 'VN-47 - Kien Giang',
						value: 'VN-47',
					},
					{
						name: 'VN-49 - Vinh Long',
						value: 'VN-49',
					},
					{
						name: 'VN-50 - Ben Tre',
						value: 'VN-50',
					},
					{
						name: 'VN-51 - Tra Vinh',
						value: 'VN-51',
					},
					{
						name: 'VN-52 - Soc Trang',
						value: 'VN-52',
					},
					{
						name: 'VN-53 - Bắc Kạn Province',
						value: 'VN-53',
					},
					{
						name: 'VN-54 - Bac Giang',
						value: 'VN-54',
					},
					{
						name: 'VN-55 - Bac Lieu',
						value: 'VN-55',
					},
					{
						name: 'VN-56 - Bac Ninh Province',
						value: 'VN-56',
					},
					{
						name: 'VN-57 - Binh Duong',
						value: 'VN-57',
					},
					{
						name: 'VN-58 - Binh Phuoc',
						value: 'VN-58',
					},
					{
						name: 'VN-59 - Ca Mau',
						value: 'VN-59',
					},
					{
						name: 'VN-61 - Hai Duong',
						value: 'VN-61',
					},
					{
						name: 'VN-63 - Hà Nam Province',
						value: 'VN-63',
					},
					{
						name: 'VN-66 - Hung Yen Province',
						value: 'VN-66',
					},
					{
						name: 'VN-67 - Nam Dinh',
						value: 'VN-67',
					},
					{
						name: 'VN-68 - Phu Tho Province',
						value: 'VN-68',
					},
					{
						name: 'VN-69 - Thai Nguyen',
						value: 'VN-69',
					},
					{
						name: 'VN-70 - Vinh Phuc Province',
						value: 'VN-70',
					},
					{
						name: 'VN-71 - Dien Bien',
						value: 'VN-71',
					},
					{
						name: 'VN-72 - Dak Nong',
						value: 'VN-72',
					},
					{
						name: 'VN-73 - Hau Giang',
						value: 'VN-73',
					},
					{
						name: 'VN-CT - Can Tho',
						value: 'VN-CT',
					},
					{
						name: 'VN-DN - Da Nang',
						value: 'VN-DN',
					},
					{
						name: 'VN-HN - Hanoi',
						value: 'VN-HN',
					},
					{
						name: 'VN-HP - Haiphong',
						value: 'VN-HP',
					},
					{
						name: 'VN-SG - Ho Chi Minh',
						value: 'VN-SG',
					},
					{
						name: 'VU - Vanuatu',
						value: 'VU',
					},
					{
						name: 'VU-MAP - Malampa Province',
						value: 'VU-MAP',
					},
					{
						name: 'VU-PAM - Penama Province',
						value: 'VU-PAM',
					},
					{
						name: 'VU-SAM - Sanma Province',
						value: 'VU-SAM',
					},
					{
						name: 'VU-SEE - Shefa Province',
						value: 'VU-SEE',
					},
					{
						name: 'VU-TAE - Tafea Province',
						value: 'VU-TAE',
					},
					{
						name: 'VU-TOB - Torba Province',
						value: 'VU-TOB',
					},
					{
						name: 'WF - Wallis & Futuna',
						value: 'WF',
					},
					{
						name: 'WF-ALO - Alo',
						value: 'WF-ALO',
					},
					{
						name: 'WS - Samoa',
						value: 'WS',
					},
					{
						name: 'WS-AA - A\'ana',
						value: 'WS-AA',
					},
					{
						name: 'WS-AL - Aiga-i-le-Tai',
						value: 'WS-AL',
					},
					{
						name: 'WS-AT - Atua',
						value: 'WS-AT',
					},
					{
						name: 'WS-FA - Fa\'asaleleaga',
						value: 'WS-FA',
					},
					{
						name: 'WS-GE - Gaga\'emauga',
						value: 'WS-GE',
					},
					{
						name: 'WS-GI - Gaga\'ifomauga',
						value: 'WS-GI',
					},
					{
						name: 'WS-PA - Palauli',
						value: 'WS-PA',
					},
					{
						name: 'WS-SA - Satupa\'itea',
						value: 'WS-SA',
					},
					{
						name: 'WS-TU - Tuamasaga',
						value: 'WS-TU',
					},
					{
						name: 'WS-VF - Va\'a-o-Fonoti',
						value: 'WS-VF',
					},
					{
						name: 'WS-VS - Vaisigano',
						value: 'WS-VS',
					},
					{
						name: 'XK - Kosovo',
						value: 'XK',
					},
					{
						name: 'YE - Yemen',
						value: 'YE',
					},
					{
						name: 'YE-AB - Abyan',
						value: 'YE-AB',
					},
					{
						name: 'YE-AD - Aden',
						value: 'YE-AD',
					},
					{
						name: 'YE-AM - \'Amran',
						value: 'YE-AM',
					},
					{
						name: 'YE-BA - Al Bayda',
						value: 'YE-BA',
					},
					{
						name: 'YE-DA - Ad Dali',
						value: 'YE-DA',
					},
					{
						name: 'YE-DH - Dhamar',
						value: 'YE-DH',
					},
					{
						name: 'YE-HD - Hadramaut',
						value: 'YE-HD',
					},
					{
						name: 'YE-HJ - Hajjah',
						value: 'YE-HJ',
					},
					{
						name: 'YE-HU - Al Hudaydah',
						value: 'YE-HU',
					},
					{
						name: 'YE-IB - Ibb',
						value: 'YE-IB',
					},
					{
						name: 'YE-JA - Al Jawf',
						value: 'YE-JA',
					},
					{
						name: 'YE-LA - Lahij',
						value: 'YE-LA',
					},
					{
						name: 'YE-MA - Ma\'rib',
						value: 'YE-MA',
					},
					{
						name: 'YE-MR - Al Mahrah',
						value: 'YE-MR',
					},
					{
						name: 'YE-MW - Al Mahwit',
						value: 'YE-MW',
					},
					{
						name: 'YE-RA - Raymah',
						value: 'YE-RA',
					},
					{
						name: 'YE-SA - Amanat Al Asimah',
						value: 'YE-SA',
					},
					{
						name: 'YE-SD - Sa\'dah',
						value: 'YE-SD',
					},
					{
						name: 'YE-SH - Shabwah',
						value: 'YE-SH',
					},
					{
						name: 'YE-SN - Sana\'a',
						value: 'YE-SN',
					},
					{
						name: 'YE-TA - Ta\'izz',
						value: 'YE-TA',
					},
					{
						name: 'YT - Mayotte',
						value: 'YT',
					},
					{
						name: 'ZA - South Africa',
						value: 'ZA',
					},
					{
						name: 'ZA-EC - Eastern Cape',
						value: 'ZA-EC',
					},
					{
						name: 'ZA-FS - Free State',
						value: 'ZA-FS',
					},
					{
						name: 'ZA-GT - Gauteng',
						value: 'ZA-GT',
					},
					{
						name: 'ZA-LP - Limpopo',
						value: 'ZA-LP',
					},
					{
						name: 'ZA-MP - Mpumalanga',
						value: 'ZA-MP',
					},
					{
						name: 'ZA-NC - Northern Cape',
						value: 'ZA-NC',
					},
					{
						name: 'ZA-NL - KwaZulu-Natal',
						value: 'ZA-NL',
					},
					{
						name: 'ZA-NW - North West',
						value: 'ZA-NW',
					},
					{
						name: 'ZA-WC - Western Cape',
						value: 'ZA-WC',
					},
					{
						name: 'ZM - Zambia',
						value: 'ZM',
					},
					{
						name: 'ZM-01 - Western',
						value: 'ZM-01',
					},
					{
						name: 'ZM-02 - Central',
						value: 'ZM-02',
					},
					{
						name: 'ZM-03 - Eastern',
						value: 'ZM-03',
					},
					{
						name: 'ZM-04 - Luapula',
						value: 'ZM-04',
					},
					{
						name: 'ZM-05 - Northern',
						value: 'ZM-05',
					},
					{
						name: 'ZM-06 - North-Western',
						value: 'ZM-06',
					},
					{
						name: 'ZM-07 - Southern',
						value: 'ZM-07',
					},
					{
						name: 'ZM-08 - Copperbelt',
						value: 'ZM-08',
					},
					{
						name: 'ZM-09 - Lusaka',
						value: 'ZM-09',
					},
					{
						name: 'ZW - Zimbabwe',
						value: 'ZW',
					},
					{
						name: 'ZW-BU - Bulawayo',
						value: 'ZW-BU',
					},
					{
						name: 'ZW-HA - Harare',
						value: 'ZW-HA',
					},
					{
						name: 'ZW-MA - Manicaland',
						value: 'ZW-MA',
					},
					{
						name: 'ZW-MC - Mashonaland Central',
						value: 'ZW-MC',
					},
					{
						name: 'ZW-ME - Mashonaland East',
						value: 'ZW-ME',
					},
					{
						name: 'ZW-MI - Midlands',
						value: 'ZW-MI',
					},
					{
						name: 'ZW-MN - Matabeleland North',
						value: 'ZW-MN',
					},
					{
						name: 'ZW-MS - Matabeleland South',
						value: 'ZW-MS',
					},
					{
						name: 'ZW-MV - Masvingo',
						value: 'ZW-MV',
					},
					{
						name: 'ZW-MW - Mashonaland West',
						value: 'ZW-MW',
					},
				],
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'options',
				default: '',
				description: 'Used to get more specific results when using "Interest by region" data type. Other data types do not accept this parameter. The default value depends on the geo location that is set.\n\nAvailable options:\n - `country`: Country\n - `region`: Subregion\n - `dma`: Metro\n - `city`: City\n\nNote: Not all region options will return results for every geo location.\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: 'city - City',
						value: 'city',
					},
					{
						name: 'country - Country',
						value: 'country',
					},
					{
						name: 'dma - Metro',
						value: 'dma',
					},
					{
						name: 'region - Subregion',
						value: 'region',
					},
				],
			},
			{
				displayName: 'Data Type',
				name: 'dataType',
				type: 'options',
				default: '',
				description: 'Defines the type of search to perform.\n\nAvailable options:\n  - `timeseries`: Interest over time (default). Accepts both single and multiple queries per search.\n  - `geoMap`: Interest by region. Accepts both single and multiple queries per search.\n  - `relatedTopics`: Related topics. Accepts only single query per search.\n  - `relatedQueries`: Related queries. Accepts only single query per search.\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: 'geoMap - Interest by region',
						value: 'geoMap',
					},
					{
						name: 'relatedQueries - Related queries',
						value: 'relatedQueries',
					},
					{
						name: 'relatedTopics - Related topics',
						value: 'relatedTopics',
					},
					{
						name: 'timeseries - Interest over time',
						value: 'timeseries',
					},
				],
			},
			{
				displayName: 'Time Zone',
				name: 'tz',
				type: 'number',
				default: '',
				description: 'Defines a time zone offset in minutes. The default value is 420 (Pacific Daylight Time (PDT): UTC-7). The valid range for this parameter is from -1439 to 1439.\n\nTo calculate the `tz` value for a specific time zone, you can use the time difference between UTC +0 and the desired time zone.\n\nExamples:\n- `420`: Pacific Daylight Time (PDT)\n- `60`: Central European Time (CET)\n- `-540`: Japan Standard Time\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
			},
			{
				displayName: 'Category',
				name: 'cat',
				type: 'options',
				default: '',
				description: 'Category of the search term. The default value is 0 ("All categories").',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: '0 - All categories',
						value: '0',
					},
					{
						name: '100 - Cards & Greetings',
						value: '100',
					},
					{
						name: '1000 - Individual Sports',
						value: '1000',
					},
					{
						name: '1001 - Team Sports',
						value: '1001',
					},
					{
						name: '1002 - Water Activities',
						value: '1002',
					},
					{
						name: '1003 - Luggage & Travel Accessories',
						value: '1003',
					},
					{
						name: '1004 - Specialty Travel',
						value: '1004',
					},
					{
						name: '1005 - Ecotourism',
						value: '1005',
					},
					{
						name: '1006 - Historical Sites & Buildings',
						value: '1006',
					},
					{
						name: '1007 - Regional Parks & Gardens',
						value: '1007',
					},
					{
						name: '1008 - Theme Parks',
						value: '1008',
					},
					{
						name: '1009 - Zoos-Aquariums-Preserves',
						value: '1009',
					},
					{
						name: '101 - Spirituality',
						value: '101',
					},
					{
						name: '1010 - Travel Agencies & Services',
						value: '1010',
					},
					{
						name: '1011 - Travel Guides & Travelogues',
						value: '1011',
					},
					{
						name: '1012 - Early Childhood Education',
						value: '1012',
					},
					{
						name: '1013 - Classic Vehicles',
						value: '1013',
					},
					{
						name: '1014 - City & Local Guides',
						value: '1014',
					},
					{
						name: '1015 - Alumni & Reunions',
						value: '1015',
					},
					{
						name: '1016 - Bowling',
						value: '1016',
					},
					{
						name: '1017 - Handball',
						value: '1017',
					},
					{
						name: '1019 - Vacation Offers',
						value: '1019',
					},
					{
						name: '102 - Personals',
						value: '102',
					},
					{
						name: '1020 - Religious Music',
						value: '1020',
					},
					{
						name: '1021 - Pop Music',
						value: '1021',
					},
					{
						name: '1022 - Experimental & Industrial Music',
						value: '1022',
					},
					{
						name: '1023 - Folk & Traditional Music',
						value: '1023',
					},
					{
						name: '1024 - Music Equipment & Technology',
						value: '1024',
					},
					{
						name: '1025 - DJ Resources & Equipment',
						value: '1025',
					},
					{
						name: '1026 - Music Recording Technology',
						value: '1026',
					},
					{
						name: '1027 - Music Reference',
						value: '1027',
					},
					{
						name: '1028 - Music Composition & Theory',
						value: '1028',
					},
					{
						name: '1030 - Rap & Hip-Hop',
						value: '1030',
					},
					{
						name: '1031 - Reggae & Caribbean Music',
						value: '1031',
					},
					{
						name: '1032 - South Asian Music',
						value: '1032',
					},
					{
						name: '1033 - East Asian Music',
						value: '1033',
					},
					{
						name: '1034 - Arab & Middle Eastern Music',
						value: '1034',
					},
					{
						name: '1035 - Hard Rock & Progressive',
						value: '1035',
					},
					{
						name: '1036 - Metal (Music)',
						value: '1036',
					},
					{
						name: '1037 - Classic Rock & Oldies',
						value: '1037',
					},
					{
						name: '1038 - Indie & Alternative Music',
						value: '1038',
					},
					{
						name: '1039 - Soul & R&B',
						value: '1039',
					},
					{
						name: '104 - ISPs',
						value: '104',
					},
					{
						name: '1040 - Blues',
						value: '1040',
					},
					{
						name: '1041 - Punk (Music)',
						value: '1041',
					},
					{
						name: '1043 - Nintendo',
						value: '1043',
					},
					{
						name: '1044 - Sony PlayStation',
						value: '1044',
					},
					{
						name: '1045 - Xbox',
						value: '1045',
					},
					{
						name: '1046 - Handheld Game Consoles',
						value: '1046',
					},
					{
						name: '1047 - TV Comedies',
						value: '1047',
					},
					{
						name: '1048 - TV Talk Shows',
						value: '1048',
					},
					{
						name: '1049 - TV Reality Shows',
						value: '1049',
					},
					{
						name: '105 - Online Games',
						value: '105',
					},
					{
						name: '1050 - TV Game Shows',
						value: '1050',
					},
					{
						name: '1055 - TV Commercials',
						value: '1055',
					},
					{
						name: '1056 - Trucks',
						value: '1056',
					},
					{
						name: '1057 - SUVs',
						value: '1057',
					},
					{
						name: '1058 - Vans & Minivans',
						value: '1058',
					},
					{
						name: '1059 - Bentley',
						value: '1059',
					},
					{
						name: '1060 - Buick',
						value: '1060',
					},
					{
						name: '1061 - Ferrari',
						value: '1061',
					},
					{
						name: '1062 - Hummer',
						value: '1062',
					},
					{
						name: '1063 - Jaguar',
						value: '1063',
					},
					{
						name: '1064 - Lamborghini',
						value: '1064',
					},
					{
						name: '1065 - Land Rover',
						value: '1065',
					},
					{
						name: '1066 - Maserati',
						value: '1066',
					},
					{
						name: '1067 - Mini',
						value: '1067',
					},
					{
						name: '1068 - Rolls-Royce',
						value: '1068',
					},
					{
						name: '1069 - Scion',
						value: '1069',
					},
					{
						name: '107 - Investing',
						value: '107',
					},
					{
						name: '1070 - Suzuki',
						value: '1070',
					},
					{
						name: '1071 - Smart Phones',
						value: '1071',
					},
					{
						name: '1072 - Documentary Films',
						value: '1072',
					},
					{
						name: '1073 - College Sports',
						value: '1073',
					},
					{
						name: '1074 - Beaches & Islands',
						value: '1074',
					},
					{
						name: '1075 - Courts & Judiciary',
						value: '1075',
					},
					{
						name: '1076 - Signage',
						value: '1076',
					},
					{
						name: '1077 - Sports News',
						value: '1077',
					},
					{
						name: '1078 - Christmas',
						value: '1078',
					},
					{
						name: '1079 - Halloween & October 31st',
						value: '1079',
					},
					{
						name: '108 - Language Resources',
						value: '108',
					},
					{
						name: '1080 - Real Estate Listings',
						value: '1080',
					},
					{
						name: '1081 - Timeshares & Vacation Properties',
						value: '1081',
					},
					{
						name: '1082 - Sports Coaching & Training',
						value: '1082',
					},
					{
						name: '1083 - Sports Memorabilia',
						value: '1083',
					},
					{
						name: '1084 - Geographic Reference',
						value: '1084',
					},
					{
						name: '1085 - Movie Listings & Theater Showtimes',
						value: '1085',
					},
					{
						name: '1086 - Film Festivals',
						value: '1086',
					},
					{
						name: '1087 - Music Education & Instruction',
						value: '1087',
					},
					{
						name: '1088 - Desktop Publishing',
						value: '1088',
					},
					{
						name: '1089 - Audio & Music Software',
						value: '1089',
					},
					{
						name: '1090 - Media Players',
						value: '1090',
					},
					{
						name: '1091 - Samples & Sound Libraries',
						value: '1091',
					},
					{
						name: '1092 - Audio Files Formats & Codecs',
						value: '1092',
					},
					{
						name: '1093 - Philosophy',
						value: '1093',
					},
					{
						name: '1094 - Drama Films',
						value: '1094',
					},
					{
						name: '1095 - Comedy Films',
						value: '1095',
					},
					{
						name: '1096 - Thriller, Crime & Mystery Films',
						value: '1096',
					},
					{
						name: '1097 - Action & Adventure Films',
						value: '1097',
					},
					{
						name: '1098 - Silent Films',
						value: '1098',
					},
					{
						name: '1099 - Western Films',
						value: '1099',
					},
					{
						name: '11 - Home & Garden',
						value: '11',
					},
					{
						name: '1100 - Superhero Films',
						value: '1100',
					},
					{
						name: '1101 - Martial Arts Films',
						value: '1101',
					},
					{
						name: '1102 - Classic Films',
						value: '1102',
					},
					{
						name: '1103 - Cult & Indie Films',
						value: '1103',
					},
					{
						name: '1104 - Animated Films',
						value: '1104',
					},
					{
						name: '1105 - Musical Films',
						value: '1105',
					},
					{
						name: '1106 - Movie Reference',
						value: '1106',
					},
					{
						name: '1107 - Movie Reviews & Previews',
						value: '1107',
					},
					{
						name: '1108 - Film & TV Awards',
						value: '1108',
					},
					{
						name: '1109 - Mobile Apps & Add-Ons',
						value: '1109',
					},
					{
						name: '1110 - TV Family-Oriented Shows',
						value: '1110',
					},
					{
						name: '1111 - TV Crime & Legal Shows',
						value: '1111',
					},
					{
						name: '1112 - TV Sci-Fi & Fantasy Shows',
						value: '1112',
					},
					{
						name: '1113 - Music Awards',
						value: '1113',
					},
					{
						name: '1114 - Record Labels',
						value: '1114',
					},
					{
						name: '1115 - Recording Industry',
						value: '1115',
					},
					{
						name: '1116 - Film & TV Industry',
						value: '1116',
					},
					{
						name: '1117 - Film & TV Production',
						value: '1117',
					},
					{
						name: '1118 - Special Education',
						value: '1118',
					},
					{
						name: '1119 - Mountain & Ski Resorts',
						value: '1119',
					},
					{
						name: '112 - Broadcast & Network News',
						value: '112',
					},
					{
						name: '1120 - Lakes & Rivers',
						value: '1120',
					},
					{
						name: '1121 - Unions & Labor Movement',
						value: '1121',
					},
					{
						name: '1122 - Valentine\'s Day',
						value: '1122',
					},
					{
						name: '1123 - Easter',
						value: '1123',
					},
					{
						name: '1124 - Jewish Holidays',
						value: '1124',
					},
					{
						name: '1125 - Thanksgiving',
						value: '1125',
					},
					{
						name: '1126 - Skate Sports',
						value: '1126',
					},
					{
						name: '1127 - Poverty & Hunger',
						value: '1127',
					},
					{
						name: '113 - Gay-Lesbian-Bisexual-Transgender',
						value: '113',
					},
					{
						name: '1131 - Family & Relationships',
						value: '1131',
					},
					{
						name: '1132 - Family',
						value: '1132',
					},
					{
						name: '1133 - Marriage',
						value: '1133',
					},
					{
						name: '1134 - Friendship',
						value: '1134',
					},
					{
						name: '1135 - Romance',
						value: '1135',
					},
					{
						name: '1136 - Public Records',
						value: '1136',
					},
					{
						name: '1137 - Legal Forms',
						value: '1137',
					},
					{
						name: '1138 - Business Finance',
						value: '1138',
					},
					{
						name: '1139 - Investment Banking',
						value: '1139',
					},
					{
						name: '1140 - Boats & Watercraft',
						value: '1140',
					},
					{
						name: '1141 - Robotics',
						value: '1141',
					},
					{
						name: '1142 - Web Apps & Online Tools',
						value: '1142',
					},
					{
						name: '1143 - Entertainment Media',
						value: '1143',
					},
					{
						name: '1144 - Entertainment Media Rentals',
						value: '1144',
					},
					{
						name: '1145 - DVD & Video Rentals',
						value: '1145',
					},
					{
						name: '1146 - Video Game Retailers',
						value: '1146',
					},
					{
						name: '1147 - Personal Aircraft',
						value: '1147',
					},
					{
						name: '1148 - Skiing & Snowboarding',
						value: '1148',
					},
					{
						name: '1149 - Ice Skating',
						value: '1149',
					},
					{
						name: '115 - Baby Care & Hygiene',
						value: '115',
					},
					{
						name: '1150 - Mail & Package Delivery',
						value: '1150',
					},
					{
						name: '1152 - Fluid Handling',
						value: '1152',
					},
					{
						name: '1153 - Plumbing',
						value: '1153',
					},
					{
						name: '1155 - Fashion Modeling',
						value: '1155',
					},
					{
						name: '1157 - Home Theater Systems',
						value: '1157',
					},
					{
						name: '1158 - Speakers',
						value: '1158',
					},
					{
						name: '1159 - Business Operations',
						value: '1159',
					},
					{
						name: '1160 - Commercial Lending',
						value: '1160',
					},
					{
						name: '1161 - Public Finance',
						value: '1161',
					},
					{
						name: '1162 - Consulting',
						value: '1162',
					},
					{
						name: '1163 - Financial Markets',
						value: '1163',
					},
					{
						name: '1164 - Economy News',
						value: '1164',
					},
					{
						name: '1165 - Fiscal Policy News',
						value: '1165',
					},
					{
						name: '1166 - Housing & Development',
						value: '1166',
					},
					{
						name: '1167 - Painting',
						value: '1167',
					},
					{
						name: '1168 - Earth Sciences',
						value: '1168',
					},
					{
						name: '1169 - Paleontology',
						value: '1169',
					},
					{
						name: '1170 - Bluetooth Accessories',
						value: '1170',
					},
					{
						name: '1171 - Mobile & Wireless Accessories',
						value: '1171',
					},
					{
						name: '1173 - Dress-Up & Fashion Games',
						value: '1173',
					},
					{
						name: '1174 - Fun Tests & Silly Surveys',
						value: '1174',
					},
					{
						name: '1175 - Roofing',
						value: '1175',
					},
					{
						name: '1176 - Printing & Publishing',
						value: '1176',
					},
					{
						name: '1177 - Writers Resources',
						value: '1177',
					},
					{
						name: '1178 - Commercial & Investment Real Estate',
						value: '1178',
					},
					{
						name: '1179 - Company News',
						value: '1179',
					},
					{
						name: '118 - Water Sports',
						value: '118',
					},
					{
						name: '1180 - Political Humor',
						value: '1180',
					},
					{
						name: '1181 - Corporate & Financial Crime',
						value: '1181',
					},
					{
						name: '1182 - Radio Equipment',
						value: '1182',
					},
					{
						name: '1183 - Children\'s Literature',
						value: '1183',
					},
					{
						name: '1184 - Literary Classics',
						value: '1184',
					},
					{
						name: '1185 - Opera',
						value: '1185',
					},
					{
						name: '1186 - Talk Radio',
						value: '1186',
					},
					{
						name: '1187 - TV Guides & Reference',
						value: '1187',
					},
					{
						name: '1188 - Car Electronics',
						value: '1188',
					},
					{
						name: '1189 - Car Video',
						value: '1189',
					},
					{
						name: '119 - Wildlife',
						value: '119',
					},
					{
						name: '1190 - Automotive Industry',
						value: '1190',
					},
					{
						name: '1191 - Bicycles & Accessories',
						value: '1191',
					},
					{
						name: '1192 - Electronic Accessories',
						value: '1192',
					},
					{
						name: '1193 - TV Dramas',
						value: '1193',
					},
					{
						name: '1194 - TV Medical Shows',
						value: '1194',
					},
					{
						name: '1195 - Arts Education',
						value: '1195',
					},
					{
						name: '1198 - World Sports Competitions',
						value: '1198',
					},
					{
						name: '1199 - Professional & Trade Associations',
						value: '1199',
					},
					{
						name: '12 - Business & Industrial',
						value: '12',
					},
					{
						name: '120 - Cookware & Diningware',
						value: '120',
					},
					{
						name: '1200 - Business Formation',
						value: '1200',
					},
					{
						name: '1201 - Opinion & Commentary',
						value: '1201',
					},
					{
						name: '1202 - Political Polls & Surveys',
						value: '1202',
					},
					{
						name: '1203 - Media Critics & Watchdogs',
						value: '1203',
					},
					{
						name: '1204 - Journalism & News Industry',
						value: '1204',
					},
					{
						name: '1205 - Discrimination & Identity Relations',
						value: '1205',
					},
					{
						name: '1206 - Drag & Street Racing',
						value: '1206',
					},
					{
						name: '1207 - Stunts & Dangerous Feats',
						value: '1207',
					},
					{
						name: '1208 - African Music',
						value: '1208',
					},
					{
						name: '1209 - World News',
						value: '1209',
					},
					{
						name: '121 - Grocery & Food Retailers',
						value: '121',
					},
					{
						name: '1210 - Swap Meets & Outdoor Markets',
						value: '1210',
					},
					{
						name: '1211 - Ear Nose & Throat',
						value: '1211',
					},
					{
						name: '1212 - Scooters & Mopeds',
						value: '1212',
					},
					{
						name: '1213 - Campers & RVs',
						value: '1213',
					},
					{
						name: '1214 - Commercial Vehicles',
						value: '1214',
					},
					{
						name: '1215 - Cargo Trucks & Trailers',
						value: '1215',
					},
					{
						name: '1216 - Engine & Transmission',
						value: '1216',
					},
					{
						name: '1217 - Auto Exterior',
						value: '1217',
					},
					{
						name: '1218 - Auto Interior',
						value: '1218',
					},
					{
						name: '1219 - Beauty Pageants',
						value: '1219',
					},
					{
						name: '122 - Cooking & Recipes',
						value: '122',
					},
					{
						name: '1220 - Cosmetic Procedures',
						value: '1220',
					},
					{
						name: '1221 - Intelligence & Counterterrorism',
						value: '1221',
					},
					{
						name: '1222 - Online Image Galleries',
						value: '1222',
					},
					{
						name: '1223 - Clip Art & Animated GIFs',
						value: '1223',
					},
					{
						name: '1224 - Eyeglasses & Contacts',
						value: '1224',
					},
					{
						name: '1225 - Wholesalers & Liquidators',
						value: '1225',
					},
					{
						name: '1226 - Neuroscience',
						value: '1226',
					},
					{
						name: '1227 - Computer Science',
						value: '1227',
					},
					{
						name: '1228 - Apparel Services',
						value: '1228',
					},
					{
						name: '1229 - Computer Education',
						value: '1229',
					},
					{
						name: '123 - Tobacco Products',
						value: '123',
					},
					{
						name: '1230 - Fiber & Textile Arts',
						value: '1230',
					},
					{
						name: '1231 - Baby & Pet Names',
						value: '1231',
					},
					{
						name: '1232 - House Painting & Finishing',
						value: '1232',
					},
					{
						name: '1233 - Technical Reference',
						value: '1233',
					},
					{
						name: '1234 - People Search',
						value: '1234',
					},
					{
						name: '1235 - Steroids & Performance-Enhancing Drugs',
						value: '1235',
					},
					{
						name: '1236 - Sexual Enhancement',
						value: '1236',
					},
					{
						name: '1237 - Smoking & Smoking Cessation',
						value: '1237',
					},
					{
						name: '1238 - Cleansing & Detoxification',
						value: '1238',
					},
					{
						name: '1239 - Acupuncture & Chinese Medicine',
						value: '1239',
					},
					{
						name: '124 - Clothing Accessories',
						value: '124',
					},
					{
						name: '1240 - Company Earnings',
						value: '1240',
					},
					{
						name: '1241 - Mergers & Acquisitions',
						value: '1241',
					},
					{
						name: '1242 - Reggaeton',
						value: '1242',
					},
					{
						name: '1243 - Broadway & Musical Theater',
						value: '1243',
					},
					{
						name: '1244 - Spoofs & Satire',
						value: '1244',
					},
					{
						name: '1245 - Airport Parking & Transportation',
						value: '1245',
					},
					{
						name: '1246 - Carnival & Mardi Gras',
						value: '1246',
					},
					{
						name: '1247 - Air Force',
						value: '1247',
					},
					{
						name: '1248 - Army',
						value: '1248',
					},
					{
						name: '1249 - Navy',
						value: '1249',
					},
					{
						name: '1250 - Marines',
						value: '1250',
					},
					{
						name: '1251 - Scientology',
						value: '1251',
					},
					{
						name: '1252 - Statistics',
						value: '1252',
					},
					{
						name: '1253 - Health News',
						value: '1253',
					},
					{
						name: '1254 - Atmospheric Science',
						value: '1254',
					},
					{
						name: '1255 - Climate Change & Global Warming',
						value: '1255',
					},
					{
						name: '1256 - Health Policy',
						value: '1256',
					},
					{
						name: '1257 - Asians & Diaspora',
						value: '1257',
					},
					{
						name: '1258 - Pagan & Esoteric Traditions',
						value: '1258',
					},
					{
						name: '1259 - Scandals & Investigations',
						value: '1259',
					},
					{
						name: '1260 - Troubled Relationships',
						value: '1260',
					},
					{
						name: '1261 - Divorce & Separation',
						value: '1261',
					},
					{
						name: '1262 - Parasites & Parasitic Diseases',
						value: '1262',
					},
					{
						name: '1263 - Vaccines & Immunizations',
						value: '1263',
					},
					{
						name: '1264 - Foreign Language Resources',
						value: '1264',
					},
					{
						name: '1265 - Translation Tools & Resources',
						value: '1265',
					},
					{
						name: '1266 - Foreign Language Study',
						value: '1266',
					},
					{
						name: '1267 - Vehicle Specs, Reviews & Comparisons',
						value: '1267',
					},
					{
						name: '1268 - Fuel Economy & Gas Prices',
						value: '1268',
					},
					{
						name: '1269 - Vehicle Fuels & Lubricants',
						value: '1269',
					},
					{
						name: '1270 - Birthdays & Name Days',
						value: '1270',
					},
					{
						name: '1271 - New Year',
						value: '1271',
					},
					{
						name: '1272 - Business & Corporate Law',
						value: '1272',
					},
					{
						name: '1273 - Live Sporting Events',
						value: '1273',
					},
					{
						name: '1274 - Christian Holidays',
						value: '1274',
					},
					{
						name: '1275 - Islamic Holidays',
						value: '1275',
					},
					{
						name: '1276 - Contests, Awards & Prizes',
						value: '1276',
					},
					{
						name: '1277 - Tablet PCs',
						value: '1277',
					},
					{
						name: '1278 - Insects & Entomology',
						value: '1278',
					},
					{
						name: '1279 - VPN & Remote Access',
						value: '1279',
					},
					{
						name: '1280 - Human Rights & Liberties',
						value: '1280',
					},
					{
						name: '1281 - Privacy Issues',
						value: '1281',
					},
					{
						name: '1282 - Grants & Financial Assistance',
						value: '1282',
					},
					{
						name: '1283 - Tax Preparation & Planning',
						value: '1283',
					},
					{
						name: '1284 - Prisons & Corrections',
						value: '1284',
					},
					{
						name: '1285 - Latin Pop',
						value: '1285',
					},
					{
						name: '1286 - Salsa & Tropical Music',
						value: '1286',
					},
					{
						name: '1287 - Brazilian Music',
						value: '1287',
					},
					{
						name: '1288 - Military History',
						value: '1288',
					},
					{
						name: '1289 - Academic Conferences & Publications',
						value: '1289',
					},
					{
						name: '1290 - Family-Oriented Games & Activities',
						value: '1290',
					},
					{
						name: '1291 - Family Films',
						value: '1291',
					},
					{
						name: '1292 - Small Kitchen Appliances',
						value: '1292',
					},
					{
						name: '1293 - Major Kitchen Appliances',
						value: '1293',
					},
					{
						name: '1294 - Vehicle Codes & Driving Laws',
						value: '1294',
					},
					{
						name: '1296 - Places of Worship',
						value: '1296',
					},
					{
						name: '1298 - Distributed & Parallel Computing',
						value: '1298',
					},
					{
						name: '1299 - Machine Learning & Artificial Intelligence',
						value: '1299',
					},
					{
						name: '13 - Internet & Telecom',
						value: '13',
					},
					{
						name: '1300 - CAD & CAM',
						value: '1300',
					},
					{
						name: '1301 - Same-Sex Marriage',
						value: '1301',
					},
					{
						name: '1302 - Communications & Media Studies',
						value: '1302',
					},
					{
						name: '1303 - Public Speaking',
						value: '1303',
					},
					{
						name: '1304 - Etiquette',
						value: '1304',
					},
					{
						name: '1305 - Diving & Underwater Activities',
						value: '1305',
					},
					{
						name: '1306 - Parking',
						value: '1306',
					},
					{
						name: '1307 - Recycling',
						value: '1307',
					},
					{
						name: '1308 - Study Abroad',
						value: '1308',
					},
					{
						name: '1309 - Loyalty Cards & Programs',
						value: '1309',
					},
					{
						name: '1310 - Romance Films',
						value: '1310',
					},
					{
						name: '1311 - Action & Platform Games',
						value: '1311',
					},
					{
						name: '1312 - Gangs & Organized Crime',
						value: '1312',
					},
					{
						name: '1313 - Immigration Policy & Border Issues',
						value: '1313',
					},
					{
						name: '1314 - Drug Laws & Policy',
						value: '1314',
					},
					{
						name: '1315 - Video File Formats & Codecs',
						value: '1315',
					},
					{
						name: '1316 - Public Policy',
						value: '1316',
					},
					{
						name: '1317 - Microcars & City Cars',
						value: '1317',
					},
					{
						name: '1318 - Flash Drives & Memory Cards',
						value: '1318',
					},
					{
						name: '1319 - Memory Card Readers',
						value: '1319',
					},
					{
						name: '1320 - Hard Drives',
						value: '1320',
					},
					{
						name: '1321 - CD & DVD Drives & Burners',
						value: '1321',
					},
					{
						name: '1322 - CD & DVD Storage Media',
						value: '1322',
					},
					{
						name: '1323 - Data Backup & Recovery',
						value: '1323',
					},
					{
						name: '1324 - E-Book Readers',
						value: '1324',
					},
					{
						name: '1325 - Guitars',
						value: '1325',
					},
					{
						name: '1326 - Pianos & Keyboards',
						value: '1326',
					},
					{
						name: '1327 - Drums & Percussion',
						value: '1327',
					},
					{
						name: '1328 - Endocrine Conditions',
						value: '1328',
					},
					{
						name: '1329 - Thyroid Conditions',
						value: '1329',
					},
					{
						name: '1330 - Printers, Copiers & Fax',
						value: '1330',
					},
					{
						name: '1331 - Copiers',
						value: '1331',
					},
					{
						name: '1332 - Fax Machines',
						value: '1332',
					},
					{
						name: '1333 - Ink & Toner',
						value: '1333',
					},
					{
						name: '1334 - Projectors & Screens',
						value: '1334',
					},
					{
						name: '1339 - Carpooling & Ridesharing',
						value: '1339',
					},
					{
						name: '1340 - Theology & Religious Study',
						value: '1340',
					},
					{
						name: '1341 - Accounting & Financial Software',
						value: '1341',
					},
					{
						name: '1342 - Video Game Emulation',
						value: '1342',
					},
					{
						name: '1343 - Gaming Media & Reference',
						value: '1343',
					},
					{
						name: '1344 - Spreadsheet Software',
						value: '1344',
					},
					{
						name: '1345 - Word Processing Software',
						value: '1345',
					},
					{
						name: '1346 - Presentation Software',
						value: '1346',
					},
					{
						name: '1347 - Public Storage',
						value: '1347',
					},
					{
						name: '1348 - Home Storage & Shelving',
						value: '1348',
					},
					{
						name: '1349 - Water Supply & Treatment',
						value: '1349',
					},
					{
						name: '1350 - Drug & Alcohol Treatment',
						value: '1350',
					},
					{
						name: '1351 - Drug & Alcohol Testing',
						value: '1351',
					},
					{
						name: '1352 - Assistive Technology',
						value: '1352',
					},
					{
						name: '1353 - Mobility Equipment & Accessories',
						value: '1353',
					},
					{
						name: '1354 - HDTVs',
						value: '1354',
					},
					{
						name: '1355 - Plasma TVs',
						value: '1355',
					},
					{
						name: '1356 - LCD TVs',
						value: '1356',
					},
					{
						name: '1357 - Projection TVs',
						value: '1357',
					},
					{
						name: '1358 - Calendar & Scheduling Software',
						value: '1358',
					},
					{
						name: '1359 - Project Management Software',
						value: '1359',
					},
					{
						name: '1360 - Project Management',
						value: '1360',
					},
					{
						name: '1361 - Art & Craft Supplies',
						value: '1361',
					},
					{
						name: '1362 - Rugs & Carpets',
						value: '1362',
					},
					{
						name: '1363 - Clocks',
						value: '1363',
					},
					{
						name: '1364 - Laundry',
						value: '1364',
					},
					{
						name: '1365 - Bathroom',
						value: '1365',
					},
					{
						name: '1366 - Bedroom',
						value: '1366',
					},
					{
						name: '1367 - Beds & Headboards',
						value: '1367',
					},
					{
						name: '1368 - Mattresses',
						value: '1368',
					},
					{
						name: '1369 - Bedding & Bed Linens',
						value: '1369',
					},
					{
						name: '137 - Homemaking & Interior Decor',
						value: '137',
					},
					{
						name: '1370 - Sofas & Chairs',
						value: '1370',
					},
					{
						name: '1371 - Water Filters & Purifiers',
						value: '1371',
					},
					{
						name: '1372 - Nursery & Playroom',
						value: '1372',
					},
					{
						name: '1373 - Cutlery & Cutting Accessories',
						value: '1373',
					},
					{
						name: '1374 - Babies & Toddlers',
						value: '1374',
					},
					{
						name: '1375 - Business Cards & Stationary',
						value: '1375',
					},
					{
						name: '1376 - Tennis',
						value: '1376',
					},
					{
						name: '1377 - Infiniti',
						value: '1377',
					},
					{
						name: '1378 - Isuzu',
						value: '1378',
					},
					{
						name: '1379 - Text & Instant Messaging',
						value: '1379',
					},
					{
						name: '138 - Vehicle Maintenance',
						value: '138',
					},
					{
						name: '1380 - Electric & Plug-In Vehicles',
						value: '1380',
					},
					{
						name: '1381 - Microblogging',
						value: '1381',
					},
					{
						name: '1382 - Mobile OS',
						value: '1382',
					},
					{
						name: '1383 - Camera Lenses',
						value: '1383',
					},
					{
						name: '1384 - Binoculars, Telescopes & Optical Devices',
						value: '1384',
					},
					{
						name: '1385 - Government Contracting & Procurement',
						value: '1385',
					},
					{
						name: '1386 - Lobbying',
						value: '1386',
					},
					{
						name: '1387 - Government Agencies',
						value: '1387',
					},
					{
						name: '1388 - Training & Certification',
						value: '1388',
					},
					{
						name: '1389 - Agritourism',
						value: '1389',
					},
					{
						name: '1390 - Sightseeing Tours',
						value: '1390',
					},
					{
						name: '1391 - Vineyards & Wine Tourism',
						value: '1391',
					},
					{
						name: '1392 - Tourist Boards & Visitor Centers',
						value: '1392',
					},
					{
						name: '1393 - DVRs & Set-Top Boxes',
						value: '1393',
					},
					{
						name: '1394 - Blu-Ray Players & Recorders',
						value: '1394',
					},
					{
						name: '1395 - DVD Players & Recorders',
						value: '1395',
					},
					{
						name: '1396 - Headphones',
						value: '1396',
					},
					{
						name: '1397 - Drawing & Coloring',
						value: '1397',
					},
					{
						name: '14 - People & Society',
						value: '14',
					},
					{
						name: '143 - Face & Body Care',
						value: '143',
					},
					{
						name: '144 - Unwanted Body & Facial Hair Removal',
						value: '144',
					},
					{
						name: '145 - Spas & Beauty Services',
						value: '145',
					},
					{
						name: '146 - Hair Care',
						value: '146',
					},
					{
						name: '147 - Cosmetology & Beauty Professionals',
						value: '147',
					},
					{
						name: '148 - Off-Road Vehicles',
						value: '148',
					},
					{
						name: '154 - Kids & Teens',
						value: '154',
					},
					{
						name: '157 - Human Resources',
						value: '157',
					},
					{
						name: '158 - Home Improvement',
						value: '158',
					},
					{
						name: '16 - News',
						value: '16',
					},
					{
						name: '166 - Public Safety',
						value: '166',
					},
					{
						name: '168 - Emergency Services',
						value: '168',
					},
					{
						name: '170 - Vehicle Licensing & Registration',
						value: '170',
					},
					{
						name: '171 - Native Americans',
						value: '171',
					},
					{
						name: '174 - Science',
						value: '174',
					},
					{
						name: '179 - Hotels & Accommodations',
						value: '179',
					},
					{
						name: '18 - Shopping',
						value: '18',
					},
					{
						name: '180 - Motor Sports',
						value: '180',
					},
					{
						name: '182 - Humor',
						value: '182',
					},
					{
						name: '184 - Celebrities & Entertainment News',
						value: '184',
					},
					{
						name: '185 - Fashion & Style',
						value: '185',
					},
					{
						name: '188 - Clubs & Nightlife',
						value: '188',
					},
					{
						name: '189 - Clubs & Organizations',
						value: '189',
					},
					{
						name: '19 - Law & Government',
						value: '19',
					},
					{
						name: '191 - Forum & Chat Providers',
						value: '191',
					},
					{
						name: '195 - Reproductive Health',
						value: '195',
					},
					{
						name: '198 - Birth Control',
						value: '198',
					},
					{
						name: '20 - Sports',
						value: '20',
					},
					{
						name: '202 - Erectile Dysfunction',
						value: '202',
					},
					{
						name: '203 - Air Travel',
						value: '203',
					},
					{
						name: '205 - Car Rental & Taxi Services',
						value: '205',
					},
					{
						name: '206 - Cruises & Charters',
						value: '206',
					},
					{
						name: '208 - Tourist Destinations',
						value: '208',
					},
					{
						name: '210 - DVD & Video Shopping',
						value: '210',
					},
					{
						name: '211 - Online Video',
						value: '211',
					},
					{
						name: '213 - Movie Memorabilia',
						value: '213',
					},
					{
						name: '215 - Radio',
						value: '215',
					},
					{
						name: '216 - Musical Instruments',
						value: '216',
					},
					{
						name: '217 - CD & Audio Shopping',
						value: '217',
					},
					{
						name: '218 - Music Art & Memorabilia',
						value: '218',
					},
					{
						name: '22 - Books & Literature',
						value: '22',
					},
					{
						name: '220 - Music Streams & Downloads',
						value: '220',
					},
					{
						name: '224 - Software Utilities',
						value: '224',
					},
					{
						name: '225 - Device Drivers',
						value: '225',
					},
					{
						name: '226 - Computer Memory',
						value: '226',
					},
					{
						name: '227 - MP3 & Portable Media Players',
						value: '227',
					},
					{
						name: '228 - PDAs & Handhelds',
						value: '228',
					},
					{
						name: '229 - TV & Video Equipment',
						value: '229',
					},
					{
						name: '23 - Performing Arts',
						value: '23',
					},
					{
						name: '230 - Car Audio',
						value: '230',
					},
					{
						name: '231 - Engineering & Technology',
						value: '231',
					},
					{
						name: '233 - Energy & Utilities',
						value: '233',
					},
					{
						name: '234 - Make-Up & Cosmetics',
						value: '234',
					},
					{
						name: '235 - Hair Loss',
						value: '235',
					},
					{
						name: '236 - Weight Loss',
						value: '236',
					},
					{
						name: '237 - Vitamins & Supplements',
						value: '237',
					},
					{
						name: '238 - Cosmetic Surgery',
						value: '238',
					},
					{
						name: '239 - Body Art',
						value: '239',
					},
					{
						name: '24 - Visual Art & Design',
						value: '24',
					},
					{
						name: '241 - Bodybuilding',
						value: '241',
					},
					{
						name: '242 - Perfumes & Fragrances',
						value: '242',
					},
					{
						name: '244 - Hygiene & Toiletries',
						value: '244',
					},
					{
						name: '245 - Oral & Dental Care',
						value: '245',
					},
					{
						name: '246 - Vision Care',
						value: '246',
					},
					{
						name: '248 - Pharmacy',
						value: '248',
					},
					{
						name: '249 - Health Insurance',
						value: '249',
					},
					{
						name: '25 - Advertising & Marketing',
						value: '25',
					},
					{
						name: '250 - Hospitals & Treatment Centers',
						value: '250',
					},
					{
						name: '251 - Medical Devices & Equipment',
						value: '251',
					},
					{
						name: '252 - Health Foundations & Medical Research',
						value: '252',
					},
					{
						name: '253 - Medical Literature & Resources',
						value: '253',
					},
					{
						name: '254 - Health Education & Medical Training',
						value: '254',
					},
					{
						name: '255 - Pharmaceuticals & Biotech',
						value: '255',
					},
					{
						name: '256 - Medical Facilities & Services',
						value: '256',
					},
					{
						name: '257 - Substance Abuse',
						value: '257',
					},
					{
						name: '258 - American Football',
						value: '258',
					},
					{
						name: '259 - Baseball',
						value: '259',
					},
					{
						name: '260 - Hockey',
						value: '260',
					},
					{
						name: '261 - Golf',
						value: '261',
					},
					{
						name: '262 - Racquet Sports',
						value: '262',
					},
					{
						name: '263 - Sporting Goods',
						value: '263',
					},
					{
						name: '264 - Basketball',
						value: '264',
					},
					{
						name: '265 - Winter Sports',
						value: '265',
					},
					{
						name: '268 - Maps',
						value: '268',
					},
					{
						name: '269 - Gardening & Landscaping',
						value: '269',
					},
					{
						name: '270 - Home Furnishings',
						value: '270',
					},
					{
						name: '271 - Home Appliances',
						value: '271',
					},
					{
						name: '272 - Lamps & Lighting',
						value: '272',
					},
					{
						name: '273 - Motorcycles',
						value: '273',
					},
					{
						name: '275 - Photo & Video Sharing',
						value: '275',
					},
					{
						name: '276 - Restaurants',
						value: '276',
					},
					{
						name: '277 - Alcoholic Beverages',
						value: '277',
					},
					{
						name: '278 - Accounting & Auditing',
						value: '278',
					},
					{
						name: '279 - Credit & Lending',
						value: '279',
					},
					{
						name: '28 - Office Services',
						value: '28',
					},
					{
						name: '280 - Merchant Services & Payment Systems',
						value: '280',
					},
					{
						name: '284 - Crafts',
						value: '284',
					},
					{
						name: '287 - Industrial Materials & Equipment',
						value: '287',
					},
					{
						name: '288 - Chemicals Industry',
						value: '288',
					},
					{
						name: '289 - Freight & Trucking',
						value: '289',
					},
					{
						name: '29 - Real Estate',
						value: '29',
					},
					{
						name: '290 - Packaging',
						value: '290',
					},
					{
						name: '291 - Moving & Relocation',
						value: '291',
					},
					{
						name: '292 - Auctions',
						value: '292',
					},
					{
						name: '293 - Weddings',
						value: '293',
					},
					{
						name: '294 - Soccer',
						value: '294',
					},
					{
						name: '296 - Cricket',
						value: '296',
					},
					{
						name: '297 - Culinary Training',
						value: '297',
					},
					{
						name: '298 - Seniors & Retirement',
						value: '298',
					},
					{
						name: '299 - Online Communities',
						value: '299',
					},
					{
						name: '3 - Arts & Entertainment',
						value: '3',
					},
					{
						name: '30 - Computer Hardware',
						value: '30',
					},
					{
						name: '301 - Web Portals',
						value: '301',
					},
					{
						name: '302 - Web Services',
						value: '302',
					},
					{
						name: '303 - Operating Systems',
						value: '303',
					},
					{
						name: '304 - Internet Clients & Browsers',
						value: '304',
					},
					{
						name: '305 - Televisions',
						value: '305',
					},
					{
						name: '306 - Cameras & Camcorders',
						value: '306',
					},
					{
						name: '307 - Cameras',
						value: '307',
					},
					{
						name: '308 - Camcorders',
						value: '308',
					},
					{
						name: '309 - Desktop Computers',
						value: '309',
					},
					{
						name: '31 - Programming',
						value: '31',
					},
					{
						name: '310 - Laptops & Notebooks',
						value: '310',
					},
					{
						name: '311 - Networking',
						value: '311',
					},
					{
						name: '312 - Computer Peripherals',
						value: '312',
					},
					{
						name: '313 - Open Source',
						value: '313',
					},
					{
						name: '314 - Computer Security',
						value: '314',
					},
					{
						name: '315 - Antivirus & Malware',
						value: '315',
					},
					{
						name: '316 - Comics & Animation',
						value: '316',
					},
					{
						name: '317 - Anime & Manga',
						value: '317',
					},
					{
						name: '318 - Comics',
						value: '318',
					},
					{
						name: '319 - Cartoons',
						value: '319',
					},
					{
						name: '32 - Software',
						value: '32',
					},
					{
						name: '320 - Photo Rating Sites',
						value: '320',
					},
					{
						name: '321 - File Sharing & Hosting',
						value: '321',
					},
					{
						name: '323 - Flowers',
						value: '323',
					},
					{
						name: '324 - Party & Holiday Supplies',
						value: '324',
					},
					{
						name: '326 - Affiliate Programs',
						value: '326',
					},
					{
						name: '327 - Public Relations',
						value: '327',
					},
					{
						name: '328 - Telemarketing',
						value: '328',
					},
					{
						name: '329 - Business Services',
						value: '329',
					},
					{
						name: '33 - Offbeat',
						value: '33',
					},
					{
						name: '330 - Recruitment & Staffing',
						value: '330',
					},
					{
						name: '331 - Corporate Training',
						value: '331',
					},
					{
						name: '332 - Document & Printing Services',
						value: '332',
					},
					{
						name: '333 - Office Furniture',
						value: '333',
					},
					{
						name: '334 - Corporate Events',
						value: '334',
					},
					{
						name: '335 - Trade Shows & Conventions',
						value: '335',
					},
					{
						name: '336 - Business Plans & Presentations',
						value: '336',
					},
					{
						name: '337 - Office & Facilities Management',
						value: '337',
					},
					{
						name: '338 - Management',
						value: '338',
					},
					{
						name: '34 - Movies',
						value: '34',
					},
					{
						name: '340 - E-Commerce Services',
						value: '340',
					},
					{
						name: '341 - Customer Relationship Management (CRM)',
						value: '341',
					},
					{
						name: '342 - Enterprise Resource Planning (ERP)',
						value: '342',
					},
					{
						name: '343 - Data Management',
						value: '343',
					},
					{
						name: '344 - Network Security',
						value: '344',
					},
					{
						name: '346 - Networking Equipment',
						value: '346',
					},
					{
						name: '347 - Network Monitoring & Management',
						value: '347',
					},
					{
						name: '35 - Music & Audio',
						value: '35',
					},
					{
						name: '350 - Gems & Jewelry',
						value: '350',
					},
					{
						name: '352 - Price Comparisons',
						value: '352',
					},
					{
						name: '353 - Product Reviews & Price Comparisons',
						value: '353',
					},
					{
						name: '354 - Import & Export',
						value: '354',
					},
					{
						name: '355 - Book Retailers',
						value: '355',
					},
					{
						name: '356 - Aerospace & Defense',
						value: '356',
					},
					{
						name: '357 - TV Soap Operas',
						value: '357',
					},
					{
						name: '358 - TV Shows & Programs',
						value: '358',
					},
					{
						name: '359 - TV Networks & Stations',
						value: '359',
					},
					{
						name: '36 - TV & Video',
						value: '36',
					},
					{
						name: '360 - Bollywood & South Asian Film',
						value: '360',
					},
					{
						name: '361 - Audio Equipment',
						value: '361',
					},
					{
						name: '362 - Gadgets & Portable Electronics',
						value: '362',
					},
					{
						name: '364 - Lottery & Sweepstakes',
						value: '364',
					},
					{
						name: '365 - Coupons & Discount Offers',
						value: '365',
					},
					{
						name: '366 - Military',
						value: '366',
					},
					{
						name: '367 - Distance Learning',
						value: '367',
					},
					{
						name: '369 - Vocational & Continuing Education',
						value: '369',
					},
					{
						name: '37 - Banking',
						value: '37',
					},
					{
						name: '371 - Primary & Secondary Schooling (K-12)',
						value: '371',
					},
					{
						name: '372 - Colleges & Universities',
						value: '372',
					},
					{
						name: '373 - Standardized & Admissions Tests',
						value: '373',
					},
					{
						name: '374 - Educational Resources',
						value: '374',
					},
					{
						name: '375 - Libraries & Museums',
						value: '375',
					},
					{
						name: '377 - Business & Personal Listings',
						value: '377',
					},
					{
						name: '378 - Apartments & Residential Rentals',
						value: '378',
					},
					{
						name: '379 - Pet Food & Supplies',
						value: '379',
					},
					{
						name: '38 - Insurance',
						value: '38',
					},
					{
						name: '380 - Veterinarians',
						value: '380',
					},
					{
						name: '381 - Game Cheats & Hints',
						value: '381',
					},
					{
						name: '382 - Mobile & Wireless',
						value: '382',
					},
					{
						name: '383 - Service Providers',
						value: '383',
					},
					{
						name: '384 - Phone Service Providers',
						value: '384',
					},
					{
						name: '385 - Communications Equipment',
						value: '385',
					},
					{
						name: '386 - Voice & Video Chat',
						value: '386',
					},
					{
						name: '389 - Calling Cards',
						value: '389',
					},
					{
						name: '39 - Card Games',
						value: '39',
					},
					{
						name: '390 - Mobile Phones',
						value: '390',
					},
					{
						name: '392 - Teleconferencing',
						value: '392',
					},
					{
						name: '394 - Email & Messaging',
						value: '394',
					},
					{
						name: '396 - Politics',
						value: '396',
					},
					{
						name: '398 - Campaigns & Elections',
						value: '398',
					},
					{
						name: '400 - Ancestry & Genealogy',
						value: '400',
					},
					{
						name: '401 - Pregnancy & Maternity',
						value: '401',
					},
					{
						name: '402 - Youth Camps',
						value: '402',
					},
					{
						name: '403 - Child Care',
						value: '403',
					},
					{
						name: '404 - Beer',
						value: '404',
					},
					{
						name: '405 - Wine',
						value: '405',
					},
					{
						name: '406 - Liquor',
						value: '406',
					},
					{
						name: '408 - Newspapers',
						value: '408',
					},
					{
						name: '409 - Right-Wing Politics',
						value: '409',
					},
					{
						name: '41 - Computer & Video Games',
						value: '41',
					},
					{
						name: '410 - Left-Wing Politics',
						value: '410',
					},
					{
						name: '412 - Magazines',
						value: '412',
					},
					{
						name: '418 - Nursing',
						value: '418',
					},
					{
						name: '419 - Health Conditions',
						value: '419',
					},
					{
						name: '42 - Jazz',
						value: '42',
					},
					{
						name: '420 - Skin Conditions',
						value: '420',
					},
					{
						name: '421 - Sexually Transmitted Diseases',
						value: '421',
					},
					{
						name: '422 - Web Design & Development',
						value: '422',
					},
					{
						name: '423 - Bankruptcy',
						value: '423',
					},
					{
						name: '424 - Criminal Law',
						value: '424',
					},
					{
						name: '425 - Property Management',
						value: '425',
					},
					{
						name: '426 - Intellectual Property',
						value: '426',
					},
					{
						name: '427 - Accident & Personal Injury Law',
						value: '427',
					},
					{
						name: '428 - T-Shirts',
						value: '428',
					},
					{
						name: '429 - Cancer',
						value: '429',
					},
					{
						name: '43 - Online Goodies',
						value: '43',
					},
					{
						name: '432 - Toys',
						value: '432',
					},
					{
						name: '433 - History',
						value: '433',
					},
					{
						name: '434 - Electronics & Electrical',
						value: '434',
					},
					{
						name: '435 - Astronomy',
						value: '435',
					},
					{
						name: '436 - Mathematics',
						value: '436',
					},
					{
						name: '437 - Mental Health',
						value: '437',
					},
					{
						name: '438 - Vehicle Wheels & Tires',
						value: '438',
					},
					{
						name: '439 - Photographic & Digital Arts',
						value: '439',
					},
					{
						name: '44 - Beauty & Fitness',
						value: '44',
					},
					{
						name: '440 - Biological Sciences',
						value: '440',
					},
					{
						name: '441 - Water & Marine Sciences',
						value: '441',
					},
					{
						name: '442 - Ecology & Environment',
						value: '442',
					},
					{
						name: '443 - Geology',
						value: '443',
					},
					{
						name: '444 - Physics',
						value: '444',
					},
					{
						name: '445 - Scientific Equipment',
						value: '445',
					},
					{
						name: '446 - Scientific Institutions',
						value: '446',
					},
					{
						name: '447 - Flash-Based Entertainment',
						value: '447',
					},
					{
						name: '448 - Astrology & Divination',
						value: '448',
					},
					{
						name: '449 - Occult & Paranormal',
						value: '449',
					},
					{
						name: '45 - Health',
						value: '45',
					},
					{
						name: '450 - Customer Services',
						value: '450',
					},
					{
						name: '451 - Warranties & Service Contracts',
						value: '451',
					},
					{
						name: '456 - Nutrition',
						value: '456',
					},
					{
						name: '457 - Special & Restricted Diets',
						value: '457',
					},
					{
						name: '458 - Cycling',
						value: '458',
					},
					{
						name: '459 - Boating',
						value: '459',
					},
					{
						name: '46 - Agriculture & Forestry',
						value: '46',
					},
					{
						name: '461 - Hunting & Shooting',
						value: '461',
					},
					{
						name: '462 - Fishing',
						value: '462',
					},
					{
						name: '463 - Property Inspections & Appraisals',
						value: '463',
					},
					{
						name: '465 - Home Insurance',
						value: '465',
					},
					{
						name: '466 - Home Financing',
						value: '466',
					},
					{
						name: '467 - Auto Insurance',
						value: '467',
					},
					{
						name: '468 - Auto Financing',
						value: '468',
					},
					{
						name: '47 - Autos & Vehicles',
						value: '47',
					},
					{
						name: '471 - Pest Control',
						value: '471',
					},
					{
						name: '472 - Domestic Services',
						value: '472',
					},
					{
						name: '473 - Vehicle Shopping',
						value: '473',
					},
					{
						name: '474 - Humanities',
						value: '474',
					},
					{
						name: '477 - Architecture',
						value: '477',
					},
					{
						name: '48 - Construction & Maintenance',
						value: '48',
					},
					{
						name: '485 - Search Engines',
						value: '485',
					},
					{
						name: '486 - Graphics & Animation Software',
						value: '486',
					},
					{
						name: '487 - Computer Monitors & Displays',
						value: '487',
					},
					{
						name: '488 - Data Formats & Protocols',
						value: '488',
					},
					{
						name: '49 - Manufacturing',
						value: '49',
					},
					{
						name: '492 - Video Players & Recorders',
						value: '492',
					},
					{
						name: '493 - Input Devices',
						value: '493',
					},
					{
						name: '494 - Printers',
						value: '494',
					},
					{
						name: '495 - Scanners',
						value: '495',
					},
					{
						name: '496 - Computer Drives & Storage',
						value: '496',
					},
					{
						name: '497 - Multimedia Software',
						value: '497',
					},
					{
						name: '498 - Business & Productivity Software',
						value: '498',
					},
					{
						name: '499 - Alternative & Natural Medicine',
						value: '499',
					},
					{
						name: '5 - Computers & Electronics',
						value: '5',
					},
					{
						name: '50 - Transportation & Logistics',
						value: '50',
					},
					{
						name: '500 - Physical Therapy',
						value: '500',
					},
					{
						name: '501 - Cable & Satellite Providers',
						value: '501',
					},
					{
						name: '502 - Subcultures & Niche Interests',
						value: '502',
					},
					{
						name: '503 - Goth Subculture',
						value: '503',
					},
					{
						name: '504 - Blogging Resources & Services',
						value: '504',
					},
					{
						name: '505 - Chemistry',
						value: '505',
					},
					{
						name: '507 - Gossip & Tabloid News',
						value: '507',
					},
					{
						name: '508 - Social Services',
						value: '508',
					},
					{
						name: '509 - Social Sciences',
						value: '509',
					},
					{
						name: '510 - Demographics',
						value: '510',
					},
					{
						name: '511 - Counseling Services',
						value: '511',
					},
					{
						name: '512 - Wrestling',
						value: '512',
					},
					{
						name: '513 - Olympics',
						value: '513',
					},
					{
						name: '514 - Combat Sports',
						value: '514',
					},
					{
						name: '515 - Boxing',
						value: '515',
					},
					{
						name: '516 - Martial Arts',
						value: '516',
					},
					{
						name: '517 - Rugby',
						value: '517',
					},
					{
						name: '518 - Track & Field',
						value: '518',
					},
					{
						name: '519 - Gymnastics',
						value: '519',
					},
					{
						name: '520 - Economics',
						value: '520',
					},
					{
						name: '521 - International Relations',
						value: '521',
					},
					{
						name: '522 - Family Law',
						value: '522',
					},
					{
						name: '527 - Directories & Listings',
						value: '527',
					},
					{
						name: '528 - South Asians & Diaspora',
						value: '528',
					},
					{
						name: '529 - Social Networks',
						value: '529',
					},
					{
						name: '53 - Web Hosting & Domain Registration',
						value: '53',
					},
					{
						name: '530 - Undergarments',
						value: '530',
					},
					{
						name: '531 - Shopping Portals & Search Engines',
						value: '531',
					},
					{
						name: '532 - Ringtones & Mobile Goodies',
						value: '532',
					},
					{
						name: '533 - Reference',
						value: '533',
					},
					{
						name: '534 - Cheerleading',
						value: '534',
					},
					{
						name: '535 - Law Enforcement',
						value: '535',
					},
					{
						name: '536 - Sex Education & Counseling',
						value: '536',
					},
					{
						name: '538 - Edgy & Bizarre',
						value: '538',
					},
					{
						name: '539 - Fun & Trivia',
						value: '539',
					},
					{
						name: '54 - Social Issues & Advocacy',
						value: '54',
					},
					{
						name: '540 - Fan Fiction',
						value: '540',
					},
					{
						name: '541 - Running & Walking',
						value: '541',
					},
					{
						name: '542 - Hiking & Camping',
						value: '542',
					},
					{
						name: '543 - Psychology',
						value: '543',
					},
					{
						name: '546 - Matrimonial Services',
						value: '546',
					},
					{
						name: '547 - African-Americans',
						value: '547',
					},
					{
						name: '548 - Latinos & Latin-Americans',
						value: '548',
					},
					{
						name: '549 - East Asians & Diaspora',
						value: '549',
					},
					{
						name: '55 - Dating & Personals',
						value: '55',
					},
					{
						name: '550 - Jewish Culture',
						value: '550',
					},
					{
						name: '551 - Small Business',
						value: '551',
					},
					{
						name: '552 - MLM & Business Opportunities',
						value: '552',
					},
					{
						name: '554 - Extreme Sports',
						value: '554',
					},
					{
						name: '555 - Visa & Immigration',
						value: '555',
					},
					{
						name: '556 - Arabs & Middle Easterners',
						value: '556',
					},
					{
						name: '557 - Massage Therapy',
						value: '557',
					},
					{
						name: '558 - OBGYN',
						value: '558',
					},
					{
						name: '559 - Heart & Hypertension',
						value: '559',
					},
					{
						name: '56 - Ethnic & Identity Groups',
						value: '56',
					},
					{
						name: '560 - Non-Alcoholic Beverages',
						value: '560',
					},
					{
						name: '563 - Pets',
						value: '563',
					},
					{
						name: '565 - Poetry',
						value: '565',
					},
					{
						name: '566 - Textiles & Nonwovens',
						value: '566',
					},
					{
						name: '567 - Technical Support',
						value: '567',
					},
					{
						name: '568 - Equestrian',
						value: '568',
					},
					{
						name: '569 - Events & Listings',
						value: '569',
					},
					{
						name: '57 - Charity & Philanthropy',
						value: '57',
					},
					{
						name: '571 - Eating Disorders',
						value: '571',
					},
					{
						name: '572 - Local News',
						value: '572',
					},
					{
						name: '573 - Camera & Photo Equipment',
						value: '573',
					},
					{
						name: '574 - Stock Photography',
						value: '574',
					},
					{
						name: '575 - Webcams & Virtual Tours',
						value: '575',
					},
					{
						name: '576 - Photo & Video Services',
						value: '576',
					},
					{
						name: '577 - Photo & Video Software',
						value: '577',
					},
					{
						name: '578 - Skins Themes & Wallpapers',
						value: '578',
					},
					{
						name: '579 - Africans & Diaspora',
						value: '579',
					},
					{
						name: '58 - Parenting',
						value: '58',
					},
					{
						name: '580 - Southeast Asians & Pacific Islanders',
						value: '580',
					},
					{
						name: '581 - Dance',
						value: '581',
					},
					{
						name: '582 - Online Journals & Personal Sites',
						value: '582',
					},
					{
						name: '585 - Christian & Gospel Music',
						value: '585',
					},
					{
						name: '586 - Classical Music',
						value: '586',
					},
					{
						name: '587 - Country Music',
						value: '587',
					},
					{
						name: '588 - Dance & Electronic Music',
						value: '588',
					},
					{
						name: '589 - Jazz & Blues',
						value: '589',
					},
					{
						name: '59 - Religion & Belief',
						value: '59',
					},
					{
						name: '590 - Rock Music',
						value: '590',
					},
					{
						name: '591 - Latin American Music',
						value: '591',
					},
					{
						name: '592 - Urban & Hip-Hop',
						value: '592',
					},
					{
						name: '593 - World Music',
						value: '593',
					},
					{
						name: '60 - Jobs',
						value: '60',
					},
					{
						name: '606 - Metals & Mining',
						value: '606',
					},
					{
						name: '607 - Exotic Pets',
						value: '607',
					},
					{
						name: '608 - E-Books',
						value: '608',
					},
					{
						name: '609 - Myth & Folklore',
						value: '609',
					},
					{
						name: '61 - Classifieds',
						value: '61',
					},
					{
						name: '610 - Trucks & SUVs',
						value: '610',
					},
					{
						name: '611 - Yoga & Pilates',
						value: '611',
					},
					{
						name: '612 - Entertainment Industry',
						value: '612',
					},
					{
						name: '613 - Online Media',
						value: '613',
					},
					{
						name: '614 - Ticket Sales',
						value: '614',
					},
					{
						name: '615 - Horror Films',
						value: '615',
					},
					{
						name: '616 - Science Fiction & Fantasy Films',
						value: '616',
					},
					{
						name: '617 - Song Lyrics & Tabs',
						value: '617',
					},
					{
						name: '618 - Vocals & Show Tunes',
						value: '618',
					},
					{
						name: '619 - Retirement & Pension',
						value: '619',
					},
					{
						name: '620 - Risk Management',
						value: '620',
					},
					{
						name: '621 - Food Production',
						value: '621',
					},
					{
						name: '622 - Roleplaying Games',
						value: '622',
					},
					{
						name: '623 - Aging & Geriatrics',
						value: '623',
					},
					{
						name: '624 - Alzheimer\'s Disease',
						value: '624',
					},
					{
						name: '625 - AIDS & HIV',
						value: '625',
					},
					{
						name: '626 - Allergies',
						value: '626',
					},
					{
						name: '627 - Asthma',
						value: '627',
					},
					{
						name: '628 - Arthritis',
						value: '628',
					},
					{
						name: '629 - Cold & Flu',
						value: '629',
					},
					{
						name: '63 - Weather',
						value: '63',
					},
					{
						name: '630 - Diabetes',
						value: '630',
					},
					{
						name: '631 - Headaches & Migraines',
						value: '631',
					},
					{
						name: '632 - Infectious Diseases',
						value: '632',
					},
					{
						name: '633 - Sleep Disorders',
						value: '633',
					},
					{
						name: '634 - Doctors\' Offices',
						value: '634',
					},
					{
						name: '635 - Medical Procedures',
						value: '635',
					},
					{
						name: '636 - Men\'s Health',
						value: '636',
					},
					{
						name: '638 - GERD & Digestive Disorders',
						value: '638',
					},
					{
						name: '639 - Anxiety & Stress',
						value: '639',
					},
					{
						name: '64 - Antiques & Collectibles',
						value: '64',
					},
					{
						name: '640 - Depression',
						value: '640',
					},
					{
						name: '641 - Learning & Developmental Disabilities',
						value: '641',
					},
					{
						name: '642 - ADD & ADHD',
						value: '642',
					},
					{
						name: '643 - Cholesterol Issues',
						value: '643',
					},
					{
						name: '644 - Occupational Health & Safety',
						value: '644',
					},
					{
						name: '645 - Pediatrics',
						value: '645',
					},
					{
						name: '646 - Drugs & Medications',
						value: '646',
					},
					{
						name: '647 - Infertility',
						value: '647',
					},
					{
						name: '648 - Women\'s Health',
						value: '648',
					},
					{
						name: '649 - Assisted Living & Long Term Care',
						value: '649',
					},
					{
						name: '65 - Hobbies & Leisure',
						value: '65',
					},
					{
						name: '650 - Building Materials & Supplies',
						value: '650',
					},
					{
						name: '651 - Civil Engineering',
						value: '651',
					},
					{
						name: '652 - Construction Consulting & Contracting',
						value: '652',
					},
					{
						name: '653 - Design',
						value: '653',
					},
					{
						name: '654 - Graphic Design',
						value: '654',
					},
					{
						name: '655 - Industrial & Product Design',
						value: '655',
					},
					{
						name: '656 - Interior Design',
						value: '656',
					},
					{
						name: '657 - Renewable & Alternative Energy',
						value: '657',
					},
					{
						name: '658 - Electricity',
						value: '658',
					},
					{
						name: '659 - Oil & Gas',
						value: '659',
					},
					{
						name: '66 - Pets & Animals',
						value: '66',
					},
					{
						name: '660 - Waste Management',
						value: '660',
					},
					{
						name: '661 - Factory Automation',
						value: '661',
					},
					{
						name: '662 - Aviation',
						value: '662',
					},
					{
						name: '663 - Couriers & Messengers',
						value: '663',
					},
					{
						name: '664 - Distribution & Logistics',
						value: '664',
					},
					{
						name: '665 - Maritime Transport',
						value: '665',
					},
					{
						name: '666 - Rail Transport',
						value: '666',
					},
					{
						name: '667 - Urban Transport',
						value: '667',
					},
					{
						name: '668 - Space Technology',
						value: '668',
					},
					{
						name: '669 - Defense Industry',
						value: '669',
					},
					{
						name: '67 - Travel',
						value: '67',
					},
					{
						name: '670 - Agrochemicals',
						value: '670',
					},
					{
						name: '671 - Cleaning Agents',
						value: '671',
					},
					{
						name: '672 - Coatings & Adhesives',
						value: '672',
					},
					{
						name: '673 - Dyes & Pigments',
						value: '673',
					},
					{
						name: '674 - Plastics & Polymers',
						value: '674',
					},
					{
						name: '675 - Web Stats & Analytics',
						value: '675',
					},
					{
						name: '676 - Science Fiction & Fantasy',
						value: '676',
					},
					{
						name: '677 - Disabled & Special Needs',
						value: '677',
					},
					{
						name: '678 - Holidays & Seasonal Events',
						value: '678',
					},
					{
						name: '679 - Children\'s Interests',
						value: '679',
					},
					{
						name: '68 - Apparel',
						value: '68',
					},
					{
						name: '680 - Teen Interests',
						value: '680',
					},
					{
						name: '681 - Indigenous Peoples',
						value: '681',
					},
					{
						name: '682 - Eastern Europeans',
						value: '682',
					},
					{
						name: '683 - Western Europeans',
						value: '683',
					},
					{
						name: '685 - Traffic & Public Transit',
						value: '685',
					},
					{
						name: '686 - Urban & Regional Planning',
						value: '686',
					},
					{
						name: '687 - Property Development',
						value: '687',
					},
					{
						name: '688 - Outdoors',
						value: '688',
					},
					{
						name: '689 - Surf & Swim',
						value: '689',
					},
					{
						name: '69 - Consumer Resources',
						value: '69',
					},
					{
						name: '690 - Biographies & Quotations',
						value: '690',
					},
					{
						name: '691 - Calculators & Reference Tools',
						value: '691',
					},
					{
						name: '692 - Dictionaries & Encyclopedias',
						value: '692',
					},
					{
						name: '693 - Forms Guides & Templates',
						value: '693',
					},
					{
						name: '694 - How-To, DIY & Expert Content',
						value: '694',
					},
					{
						name: '695 - Time & Calendars',
						value: '695',
					},
					{
						name: '696 - Luxury Goods',
						value: '696',
					},
					{
						name: '697 - Footwear',
						value: '697',
					},
					{
						name: '699 - Volleyball',
						value: '699',
					},
					{
						name: '7 - Finance',
						value: '7',
					},
					{
						name: '70 - Gifts & Special Event Items',
						value: '70',
					},
					{
						name: '700 - Teaching & Classroom Resources',
						value: '700',
					},
					{
						name: '701 - Labor & Employment Law',
						value: '701',
					},
					{
						name: '702 - Royalty',
						value: '702',
					},
					{
						name: '703 - Work & Labor Issues',
						value: '703',
					},
					{
						name: '704 - Crime & Justice',
						value: '704',
					},
					{
						name: '705 - Security Products & Services',
						value: '705',
					},
					{
						name: '706 - Welfare & Unemployment',
						value: '706',
					},
					{
						name: '707 - Adventure Travel',
						value: '707',
					},
					{
						name: '708 - Bus & Rail',
						value: '708',
					},
					{
						name: '71 - Food & Drink',
						value: '71',
					},
					{
						name: '717 - Computer Components',
						value: '717',
					},
					{
						name: '718 - Outsourcing',
						value: '718',
					},
					{
						name: '719 - Physical Asset Management',
						value: '719',
					},
					{
						name: '720 - Quality Control & Tracking',
						value: '720',
					},
					{
						name: '721 - Business Process',
						value: '721',
					},
					{
						name: '722 - Strategic Planning',
						value: '722',
					},
					{
						name: '723 - Compensation & Benefits',
						value: '723',
					},
					{
						name: '724 - Payroll Services',
						value: '724',
					},
					{
						name: '725 - Writing & Editing Services',
						value: '725',
					},
					{
						name: '726 - Fire & Security Services',
						value: '726',
					},
					{
						name: '727 - Home Office',
						value: '727',
					},
					{
						name: '728 - Computer Servers',
						value: '728',
					},
					{
						name: '729 - Network Storage',
						value: '729',
					},
					{
						name: '73 - Mass Merchants & Department Stores',
						value: '73',
					},
					{
						name: '730 - Development Tools',
						value: '730',
					},
					{
						name: '731 - C & C++',
						value: '731',
					},
					{
						name: '732 - Java',
						value: '732',
					},
					{
						name: '733 - Scripting Languages',
						value: '733',
					},
					{
						name: '734 - Windows & .NET',
						value: '734',
					},
					{
						name: '735 - Mac OS',
						value: '735',
					},
					{
						name: '736 - Linux & Unix',
						value: '736',
					},
					{
						name: '737 - Windows OS',
						value: '737',
					},
					{
						name: '739 - Hardware Modding & Tuning',
						value: '739',
					},
					{
						name: '74 - Education',
						value: '74',
					},
					{
						name: '740 - Sound & Video Cards',
						value: '740',
					},
					{
						name: '741 - Chips & Processors',
						value: '741',
					},
					{
						name: '742 - Electronic Components',
						value: '742',
					},
					{
						name: '743 - Electromechanical Devices',
						value: '743',
					},
					{
						name: '744 - Optoelectronics & Fiber',
						value: '744',
					},
					{
						name: '745 - Power Supplies',
						value: '745',
					},
					{
						name: '746 - Test & Measurement',
						value: '746',
					},
					{
						name: '747 - Aquaculture',
						value: '747',
					},
					{
						name: '748 - Agricultural Equipment',
						value: '748',
					},
					{
						name: '749 - Crops & Seed',
						value: '749',
					},
					{
						name: '75 - Legal',
						value: '75',
					},
					{
						name: '750 - Forestry',
						value: '750',
					},
					{
						name: '751 - Horticulture',
						value: '751',
					},
					{
						name: '752 - Livestock',
						value: '752',
					},
					{
						name: '76 - Government',
						value: '76',
					},
					{
						name: '77 - Enterprise Technology',
						value: '77',
					},
					{
						name: '78 - Consumer Electronics',
						value: '78',
					},
					{
						name: '784 - Business News',
						value: '784',
					},
					{
						name: '785 - Technology News',
						value: '785',
					},
					{
						name: '786 - Paintball',
						value: '786',
					},
					{
						name: '787 - Radio Control & Modeling',
						value: '787',
					},
					{
						name: '788 - Anatomy',
						value: '788',
					},
					{
						name: '791 - Homeschooling',
						value: '791',
					},
					{
						name: '792 - Legal Education',
						value: '792',
					},
					{
						name: '793 - Veterans',
						value: '793',
					},
					{
						name: '794 - GPS & Navigation',
						value: '794',
					},
					{
						name: '799 - Business Education',
						value: '799',
					},
					{
						name: '8 - Games',
						value: '8',
					},
					{
						name: '800 - Knowledge Management',
						value: '800',
					},
					{
						name: '801 - Supply Chain Management',
						value: '801',
					},
					{
						name: '802 - Developer Jobs',
						value: '802',
					},
					{
						name: '803 - Vehicle Shows',
						value: '803',
					},
					{
						name: '804 - Educational Software',
						value: '804',
					},
					{
						name: '805 - Fonts',
						value: '805',
					},
					{
						name: '806 - Custom & Performance Vehicles',
						value: '806',
					},
					{
						name: '807 - Internet Software',
						value: '807',
					},
					{
						name: '808 - Content Management',
						value: '808',
					},
					{
						name: '809 - Podcasting',
						value: '809',
					},
					{
						name: '810 - Hybrid & Alternative Vehicles',
						value: '810',
					},
					{
						name: '811 - Credit Cards',
						value: '811',
					},
					{
						name: '812 - Debt Management',
						value: '812',
					},
					{
						name: '813 - College Financing',
						value: '813',
					},
					{
						name: '814 - Currencies & Foreign Exchange',
						value: '814',
					},
					{
						name: '815 - Vehicle Brands',
						value: '815',
					},
					{
						name: '816 - Restaurant Supply',
						value: '816',
					},
					{
						name: '817 - Injury',
						value: '817',
					},
					{
						name: '818 - Obesity',
						value: '818',
					},
					{
						name: '819 - Pain Management',
						value: '819',
					},
					{
						name: '82 - Environmental Issues',
						value: '82',
					},
					{
						name: '820 - Acura',
						value: '820',
					},
					{
						name: '821 - Audi',
						value: '821',
					},
					{
						name: '822 - BMW',
						value: '822',
					},
					{
						name: '823 - Cadillac',
						value: '823',
					},
					{
						name: '824 - Respiratory Conditions',
						value: '824',
					},
					{
						name: '825 - Vegetarian Cuisine',
						value: '825',
					},
					{
						name: '826 - Chevrolet',
						value: '826',
					},
					{
						name: '827 - Doors & Windows',
						value: '827',
					},
					{
						name: '828 - HVAC & Climate Control',
						value: '828',
					},
					{
						name: '829 - Nails Screws & Fasteners',
						value: '829',
					},
					{
						name: '83 - Marketing Services',
						value: '83',
					},
					{
						name: '830 - Plumbing Fixtures & Equipment',
						value: '830',
					},
					{
						name: '831 - Wood & Plastics',
						value: '831',
					},
					{
						name: '832 - Flooring',
						value: '832',
					},
					{
						name: '833 - Chrysler',
						value: '833',
					},
					{
						name: '834 - Citroën',
						value: '834',
					},
					{
						name: '835 - Generators',
						value: '835',
					},
					{
						name: '836 - Dodge',
						value: '836',
					},
					{
						name: '837 - Heavy Machinery',
						value: '837',
					},
					{
						name: '838 - Fiat',
						value: '838',
					},
					{
						name: '839 - Valves Hoses & Fittings',
						value: '839',
					},
					{
						name: '84 - Search Engine Optimization & Marketing',
						value: '84',
					},
					{
						name: '840 - Ford',
						value: '840',
					},
					{
						name: '841 - Retail Trade',
						value: '841',
					},
					{
						name: '842 - GMC',
						value: '842',
					},
					{
						name: '843 - Honda',
						value: '843',
					},
					{
						name: '844 - Retail Equipment & Technology',
						value: '844',
					},
					{
						name: '845 - Hyundai',
						value: '845',
					},
					{
						name: '846 - Jeep',
						value: '846',
					},
					{
						name: '847 - Social Network Apps & Add-Ons',
						value: '847',
					},
					{
						name: '848 - Kia',
						value: '848',
					},
					{
						name: '849 - Lexus',
						value: '849',
					},
					{
						name: '850 - Lincoln',
						value: '850',
					},
					{
						name: '851 - Mazda',
						value: '851',
					},
					{
						name: '852 - Mercedes-Benz',
						value: '852',
					},
					{
						name: '853 - Mercury',
						value: '853',
					},
					{
						name: '854 - Mitsubishi',
						value: '854',
					},
					{
						name: '855 - Nissan',
						value: '855',
					},
					{
						name: '856 - Peugeot',
						value: '856',
					},
					{
						name: '857 - Pontiac',
						value: '857',
					},
					{
						name: '858 - Porsche',
						value: '858',
					},
					{
						name: '859 - Renault-Samsung',
						value: '859',
					},
					{
						name: '860 - Saturn',
						value: '860',
					},
					{
						name: '861 - Subaru',
						value: '861',
					},
					{
						name: '862 - Buddhism',
						value: '862',
					},
					{
						name: '863 - Toyota',
						value: '863',
					},
					{
						name: '864 - Christianity',
						value: '864',
					},
					{
						name: '865 - Volkswagen',
						value: '865',
					},
					{
						name: '866 - Hinduism',
						value: '866',
					},
					{
						name: '867 - Volvo',
						value: '867',
					},
					{
						name: '868 - Islam',
						value: '868',
					},
					{
						name: '869 - Judaism',
						value: '869',
					},
					{
						name: '870 - Self-Help & Motivational',
						value: '870',
					},
					{
						name: '882 - Animal Products & Services',
						value: '882',
					},
					{
						name: '883 - Animal Welfare',
						value: '883',
					},
					{
						name: '884 - Birds',
						value: '884',
					},
					{
						name: '885 - Cats',
						value: '885',
					},
					{
						name: '886 - Dogs',
						value: '886',
					},
					{
						name: '887 - Fish & Aquaria',
						value: '887',
					},
					{
						name: '888 - Horses',
						value: '888',
					},
					{
						name: '889 - Rabbits & Rodents',
						value: '889',
					},
					{
						name: '89 - Vehicle Parts & Accessories',
						value: '89',
					},
					{
						name: '890 - Reptiles & Amphibians',
						value: '890',
					},
					{
						name: '891 - Concerts & Music Festivals',
						value: '891',
					},
					{
						name: '892 - Sheet Music',
						value: '892',
					},
					{
						name: '893 - Soundtracks',
						value: '893',
					},
					{
						name: '894 - Acting & Theater',
						value: '894',
					},
					{
						name: '895 - Live Comedy',
						value: '895',
					},
					{
						name: '896 - GM-Daewoo',
						value: '896',
					},
					{
						name: '897 - Saab',
						value: '897',
					},
					{
						name: '898 - Vauxhall-Opel',
						value: '898',
					},
					{
						name: '899 - Game Systems & Consoles',
						value: '899',
					},
					{
						name: '900 - Data Sheets & Electronics Reference',
						value: '900',
					},
					{
						name: '901 - Freeware & Shareware',
						value: '901',
					},
					{
						name: '902 - Proxying & Filtering',
						value: '902',
					},
					{
						name: '903 - Financial Planning',
						value: '903',
					},
					{
						name: '904 - Commodities & Futures Trading',
						value: '904',
					},
					{
						name: '905 - Venture Capital',
						value: '905',
					},
					{
						name: '906 - Candy & Sweets',
						value: '906',
					},
					{
						name: '907 - Baked Goods',
						value: '907',
					},
					{
						name: '908 - Fruits & Vegetables',
						value: '908',
					},
					{
						name: '909 - Meat & Seafood',
						value: '909',
					},
					{
						name: '91 - Stereo Systems & Components',
						value: '91',
					},
					{
						name: '910 - Soups & Stews',
						value: '910',
					},
					{
						name: '911 - World Cuisines',
						value: '911',
					},
					{
						name: '912 - Asian Cuisine',
						value: '912',
					},
					{
						name: '913 - Latin American Cuisine',
						value: '913',
					},
					{
						name: '914 - Mediterranean Cuisine',
						value: '914',
					},
					{
						name: '915 - North American Cuisine',
						value: '915',
					},
					{
						name: '916 - Coffee & Tea',
						value: '916',
					},
					{
						name: '917 - Dining Guides',
						value: '917',
					},
					{
						name: '918 - Fast Food',
						value: '918',
					},
					{
						name: '919 - Arcade & Coin-Op Games',
						value: '919',
					},
					{
						name: '920 - Board Games',
						value: '920',
					},
					{
						name: '921 - Chess & Abstract Strategy Games',
						value: '921',
					},
					{
						name: '922 - Miniatures & Wargaming',
						value: '922',
					},
					{
						name: '923 - Collectible Card Games',
						value: '923',
					},
					{
						name: '924 - Poker & Casino Games',
						value: '924',
					},
					{
						name: '925 - Adventure Games',
						value: '925',
					},
					{
						name: '926 - Casual Games',
						value: '926',
					},
					{
						name: '927 - Driving & Racing Games',
						value: '927',
					},
					{
						name: '928 - Fighting Games',
						value: '928',
					},
					{
						name: '929 - Music & Dance Games',
						value: '929',
					},
					{
						name: '93 - Skin & Nail Care',
						value: '93',
					},
					{
						name: '930 - Shooter Games',
						value: '930',
					},
					{
						name: '931 - Simulation Games',
						value: '931',
					},
					{
						name: '932 - Sports Games',
						value: '932',
					},
					{
						name: '933 - Strategy Games',
						value: '933',
					},
					{
						name: '935 - Massive Multiplayer',
						value: '935',
					},
					{
						name: '936 - Party Games',
						value: '936',
					},
					{
						name: '937 - Puzzles & Brainteasers',
						value: '937',
					},
					{
						name: '938 - Table Games',
						value: '938',
					},
					{
						name: '939 - Billiards',
						value: '939',
					},
					{
						name: '94 - Fitness',
						value: '94',
					},
					{
						name: '940 - Table Tennis',
						value: '940',
					},
					{
						name: '941 - Genetic Disorders',
						value: '941',
					},
					{
						name: '942 - Neurological Disorders',
						value: '942',
					},
					{
						name: '943 - Medical Tests & Exams',
						value: '943',
					},
					{
						name: '944 - Surgery',
						value: '944',
					},
					{
						name: '945 - Medical Photos & Illustration',
						value: '945',
					},
					{
						name: '946 - Poisons & Overdoses',
						value: '946',
					},
					{
						name: '947 - Public Health',
						value: '947',
					},
					{
						name: '948 - Bed & Bath',
						value: '948',
					},
					{
						name: '949 - Cleaning Supplies & Services',
						value: '949',
					},
					{
						name: '95 - Office Supplies',
						value: '95',
					},
					{
						name: '950 - Construction & Power Tools',
						value: '950',
					},
					{
						name: '951 - Kitchen & Dining',
						value: '951',
					},
					{
						name: '952 - Swimming Pools & Spas',
						value: '952',
					},
					{
						name: '953 - Yard & Patio',
						value: '953',
					},
					{
						name: '954 - Nuclear Energy',
						value: '954',
					},
					{
						name: '955 - Hospitality Industry',
						value: '955',
					},
					{
						name: '956 - Event Planning',
						value: '956',
					},
					{
						name: '957 - Food Service',
						value: '957',
					},
					{
						name: '958 - Jobs & Education',
						value: '958',
					},
					{
						name: '959 - Career Resources & Planning',
						value: '959',
					},
					{
						name: '96 - Real Estate Agencies',
						value: '96',
					},
					{
						name: '960 - Job Listings',
						value: '960',
					},
					{
						name: '961 - Resumes & Portfolios',
						value: '961',
					},
					{
						name: '962 - Embassies & Consulates',
						value: '962',
					},
					{
						name: '963 - Executive Branch',
						value: '963',
					},
					{
						name: '964 - Legislative Branch',
						value: '964',
					},
					{
						name: '965 - Multilateral Organizations',
						value: '965',
					},
					{
						name: '966 - State & Local Government',
						value: '966',
					},
					{
						name: '967 - Constitutional Law & Civil Rights',
						value: '967',
					},
					{
						name: '968 - Drunk Driving Law',
						value: '968',
					},
					{
						name: '969 - Legal Services',
						value: '969',
					},
					{
						name: '97 - Consumer Advocacy & Protection',
						value: '97',
					},
					{
						name: '970 - Product Liability',
						value: '970',
					},
					{
						name: '972 - Virtual Worlds',
						value: '972',
					},
					{
						name: '973 - Expatriate Communities',
						value: '973',
					},
					{
						name: '974 - Adoption',
						value: '974',
					},
					{
						name: '975 - Skeptics & Non-Believers',
						value: '975',
					},
					{
						name: '976 - Reproductive Rights',
						value: '976',
					},
					{
						name: '977 - Special Occasions',
						value: '977',
					},
					{
						name: '978 - Photo & Image Sharing',
						value: '978',
					},
					{
						name: '979 - Video Sharing',
						value: '979',
					},
					{
						name: '98 - Fashion Designers & Collections',
						value: '98',
					},
					{
						name: '980 - General Reference',
						value: '980',
					},
					{
						name: '981 - Flora & Fauna',
						value: '981',
					},
					{
						name: '982 - Genetics',
						value: '982',
					},
					{
						name: '983 - Athletic Apparel',
						value: '983',
					},
					{
						name: '984 - Casual Apparel',
						value: '984',
					},
					{
						name: '985 - Children\'s Clothing',
						value: '985',
					},
					{
						name: '986 - Handbags & Purses',
						value: '986',
					},
					{
						name: '987 - Watches',
						value: '987',
					},
					{
						name: '988 - Costumes',
						value: '988',
					},
					{
						name: '989 - Eyewear',
						value: '989',
					},
					{
						name: '99 - Gifts',
						value: '99',
					},
					{
						name: '990 - Formal Wear',
						value: '990',
					},
					{
						name: '991 - Headwear',
						value: '991',
					},
					{
						name: '992 - Men\'s Clothing',
						value: '992',
					},
					{
						name: '993 - Outerwear',
						value: '993',
					},
					{
						name: '994 - Sleepwear',
						value: '994',
					},
					{
						name: '995 - Swimwear',
						value: '995',
					},
					{
						name: '996 - Uniforms & Workwear',
						value: '996',
					},
					{
						name: '997 - Women\'s Clothing',
						value: '997',
					},
					{
						name: '998 - Fantasy Sports',
						value: '998',
					},
					{
						name: '999 - Recreational Aviation',
						value: '999',
					},
				],
			},
			{
				displayName: 'Google Property',
				name: 'gprop',
				type: 'options',
				default: '',
				description: 'Sorts results by a specific property. The default property is Web Search (applied when the gprop parameter is not set or empty).\n\nAvailable options:\n  - `images`: Image Search\n  - `news`: News Search\n  - `froogle`: Google Shopping\n  - `youtube`: YouTube Search\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: 'froogle - Google Shopping',
						value: 'froogle',
					},
					{
						name: 'images - Image Search',
						value: 'images',
					},
					{
						name: 'news - News Search',
						value: 'news',
					},
					{
						name: 'youtube - YouTube Search',
						value: 'youtube',
					},
				],
			},
			{
				displayName: 'Date Range',
				name: 'date',
				type: 'string',
				default: '',
				description: 'Defines a date range for the search. Available options:\n\n- `now 1-H`: Past hour\n- `now 4-H`: Past 4 hours\n- `now 1-d`: Past day\n- `now 7-d`: Past 7 days\n- `today 1-m`: Past 30 days\n- `today 3-m`: Past 90 days\n- `today 12-m`: Past 12 months\n- `today 5-y`: Past 5 years\n- `all`: 2004 - present\n\nYou can also specify a custom date range using one of the following formats:\n\n- `yyyy-mm-dd yyyy-mm-dd` - (e.g. 2021-10-15 2022-05-25) for dates from 2004 to present.\n- `yyyy-mm-ddThh yyyy-mm-ddThh` - (e.g. 2022-05-19T10 2022-05-24T22) for dates with hours within a week range. The hours will be calculated based on the tz (time zone) parameter.\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
			},
		],
	},
];
