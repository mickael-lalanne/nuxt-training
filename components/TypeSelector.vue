<template>
    <div class="m-7 h-50 w-fit">
        <UPopover :popper="{ placement: 'bottom-end' }">
            <UButton
                color="white"
                :label="label"
                trailing-icon="i-heroicons-chevron-down-20-solid"
            />

            <template #panel>
                <div class="w-96 flex flex-wrap items-center justify-center">
                    <div v-for="pokemonType in types" class="m-1">
                        <NuxtImg
                            :src="`/images/types/${pokemonType.toLowerCase()}.png`"
                            :alt="pokemonType"
                            class="h-6 cursor-pointer"
                            @click="() => $emit('typeSelected', pokemonType)"
                        />
                    </div>
                </div>
            </template>
        </UPopover>
    </div>
</template>

<script setup lang="ts">
import { EType } from '../models/Type';

defineProps<{
    label: string;
}>();

defineEmits<{
    typeSelected: [type: EType]
}>()

const types = ref(Object.values(EType));
</script>
