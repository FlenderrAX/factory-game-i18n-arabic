// This file is needed because vite doesn't like dynamic import when exporting tauri ...

import achievements_en from './achievements/en.json';
import equipments_en from './equipments/en.json';
import contracts_en from './contracts/en.json';
import credits_en from './credits/en.json';
import durations_en from './durations/en.json';
import features_en from './features/en.json';
import feedback_en from './feedback/en.json';
import menu_en from './menu/en.json';
import resources_en from './resources/en.json';
import settings_en from './settings/en.json';
import user_market_history_en from './user_market_history/en.json';

import achievements_fr from './achievements/fr.json';
import equipments_fr from './equipments/fr.json';
import contracts_fr from './contracts/fr.json';
import credits_fr from './credits/fr.json';
import durations_fr from './durations/fr.json';
import features_fr from './features/fr.json';
import feedback_fr from './feedback/fr.json';
import menu_fr from './menu/fr.json';
import resources_fr from './resources/fr.json';
import settings_fr from './settings/fr.json';
import user_market_history_fr from './user_market_history/fr.json';

import config from './config.json';

const resources = {};
resources['en'] = {
	achievements: achievements_en,
	equipments: equipments_en,
	contracts: contracts_en,
	credits: credits_en,
	durations: durations_en,
	features: features_en,
	feedback: feedback_en,
	languages: config.languages,
	menu: menu_en,
	resources: resources_en,
	settings: settings_en,
	user_market_history: user_market_history_en,
};
resources['fr'] = {
	achievements: achievements_fr,
	equipments: equipments_fr,
	contracts: contracts_fr,
	credits: credits_fr,
	durations: durations_fr,
	features: features_fr,
	feedback: feedback_fr,
	languages: config.languages,
	menu: menu_fr,
	resources: resources_fr,
	settings: settings_fr,
	user_market_history: user_market_history_fr,
};

export default resources;