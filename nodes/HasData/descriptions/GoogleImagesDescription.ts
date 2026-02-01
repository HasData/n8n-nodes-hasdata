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

export const googleImagesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_images'],
			},
		},
		options: [
			{
				name: 'Get Image Search Results',
				value: 'images',
				description: 'Retrieves structured Google image search results based on specified search terms and advanced filters.',
				action: 'Get Image Search Results',
			},
		],
		default: 'images',
	},
];

export const googleImagesFields: INodeProperties[] = [
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Search query term for retrieving image results.',
		displayOptions: {
			show: {
				resource: [
					'google_images',
				],
				operation: [
					'images',
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
					'google_images',
				],
				operation: [
					'images',
				],
			},
		},
		options: [
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Google canonical location for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
			},
			{
				displayName: 'Encoded Location',
				name: 'uule',
				type: 'string',
				default: '',
				description: 'The encoded location parameter.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'options',
				default: 'google.com',
				description: 'Google domain to use. Default is google.com.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
				options: [
					{
						name: 'google.ac',
						value: 'google.ac',
					},
					{
						name: 'google.ad',
						value: 'google.ad',
					},
					{
						name: 'google.ae',
						value: 'google.ae',
					},
					{
						name: 'google.al',
						value: 'google.al',
					},
					{
						name: 'google.am',
						value: 'google.am',
					},
					{
						name: 'google.as',
						value: 'google.as',
					},
					{
						name: 'google.at',
						value: 'google.at',
					},
					{
						name: 'google.az',
						value: 'google.az',
					},
					{
						name: 'google.ba',
						value: 'google.ba',
					},
					{
						name: 'google.be',
						value: 'google.be',
					},
					{
						name: 'google.bf',
						value: 'google.bf',
					},
					{
						name: 'google.bg',
						value: 'google.bg',
					},
					{
						name: 'google.bi',
						value: 'google.bi',
					},
					{
						name: 'google.bj',
						value: 'google.bj',
					},
					{
						name: 'google.bs',
						value: 'google.bs',
					},
					{
						name: 'google.bt',
						value: 'google.bt',
					},
					{
						name: 'google.by',
						value: 'google.by',
					},
					{
						name: 'google.ca',
						value: 'google.ca',
					},
					{
						name: 'google.cat',
						value: 'google.cat',
					},
					{
						name: 'google.cd',
						value: 'google.cd',
					},
					{
						name: 'google.cf',
						value: 'google.cf',
					},
					{
						name: 'google.cg',
						value: 'google.cg',
					},
					{
						name: 'google.ch',
						value: 'google.ch',
					},
					{
						name: 'google.ci',
						value: 'google.ci',
					},
					{
						name: 'google.cl',
						value: 'google.cl',
					},
					{
						name: 'google.cm',
						value: 'google.cm',
					},
					{
						name: 'google.cn',
						value: 'google.cn',
					},
					{
						name: 'google.co.ao',
						value: 'google.co.ao',
					},
					{
						name: 'google.co.bw',
						value: 'google.co.bw',
					},
					{
						name: 'google.co.ck',
						value: 'google.co.ck',
					},
					{
						name: 'google.co.cr',
						value: 'google.co.cr',
					},
					{
						name: 'google.co.id',
						value: 'google.co.id',
					},
					{
						name: 'google.co.il',
						value: 'google.co.il',
					},
					{
						name: 'google.co.in',
						value: 'google.co.in',
					},
					{
						name: 'google.co.jp',
						value: 'google.co.jp',
					},
					{
						name: 'google.co.ke',
						value: 'google.co.ke',
					},
					{
						name: 'google.co.kr',
						value: 'google.co.kr',
					},
					{
						name: 'google.co.ls',
						value: 'google.co.ls',
					},
					{
						name: 'google.co.ma',
						value: 'google.co.ma',
					},
					{
						name: 'google.co.mz',
						value: 'google.co.mz',
					},
					{
						name: 'google.co.nz',
						value: 'google.co.nz',
					},
					{
						name: 'google.co.th',
						value: 'google.co.th',
					},
					{
						name: 'google.co.tz',
						value: 'google.co.tz',
					},
					{
						name: 'google.co.ug',
						value: 'google.co.ug',
					},
					{
						name: 'google.co.uk',
						value: 'google.co.uk',
					},
					{
						name: 'google.co.uz',
						value: 'google.co.uz',
					},
					{
						name: 'google.co.ve',
						value: 'google.co.ve',
					},
					{
						name: 'google.co.vi',
						value: 'google.co.vi',
					},
					{
						name: 'google.co.za',
						value: 'google.co.za',
					},
					{
						name: 'google.co.zm',
						value: 'google.co.zm',
					},
					{
						name: 'google.co.zw',
						value: 'google.co.zw',
					},
					{
						name: 'google.com',
						value: 'google.com',
					},
					{
						name: 'google.com.af',
						value: 'google.com.af',
					},
					{
						name: 'google.com.ag',
						value: 'google.com.ag',
					},
					{
						name: 'google.com.ai',
						value: 'google.com.ai',
					},
					{
						name: 'google.com.ar',
						value: 'google.com.ar',
					},
					{
						name: 'google.com.au',
						value: 'google.com.au',
					},
					{
						name: 'google.com.bd',
						value: 'google.com.bd',
					},
					{
						name: 'google.com.bh',
						value: 'google.com.bh',
					},
					{
						name: 'google.com.bn',
						value: 'google.com.bn',
					},
					{
						name: 'google.com.bo',
						value: 'google.com.bo',
					},
					{
						name: 'google.com.br',
						value: 'google.com.br',
					},
					{
						name: 'google.com.bz',
						value: 'google.com.bz',
					},
					{
						name: 'google.com.co',
						value: 'google.com.co',
					},
					{
						name: 'google.com.cu',
						value: 'google.com.cu',
					},
					{
						name: 'google.com.cy',
						value: 'google.com.cy',
					},
					{
						name: 'google.com.do',
						value: 'google.com.do',
					},
					{
						name: 'google.com.ec',
						value: 'google.com.ec',
					},
					{
						name: 'google.com.eg',
						value: 'google.com.eg',
					},
					{
						name: 'google.com.et',
						value: 'google.com.et',
					},
					{
						name: 'google.com.fj',
						value: 'google.com.fj',
					},
					{
						name: 'google.com.gh',
						value: 'google.com.gh',
					},
					{
						name: 'google.com.gi',
						value: 'google.com.gi',
					},
					{
						name: 'google.com.gt',
						value: 'google.com.gt',
					},
					{
						name: 'google.com.hk',
						value: 'google.com.hk',
					},
					{
						name: 'google.com.jm',
						value: 'google.com.jm',
					},
					{
						name: 'google.com.kh',
						value: 'google.com.kh',
					},
					{
						name: 'google.com.kw',
						value: 'google.com.kw',
					},
					{
						name: 'google.com.lb',
						value: 'google.com.lb',
					},
					{
						name: 'google.com.ly',
						value: 'google.com.ly',
					},
					{
						name: 'google.com.mm',
						value: 'google.com.mm',
					},
					{
						name: 'google.com.mt',
						value: 'google.com.mt',
					},
					{
						name: 'google.com.mx',
						value: 'google.com.mx',
					},
					{
						name: 'google.com.my',
						value: 'google.com.my',
					},
					{
						name: 'google.com.na',
						value: 'google.com.na',
					},
					{
						name: 'google.com.nf',
						value: 'google.com.nf',
					},
					{
						name: 'google.com.ng',
						value: 'google.com.ng',
					},
					{
						name: 'google.com.ni',
						value: 'google.com.ni',
					},
					{
						name: 'google.com.np',
						value: 'google.com.np',
					},
					{
						name: 'google.com.om',
						value: 'google.com.om',
					},
					{
						name: 'google.com.pa',
						value: 'google.com.pa',
					},
					{
						name: 'google.com.pe',
						value: 'google.com.pe',
					},
					{
						name: 'google.com.pg',
						value: 'google.com.pg',
					},
					{
						name: 'google.com.ph',
						value: 'google.com.ph',
					},
					{
						name: 'google.com.pk',
						value: 'google.com.pk',
					},
					{
						name: 'google.com.pr',
						value: 'google.com.pr',
					},
					{
						name: 'google.com.py',
						value: 'google.com.py',
					},
					{
						name: 'google.com.qa',
						value: 'google.com.qa',
					},
					{
						name: 'google.com.sa',
						value: 'google.com.sa',
					},
					{
						name: 'google.com.sb',
						value: 'google.com.sb',
					},
					{
						name: 'google.com.sg',
						value: 'google.com.sg',
					},
					{
						name: 'google.com.sl',
						value: 'google.com.sl',
					},
					{
						name: 'google.com.sv',
						value: 'google.com.sv',
					},
					{
						name: 'google.com.tj',
						value: 'google.com.tj',
					},
					{
						name: 'google.com.tr',
						value: 'google.com.tr',
					},
					{
						name: 'google.com.tw',
						value: 'google.com.tw',
					},
					{
						name: 'google.com.ua',
						value: 'google.com.ua',
					},
					{
						name: 'google.com.uy',
						value: 'google.com.uy',
					},
					{
						name: 'google.com.vc',
						value: 'google.com.vc',
					},
					{
						name: 'google.com.vn',
						value: 'google.com.vn',
					},
					{
						name: 'google.cv',
						value: 'google.cv',
					},
					{
						name: 'google.cz',
						value: 'google.cz',
					},
					{
						name: 'google.de',
						value: 'google.de',
					},
					{
						name: 'google.dj',
						value: 'google.dj',
					},
					{
						name: 'google.dk',
						value: 'google.dk',
					},
					{
						name: 'google.dm',
						value: 'google.dm',
					},
					{
						name: 'google.dz',
						value: 'google.dz',
					},
					{
						name: 'google.ee',
						value: 'google.ee',
					},
					{
						name: 'google.es',
						value: 'google.es',
					},
					{
						name: 'google.fi',
						value: 'google.fi',
					},
					{
						name: 'google.fm',
						value: 'google.fm',
					},
					{
						name: 'google.fr',
						value: 'google.fr',
					},
					{
						name: 'google.ga',
						value: 'google.ga',
					},
					{
						name: 'google.ge',
						value: 'google.ge',
					},
					{
						name: 'google.gg',
						value: 'google.gg',
					},
					{
						name: 'google.gl',
						value: 'google.gl',
					},
					{
						name: 'google.gm',
						value: 'google.gm',
					},
					{
						name: 'google.gp',
						value: 'google.gp',
					},
					{
						name: 'google.gr',
						value: 'google.gr',
					},
					{
						name: 'google.gy',
						value: 'google.gy',
					},
					{
						name: 'google.hn',
						value: 'google.hn',
					},
					{
						name: 'google.hr',
						value: 'google.hr',
					},
					{
						name: 'google.ht',
						value: 'google.ht',
					},
					{
						name: 'google.hu',
						value: 'google.hu',
					},
					{
						name: 'google.ie',
						value: 'google.ie',
					},
					{
						name: 'google.im',
						value: 'google.im',
					},
					{
						name: 'google.iq',
						value: 'google.iq',
					},
					{
						name: 'google.is',
						value: 'google.is',
					},
					{
						name: 'google.it',
						value: 'google.it',
					},
					{
						name: 'google.je',
						value: 'google.je',
					},
					{
						name: 'google.jo',
						value: 'google.jo',
					},
					{
						name: 'google.kg',
						value: 'google.kg',
					},
					{
						name: 'google.ki',
						value: 'google.ki',
					},
					{
						name: 'google.kz',
						value: 'google.kz',
					},
					{
						name: 'google.la',
						value: 'google.la',
					},
					{
						name: 'google.li',
						value: 'google.li',
					},
					{
						name: 'google.lk',
						value: 'google.lk',
					},
					{
						name: 'google.lt',
						value: 'google.lt',
					},
					{
						name: 'google.lu',
						value: 'google.lu',
					},
					{
						name: 'google.lv',
						value: 'google.lv',
					},
					{
						name: 'google.md',
						value: 'google.md',
					},
					{
						name: 'google.me',
						value: 'google.me',
					},
					{
						name: 'google.mg',
						value: 'google.mg',
					},
					{
						name: 'google.mk',
						value: 'google.mk',
					},
					{
						name: 'google.ml',
						value: 'google.ml',
					},
					{
						name: 'google.mn',
						value: 'google.mn',
					},
					{
						name: 'google.ms',
						value: 'google.ms',
					},
					{
						name: 'google.mu',
						value: 'google.mu',
					},
					{
						name: 'google.mv',
						value: 'google.mv',
					},
					{
						name: 'google.mw',
						value: 'google.mw',
					},
					{
						name: 'google.ne',
						value: 'google.ne',
					},
					{
						name: 'google.ng',
						value: 'google.ng',
					},
					{
						name: 'google.nl',
						value: 'google.nl',
					},
					{
						name: 'google.no',
						value: 'google.no',
					},
					{
						name: 'google.nr',
						value: 'google.nr',
					},
					{
						name: 'google.nu',
						value: 'google.nu',
					},
					{
						name: 'google.pl',
						value: 'google.pl',
					},
					{
						name: 'google.pn',
						value: 'google.pn',
					},
					{
						name: 'google.ps',
						value: 'google.ps',
					},
					{
						name: 'google.pt',
						value: 'google.pt',
					},
					{
						name: 'google.ro',
						value: 'google.ro',
					},
					{
						name: 'google.rs',
						value: 'google.rs',
					},
					{
						name: 'google.ru',
						value: 'google.ru',
					},
					{
						name: 'google.rw',
						value: 'google.rw',
					},
					{
						name: 'google.sc',
						value: 'google.sc',
					},
					{
						name: 'google.se',
						value: 'google.se',
					},
					{
						name: 'google.sh',
						value: 'google.sh',
					},
					{
						name: 'google.si',
						value: 'google.si',
					},
					{
						name: 'google.sk',
						value: 'google.sk',
					},
					{
						name: 'google.sm',
						value: 'google.sm',
					},
					{
						name: 'google.sn',
						value: 'google.sn',
					},
					{
						name: 'google.so',
						value: 'google.so',
					},
					{
						name: 'google.sr',
						value: 'google.sr',
					},
					{
						name: 'google.st',
						value: 'google.st',
					},
					{
						name: 'google.td',
						value: 'google.td',
					},
					{
						name: 'google.tg',
						value: 'google.tg',
					},
					{
						name: 'google.tk',
						value: 'google.tk',
					},
					{
						name: 'google.tl',
						value: 'google.tl',
					},
					{
						name: 'google.tm',
						value: 'google.tm',
					},
					{
						name: 'google.tn',
						value: 'google.tn',
					},
					{
						name: 'google.to',
						value: 'google.to',
					},
					{
						name: 'google.tt',
						value: 'google.tt',
					},
					{
						name: 'google.vg',
						value: 'google.vg',
					},
					{
						name: 'google.vu',
						value: 'google.vu',
					},
					{
						name: 'google.ws',
						value: 'google.ws',
					},
				],
			},
			{
				displayName: 'Country',
				name: 'gl',
				type: 'options',
				default: 'us',
				description: 'The two-letter country code for the country you want to limit the search to.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
				options: [
					{
						name: 'ac - Ascension Island',
						value: 'ac',
					},
					{
						name: 'ad - Andorra',
						value: 'ad',
					},
					{
						name: 'ae - United Arab Emirates',
						value: 'ae',
					},
					{
						name: 'af - Afghanistan',
						value: 'af',
					},
					{
						name: 'ag - Antigua and Barbuda',
						value: 'ag',
					},
					{
						name: 'ai - Anguilla',
						value: 'ai',
					},
					{
						name: 'al - Albania',
						value: 'al',
					},
					{
						name: 'am - Armenia',
						value: 'am',
					},
					{
						name: 'an - Netherlands Antilles',
						value: 'an',
					},
					{
						name: 'ao - Angola',
						value: 'ao',
					},
					{
						name: 'aq - Antarctica',
						value: 'aq',
					},
					{
						name: 'ar - Argentina',
						value: 'ar',
					},
					{
						name: 'as - American Samoa',
						value: 'as',
					},
					{
						name: 'at - Austria',
						value: 'at',
					},
					{
						name: 'au - Australia',
						value: 'au',
					},
					{
						name: 'aw - Aruba',
						value: 'aw',
					},
					{
						name: 'az - Azerbaijan',
						value: 'az',
					},
					{
						name: 'ba - Bosnia and Herzegovina',
						value: 'ba',
					},
					{
						name: 'bb - Barbados',
						value: 'bb',
					},
					{
						name: 'bd - Bangladesh',
						value: 'bd',
					},
					{
						name: 'be - Belgium',
						value: 'be',
					},
					{
						name: 'bf - Burkina Faso',
						value: 'bf',
					},
					{
						name: 'bg - Bulgaria',
						value: 'bg',
					},
					{
						name: 'bh - Bahrain',
						value: 'bh',
					},
					{
						name: 'bi - Burundi',
						value: 'bi',
					},
					{
						name: 'bj - Benin',
						value: 'bj',
					},
					{
						name: 'bm - Bermuda',
						value: 'bm',
					},
					{
						name: 'bn - Brunei Darussalam',
						value: 'bn',
					},
					{
						name: 'bo - Bolivia',
						value: 'bo',
					},
					{
						name: 'br - Brazil',
						value: 'br',
					},
					{
						name: 'bs - Bahamas',
						value: 'bs',
					},
					{
						name: 'bt - Bhutan',
						value: 'bt',
					},
					{
						name: 'bv - Bouvet Island',
						value: 'bv',
					},
					{
						name: 'bw - Botswana',
						value: 'bw',
					},
					{
						name: 'by - Belarus',
						value: 'by',
					},
					{
						name: 'bz - Belize',
						value: 'bz',
					},
					{
						name: 'ca - Canada',
						value: 'ca',
					},
					{
						name: 'cc - Cocos (Keeling) Islands',
						value: 'cc',
					},
					{
						name: 'cd - Congo, the Democratic Republic of the',
						value: 'cd',
					},
					{
						name: 'cf - Central African Republic',
						value: 'cf',
					},
					{
						name: 'cg - Congo',
						value: 'cg',
					},
					{
						name: 'ch - Switzerland',
						value: 'ch',
					},
					{
						name: 'ci - Cote D\'ivoire',
						value: 'ci',
					},
					{
						name: 'ck - Cook Islands',
						value: 'ck',
					},
					{
						name: 'cl - Chile',
						value: 'cl',
					},
					{
						name: 'cm - Cameroon',
						value: 'cm',
					},
					{
						name: 'cn - China',
						value: 'cn',
					},
					{
						name: 'co - Colombia',
						value: 'co',
					},
					{
						name: 'cr - Costa Rica',
						value: 'cr',
					},
					{
						name: 'cu - Cuba',
						value: 'cu',
					},
					{
						name: 'cv - Cape Verde',
						value: 'cv',
					},
					{
						name: 'cx - Christmas Island',
						value: 'cx',
					},
					{
						name: 'cy - Cyprus',
						value: 'cy',
					},
					{
						name: 'cz - Czech Republic',
						value: 'cz',
					},
					{
						name: 'de - Germany',
						value: 'de',
					},
					{
						name: 'dj - Djibouti',
						value: 'dj',
					},
					{
						name: 'dk - Denmark',
						value: 'dk',
					},
					{
						name: 'dm - Dominica',
						value: 'dm',
					},
					{
						name: 'do - Dominican Republic',
						value: 'do',
					},
					{
						name: 'dz - Algeria',
						value: 'dz',
					},
					{
						name: 'ec - Ecuador',
						value: 'ec',
					},
					{
						name: 'ee - Estonia',
						value: 'ee',
					},
					{
						name: 'eg - Egypt',
						value: 'eg',
					},
					{
						name: 'eh - Western Sahara',
						value: 'eh',
					},
					{
						name: 'er - Eritrea',
						value: 'er',
					},
					{
						name: 'es - Spain',
						value: 'es',
					},
					{
						name: 'et - Ethiopia',
						value: 'et',
					},
					{
						name: 'fi - Finland',
						value: 'fi',
					},
					{
						name: 'fj - Fiji',
						value: 'fj',
					},
					{
						name: 'fk - Falkland Islands (Malvinas)',
						value: 'fk',
					},
					{
						name: 'fm - Micronesia, Federated States of',
						value: 'fm',
					},
					{
						name: 'fo - Faroe Islands',
						value: 'fo',
					},
					{
						name: 'fr - France',
						value: 'fr',
					},
					{
						name: 'ga - Gabon',
						value: 'ga',
					},
					{
						name: 'gb - United Kingdom',
						value: 'gb',
					},
					{
						name: 'gd - Grenada',
						value: 'gd',
					},
					{
						name: 'ge - Georgia',
						value: 'ge',
					},
					{
						name: 'gf - French Guiana',
						value: 'gf',
					},
					{
						name: 'gg - Guernsey',
						value: 'gg',
					},
					{
						name: 'gh - Ghana',
						value: 'gh',
					},
					{
						name: 'gi - Gibraltar',
						value: 'gi',
					},
					{
						name: 'gl - Greenland',
						value: 'gl',
					},
					{
						name: 'gm - Gambia',
						value: 'gm',
					},
					{
						name: 'gn - Guinea',
						value: 'gn',
					},
					{
						name: 'gp - Guadeloupe',
						value: 'gp',
					},
					{
						name: 'gq - Equatorial Guinea',
						value: 'gq',
					},
					{
						name: 'gr - Greece',
						value: 'gr',
					},
					{
						name: 'gs - South Georgia and the South Sandwich Islands',
						value: 'gs',
					},
					{
						name: 'gt - Guatemala',
						value: 'gt',
					},
					{
						name: 'gu - Guam',
						value: 'gu',
					},
					{
						name: 'gw - Guinea-Bissau',
						value: 'gw',
					},
					{
						name: 'gy - Guyana',
						value: 'gy',
					},
					{
						name: 'hk - Hong Kong',
						value: 'hk',
					},
					{
						name: 'hm - Heard Island and Mcdonald Islands',
						value: 'hm',
					},
					{
						name: 'hn - Honduras',
						value: 'hn',
					},
					{
						name: 'hr - Croatia',
						value: 'hr',
					},
					{
						name: 'ht - Haiti',
						value: 'ht',
					},
					{
						name: 'hu - Hungary',
						value: 'hu',
					},
					{
						name: 'id - Indonesia',
						value: 'id',
					},
					{
						name: 'ie - Ireland',
						value: 'ie',
					},
					{
						name: 'il - Israel',
						value: 'il',
					},
					{
						name: 'im - Isle of Man',
						value: 'im',
					},
					{
						name: 'in - India',
						value: 'in',
					},
					{
						name: 'io - British Indian Ocean Territory',
						value: 'io',
					},
					{
						name: 'iq - Iraq',
						value: 'iq',
					},
					{
						name: 'ir - Iran, Islamic Republic of',
						value: 'ir',
					},
					{
						name: 'is - Iceland',
						value: 'is',
					},
					{
						name: 'it - Italy',
						value: 'it',
					},
					{
						name: 'je - Jersey',
						value: 'je',
					},
					{
						name: 'jm - Jamaica',
						value: 'jm',
					},
					{
						name: 'jo - Jordan',
						value: 'jo',
					},
					{
						name: 'jp - Japan',
						value: 'jp',
					},
					{
						name: 'ke - Kenya',
						value: 'ke',
					},
					{
						name: 'kg - Kyrgyzstan',
						value: 'kg',
					},
					{
						name: 'kh - Cambodia',
						value: 'kh',
					},
					{
						name: 'ki - Kiribati',
						value: 'ki',
					},
					{
						name: 'km - Comoros',
						value: 'km',
					},
					{
						name: 'kn - Saint Kitts and Nevis',
						value: 'kn',
					},
					{
						name: 'kp - Korea, Democratic People\'s Republic of',
						value: 'kp',
					},
					{
						name: 'kr - Korea, Republic of',
						value: 'kr',
					},
					{
						name: 'kw - Kuwait',
						value: 'kw',
					},
					{
						name: 'ky - Cayman Islands',
						value: 'ky',
					},
					{
						name: 'kz - Kazakhstan',
						value: 'kz',
					},
					{
						name: 'la - Lao People\'s Democratic Republic',
						value: 'la',
					},
					{
						name: 'lb - Lebanon',
						value: 'lb',
					},
					{
						name: 'lc - Saint Lucia',
						value: 'lc',
					},
					{
						name: 'li - Liechtenstein',
						value: 'li',
					},
					{
						name: 'lk - Sri Lanka',
						value: 'lk',
					},
					{
						name: 'lr - Liberia',
						value: 'lr',
					},
					{
						name: 'ls - Lesotho',
						value: 'ls',
					},
					{
						name: 'lt - Lithuania',
						value: 'lt',
					},
					{
						name: 'lu - Luxembourg',
						value: 'lu',
					},
					{
						name: 'lv - Latvia',
						value: 'lv',
					},
					{
						name: 'ly - Libyan Arab Jamahiriya',
						value: 'ly',
					},
					{
						name: 'ma - Morocco',
						value: 'ma',
					},
					{
						name: 'mc - Monaco',
						value: 'mc',
					},
					{
						name: 'md - Moldova, Republic of',
						value: 'md',
					},
					{
						name: 'me - Montenegro',
						value: 'me',
					},
					{
						name: 'mg - Madagascar',
						value: 'mg',
					},
					{
						name: 'mh - Marshall Islands',
						value: 'mh',
					},
					{
						name: 'mk - Macedonia, the Former Yugoslav Republic of',
						value: 'mk',
					},
					{
						name: 'ml - Mali',
						value: 'ml',
					},
					{
						name: 'mm - Myanmar',
						value: 'mm',
					},
					{
						name: 'mn - Mongolia',
						value: 'mn',
					},
					{
						name: 'mo - Macao',
						value: 'mo',
					},
					{
						name: 'mp - Northern Mariana Islands',
						value: 'mp',
					},
					{
						name: 'mq - Martinique',
						value: 'mq',
					},
					{
						name: 'mr - Mauritania',
						value: 'mr',
					},
					{
						name: 'ms - Montserrat',
						value: 'ms',
					},
					{
						name: 'mt - Malta',
						value: 'mt',
					},
					{
						name: 'mu - Mauritius',
						value: 'mu',
					},
					{
						name: 'mv - Maldives',
						value: 'mv',
					},
					{
						name: 'mw - Malawi',
						value: 'mw',
					},
					{
						name: 'mx - Mexico',
						value: 'mx',
					},
					{
						name: 'my - Malaysia',
						value: 'my',
					},
					{
						name: 'mz - Mozambique',
						value: 'mz',
					},
					{
						name: 'na - Namibia',
						value: 'na',
					},
					{
						name: 'nc - New Caledonia',
						value: 'nc',
					},
					{
						name: 'ne - Niger',
						value: 'ne',
					},
					{
						name: 'nf - Norfolk Island',
						value: 'nf',
					},
					{
						name: 'ng - Nigeria',
						value: 'ng',
					},
					{
						name: 'ni - Nicaragua',
						value: 'ni',
					},
					{
						name: 'nl - Netherlands',
						value: 'nl',
					},
					{
						name: 'no - Norway',
						value: 'no',
					},
					{
						name: 'np - Nepal',
						value: 'np',
					},
					{
						name: 'nr - Nauru',
						value: 'nr',
					},
					{
						name: 'nu - Niue',
						value: 'nu',
					},
					{
						name: 'nz - New Zealand',
						value: 'nz',
					},
					{
						name: 'om - Oman',
						value: 'om',
					},
					{
						name: 'pa - Panama',
						value: 'pa',
					},
					{
						name: 'pe - Peru',
						value: 'pe',
					},
					{
						name: 'pf - French Polynesia',
						value: 'pf',
					},
					{
						name: 'pg - Papua New Guinea',
						value: 'pg',
					},
					{
						name: 'ph - Philippines',
						value: 'ph',
					},
					{
						name: 'pk - Pakistan',
						value: 'pk',
					},
					{
						name: 'pl - Poland',
						value: 'pl',
					},
					{
						name: 'pm - Saint Pierre and Miquelon',
						value: 'pm',
					},
					{
						name: 'pn - Pitcairn',
						value: 'pn',
					},
					{
						name: 'pr - Puerto Rico',
						value: 'pr',
					},
					{
						name: 'ps - Palestinian Territory, Occupied',
						value: 'ps',
					},
					{
						name: 'pt - Portugal',
						value: 'pt',
					},
					{
						name: 'pw - Palau',
						value: 'pw',
					},
					{
						name: 'py - Paraguay',
						value: 'py',
					},
					{
						name: 'qa - Qatar',
						value: 'qa',
					},
					{
						name: 're - Reunion',
						value: 're',
					},
					{
						name: 'ro - Romania',
						value: 'ro',
					},
					{
						name: 'rs - Serbia and Montenegro',
						value: 'rs',
					},
					{
						name: 'ru - Russian Federation',
						value: 'ru',
					},
					{
						name: 'rw - Rwanda',
						value: 'rw',
					},
					{
						name: 'sa - Saudi Arabia',
						value: 'sa',
					},
					{
						name: 'sb - Solomon Islands',
						value: 'sb',
					},
					{
						name: 'sc - Seychelles',
						value: 'sc',
					},
					{
						name: 'sd - Sudan',
						value: 'sd',
					},
					{
						name: 'se - Sweden',
						value: 'se',
					},
					{
						name: 'sg - Singapore',
						value: 'sg',
					},
					{
						name: 'sh - Saint Helena',
						value: 'sh',
					},
					{
						name: 'si - Slovenia',
						value: 'si',
					},
					{
						name: 'sj - Svalbard and Jan Mayen',
						value: 'sj',
					},
					{
						name: 'sk - Slovakia',
						value: 'sk',
					},
					{
						name: 'sl - Sierra Leone',
						value: 'sl',
					},
					{
						name: 'sm - San Marino',
						value: 'sm',
					},
					{
						name: 'sn - Senegal',
						value: 'sn',
					},
					{
						name: 'so - Somalia',
						value: 'so',
					},
					{
						name: 'sr - Suriname',
						value: 'sr',
					},
					{
						name: 'st - Sao Tome and Principe',
						value: 'st',
					},
					{
						name: 'sv - El Salvador',
						value: 'sv',
					},
					{
						name: 'sy - Syrian Arab Republic',
						value: 'sy',
					},
					{
						name: 'sz - Swaziland',
						value: 'sz',
					},
					{
						name: 'tc - Turks and Caicos Islands',
						value: 'tc',
					},
					{
						name: 'td - Chad',
						value: 'td',
					},
					{
						name: 'tf - French Southern Territories',
						value: 'tf',
					},
					{
						name: 'tg - Togo',
						value: 'tg',
					},
					{
						name: 'th - Thailand',
						value: 'th',
					},
					{
						name: 'tj - Tajikistan',
						value: 'tj',
					},
					{
						name: 'tk - Tokelau',
						value: 'tk',
					},
					{
						name: 'tl - Timor-Leste',
						value: 'tl',
					},
					{
						name: 'tm - Turkmenistan',
						value: 'tm',
					},
					{
						name: 'tn - Tunisia',
						value: 'tn',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'tr - Turkey',
						value: 'tr',
					},
					{
						name: 'tt - Trinidad and Tobago',
						value: 'tt',
					},
					{
						name: 'tv - Tuvalu',
						value: 'tv',
					},
					{
						name: 'tw - Taiwan, Province of China',
						value: 'tw',
					},
					{
						name: 'tz - Tanzania, United Republic of',
						value: 'tz',
					},
					{
						name: 'ua - Ukraine',
						value: 'ua',
					},
					{
						name: 'ug - Uganda',
						value: 'ug',
					},
					{
						name: 'uk - United Kingdom',
						value: 'uk',
					},
					{
						name: 'um - United States Minor Outlying Islands',
						value: 'um',
					},
					{
						name: 'us - United States',
						value: 'us',
					},
					{
						name: 'uy - Uruguay',
						value: 'uy',
					},
					{
						name: 'uz - Uzbekistan',
						value: 'uz',
					},
					{
						name: 'va - Holy See (Vatican City State)',
						value: 'va',
					},
					{
						name: 'vc - Saint Vincent and the Grenadines',
						value: 'vc',
					},
					{
						name: 've - Venezuela',
						value: 've',
					},
					{
						name: 'vg - Virgin Islands, British',
						value: 'vg',
					},
					{
						name: 'vi - Virgin Islands, U.S.',
						value: 'vi',
					},
					{
						name: 'vn - Viet Nam',
						value: 'vn',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 'wf - Wallis and Futuna',
						value: 'wf',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'ye - Yemen',
						value: 'ye',
					},
					{
						name: 'yt - Mayotte',
						value: 'yt',
					},
					{
						name: 'za - South Africa',
						value: 'za',
					},
					{
						name: 'zm - Zambia',
						value: 'zm',
					},
					{
						name: 'zw - Zimbabwe',
						value: 'zw',
					},
				],
			},
			{
				displayName: 'Language',
				name: 'hl',
				type: 'options',
				default: 'en',
				description: 'The two-letter language code for the language you want to use for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
				options: [
					{
						name: 'ach - Luo',
						value: 'ach',
					},
					{
						name: 'af - Afrikaans',
						value: 'af',
					},
					{
						name: 'ak - Akan',
						value: 'ak',
					},
					{
						name: 'am - Amharic',
						value: 'am',
					},
					{
						name: 'ar - Arabic',
						value: 'ar',
					},
					{
						name: 'az - Azerbaijani',
						value: 'az',
					},
					{
						name: 'be - Belarusian',
						value: 'be',
					},
					{
						name: 'bem - Bemba',
						value: 'bem',
					},
					{
						name: 'bg - Bulgarian',
						value: 'bg',
					},
					{
						name: 'bh - Bihari',
						value: 'bh',
					},
					{
						name: 'bn - Bengali',
						value: 'bn',
					},
					{
						name: 'br - Breton',
						value: 'br',
					},
					{
						name: 'bs - Bosnian',
						value: 'bs',
					},
					{
						name: 'bt - Bhutanese',
						value: 'bt',
					},
					{
						name: 'ca - Catalan',
						value: 'ca',
					},
					{
						name: 'chr - Cherokee',
						value: 'chr',
					},
					{
						name: 'ckb - Kurdish (Soranî)',
						value: 'ckb',
					},
					{
						name: 'co - Corsican',
						value: 'co',
					},
					{
						name: 'crs - Seychellois Creole',
						value: 'crs',
					},
					{
						name: 'cs - Czech',
						value: 'cs',
					},
					{
						name: 'cy - Welsh',
						value: 'cy',
					},
					{
						name: 'da - Danish',
						value: 'da',
					},
					{
						name: 'de - German',
						value: 'de',
					},
					{
						name: 'ee - Ewe',
						value: 'ee',
					},
					{
						name: 'el - Greek',
						value: 'el',
					},
					{
						name: 'en - English',
						value: 'en',
					},
					{
						name: 'eo - Esperanto',
						value: 'eo',
					},
					{
						name: 'es - Spanish',
						value: 'es',
					},
					{
						name: 'es-419 - Spanish (Latin American)',
						value: 'es-419',
					},
					{
						name: 'et - Estonian',
						value: 'et',
					},
					{
						name: 'eu - Basque',
						value: 'eu',
					},
					{
						name: 'fa - Persian',
						value: 'fa',
					},
					{
						name: 'fi - Finnish',
						value: 'fi',
					},
					{
						name: 'fil - Filipino',
						value: 'fil',
					},
					{
						name: 'fo - Faroese',
						value: 'fo',
					},
					{
						name: 'fr - French',
						value: 'fr',
					},
					{
						name: 'fy - Frisian',
						value: 'fy',
					},
					{
						name: 'ga - Irish',
						value: 'ga',
					},
					{
						name: 'gaa - Ga',
						value: 'gaa',
					},
					{
						name: 'gd - Scots Gaelic',
						value: 'gd',
					},
					{
						name: 'gl - Galician',
						value: 'gl',
					},
					{
						name: 'gn - Guarani',
						value: 'gn',
					},
					{
						name: 'gu - Gujarati',
						value: 'gu',
					},
					{
						name: 'ha - Hausa',
						value: 'ha',
					},
					{
						name: 'haw - Hawaiian',
						value: 'haw',
					},
					{
						name: 'hi - Hindi',
						value: 'hi',
					},
					{
						name: 'hr - Croatian',
						value: 'hr',
					},
					{
						name: 'ht - Haitian Creole',
						value: 'ht',
					},
					{
						name: 'hu - Hungarian',
						value: 'hu',
					},
					{
						name: 'hy - Armenian',
						value: 'hy',
					},
					{
						name: 'ia - Interlingua',
						value: 'ia',
					},
					{
						name: 'id - Indonesian',
						value: 'id',
					},
					{
						name: 'ig - Igbo',
						value: 'ig',
					},
					{
						name: 'is - Icelandic',
						value: 'is',
					},
					{
						name: 'it - Italian',
						value: 'it',
					},
					{
						name: 'iw - Hebrew',
						value: 'iw',
					},
					{
						name: 'ja - Japanese',
						value: 'ja',
					},
					{
						name: 'jw - Javanese',
						value: 'jw',
					},
					{
						name: 'ka - Georgian',
						value: 'ka',
					},
					{
						name: 'kg - Kongo',
						value: 'kg',
					},
					{
						name: 'kk - Kazakh',
						value: 'kk',
					},
					{
						name: 'kl - Greenlandic',
						value: 'kl',
					},
					{
						name: 'km - Cambodian',
						value: 'km',
					},
					{
						name: 'kn - Kannada',
						value: 'kn',
					},
					{
						name: 'ko - Korean',
						value: 'ko',
					},
					{
						name: 'kri - Krio (Sierra Leone)',
						value: 'kri',
					},
					{
						name: 'ku - Kurdish',
						value: 'ku',
					},
					{
						name: 'ky - Kyrgyz',
						value: 'ky',
					},
					{
						name: 'la - Latin',
						value: 'la',
					},
					{
						name: 'lg - Luganda',
						value: 'lg',
					},
					{
						name: 'ln - Lingala',
						value: 'ln',
					},
					{
						name: 'lo - Laothian',
						value: 'lo',
					},
					{
						name: 'loz - Lozi',
						value: 'loz',
					},
					{
						name: 'lt - Lithuanian',
						value: 'lt',
					},
					{
						name: 'lua - Tshiluba',
						value: 'lua',
					},
					{
						name: 'lv - Latvian',
						value: 'lv',
					},
					{
						name: 'mfe - Mauritian Creole',
						value: 'mfe',
					},
					{
						name: 'mg - Malagasy',
						value: 'mg',
					},
					{
						name: 'mi - Maori',
						value: 'mi',
					},
					{
						name: 'mk - Macedonian',
						value: 'mk',
					},
					{
						name: 'ml - Malayalam',
						value: 'ml',
					},
					{
						name: 'mn - Mongolian',
						value: 'mn',
					},
					{
						name: 'mo - Moldavian',
						value: 'mo',
					},
					{
						name: 'mr - Marathi',
						value: 'mr',
					},
					{
						name: 'ms - Malay',
						value: 'ms',
					},
					{
						name: 'mt - Maltese',
						value: 'mt',
					},
					{
						name: 'mv - Maldives',
						value: 'mv',
					},
					{
						name: 'my - Myanmar',
						value: 'my',
					},
					{
						name: 'ne - Nepali',
						value: 'ne',
					},
					{
						name: 'nl - Dutch',
						value: 'nl',
					},
					{
						name: 'nn - Norwegian (Nynorsk)',
						value: 'nn',
					},
					{
						name: 'no - Norwegian',
						value: 'no',
					},
					{
						name: 'nso - Northern Sotho',
						value: 'nso',
					},
					{
						name: 'ny - Chichewa',
						value: 'ny',
					},
					{
						name: 'nyn - Runyakitara',
						value: 'nyn',
					},
					{
						name: 'oc - Occitan',
						value: 'oc',
					},
					{
						name: 'om - Oromo',
						value: 'om',
					},
					{
						name: 'or - Oriya',
						value: 'or',
					},
					{
						name: 'pa - Punjabi',
						value: 'pa',
					},
					{
						name: 'pcm - Nigerian Pidgin',
						value: 'pcm',
					},
					{
						name: 'pl - Polish',
						value: 'pl',
					},
					{
						name: 'ps - Pashto',
						value: 'ps',
					},
					{
						name: 'pt - Portuguese',
						value: 'pt',
					},
					{
						name: 'pt-br - Portuguese (Brazil)',
						value: 'pt-br',
					},
					{
						name: 'pt-pt - Portuguese (Portugal)',
						value: 'pt-pt',
					},
					{
						name: 'qu - Quechua',
						value: 'qu',
					},
					{
						name: 'rm - Romansh',
						value: 'rm',
					},
					{
						name: 'rn - Kirundi',
						value: 'rn',
					},
					{
						name: 'ro - Romanian',
						value: 'ro',
					},
					{
						name: 'ru - Russian',
						value: 'ru',
					},
					{
						name: 'rw - Kinyarwanda',
						value: 'rw',
					},
					{
						name: 'sd - Sindhi',
						value: 'sd',
					},
					{
						name: 'sh - Serbo-Croatian',
						value: 'sh',
					},
					{
						name: 'si - Sinhalese',
						value: 'si',
					},
					{
						name: 'sk - Slovak',
						value: 'sk',
					},
					{
						name: 'sl - Slovenian',
						value: 'sl',
					},
					{
						name: 'sn - Shona',
						value: 'sn',
					},
					{
						name: 'so - Somali',
						value: 'so',
					},
					{
						name: 'sq - Albanian',
						value: 'sq',
					},
					{
						name: 'sr - Serbian',
						value: 'sr',
					},
					{
						name: 'sr-me - Montenegrin',
						value: 'sr-me',
					},
					{
						name: 'st - Sesotho',
						value: 'st',
					},
					{
						name: 'su - Sundanese',
						value: 'su',
					},
					{
						name: 'sv - Swedish',
						value: 'sv',
					},
					{
						name: 'sw - Swahili',
						value: 'sw',
					},
					{
						name: 'ta - Tamil',
						value: 'ta',
					},
					{
						name: 'te - Telugu',
						value: 'te',
					},
					{
						name: 'tg - Tajik',
						value: 'tg',
					},
					{
						name: 'th - Thai',
						value: 'th',
					},
					{
						name: 'ti - Tigrinya',
						value: 'ti',
					},
					{
						name: 'tk - Turkmen',
						value: 'tk',
					},
					{
						name: 'tl - Filipino',
						value: 'tl',
					},
					{
						name: 'tn - Setswana',
						value: 'tn',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'tr - Turkish',
						value: 'tr',
					},
					{
						name: 'tt - Tatar',
						value: 'tt',
					},
					{
						name: 'tum - Tumbuka',
						value: 'tum',
					},
					{
						name: 'tw - Twi',
						value: 'tw',
					},
					{
						name: 'ug - Uighur',
						value: 'ug',
					},
					{
						name: 'uk - Ukrainian',
						value: 'uk',
					},
					{
						name: 'ur - Urdu',
						value: 'ur',
					},
					{
						name: 'uz - Uzbek',
						value: 'uz',
					},
					{
						name: 'vi - Vietnamese',
						value: 'vi',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 'wo - Wolof',
						value: 'wo',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'xh - Xhosa',
						value: 'xh',
					},
					{
						name: 'xx-bork - Bork, bork, bork!',
						value: 'xx-bork',
					},
					{
						name: 'xx-elmer - Elmer Fudd',
						value: 'xx-elmer',
					},
					{
						name: 'xx-hacker - Hacker',
						value: 'xx-hacker',
					},
					{
						name: 'xx-klingon - Klingon',
						value: 'xx-klingon',
					},
					{
						name: 'xx-pirate - Pirate',
						value: 'xx-pirate',
					},
					{
						name: 'yi - Yiddish',
						value: 'yi',
					},
					{
						name: 'yo - Yoruba',
						value: 'yo',
					},
					{
						name: 'zh-cn - Chinese (Simplified)',
						value: 'zh-cn',
					},
					{
						name: 'zh-hk - Hong Kong (Traditional)',
						value: 'zh-hk',
					},
					{
						name: 'zh-tw - Chinese (Traditional)',
						value: 'zh-tw',
					},
					{
						name: 'zu - Zulu',
						value: 'zu',
					},
				],
			},
			{
				displayName: 'Page Number (images)',
				name: 'ijn',
				type: 'number',
				default: '',
				description: 'Page number for paginated results, where 0 is the first page.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
			},
			{
				displayName: 'Advanced Search Parameters',
				name: 'tbs',
				type: 'string',
				default: '',
				description: '`tbs` parameter for the Google Images API customizes image search results with various filters that can be combined using commas. Here are the available options:\n\nImage Size Filters:\n  - `isz:l` - Search for large images.\n  - `isz:m` - Search for medium images.\n  - `isz:i` - Search for icon-sized images.\n  - `isz:lt,islt:qsvga` - Filter for images larger than 400×300.\n  - `isz:lt,islt:vga` - Filter for images larger than 640×480.\n  - `isz:lt,islt:svga` - Filter for images larger than 800×600.\n  - `isz:lt,islt:xga` - Filter for images larger than 1024×768.\n  - `isz:lt,islt:2mp` - Filter for images larger than 1600×1200.\n  - `isz:lt,islt:4mp` - Filter for images larger than 2272×1704.\n  - `isz:ex,iszw:1000,iszh:1000` - Search for images exactly 1000×1000.\n\nColor Filters:\n  - `ic:color` - Search for full-color images.\n  - `ic:gray` - Search for black and white images.\n  - `ic:specific,isc:red` (and other colors such as orange, yellow, green, etc.) - Search for images predominantly in specified colors.\n\nImage Type Filters:\n  - `itp:face` - Search for images of faces.\n  - `itp:photo` - Search for photographs.\n  - `itp:clipart` - Search for clipart images.\n  - `itp:lineart` - Search for line drawings.\n  - `itp:animated` - Search for animated images (GIFs).\n',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
			},
			{
				displayName: 'Adult Content Filtering',
				name: 'safe',
				type: 'options',
				default: '',
				description: 'Adult Content Filtering option.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
				options: [
					{
						name: 'active',
						value: 'active',
					},
					{
						name: 'off',
						value: 'off',
					},
				],
			},
			{
				displayName: 'Results Filtering',
				name: 'filter',
				type: 'number',
				default: '',
				description: 'Defines whether to enable or disable the filters for \'Similar Results\' and \'Omitted Results\'. Set to 1 (default) to enable these filters, or 0 to disable them.\n',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
			},
			{
				displayName: 'Device',
				name: 'deviceType',
				type: 'options',
				default: '',
				description: 'Specify the device type for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'images',
						],
					},
				},
				options: [
					{
						name: 'desktop',
						value: 'desktop',
					},
					{
						name: 'mobile',
						value: 'mobile',
					},
					{
						name: 'tablet',
						value: 'tablet',
					},
				],
			},
		],
	},
];
