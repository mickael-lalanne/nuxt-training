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

<script lang="ts">
import { defineComponent } from 'vue';
import { EType } from '../models/Type';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
    },
    emits: {
        typeSelected: (type: EType) => true,
    
    },
    setup() {
        const types: Ref<EType[]> = ref(Object.values(EType));

        return {
            types,
        };
    },
});
</script>
