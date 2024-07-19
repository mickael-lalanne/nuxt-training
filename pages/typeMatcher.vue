<template>
    <TypeSelector
        :label="'Choose a type'"
        @typeSelected="(type) => console.log(type)"
    />
</template>
