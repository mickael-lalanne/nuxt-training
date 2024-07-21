<template>
    <div class="m-12">
        <TypeSelector
            :label="'Choose a type'"
            @typeSelected="(type) => onTypeSelected(type)"
        />

        <UTable :rows="pokemonList" />
    </div>
</template>

<script setup lang="ts">
import type {
    PokeApiResponse,
    PokeApiPokemon,
} from '../models/PokeApiResponse';
import type { EType } from '../models/Type';

const onTypeSelected = async (type: EType): Promise<void> => {
    const { data } = await useFetch<PokeApiResponse>(`/api/pokemon/${type.toLowerCase()}`);
    pokemonList.value = data.value ? data.value.pokemon : [];
};

const pokemonList = ref<PokeApiPokemon[]>([]);
</script>
