import dotenv from 'dotenv';
dotenv.config();

export module Endpoints {
    export const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather'
    export const dailyForecastURL = 'https://api.openweathermap.org/data/2.5/forecast';
    export const weeklyForecastURL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    export const geocodingDirectURL = 'http://api.openweathermap.org/geo/1.0/direct';
    export const geocodingReverseURL = 'http://api.openweathermap.org/geo/1.0/reverse';
}

export module Config {
    export const prefix = '$';
}

export module AppConfiguration {
    export const BOT_RELEASE_VERSION = process.env['botReleaseVersion'] || undefined;
    export const BOT_RELEASE_REASON = process.env['botReleaseReason'] || undefined;
    export const BOT_RELEASE_DESCRIPTION = process.env['botReleaseDescription'] || undefined;
    export const BOT_RELEASE_COMMIT = process.env['botReleaseCommit'] || undefined;
}
export module Strings {
    export const teapot =
        "```\n" +
        '                       (\n' +
        '            _           ) )\n' +
        '         _,(_)._        ((\n' +
        "    ___,(_______).        )\n" +
        "  ,'__.   /       \\    /\\_\n" +
        ` /,' /  |""|       \\  /  /\n` +
        "| | |   |__|       |,'  /\n" +
        " \\`.|                  /\n" +
        "  `. :           :    /\n" +
        "    `.            :.,'\n" +
        "      `-.________,-'\n" +
        "```";

    export const coffee = '`HTTP ERR: 418 - I am a teapot`';
    export const newIssueURL = 'https://github.com/reddit-seattle/seabot/issues/new/choose';
    export const feedbackText = 'See an issue? Want to request a feature?';
}

export module Environment {
    export const botToken = process.env['botToken'] || undefined;
    export const DEBUG = process.env['seabotDEBUG'] || undefined;
    export const weatherAPIKey = process.env['weatherAPIKey'] || undefined;
}
export module VoiceConstants {
    export const groupName = 'user-voice-channels'
    export const VOICE_TYPE = 'voice';
    export const enum Permissions {
        MOVE = 'MOVE_MEMBERS',
        MUTE = 'MUTE_MEMBERS',
        DEAFEN = 'DEAFEN_MEMBERS',
        MANAGE_CHANNELS = 'MANAGE_CHANNELS'
    }
}

export module ServerInfo {
    export module Valheim  {
        export const serverName = '/r/Seattle valheim dedicated';
        export const ipAddress = '20.57.179.81';
        export const access = process.env['valheim_server_password']
    }
}
