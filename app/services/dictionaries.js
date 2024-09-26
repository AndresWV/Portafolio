// Importación para uso en servidor
import 'server-only';

const dictionaries = {
    en: () => import('../../public/dictionaries/en.json').then((module) => module.default),
    es: () => import('../../public/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if (!dictionaries[locale]) {
        throw new Error(`Dictionary for locale "${locale}" not found.`);
    }
    return await dictionaries[locale]();
};