<template>
    <div class="m-12 flex flex-col justify-center items-center">
        <h1 class="text-2xl font-bold text-center mb-2">Type Chart</h1>

        <div class="flex align-center">
            <div class="w-10 m-0.5 chart-col"></div>
            <div
                v-for="typeHeader in types"
                class="w-10 m-0.5 chart-col flex items-end justify-center text-xs"
            >
                {{ typeHeader }}
            </div>
        </div>
        <div v-for="typeRow in types" class="flex">
            <div
                class="w-10 m-0.5 chart-col flex items-center justify-end pr-1 text-xs"
            >
                {{ typeRow }}
            </div>
            <div
                v-for="(typeCol, i) in types"
                class="w-10 m-0.5 chart-col flex justify-center items-center"
                :class="getEffectivenessColor(typeRow, typeCol)"
            >
                {{ getTypeEffectiveness(typeRow, typeCol) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EType } from '../models/Type';

const types = ref(Object.values(EType));

const { data } = await useAsyncData('weaknesses', () =>
    queryContent('/weaknesses').findOne()
);

const getTypeEffectiveness = (
    offenseType: EType,
    defenseType: EType
): string => {
    const effectiveness = (data.value as any)[offenseType][defenseType];
    return 'x' + effectiveness;
};

const getEffectivenessColor = (offenseType: EType, defenseType: EType) => {
    const effectiveness = (data.value as any)[offenseType][defenseType];

    switch (effectiveness) {
        case 0:
            return 'bg-red-700';
        case 0.5:
            return 'bg-yellow-700';
        case 2:
            return 'bg-green-700';
        case 1:
        default:
            return 'bg-slate-700';
    }
};
</script>

<style scoped>
.chart-col {
    aspect-ratio: 1;
}
</style>
