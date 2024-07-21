import { EType } from '~/models/Type';

const POKE_API_URL: string = 'https://pokeapi.co/api/v2';

export default defineCachedEventHandler(
    async (event) => {
        const pkmType: EType = getRouterParam(event, 'type') as EType;

        return await $fetch(`${POKE_API_URL}/type/${pkmType}`);
    },
    { maxAge: 60 * 60 * 24 }
); // 24 hours
