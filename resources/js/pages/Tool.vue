<template>
    <div class="nova-tw">
        <Head title="Changelog" />

        <Heading class="mb-6">{{ __("Changelog") }}</Heading>

        <Card
            class="px-6 pt-4 pb-2 mb-4"
            v-for="changelogData in changelogDatas"
            v-bind:key="changelogData.id"
        >
            <div class="float-right text-xs font-light">
                {{ changelogData.date }}
            </div>

            <h3 class="mb-3 text-base font-bold tracking-wide uppercase">
                {{ changelogData.title }}
            </h3>

            <div
                class=""
                v-for="component in changelogData.components"
                v-bind:key="component.id"
            >
                <p
                    class="mb-1 font-bold"
                    v-bind:class="{
                        'text-green-600': component.subTitle == 'Added',
                        'text-yellow-600': component.subTitle == 'Changed',
                        'text-red-600': component.subTitle == 'Fixed',
                    }"
                >
                    {{ component.subTitle }}
                </p>

                <ul class="mb-3 list-disc list-inside">
                    <li
                        class=""
                        v-for="list in component.list"
                        v-bind:key="list.id"
                    >
                        {{ list }}
                    </li>
                </ul>
            </div>
        </Card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            changelogDatas: "",
        };
    },
    mounted() {
        this.fetch();
    },
    methods: {
        async fetch() {
            this.changelogDatas = (
                await Nova.request().get(
                    "/nova-vendor/nova-changelog/nova-changelog"
                )
            ).data;
        },
    },
};
</script>

<style>
/* Scoped Styles */
</style>
