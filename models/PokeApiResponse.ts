export type PokeApiPokemon = {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
};

export type PokeApiResponse = {
    pokemon: PokeApiPokemon[];
};
