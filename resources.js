// This file is needed because vite doesn't like dynamic import when exporting tauri ...

import achievements_en from './achievements/en.json';
import equipments_en from './equipments/en.json';
import contracts_en from './contracts/en.json';
import credits_en from './credits/en.json';
import durations_en from './durations/en.json';
import features_en from './features/en.json';
import feedback_en from './feedback/en.json';
import leaderboard_en from './leaderboard/en.json';
import login_popup_en from './login_popup/en.json';
import menu_en from './menu/en.json';
import resources_en from './resources/en.json';
import settings_en from './settings/en.json';
import tutorials_en from './tutorials/en.json';
import user_market_history_en from './user_market_history/en.json';
import ui_en from './ui/en.json';

import achievements_fr from './achievements/fr.json';
import equipments_fr from './equipments/fr.json';
import contracts_fr from './contracts/fr.json';
import credits_fr from './credits/fr.json';
import durations_fr from './durations/fr.json';
import features_fr from './features/fr.json';
import feedback_fr from './feedback/fr.json';
import leaderboard_fr from './leaderboard/fr.json';
import login_popup_fr from './login_popup/fr.json';
import menu_fr from './menu/fr.json';
import resources_fr from './resources/fr.json';
import settings_fr from './settings/fr.json';
import tutorials_fr from './tutorials/fr.json';
import user_market_history_fr from './user_market_history/fr.json';
import ui_fr from './ui/fr.json';

import achievements_pl from './achievements/pl.json';
import equipments_pl from './equipments/pl.json';
import contracts_pl from './contracts/pl.json';
import credits_pl from './credits/pl.json';
import durations_pl from './durations/pl.json';
import features_pl from './features/pl.json';
import feedback_pl from './feedback/pl.json';
import leaderboard_pl from './leaderboard/pl.json';
import login_popup_pl from './login_popup/pl.json';
import menu_pl from './menu/pl.json';
import resources_pl from './resources/pl.json';
import settings_pl from './settings/pl.json';
import tutorials_pl from './tutorials/pl.json';
import user_market_history_pl from './user_market_history/pl.json';
import ui_pl from './ui/pl.json';

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
	leaderboard: leaderboard_en,
	login_popup: login_popup_en,
	menu: menu_en,
	resources: resources_en,
	settings: settings_en,
	user_market_history: user_market_history_en,
	tutorials: tutorials_en,
	ui: ui_en,
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
	leaderboard: leaderboard_fr,
	login_popup: login_popup_fr,
	menu: menu_fr,
	resources: resources_fr,
	settings: settings_fr,
	user_market_history: user_market_history_fr,
	tutorials: tutorials_fr,
	ui: ui_fr,
};
resources['pl'] = {
	achievements: achievements_pl,
	equipments: equipments_pl,
	contracts: contracts_pl,
	credits: credits_pl,
	durations: durations_pl,
	features: features_pl,
	feedback: feedback_pl,
	languages: config.languages,
	leaderboard: leaderboard_pl,
	login_popup: login_popup_pl,
	menu: menu_pl,
	resources: resources_pl,
	settings: settings_pl,
	user_market_history: user_market_history_pl,
	tutorials: tutorials_pl,
	ui: ui_pl,
};

export default resources;